import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import { posts, categories, tags, postTags, redirects } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { LikeButton } from "@/components/blog/LikeButton";
import { HiUser, HiCalendar, HiClock, HiArrowLeft } from "react-icons/hi2";
import type { Metadata } from "next";

function formatPublishedDate(d: Date | null | undefined): string {
  if (!d) return "";
  return new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Singapore",
  }).format(d);
}

export const dynamic = "force-dynamic";

function stripLeadingImage(html: string, featuredImage: string | null | undefined): string {
  if (!html || !featuredImage) return html;
  const match = html.match(/^\s*(?:<p[^>]*>\s*)?<img[^>]*src=["']([^"']+)["'][^>]*>\s*(?:<\/p>)?/i);
  if (!match) return html;
  const src = match[1];
  if (featuredImage && src !== featuredImage) return html;
  return html.slice(match[0].length);
}

async function getPost(slug: string) {
  const [p] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .limit(1);
  return p;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found" };
  const canonical = post.canonicalUrl ?? `/blog/${post.slug}`;
  const ogImage = post.ogImage ?? post.featuredImage ?? "/icon-192.png";
  return {
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
    keywords: post.seoKeywords ?? undefined,
    alternates: { canonical },
    robots: post.noIndex ? { index: false } : undefined,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt ?? undefined,
      images: [ogImage],
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      locale: "en_SG",
      siteName: "Tertiary Infotech Academy",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt ?? undefined,
      images: [ogImage],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    // Honour the redirects table (e.g. a renamed post slug) before 404'ing.
    const [redir] = await db
      .select()
      .from(redirects)
      .where(eq(redirects.fromPath, `/blog/${slug}`))
      .limit(1);
    // 308 (permanent) so Google consolidates link equity onto the new URL.
    // `redirect()` would emit a 307 and leave the legacy URL indexed.
    if (redir) permanentRedirect(redir.toPath);
    notFound();
  }

  // Keep taxonomy as plain text links in the shared article header.
  const [category, tagRows] = await Promise.all([
    post.categoryId
      ? db
          .select({ slug: categories.slug, name: categories.name })
          .from(categories)
          .where(eq(categories.id, post.categoryId))
          .limit(1)
          .then((rows) => rows[0] ?? null)
      : Promise.resolve(null),
    db
      .select({ slug: tags.slug, name: tags.name })
      .from(postTags)
      .innerJoin(tags, eq(tags.id, postTags.tagId))
      .where(eq(postTags.postId, post.id)),
  ]);

  // Older imports may contain their own H1s; keep the page title as the single H1.
  const bodyHtml = stripLeadingImage(post.contentHtml ?? "", post.featuredImage)
    .replace(/<(\/?)h1(\s[^>]*|)>/gi, "<$1h2$2>");
  const readingTime = post.readingTime && post.readingTime > 0
    ? post.readingTime
    : Math.max(1, Math.ceil(bodyHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length / 220));

  const SITE_URL = "https://www.tertiaryinfotech.com";
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: (post.updatedAt ?? post.publishedAt)?.toISOString(),
    image: post.featuredImage ? new URL(post.featuredImage, SITE_URL).toString() : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: {
      "@type": "Organization",
      name: "Tertiary Infotech Academy",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Tertiary Infotech Academy",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <Container className="blog-page">
          <article className="blog-article" data-blog-layout="editorial">
            {post.featuredImage && (
              <figure className="blog-article-cover">
                {/* Existing covers retain their complete artwork and natural aspect ratio. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  width={1200}
                  height={750}
                  fetchPriority="high"
                  decoding="async"
                />
              </figure>
            )}
            <header className="blog-article-header">
              <nav aria-label="Breadcrumb" className="blog-article-breadcrumb">
                <Link href="/blog">Journal</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{post.title}</span>
              </nav>
              <h1>{post.title}</h1>
              <div className="blog-article-meta">
                <span>
                  <HiUser aria-hidden="true" />
                  Tertiary Infotech Academy
                </span>
                {post.publishedAt && (
                  <time dateTime={post.publishedAt.toISOString()}>
                    <HiCalendar aria-hidden="true" />
                    {formatPublishedDate(post.publishedAt)}
                  </time>
                )}
                <span>
                  <HiClock aria-hidden="true" />
                  {readingTime} min read
                </span>
              </div>
              {(category || tagRows.length > 0) && (
                <div className="blog-article-taxonomy" aria-label="Article topics">
                  {category && (
                    <Link href={`/blog?category=${category.slug}`} className="blog-article-category">
                      {category.name}
                    </Link>
                  )}
                  {tagRows.map((t) => (
                    <Link key={t.slug} href={`/blog?tag=${t.slug}`}>
                      {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </header>
            <div className="blog-article-actions">
              <ShareButtons url={postUrl} title={post.title} />
              <LikeButton slug={post.slug} initialCount={post.likeCount ?? 0} />
            </div>
            <div
              className="prose-dark blog-article-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
            <nav className="blog-article-footer" aria-label="More articles">
              <Link href="/blog">
                <HiArrowLeft aria-hidden="true" />
                Back to all articles
              </Link>
            </nav>
          </article>
        </Container>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

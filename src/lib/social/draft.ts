/**
 * Generate the initial draft copy for a social post from a blog row.
 * No LLM — deterministic, fast, runs synchronously in the publish path so the
 * editor can decide if they want to keep, edit, or reject before scheduling.
 *
 * LinkedIn drafts are long-form (title hook + excerpt + 3–5 hashtags).
 * Facebook drafts are shorter and conversational with one hashtag at most.
 */

import { db } from "@/db";
import { posts, postTags, tags, socialPosts } from "@/db/schema";
import { eq } from "drizzle-orm";

const SITE_BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tertiaryinfotech.com";

function toHashtag(slug: string): string {
  return (
    "#" +
    slug
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("")
  );
}

function linkedinDraft(opts: {
  title: string;
  excerpt: string;
  url: string;
  hashtags: string[];
}): string {
  const tagLine = opts.hashtags.slice(0, 5).join(" ");
  return [
    `${opts.title}`,
    "",
    opts.excerpt,
    "",
    `Read the full piece: ${opts.url}`,
    "",
    tagLine,
  ]
    .filter((l) => l.length > 0 || l === "")
    .join("\n")
    .trim();
}

function facebookDraft(opts: {
  title: string;
  excerpt: string;
  url: string;
  hashtags: string[];
}): string {
  const tag = opts.hashtags[0] ?? "";
  const body = opts.excerpt.length > 280
    ? opts.excerpt.slice(0, 277).trimEnd() + "…"
    : opts.excerpt;
  return [
    `${opts.title} — ${body}`,
    "",
    opts.url,
    tag,
  ]
    .filter(Boolean)
    .join("\n")
    .trim();
}

export async function createDraftSocialPosts(postId: number): Promise<number[]> {
  const [post] = await db.select().from(posts).where(eq(posts.id, postId));
  if (!post) return [];

  // Already queued? Skip — never duplicate drafts for the same post.
  const existing = await db
    .select({ id: socialPosts.id })
    .from(socialPosts)
    .where(eq(socialPosts.postId, postId));
  if (existing.length > 0) return existing.map((r) => r.id);

  const tagRows = await db
    .select({ slug: tags.slug })
    .from(postTags)
    .innerJoin(tags, eq(tags.id, postTags.tagId))
    .where(eq(postTags.postId, postId));
  const hashtags = tagRows.map((t) => toHashtag(t.slug));

  const url = `${SITE_BASE}/blog/${post.slug}`;
  const excerpt = (post.excerpt ?? "").trim();
  const title = post.title.trim();

  const liContent = linkedinDraft({ title, excerpt, url, hashtags });
  const fbContent = facebookDraft({ title, excerpt, url, hashtags });

  const now = new Date();
  const inserted = await db
    .insert(socialPosts)
    .values([
      {
        postId,
        platform: "linkedin",
        status: "draft",
        content: liContent,
        imageUrl: post.featuredImage,
        linkUrl: url,
        createdAt: now,
        updatedAt: now,
      },
      {
        postId,
        platform: "facebook",
        status: "draft",
        content: fbContent,
        imageUrl: post.featuredImage,
        linkUrl: url,
        createdAt: now,
        updatedAt: now,
      },
    ])
    .returning({ id: socialPosts.id });
  return inserted.map((r) => r.id);
}

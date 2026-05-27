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

function toHashtag(input: string): string {
  return (
    "#" +
    input
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("")
      .replace(/[^A-Za-z0-9]/g, "")
  );
}

// Very small stop-word list so #The / #With / #From don't slip into the tag line.
const STOPWORDS = new Set([
  "the","a","an","and","or","but","of","for","to","with","from","in","on","at",
  "by","is","are","was","were","be","been","being","as","that","this","these",
  "those","it","its","into","over","under","via","your","you","our","we","they",
  "their","his","her","he","she","i","my","me","new","best","top","how","why",
  "what","when","where","vs","than","then","so","such","one","two","also","not",
]);

/**
 * Pull capitalised multi-word phrases and proper nouns from the title — these
 * are usually the named entities a reader would actually search for.
 */
function hashtagsFromTitle(title: string, max: number): string[] {
  const cleaned = title.replace(/[—–]/g, " ").replace(/[^A-Za-z0-9 ]/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean);
  const out: string[] = [];
  let phrase: string[] = [];
  const flush = () => {
    if (phrase.length === 0) return;
    out.push("#" + phrase.join(""));
    phrase = [];
  };
  for (const w of words) {
    const isCapitalised = /^[A-Z]/.test(w) && !STOPWORDS.has(w.toLowerCase());
    if (isCapitalised) {
      phrase.push(w);
    } else {
      flush();
    }
  }
  flush();
  // Also include any uppercase acronyms (e.g. SSG, WSQ, AI, ML, TPQA).
  for (const w of words) {
    if (/^[A-Z]{2,}$/.test(w) && !out.includes("#" + w)) out.push("#" + w);
  }
  return out.slice(0, max);
}

const ALWAYS_INCLUDE = ["#TertiaryInfotechAcademy", "#Singapore"];

function buildHashtags(opts: {
  title: string;
  tagSlugs: string[];
  max: number;
}): string[] {
  const fromTags = opts.tagSlugs.map(toHashtag).filter((t) => t.length > 1);
  const fromTitle = hashtagsFromTitle(opts.title, 4);
  // De-duplicate case-insensitively while preserving order: tags first, then
  // title-derived, then the always-include house tags.
  const seen = new Set<string>();
  const ordered = [...fromTags, ...fromTitle, ...ALWAYS_INCLUDE];
  const out: string[] = [];
  for (const t of ordered) {
    const k = t.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(t);
    if (out.length >= opts.max) break;
  }
  return out;
}

function linkedinDraft(opts: {
  title: string;
  excerpt: string;
  url: string;
  hashtags: string[];
}): string {
  // LinkedIn caps hashtag impact around 5–8; 6 is a sensible default.
  const tagLine = opts.hashtags.slice(0, 6).join(" ");
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
  // Facebook rewards 2–3 focused hashtags more than a long string.
  const tagLine = opts.hashtags.slice(0, 3).join(" ");
  const body = opts.excerpt.length > 280
    ? opts.excerpt.slice(0, 277).trimEnd() + "…"
    : opts.excerpt;
  return [
    `${opts.title} — ${body}`,
    "",
    opts.url,
    tagLine,
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

  const url = `${SITE_BASE}/blog/${post.slug}`;
  const excerpt = (post.excerpt ?? "").trim();
  const title = post.title.trim();
  const hashtags = buildHashtags({
    title,
    tagSlugs: tagRows.map((t) => t.slug),
    max: 8,
  });

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

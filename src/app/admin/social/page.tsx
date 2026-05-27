import { db } from "@/db";
import { socialPosts, posts } from "@/db/schema";
import { desc, eq, inArray } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { SocialPostsTable, type SocialPostRow } from "@/components/admin/SocialPostsTable";
import { dispatchDueSocialPosts } from "@/lib/social/dispatch";

export const dynamic = "force-dynamic";

export default async function SocialPostsList() {
  const rows = await db
    .select({
      id: socialPosts.id,
      postId: socialPosts.postId,
      postSlug: posts.slug,
      postTitle: posts.title,
      platform: socialPosts.platform,
      status: socialPosts.status,
      content: socialPosts.content,
      imageUrl: socialPosts.imageUrl,
      linkUrl: socialPosts.linkUrl,
      scheduledAt: socialPosts.scheduledAt,
      publishedAt: socialPosts.publishedAt,
      externalUrl: socialPosts.externalUrl,
      errorMessage: socialPosts.errorMessage,
      attemptCount: socialPosts.attemptCount,
      createdAt: socialPosts.createdAt,
    })
    .from(socialPosts)
    .leftJoin(posts, eq(posts.id, socialPosts.postId))
    .orderBy(desc(socialPosts.createdAt));

  async function deleteMany(ids: number[]) {
    "use server";
    if (!Array.isArray(ids) || ids.length === 0) return;
    await db.delete(socialPosts).where(inArray(socialPosts.id, ids));
    revalidatePath("/admin/social");
  }

  async function updateRow(input: {
    id: number;
    content?: string;
    scheduledAt?: string | null;
    status?: SocialPostRow["status"];
  }) {
    "use server";
    const patch: Record<string, unknown> = { updatedAt: new Date() };
    if (typeof input.content === "string") patch.content = input.content;
    if (input.scheduledAt !== undefined) {
      patch.scheduledAt = input.scheduledAt ? new Date(input.scheduledAt) : null;
    }
    if (input.status) patch.status = input.status;
    await db.update(socialPosts).set(patch).where(eq(socialPosts.id, input.id));
    revalidatePath("/admin/social");
  }

  async function dispatchNow(ids: number[]) {
    "use server";
    if (!Array.isArray(ids) || ids.length === 0) return { picked: 0, published: 0, failed: 0, details: [] };
    const r = await dispatchDueSocialPosts({ ids });
    revalidatePath("/admin/social");
    return r;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Social</h1>
        <div className="flex items-center gap-4">
          <a
            href="/admin/settings/credentials"
            className="text-sm text-(--color-cyan) hover:underline"
          >
            Configure LinkedIn + Facebook credentials →
          </a>
          <span className="text-sm text-white/50 font-mono">[ {rows.length} total ]</span>
        </div>
      </div>
      <p className="text-sm text-(--color-muted) mb-6">
        When a blog post is published, a draft is queued here per platform.
        Edit the copy, pick a schedule time, and the cron dispatcher will
        publish it. <span className="font-mono text-xs">[ POST /api/cron/social-dispatch ]</span>{" "}
        runs every 5 minutes from Coolify cron.
      </p>
      <SocialPostsTable
        rows={rows.map((r) => ({
          id: r.id,
          postId: r.postId,
          postSlug: r.postSlug,
          postTitle: r.postTitle,
          platform: r.platform,
          status: r.status,
          content: r.content,
          imageUrl: r.imageUrl,
          linkUrl: r.linkUrl,
          scheduledAt: r.scheduledAt?.toISOString() ?? null,
          publishedAt: r.publishedAt?.toISOString() ?? null,
          externalUrl: r.externalUrl,
          errorMessage: r.errorMessage,
          attemptCount: r.attemptCount,
          createdAt: r.createdAt.toISOString(),
        }))}
        deleteMany={deleteMany}
        updateRow={updateRow}
        dispatchNow={dispatchNow}
      />
    </div>
  );
}

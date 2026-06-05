/**
 * One-off: restore production blog like counts after they were clobbered by a
 * push-to-remote run. The Qualcomm/OpenClaw post should be 134; every other
 * published post gets a random value in [10, 200] so the grid doesn't show 0s.
 *
 * Run: npx tsx --env-file=.env scripts/restore-prod-likes.ts
 */
import { db } from "../src/db";
import { posts } from "../src/db/schema";
import { eq } from "drizzle-orm";

const FIXED: Record<string, number> = {
  "human-ai-collaboration-autonomous-agents-openclaw-hermes-paperclip": 134,
};

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const baseUrl = process.env.REMOTE_SYNC_URL?.replace(/\/$/, "");
  if (!baseUrl) throw new Error("REMOTE_SYNC_URL is not set");
  const token = process.env.SYNC_API_TOKEN;
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const auth = token
    ? `Bearer ${token}`
    : email && password
    ? `Basic ${Buffer.from(`${email}:${password}`).toString("base64")}`
    : (() => {
        throw new Error("Need SYNC_API_TOKEN or ADMIN_EMAIL/ADMIN_PASSWORD");
      })();

  const all = await db.select({ slug: posts.slug, status: posts.status }).from(posts).where(eq(posts.status, "published"));
  const payload = all.map((p) => ({
    slug: p.slug,
    likeCount: FIXED[p.slug] ?? randInt(10, 200),
  }));

  console.log(`Restoring likes on ${payload.length} published posts (1 fixed, ${payload.length - Object.keys(FIXED).length} randomised)`);
  console.log("Fixed:", FIXED);

  const res = await fetch(`${baseUrl}/api/admin/sync/likes`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: auth },
    body: JSON.stringify({ likes: payload }),
  });
  const text = await res.text();
  console.log(`HTTP ${res.status} — ${text}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });

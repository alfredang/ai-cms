/**
 * Upload captured EdTool live-site screenshots to R2 and (re)generate
 * src/lib/edtools-screenshots.ts mapping slug → R2 public URL.
 *
 * Capture step (done separately via Playwright MCP) saves PNGs to
 * .agents/edtools-shots/<slug>.png. This script uploads each one under
 * R2 key `edtools/<slug>.png` and writes the generated map.
 *
 * Run:
 *   set -a; source .env; set +a; npx tsx scripts/upload-edtools-screenshots.ts
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { getR2Config, uploadToR2 } from "../src/lib/r2";
import { EDTOOLS } from "../src/lib/edtools-data";

const SHOTS_DIR = resolve(process.cwd(), ".agents/edtools-shots");
const OUT_FILE = resolve(process.cwd(), "src/lib/edtools-screenshots.ts");

async function main() {
  const cfg = await getR2Config();
  if (!cfg) {
    console.error("R2 is not configured (missing credentials). Aborting.");
    process.exit(1);
  }

  const validSlugs = new Set(EDTOOLS.map((t) => t.slug));
  const files = readdirSync(SHOTS_DIR).filter((f) => f.endsWith(".png"));
  const map: Record<string, string> = {};

  for (const file of files.sort()) {
    const slug = file.replace(/\.png$/, "");
    if (!validSlugs.has(slug)) {
      console.warn(`! skipping ${file} — no matching EdTool slug`);
      continue;
    }
    const buf = readFileSync(join(SHOTS_DIR, file));
    const url = await uploadToR2(cfg, `edtools/${slug}.png`, buf, "image/png");
    map[slug] = url;
    console.log(`✓ ${slug} → ${url} (${(buf.length / 1024).toFixed(0)} KB)`);
  }

  // Emit the map in slug order for a stable, reviewable diff.
  const entries = Object.keys(map)
    .sort()
    .map((slug) => `  ${JSON.stringify(slug)}: ${JSON.stringify(map[slug])},`)
    .join("\n");
  const out = `/**
 * GENERATED FILE — do not edit by hand.
 * Written by scripts/upload-edtools-screenshots.ts after capturing live screenshots
 * and uploading them to R2. Maps EdTool slug → R2 public image URL.
 */

export const EDTOOL_SCREENSHOTS: Record<string, string> = {
${entries}
};
`;
  writeFileSync(OUT_FILE, out);

  const missing = EDTOOLS.filter((t) => !map[t.slug]).map((t) => t.slug);
  console.log(`\nUploaded ${Object.keys(map).length}/${EDTOOLS.length} screenshots.`);
  if (missing.length) console.log(`Missing screenshots for: ${missing.join(", ")}`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

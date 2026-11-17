/**
 * Post-page banner: a wide, short strip (≈3.5:1) in the style of
 * tertiarycourses.com.sg — short headline on the left, a category motif on the
 * right. Drawn in HTML/SVG so it uses the site fonts, stays sharp, and never needs
 * regenerating when a title changes. The 16:10 `featuredImage` is still used for
 * /blog cards and OG/Twitter previews; it is not shown on the post page.
 */
import type { ReactNode } from "react";

type Motif = "network" | "path" | "shield" | "dashboard" | "phone" | "robot" | "trend";

const MOTIF_BY_CATEGORY: Record<string, Motif> = {
  "ai-automation": "network",
  "training-guides": "path",
  "compliance-audit": "shield",
  "lms-tms": "dashboard",
  "bespoke-apps": "phone",
  portfolio: "phone",
  robotics: "robot",
  "edtech-trends": "trend",
};

/** "TPQA 2.0 vs 1.0: What Changes from 2027" → "TPQA 2.0 vs 1.0". Falls back to the full title. */
export function bannerHeadline(title: string): string {
  const m = title.match(/^(.{4,52}?)\s*(?::|\s[—–]\s)\s*\S/);
  return (m ? m[1] : title).trim();
}

const C = "#59EBFD";
const P = "#8757F2";
const G = "#01C982";
const A = "#F6AE64";

function Node({ x, y, r = 9, color = C, pulse = 0 }: { x: number; y: number; r?: number; color?: string; pulse?: number }) {
  return (
    <g className="blog-banner-pulse" style={{ animationDelay: `${pulse * 0.45}s` }}>
      <circle cx={x} cy={y} r={r + 7} fill={color} opacity={0.14} />
      <circle cx={x} cy={y} r={r} fill={color} />
    </g>
  );
}

const MOTIFS: Record<Motif, ReactNode> = {
  network: (
    <>
      <g stroke={C} strokeOpacity={0.45} strokeWidth={2}>
        <path d="M200 52 L292 118 L258 226 L142 226 L108 118 Z" fill="none" />
        <path d="M200 140 L200 52 M200 140 L292 118 M200 140 L258 226 M200 140 L142 226 M200 140 L108 118" />
      </g>
      <circle cx={200} cy={140} r={30} fill="#03060E" stroke={C} strokeWidth={8} />
      <circle cx={200} cy={140} r={12} fill={C} className="blog-banner-pulse" />
      <Node x={200} y={52} pulse={0} />
      <Node x={292} y={118} color={P} pulse={1} />
      <Node x={258} y={226} pulse={2} />
      <Node x={142} y={226} color={P} pulse={3} />
      <Node x={108} y={118} pulse={4} />
    </>
  ),
  path: (
    <>
      <path d="M90 236 H150 V188 H210 V140 H270 V92 H318" fill="none" stroke={C} strokeOpacity={0.5} strokeWidth={3} />
      <Node x={150} y={212} color={P} pulse={0} />
      <Node x={210} y={164} color={P} pulse={1} />
      <Node x={270} y={116} pulse={2} />
      <path d="M318 92 V40" stroke={A} strokeWidth={3} />
      <path d="M318 40 L352 52 L318 64 Z" fill={A} className="blog-banner-pulse" />
      <path d="M140 212 l7 7 13 -14 M200 164 l7 7 13 -14" stroke="#03060E" strokeWidth={3} fill="none" />
    </>
  ),
  shield: (
    <>
      <path d="M200 40 L278 70 V138 C278 188 244 222 200 242 C156 222 122 188 122 138 V70 Z" fill={P} fillOpacity={0.18} stroke={C} strokeWidth={3} />
      <path d="M166 140 L192 166 L240 112" fill="none" stroke={G} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" className="blog-banner-pulse" />
      {[86, 136, 186].map((y, i) => (
        <g key={y} opacity={0.85}>
          <rect x={304} y={y} width={14} height={14} rx={3} fill="none" stroke={G} strokeWidth={2} />
          <path d={`M307 ${y + 7} l3 3 6 -7`} stroke={G} strokeWidth={2} fill="none" />
          <rect x={326} y={y + 4} width={i === 1 ? 40 : 56} height={6} rx={3} fill={C} fillOpacity={0.35} />
        </g>
      ))}
    </>
  ),
  dashboard: (
    <>
      <rect x={92} y={54} width={232} height={172} rx={12} fill="#03060E" fillOpacity={0.7} stroke={C} strokeOpacity={0.6} strokeWidth={2} />
      <path d="M92 82 H324" stroke={C} strokeOpacity={0.3} />
      {[0, 1, 2].map((i) => <circle key={i} cx={108 + i * 12} cy={68} r={3.5} fill={[A, G, C][i]} />)}
      {[
        [118, 70],
        [150, 104],
        [182, 56],
        [214, 120],
      ].map(([x, h], i) => (
        <rect key={x} x={x} y={206 - h} width={20} height={h} rx={3} fill={i === 3 ? C : P} fillOpacity={i === 3 ? 0.9 : 0.6} className={i === 3 ? "blog-banner-pulse" : undefined} />
      ))}
      <path d="M252 180 L272 150 L290 162 L310 112" fill="none" stroke={G} strokeWidth={3} />
      <Node x={310} y={112} r={6} color={G} pulse={1} />
    </>
  ),
  phone: (
    <>
      <rect x={150} y={36} width={112} height={210} rx={20} fill="#03060E" fillOpacity={0.7} stroke={C} strokeWidth={3} />
      <rect x={186} y={46} width={40} height={6} rx={3} fill={C} fillOpacity={0.4} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={166 + (i % 2) * 44} y={68 + Math.floor(i / 2) * 50} width={36} height={36} rx={9} fill={[P, C, G, P, A, C][i]} fillOpacity={0.75} className={i === 1 ? "blog-banner-pulse" : undefined} />
      ))}
      <Node x={300} y={84} r={7} color={G} pulse={2} />
      <path d="M262 100 L293 88" stroke={G} strokeOpacity={0.5} strokeWidth={2} />
    </>
  ),
  robot: (
    <>
      <path d="M206 44 V74" stroke={C} strokeWidth={3} />
      <circle cx={206} cy={40} r={8} fill={A} className="blog-banner-pulse" />
      <rect x={132} y={74} width={148} height={118} rx={30} fill={P} fillOpacity={0.25} stroke={C} strokeWidth={3} />
      <rect x={152} y={100} width={108} height={58} rx={18} fill="#03060E" />
      <circle cx={182} cy={129} r={10} fill={C} className="blog-banner-pulse" />
      <circle cx={230} cy={129} r={10} fill={C} className="blog-banner-pulse" />
      <path d="M190 172 Q206 182 222 172" stroke={C} strokeWidth={3} fill="none" />
      <rect x={118} y={112} width={14} height={40} rx={6} fill={C} fillOpacity={0.6} />
      <rect x={280} y={112} width={14} height={40} rx={6} fill={C} fillOpacity={0.6} />
      <rect x={168} y={198} width={76} height={36} rx={10} fill={P} fillOpacity={0.4} stroke={C} strokeOpacity={0.5} />
    </>
  ),
  trend: (
    <>
      <path d="M96 238 H336 M96 238 V48" stroke={C} strokeOpacity={0.35} strokeWidth={2} />
      <path d="M110 214 L160 182 L204 196 L252 130 L306 84" fill="none" stroke={C} strokeWidth={4} strokeLinejoin="round" />
      <path d="M110 214 L160 182 L204 196 L252 130 L306 84 V238 H110 Z" fill={C} fillOpacity={0.08} />
      <Node x={160} y={182} r={7} color={P} pulse={0} />
      <Node x={204} y={196} r={7} color={P} pulse={1} />
      <Node x={252} y={130} r={7} pulse={2} />
      <path d="M306 84 l-4 18 M306 84 l-18 4" stroke={A} strokeWidth={4} strokeLinecap="round" />
      <Node x={306} y={84} r={9} color={A} pulse={3} />
    </>
  ),
};

export function BlogBanner({
  title,
  categorySlug,
  categoryName,
}: {
  title: string;
  categorySlug?: string | null;
  categoryName?: string | null;
}) {
  const headline = bannerHeadline(title);
  const motif = MOTIF_BY_CATEGORY[categorySlug ?? ""] ?? "network";
  const kicker = categoryName && categorySlug !== "uncategorised" ? categoryName : "Journal";
  const size = headline.length <= 32 ? "lg" : headline.length <= 64 ? "md" : "sm";

  return (
    <div className="blog-banner" data-motif={motif}>
      <div className="blog-banner-text">
        <p className="blog-banner-kicker">[ {kicker} ]</p>
        {/* The page's single h1 sits below; this is a visual headline only. */}
        <p className={`blog-banner-headline blog-banner-headline--${size}`} aria-hidden="true">
          {headline}
        </p>
        <span className="blog-banner-rule" aria-hidden="true" />
      </div>
      <svg className="blog-banner-motif" viewBox="0 0 400 280" aria-hidden="true" focusable="false">
        <g fill="none" stroke={C} strokeOpacity={0.07}>
          <circle cx={205} cy={140} r={92} strokeWidth={26} />
          <circle cx={205} cy={140} r={150} strokeWidth={26} />
        </g>
        {MOTIFS[motif]}
      </svg>
    </div>
  );
}

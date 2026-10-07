import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tertiaryinfotech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Plain pagination (/blog?page=N) must stay crawlable: Google indexed
        // it from inbound links while blocked ("Indexed, though blocked by
        // robots.txt") because it could never read the canonical to /blog.
        // Longest match wins, so this beats the shorter /blog?* and /*?page=
        // disallows; facet URLs never start with ?page= (filterHref appends
        // page last), so they stay blocked.
        allow: ["/", "/blog?page="],
        disallow: [
          "/admin",
          "/api",
          // Faceted blog listings. Every category × tag combination renders a
          // near-duplicate of /blog and self-canonicalises to it, but Google was
          // still crawling ~850 of them ("Alternate page with proper canonical
          // tag"), starving real posts of crawl budget. Block the query strings
          // so the budget goes to /blog/<post> instead.
          "/blog?*",
          "/*?category=",
          "/*?tag=",
          "/*&tag=",
          "/*?q=",
          "/*?page=",
          // NOT blocked: lead-attribution CTA params (?source=blog-…). Blocking
          // them got the bare URLs indexed ("Indexed, though blocked by
          // robots.txt") because Google could not fetch the page to see its
          // canonical. Left crawlable, they consolidate into the clean URL.
          // Legacy WooCommerce/WordPress query params still being probed.
          "/*?wc-ajax=",
          "/*?project_cat=",
          "/*?s=",
          "/*?ref=",
          "/*?from=",
        ],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}

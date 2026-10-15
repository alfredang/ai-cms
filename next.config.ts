import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Next's standalone tracer doesn't auto-include the optional native
  // subpackages shipped alongside @anthropic-ai/claude-agent-sdk (the
  // linux-x64 / arm64 binary that powers the chatbot subprocess). Force
  // them in so the Docker image isn't missing the binary at runtime.
  outputFileTracingIncludes: {
    "/api/chat": ["./node_modules/@anthropic-ai/**/*"],
    "/api/ai/assist": ["./node_modules/@anthropic-ai/**/*"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.tertiaryinfotech.com" },
      // Cloudflare R2 public buckets (logo, uploaded media).
      { protocol: "https", hostname: "*.r2.dev" },
      // R2 custom domain / S3 endpoint.
      { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },
    ],
  },
  async redirects() {
    // Dynamic redirects (from `redirects` DB table) are handled in middleware.
    // Multi-segment WordPress archive URLs never reach /[slug]'s redirects
    // lookup, so Google kept reporting them as 404s. Send them to the blog.
    return [
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/blog", permanent: true },
      { source: "/:year(\\d{4})/:path*", destination: "/blog", permanent: true },
      { source: "/blog/page/:n(\\d+)", destination: "/blog?page=:n", permanent: true },
      // The WP import stored slugs that began with a U+2060 word joiner as
      // "e281a0<slug>"; old links still carry the raw character.
      { source: "/%E2%81%A0:slug", destination: "/e281a0:slug", permanent: true },
    ];
  },
};

export default nextConfig;

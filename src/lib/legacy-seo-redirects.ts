// Thin pages left over from the WordPress import that compete with the service
// pages for the same keywords. They are redirected in next.config.ts, because
// [slug] only consults the `redirects` table for pages that do not exist, and
// left out of the sitemap so that Google isn't sent to a redirect.
export const LEGACY_SEO_REDIRECTS: Record<string, string> = {
  "ato-application": "/ssg-ato-application",
  "ato-application-3": "/ssg-ato-application",
  e281a0ato: "/ssg-ato-application",
  tpqa: "/tpqa-consultancy",
  "tpqa-2": "/tpqa-consultancy",
  e281a0tpqa: "/tpqa-consultancy",
  "agentic-ai": "/ai-agent-deployment",
};

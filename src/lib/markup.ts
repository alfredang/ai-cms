// Inline markup for CMS copy, so SEO keywords can be bolded and cross-linked
// without allowing raw HTML:
//   **keyword**        → <strong>
//   [anchor](/path)    → internal link (site-relative paths only)
// Rendered by RichText in rich-text.tsx; this module stays JSX-free so
// server jobs and scripts can strip markup without pulling in React.

export const MARKUP_RE = /\*\*(.+?)\*\*|\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Strip markup to plain text — for JSON-LD, meta tags, LLM prompts. */
export function stripMarkup(text: string): string {
  return text.replace(MARKUP_RE, (_m, bold, label) => bold ?? label);
}

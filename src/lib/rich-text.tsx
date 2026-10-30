import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { MARKUP_RE } from "@/lib/markup";

export { stripMarkup } from "@/lib/markup";

/** Render `text`, turning `**bold**` and `[label](/path)` into markup. */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(MARKUP_RE)) {
    const i = m.index ?? 0;
    if (i > last) out.push(<Fragment key={`t${last}`}>{text.slice(last, i)}</Fragment>);
    if (m[1] !== undefined) {
      out.push(
        <strong key={`b${i}`} className="font-semibold text-white">
          {m[1]}
        </strong>,
      );
    } else {
      out.push(
        <Link key={`l${i}`} href={m[3]} className="text-(--color-cyan) hover:underline">
          {m[2]}
        </Link>,
      );
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={`t${last}`}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

import { FaGithub } from "react-icons/fa6";

const APPLE_BADGE =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const GOOGLE_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

/** Official "Download on the App Store" badge linking to the listing. */
export function AppStoreBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title="Download on the App Store" className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={APPLE_BADGE} alt="Download on the App Store" className="h-12 w-auto" loading="lazy" />
    </a>
  );
}

/** Official "Get it on Google Play" badge linking to the listing. */
export function GooglePlayBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title="Get it on Google Play" className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={GOOGLE_BADGE} alt="Get it on Google Play" className="h-12 w-auto" loading="lazy" />
    </a>
  );
}

/** GitHub repo link styled as a pill button to sit beside the store badges. */
export function GithubRepoButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="View the source on GitHub"
      className="inline-flex items-center gap-2 h-12 px-5 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white/90 hover:border-(--color-cyan)/50 hover:text-(--color-cyan) transition"
    >
      <FaGithub className="w-5 h-5" />
      View on GitHub
    </a>
  );
}

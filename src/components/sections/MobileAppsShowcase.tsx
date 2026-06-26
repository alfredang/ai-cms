import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HiDevicePhoneMobile, HiArrowRight } from "react-icons/hi2";
import { MOBILE_APPS } from "@/lib/mobile-apps";
import { MobileAppCard } from "./MobileAppCard";

export function MobileAppsShowcase() {
  const appCount = MOBILE_APPS.length;
  // Feature 6 apps on the homepage (Fractal lives on the full portfolio page).
  const featured = MOBILE_APPS.filter((a) => a.id !== "fractal").slice(0, 6);
  return (
    <section id="mobile-apps" className="relative pt-4 pb-6 overflow-hidden scroll-mt-20">
      <div
        className="glow-blob"
        style={{
          top: "-15%",
          right: "20%",
          width: 560,
          height: 560,
          background: "radial-gradient(circle, #59EBFD 0%, transparent 70%)",
          opacity: 0.25,
        }}
      />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="kicker mb-5 flex items-center gap-2">
              <HiDevicePhoneMobile className="w-4 h-4 text-(--color-cyan)" />
              [ NATIVE iOS &amp; ANDROID · ON THE STORES ]
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.05]">
              We build &amp; ship{" "}
              <span className="gradient-text">native mobile apps</span>.
            </h2>
            <p className="mt-6 text-(--color-muted) text-lg max-w-2xl">
              From a Singapore home-cook marketplace to MRT route planning, GPS run tracking,
              OCR business cards and offline games — {appCount}{" "}native SwiftUI / Jetpack Compose
              apps we&apos;ve designed, built and published to the App Store and Google Play.
            </p>
          </div>
          <Link
            href="/mobile-app-development"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-cyan) hover:gap-2.5 transition-all whitespace-nowrap"
          >
            View all mobile apps <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((app) => (
            <MobileAppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/mobile-app-development" className="btn-primary">
            View all mobile apps →
          </Link>
          <Link href="/contact?source=home-mobile-apps" className="btn-secondary">
            Build your mobile app
          </Link>
        </div>
      </Container>
    </section>
  );
}

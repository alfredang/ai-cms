import type { Metadata } from "next";
import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiPencilSquare,
  HiDocumentText,
  HiRocketLaunch,
  HiCheckBadge,
  HiDevicePhoneMobile,
  HiCpuChip,
  HiServerStack,
  HiBellAlert,
  HiCloudArrowUp,
  HiShieldCheck,
} from "react-icons/hi2";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileAppLeadForm } from "@/components/sections/MobileAppLeadForm";
import { MobileAppCard } from "@/components/sections/MobileAppCard";
import { MOBILE_APPS } from "@/lib/mobile-apps";

const PAGE_URL = "https://www.tertiaryinfotech.com/mobile-app-development";
const SITE_URL = "https://www.tertiaryinfotech.com";
const OG_IMAGE = "/icon-192.png";

export const metadata: Metadata = {
  title: "Mobile App Development Singapore — Native iOS & Android Apps",
  description:
    "We design, build and publish native iOS and Android apps — SwiftUI and Jetpack Compose, shipped to the App Store and Google Play. See the apps we've launched. Book a free 30-min scoping call.",
  keywords:
    "mobile app development Singapore, native iOS app development, Android app development Singapore, SwiftUI app development, Jetpack Compose, App Store submission, Google Play submission, custom mobile app developer Singapore",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: PAGE_URL,
    title: "Mobile App Development Singapore — Native iOS & Android Apps",
    description:
      "Native iOS and Android apps designed, built and shipped to the App Store and Google Play. See the apps we've launched.",
    siteName: "Tertiary Infotech Academy",
    images: [{ url: OG_IMAGE, width: 192, height: 192, alt: "Tertiary Infotech Academy — Mobile App Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Singapore — Native iOS & Android Apps",
    description:
      "Native iOS and Android apps designed, built and shipped to the App Store and Google Play.",
    images: [OG_IMAGE],
  },
};

const IOS_COUNT = MOBILE_APPS.filter((a) => a.ios).length;
const ANDROID_COUNT = MOBILE_APPS.filter((a) => a.android).length;

const TIMELINE = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "Week 0 · free",
    icon: HiMagnifyingGlass,
    accent: "cyan" as const,
    body:
      "30-minute scoping call. We map what your app does, who uses it, the platforms you need first, and the one screen that makes it worth shipping.",
  },
  {
    id: "design",
    title: "Design & Prototype",
    duration: "Weeks 1–2",
    icon: HiPencilSquare,
    accent: "blue" as const,
    body:
      "UX flows and a native-feeling UI in SwiftUI / Jetpack Compose. You get a clickable build on a real device, not just Figma frames.",
  },
  {
    id: "quotation",
    title: "Quotation",
    duration: "Week 2",
    icon: HiDocumentText,
    accent: "purple" as const,
    body:
      "Fixed-scope proposal phased by platform — usually one store first to validate, then the second on the same backend. No open-ended retainers.",
  },
  {
    id: "build",
    title: "Build",
    duration: "Weeks 3–N",
    icon: HiRocketLaunch,
    accent: "amber" as const,
    body:
      "We ship in two-week sprints with a TestFlight / internal-testing build every sprint — real software on your phone, not status decks.",
  },
  {
    id: "launch",
    title: "Launch",
    duration: "Store-ready",
    icon: HiCheckBadge,
    accent: "green" as const,
    body:
      "App Store and Google Play submission, review handling, data-safety and privacy declarations, plus CI/CD so future releases ship on a push.",
  },
];

const ACCENT: Record<string, { ring: string; iconText: string; chip: string }> = {
  cyan: { ring: "border-(--color-cyan)/40", iconText: "text-(--color-cyan)", chip: "bg-(--color-cyan)/10 text-(--color-cyan)" },
  blue: { ring: "border-(--color-cyan)/40", iconText: "text-(--color-cyan)", chip: "bg-(--color-cyan)/10 text-(--color-cyan)" },
  purple: { ring: "border-(--color-purple)/50", iconText: "text-(--color-purple-light)", chip: "bg-(--color-purple)/15 text-(--color-purple-light)" },
  amber: { ring: "border-(--color-amber)/50", iconText: "text-(--color-amber)", chip: "bg-(--color-amber)/10 text-(--color-amber)" },
  green: { ring: "border-(--color-green)/50", iconText: "text-(--color-green)", chip: "bg-(--color-green)/10 text-(--color-green)" },
};

const CAPABILITIES = [
  {
    icon: HiDevicePhoneMobile,
    title: "Truly native, not web wrappers",
    body:
      "Real SwiftUI and Jetpack Compose clients that feel native — gestures, haptics, dark mode and offline support, not a webview in a shell.",
  },
  {
    icon: HiServerStack,
    title: "Backend & shared API",
    body:
      "When your app needs accounts, payments or live data, we build the API behind it too — one typed backend serving iOS, Android and web.",
  },
  {
    icon: HiCpuChip,
    title: "On-device AI & system frameworks",
    body:
      "VisionKit OCR, CoreLocation, Metal, PencilKit, AVSpeech, on-device ML — we use the platform's own frameworks for speed and privacy.",
  },
  {
    icon: HiBellAlert,
    title: "Push, payments & in-app purchase",
    body:
      "Push notifications, StoreKit / Play Billing subscriptions and secure payment flows wired up and tested against the store sandboxes.",
  },
  {
    icon: HiCloudArrowUp,
    title: "CI/CD auto-release",
    body:
      "GitHub Actions that build, sign and upload to TestFlight / Play on every push to main — release notes, versioning and signing handled.",
  },
  {
    icon: HiShieldCheck,
    title: "Store submission & policy",
    body:
      "We handle App Store and Google Play submission end to end — data-safety, privacy nutrition labels and the policy gotchas that cause rejections.",
  },
];

const INCLUDED = [
  "Discovery and feature scoping for your app",
  "Native iOS app (SwiftUI) and/or Android app (Jetpack Compose)",
  "Backend / shared API where the app needs live data, accounts or payments",
  "Push notifications, in-app purchase and payment integration",
  "On-device frameworks — VisionKit, CoreLocation, Metal, PencilKit, ML",
  "App Store + Google Play submission and review handling",
  "CI/CD pipeline for automated, signed releases",
  "Source handover — you own the code, the signing assets and the listings",
];

const FAQ = [
  {
    q: "Do you build native apps or cross-platform?",
    a: "Both, depending on the job. Our shipped apps are native — SwiftUI on iOS and Kotlin / Jetpack Compose on Android — which gives the best performance and access to platform frameworks like VisionKit, Metal and PencilKit. For simpler apps that need to launch on both stores fast, we also build with Expo / React Native. We recommend the right approach in the Discovery call.",
  },
  {
    q: "Can you publish to the App Store and Google Play for us?",
    a: "Yes. We handle the full submission for both stores — provisioning, signing, the data-safety and privacy declarations, screenshots and the review back-and-forth. We've shipped multiple apps live on both stores and know the policy traps that cause rejections.",
  },
  {
    q: "Do you build the backend too?",
    a: "Yes, when the app needs one. Apps like PotLuckHub run on a shared API that also serves the web and Android clients. Offline apps like Sudoku, Fractal and NotePad need no server at all — we'll tell you which camp your app is in.",
  },
  {
    q: "Will future updates ship automatically?",
    a: "We set up CI/CD with GitHub Actions so every push to main builds, signs and uploads a new build to TestFlight / Play internal testing — with auto-incrementing version codes and release notes. After launch you can ship updates without touching Xcode or Android Studio.",
  },
  {
    q: "Do we own the app and the developer accounts?",
    a: "Yes. We hand over all source code, signing certificates and keystores, and the app lives under your own App Store Connect and Play Console accounts. No lock-in.",
  },
  {
    q: "What's a real example of what you ship?",
    a: `We've published ${IOS_COUNT} apps on the App Store and ${ANDROID_COUNT} on Google Play — PotLuckHub (a home-cook marketplace), RunTrack GPS, Tertiary Tapcard and Tertiary Sudoku, plus open-source builds like NotePad, Fractal and Hanyu Pinyin. They're all listed above with their store and GitHub links.`,
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development — Singapore",
  provider: { "@type": "Organization", name: "Tertiary Infotech Academy", url: SITE_URL },
  areaServed: { "@type": "Country", name: "Singapore" },
  description:
    "End-to-end native iOS and Android app development — SwiftUI and Jetpack Compose, backend APIs, and App Store / Google Play submission.",
  url: PAGE_URL,
};

const appsLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mobile apps by Tertiary Infotech Academy",
  itemListElement: MOBILE_APPS.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      applicationCategory: app.category,
      operatingSystem: app.android ? "iOS, Android" : "iOS",
      description: app.blurb,
      ...(app.ios ? { url: app.ios } : app.github ? { url: app.github } : {}),
    },
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
    { "@type": "ListItem", position: 3, name: "Mobile App Development", item: PAGE_URL },
  ],
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative py-10 md:py-14 overflow-hidden">
          <div
            className="glow-blob"
            style={{ top: "-10%", left: "-5%", width: 520, height: 520, background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)" }}
          />
          <div
            className="glow-blob"
            style={{ top: "20%", right: "-10%", width: 480, height: 480, background: "radial-gradient(circle, rgba(89,235,253,0.5) 0%, transparent 70%)" }}
          />
          <Container>
            <div className="grid lg:grid-cols-12 gap-8 items-start relative">
              <div className="lg:col-span-7">
                <div className="kicker mb-4">[ iOS · ANDROID · SHIPPED ON THE STORES ]</div>
                <h1 className="font-display text-[clamp(2.25rem,5.2vw,3.75rem)] font-extrabold leading-[1.04] mb-5">
                  We design, build and ship{" "}
                  <span className="gradient-text">native mobile apps</span>.
                </h1>
                <p className="text-(--color-muted) text-lg max-w-2xl mb-6">
                  Native iOS and Android apps in SwiftUI and Jetpack Compose — from a
                  Singapore home-cook marketplace to GPS run tracking, OCR business cards
                  and offline games. We take the idea to the App Store and Google Play, and
                  hand you the keys.
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-cyan)/10 text-(--color-cyan) border border-(--color-cyan)/30">
                    <FaApple className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
                    {IOS_COUNT} on the App Store
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-green)/10 text-(--color-green) border border-(--color-green)/30">
                    <FaGooglePlay className="inline w-3 h-3 mr-1.5 -mt-0.5" />
                    {ANDROID_COUNT} on Google Play
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-purple)/15 text-(--color-purple-light) border border-(--color-purple)/40">
                    You own the code
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#book" className="btn-primary">
                    Book my scoping call →
                  </a>
                  <a
                    href="#apps"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-white/85 hover:border-(--color-cyan)/50 hover:text-(--color-cyan) transition"
                  >
                    See the apps we&apos;ve shipped
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div id="book" className="scroll-mt-24">
                  <div className="kicker mb-3">[ START HERE ]</div>
                  <MobileAppLeadForm compact />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* APP SHOWCASE */}
        <section id="apps" className="relative py-10 scroll-mt-20">
          <Container>
            <div className="max-w-3xl mb-8">
              <div className="kicker mb-3">[ APPS WE&apos;VE SHIPPED ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                Real apps, <span className="gradient-text-warm">live on the stores</span>.
              </h2>
              <p className="mt-3 text-(--color-muted)">
                Every app below was designed, built and published by us. Tap through to the
                App Store, Google Play or the source on GitHub.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MOBILE_APPS.map((app) => (
                <MobileAppCard key={app.id} app={app} />
              ))}
            </div>
          </Container>
        </section>

        {/* CAPABILITIES */}
        <section className="relative py-10">
          <Container>
            <div className="max-w-3xl mb-8">
              <div className="kicker mb-3">[ WHAT WE BUILD ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                Everything a real app needs,{" "}
                <span className="gradient-text">end to end</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CAPABILITIES.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="glass card-hover p-6 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-(--color-cyan) to-transparent" />
                    <Icon className="w-8 h-8 text-(--color-cyan) mb-3" />
                    <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-sm text-(--color-muted) leading-relaxed">{c.body}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* PROCESS / TIMELINE */}
        <section id="process" className="relative py-10 scroll-mt-20">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="kicker mb-3">[ OUR 5-STEP PROCESS ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                Discovery → Design → Quotation → Build →{" "}
                <span className="gradient-text">Launch</span>
              </h2>
            </div>

            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-(--color-cyan)/60 via-(--color-purple)/60 to-(--color-green)/60" />
              <ol className="grid grid-cols-5 gap-4 relative">
                {TIMELINE.map((s, i) => {
                  const Icon = s.icon;
                  const a = ACCENT[s.accent];
                  return (
                    <li key={s.id} className="relative">
                      <div className={`relative z-10 mx-auto w-24 h-24 rounded-2xl glass border ${a.ring} flex items-center justify-center mb-5`}>
                        <Icon className={`w-10 h-10 ${a.iconText}`} />
                        <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-(--color-bg) border border-white/15 text-xs font-mono flex items-center justify-center text-white/80">
                          {i + 1}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono ${a.chip} mb-2`}>
                          {s.duration}
                        </span>
                        <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-(--color-muted) leading-relaxed">{s.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile vertical timeline */}
            <ol className="lg:hidden relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-(--color-cyan)/60 before:via-(--color-purple)/60 before:to-(--color-green)/60">
              {TIMELINE.map((s, i) => {
                const Icon = s.icon;
                const a = ACCENT[s.accent];
                return (
                  <li key={s.id} className="relative">
                    <div className={`absolute -left-8 top-1 w-7 h-7 rounded-full glass border ${a.ring} flex items-center justify-center`}>
                      <Icon className={`w-3.5 h-3.5 ${a.iconText}`} />
                    </div>
                    <div className="glass p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${a.chip}`}>
                          Step {i + 1}
                        </span>
                        <span className="text-[11px] font-mono text-(--color-muted)">{s.duration}</span>
                      </div>
                      <h3 className="font-display font-bold text-base mb-1.5">{s.title}</h3>
                      <p className="text-sm text-(--color-muted) leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="relative py-10">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="kicker mb-3">[ WHAT WE DELIVER ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight mb-4">
                  A complete, store-ready{" "}
                  <span className="gradient-text">mobile app</span>.
                </h2>
                <p className="text-(--color-muted)">
                  You bring the idea. We design it, build it native, ship it to the stores
                  and hand you the keys. Related work:{" "}
                  <Link href="/marketplace-development" className="text-(--color-cyan) hover:underline">
                    marketplace platforms
                  </Link>{" "}
                  and{" "}
                  <Link href="/ai-solutions" className="text-(--color-cyan) hover:underline">
                    bespoke AI software
                  </Link>
                  .
                </p>
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-(--color-green) font-mono mt-0.5">✓</span>
                    <span className="text-white/90">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="relative py-10">
          <Container className="max-w-4xl">
            <div className="mb-8">
              <div className="kicker mb-3">[ FAQ ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                Common questions about building a mobile app.
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="glass p-5 group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="cursor-pointer flex justify-between items-center gap-4">
                    <span className="font-display font-semibold text-base text-white">{f.q}</span>
                    <span className="text-(--color-cyan) font-mono text-lg transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-sm text-(--color-muted) leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-10 overflow-hidden">
          <div
            className="glow-blob"
            style={{ top: "10%", left: "0", width: 480, height: 480, background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)" }}
          />
          <Container className="max-w-4xl relative">
            <div className="text-center mb-8">
              <div className="kicker mb-3">[ START YOUR BUILD ]</div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.05] mb-4">
                Have an app idea?{" "}
                <span className="gradient-text">Let&apos;s scope it.</span>
              </h2>
              <p className="text-(--color-muted) text-lg">
                Free 30-minute scoping call. We&apos;ll tell you what to build first, native
                or cross-platform, and what it realistically takes before you commit a dollar.
              </p>
            </div>
            <MobileAppLeadForm />
            <p className="mt-5 text-center text-xs text-(--color-muted) font-mono">
              [ Looking at our other services?{" "}
              <Link href="/#services" className="hover:text-(--color-cyan)">
                See all services
              </Link>{" "}
              ]
            </p>
          </Container>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

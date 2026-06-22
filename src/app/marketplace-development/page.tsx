import type { Metadata } from "next";
import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiRocketLaunch,
  HiCheckBadge,
  HiGlobeAlt,
  HiDevicePhoneMobile,
  HiServerStack,
  HiCreditCard,
  HiShieldCheck,
  HiArrowsRightLeft,
} from "react-icons/hi2";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceLeadForm } from "@/components/sections/MarketplaceLeadForm";

const PAGE_URL = "https://www.tertiaryinfotech.com/marketplace-development";
const SITE_URL = "https://www.tertiaryinfotech.com";

const POTLUCK_SHOT =
  "https://pub-62aa61537a134e9780c302c6f0795233.r2.dev/blog/potluckhub-homepage-2026.png";
const CASE_STUDY = "/blog/potluckhub-home-chef-marketplace-web-ios-android";
const LIVE = "https://potluckhub.io/";
const IOS = "https://apps.apple.com/app/id6759842391";
const ANDROID = "https://play.google.com/store/apps/details?id=io.potluckhub.app";

export const metadata: Metadata = {
  title: "Marketplace App Development Singapore — Web, iOS & Android Platforms",
  description:
    "We build two-sided marketplace platforms end to end — full-stack web app plus native iOS and Android, on one shared API. See the Potluckhub case study. Book a free 30-min scoping call.",
  keywords:
    "marketplace app development Singapore, two-sided marketplace platform, custom marketplace development, Next.js marketplace, native iOS Android app development, bespoke app development Singapore, marketplace MVP",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: PAGE_URL,
    title: "Marketplace App Development Singapore — Web, iOS & Android Platforms",
    description:
      "We build two-sided marketplace platforms end to end — full-stack web plus native iOS and Android, on one shared API. See the Potluckhub case study.",
    siteName: "Tertiary Infotech Academy",
    images: [{ url: POTLUCK_SHOT, width: 1440, height: 900, alt: "Marketplace platform development — Potluckhub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace App Development Singapore — Web, iOS & Android",
    description:
      "Two-sided marketplace platforms built end to end — web, iOS and Android on one shared API. See the Potluckhub case study.",
    images: [POTLUCK_SHOT],
  },
};

const TIMELINE = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "Week 0 · free",
    icon: HiMagnifyingGlass,
    accent: "cyan" as const,
    body:
      "30-minute scoping call. We map your two-sided model — who supplies, who buys, how money and trust flow — and the surfaces you actually need first.",
  },
  {
    id: "design",
    title: "Design & API",
    duration: "Weeks 1–2",
    icon: HiChatBubbleLeftRight,
    accent: "blue" as const,
    body:
      "We model the trust and money rules and design a single shared API — the source of truth every client will render. UX flows for both sides of the market.",
  },
  {
    id: "quotation",
    title: "Quotation",
    duration: "Week 2",
    icon: HiDocumentText,
    accent: "purple" as const,
    body:
      "Fixed-scope proposal phased by surface — web marketplace first to validate demand, then native iOS and Android. No open-ended retainers.",
  },
  {
    id: "build",
    title: "Build",
    duration: "Weeks 3–N",
    icon: HiRocketLaunch,
    accent: "amber" as const,
    body:
      "We ship the web marketplace and checkout, then layer native SwiftUI and Jetpack Compose apps on the same API. You see working software every sprint.",
  },
  {
    id: "launch",
    title: "Launch",
    duration: "Store-ready",
    icon: HiCheckBadge,
    accent: "green" as const,
    body:
      "App Store and Google Play submission, production deployment on infrastructure you own, and handover of all source for web, iOS and Android.",
  },
];

const ACCENT: Record<
  string,
  { ring: string; iconText: string; chip: string }
> = {
  cyan: {
    ring: "border-(--color-cyan)/40",
    iconText: "text-(--color-cyan)",
    chip: "bg-(--color-cyan)/10 text-(--color-cyan)",
  },
  blue: {
    ring: "border-(--color-cyan)/40",
    iconText: "text-(--color-cyan)",
    chip: "bg-(--color-cyan)/10 text-(--color-cyan)",
  },
  purple: {
    ring: "border-(--color-purple)/50",
    iconText: "text-(--color-purple-light)",
    chip: "bg-(--color-purple)/15 text-(--color-purple-light)",
  },
  amber: {
    ring: "border-(--color-amber)/50",
    iconText: "text-(--color-amber)",
    chip: "bg-(--color-amber)/10 text-(--color-amber)",
  },
  green: {
    ring: "border-(--color-green)/50",
    iconText: "text-(--color-green)",
    chip: "bg-(--color-green)/10 text-(--color-green)",
  },
};

const SURFACES = [
  {
    icon: HiGlobeAlt,
    title: "Full-stack web marketplace",
    body:
      "A Next.js web app that is both your SEO/marketing surface and a working marketplace — discovery, booking and checkout in one place.",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Native iOS & Android apps",
    body:
      "Real SwiftUI and Jetpack Compose clients — not web wrappers — distributed through the App Store and Google Play for your repeat users.",
  },
  {
    icon: HiServerStack,
    title: "One shared API",
    body:
      "All pricing, availability, bookings and verification live behind a single typed API over PostgreSQL — the source of truth for every client.",
  },
  {
    icon: HiCreditCard,
    title: "Payments & payouts",
    body:
      "Secure payment flows with funds held until fulfilment, plus the supplier-payout side that two-sided marketplaces actually run on.",
  },
  {
    icon: HiShieldCheck,
    title: "Trust & verification",
    body:
      "Identity verification, reviews and ratings modelled as first-class data — the trust layer that makes strangers transact.",
  },
  {
    icon: HiArrowsRightLeft,
    title: "Two-sided workflows",
    body:
      "Separate, considered flows for supply and demand — listing and availability tools for sellers, discovery and booking for buyers.",
  },
];

const INCLUDED = [
  "Discovery and two-sided model mapping",
  "Single shared REST API + PostgreSQL data model",
  "Next.js web marketplace with SEO and checkout",
  "Native iOS app (SwiftUI) and Android app (Jetpack Compose)",
  "Payments, held funds and supplier payouts",
  "Identity verification, reviews and ratings",
  "App Store + Google Play submission",
  "Self-hosted deployment — you own the code and data",
];

const FAQ = [
  {
    q: "Should we build web first or apps first?",
    a: "Web first, almost always. A responsive web marketplace validates demand and captures SEO for a fraction of the cost of two app stores. Because every client talks to one API, adding native iOS and Android afterwards is mostly UI work — the booking, payment and trust logic is already solved.",
  },
  {
    q: "Do we own the code and infrastructure?",
    a: "Yes. We hand over all source for the web app, iOS app and Android app, and the web stack is self-hosted on infrastructure you own via Docker. There is no per-seat SaaS fee that grows with your user base.",
  },
  {
    q: "How much does a marketplace build cost?",
    a: "It depends on the complexity of your booking and payment rules and how many surfaces you launch with. We scope a fixed-price proposal after the free Discovery call, phased so you can start with the web marketplace and add apps once demand is proven.",
  },
  {
    q: "Can you take over a half-built marketplace?",
    a: "Often, yes — if the business rules can be consolidated behind a clean API. We start with an architecture review to find where state is duplicated across clients, which is the usual cause of 'the app and the website disagree' bugs.",
  },
  {
    q: "What's a real example of what you build?",
    a: "Potluckhub — a Singapore home-chef marketplace with a Next.js web app, a native iOS app and a native Android app, all on one shared API. It's live on the web and in both app stores. Read the full case study linked above.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Marketplace App Development",
  name: "Marketplace App Development — Singapore",
  provider: {
    "@type": "Organization",
    name: "Tertiary Infotech Academy",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  description:
    "End-to-end development of two-sided marketplace platforms — full-stack web app plus native iOS and Android clients on one shared API, with payments, payouts and trust built in.",
  url: PAGE_URL,
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
    { "@type": "ListItem", position: 3, name: "Marketplace App Development", item: PAGE_URL },
  ],
};

export default function MarketplaceDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative py-10 md:py-14 overflow-hidden">
          <div
            className="glow-blob"
            style={{
              top: "-10%",
              left: "-5%",
              width: 520,
              height: 520,
              background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)",
            }}
          />
          <div
            className="glow-blob"
            style={{
              top: "20%",
              right: "-10%",
              width: 480,
              height: 480,
              background: "radial-gradient(circle, rgba(89,235,253,0.5) 0%, transparent 70%)",
            }}
          />
          <Container>
            <div className="grid lg:grid-cols-12 gap-8 items-start relative">
              <div className="lg:col-span-7">
                <div className="kicker mb-4">[ WEB · iOS · ANDROID · ONE API ]</div>
                <h1 className="font-display text-[clamp(2.25rem,5.2vw,3.75rem)] font-extrabold leading-[1.04] mb-5">
                  Build your{" "}
                  <span className="gradient-text">two-sided marketplace</span>{" "}
                  across web and native apps.
                </h1>
                <p className="text-(--color-muted) text-lg max-w-2xl mb-6">
                  We design and build marketplace platforms end to end — a full-stack web
                  app plus native iOS and Android, all served by one shared API.
                  Payments, payouts, verification and reviews built in. See it shipped in
                  our{" "}
                  <Link href={CASE_STUDY} className="text-(--color-cyan) hover:underline">
                    Potluckhub case study
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-cyan)/10 text-(--color-cyan) border border-(--color-cyan)/30">
                    Web first, then native apps
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-purple)/15 text-(--color-purple-light) border border-(--color-purple)/40">
                    Fixed-scope, phased delivery
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-(--color-amber)/10 text-(--color-amber) border border-(--color-amber)/30">
                    You own the code
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#book" className="btn-primary">
                    Book my scoping call →
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-white/85 hover:border-(--color-cyan)/50 hover:text-(--color-cyan) transition"
                  >
                    See how we build
                  </a>
                </div>
                <p className="mt-5 text-xs text-(--color-muted) font-mono">
                  [ Flagship build: Potluckhub —{" "}
                  <a href={LIVE} target="_blank" rel="noopener noreferrer" className="hover:text-(--color-cyan)">web</a>,{" "}
                  <a href={IOS} target="_blank" rel="noopener noreferrer" className="hover:text-(--color-cyan)">iOS</a>{" "}&{" "}
                  <a href={ANDROID} target="_blank" rel="noopener noreferrer" className="hover:text-(--color-cyan)">Android</a> ]
                </p>
              </div>
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div id="book" className="scroll-mt-24">
                  <div className="kicker mb-3">[ START HERE ]</div>
                  <MarketplaceLeadForm compact />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT YOU GET — surfaces grid */}
        <section className="relative py-10">
          <Container>
            <div className="max-w-3xl mb-8">
              <div className="kicker mb-3">[ WHAT WE BUILD ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                One marketplace, <span className="gradient-text-warm">three front doors</span>,
                one source of truth.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SURFACES.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="glass card-hover p-6 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-(--color-cyan) to-transparent" />
                    <Icon className="w-8 h-8 text-(--color-cyan) mb-3" />
                    <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-(--color-muted) leading-relaxed">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CASE STUDY — Potluckhub */}
        <section className="relative py-10">
          <Container>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="kicker mb-3">[ CASE STUDY ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight mb-4">
                  Potluckhub — a home-chef marketplace,{" "}
                  <span className="gradient-text">shipped on three surfaces</span>.
                </h2>
                <p className="text-(--color-muted) mb-4">
                  Potluckhub connects identity-verified home chefs with diners across
                  Singapore. We built the full-stack web marketplace, a native iOS app and a
                  native Android app — all served by one shared REST API, with secure SGD
                  payments held until you dine.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Next.js 15 web marketplace + checkout",
                    "Native SwiftUI iOS app (iOS 17+)",
                    "Native Kotlin / Jetpack Compose Android app",
                    "Single Fastify + Drizzle + PostgreSQL API",
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm text-white/90">
                      <span className="text-(--color-green) font-mono mt-0.5">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href={CASE_STUDY} className="btn-primary">
                    Read the case study →
                  </Link>
                  <a
                    href={LIVE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-white/85 hover:border-(--color-cyan)/50 hover:text-(--color-cyan) transition"
                  >
                    Visit potluckhub.io
                  </a>
                </div>
              </div>
              <Link href={CASE_STUDY} className="block group">
                <div className="glass p-2 rounded-2xl overflow-hidden card-hover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POTLUCK_SHOT}
                    alt="Potluckhub home-chef marketplace homepage — Home-cooked meals from real Singapore kitchens"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </Container>
        </section>

        {/* PROCESS / TIMELINE */}
        <section id="process" className="relative py-10 scroll-mt-20">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="kicker mb-3">[ OUR 5-STEP PROCESS ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                Discovery → Design & API → Quotation → Build →{" "}
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
                      <div
                        className={`relative z-10 mx-auto w-24 h-24 rounded-2xl glass border ${a.ring} flex items-center justify-center mb-5`}
                      >
                        <Icon className={`w-10 h-10 ${a.iconText}`} />
                        <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-(--color-bg) border border-white/15 text-xs font-mono flex items-center justify-center text-white/80">
                          {i + 1}
                        </span>
                      </div>
                      <div className="text-center">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono ${a.chip} mb-2`}
                        >
                          {s.duration}
                        </span>
                        <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-(--color-muted) leading-relaxed">
                          {s.body}
                        </p>
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
                    <div
                      className={`absolute -left-8 top-1 w-7 h-7 rounded-full glass border ${a.ring} flex items-center justify-center`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${a.iconText}`} />
                    </div>
                    <div className="glass p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${a.chip}`}>
                          Step {i + 1}
                        </span>
                        <span className="text-[11px] font-mono text-(--color-muted)">
                          {s.duration}
                        </span>
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
                  A complete, launch-ready{" "}
                  <span className="gradient-text">marketplace platform</span>.
                </h2>
                <p className="text-(--color-muted)">
                  You bring the market and the supply. We build every surface and the API
                  that keeps them in sync — and hand you the keys. Related work:{" "}
                  <Link href="/ai-solutions" className="text-(--color-cyan) hover:underline">
                    bespoke web & mobile apps
                  </Link>{" "}
                  and our{" "}
                  <Link href="/content-management-system" className="text-(--color-cyan) hover:underline">
                    AI-powered CMS
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
                Common questions about building a marketplace.
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="glass p-5 group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="cursor-pointer flex justify-between items-center gap-4">
                    <span className="font-display font-semibold text-base text-white">
                      {f.q}
                    </span>
                    <span className="text-(--color-cyan) font-mono text-lg transition group-open:rotate-45">
                      +
                    </span>
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
            style={{
              top: "10%",
              left: "0",
              width: 480,
              height: 480,
              background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)",
            }}
          />
          <Container className="max-w-4xl relative">
            <div className="text-center mb-8">
              <div className="kicker mb-3">[ START YOUR BUILD ]</div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.05] mb-4">
                Have a marketplace idea?{" "}
                <span className="gradient-text">Let's scope it.</span>
              </h2>
              <p className="text-(--color-muted) text-lg">
                Free 30-minute scoping call. We'll tell you what to build first and what it
                realistically takes before you commit a dollar.
              </p>
            </div>
            <MarketplaceLeadForm />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

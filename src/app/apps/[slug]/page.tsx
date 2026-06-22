import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiDevicePhoneMobile } from "react-icons/hi2";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileAppLeadForm } from "@/components/sections/MobileAppLeadForm";
import { AppStoreBadge, GooglePlayBadge, GithubRepoButton } from "@/components/sections/StoreBadges";
import { MOBILE_APPS, getMobileApp } from "@/lib/mobile-apps";
import { APP_SCREENSHOTS } from "@/lib/mobile-app-screenshots";

const SITE_URL = "https://www.tertiaryinfotech.com";

export function generateStaticParams() {
  return MOBILE_APPS.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getMobileApp(slug);
  if (!app) return {};
  const pageUrl = `${SITE_URL}/apps/${app.id}`;
  const shot = APP_SCREENSHOTS[app.id]?.[0];
  const title = `${app.name} — ${app.tagline} | Tertiary Infotech Academy`;
  const description = `${app.blurb} Built by Tertiary Infotech Academy. Download on the App Store${app.android ? " and Google Play" : ""}.`;
  return {
    title,
    description,
    keywords: `${app.name}, ${app.category}, native ${app.platform} app, mobile app development Singapore, ${app.tech}`,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      locale: "en_SG",
      url: pageUrl,
      title,
      description: app.blurb,
      siteName: "Tertiary Infotech Academy",
      images: shot ? [{ url: shot, alt: `${app.name} app screenshot` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline}`,
      description: app.blurb,
      images: shot ? [shot] : undefined,
    },
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getMobileApp(slug);
  if (!app) notFound();

  const pageUrl = `${SITE_URL}/apps/${app.id}`;
  const shots = APP_SCREENSHOTS[app.id] ?? [];
  const leadSource = `app-${app.id}-page`;

  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: app.android ? "iOS, Android" : "iOS",
    description: app.about.join(" "),
    url: pageUrl,
    ...(app.ios ? { downloadUrl: app.ios } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "Tertiary Infotech Academy", url: SITE_URL },
    ...(shots.length ? { screenshot: shots } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Mobile App Development", item: `${SITE_URL}/mobile-app-development` },
      { "@type": "ListItem", position: 3, name: app.name, item: pageUrl },
    ],
  };

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
            style={{ top: "15%", right: "-10%", width: 460, height: 460, background: "radial-gradient(circle, rgba(89,235,253,0.45) 0%, transparent 70%)" }}
          />
          <Container>
            <Link
              href="/mobile-app-development"
              className="inline-flex items-center gap-2 text-sm text-(--color-muted) hover:text-(--color-cyan) transition mb-6"
            >
              <HiArrowLeft className="w-4 h-4" /> All mobile apps
            </Link>
            <div className="grid lg:grid-cols-12 gap-8 items-start relative">
              <div className="lg:col-span-7">
                <div className="kicker mb-4 flex items-center gap-2">
                  <HiDevicePhoneMobile className="w-4 h-4 text-(--color-cyan)" />
                  [ {app.category.toUpperCase()} · {app.platform.toUpperCase()} ]
                </div>
                <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] mb-3">
                  {app.name}
                </h1>
                <p className="text-(--color-cyan) text-lg font-medium mb-5">{app.tagline}</p>
                <p className="text-(--color-muted) text-lg max-w-2xl mb-6">{app.blurb}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {app.ios && <AppStoreBadge href={app.ios} />}
                  {app.android && <GooglePlayBadge href={app.android} />}
                  {app.github && <GithubRepoButton href={app.github} />}
                </div>
                <p className="mt-5 text-xs text-(--color-muted) font-mono">[ Built by Tertiary Infotech Academy · {app.tech} ]</p>
              </div>

              {/* Lead phone screenshot */}
              {shots[0] && (
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="glass p-3 rounded-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shots[0]}
                      alt={`${app.name} app — main screen`}
                      className="rounded-2xl w-auto max-h-[460px] object-contain"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* ABOUT + HIGHLIGHTS */}
        <section className="relative py-8">
          <Container>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="kicker mb-3">[ ABOUT THIS APP ]</div>
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold leading-tight mb-4">
                  What <span className="gradient-text">{app.name}</span> does
                </h2>
                {app.about.map((para) => (
                  <p key={para} className="text-(--color-muted) leading-relaxed mb-4">{para}</p>
                ))}
              </div>
              <div className="glass p-6 md:p-7">
                <div className="kicker mb-4">[ HIGHLIGHTS ]</div>
                <ul className="space-y-3">
                  {app.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="text-(--color-green) font-mono mt-0.5">✓</span>
                      <span className="text-white/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* SCREENSHOTS */}
        {shots.length > 0 && (
          <section className="relative py-8">
            <Container>
              <div className="kicker mb-5">[ SCREENSHOTS ]</div>
              <div className="flex gap-5 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
                {shots.map((src, i) => (
                  <div key={src} className="shrink-0 snap-start glass p-2 rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${app.name} screenshot ${i + 1}`}
                      className="rounded-xl h-[520px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* DOWNLOAD CTA */}
        <section className="relative py-8">
          <Container>
            <div className="glass p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <h2 className="font-display text-xl md:text-2xl font-extrabold mb-1">Get {app.name}</h2>
                <p className="text-sm text-(--color-muted)">Free on the {app.android ? "App Store and Google Play" : "App Store"}.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {app.ios && <AppStoreBadge href={app.ios} />}
                {app.android && <GooglePlayBadge href={app.android} />}
                {app.github && <GithubRepoButton href={app.github} />}
              </div>
            </div>
          </Container>
        </section>

        {/* LEAD FORM — mobile app services */}
        <section className="relative py-10 overflow-hidden">
          <div
            className="glow-blob"
            style={{ top: "10%", left: "0", width: 460, height: 460, background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)" }}
          />
          <Container className="max-w-4xl relative">
            <div className="text-center mb-7">
              <div className="kicker mb-3">[ WANT AN APP LIKE {app.name.toUpperCase()}? ]</div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.08] mb-3">
                We design, build and ship{" "}
                <span className="gradient-text">native mobile apps</span>.
              </h2>
              <p className="text-(--color-muted) text-lg">
                {app.name} was designed, built and published by us — from a blank repo to the
                store. Tell us about your app idea and we will scope it on a free 30-minute call.
              </p>
            </div>
            <MobileAppLeadForm source={leadSource} />
            <p className="mt-5 text-center text-xs text-(--color-muted) font-mono">
              [ See the full process on our{" "}
              <Link href="/mobile-app-development" className="hover:text-(--color-cyan)">
                mobile app development
              </Link>{" "}
              page ]
            </p>
          </Container>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

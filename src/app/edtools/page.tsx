import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceLeadForm } from "@/components/sections/ServiceLeadForm";
import {
  EDTOOLS,
  ED_TOOL_CATEGORIES,
  CATEGORY_META,
  getEdToolsGrouped,
  getEdToolScreenshot,
} from "@/lib/edtools-data";
import { HiArrowUpRight } from "react-icons/hi2";

const PAGE_URL = "https://www.tertiaryinfotech.com/edtools";

export const metadata: Metadata = {
  title: `${EDTOOLS.length}+ Free Ed Tools for Trainers & Educators`,
  description: `Browse ${EDTOOLS.length}+ free, browser-based teaching tools — live polls, collaborative boards, cyber labs, calculators and statistics workbenches. Open the live demo, view the source on GitHub, or enquire to add them to your LMS.`,
  keywords:
    "free ed tools, free teaching tools, online classroom tools, free edtech Singapore, live poll tool, word cloud generator, free trainer tools, LMS Singapore",
  alternates: { canonical: "/edtools" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${EDTOOLS.length}+ Free Ed Tools — Tertiary Infotech Academy`,
    description:
      "Free interactive classroom widgets, problem-solving canvases, cyber labs, analytics, finance and statistics tools. Open the live demo, view the source on GitHub.",
    locale: "en_SG",
    siteName: "Tertiary Infotech Academy",
    images: [{ url: "/icon-192.png", width: 192, height: 192, alt: "Tertiary Infotech Academy" }],
  },
};

const SITE_URL = "https://www.tertiaryinfotech.com";

export default function EdToolsIndex() {
  const grouped = getEdToolsGrouped();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Free Ed Tools", item: `${SITE_URL}/edtools` },
    ],
  };
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${EDTOOLS.length}+ Free Ed Tools by Tertiary Infotech Academy`,
    numberOfItems: EDTOOLS.length,
    itemListElement: EDTOOLS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${SITE_URL}/edtools/${t.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Navbar />
      <main>
        <section className="relative pt-24 pb-12 overflow-hidden">
          <div className="grid-bg opacity-60" />
          <div
            className="glow-blob"
            style={{
              top: "-25%",
              left: "20%",
              width: 520,
              height: 520,
              background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)",
            }}
          />
          <Container className="relative">
            <div className="kicker mb-4">[ FREE ED TOOLS ]</div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] max-w-4xl">
              <span className="gradient-text">{EDTOOLS.length}+ Free Ed Tools</span> for trainers &amp; educators.
            </h1>
            <p className="mt-5 text-(--color-muted) text-lg max-w-3xl">
              A growing library of free, browser-based teaching and training tools we built for our own classrooms —
              live polls, collaborative boards, cyber labs, analytics, finance and statistics workbenches. Every tool
              is <span className="text-white/80">free to use</span>, runs in the browser, and{" "}
              <span className="text-white/80">most are open-source on GitHub</span>. No signup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tools" className="btn-primary">
                Browse all {EDTOOLS.length} tools ↓
              </a>
              <Link
                href="/contact?source=edtools-index-quote"
                className="px-5 py-3 rounded-lg border border-(--color-cyan)/40 text-(--color-cyan) hover:bg-(--color-cyan)/10 text-sm font-medium"
              >
                Want these inside your own LMS? →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {ED_TOOL_CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#${slugifyCat(cat)}`}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-(--color-cyan) hover:border-(--color-cyan)/40 transition"
                >
                  {cat} <span className="text-white/30">{grouped[cat].length}</span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section id="tools" className="pb-12">
          <Container>
            <div className="space-y-8">
              {ED_TOOL_CATEGORIES.map((cat) => {
                const tools = grouped[cat];
                if (tools.length === 0) return null;
                const meta = CATEGORY_META[cat];
                const Icon = meta.icon;
                return (
                  <div
                    key={cat}
                    id={slugifyCat(cat)}
                    className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden scroll-mt-24"
                  >
                    <div
                      className="pointer-events-none absolute -top-20 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
                      style={{ background: `radial-gradient(circle, ${meta.accent} 0%, transparent 70%)` }}
                    />
                    <div className="relative flex items-start gap-4 mb-6">
                      <div
                        className="shrink-0 w-12 h-12 rounded-xl grid place-items-center border"
                        style={{
                          color: meta.accent,
                          borderColor: `${meta.accent}55`,
                          background: `${meta.accent}14`,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-3">
                          {cat}
                          <span className="text-sm font-mono text-white/40">[{tools.length}]</span>
                        </h2>
                        <p className="mt-1 text-sm text-(--color-muted) max-w-2xl">{meta.blurb}</p>
                      </div>
                    </div>

                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tools.map((t) => {
                        const shot = getEdToolScreenshot(t.slug);
                        return (
                          <Link
                            key={t.slug}
                            href={`/edtools/${t.slug}`}
                            className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-(--color-cyan)/40 transition flex flex-col overflow-hidden"
                          >
                            <div className="relative aspect-[16/10] bg-black/40 border-b border-white/10 overflow-hidden">
                              {shot ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={shot}
                                  alt={`${t.name} screenshot`}
                                  loading="lazy"
                                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                                />
                              ) : (
                                <div
                                  className="w-full h-full grid place-items-center text-2xl font-display font-bold"
                                  style={{ color: `${meta.accent}` }}
                                >
                                  {t.name.charAt(0)}
                                </div>
                              )}
                              <span className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-(--color-cyan)/15 text-(--color-cyan) border border-(--color-cyan)/30">
                                FREE
                              </span>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                              <div className="flex items-start justify-between gap-3 mb-1.5">
                                <h3 className="font-display font-bold text-white group-hover:text-(--color-cyan) transition leading-tight">
                                  {t.name}
                                </h3>
                                <HiArrowUpRight className="w-4 h-4 shrink-0 text-white/30 group-hover:text-(--color-cyan) transition" />
                              </div>
                              <p className="text-sm text-(--color-muted) line-clamp-2 leading-relaxed flex-1">
                                {t.description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1">
                                {(t.stack ?? []).slice(0, 3).map((s) => (
                                  <span
                                    key={s}
                                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/10"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="relative py-20 overflow-hidden">
          <div
            className="glow-blob"
            style={{
              bottom: "-30%",
              right: "10%",
              width: 500,
              height: 500,
              background: "radial-gradient(circle, #59EBFD 0%, transparent 70%)",
            }}
          />
          <Container className="relative">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
              <div>
                <div className="kicker mb-3">[ DEPLOY THE FULL SUITE ]</div>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">
                  Want all {EDTOOLS.length}+ Ed Tools inside your own LMS / TMS?
                </h2>
                <p className="mt-4 text-(--color-muted) leading-relaxed">
                  The tools above are free to use as-is. If you&apos;d like them bundled and branded inside your own
                  Learning / Training Management System — with WSQ/TPQA-compliant workflows, TPGateway integration,
                  and your learner data migrated — we scope, deploy, and train your team end-to-end.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  <li>✓ All Ed Tools bundled, no per-tool licensing</li>
                  <li>✓ SSG API, TRAQOM, OpenCerts integration ready</li>
                  <li>✓ Self-hosted in your tenancy — no vendor lock-in</li>
                  <li>✓ Singapore data residency by default</li>
                </ul>
              </div>
              <ServiceLeadForm
                source="edtools-index"
                buttonLabel="Enquire about a deployment →"
                qualifyingPlaceholder="Tell us your learner volume, target go-live date, and any specific tools you need first…"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function slugifyCat(cat: string): string {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

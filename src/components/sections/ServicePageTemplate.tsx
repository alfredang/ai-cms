import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiRocketLaunch,
  HiCheckBadge,
} from "react-icons/hi2";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceLeadForm } from "@/components/sections/ServiceLeadForm";
import type { ServicePageContent, TimelineStep } from "@/lib/service-pages";
import { RichText, stripMarkup } from "@/lib/rich-text";
import { SERVICES } from "@/lib/site-content";

/** Column classes that leave no blank cells for a given number of cards. */
function gridFor(n: number): string {
  if (n % 3 === 0) return "lg:grid-cols-3";
  if (n % 4 === 0) return "md:grid-cols-2 lg:grid-cols-4";
  return "md:grid-cols-2";
}
/** On a 2-column grid, an odd last card spans the row. */
function spanLast(i: number, n: number): string {
  return n % 3 !== 0 && n % 2 === 1 && i === n - 1 ? "md:col-span-2" : "";
}

const STEP_ICONS = [
  HiMagnifyingGlass, // Discovery
  HiChatBubbleLeftRight, // Workshop / Consultation
  HiDocumentText, // Quotation
  HiRocketLaunch, // Build / Migrate
  HiCheckBadge, // Go Live / Outcome
];

const STEP_ACCENT: Record<NonNullable<TimelineStep["accent"]>, { ring: string; iconText: string; line: string }> = {
  cyan: {
    ring: "border-(--color-cyan)/40",
    iconText: "text-(--color-cyan)",
    line: "from-(--color-cyan)",
  },
  blue: {
    ring: "border-(--color-cyan)/40",
    iconText: "text-(--color-cyan)",
    line: "from-(--color-cyan)",
  },
  purple: {
    ring: "border-(--color-purple)/50",
    iconText: "text-(--color-purple-light)",
    line: "from-(--color-purple)",
  },
  amber: {
    ring: "border-(--color-amber)/50",
    iconText: "text-(--color-amber)",
    line: "from-(--color-amber)",
  },
  green: {
    ring: "border-(--color-green)/50",
    iconText: "text-(--color-green)",
    line: "from-(--color-green)",
  },
};

/** Render a full service landing page from a ServicePageContent config. */
export function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const SITE_URL = "https://www.tertiaryinfotech.com";
  const pageUrl = `${SITE_URL}/${content.slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.serviceType,
    name: content.title,
    alternateName: content.meta.alternateNames,
    provider: {
      "@type": "Organization",
      name: "Tertiary Infotech Academy",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Singapore" },
    description: content.meta.description,
    url: pageUrl,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripMarkup(f.a) },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#ssg-services` },
      { "@type": "ListItem", position: 3, name: content.title, item: pageUrl },
    ],
  };

  const howToLd = content.timeline?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How our ${content.title} works`,
        step: content.timeline.map((t, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: t.title,
          text: stripMarkup(t.body),
        })),
      }
    : null;

  const current = SERVICES.find((s) => s.href === `/${content.slug}`);
  const isSsg = current?.category === "ssg";
  const related =
    current && current.category !== "ai"
      ? SERVICES.filter((s) => s.category === current.category && s.id !== current.id)
      : [];
  const sections = content.overview?.sections ?? [];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-6 md:py-8 overflow-hidden">
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
              background: "radial-gradient(circle, rgba(89,235,253,0.45) 0%, transparent 70%)",
            }}
          />
          <Container>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center relative">
              <div className="min-w-0">
                <div className="kicker mb-3">{content.hero.kicker}</div>
                <h1
                  className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.04]"
                  dangerouslySetInnerHTML={{ __html: content.hero.headlineHtml }}
                />
                <p className="mt-4 text-(--color-muted) text-lg">
                  <RichText text={content.hero.subhead} />
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#book" className="btn-primary">
                    {content.offer ? `Get my ${content.offer.title.replace(/^Free /, "free ")} →` : "Book a consultation →"}
                  </a>
                  <a href="#whats-included" className="btn-secondary">
                    What&apos;s included
                  </a>
                </div>
                {isSsg && (
                  <p className="mt-4 font-mono text-xs text-(--color-muted)">
                    OUR OWN ACADEMY: TPQA GRADE 1 · REGISTERED PEI · IBF-ACCREDITED COURSES
                  </p>
                )}
              </div>
              <div id="book" className="scroll-mt-20 min-w-0">
                <ServiceLeadForm
                  source={content.leadSource}
                  buttonLabel={content.offer?.buttonLabel ?? "Book my consultation →"}
                  qualifyingPlaceholder={content.offer?.placeholder}
                  offer={content.offer}
                  compact
                />
              </div>
            </div>
          </Container>
        </section>

        {/* The problem this service solves */}
        {content.pains && content.pains.length > 0 && (
          <section className="relative py-4">
            <Container>
              <div className="kicker mb-3">[ WHAT GOES WRONG ]</div>
              <div className={`grid ${gridFor(content.pains.length)} gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden`}>
                {content.pains.map((p, i) => (
                  <div key={p.title} className={`bg-(--color-bg-elevated) p-5 ${spanLast(i, content.pains!.length)}`}>
                    <h2 className="font-display font-bold text-lg text-white leading-snug">{p.title}</h2>
                    <p className="mt-2 text-sm text-(--color-muted) leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Blocks such as industries, products or training tracks */}
        {content.showcase && (
          <section id={content.showcase.id} className="relative py-6 scroll-mt-20">
            <Container>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
                <div className="min-w-0">
                  <div className="kicker mb-3">{content.showcase.kicker}</div>
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                    {content.showcase.heading}
                  </h2>
                </div>
                {content.showcase.intro && <p className="text-sm text-(--color-muted) lg:max-w-md">{content.showcase.intro}</p>}
              </div>
              <div className={`grid ${gridFor(content.showcase.items.length)} gap-4`}>
                {content.showcase.items.map((it, i) => (
                  <div key={it.title} className={`glass card-hover p-5 relative overflow-hidden ${spanLast(i, content.showcase!.items.length)}`}>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-(--color-purple-light) to-transparent" />
                    <h3 className="font-display font-bold text-lg text-white">{it.title}</h3>
                    {it.meta && <div className="mt-1 font-mono text-xs text-(--color-amber)">{it.meta}</div>}
                    <p className="mt-2 text-sm text-(--color-muted) leading-relaxed">{it.body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Overview: long-form, keyword-rich copy */}
        {content.overview && (
          <section id="overview" className="relative py-6 scroll-mt-20">
            <Container>
              <div className={`grid gap-8 ${sections.length > 0 ? "lg:grid-cols-[1fr_1fr]" : ""}`}>
                <div className="min-w-0">
                  <div className="kicker mb-3">{content.overview.kicker ?? "[ OVERVIEW ]"}</div>
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight mb-4">
                    {content.overview.heading}
                  </h2>
                  <div className={`space-y-3 text-(--color-muted) leading-relaxed ${sections.length === 0 ? "lg:columns-2 lg:gap-8 [&>p]:break-inside-avoid" : ""}`}>
                    {content.overview.paragraphs.map((p, i) => (
                      <p key={i}>
                        <RichText text={p} />
                      </p>
                    ))}
                  </div>
                  <div className="glass p-5 mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="font-display font-bold text-white">
                      {content.offer ? `Not sure where you stand? Get a ${content.offer.title.replace(/^Free /, "free ")}.` : "Not sure where you stand? Ask a consultant."}
                    </p>
                    <a href="#book" className="btn-secondary">
                      Talk to a consultant →
                    </a>
                  </div>
                </div>
                {sections.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-4 content-start min-w-0">
                    {sections.map((sec, i) => (
                      <div
                        key={sec.heading}
                        className={`glass p-5 ${sections.length % 2 === 1 && i === sections.length - 1 ? "sm:col-span-2" : ""}`}
                      >
                        <h3 className="font-display font-bold text-lg mb-2">{sec.heading}</h3>
                        <div className="space-y-2 text-sm text-(--color-muted) leading-relaxed">
                          {sec.paragraphs.map((p, j) => (
                            <p key={j}>
                              <RichText text={p} />
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {/* Benefits */}
        <section className="relative py-6">
          <Container>
            <div className="mb-6 lg:text-right">
              <div className="kicker mb-3">[ WHY US ]</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                What you get with our <span className="gradient-text">{content.title}</span>.
              </h2>
            </div>
            <div className={`grid ${gridFor(content.benefits.length)} gap-4`}>
              {content.benefits.map((b, i) => (
                <div key={b.title} className={`glass card-hover p-5 relative overflow-hidden ${spanLast(i, content.benefits.length)}`}>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-(--color-cyan) to-transparent" />
                  <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-(--color-muted) leading-relaxed">
                    <RichText text={b.body} />
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Timeline / process */}
        {content.timeline && content.timeline.length > 0 && (
          <section id="process" className="relative py-6 scroll-mt-20">
            <Container>
              <div className="mb-6">
                <div className="kicker mb-3">[ OUR PROCESS ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                  How our <span className="gradient-text">{content.title}</span> works, in{" "}
                  {content.timeline.length} steps.
                </h2>
                {content.processIntro && (
                  <p className="text-(--color-muted) mt-3">
                    <RichText text={content.processIntro} />
                  </p>
                )}
              </div>

              {/* Desktop horizontal timeline */}
              <div className="hidden lg:block relative">
                <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-(--color-cyan)/60 via-(--color-purple)/60 to-(--color-green)/60" />
                <ol
                  className="grid relative gap-4"
                  style={{ gridTemplateColumns: `repeat(${content.timeline.length}, minmax(0,1fr))` }}
                >
                  {content.timeline.map((s, i) => {
                    const Icon = STEP_ICONS[i] ?? HiRocketLaunch;
                    const a = STEP_ACCENT[s.accent ?? "cyan"];
                    return (
                      <li key={`${s.title}-${i}`} className="relative">
                        <div
                          className={`relative z-10 mx-auto w-20 h-20 rounded-2xl glass border ${a.ring} flex items-center justify-center mb-3`}
                        >
                          <Icon className={`w-8 h-8 ${a.iconText}`} />
                          <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-(--color-bg) border border-white/15 text-xs font-mono flex items-center justify-center text-white/80">
                            {i + 1}
                          </span>
                        </div>
                        <div className="text-center">
                          {s.duration && (
                            <div className={`text-xs font-mono ${a.iconText} mb-2`}>{s.duration}</div>
                          )}
                          <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                          <p className="text-sm text-(--color-muted) leading-relaxed">
                            <RichText text={s.body} />
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Mobile vertical timeline */}
              <ol className="lg:hidden relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-(--color-cyan)/60 before:via-(--color-purple)/60 before:to-(--color-green)/60">
                {content.timeline.map((s, i) => {
                  const Icon = STEP_ICONS[i] ?? HiRocketLaunch;
                  const a = STEP_ACCENT[s.accent ?? "cyan"];
                  return (
                    <li key={`${s.title}-${i}`} className="relative">
                      <div
                        className={`absolute -left-8 top-1 w-7 h-7 rounded-full glass border ${a.ring} flex items-center justify-center`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${a.iconText}`} />
                      </div>
                      <div className="glass p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-mono ${a.iconText}`}>
                            STEP {i + 1}
                            {s.duration ? ` · ${s.duration}` : ""}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-base mb-1.5">{s.title}</h3>
                        <p className="text-sm text-(--color-muted) leading-relaxed">
                            <RichText text={s.body} />
                          </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Container>
          </section>
        )}

        {/* What's included */}
        <section id="whats-included" className="relative py-6 scroll-mt-20">
          <Container>
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 items-center">
              <div>
                <div className="kicker mb-3">[ WHAT WE DELIVER ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                  Everything you need, <span className="gradient-text-warm">in one engagement</span>.
                </h2>
                <a href="#book" className="btn-secondary mt-6">
                  Ask what applies to you →
                </a>
              </div>
              <ul className="glass p-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 fill-2">
                {content.whatsIncluded.map((line) => (
                  <li key={line} className="flex gap-3 text-sm">
                    <span className="text-(--color-green) font-mono" aria-hidden>✓</span>
                    <span className="text-white/90">
                      <RichText text={line} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Client portfolio */}
        {content.clients && content.clients.length > 0 && (
          <section id="clients" className="relative py-6 scroll-mt-20 overflow-hidden">
            <div
              className="glow-blob"
              style={{
                top: "10%",
                right: "-5%",
                width: 460,
                height: 460,
                background: "radial-gradient(circle, rgba(89,235,253,0.35) 0%, transparent 70%)",
                opacity: 0.5,
              }}
            />
            <Container className="relative">
              <div className="mb-6">
                <div className="kicker mb-3">[ REAL CLIENTS ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                  Live on <span className="gradient-text">client domains</span> today.
                </h2>
              </div>
              <div className="space-y-4">
                {content.clients.map((c) => (
                  <article key={c.name} className="glass card-hover p-5 md:p-6 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-(--color-cyan) to-transparent" />
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit the ${c.name} website`}
                        className="group block rounded-lg overflow-hidden border border-white/10 hover:border-(--color-cyan)/50 transition"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.screenshot}
                          alt={`Screenshot of the ${c.name} website homepage`}
                          width={1000}
                          height={625}
                          loading="lazy"
                          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </a>
                      <div className="min-w-0">
                        <div className="kicker mb-2">{c.category}</div>
                        <h3 className="font-display font-bold text-2xl text-white mb-3">{c.name}</h3>
                        <p className="text-sm text-(--color-muted) leading-relaxed mb-5">
                          {c.description}
                        </p>
                        {c.highlights && c.highlights.length > 0 && (
                          <p className="font-mono text-xs text-(--color-cyan) mb-4">
                            {c.highlights.join(" · ")}
                          </p>
                        )}
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visit the ${c.name} website`}
                          className="inline-flex items-center gap-1.5 text-sm font-mono text-(--color-cyan) hover:gap-2.5 transition-all"
                        >
                          Visit live site →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* FAQ */}
        <section className="relative py-6">
          <Container>
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 items-start">
              <div className="lg:sticky lg:top-20">
                <div className="kicker mb-3">[ FAQ ]</div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
                  Common questions about {content.title}.
                </h2>
                <p className="mt-3 text-(--color-muted)">
                  Got a different question? Ask it in the form and a consultant will answer directly.
                </p>
              </div>
              <div className="space-y-3 min-w-0">
                {content.faq.map((f) => (
                  <details
                    key={f.q}
                    className="glass p-4 group [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="cursor-pointer flex justify-between items-center gap-4 min-h-6">
                      <span className="font-display font-semibold text-base text-white">{f.q}</span>
                      <span className="text-(--color-cyan) font-mono text-lg transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="text-sm text-(--color-muted) leading-relaxed mt-3">
                      <RichText text={f.a} />
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="relative py-6 overflow-hidden">
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
          <Container className="relative">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
              <div className="min-w-0">
                <div className="kicker mb-3">[ GET STARTED ]</div>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.05]">
                  Ready to start? <span className="gradient-text">Talk to a consultant.</span>
                </h2>
                <p className="mt-3 text-(--color-muted) text-lg">
                  {content.offer
                    ? `Start with your ${content.offer.title.replace(/^Free /, "free ")}. We'll tell you what's realistic before you spend a dollar.`
                    : "Free 30-minute consultation. We'll tell you what's realistic before you spend a dollar."}
                </p>
                {related.length > 0 && (
                  <nav aria-label="Related services" className="mt-4">
                    <div className="kicker mb-2">{isSsg ? "[ OTHER SSG SERVICES ]" : "[ OTHER AI SERVICES ]"}</div>
                    <ul className="grid sm:grid-cols-3 gap-x-4 text-sm">
                      {related.map((r) => (
                        <li key={r.id}>
                          <Link href={r.href} className="block py-1.5 text-white/80 hover:text-(--color-cyan) transition">
                            {r.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                {isSsg && (
                  <p className="mt-4 text-xs text-(--color-muted)">
                    Tertiary Infotech Academy is an independent consultancy, not affiliated with SWDA or IBF.
                    Decisions rest with the regulator, and no approval or grade can be guaranteed.
                  </p>
                )}
              </div>
              <div className="min-w-0">
                <ServiceLeadForm
                  source={content.leadSource}
                  buttonLabel={content.offer?.buttonLabel ?? "Book my consultation →"}
                  qualifyingPlaceholder={content.offer?.placeholder}
                />
              </div>
            </div>
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
      {howToLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
      )}
    </>
  );
}

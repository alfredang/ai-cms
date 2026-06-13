import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceLeadForm } from "@/components/sections/ServiceLeadForm";
import {
  EDTOOLS,
  getEdToolBySlug,
  getEdToolScreenshot,
  getEdToolSeo,
  getEdToolFaqs,
} from "@/lib/edtools-data";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";

const SITE_URL = "https://www.tertiaryinfotech.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EDTOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getEdToolBySlug(slug);
  if (!tool) return { title: "Ed Tool not found", robots: { index: false } };

  const { title, description, keywords } = getEdToolSeo(tool);
  const url = `${SITE_URL}/edtools/${tool.slug}`;
  const screenshot = getEdToolScreenshot(tool.slug);
  const ogImage = screenshot
    ? { url: screenshot, width: 1280, height: 800, alt: `${tool.name} — free ${tool.category} tool` }
    : { url: "/icon-192.png", width: 192, height: 192, alt: "Tertiary Infotech Academy" };

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/edtools/${tool.slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${title} | Tertiary Infotech Academy`,
      description,
      locale: "en_SG",
      siteName: "Tertiary Infotech Academy",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tertiary Infotech Academy`,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function EdToolDetail({ params }: Props) {
  const { slug } = await params;
  const tool = getEdToolBySlug(slug);
  if (!tool) notFound();

  const sourceTag = `edtool-${tool.slug}`;
  const ghUrl = tool.repo ? `https://github.com/alfredang/${tool.repo}` : null;
  const screenshot = getEdToolScreenshot(tool.slug);
  const faqs = getEdToolFaqs(tool);
  const url = `${SITE_URL}/edtools/${tool.slug}`;

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web browser",
    url: tool.demoUrl ?? url,
    ...(screenshot ? { image: screenshot, screenshot } : {}),
    ...(ghUrl ? { codeRepository: ghUrl } : {}),
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "SGD" },
    author: { "@type": "Organization", name: "Tertiary Infotech Academy", url: SITE_URL },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Free Ed Tools", item: `${SITE_URL}/edtools` },
      { "@type": "ListItem", position: 3, name: tool.name, item: url },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navbar />
      <main>
        <section className="relative pt-24 pb-12 overflow-hidden">
          <div className="grid-bg opacity-60" aria-hidden="true" />
          <div
            className="glow-blob"
            aria-hidden="true"
            style={{
              top: "-25%",
              left: "20%",
              width: 480,
              height: 480,
              background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)",
            }}
          />
          <Container className="relative">
            {/* Breadcrumb trail (visible + matches BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/40 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-(--color-cyan)">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/edtools" className="hover:text-(--color-cyan)">Free Ed Tools</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/70">{tool.name}</span>
            </nav>
            <div className="kicker mb-3 inline-flex items-center gap-2">
              <span className="text-(--color-cyan)">FREE</span> · {tool.category.toUpperCase()}
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] max-w-4xl">
              <span className="gradient-text">Free {tool.name}</span>
            </h1>
            <p className="mt-5 text-(--color-muted) text-lg max-w-3xl">{tool.description}</p>
            <p className="mt-3 text-sm text-white/60 max-w-3xl">
              A free, browser-based tool from{" "}
              <Link href="/edtools" className="text-(--color-cyan) hover:underline">
                our library of {EDTOOLS.length}+ free Ed Tools
              </Link>{" "}
              — built for our own classrooms and shared with Singapore trainers and educators.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {tool.demoUrl && (
                <a href={tool.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  ▶ Open live demo
                </a>
              )}
              {ghUrl && (
                <a
                  href={ghUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${tool.name} source code on GitHub`}
                  className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 text-sm font-medium"
                >
                  View on GitHub ↗
                </a>
              )}
              <a
                href="#enquire"
                className="px-5 py-3 rounded-lg border border-(--color-cyan)/40 text-(--color-cyan) hover:bg-(--color-cyan)/10 text-sm font-medium"
              >
                Add it to your LMS →
              </a>
            </div>
          </Container>
        </section>

        {screenshot && (
          <section className="pb-4">
            <Container>
              <figure className="glass rounded-2xl p-2 md:p-3 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={screenshot}
                  alt={`${tool.name} — live screenshot of the free ${tool.category} tool`}
                  loading="lazy"
                  className="w-full rounded-xl border border-white/10"
                />
                <figcaption className="mt-2 px-2 pb-1 text-xs text-white/40 font-mono flex items-center gap-2">
                  Live screenshot of {tool.name}
                  {tool.demoUrl && (
                    <a href={tool.demoUrl} target="_blank" rel="noopener noreferrer" className="text-(--color-cyan) hover:underline">
                      — open it live ↗
                    </a>
                  )}
                </figcaption>
              </figure>
            </Container>
          </section>
        )}

        <section className="pb-12 pt-8">
          <Container>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">About {tool.name}</h2>
                  <p className="text-(--color-muted) leading-relaxed">{tool.description}</p>
                </div>

                {tool.features && tool.features.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Key features</h2>
                    <ul className="space-y-3">
                      {tool.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-white/85">
                          <HiCheck className="w-5 h-5 text-(--color-cyan) shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* At-a-glance quick facts — live site, source, price */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <QuickFact label="Price">Free · no signup</QuickFact>
                  <QuickFact label="Live site">
                    {tool.demoUrl ? (
                      <a href={tool.demoUrl} target="_blank" rel="noopener noreferrer" className="text-(--color-cyan) hover:underline break-all">
                        Open demo ↗
                      </a>
                    ) : (
                      "On request"
                    )}
                  </QuickFact>
                  <QuickFact label="Source code">
                    {ghUrl ? (
                      <a href={ghUrl} target="_blank" rel="noopener noreferrer" className="text-(--color-cyan) hover:underline">
                        GitHub ↗
                      </a>
                    ) : (
                      "Available on request"
                    )}
                  </QuickFact>
                </div>

                {tool.stack && tool.stack.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Built with</h2>
                    <div className="flex flex-wrap gap-2">
                      {tool.stack.map((s) => (
                        <span key={s} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Who uses {tool.name}?</h2>
                  <p className="text-(--color-muted) leading-relaxed">
                    Singapore training providers, WSQ ATOs, corporate L&amp;D teams, and educational institutes use{" "}
                    {tool.name} inside our{" "}
                    <Link href="/learning-management-system" className="text-(--color-cyan) hover:underline">
                      AI-LMS-TMS
                    </Link>{" "}
                    and{" "}
                    <Link href="/#e-learning" className="text-(--color-cyan) hover:underline">
                      e-learning
                    </Link>{" "}
                    deployments. Whether you need a single tool integrated into your existing classroom workflow or the
                    full {EDTOOLS.length}-tool suite, we scope, deploy, and train your organisation end-to-end.
                  </p>
                </div>

                {/* FAQ — visible copy mirrored 1:1 into FAQPage JSON-LD */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {tool.name} — frequently asked questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((f) => (
                      <div key={f.q} className="glass rounded-xl p-5">
                        <h3 className="font-display font-bold text-white mb-2">{f.q}</h3>
                        <p className="text-sm text-(--color-muted) leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-24 space-y-5" id="enquire">
                <div className="glass rounded-2xl p-6">
                  <div className="kicker mb-2">[ FREE — ADD TO YOUR LMS ]</div>
                  <h2 className="font-display text-xl font-bold leading-snug">
                    Want {tool.name} branded inside your own LMS?
                  </h2>
                  <p className="mt-2 text-sm text-(--color-muted)">
                    The tool is free to use as-is. To bundle, brand, or custom-build it into your training platform,
                    tell us what you need — we reply within <span className="text-white/80">one business day</span>.
                  </p>
                </div>
                <ServiceLeadForm
                  source={sourceTag}
                  compact
                  buttonLabel={`Enquire about ${tool.name} →`}
                  qualifyingPlaceholder={`Tell us how you'd like to use ${tool.name} — class size, integration needs, target go-live…`}
                />
                <p className="text-xs text-white/40 text-center">
                  No spam · your details are never shared · trusted by Singapore training providers.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative py-12 border-t border-white/5">
          <Container>
            <div className="flex items-baseline justify-between mb-6 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                More free tools in <span className="gradient-text">{tool.category}</span>
              </h2>
              <Link href="/edtools" className="text-sm text-(--color-cyan) hover:underline inline-flex items-center gap-1">
                All Free Ed Tools <HiArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EDTOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug)
                .slice(0, 6)
                .map((t) => (
                  <Link key={t.slug} href={`/edtools/${t.slug}`} className="glass card-hover p-5 group">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display font-bold text-white group-hover:text-(--color-cyan) transition">
                        {t.name}
                      </h3>
                      <HiArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-(--color-cyan) transition" />
                    </div>
                    <p className="text-sm text-(--color-muted) line-clamp-2 leading-relaxed">{t.description}</p>
                  </Link>
                ))}
            </div>
          </Container>
        </section>

        {/* Final lead CTA — repeated so visitors needn't scroll back up */}
        <section className="relative py-16 overflow-hidden border-t border-white/5">
          <div
            className="glow-blob"
            aria-hidden="true"
            style={{ bottom: "-30%", right: "10%", width: 460, height: 460, background: "radial-gradient(circle, #59EBFD 0%, transparent 70%)" }}
          />
          <Container className="relative text-center max-w-2xl mx-auto">
            <div className="kicker mb-3 justify-center">[ DEPLOY THE FULL SUITE ]</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">
              Bring {tool.name} and {EDTOOLS.length}+ Ed Tools into your own LMS / TMS
            </h2>
            <p className="mt-4 text-(--color-muted)">
              WSQ/TPQA-compliant workflows, SSG API integration, Singapore data residency, and your learner data
              migrated — scoped at a fixed fee with a typical four-week go-live.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <a href="#enquire" className="btn-primary">Enquire now →</a>
              <Link
                href={`/contact?source=${sourceTag}-call`}
                className="px-5 py-3 rounded-lg border border-(--color-cyan)/40 text-(--color-cyan) hover:bg-(--color-cyan)/10 text-sm font-medium"
              >
                Book a 30-minute scoping call →
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function QuickFact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-4">
      <div className="kicker mb-1">{label}</div>
      <div className="text-sm text-white/85 font-medium">{children}</div>
    </div>
  );
}

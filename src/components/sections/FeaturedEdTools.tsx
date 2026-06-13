import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";
import { EDTOOLS, getEdToolBySlug, getEdToolScreenshot } from "@/lib/edtools-data";

/** Hand-picked tools surfaced on the landing page. */
const FEATURED_SLUGS = ["qr-code-generator", "break-timer", "ice-breaker"] as const;

export function FeaturedEdTools() {
  const tools = FEATURED_SLUGS.map((s) => getEdToolBySlug(s)).filter(
    (t): t is NonNullable<typeof t> => Boolean(t),
  );
  if (tools.length === 0) return null;

  return (
    <section id="free-ed-tools" className="relative py-4 scroll-mt-24">
      <Container>
        <div className="flex items-end justify-between mb-6 gap-6 flex-wrap">
          <div>
            <div className="kicker mb-4 flex items-center gap-2">
              <HiSparkles className="w-4 h-4 text-(--color-cyan)" />
              [ FREE ED TOOLS ]
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05]">
              Featured Ed Tools
            </h2>
            <p className="mt-3 text-(--color-muted) max-w-2xl">
              Free, browser-based teaching tools we built for our own classrooms — open the live demo, no signup.
              {" "}
              <span className="text-white/70">{EDTOOLS.length}+</span> tools and counting.
            </p>
          </div>
          <Link
            href="/edtools"
            className="inline-flex items-center gap-2 text-sm font-mono text-(--color-cyan) hover:gap-3 transition-all"
          >
            ALL FREE ED TOOLS <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t) => {
            const shot = getEdToolScreenshot(t.slug);
            return (
              <Link
                key={t.slug}
                href={`/edtools/${t.slug}`}
                className="card-hover glass overflow-hidden flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-(--color-bg-deeper) relative">
                  {shot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={shot}
                      alt={`${t.name} screenshot`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-(--color-purple)/30 to-(--color-cyan)/20" />
                  )}
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-1.5 py-0.5 rounded bg-(--color-cyan)/15 text-(--color-cyan) border border-(--color-cyan)/30">
                    FREE
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="kicker mb-3">{t.category}</div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-(--color-cyan) transition flex-1 min-w-0">
                      {t.name}
                    </h3>
                    <HiArrowUpRight className="w-4 h-4 shrink-0 text-white/30 group-hover:text-(--color-cyan) transition mt-1" />
                  </div>
                  <p className="text-sm text-(--color-muted) line-clamp-3 leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

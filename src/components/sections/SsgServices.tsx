import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SERVICES } from "@/lib/site-content";
import { getHomepageCopy } from "@/lib/site-settings";
import { RichText } from "@/lib/rich-text";
import { HiArrowRight } from "react-icons/hi2";
import { SsgQuickLeadForm } from "@/components/sections/SsgQuickLeadForm";

const ACCENT: Record<string, string> = {
  blue: "text-(--color-cyan)",
  cyan: "text-(--color-green)",
  purple: "text-(--color-purple-light)",
};

/** The full SSG Services list, beside a form that turns interest into a lead. */
export async function SsgServices() {
  const copy = await getHomepageCopy();
  const services = SERVICES.filter((s) => s.category === "ssg");

  return (
    <section id="ssg-services" className="relative py-4 scroll-mt-20">
      <Container>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div className="min-w-0">
            <div className="kicker mb-3">{copy.ssgKicker}</div>
            <h2
              className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05]"
              dangerouslySetInnerHTML={{ __html: copy.ssgHeadlineHtml }}
            />
          </div>
          <p className="font-mono text-xs text-(--color-muted)">
            SSG IS NOW PART OF SWDA · 10 SERVICES · EVERY ONE STARTS WITH A FREE CHECK
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.6fr_0.7fr] gap-4 items-start">
          <div className="grid sm:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
            {services.map((s) => {
              const Icon = s.icon;
              const accent = ACCENT[s.accent];
              return (
                <article key={s.id} className="relative group bg-(--color-bg-elevated) p-5 hover:bg-white/3 transition flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-6 h-6 shrink-0 ${accent}`} aria-hidden />
                    <div className="kicker text-white/60">{s.group}</div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    <Link href={s.href} className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-(--color-cyan) focus-visible:after:ring-inset">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-(--color-muted) leading-relaxed flex-1">
                    <RichText text={s.description} />
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-mono text-(--color-amber) group-hover:gap-3 transition-all">
                    {s.offer}
                    <HiArrowRight className="w-3.5 h-3.5" aria-hidden />
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <SsgQuickLeadForm services={services.map((s) => s.title)} />
            <div className="glass p-5 flex-1">
              <div className="kicker mb-3">[ WHY PROVIDERS CALL US ]</div>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  "We've done it ourselves: TPQA Grade 1, a registered PEI and IBF-accredited courses",
                  "An honest go/no-go before you pay anything",
                  "Assessor Coach and financial-sector SME available for IBF applications",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-(--color-green) font-mono" aria-hidden>✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

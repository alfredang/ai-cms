import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SERVICES } from "@/lib/site-content";
import { AI_INDUSTRIES } from "@/lib/ai-service-pages";
import { getHomepageCopy } from "@/lib/site-settings";
import { RichText } from "@/lib/rich-text";
import { HiArrowRight } from "react-icons/hi2";
import { SsgQuickLeadForm } from "@/components/sections/SsgQuickLeadForm";

const ACCENT: Record<string, string> = {
  blue: "text-(--color-cyan)",
  cyan: "text-(--color-green)",
  purple: "text-(--color-purple-light)",
};

/** The AI Services list, industry blocks and a form that turns interest into a lead. */
export async function AiServices() {
  const copy = await getHomepageCopy();
  const services = SERVICES.filter((s) => s.category === "ai-service");
  // Lead with AIaaS, then agents, training, transformation and job redesign.
  const order = ["aiaas", "ai-agent", "ai-training", "ai", "ai-job-redesign"];
  services.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

  return (
    <section id="ai-services" className="relative py-4 scroll-mt-20 overflow-hidden">
      <div
        className="glow-blob"
        style={{ top: "5%", left: "-8%", width: 560, height: 560, background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)", opacity: 0.3 }}
      />
      <Container className="relative">
        <div className="mb-6 lg:text-right">
          <div className="kicker mb-3">{copy.aiKicker}</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05]">
            <span className="gradient-text-warm">AI Services</span> that put AI to work in your business.
          </h2>
        </div>
        <div className="grid lg:grid-cols-[0.7fr_1.6fr] gap-4 items-start">
          <div className="lg:order-2 grid sm:grid-cols-2 fill-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden self-stretch">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.id} className="relative group bg-(--color-bg-elevated) p-5 hover:bg-white/3 transition flex flex-col">
                  <Icon className={`w-7 h-7 mb-2 ${ACCENT[s.accent]}`} aria-hidden />
                  <h3 className="font-display font-bold text-xl text-white leading-snug">
                    <Link href={s.href} className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-(--color-cyan) focus-visible:after:ring-inset">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-(--color-muted) leading-relaxed flex-1">
                    <RichText text={s.description} />
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/85">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-(--color-green) font-mono" aria-hidden>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {s.list && <p className="mt-3 font-mono text-xs text-(--color-cyan) leading-relaxed">{s.list}</p>}
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-mono text-(--color-amber) group-hover:gap-3 transition-all">
                    {s.offer}
                    <HiArrowRight className="w-3.5 h-3.5" aria-hidden />
                  </div>
                </article>
              );
            })}
          </div>
          <div className="lg:order-1 min-w-0 flex flex-col gap-4 self-stretch">
            <SsgQuickLeadForm
              services={services.map((s) => s.title)}
              source="home-ai-services"
              kicker="[ START WITH A FREE AUDIT ]"
              headline={
                <>
                  Where can AI <span className="gradient-text">save you time</span> first?
                </>
              }
              intro="A free 30-minute consultation on your workflows. We'll show you what's worth doing, and what isn't."
              noteLabel="Which team or workflow? (optional)"
            />
            <div className="glass p-5 flex-1">
              <div className="kicker mb-3">[ WHY TEAMS CALL US ]</div>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  "We train teams and build with AI every day, so the advice comes from real use",
                  "Independent of AI vendors and not affiliated with any of them",
                  "Decisions about people, data and approvals stay with you",
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
        <div className="mt-4">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
            <div className="kicker">[ AI AS A SERVICE, BY INDUSTRY AND FUNCTION ]</div>
            <Link href="/ai-as-a-service" className="py-2 font-mono text-xs text-(--color-cyan) hover:underline">
              See how a virtual FDE works →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
            {AI_INDUSTRIES.map((i) => (
              <Link
                key={i.title}
                href="/ai-as-a-service#industries"
                title={`AI for ${i.title}: ${i.body}`}
                className="bg-(--color-bg-elevated) p-4 hover:bg-white/5 transition font-display font-bold text-white hover:text-(--color-cyan)"
              >
                {i.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

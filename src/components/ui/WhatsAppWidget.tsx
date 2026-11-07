"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { HiXMark, HiArrowUpRight } from "react-icons/hi2";
import { RobotAvatar } from "./RobotAvatar";

/**
 * Public-site floating WhatsApp widget. Replaces the Nemo chatbot on the
 * customer-facing site (the chatbot now lives in /admin). The launcher is an
 * animated robot mascot that occasionally pops a speech bubble promoting one
 * of our services. Clicking the robot opens a small "visual queries helper" —
 * a set of one-tap topics that each deep-link to WhatsApp with a pre-filled
 * message.
 */

// One-tap topics. `label` shows on the chip; `text` is pre-filled into WhatsApp.
const QUERIES: { label: string; text: string }[] = [
  { label: "Book a free consultation", text: "Hi Tertiary Infotech Academy! I'd like to book a free consultation." },
  { label: "SWDA, IBF or PEI ATO application", text: "Hi! I need help with an ATO application (SWDA, IBF or PEI)." },
  { label: "WSQ, CASL, IBF, PWM, CPD or SCTP course", text: "Hi! I'd like to discuss developing a course (WSQ, CASL, IBF, PWM, CPD or SCTP)." },
  { label: "TPQA or CQC consultancy", text: "Hi! I need help with TPQA or a CQC." },
  { label: "LMS / TMS demo", text: "Hi! Can I see a demo of your LMS / TMS?" },
  { label: "AI agents or AI as a Service", text: "Hi! I'm interested in AI agents or AI as a Service for my organisation." },
  { label: "Claude Code, Codex, Copilot or Gemini training", text: "Hi! I'd like customised AI training for my company." },
  { label: "Mobile apps development", text: "Hi! I'd like to discuss building a native iOS / Android mobile app." },
  { label: "Pricing & quotation", text: "Hi! Could you send me pricing and a quotation?" },
];

// Speech-bubble tips the robot pops up now and then. `text` is pre-filled into
// WhatsApp when the visitor taps the bubble.
const TIPS: { message: string; text: string }[] = [
  { message: "New SWDA ATO rules? We build the mock-up website and prep your on-site.", text: "Hi! I need help with my SWDA ATO application, including the mock-up website and on-site assessment." },
  { message: "Can your new course still be WSQ? Ask me about a free route check.", text: "Hi! I'd like a free WSQ 2.0 route check for my course." },
  { message: "Got a CQC outcome from SWDA? The clock is running. Let's talk.", text: "Hi! I've received a CQC outcome and need help with it." },
  { message: "Aiming for TPQA Grade 1? It opens up to 90% funding and SCTP.", text: "Hi! I'd like to aim for TPQA Grade 1. Can you help?" },
  { message: "IBF is hard to get. We can provide the Assessor Coach and SME.", text: "Hi! I'd like help with an IBF application, including the Assessor Coach and SME." },
  { message: "Starting a private school? We help set up your PEI boards too.", text: "Hi! I'd like help with PEI registration and the Academic and Examination Boards." },
  { message: "Planning an SCTP? We advise on 2–5 month design and job placement.", text: "Hi! I'd like advice on an SCTP programme and job placement services." },
  { message: "Want an AI engineer without the hire? Ask about AI as a Service.", text: "Hi! I'd like to know about your virtual Forward Deployed Engineer service." },
  { message: "Copilot or Gemini seats going unused? We train on your own work.", text: "Hi! I'd like customised AI training for my company." },
  { message: "Want an AI agent working for your business 24/7?", text: "Hi! I'm interested in your AI agent services for my organisation." },
  { message: "Running a training centre? Ask me for an LMS / TMS demo.", text: "Hi! Can I see a demo of your LMS / TMS?" },
  { message: "Need a native iOS or Android app built?", text: "Hi! I'd like to discuss building a native iOS / Android mobile app." },
];
const TIP_FIRST_DELAY = 6000;
const TIP_GAP = 18000;
const TIP_VISIBLE = 8000;
const TIP_MAX_PER_VISIT = 4;
const TIPS_MUTED_KEY = "robot-tips-muted";

export function WhatsAppWidget({ phone = "6588666375" }: { phone?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const [offset, setOffset] = useState(0);
  const [muted, setMuted] = useState(false);
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  // Random starting tip so returning visitors see variety; respect a mute
  // from earlier in this browser session.
  useEffect(() => {
    setOffset(Math.floor(Math.random() * TIPS.length));
    if (sessionStorage.getItem(TIPS_MUTED_KEY)) setMuted(true);
  }, []);

  // Tip scheduler: show a bubble, hide it, wait, show the next one.
  useEffect(() => {
    if (isAdmin || open || muted) return;
    if (tip !== null) {
      const t = setTimeout(() => setTip(null), TIP_VISIBLE);
      return () => clearTimeout(t);
    }
    if (shown >= TIP_MAX_PER_VISIT) return;
    const t = setTimeout(() => {
      setTip((offset + shown) % TIPS.length);
      setShown((n) => n + 1);
    }, shown === 0 ? TIP_FIRST_DELAY : TIP_GAP);
    return () => clearTimeout(t);
  }, [isAdmin, open, muted, tip, shown, offset]);

  // Customer-facing widget — never render inside the admin area.
  if (isAdmin) return null;

  const digits = phone.replace(/[^\d]/g, "");
  const waLink = (text?: string) =>
    `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  const muteTips = () => {
    setTip(null);
    setMuted(true);
    sessionStorage.setItem(TIPS_MUTED_KEY, "1");
  };
  const activeTip = tip !== null && !open && !muted ? TIPS[tip] : null;

  return (
    <>
      {activeTip && (
        <div
          key={tip}
          role="status"
          aria-live="polite"
          className="robot-tip fixed bottom-[6.5rem] right-6 z-50 w-[min(78vw,270px)]"
        >
          <a
            href={waLink(activeTip.text)}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            className="block rounded-2xl rounded-br-sm border border-[#59EBFD]/30 bg-[#0C0D1A] px-4 py-3 pr-11 shadow-[0_0_40px_rgba(89,235,253,0.18)] hover:border-[#59EBFD]/60 transition"
          >
            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-[#59EBFD]/80">
              TIA Bot
            </span>
            <span className="mt-1 block text-sm leading-snug text-white/90">{activeTip.message}</span>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#F6AE64]">
              Chat with us
              <HiArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <button
            onClick={muteTips}
            aria-label="Dismiss tips"
            className="absolute top-0 right-0 w-11 h-11 grid place-items-center rounded-md text-white/40 hover:text-white hover:bg-white/10 transition"
          >
            <HiXMark className="w-4 h-4" />
          </button>
        </div>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-24 right-6 z-50 w-[min(92vw,360px)] glass rounded-2xl flex flex-col overflow-hidden border border-white/15 shadow-2xl"
        >
          <header className="flex items-center gap-3 px-4 py-3 bg-[#0B6E4F]/15 border-b border-white/10">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5C00E5] to-[#59EBFD] grid place-items-center shrink-0">
              <RobotAvatar className="w-8 h-8" />
            </span>
            <div className="min-w-0">
              <h3 className="font-bold leading-tight">Chat with us</h3>
              <p className="text-xs text-white/60">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto w-11 h-11 grid place-items-center rounded-md text-white/60 hover:text-white hover:bg-white/5 transition"
            >
              <HiXMark className="w-5 h-5" />
            </button>
          </header>

          <div className="p-3 space-y-2">
            <p className="px-1 pb-1 text-xs text-white/50">
              Pick a topic — we&apos;ll continue on WhatsApp:
            </p>
            {QUERIES.map((q) => (
              <a
                key={q.label}
                href={waLink(q.text)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Message us on WhatsApp: ${q.label}`}
                className="group flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#0B6E4F]/50 hover:bg-[#0B6E4F]/10 text-sm text-white/90 transition"
              >
                <span className="flex-1">{q.label}</span>
                <HiArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#0B6E4F] transition" />
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              title="Start a WhatsApp chat"
              className="flex items-center justify-center gap-2 mt-1 px-4 py-2.5 rounded-lg bg-[#0B6E4F] hover:bg-[#095a40] text-sm font-semibold text-white transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              Start a chat
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setTip(null);
          setOpen((o) => !o);
        }}
        aria-label={open ? "Close chat menu" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="robot-launcher fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#5C00E5] to-[#59EBFD] p-[2px] flex items-center justify-center hover:scale-105 transition"
      >
        <span className="w-full h-full rounded-full bg-[#0C0D1A] grid place-items-center overflow-hidden">
          {open ? (
            <HiXMark className="w-7 h-7 text-[#59EBFD]" />
          ) : (
            <RobotAvatar className={`w-12 h-12 ${activeTip ? "robot-greet" : ""}`} />
          )}
        </span>
        {!open && (
          // WhatsApp badge orbiting the ring; the inner span counter-rotates
          // so the logo stays upright.
          <span aria-hidden="true" className="robot-orbit pointer-events-none absolute inset-0">
            <span className="robot-orbit-badge absolute -top-2.5 left-1/2 -ml-[11px] w-[22px] h-[22px] rounded-full bg-[#25D366] border-2 border-[#0C0D1A] grid place-items-center shadow-[0_0_12px_rgba(37,211,102,0.6)]">
              <FaWhatsapp className="w-3 h-3 text-white" />
            </span>
          </span>
        )}
      </button>
    </>
  );
}

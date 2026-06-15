"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { HiXMark, HiArrowUpRight } from "react-icons/hi2";

/**
 * Public-site floating WhatsApp widget. Replaces the Nemo chatbot on the
 * customer-facing site (the chatbot now lives in /admin). Clicking the bubble
 * opens a small "visual queries helper" — a set of one-tap topics that each
 * deep-link to WhatsApp with a pre-filled message.
 */

// One-tap topics. `label` shows on the chip; `text` is pre-filled into WhatsApp.
const QUERIES: { label: string; text: string }[] = [
  { label: "Book a free consultation", text: "Hi Tertiary Infotech Academy! I'd like to book a free consultation." },
  { label: "SSG ATO application help", text: "Hi! I need help with my SSG ATO application." },
  { label: "LMS / TMS demo", text: "Hi! Can I see a demo of your LMS / TMS?" },
  { label: "AI services enquiry", text: "Hi! I'm interested in your AI services for my organisation." },
  { label: "WSQ course development", text: "Hi! I'd like to discuss WSQ course development." },
  { label: "Pricing & quotation", text: "Hi! Could you send me pricing and a quotation?" },
];

export function WhatsAppWidget({ phone = "6588666375" }: { phone?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Customer-facing widget — never render inside the admin area.
  if (pathname?.startsWith("/admin")) return null;

  const digits = phone.replace(/[^\d]/g, "");
  const waLink = (text?: string) =>
    `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-24 right-6 z-50 w-[min(92vw,360px)] glass rounded-2xl flex flex-col overflow-hidden border border-white/15 shadow-2xl"
        >
          <header className="flex items-center gap-3 px-4 py-3 bg-[#0B6E4F]/15 border-b border-white/10">
            <span className="w-9 h-9 rounded-full bg-[#0B6E4F] grid place-items-center shrink-0">
              <FaWhatsapp className="w-5 h-5 text-white" />
            </span>
            <div className="min-w-0">
              <h3 className="font-bold leading-tight">Chat with us</h3>
              <p className="text-xs text-white/60">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto w-8 h-8 grid place-items-center rounded-md text-white/60 hover:text-white hover:bg-white/5 transition"
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
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp menu" : "Chat on WhatsApp"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0B6E4F] shadow-[0_8px_30px_rgba(11,110,79,0.45)] flex items-center justify-center hover:scale-105 transition"
      >
        {open ? (
          <HiXMark className="w-7 h-7 text-white" />
        ) : (
          <FaWhatsapp className="w-7 h-7 text-white" />
        )}
      </button>
    </>
  );
}

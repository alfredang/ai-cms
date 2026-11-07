"use client";

import { useId, useState } from "react";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

/** Homepage lead form: the visitor picks one of the SSG services and we follow up. */
export function SsgQuickLeadForm({
  services,
  source = "home-ssg-services",
  kicker = "[ START WITH A FREE CHECK ]",
  headline = (
    <>
      Find out what&apos;s realistic <span className="gradient-text-warm">before you spend</span>.
    </>
  ),
  intro = "A free 30-minute consultation on your exact situation. If it isn't a good idea, we'll tell you.",
  noteLabel = "Any deadline? (optional)",
}: {
  services: string[];
  source?: string;
  kicker?: string;
  headline?: React.ReactNode;
  intro?: string;
  noteLabel?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const id = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const { service, note, ...rest } = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...rest,
          message: `Service: ${service}${note ? `\n\n${note}` : ""}`,
          source,
          turnstileToken,
        }),
      });
      if (!r.ok) throw new Error();
      setState("ok");
      form.reset();
    } catch {
      setState("err");
    }
  }

  const field =
    "w-full px-4 py-3 rounded-lg bg-white/3 border border-white/10 focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition";

  return (
    <form onSubmit={onSubmit} className="glass p-5 md:p-6 space-y-3">
      <div>
        <div className="kicker mb-2">{kicker}</div>
        <h3 className="font-display font-bold text-2xl text-white leading-tight">
          {headline}
        </h3>
        <p className="mt-2 text-sm text-(--color-muted)">
          {intro}
        </p>
      </div>
      <div>
        <label htmlFor={`${id}-service`} className="kicker block mb-2">
          I need help with
        </label>
        <select id={`${id}-service`} name="service" required defaultValue="" className={`${field} bg-(--color-bg-elevated)`}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      {[
        { name: "name", label: "Your name", type: "text", auto: "name", required: true },
        { name: "email", label: "Work email", type: "email", auto: "email", required: true },
        { name: "company", label: "Company", type: "text", auto: "organization", required: true },
        { name: "phone", label: "Phone", type: "tel", auto: "tel", required: false },
      ].map((f) => (
        <div key={f.name}>
          <label htmlFor={`${id}-${f.name}`} className="kicker block mb-2">
            {f.label}
          </label>
          <input
            id={`${id}-${f.name}`}
            name={f.name}
            type={f.type}
            autoComplete={f.auto}
            required={f.required}
            className={field}
          />
        </div>
      ))}
      <div>
        <label htmlFor={`${id}-note`} className="kicker block mb-2">
          {noteLabel}
        </label>
        <input id={`${id}-note`} name="note" className={field} />
      </div>
      <button type="submit" disabled={state === "sending"} className="btn-primary w-full justify-center disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Book my free check →"}
      </button>
      {state === "ok" && (
        <p role="status" className="text-(--color-green) text-sm font-mono">
          Thanks. A consultant will contact you within 1 business day.
        </p>
      )}
      {state === "err" && (
        <p role="status" className="text-(--color-amber) text-sm font-mono">
          That didn&apos;t send. Please check your details and try again, or message us on WhatsApp.
        </p>
      )}
      <TurnstileWidget onToken={setTurnstileToken} />
    </form>
  );
}

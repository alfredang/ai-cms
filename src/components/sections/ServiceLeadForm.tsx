"use client";

import { useId, useState } from "react";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

/**
 * Generic service-page lead form. Takes a source label so leads are
 * attributable, plus an optional free-check offer shown above the fields.
 */
export function ServiceLeadForm({
  source,
  buttonLabel = "Book my consultation →",
  qualifyingPlaceholder = "Tell us about your goals, team size, timeline…",
  compact = false,
  offer,
}: {
  source: string;
  buttonLabel?: string;
  qualifyingPlaceholder?: string;
  compact?: boolean;
  offer?: { title: string; bullets: string[] };
}) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const formId = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source, turnstileToken }),
      });
      if (!r.ok) throw new Error();
      setState("ok");
      setMsg("Thanks. A consultant will be in touch within 1 business day to arrange your free consultation.");
      form.reset();
    } catch {
      setState("err");
      setMsg("That didn't send. Please check your details and try again, or message us on WhatsApp.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={`glass ${compact ? "p-5 md:p-6" : "p-6"} space-y-4`}>
      {offer && (
        <div>
          <h2 className="font-display font-bold text-xl text-white">{offer.title}</h2>
          <p className="mt-1 text-sm text-(--color-muted)">In a 30-minute consultation, we&apos;ll answer:</p>
          <ul className="mt-2 space-y-1">
            {offer.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-white/85">
                <span className="text-(--color-green) font-mono" aria-hidden>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <Input formId={formId} name="name" label="Your name" autoComplete="name" required />
        <Input formId={formId} name="email" label="Work email" type="email" autoComplete="email" required />
        <Input formId={formId} name="company" label="Company" autoComplete="organization" required />
        <Input formId={formId} name="phone" label="Phone (Singapore)" type="tel" autoComplete="tel" />
      </div>
      <div>
        <label className="kicker block mb-2" htmlFor={`${formId}-message`}>
          Tell us more
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/10 focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition placeholder:text-white/50"
          placeholder={qualifyingPlaceholder}
        />
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-(--color-muted) font-mono">
          [ Free · reply within 1 business day · no obligation ]
        </p>
        <button type="submit" disabled={state === "sending"} className="btn-primary disabled:opacity-60">
          {state === "sending" ? "Sending…" : buttonLabel}
        </button>
      </div>
      {msg && (
        <p
          role="status"
          className={state === "ok" ? "text-(--color-green) text-sm font-mono" : "text-(--color-amber) text-sm font-mono"}
        >
          {msg}
        </p>
      )}
      <TurnstileWidget onToken={setTurnstileToken} />
    </form>
  );
}

function Input({
  formId,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  formId: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = `${formId}-${name}`;
  return (
    <div>
      <label className="kicker block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/10 focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
      />
    </div>
  );
}

import { db } from "@/db";
import { settings } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  LEAD_EMAIL_DEFAULTS,
  LEAD_AUTOREPLY_DEFAULTS,
  DEFAULT_LEAD_SOURCE_LABELS,
  LEAD_SOURCE_LABELS_KEY,
  getLeadEmailConfig,
  getLeadAutoreplyConfig,
  getLeadSourceLabels,
} from "@/lib/site-settings";
import { LEAD_EMAIL_VARIABLES } from "@/lib/email";
import { SavedToast } from "@/app/admin/_components/SavedToast";
import { SourceLabelsEditor } from "./SourceLabelsEditor";

const KEYS = {
  to: "lead_notification_email",
  cc: "lead_notification_cc",
  subject: "lead_email_subject",
  body: "lead_email_body",
} as const;

const AR_KEYS = {
  enabled: "lead_autoreply_enabled",
  cc: "lead_autoreply_cc",
  subject: "lead_autoreply_subject",
  body: "lead_autoreply_body",
} as const;

async function upsertString(key: string, value: string) {
  await db
    .insert(settings)
    .values({ key, value: value as unknown as object })
    .onConflictDoUpdate({
      target: settings.key,
      set: { value: value as unknown as object, updatedAt: new Date() },
    });
}

async function upsertJson(key: string, value: object) {
  await db
    .insert(settings)
    .values({ key, value })
    .onConflictDoUpdate({
      target: settings.key,
      set: { value, updatedAt: new Date() },
    });
}

export default async function LeadEmailSettingsPage() {
  const cfg = await getLeadEmailConfig();
  const ar = await getLeadAutoreplyConfig();
  const sourceLabels = await getLeadSourceLabels();

  async function save(formData: FormData) {
    "use server";
    await upsertString(KEYS.to, String(formData.get("to") ?? "").trim());
    await upsertString(KEYS.cc, String(formData.get("cc") ?? "").trim());
    await upsertString(KEYS.subject, String(formData.get("subject") ?? "").trim());
    await upsertString(KEYS.body, String(formData.get("body") ?? ""));

    await upsertString(AR_KEYS.enabled, formData.get("ar_enabled") ? "1" : "0");
    await upsertString(AR_KEYS.cc, String(formData.get("ar_cc") ?? "").trim());
    await upsertString(AR_KEYS.subject, String(formData.get("ar_subject") ?? "").trim());
    await upsertString(AR_KEYS.body, String(formData.get("ar_body") ?? ""));

    const labelsJson = String(formData.get("source_labels_json") ?? "{}");
    let parsed: unknown = {};
    try {
      parsed = JSON.parse(labelsJson);
    } catch {
      parsed = {};
    }
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      const clean: Record<string, string> = {};
      for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
        const code = k.trim();
        const label = typeof v === "string" ? v.trim() : "";
        if (code && label) clean[code] = label;
      }
      await upsertJson(LEAD_SOURCE_LABELS_KEY, clean);
    }

    revalidatePath("/admin/settings/lead-email");
    redirect("/admin/settings/lead-email?saved=1");
  }

  async function resetDefaults() {
    "use server";
    await upsertString(KEYS.to, LEAD_EMAIL_DEFAULTS.to);
    await upsertString(KEYS.cc, LEAD_EMAIL_DEFAULTS.cc);
    await upsertString(KEYS.subject, LEAD_EMAIL_DEFAULTS.subject);
    await upsertString(KEYS.body, LEAD_EMAIL_DEFAULTS.body);
    await upsertString(AR_KEYS.enabled, LEAD_AUTOREPLY_DEFAULTS.enabled ? "1" : "0");
    await upsertString(AR_KEYS.cc, LEAD_AUTOREPLY_DEFAULTS.cc);
    await upsertString(AR_KEYS.subject, LEAD_AUTOREPLY_DEFAULTS.subject);
    await upsertString(AR_KEYS.body, LEAD_AUTOREPLY_DEFAULTS.body);
    await upsertJson(LEAD_SOURCE_LABELS_KEY, DEFAULT_LEAD_SOURCE_LABELS);
    revalidatePath("/admin/settings/lead-email");
    redirect("/admin/settings/lead-email?saved=1");
  }

  return (
    <div>
      <SavedToast />
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold">Lead Notification Email</h2>
        <p className="text-sm text-(--color-muted) mt-1">
          Configure the email sent to your team when someone submits the contact / quotation form.
        </p>
      </div>

      <div className="glass p-6 mb-6">
        <div className="kicker mb-3">Available variables</div>
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          {LEAD_EMAIL_VARIABLES.map((v) => (
            <div key={v.token} className="flex items-baseline gap-2">
              <code className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-(--color-cyan) text-xs">
                {v.token}
              </code>
              <span className="text-(--color-muted)">{v.description}</span>
            </div>
          ))}
        </div>
      </div>

      <form action={save} className="glass p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
          <div>
            <label className="kicker block mb-2">To (recipient)</label>
            <input
              name="to"
              type="email"
              required
              defaultValue={cfg.to}
              className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
            />
          </div>
          <div>
            <label className="kicker block mb-2">CC (comma-separated)</label>
            <input
              name="cc"
              type="text"
              defaultValue={cfg.cc}
              placeholder="alice@example.com, bob@example.com"
              className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="kicker block mb-2">Subject</label>
            <input
              name="subject"
              type="text"
              required
              defaultValue={cfg.subject}
              className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="kicker block mb-2">Body (HTML supported)</label>
            <textarea
              name="body"
              required
              rows={14}
              defaultValue={cfg.body}
              className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg font-mono text-xs focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="kicker block mb-2">Source labels</label>
            <p className="text-xs text-(--color-muted) mb-3">
              Map each lead-form source code to a short, human-readable label. Used by{" "}
              <code className="px-1 bg-white/5 rounded text-(--color-cyan)">{"{SOURCE_LABEL}"}</code>{" "}
              in the subject / body above. Unknown codes fall back to the raw value.
            </p>
            <SourceLabelsEditor initial={sourceLabels} />
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <h3 className="font-display text-lg font-bold">Auto-Reply to the Enquirer</h3>
          <p className="text-sm text-(--color-muted) mt-1 mb-5">
            Acknowledgement sent automatically to the person who submitted the form. Applies to every
            lead form on the site. Replies come back to your Gmail inbox.
          </p>

          <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  name="ar_enabled"
                  type="checkbox"
                  defaultChecked={ar.enabled}
                  className="w-4 h-4 accent-(--color-cyan)"
                />
                <span className="text-sm">Send an auto-reply to the enquirer</span>
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="kicker block mb-2">CC (comma-separated)</label>
              <input
                name="ar_cc"
                type="text"
                defaultValue={ar.cc}
                placeholder="angch@tertiaryinfotech.com"
                className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="kicker block mb-2">Subject</label>
              <input
                name="ar_subject"
                type="text"
                defaultValue={ar.subject}
                className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="kicker block mb-2">Body (HTML supported)</label>
              <textarea
                name="ar_body"
                rows={16}
                defaultValue={ar.body}
                className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-lg font-mono text-xs focus:outline-none focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan)/20 transition"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5">
          <button
            type="submit"
            formAction={resetDefaults}
            className="px-4 py-2 text-sm border border-white/10 rounded-lg hover:bg-white/5 transition"
          >
            Reset to default
          </button>
          <button className="btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

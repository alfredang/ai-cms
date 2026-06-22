import { FaApple, FaGooglePlay, FaGithub } from "react-icons/fa6";
import type { MobileApp } from "@/lib/mobile-apps";

const ACCENT: Record<MobileApp["accent"], { line: string; chip: string; glow: string }> = {
  cyan: {
    line: "from-(--color-cyan) to-transparent",
    chip: "bg-(--color-cyan)/10 text-(--color-cyan) border-(--color-cyan)/30",
    glow: "from-(--color-cyan)/25",
  },
  blue: {
    line: "from-(--color-cyan) to-transparent",
    chip: "bg-(--color-cyan)/10 text-(--color-cyan) border-(--color-cyan)/30",
    glow: "from-(--color-cyan)/25",
  },
  purple: {
    line: "from-(--color-purple) to-transparent",
    chip: "bg-(--color-purple)/15 text-(--color-purple-light) border-(--color-purple)/40",
    glow: "from-(--color-purple)/30",
  },
  amber: {
    line: "from-(--color-amber) to-transparent",
    chip: "bg-(--color-amber)/10 text-(--color-amber) border-(--color-amber)/30",
    glow: "from-(--color-amber)/25",
  },
  green: {
    line: "from-(--color-green) to-transparent",
    chip: "bg-(--color-green)/10 text-(--color-green) border-(--color-green)/30",
    glow: "from-(--color-green)/25",
  },
};

export function MobileAppCard({ app }: { app: MobileApp }) {
  const a = ACCENT[app.accent];
  return (
    <div className="glass card-hover p-6 relative overflow-hidden flex flex-col">
      <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${a.line}`} />
      <div
        className={`pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${a.glow} to-transparent blur-2xl opacity-60`}
      />
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-display font-bold text-lg leading-tight">{app.name}</h3>
          <p className="text-sm text-(--color-cyan) mt-0.5">{app.tagline}</p>
        </div>
        <span className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border ${a.chip}`}>
          {app.category}
        </span>
      </div>
      <p className="text-sm text-(--color-muted) leading-relaxed flex-1">{app.blurb}</p>
      <p className="mt-4 text-[11px] font-mono text-white/45">{app.tech}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {app.ios && (
          <StoreLink href={app.ios} label="App Store" icon={<FaApple className="w-3.5 h-3.5" />} />
        )}
        {app.android && (
          <StoreLink
            href={app.android}
            label="Google Play"
            icon={<FaGooglePlay className="w-3 h-3" />}
          />
        )}
        {app.github && (
          <StoreLink href={app.github} label="GitHub" icon={<FaGithub className="w-3.5 h-3.5" />} />
        )}
      </div>
    </div>
  );
}

function StoreLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${label} →`}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/12 bg-white/3 text-xs text-white/80 hover:border-(--color-cyan)/50 hover:text-(--color-cyan) transition"
    >
      {icon}
      {label}
    </a>
  );
}

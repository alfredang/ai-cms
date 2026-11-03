import { useId } from "react";

/**
 * Cute robot mascot used as the public-site chat launcher. Pure SVG; all
 * motion (float, blink, antenna glow) is driven by the `.robot-*`
 * classes in globals.css so it can be paused for prefers-reduced-motion.
 */
export function RobotAvatar({ className = "" }: { className?: string }) {
  // Unique gradient ids — the avatar renders twice (launcher + panel header).
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const visor = `robot-visor-${uid}`;
  const shell = `robot-shell-${uid}`;

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={visor} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5C00E5" />
          <stop offset="100%" stopColor="#1B2A6B" />
        </linearGradient>
        <linearGradient id={shell} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4F7FF" />
          <stop offset="100%" stopColor="#C9D3EA" />
        </linearGradient>
      </defs>

      <g className="robot-float">
        {/* Antenna */}
        <line x1="32" y1="14" x2="32" y2="6" stroke="#C9D3EA" strokeWidth="2.5" strokeLinecap="round" />
        <circle className="robot-antenna" cx="32" cy="5" r="3.5" fill="#F6AE64" />

        {/* Ears */}
        <rect x="6" y="26" width="6" height="12" rx="3" fill="#59EBFD" />
        <rect x="52" y="26" width="6" height="12" rx="3" fill="#59EBFD" />

        {/* Head */}
        <rect x="10" y="13" width="44" height="38" rx="15" fill={`url(#${shell})`} />

        {/* Visor */}
        <rect x="15" y="20" width="34" height="23" rx="11" fill={`url(#${visor})`} />

        {/* Eyes */}
        <g className="robot-eyes">
          <ellipse cx="25" cy="30" rx="3.6" ry="4.4" fill="#59EBFD" />
          <ellipse cx="39" cy="30" rx="3.6" ry="4.4" fill="#59EBFD" />
          <circle cx="26.2" cy="28.4" r="1.2" fill="#FFFFFF" />
          <circle cx="40.2" cy="28.4" r="1.2" fill="#FFFFFF" />
        </g>

        {/* Smile + cheeks */}
        <path d="M27 37.5 Q32 41 37 37.5" stroke="#59EBFD" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="19.5" cy="37" r="2" fill="#F6AE64" opacity="0.7" />
        <circle cx="44.5" cy="37" r="2" fill="#F6AE64" opacity="0.7" />
      </g>
    </svg>
  );
}

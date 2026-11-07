/**
 * Bespoke hero visual: everything we build and every approval we handle,
 * wired into one agentic core. Each node links to its service.
 */
const LEFT = [
  { label: "WSQ · CASL", href: "/wsq-course-development", title: "WSQ and CASL course development" },
  { label: "IBF COURSES", href: "/ibf-course-development", title: "IBF course development" },
  { label: "SWDA ATO", href: "/ssg-ato-application", title: "SWDA ATO application" },
  { label: "TPQA · CQC", href: "/tpqa-consultancy", title: "TPQA and CQC consultancy" },
];
const RIGHT = [
  { label: "LMS · TMS", href: "/training-management-system", title: "AI-powered LMS and TMS" },
  { label: "AI AGENTS", href: "/ai-agent-deployment", title: "AI agent deployment" },
  { label: "MOBILE APPS", href: "/mobile-app-development", title: "Mobile app development" },
  { label: "CMS · HRMS", href: "/content-management-system", title: "CMS and HR systems" },
];
const ROWS = [70, 190, 310, 430];
const TAP = [214, 236, 264, 286];
const BEND_L = [220, 200, 200, 220];
const BEND_R = [400, 420, 420, 400];

function Node({
  node,
  x,
  y,
  stroke,
  text,
}: {
  node: { label: string; href: string; title: string };
  x: number;
  y: number;
  stroke: string;
  text: string;
}) {
  return (
    <a href={node.href} className="circuit-node" aria-label={node.title}>
      <title>{node.title}</title>
      <rect x={x} y={y - 24} width="140" height="48" rx="10" fill="#0C0D1A" stroke={stroke} strokeOpacity="0.55" />
      <text x={x + 70} y={y + 5} textAnchor="middle" fill={text} fontSize="14" fontWeight="600" className="font-mono">
        {node.label}
      </text>
    </a>
  );
}

export function HeroCircuit() {
  const leftPaths = ROWS.map((y, i) => `M 240 ${TAP[i]} H ${BEND_L[i]} V ${y} H 150`);
  const rightPaths = ROWS.map((y, i) => `M 380 ${TAP[i]} H ${BEND_R[i]} V ${y} H 470`);
  return (
    <svg viewBox="0 0 620 500" className="w-full h-auto max-h-[62vh]" role="group" aria-label="Our services, connected to one agentic AI core">
      <defs>
        <linearGradient id="circuit-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5C00E5" />
          <stop offset="1" stopColor="#59EBFD" />
        </linearGradient>
      </defs>
      {leftPaths.map((d) => (
        <path key={d} d={d} fill="none" stroke="#59EBFD" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {rightPaths.map((d) => (
        <path key={d} d={d} fill="none" stroke="#8757F2" strokeOpacity="0.45" strokeWidth="1.5" />
      ))}
      {leftPaths.map((d, i) => (
        <circle key={`l${i}`} r="3.5" fill="#59EBFD" className="circuit-pulse">
          <animateMotion dur={`${3.2 + i * 0.5}s`} begin={`-${i * 0.6}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
      {rightPaths.map((d, i) => (
        <circle key={`r${i}`} r="3.5" fill="#F6AE64" className="circuit-pulse">
          <animateMotion dur={`${3.6 + i * 0.4}s`} begin={`-${0.4 + i * 0.5}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
      <circle cx="310" cy="250" r="112" fill="none" stroke="#59EBFD" strokeOpacity="0.28" strokeDasharray="4 10" className="circuit-spin" />
      <circle cx="310" cy="250" r="94" fill="none" stroke="#8757F2" strokeOpacity="0.4" strokeDasharray="30 14" className="circuit-spin-reverse" />
      <polygon points="310,180 371,215 371,285 310,320 249,285 249,215" fill="#0C0D1A" stroke="url(#circuit-core)" strokeWidth="2.5" />
      <text x="310" y="240" textAnchor="middle" fill="#FFFFFF" fontSize="19" fontWeight="800" className="font-display">
        AGENTIC AI
      </text>
      <text x="310" y="264" textAnchor="middle" fill="#59EBFD" fontSize="12" letterSpacing="2.5" className="font-mono">
        ONE CORE
      </text>
      {LEFT.map((n, i) => (
        <Node key={n.label} node={n} x={10} y={ROWS[i]} stroke="#59EBFD" text="#59EBFD" />
      ))}
      {RIGHT.map((n, i) => (
        <Node key={n.label} node={n} x={470} y={ROWS[i]} stroke="#8757F2" text="#F6AE64" />
      ))}
    </svg>
  );
}

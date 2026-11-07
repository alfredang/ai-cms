import {
  HiAcademicCap,
  HiBookOpen,
  HiSparkles,
  HiShieldCheck,
  HiCpuChip,
  HiBuildingOffice2,
  HiCodeBracket,
  HiChartBar,
  HiRocketLaunch,
  HiClipboardDocumentList,
  HiBuildingLibrary,
  HiCheckBadge,
  HiNewspaper,
  HiUserGroup,
  HiBolt,
  HiDevicePhoneMobile,
  HiBanknotes,
  HiWrenchScrewdriver,
  HiClock,
  HiArrowsRightLeft,
  HiDocumentMagnifyingGlass,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

import { ANDROID_LIVE_COUNT, IOS_LIVE_COUNT } from "@/lib/mobile-apps";

type Service = {
  id: string;
  icon: IconType;
  title: string;
  group?: string;
  description: string;
  /** The free check offered as the lead hook. */
  offer?: string;
  /** Short products or areas line shown on AI Services cards. */
  list?: string;
  features: string[];
  accent: "blue" | "cyan" | "purple";
  href: string;
  category: "ssg" | "ai" | "ai-service";
};

export const SERVICES: Service[] = [
  {
    id: "wsq-casl",
    icon: HiClipboardDocumentList,
    title: "WSQ & CASL Course Development",
    group: "Course development",
    description:
      "**WSQ courseware development** and **CASL course development** under the new WSQ 2.0 rules, from the route check to Course Proposal and full courseware.",
    offer: "Free WSQ 2.0 route check",
    features: ["WSQ 2.0 route check", "CASL course development", "Course Proposal", "Full courseware"],
    accent: "blue" as const,
    href: "/wsq-course-development",
    category: "ssg" as const,
  },
  {
    id: "ibf-course",
    icon: HiBanknotes,
    title: "IBF Course Development",
    group: "Course development",
    description:
      "**IBF course development** for IBF-STS, FTS and Core FAA/SFA CPD courses, built from the TSC, with the Assessor Coach and financial-sector SME provided.",
    offer: "Free IBF course go/no-go",
    features: ["IBF-STS & FTS", "TSC mapping", "Course Prospectus", "Marks-based rubric"],
    accent: "blue" as const,
    href: "/ibf-course-development",
    category: "ssg" as const,
  },
  {
    id: "pwm-course",
    icon: HiWrenchScrewdriver,
    title: "PWM Course Development",
    group: "Course development",
    description:
      "**PWM course development** for Progressive Wage Model sectors, with the right TSCs, entry evidence and courseware that suits frontline workers.",
    offer: "Free PWM course scoping check",
    features: ["Entry-route check", "Sector & TSC mapping", "Course Proposal", "Frontline courseware"],
    accent: "blue" as const,
    href: "/pwm-course-development",
    category: "ssg" as const,
  },
  {
    id: "cpd-course",
    icon: HiClock,
    title: "CPD Course Development",
    group: "Course development",
    description:
      "**CPD course development**, plus advice on how to get approved by CPD authorisation bodies such as TAEPP, IBF and professional societies in Singapore.",
    offer: "Free CPD mapping check",
    features: ["TAEPP & societies", "Core FAA/SFA CPD", "Approval advice", "CPD tracking"],
    accent: "blue" as const,
    href: "/cpd-course-development",
    category: "ssg" as const,
  },
  {
    id: "sctp-module",
    icon: HiArrowsRightLeft,
    title: "SCTP Module Development",
    group: "Course development",
    description:
      "**SCTP module development**: multi-module training of 2–5 months that meets job demand, plus consultancy on the job placement services needed for eligibility.",
    offer: "Free SCTP readiness check",
    features: ["2–5 month design", "Job placement consultancy", "Industry projects", "Partner MOUs"],
    accent: "blue" as const,
    href: "/sctp-module-development",
    category: "ssg" as const,
  },
  {
    id: "swda-ato",
    icon: HiBuildingLibrary,
    title: "SWDA ATO Application",
    group: "ATO applications",
    description:
      "Our **ATO service in Singapore** and **SWDA OR service** cover the new requirements end to end, including the **mock-up website** and rehearsal for the on-site assessment.",
    offer: "Free ATO readiness check",
    features: ["Stage 1 & 2 documents", "Policies & Operations Manual", "Course Application", "On-site preparation"],
    accent: "cyan" as const,
    href: "/ssg-ato-application",
    category: "ssg" as const,
  },
  {
    id: "ibf-ato",
    icon: HiBuildingOffice2,
    title: "IBF ATO Application",
    group: "ATO applications",
    description:
      "IBF is notoriously hard to get approved. Our **SWDA IBF OR service** starts with an honest go/no-go and can provide the Assessor Coach and financial-sector SME.",
    offer: "Free IBF ATO go/no-go",
    features: ["Track record review", "Organisation Criteria", "Quality Manual", "Fit and Proper"],
    accent: "cyan" as const,
    href: "/ibf-ato-application",
    category: "ssg" as const,
  },
  {
    id: "pei-ato",
    icon: HiAcademicCap,
    title: "PEI ATO Application",
    group: "ATO applications",
    description:
      "A **PEI service** for Private Education Institution registration under the ERF, including help setting up your Academic and Examination Boards.",
    offer: "Free PEI route check",
    features: ["Route check", "Boards & managers", "Premises & contracts", "Site inspection"],
    accent: "cyan" as const,
    href: "/pei-ato-application",
    category: "ssg" as const,
  },
  {
    id: "tpqa",
    icon: HiCheckBadge,
    title: "TPQA Consultancy",
    group: "Quality & audit",
    description:
      "Aim for **TPQA Grade 1**, the requirement for Tier 1 courses funded up to 90% and SCTP. A **TPQA service** with mock **TPQA audit**, remediation and rehearsal.",
    offer: "Free TPQA Grade 1 readiness review",
    features: ["Mock TPQA audit", "Evidence review", "Gap remediation", "Team rehearsal"],
    accent: "purple" as const,
    href: "/tpqa-consultancy",
    category: "ssg" as const,
  },
  {
    id: "cqc",
    icon: HiDocumentMagnifyingGlass,
    title: "CQC Consultancy",
    group: "Quality & audit",
    description:
      "**CQC audit** support when SWDA checks a live course: Improvement Plans, courseware rebuilds and periodic-check replies against tight deadlines.",
    offer: "Free CQC outcome review",
    features: ["Improvement Plans", "Courseware rebuilds", "Periodic checks", "Deployed versions traced"],
    accent: "purple" as const,
    href: "/cqc-consultancy",
    category: "ssg" as const,
  },
  {
    id: "tms",
    icon: HiAcademicCap,
    title: "Training Management System",
    description:
      "Streamline your entire training lifecycle with our comprehensive TMS platform. From scheduling to certification, manage it all in one place.",
    features: [
      "Self-hosted on your domain — you own the data",
      "Course scheduling & management",
      "Enrollment & registration workflows",
      "Reporting & analytics dashboards",
      "Scalable for institutions of any size",
    ],
    accent: "blue" as const,
    href: "/training-management-system",
    category: "ai" as const,
  },
  {
    id: "lms",
    icon: HiBookOpen,
    title: "Learning Management System",
    description:
      "Deliver engaging, interactive learning experiences with our AI-enhanced LMS. Built for modern learners and educators alike.",
    features: [
      "Self-hosted on your domain — you own the data",
      "Interactive eLearning delivery",
      "Assessment & progress tracking",
      "Instructor dashboards & analytics",
      "Cloud-based multi-tenant platform",
    ],
    accent: "cyan" as const,
    href: "/learning-management-system",
    category: "ai" as const,
  },
  {
    id: "ai",
    icon: HiSparkles,
    title: "AI Transformation & Solutions",
    offer: "Free AI transformation evaluation",
    list: "Agentic AI · n8n · Claude Code · OpenClaw · Harness Systems",
    description:
      "**AI transformation evaluation and consultation**, then production AI systems, automations and bespoke software, from agentic workflows to full-stack tools.",
    features: [
      "Agentic AI · n8n · Claude Code · OpenCLAW",
      "Harness Systems integration",
      "Bespoke full-stack web tools across frameworks",
      "Native and cross-platform mobile apps",
    ],
    accent: "purple" as const,
    href: "/ai-solutions",
    category: "ai-service" as const,
  },
  {
    id: "marketplace",
    icon: HiBuildingOffice2,
    title: "Marketplace App Development",
    description:
      "Two-sided marketplace platforms built end to end — full-stack web app plus native iOS and Android, all on one shared API. See the Potluckhub build.",
    features: [
      "Web marketplace + checkout (Next.js)",
      "Native iOS (SwiftUI) & Android (Compose)",
      "One shared API · payments · payouts",
      "Verification, reviews & ratings built in",
    ],
    accent: "purple" as const,
    href: "/marketplace-development",
    category: "ai" as const,
  },
  {
    id: "mobile",
    icon: HiDevicePhoneMobile,
    title: "Mobile App Development",
    description:
      `**Mobile apps development in Singapore** — native apps with a live portfolio of **${IOS_LIVE_COUNT} iOS apps** on the App Store and **${ANDROID_LIVE_COUNT} Android apps** on Google Play.`,
    features: [
      "Native iOS (SwiftUI) & Android (Compose)",
      "Backend / shared API when you need one",
      "Push, in-app purchase & on-device AI",
      "App Store + Google Play submission",
    ],
    accent: "cyan" as const,
    href: "/mobile-app-development",
    category: "ai" as const,
  },
  {
    id: "cms",
    icon: HiNewspaper,
    title: "Content Management System",
    description:
      "Self-hosted, AI-powered CMS built for lead generation and SEO — every page is a funnel, every route is search-indexed.",
    features: [
      "Self-hosted on your domain — own the data",
      "AI authoring with Claude Agent SDK",
      "SEO + JSON-LD baked into every route",
      "Source-tagged lead capture forms",
    ],
    accent: "blue" as const,
    href: "/content-management-system",
    category: "ai" as const,
  },
  {
    id: "hr",
    icon: HiUserGroup,
    title: "HR Management System",
    description:
      "Modern HRMS — payroll, leave, expense, appraisal, training and onboarding — built on Next.js with Singapore CPF + IRAS-ready payroll.",
    features: [
      "Payroll · CPF · IRAS-ready",
      "Leave + expense workflows",
      "Performance appraisal & 360°",
      "Self-hosted, white-labeled",
    ],
    accent: "cyan" as const,
    href: "/hr-management-system",
    category: "ai" as const,
  },
  {
    id: "ai-agent",
    icon: HiBolt,
    title: "AI Agent Deployment",
    description:
      "**AI agent deployment** and **agentic AI development**, set up safely in your business, with permissions, approvals and cost limits from day one.",
    offer: "Free AI agent fit check",
    list: "OpenClaw · Hermes · Meta Muse · OpenAI Dots · Grok Bot · Cue · Claude Duet · Gemini Spark",
    features: [
      "OpenClaw · Hermes · Muse · Dots · Grok Bot",
      "Custom Claude Agent SDK builds",
      "Webhook + n8n + API integration",
      "Observability + cost guardrails",
    ],
    accent: "purple" as const,
    href: "/ai-agent-deployment",
    category: "ai-service" as const,
  },
  {
    id: "aiaas",
    icon: HiCpuChip,
    title: "AI as a Service (AIaaS)",
    offer: "Free AI workflow audit",
    list: "Finance · Marketing · Legal · Retail · HR · Sales · Operations · More",
    description:
      "A **virtual Forward Deployed Engineer** learns how your company works, deploys AI into your real workflows and keeps optimising them, without you hiring an AI team.",
    features: ["Virtual FDE", "Workflow mapping", "Integrations & guardrails", "Any industry"],
    accent: "cyan" as const,
    href: "/ai-as-a-service",
    category: "ai-service" as const,
  },
  {
    id: "ai-training",
    icon: HiBookOpen,
    title: "AI Training for Business",
    offer: "Free training needs check",
    list: "Claude Code · Codex · Microsoft Copilot · Gemini",
    description:
      "**Corporate AI training** customised and contextualised to your company, so your people practise on their own workflows and use cases, not generic demos.",
    features: ["Claude Code", "Codex", "Microsoft Copilot", "Gemini"],
    accent: "blue" as const,
    href: "/ai-training-for-business",
    category: "ai-service" as const,
  },
];

export const WHY_CHOOSE_US = [
  { icon: HiShieldCheck, title: "Secure & Scalable", description: "Enterprise-grade security with infrastructure that scales alongside your growth.", accent: "blue" as const },
  { icon: HiCpuChip, title: "AI Integration", description: "Cutting-edge AI capabilities woven seamlessly into every solution we deliver.", accent: "purple" as const },
  { icon: HiBuildingOffice2, title: "Enterprise Ready", description: "Robust architecture built for organizations of any size, from startups to enterprises.", accent: "cyan" as const },
  { icon: HiCodeBracket, title: "Custom Development", description: "Tailored solutions engineered to fit your unique business requirements.", accent: "blue" as const },
  { icon: HiChartBar, title: "Data-Driven Insights", description: "Actionable analytics and intelligent reporting to power smarter decisions.", accent: "purple" as const },
  { icon: HiRocketLaunch, title: "Fast Deployment", description: "Rapid implementation with agile methodology. Go live faster without compromising quality.", accent: "cyan" as const },
];

export const AI_LMS_TMS_FEATURES = [
  "WSQ and TPQA compliant out of the box",
  "Fully SSG API integrated — TPGateway, MySkillsFuture, attendance & enrolment",
  "50+ EdTools for trainers — quizzes, polls, breakouts, AI tutor, code sandbox",
  "Native integration with Google Meet, Zoom, and Microsoft Teams",
  "Auto enrolment, invoicing, and SkillsFuture claim workflows",
  "CP & Courseware Generator — agent-built lesson plans, decks, and assessments",
  "Claude Code-powered AI agent — content authoring, marking, and learner support",
];

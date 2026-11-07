// Content + metadata for the dedicated service pages.
// Pages compose this with components/sections/ServicePageTemplate.
//
// Admin can override any of these fields per slug via the `settings` table
// using the key `service_page:<slug>` (JSONB). See getServicePageOverride() in
// site-settings.ts; defaults in this file are the fallback.

import { AI_SERVICE_PAGES } from "@/lib/ai-service-pages";
import { SSG_SERVICE_PAGES } from "@/lib/ssg-service-pages";

export type TimelineStep = {
  /** Short title, e.g. "Discovery", "Quotation". */
  title: string;
  /** Optional duration / status chip (e.g. "Week 0 · free"). */
  duration?: string;
  /** Body copy describing the step. */
  body: string;
  /** Tailwind accent color used for icon/ring/chip. */
  accent?: "cyan" | "blue" | "purple" | "amber" | "green";
};

/** A live client deployment showcased on a service page. */
export type ServiceClient = {
  /** Client / company name. */
  name: string;
  /** Short industry line, e.g. "Halal F&B training · Singapore". */
  category: string;
  /** Public site we built / run for them. */
  url: string;
  /** Screenshot of the live site, served from /public. */
  screenshot: string;
  /** 2–3 sentence description of the business and what we delivered. */
  description: string;
  /** Optional highlight chips, e.g. "7 courses", "Halal-certified". */
  highlights?: string[];
};

export type ServicePageContent = {
  slug: string;
  title: string;
  hero: {
    kicker: string;
    /** HTML allowed for accent spans. */
    headlineHtml: string;
    subhead: string;
  };
  meta: {
    title: string;
    description: string;
    /** Comma-separated target keywords for <meta name="keywords">. */
    keywords?: string;
  };
  /** "Service type" used in Schema.org Service @type. */
  serviceType: string;
  /**
   * Long-form, keyword-rich overview rendered under the hero. Copy fields across
   * this type accept `**keyword**` markup, rendered bold by RichText.
   */
  overview?: {
    kicker?: string;
    heading: string;
    paragraphs: string[];
    sections?: { heading: string; paragraphs: string[] }[];
  };
  /** Short intro above the timeline section. */
  processIntro?: string;
  /** Process / journey steps with optional visual timeline rendering. */
  timeline?: TimelineStep[];
  benefits: { title: string; body: string }[];
  whatsIncluded: string[];
  /** Live client deployments; rendered as a portfolio section when present. */
  clients?: ServiceClient[];
  faq: { q: string; a: string }[];
  /** Pains the visitor recognises; rendered directly under the hero. */
  pains?: { title: string; body: string }[];
  /** A grid of blocks under the pains, such as industries, products or tracks. */
  showcase?: {
    id: string;
    kicker: string;
    heading: string;
    intro?: string;
    items: { title: string; body: string; meta?: string }[];
  };
  /** The free check offered beside the hero form. */
  offer?: {
    title: string;
    bullets: string[];
    buttonLabel: string;
    placeholder: string;
  };
  /** Source label sent with the lead form POST. */
  leadSource: string;
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  ...SSG_SERVICE_PAGES,
  ...AI_SERVICE_PAGES,
  "training-management-system": {
    slug: "training-management-system",
    title: "Training Management System (TMS)",
    leadSource: "tms-page",
    serviceType: "Training Management System",
    processIntro:
      "From discovery through go-live and SSG integration — predictable, fixed-fee delivery.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. We map your training programs, SSG / TPGateway state, billing flows, and integration points." },
      { title: "Demo & Scoping", duration: "Week 1", accent: "blue", body: "Live TMS walkthrough on your domain with sample data. We agree the integration scope (TPGateway, SSO, accounting)." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal with timeline guarantees. No surprises." },
      { title: "Build & Migrate", duration: "Weeks 3–8", accent: "amber", body: "Deployment on your domain, brand assets applied, SSG / TPGateway integration, data migration from your existing tools." },
      { title: "Go Live", duration: "Week 8+", accent: "green", body: "Hand-off, admin training, runbook, 30-day post-launch support. You own your data and deployment." },
    ],
    hero: {
      kicker: "[ TMS · WSQ · SSG-READY ]",
      headlineHtml:
        '<span class="gradient-text">Training Management System</span> for Singapore training providers.',
      subhead:
        "Streamline your entire training lifecycle — scheduling, enrollment, attendance, e-certificates, SkillsFuture funding claims — in one platform built for WSQ-compliant ATOs.",
    },
    meta: {
      title: "Training Management System (TMS) Singapore — WSQ & SSG-Ready",
      description:
        "End-to-end TMS for Singapore training providers. Course scheduling, enrollment workflows, attendance, e-cert issuance and SSG funding-claim integration. Book a free demo.",
    },
    benefits: [
      {
        title: "Self-hosted on your domain",
        body: "Your TMS, your data, your branding. Deployed to your own infrastructure (Coolify, AWS, Vercel, on-prem) — no SaaS lock-in, no per-seat fees, no vendor exit risk.",
      },
      {
        title: "SSG / TPGateway integration",
        body: "Submit course runs, claim funding and report attendance directly via the TPGateway API — no manual CSV uploads.",
      },
      {
        title: "End-to-end enrollment",
        body: "Public-facing course catalog, online registration, SkillsFuture Credit acceptance, invoicing, and payment reconciliation in one place.",
      },
      {
        title: "Trainer & resource scheduling",
        body: "Capacity-aware scheduling: trainer availability, room bookings, equipment, conflict detection.",
      },
    ],
    whatsIncluded: [
      "Self-hosted deployment on your domain — you own the data and code",
      "Custom-branded TMS with your logo, colors and copy",
      "SSG / TPGateway API integration and course-run submission",
      "Online registration + SkillsFuture Credit + invoice + e-receipt flow",
      "E-attendance via mobile (SSG-compliant) and physical card reader",
      "Trainer / room / equipment scheduling with conflict detection",
      "Self-serve admin: courses, fees, runs, learners, reports",
    ],
    faq: [
      {
        q: "Do you integrate with SSG and SkillsFuture Credit?",
        a: "Yes — course runs are submitted to TPGateway via API; SkillsFuture Credit redemption is handled through the standard SSG learner-facing flow with full audit trail for TPQA.",
      },
      {
        q: "Is the TMS open-source?",
        a: "The core platform is built on our open-source EdTools stack. You own the deployment and the data. We provide professional services for customisation, integration and support.",
      },
      {
        q: "How does the TMS price compare to off-the-shelf SaaS?",
        a: "No per-user, per-transaction or recurring SaaS fees. You pay for build, deployment and optional ongoing support — typically less than 12 months of equivalent SaaS for a mid-size ATO.",
      },
      {
        q: "Can it work alongside our existing accounting / CRM?",
        a: "Yes. Webhooks and REST APIs export invoices, payments and learner records into Xero, QuickBooks, Salesforce, HubSpot and similar systems.",
      },
    ],
  },
  "learning-management-system": {
    slug: "learning-management-system",
    title: "Learning Management System (LMS)",
    leadSource: "lms-page",
    serviceType: "Learning Management System",
    processIntro: "From scoping through course migration to learner go-live.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "Map your existing courses, learner journeys, certification flow, SSO and integration points." },
      { title: "Demo & Scoping", duration: "Week 1", accent: "blue", body: "Live LMS walkthrough. Confirm SCORM / xAPI requirements, branding, and any custom assessments." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal with migration scope and timeline." },
      { title: "Build & Migrate", duration: "Weeks 3–6", accent: "amber", body: "LMS deployment, course content migration, SCORM import, assessment configuration, instructor training." },
      { title: "Go Live", duration: "Week 6+", accent: "green", body: "Learners onboarded, certificates issued, 30-day support." },
    ],
    hero: {
      kicker: "[ LMS · WSQ · TPQA ]",
      headlineHtml:
        'AI-enhanced <span class="gradient-text">Learning Management System</span> for WSQ delivery.',
      subhead:
        "Deliver interactive eLearning, run assessments, track competency and stay TPQA-ready — without paying per-seat SaaS fees.",
    },
    meta: {
      title: "Learning Management System (LMS) Singapore — AI-Enhanced, WSQ-Ready",
      description:
        "Cloud-based, multi-tenant LMS for Singapore training providers. Interactive eLearning, assessments, instructor dashboards, AI-assisted content creation. Book a free demo.",
    },
    benefits: [
      {
        title: "Self-hosted on your domain",
        body: "Your LMS, your data, your branding. Deployed to your own infrastructure (Coolify, AWS, Vercel, on-prem) — no SaaS lock-in, no per-seat fees, no vendor exit risk.",
      },
      {
        title: "Interactive eLearning delivery",
        body: "SCORM, xAPI, HTML5, video, quizzes and discussions — all rendered on a fast, mobile-first learner UI.",
      },
      {
        title: "Assessment & competency tracking",
        body: "Formative + summative assessments mapped to WSQ Competency Units. Auto-grading + manual moderation workflows.",
      },
      {
        title: "AI content authoring",
        body: "Built-in Claude Agent SDK assist for outlining modules, drafting quiz items, generating summaries and translations.",
      },
    ],
    whatsIncluded: [
      "Self-hosted deployment on your domain — you own the data and code",
      "Custom-branded LMS with your logo, colors and copy",
      "Course authoring (rich text, video, quizzes, SCORM import)",
      "WSQ Competency mapping + assessment plan",
      "E-certificate issuance (with optional blockchain anchoring)",
      "Instructor + admin dashboards with cohort analytics",
      "Single Sign-On (SSO) integration with your existing identity provider",
    ],
    faq: [
      {
        q: "Does it work for SCORM and existing course packages?",
        a: "Yes — full SCORM 1.2 / 2004 and xAPI support. Import existing packages without re-authoring.",
      },
      {
        q: "Can learners use it on mobile?",
        a: "The learner UI is fully responsive; we also ship an optional PWA mode for offline content review.",
      },
      {
        q: "How is data hosted?",
        a: "Default deployment is on a Coolify-managed Singapore region instance with daily backups. Self-hosted on-prem is available for enterprise.",
      },
      {
        q: "Is it open-source?",
        a: "Built on our open-source EdTools stack. You retain full ownership of code and data on your deployment.",
      },
    ],
  },
  "ai-solutions": {
    slug: "ai-solutions",
    title: "AI Transformation Evaluation & Consultation",
    leadSource: "ai-solutions-page",
    serviceType: "AI Transformation Evaluation and Consultation",
    processIntro:
      "From evaluation to production deployment — a clear roadmap first, then agile 2-week sprints.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. We map your business goals, current systems and where AI could genuinely move the numbers." },
      { title: "AI Evaluation", duration: "Weeks 1–2", accent: "blue", body: "Process, data and skills readiness review, plus a ranked list of use cases scored on value, effort and risk." },
      { title: "Roadmap & Quote", duration: "Week 3", accent: "purple", body: "**AI transformation consultation** workshop with your leadership: the roadmap, the architecture and a fixed-fee proposal for the first build." },
      { title: "Build & Iterate", duration: "Weeks 4+", accent: "amber", body: "**Agentic AI development** in 2-week sprints with weekly demos — Claude agents, n8n automations, Next.js and mobile apps." },
      { title: "Go Live", duration: "End of project", accent: "green", body: "Production deployment, observability dashboards, runbooks, staff training and 30-day post-launch support." },
    ],
    hero: {
      kicker: "[ AI EVALUATION · CONSULTATION · AGENTIC AI ]",
      headlineHtml:
        '<span class="gradient-text">AI Transformation Evaluation &amp; Consultation</span> for Singapore organisations.',
      subhead:
        "Independent **AI transformation evaluation and consultation**, then hands-on **agentic AI development** — from AI-powered admin assistants to internal tools and public-facing AI products, backed by a 12-year track record in Singapore EdTech.",
    },
    meta: {
      title: "AI Transformation Evaluation & Consultation Singapore",
      description:
        "AI transformation evaluation and consultation for Singapore organisations: readiness review, use-case roadmap, then agentic AI development. Book a free call.",
      keywords:
        "AI transformation evaluation and consultation, AI transformation consultation Singapore, AI readiness assessment, AI consultancy Singapore, agentic AI development, AI strategy roadmap, AI solutions Singapore",
    },
    overview: {
      kicker: "[ AI TRANSFORMATION ]",
      heading: "AI transformation evaluation and consultation, before you build",
      paragraphs: [
        "Most AI projects fail for business reasons, not technical ones: the wrong process was automated, the data wasn't ready, or nobody owned the result. Our **AI transformation evaluation and consultation** service starts by finding where AI will actually pay off in your organisation — and where it won't — before a single line of code is written.",
        "The **AI transformation evaluation** looks at your workflows, systems, data quality and team skills, then scores each candidate use case on value, effort and risk. The **AI transformation consultation** turns that evaluation into a practical roadmap your leadership can approve: what to build first, what it costs, how success is measured and who owns it.",
        "Because we also build, the roadmap is grounded in delivery. When you're ready, the same team moves into **agentic AI development** and [AI agent deployment](/ai-agent-deployment), so nothing is lost between the consultants and the engineers.",
      ],
      sections: [
        {
          heading: "AI transformation evaluation",
          paragraphs: [
            "A structured review covering process mapping, data readiness, security and PDPA considerations, existing systems and staff capability. You get a scored use-case register and a frank view of quick wins versus long bets.",
          ],
        },
        {
          heading: "AI transformation consultation",
          paragraphs: [
            "Leadership workshops that turn the evaluation into a phased roadmap — architecture, model choice, build-versus-buy, change management and KPIs. Our **AI transformation consultation** is vendor-neutral: we recommend what fits, including tools we don't build.",
          ],
        },
        {
          heading: "Agentic AI development",
          paragraphs: [
            "**Agentic AI development** with the Claude Agent SDK and n8n: agents that draft documents, triage enquiries, summarise leads and fill compliance forms, wired into Gmail, Slack, your CRM and your custom APIs.",
          ],
        },
        {
          heading: "Bespoke software and apps",
          paragraphs: [
            "Production-grade Next.js web tools and native mobile apps when the roadmap calls for them — see our [mobile apps development in Singapore](/mobile-app-development) and [AI LMS / TMS](/learning-management-system) work.",
          ],
        },
      ],
    },
    benefits: [
      {
        title: "Evaluation before investment",
        body: "The evaluation tells you which use cases are worth funding — with value, effort and risk scored — before you commit budget.",
      },
      {
        title: "A roadmap leadership can approve",
        body: "Our **AI transformation consultation** produces a phased plan with costs, owners and KPIs, not a slide deck of buzzwords.",
      },
      {
        title: "Agentic AI development",
        body: "Claude-powered agents that perform real work — draft posts, summarise leads, triage support, fill compliance forms — plus n8n automation across your tools.",
      },
      {
        title: "Bespoke web / mobile apps",
        body: "Production-grade Next.js and native iOS / Android apps, with App Store and Google Play submission included.",
      },
    ],
    whatsIncluded: [
      "**AI transformation evaluation** — process, data, systems and skills readiness review",
      "Scored use-case register (value · effort · risk)",
      "**AI transformation consultation** workshops and a phased roadmap",
      "Architecture proposal with cost + timeline guarantees",
      "**Agentic AI development** in 2-week sprints with weekly demos",
      "Production deployment on your infra or our Coolify-managed cluster",
      "Documentation, runbooks, staff training and 30-day post-launch support",
    ],
    faq: [
      {
        q: "What is an AI transformation evaluation?",
        a: "An **AI transformation evaluation** is a structured review of your processes, data, systems and team skills that identifies where AI will add measurable value. The output is a scored list of use cases and a recommendation on where to start.",
      },
      {
        q: "How long does AI transformation evaluation and consultation take?",
        a: "Typically 2–3 weeks in total: one to two weeks of evaluation, then a roadmap workshop with your leadership. Larger organisations with several business units may take longer — we confirm scope after Discovery.",
      },
      {
        q: "Do you also build what you recommend?",
        a: "Yes. After the **AI transformation consultation** you can take the roadmap to any vendor, or have us carry it into **agentic AI development** and production deployment. There's no obligation to build with us.",
      },
      {
        q: "Do you use OpenAI or Claude?",
        a: "Default is Claude (Anthropic) via the Claude Agent SDK — better at long-horizon tasks, transparent reasoning, and works with your OAuth subscription instead of metered API. We can use OpenAI on request.",
      },
      {
        q: "What's the typical project size?",
        a: "Small workflow automations: 1–2 weeks. Internal tools / dashboards: 4–8 weeks. Full bespoke product: 3+ months. We confirm scope after the evaluation.",
      },
      {
        q: "Can you work with our existing dev team?",
        a: "Yes — we routinely embed with internal teams for pair-programming, code review and Claude Code training.",
      },
    ],
  },
  "wsq-course-development": {
    slug: "wsq-course-development",
    title: "WSQ & CASL Course Development",
    offer: {
      title: "Free WSQ 2.0 route check",
      bullets: [
        "Can your course still be WSQ under WSQ 2.0?",
        "Annex C, a CEB letter, or non-WSQ through CASL?",
        "What will the assessor flag first?",
      ],
      buttonLabel: "Check my course route →",
      placeholder: "What is the course, which sector is it for, and is it new or a renewal?",
    },
    pains: [
      {
        title: "Most new courses can no longer be WSQ",
        body: "Since 1 May 2026 a new WSQ modular course must match SWDA's Annex C or carry a Course Endorsement Body's letter. Otherwise SWDA will not process it, however good the courseware.",
      },
      {
        title: "First-time providers face new tests too",
        body: "A first WSQ application comes with SWDA Organisation Registration: a mock-up website or brochure showing nine disclosure items, then a half-day on-site assessment. [We provide both](/ssg-ato-application).",
      },
      {
        title: "Two clarification rounds, then Fail Audit",
        body: "If the assessor's findings are not closed within two rounds, the application can fail and a new one needs a new fee. Getting the proposal right the first time matters.",
      },
      {
        title: "Courseware must match the approved proposal",
        body: "Learning outcomes, K&A text, durations and assessment methods are checked against the approved Course Proposal, and small drifts become CQC findings later.",
      },
    ],
    leadSource: "course-dev-page",
    serviceType: "WSQ Courseware Development",
    processIntro:
      "From competency mapping to SWDA submission — typically 6–10 weeks per course.",
    timeline: [
      { title: "Route Check", duration: "Week 0 · free", accent: "cyan", body: "30-min call. We test the course against WSQ 2.0: Annex C, a CEB letter, or non-WSQ through CASL." },
      { title: "Scoping", duration: "Week 1", accent: "blue", body: "Competency mapping draft, learning outcomes, course structure and assessment strategy." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal scoped to course duration and assessment complexity." },
      { title: "Build", duration: "Weeks 3–8", accent: "amber", body: "Slide deck, Lesson Plan, Learner Guide, Facilitator Guide, Assessment Plan and assessments." },
      { title: "SWDA Submission", duration: "Weeks 8–10", accent: "green", body: "Complete Course Proposal package on TPGateway, plus support through SWDA's clarification rounds." },
    ],
    hero: {
      kicker: "[ WSQ 2.0 · CASL · SWDA ]",
      headlineHtml:
        '<span class="gradient-text">WSQ &amp; CASL course development</span> that gets past SWDA\'s new entry rules.',
      subhead:
        "End-to-end **WSQ courseware development**, **CASL course development** and **SWDA courseware development** — route check, competency mapping, Course Proposal, slide decks, Lesson Plans, Learner Guides and assessments.",
    },
    meta: {
      title: "WSQ & CASL Course Development Singapore — SWDA-Ready",
      description:
        "WSQ courseware development and CASL course development in Singapore: route check, Course Proposal, slides, Lesson Plans. Book a free route check.",
      keywords:
        "WSQ courseware development, CASL course development, SWDA courseware development, WSQ 2.0, WSQ course development Singapore, WSQ lesson plan, WSQ learner guide, WSQ assessment development, IBF-STS course development, CASL course development",
    },
    overview: {
      kicker: "[ WSQ COURSEWARE ]",
      heading: "WSQ courseware development that passes SWDA review",
      paragraphs: [
        "Start with the route. Under WSQ 2.0, a new modular course needs an Annex C match or a Course Endorsement Body's letter, and SWDA's stated default for everything else is non-WSQ through CASL, the Course Approval Skills List, where at least 50% of the course's skills are on the list. That decision comes before any drafting, and our **CASL course development** service covers that route in full.",
        "Accredited courses live or die on their courseware. SWDA (the SkillsFuture and Workforce Development Agency, formerly SSG) checks that every learning outcome, knowledge and ability statement, duration and assessment method in your courseware matches the Course Proposal it approved — word for word. Our **WSQ courseware development** service is built around that rule.",
        "Every course we build comes from a single source of content, so the slide deck, Lesson Plan, Learner Guide and assessments always agree with each other and with the approved proposal. That's what makes our **SWDA courseware development** hold up in clarification rounds, Course Quality Checks and periodic checks on training delivery.",
        "We have developed and delivered WSQ courses for our own academy for over a decade, so our courseware reflects what trainers and assessors actually need in the classroom — not just what a template asks for.",
      ],
      sections: [
        {
          heading: "SWDA courseware development",
          paragraphs: [
            "**SWDA courseware development** covers the Course Proposal, competency mapping to the Skills Framework TSC, and the full courseware suite. We handle SWDA's clarification rounds and keep the approved version as the single source of truth.",
          ],
        },
        {
          heading: "Lesson Plans and Learner Guides",
          paragraphs: [
            "Hour-by-hour Lesson Plans, Learner Guides with self-study content, Facilitator Guides and Assessment Plans — each with version control, so you can always show which version was deployed in which course run.",
          ],
        },
        {
          heading: "Assessments that test the Ability",
          paragraphs: [
            "Written assessments for knowledge and practical performance or case-study instruments for abilities, each with a model-answer marking guide. Questions are open-ended and pitched at the TSC proficiency level.",
          ],
        },
        {
          heading: "Ready for audit",
          paragraphs: [
            "Courseware built this way is ready for a CQC audit and for your [TPQA service](/tpqa-consultancy) review. New to accreditation? Pair it with our [ATO service in Singapore](/ssg-ato-application).",
          ],
        },
      ],
    },
    benefits: [
      {
        title: "Framework alignment",
        body: "Courses mapped to WSQ Competency Units, Critical Core Skills (CCS) or IBF-STS competencies depending on your sector.",
      },
      {
        title: "Complete courseware suite",
        body: "We deliver slide decks, Lesson Plans, Learner Guides, Facilitator Guides, Assessment Plans and assessments — all aligned from one source.",
      },
      {
        title: "Verbatim to the approved proposal",
        body: "Our **SWDA courseware development** copies learning outcomes, K/A statements, durations and assessment methods exactly from the approved Course Proposal.",
      },
      {
        title: "Submission-ready",
        body: "Full Course Proposal package compliant with TPGateway requirements; we walk you through submission and SWDA's clarification rounds.",
      },
    ],
    whatsIncluded: [
      "WSQ 2.0 route check — Annex C, CEB letter or CASL",
      "Competency mapping to WSQ TSCs or CASL skills",
      "Course outline + module breakdown",
      "**WSQ courseware development** — slide deck, Lesson Plan and Learner Guide",
      "Facilitator Guide and Assessment Plan",
      "Written and practical assessments with marking guides",
      "Industry engagement & learner-feedback evidence pack",
      "**SWDA courseware development** — TPGateway Course Proposal submission package",
    ],
    faq: [
      {
        q: "What does WSQ courseware development include?",
        a: "Our **WSQ courseware development** includes competency mapping, the slide deck, Lesson Plan, Learner Guide, Facilitator Guide, Assessment Plan and the assessments with marking guides, plus the Course Proposal package for submission.",
      },
      {
        q: "What is SWDA courseware development?",
        a: "SSG and WSG merged into SWDA in July 2026, so courseware for accredited WSQ courses is now reviewed by SWDA. **SWDA courseware development** means building courseware that matches the SWDA-approved Course Proposal exactly and survives its quality checks.",
      },
      {
        q: "Which frameworks do you cover?",
        a: "WSQ and **CASL course development** here, plus dedicated services for [IBF courses](/ibf-course-development), [PWM courses](/pwm-course-development), [CPD courses](/cpd-course-development) and [SCTP modules](/sctp-module-development).",
      },
      {
        q: "Can you help with the mock-up website and on-site assessment?",
        a: "Yes. New applicants need a mock-up website or brochure and a half-day on-site assessment through SWDA Organisation Registration. We build the mock-up and rehearse the assessment with your team under our [SWDA ATO application](/ssg-ato-application) service.",
      },
      {
        q: "What is CASL course development?",
        a: "CASL is SWDA's Course Approval Skills List. **CASL course development** builds a non-WSQ course where at least 50% of the skills are on that list, which can qualify it for Tier 2 funding. SWDA expects it to be examinable, so it still needs a real assessment.",
      },
      {
        q: "Can our new course still be WSQ?",
        a: "Only with an Annex C match or a Course Endorsement Body's letter. We check this in the free route call, before you spend anything on drafting.",
      },
      {
        q: "How long does WSQ courseware development take?",
        a: "Typically 6–10 weeks per course depending on length (in-classroom hours), assessment complexity and SME availability.",
      },
      {
        q: "Can you fix courseware that failed a CQC audit?",
        a: "Yes. We rebuild the courseware against the approved Course Proposal and prepare the Improvement Plan — see our [CQC consultancy](/cqc-consultancy).",
      },
      {
        q: "Can you also deliver the course?",
        a: "We focus on development. Through our network we can recommend qualified trainers if needed.",
      },
    ],
  },
  "content-management-system": {
    slug: "content-management-system",
    title: "Content Management System",
    leadSource: "cms-page",
    serviceType: "Content Management System",
    hero: {
      kicker: "[ CMS · LEAD-GEN · SEO ]",
      headlineHtml:
        '<span class="gradient-text">AI-powered CMS</span> built for lead generation and SEO.',
      subhead:
        "Self-hosted Next.js CMS where every public route ships with JSON-LD, sitemap, canonical, OG, and a source-tagged lead form — wired to a Gmail-OAuth notification pipeline so leads land in sales within seconds.",
    },
    meta: {
      title: "Self-Hosted AI CMS for Singapore — Lead Generation + SEO Built-In",
      description:
        "Customizable Next.js CMS with AI authoring, source-tagged lead forms, sitewide JSON-LD, and a built-in AI chatbot. No vendor lock-in. Book a free demo.",
    },
    processIntro: "From discovery to your custom-branded CMS live on your domain — predictable, fixed-fee.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. We map your content model, traffic goals, lead funnel and existing CMS (WordPress / Webflow / static)." },
      { title: "Demo & Scoping", duration: "Week 1", accent: "blue", body: "Live walkthrough on a staging URL. Confirm migration scope, design direction, integrations." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal with timeline guarantees." },
      { title: "Build & Migrate", duration: "Weeks 3–6", accent: "amber", body: "Custom branding, content migration (incl. WordPress 301 redirects), AI chatbot config, lead-form wiring." },
      { title: "Go Live", duration: "Week 6+", accent: "green", body: "Production deployment, admin training, 30-day support. You own the data, code, and domain." },
    ],
    benefits: [
      { title: "Self-hosted, no lock-in", body: "Your domain, your data, your code. Deploy on Coolify, AWS, Vercel or on-prem. No per-seat SaaS fees." },
      { title: "SEO + JSON-LD on every route", body: "Organization, Article, Service, FAQPage, LocalBusiness schemas auto-injected. Per-route canonical, OG, Twitter, sitemap." },
      { title: "AI authoring built in", body: "Claude Agent SDK drafts, rewrites and summarizes posts in one click — using your subscription OAuth token, no metered API." },
      { title: "Lead funnel by default", body: "Every page has a source-tagged form. Submissions land in /admin/leads + email sales via Gmail OAuth2 — within seconds." },
    ],
    whatsIncluded: [
      "Custom-branded CMS deployed on your domain",
      "TipTap rich editor with image upload + slash commands",
      "Pages + Posts CRUD with Categories, Tags, per-route SEO meta",
      "Visual drag-and-drop menu builder",
      "Sitewide JSON-LD (Organization, Article, Service, FAQPage, BreadcrumbList)",
      "AI chatbot with editable system prompt + FAQ",
      "Admin AI Assist — Draft / Rewrite / Summarize / Suggest SEO meta",
      "Gmail OAuth2 lead-notification pipeline",
      "WordPress migration (SQL dump → posts + 301 redirects)",
    ],
    clients: [
      {
        name: "Al Mubin Training Pte Ltd",
        category: "Halal F&B training provider · Singapore",
        url: "https://almubinfctraining.com.sg/",
        screenshot: "/clients/almubin-screenshot.webp",
        description:
          "Al Mubin Training delivers halal-certified food and beverage training on site at their clients' stalls, kitchens and outlets — halal handling and internal halal SOP, food safety and hygiene, workplace safety, kitchen operations, beverage handling and supervisory skills, taught in English and Malay by trainers who have worked the line themselves. We built and deployed their marketing site on this CMS: a full course catalogue, a gated safety-checklist lead magnet, and source-tagged enquiry forms that route straight to their inbox.",
        highlights: ["7 courses", "Halal-certified", "On-site delivery", "Lead magnet + enquiry forms"],
      },
    ],
    faq: [
      { q: "How is this different from WordPress?", a: "Next.js performance + native AI authoring + first-class SEO/JSON-LD + no plugin sprawl. The codebase is yours; we don't host you or charge per-seat." },
      { q: "Can you migrate our existing WordPress site?", a: "Yes — we import your WordPress export (posts, pages, images), preserve your Yoast/RankMath SEO, and write 301 redirects so your search rankings carry over." },
      { q: "Is the AI metered?", a: "No. The chatbot and admin AI Assist use your Claude OAuth subscription token via the official Agent SDK — flat subscription, no per-call billing." },
      { q: "Can we customize the design?", a: "Yes — every component is a Next.js Server Component you can edit. We also expose homepage + service-page copy in the admin so non-devs can update without redeploys." },
    ],
  },
  "hr-management-system": {
    slug: "hr-management-system",
    title: "HR Management System",
    leadSource: "hrms-page",
    serviceType: "HR Management System",
    hero: {
      kicker: "[ HRMS · PAYROLL · APPRAISAL ]",
      headlineHtml:
        'Modern <span class="gradient-text">HR Management System</span> for Singapore SMEs.',
      subhead:
        "Self-hosted HRMS — payroll, leave, expense, appraisal, onboarding, training — built on Next.js with Singapore CPF + IRAS-ready payroll workflows.",
    },
    meta: {
      title: "HR Management System (HRMS) Singapore — Payroll, Leave, Expense, Appraisal",
      description:
        "Self-hosted HRMS with CPF / IRAS-ready payroll, leave + expense workflows, performance appraisal and onboarding. Built on Next.js. Book a free demo.",
    },
    processIntro: "From discovery to a custom-branded HRMS live on your domain.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. Headcount, payroll cycle, current HR tools (Talenox / HReasily / Excel), and integration needs." },
      { title: "Workshop", duration: "Week 1", accent: "blue", body: "Map your existing payroll rules, leave policies, claim categories, appraisal cycle and approval workflows." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal with module scope and timeline." },
      { title: "Build & Migrate", duration: "Weeks 3–8", accent: "amber", body: "Custom HRMS deployment, employee data migration, payroll configuration, Xero / accounting integration." },
      { title: "Go Live", duration: "Week 8+", accent: "green", body: "First payroll run with our support, HR admin training, 30-day post-launch support." },
    ],
    benefits: [
      { title: "Singapore payroll, done right", body: "CPF, SDL, FWL, IRAS Form IR8A, IR21, AIS submission — all baked in. We handle the edge cases (PR rates, part-timers, pro-rated bonuses)." },
      { title: "Self-hosted, white-labeled", body: "Your domain, your branding, your data. No per-employee SaaS fees. Deploy on your infra or our managed Coolify cluster." },
      { title: "Leave + expense workflows", body: "Multi-level approval flows, leave balances with carry-forward rules, expense categories with receipt upload and accounting export." },
      { title: "Performance appraisal", body: "Goal-setting, 360-degree feedback, mid-year and year-end review cycles, calibration meetings, with PDF export for HR records." },
    ],
    whatsIncluded: [
      "Custom-branded HRMS on your domain",
      "Payroll module — CPF, SDL, FWL, IRAS-ready",
      "Leave management with policies + balances + carry-forward",
      "Expense claims with receipt upload + accounting export",
      "Performance appraisal — goals, 360°, calibration, PDF export",
      "Onboarding workflow — offer letters, e-signature, doc checklist",
      "Training records + CPD tracking",
      "Employee self-service portal (mobile-friendly)",
      "Accounting integration (Xero, QuickBooks, Sage)",
    ],
    faq: [
      { q: "Is the payroll IRAS-compliant?", a: "Yes — IR8A, IR8S, IR21, AIS submission. We test against the IRAS sandbox during build and walk you through the first AIS submission live." },
      { q: "How does this compare to Talenox / HReasily?", a: "Self-hosted (you own the data), customizable workflows (not just toggles), and one-time engagement fee instead of per-employee per-month forever." },
      { q: "Can it handle our complex approval flows?", a: "Yes — approval chains are configurable per leave type, expense category, and amount threshold. We've built flows up to 5 approval levels." },
      { q: "Does it integrate with our accounting system?", a: "Native integrations with Xero and QuickBooks. CSV export for any other accounting tool." },
    ],
  },
  "ai-agent-deployment": {
    slug: "ai-agent-deployment",
    title: "AI Agent Deployment",
    offer: {
      title: "Free AI agent fit check",
      bullets: [
        "Which agent suits your work: hosted or self-hosted?",
        "Is it actually available for your team in Singapore?",
        "What should it be allowed to touch?",
      ],
      buttonLabel: "Check my agent fit →",
      placeholder: "What do you want an AI agent to do, and which systems would it need to work with?",
    },
    pains: [
      {
        title: "An always-on agent holds the keys",
        body: "These agents can read your email, use your logins and act while you sleep. Without clear permissions and approval points, one mistake or poisoned input can travel far.",
      },
      {
        title: "Availability and lock-in catch people out",
        body: "Several new agents launched with limited regions, waitlists or betas, and hosted ones tie you to one vendor's model. We check what actually works for a Singapore business.",
      },
      {
        title: "Setup is the easy part",
        body: "Getting an agent running takes an afternoon. Keeping it useful, secure and within budget, every day, against your real systems is where most deployments fail.",
      },
    ],
    showcase: {
      id: "agents",
      kicker: "[ AGENTS WE DEPLOY ]",
      heading: "Self-hosted or hosted: we help you pick, deploy and govern it",
      intro: "Availability, pricing and features change quickly, so we check the current position for your team before you commit.",
      items: [
        { title: "OpenClaw", meta: "SELF-HOSTED · OPEN SOURCE", body: "Open-source, always-on agent we deploy on your infrastructure, connected to your channels and tools." },
        { title: "Hermes Agent", meta: "SELF-HOSTED · OPEN SOURCE", body: "Open-source agent with memory and scheduled work, run on your own server so that your data stays with you." },
        { title: "Meta Muse", meta: "HOSTED · META", body: "Personal agent that works through WhatsApp with its own secure cloud computer and approvals for actions." },
        { title: "OpenAI Dots", meta: "HOSTED · OPENAI", body: "Always-on agents inside ChatGPT that also work through Slack and Microsoft Teams, with custom rules for action." },
        { title: "Grok Bot", meta: "HOSTED · XAI", body: "A team of always-on bots with routines triggered by schedules or events, and team bots for Slack." },
        { title: "Cue", meta: "HOSTED · MANUS", body: "Always-on agent from Manus for delegating ongoing work. We check how it fits your use case and regions." },
        { title: "Claude Duet", meta: "HOSTED · ANTHROPIC", body: "Proactive Claude agent that watches connected apps and brings you what needs attention. In research preview." },
        { title: "Gemini Spark", meta: "HOSTED · GOOGLE", body: "Google's agent inside the Gemini app, a natural fit for businesses already running on Google Workspace." },
      ],
    },
    leadSource: "ai-agent-page",
    serviceType: "AI Agent Deployment and Agentic AI Development",
    hero: {
      kicker: "[ OPENCLAW · HERMES · MUSE · DOTS · GROK BOT · CUE · DUET · SPARK ]",
      headlineHtml:
        '<span class="gradient-text">AI Agent Deployment</span> &amp; agentic AI development in Singapore.',
      subhead:
        "Production **AI agent deployment** and **agentic AI development**: OpenClaw, Hermes, Meta Muse, OpenAI Dots, Grok Bot, Cue, Claude Duet, Gemini Spark or a bespoke agent, set up with the permissions, approvals and cost limits your business needs.",
    },
    meta: {
      title: "AI Agent Deployment & Agentic AI Development Singapore",
      description:
        "AI agent deployment in Singapore: OpenClaw, Hermes, Meta Muse, OpenAI Dots, Grok Bot, Claude Duet and Gemini Spark, with guardrails. Book a free agent fit check.",
      keywords:
        "AI agent deployment, agentic AI development, AI agent deployment Singapore, Meta Muse, OpenAI Dots, Grok Bot, Manus Cue, Claude Duet, Gemini Spark, agentic AI Singapore, OpenClaw deployment, Hermes Agent, Claude Agent SDK development, AI agent integration",
    },
    overview: {
      kicker: "[ AGENTIC AI ]",
      heading: "From agentic AI development to production AI agent deployment",
      paragraphs: [
        "A demo agent is easy. An agent that runs every day against your real systems, stays inside its permissions and doesn't surprise you with a bill is not. Our **AI agent deployment** service closes that gap: we pick or build the right agent, connect it to your tools, and put the monitoring and cost limits around it that production needs.",
        "**Agentic AI development** is where we build what off-the-shelf agents can't do — custom tools, MCP servers for your proprietary systems, multi-step workflows and human-in-the-loop approvals. Whether you deploy an existing agent or commission a bespoke one, every deployment ships with evals, audit trails and a runbook your team can operate.",
        "Not sure where agents fit yet? Start with our [AI transformation evaluation and consultation](/ai-solutions) to find the use cases worth automating.",
      ],
      sections: [
        {
          heading: "AI agent deployment",
          paragraphs: [
            "**AI agent deployment** of OpenClaw, Hermes Agent, Copilot Studio agents and others on your infrastructure or ours, plus secure setup of hosted agents such as Meta Muse, OpenAI Dots, Grok Bot, Cue, Claude Duet and Gemini Spark — with secrets management, access controls, logging and on-call handover.",
          ],
        },
        {
          heading: "Agentic AI development",
          paragraphs: [
            "Bespoke **agentic AI development** on the Claude Agent SDK: tool use, long-horizon planning, MCP servers and approval gates, built against your workflows and tested with an eval harness.",
          ],
        },
        {
          heading: "Channels and integrations",
          paragraphs: [
            "Agents that work where your people work — WhatsApp, Telegram, Slack, Teams, Discord and email — and reach into your CRM, HRMS, accounting, [LMS / TMS](/training-management-system) and CMS.",
          ],
        },
        {
          heading: "Guardrails in production",
          paragraphs: [
            "Per-agent token budgets with auto-cutoff, latency and error tracing, and an eval run on every prompt change — so your agents stay predictable after go-live.",
          ],
        },
      ],
    },
    processIntro: "From use case to a production-ready agent in 4–6 weeks.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. Define the use case, success metrics, target systems and constraints." },
      { title: "Workshop", duration: "Week 1", accent: "blue", body: "Half-day technical workshop. Agent selection (self-hosted, hosted or custom), tool integrations, security boundaries." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee proposal with sprint plan and acceptance criteria." },
      { title: "Build & Iterate", duration: "Weeks 3–5", accent: "amber", body: "**Agentic AI development** with weekly demos. Observability dashboards, cost limits, eval harness." },
      { title: "Go Live", duration: "Week 6", accent: "green", body: "Production deployment, runbooks, on-call handover, 30-day post-launch support." },
    ],
    benefits: [
      { title: "The right agent, not the newest", body: "We compare self-hosted agents such as OpenClaw and Hermes with hosted ones such as Muse, Dots, Grok Bot, Cue, Duet and Spark, then recommend what fits your data, budget and region." },
      { title: "Custom agentic AI development", body: "Bespoke **agentic AI development** on the official Claude Agent SDK — tool use, MCP servers, long-horizon planning, with your Claude subscription token (no metered API)." },
      { title: "Integration-first", body: "n8n flows, Slack / Teams bots, webhook endpoints, REST APIs into your CRM / HRMS / accounting / LMS / CMS." },
      { title: "Observability + cost guardrails", body: "Per-agent token usage, latency, error tracing. Daily / monthly cost caps with auto-cutoff. No surprise bills." },
    ],
    whatsIncluded: [
      "Agent selection workshop + architecture proposal",
      "Production deployment of the chosen agent stack",
      "Bespoke **agentic AI development** where off-the-shelf agents fall short",
      "Supported AI agents — OpenClaw · Hermes · Meta Muse · OpenAI Dots · Grok Bot · Cue · Claude Duet · Gemini Spark · Copilot Studio",
      "Model-agnostic selection — Claude Code · Codex · MiniMax · Kimi · DeepSeek · OpenRouter",
      "Connect to multiple channels — WhatsApp · Telegram · Slack · Discord and more",
      "Tools & skills integration — GitHub · Remotion · Hyperframe · Google Workspace · Obsidian and more",
      "30-day post-launch support",
    ],
    faq: [
      { q: "What does AI agent deployment involve?", a: "**AI agent deployment** covers choosing the agent, connecting it to your systems and channels, setting permissions and cost limits, adding monitoring and evals, and handing over a runbook. Most deployments go live in 4–6 weeks." },
      { q: "What's the difference between agentic AI development and deploying an existing agent?", a: "Deploying an existing agent (such as OpenClaw or Hermes) is faster when it already fits your use case. **Agentic AI development** builds a custom agent on the Claude Agent SDK when you need proprietary tools, bespoke workflows or approval gates. We recommend one or the other in the Discovery call." },
      { q: "What are OpenClaw and Hermes Agent?", a: "They are open-source agents you can run on your own infrastructure, which keeps your data and memory under your control. We deploy them and connect them to your channels and systems." },
      { q: "Are Muse, Dots, Grok Bot, Cue, Duet and Spark available in Singapore?", a: "It varies, and it changes quickly: several launched with regional limits, waitlists or betas. We check the current position before you commit, and suggest a self-hosted option if one you want isn't available." },
      { q: "Is it safe to give an AI agent access to our systems?", a: "Only with limits. We set permissions, separate accounts, approval points for anything sensitive, and logs of what the agent did, before it goes live." },
      { q: "Can we use our existing Anthropic API key?", a: "We strongly recommend a Claude subscription OAuth token (`claude setup-token`) — it's a flat fee instead of per-call billing. The Claude Agent SDK supports both." },
      { q: "How do you prevent runaway costs?", a: "Per-agent and per-tenant token budgets with auto-cutoff, full audit trail in observability dashboards, and an eval harness that runs on every prompt change." },
      { q: "Can you integrate with our existing systems?", a: "Yes — Slack, Teams, Gmail, n8n, webhook endpoints, REST APIs to your CRM / HRMS / accounting / LMS. Custom MCP servers for proprietary tools." },
    ],
  },
  "tpqa-consultancy": {
    slug: "tpqa-consultancy",
    title: "TPQA Consultancy",
    offer: {
      title: "Free TPQA Grade 1 readiness review",
      bullets: [
        "How close are you to Grade 1 across the 3 criteria?",
        "Is your manual truly written in your own context?",
        "Are your people ready to answer without a consultant?",
      ],
      buttonLabel: "Check my Grade 1 readiness →",
      placeholder: "When is your TPQA due, what grade did you last receive, and do you have any open findings?",
    },
    pains: [
      {
        title: "Grade 1 opens the funding tier your competitors want",
        body: "SWDA says providers must attain TPQA Grade 1 to offer Tier 1 courses, funded up to 90% at the enhanced rate, against up to 70% on Tier 2. That includes the SkillsFuture Career Transition Programme (SCTP).",
      },
      {
        title: "Falling short of Grade 2 puts your registration at risk",
        body: "Not obtaining at least Grade 2, or failing to undergo or submit for TPQA, can lead SWDA to terminate your RTP status or contract. Terminations are public.",
      },
      {
        title: "Your consultant cannot be in the room",
        body: "SWDA's advisory says consultants may not sit in or take part in the on-site assessment. Your own people must explain and defend every process themselves.",
      },
      {
        title: "Generic manuals are a warning sign",
        body: "SWDA has warned about providers holding near-identical documents and scores with that in mind. A template pack with no real context can hurt more than it helps.",
      },
    ],
    leadSource: "tpqa-page",
    serviceType: "TPQA Service and TPQA Audit Consultancy",
    processIntro:
      "From gap assessment to the live **TPQA audit** — our **TPQA service** covers all 3 TPQA Criteria.",
    timeline: [
      { title: "Discovery", duration: "Week 0 · free", accent: "cyan", body: "30-min call. Where are you in the TPQA cycle? Any prior audit findings, CQC observations or corrective actions?" },
      { title: "Gap Assessment", duration: "Week 1", accent: "blue", body: "Half-day pre-audit workshop or remote review of your Policies and Operations Manual, SOPs, course-run evidence and outcomes data." },
      { title: "Quotation", duration: "Week 2", accent: "purple", body: "Fixed-fee remediation roadmap with priority-ranked actions per TPQA sub-item." },
      { title: "Mock Audit & Fix", duration: "Weeks 3–6", accent: "amber", body: "Mock audit, evidence-pack builds, adult-educator interview prep and gap closure." },
      { title: "Your TPQA Assessment", duration: "Before and after", accent: "green", body: "Your team attends the SWDA **TPQA audit** without us, as SWDA requires. We rehearse with process owners before it and help with clarifications afterwards." },
    ],
    hero: {
      kicker: "[ TPQA · TPQA 2.0 FROM 2027 ]",
      headlineHtml:
        '<span class="gradient-text">TPQA Grade 1</span> consultancy for up to 90% funding and SCTP eligibility.',
      subhead:
        "Grade 1 is the gateway to Tier 1 funding of up to 90% and to SCTP. Our **TPQA service** for SWDA (formerly SSG) registered training providers gets you ready for it — mock **TPQA audit**, evidence-pack remediation, and process-owner rehearsal, with [CQC](/cqc-consultancy) and [PEI](/pei-ato-application) support when you need it, from gap assessment up to the day your own team faces the assessment.",
    },
    meta: {
      title: "TPQA Grade 1 Consultancy Singapore — Tier 1 Funding & SCTP",
      description:
        "Aim for TPQA Grade 1, required for Tier 1 courses funded up to 90% and SCTP. TPQA service with mock audit and rehearsal. Book a free readiness review.",
      keywords:
        "TPQA Grade 1, TPQA Grade 1 consultancy, Tier 1 funding, 90% funding SWDA, SCTP eligibility, TPQA service, TPQA audit, CQC audit, PEI service, TPQA consultancy Singapore, TPQA audit preparation, SWDA TPQA, course quality check SWDA, private education institution registration",
    },
    overview: {
      kicker: "[ TPQA SERVICE ]",
      heading: "What our TPQA service covers",
      paragraphs: [
        "The Training Provider Quality Assessment (TPQA) is how SWDA — the SkillsFuture and Workforce Development Agency, formed when SSG and WSG merged in July 2026 — checks that a registered training provider runs a sound, well-governed training operation. Our **TPQA service** takes you from scattered files to an organised, evidence-backed submission, using the same method that earned Tertiary Infotech Academy a Grade 1 result in our own **TPQA audit**.",
        "A **TPQA audit** covers three Criteria: Criterion 1 Administration & Governance, Criterion 2 Course Quality Assurance, and Criterion 3 Outcomes. Assessors sample learner records per course run, ask for the source report behind every outcome figure, and check that your Policies and Operations Manual matches what your team actually does. Our **TPQA service** maps every sub-item of the current requirements to a manual heading, an annex and a piece of filed evidence, so nothing is left for the assessor to chase.",
        "Quality doesn't stop at the provider level. Accredited WSQ courses also face SWDA's Course Quality Check, and private education institutions have their own obligations. That's why our **TPQA service** also includes **CQC audit** support and a **PEI service** — one consultant across all of your quality reviews.",
      ],
      sections: [
        {
          heading: "TPQA audit preparation",
          paragraphs: [
            "We run a mock **TPQA audit** against the current TPQA Requirements, Document Submission List and Self-Assessment Checklist, then hand you a priority-ranked gap list. Every gap comes with the fix, not just the finding.",
            "SWDA's advisory says consultants cannot sit in or take part in the on-site assessment, even if identified as staff. So before the assessment, each process owner rehearses, and your management representative and adult educators learn to explain the evidence on file themselves. TPQA 2.0 is due from 2027, so we also check which version applies to you.",
          ],
        },
        {
          heading: "CQC audit support",
          paragraphs: [
            "Full details are on our [CQC consultancy](/cqc-consultancy) page.",
            "SWDA runs a Course Quality Check (CQC) on accredited WSQ courses. When a **CQC audit** returns observations, you have 14 working days to reply with an Improvement Plan.",
            "We rebuild the courseware against the approved Course Proposal through our [WSQ courseware development](/wsq-course-development) team, draft the Improvement Plan in SWDA's format and prepare reply packs for periodic checks on training delivery.",
          ],
        },
        {
          heading: "PEI service",
          paragraphs: [
            "See our [PEI ATO application](/pei-ato-application) page for registration.",
            "Private Education Institutions (PEIs) must meet registration and quality requirements under the Private Education Act. Our **PEI service** applies the same discipline we use for TPQA — policies, SOPs, closed-loop processes and evidence filing — so your documentation stands up to review.",
          ],
        },
        {
          heading: "TPQA service between audits",
          paragraphs: [
            "TPQA is not a one-off. We keep your evidence current between cycles — quarterly strategic-plan reviews, marketing approvals, adult-educator deployment records and e-attendance rules — so the next audit is a review, not a rebuild.",
            "Not yet registered? Start with our [ATO service in Singapore](/ssg-ato-application).",
          ],
        },
      ],
    },
    benefits: [
      {
        title: "Grade 1 as the target",
        body: "We work to the **Grade 1** standard from the start, using how a Grade 1 pack was actually built, because that is what opens Tier 1 funding and SCTP.",
      },
      {
        title: "Mock TPQA audit",
        body: "A full mock audit modelled on SWDA's actual process — across all 3 TPQA Criteria and every sub-item in the current requirements.",
      },
      {
        title: "Evidence & documentation review",
        body: "We review your Policies and Operations Manual, SOPs, course-run records, learner-management records and outcomes data, then rank every gap by audit risk.",
      },
      {
        title: "Gap remediation roadmap",
        body: "Concrete fixes for every gap, ranked by audit risk. Our **TPQA service** builds the missing evidence with you — not just a list of findings.",
      },
      {
        title: "CQC audit and PEI support",
        body: "**CQC audit** Improvement Plans and periodic-check replies for your WSQ courses, plus a **PEI service** for private education institutions.",
      },
    ],
    whatsIncluded: [
      "Pre-audit gap-assessment workshop",
      "Mock **TPQA audit** (half-day on-site or remote)",
      "Gap report with priority-ranked remediation actions",
      "Policies and Operations Manual mapped to every TPQA sub-item",
      "Evidence-pack templates for Criteria 1–3",
      "**CQC audit** Improvement Plan and periodic-check reply packs",
      "**PEI service** — policies, SOPs and documentation for private education institutions",
      "Process-owner rehearsal before the SWDA **TPQA audit** (consultants cannot attend it)",
      "Help with clarification requests after the assessment",
    ],
    faq: [
      {
        q: "What does your TPQA service include?",
        a: "Our **TPQA service** covers a gap assessment, a mock **TPQA audit**, remediation of your manual and evidence packs, and rehearsal for your team before the live assessment, which SWDA does not allow consultants to attend. It's a fixed-fee engagement scoped after a free call.",
      },
      {
        q: "When should we engage a TPQA consultant?",
        a: "Two ideal windows: (a) 3–6 months before your scheduled assessment, or (b) immediately after receiving a corrective action plan to remediate gaps.",
      },
      {
        q: "What if we've already failed a TPQA audit?",
        a: "We've helped recover ATOs from formal Conditional Approval status. Engagement starts with reviewing SWDA's corrective-action letter and building a remediation roadmap.",
      },
      {
        q: "Why does TPQA Grade 1 matter?",
        a: "SWDA says providers must attain **TPQA Grade 1** to offer Tier 1 SWDA-funded courses. Tier 1 is funded up to 70%, or up to 90% at the enhanced rate, compared with up to 50% and 70% on Tier 2. It covers course types including [SCTP](/sctp-module-development), which also has its own entry route, so Grade 1 is necessary but not sufficient on its own.",
      },
      {
        q: "Can you attend the TPQA assessment with us?",
        a: "No. SWDA's advisory says consultants may not sit in or take part in the on-site assessment, even if identified as staff. We prepare your own people to run it confidently.",
      },
      {
        q: "Can you guarantee a TPQA grade?",
        a: "No. SWDA samples, interviews staff and reads originals, so no consultant can honestly promise a grade. We can make your submission complete and your people ready.",
      },
      {
        q: "How many criteria does a TPQA audit cover?",
        a: "Three: Criterion 1 Administration & Governance, Criterion 2 Course Quality Assurance and Criterion 3 Outcomes. Our **TPQA service** provides evidence templates for every sub-item.",
      },
      {
        q: "What is a CQC audit?",
        a: "A Course Quality Check (CQC) is SWDA's review of an accredited WSQ course's courseware and delivery. If your **CQC audit** returns observations, you must reply with an Improvement Plan within 14 working days. We prepare the plan and the corrected courseware.",
      },
      {
        q: "Do you offer a PEI service?",
        a: "Yes. Our **PEI service** helps private education institutions put in place the policies, SOPs and evidence that registration under the Private Education Act requires.",
      },
      {
        q: "Do you provide TPQA training for our internal team?",
        a: "Yes — half-day or full-day workshops for management and adult educators on interpreting the TPQA Criteria.",
      },
    ],
  },
};

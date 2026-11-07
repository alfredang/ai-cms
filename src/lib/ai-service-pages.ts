// Lead-generating landing pages for the AI Services list. Merged into
// SERVICE_PAGES in service-pages.ts, so admin overrides work the same way.
//
// Do not list client names or results unless they are real and approved.

import type { ServicePageContent } from "@/lib/service-pages";

/** Industry blocks, shown on the homepage and the AI as a Service page. */
export const AI_INDUSTRIES: { title: string; body: string }[] = [
  { title: "Finance", body: "Month-end close support, invoice and expense checks, reconciliation exceptions and management report drafts, with finance sign-off." },
  { title: "Marketing", body: "Campaign briefs, content calendars, SEO and AI-visibility checks, lead scoring and performance reports from your own data." },
  { title: "Legal", body: "Contract first reviews, clause comparison, matter summaries and policy Q&A, with a lawyer reviewing every output." },
  { title: "Retail", body: "Catalogue and listing updates, demand and restock signals, customer enquiries and review analysis across channels." },
  { title: "HR", body: "CV screening support, onboarding checklists, policy answers for staff and appraisal drafting, with people decisions kept human." },
  { title: "Sales", body: "Lead research, proposal and quotation drafts, CRM updates and follow-up reminders your team approves before sending." },
  { title: "Customer Service", body: "Ticket triage, suggested replies from your knowledge base and WhatsApp or email assistants that hand off to a person." },
  { title: "Operations", body: "SOP-driven workflows, approvals, document routing, scheduling and exception alerts across your existing systems." },
  { title: "Education & Training", body: "Course and assessment drafting, learner support, marking assistance and compliance record checks." },
  { title: "Healthcare", body: "Admin summaries, appointment and enquiry handling and internal knowledge search, kept away from clinical decisions." },
  { title: "Logistics", body: "Shipment status updates, document extraction, exception handling and customer notifications." },
  { title: "Property", body: "Listing drafts, enquiry qualification, tenancy document checks and viewing coordination." },
];

export const AI_SERVICE_PAGES: Record<string, ServicePageContent> = {
  "ai-as-a-service": {
    slug: "ai-as-a-service",
    title: "AI as a Service",
    leadSource: "ai-aas-page",
    serviceType: "AI as a Service and Virtual Forward Deployed Engineering",
    hero: {
      kicker: "[ AIAAS · VIRTUAL FORWARD DEPLOYED ENGINEER ]",
      headlineHtml:
        '<span class="gradient-text">AI as a Service</span> — a virtual Forward Deployed Engineer for your business.',
      subhead:
        "**AI as a Service (AIaaS)** gives you a **virtual Forward Deployed Engineer** who learns how your company works, then deploys AI into your real workflows, across finance, marketing, legal, retail and more, without you hiring an AI team.",
    },
    meta: {
      title: "AI as a Service Singapore — Virtual Forward Deployed Engineer",
      description:
        "AI as a Service in Singapore: a virtual Forward Deployed Engineer deploys AI into your workflows across finance, marketing and legal. Book a free workflow audit.",
      keywords:
        "AI as a Service, AIaaS Singapore, virtual forward deployed engineer, forward deployed engineer, FDE as a service, AI workflow automation Singapore, AI for finance, AI for marketing, AI for legal, AI for retail, AI integration for business",
    },
    offer: {
      title: "Free AI workflow audit",
      bullets: [
        "Which of your workflows are worth automating first?",
        "What would it take to connect AI to your systems?",
        "What should stay in human hands?",
      ],
      buttonLabel: "Audit my workflows →",
      placeholder: "Which team or workflow takes the most time today, and what systems does it use?",
    },
    pains: [
      {
        title: "Everyone has AI licences, but little has changed",
        body: "Staff use chatbots on their own, while the actual workflow stays the same. Value comes when AI is wired into how the work moves, and that takes engineering.",
      },
      {
        title: "Hiring an AI team is slow and expensive",
        body: "Engineers who understand both AI and your business are hard to find, and a small company may not need one full time. A virtual FDE gives you the skill without the headcount.",
      },
      {
        title: "Pilots stall before production",
        body: "A demo is easy. Permissions, data access, reviews, cost limits and support are what stop it reaching daily use, and those are exactly what an FDE handles.",
      },
    ],
    showcase: {
      id: "industries",
      kicker: "[ AIAAS BY INDUSTRY ]",
      heading: "Workflows we can optimise with AI, by function and industry",
      intro:
        "Examples of where we start. The virtual FDE scopes yours with your team and your systems.",
      items: AI_INDUSTRIES,
    },
    overview: {
      kicker: "[ AI AS A SERVICE ]",
      heading: "What a virtual Forward Deployed Engineer actually does",
      paragraphs: [
        "A Forward Deployed Engineer (FDE) works alongside the business rather than in a separate product team: sitting with the people doing the work, finding where AI helps, building it and staying until it runs. Our **virtual FDE** gives you that way of working as a monthly service, delivered remotely with on-site sessions when they help.",
        "Our **AI as a Service** model starts by mapping one workflow end to end. We pick the model and tools that fit, including [AI agents](/ai-agent-deployment) such as OpenClaw and Hermes where they make sense, connect them to your systems, and put people at the approval points.",
        "Then we measure the result, hand over what your team can run, and move to the next workflow. Your data, accounts and automations stay yours.",
      ],
      sections: [
        { heading: "Workflow mapping", paragraphs: ["We shadow the people doing the work, then find what can be automated, assisted or left alone."] },
        { heading: "Integration", paragraphs: ["AI connected to your email, documents, CRM, accounting and messaging, using APIs, MCP servers and tools like n8n."] },
        { heading: "Guardrails", paragraphs: ["Permissions, human approval points, audit logs and cost limits, set up before anything acts on its own."] },
        { heading: "Adoption", paragraphs: ["Staff trained on the new way of working through our [AI training for business](/ai-training-for-business), so that the change sticks."] },
      ],
    },
    processIntro: "Start with one workflow, prove the value, then expand.",
    timeline: [
      { title: "Workflow Audit", duration: "Free · 30 min", accent: "cyan", body: "We find the workflow most worth fixing first and what it would take." },
      { title: "Map & Scope", accent: "blue", body: "Your FDE shadows the work and defines success measures, systems and approval points." },
      { title: "Quotation", accent: "purple", body: "A clear monthly fee and scope, with no large upfront build." },
      { title: "Deploy", accent: "amber", body: "AI built into the workflow, tested with your team and released with guardrails." },
      { title: "Measure & Expand", accent: "green", body: "We review results, hand over and move on to the next workflow." },
    ],
    benefits: [
      { title: "An FDE, without the hire", body: "**AI as a Service** gives you an engineer who learns your business, at a fraction of the commitment of building a team." },
      { title: "Model-agnostic", body: "We choose what fits each task, rather than tying your workflows to one vendor's model." },
      { title: "Works with your systems", body: "We connect to what you already run, so that your team doesn't need to change tools." },
      { title: "People stay in control", body: "Human approval on anything that matters, with logs that show what the AI did and why." },
    ],
    whatsIncluded: [
      "**Virtual Forward Deployed Engineer** assigned to your business",
      "Workflow mapping and a prioritised AI roadmap",
      "AI agents and automations deployed into your workflows",
      "Integrations with your email, documents, CRM and messaging",
      "Permissions, approval points, audit logs and cost limits",
      "Regular reviews of results against agreed measures",
      "Staff handover, documentation and training",
    ],
    faq: [
      { q: "What is AI as a Service?", a: "**AI as a Service (AIaaS)** means getting AI capability as an ongoing service rather than building an in-house team. We provide the engineering, the deployment and the ongoing improvement." },
      { q: "What is a virtual Forward Deployed Engineer?", a: "A **Forward Deployed Engineer** works directly with a business to deploy technology into its real workflows. Ours works with you remotely as a service, with on-site sessions when useful." },
      { q: "Which industries do you work with?", a: "We can help in finance, marketing, legal, retail, HR, sales, customer service, operations, education, healthcare administration, logistics and property. The approach is the same: start from your workflow." },
      { q: "Is our data safe?", a: "We agree data boundaries before starting: what AI can see, where it runs and who approves what it does. For sensitive work, we can use self-hosted options on your own infrastructure." },
      { q: "Do we need technical staff?", a: "No. Your FDE handles the engineering. We need someone who knows the workflow and can make decisions." },
      { q: "Will AI replace our staff?", a: "That is your decision, but we design for AI handling repetitive steps while your people review, decide and handle exceptions." },
      { q: "What results can we expect?", a: "It depends on the workflow, so we agree the measures with you at the start rather than promise a number." },
    ],
  },

  "ai-training-for-business": {
    slug: "ai-training-for-business",
    title: "AI Training for Business",
    leadSource: "ai-training-page",
    serviceType: "Corporate AI Training: Claude Code, Codex, Microsoft Copilot and Gemini",
    hero: {
      kicker: "[ CLAUDE CODE · CODEX · MICROSOFT COPILOT · GEMINI ]",
      headlineHtml:
        '<span class="gradient-text">AI training for business</span>, built around your company\'s own work.',
      subhead:
        "**Corporate AI training** in **Claude Code**, **Codex**, **Microsoft Copilot** and **Gemini**, customised and contextualised to your company. Your people learn on your workflows and use cases, not on generic examples.",
    },
    meta: {
      title: "AI Training for Business — Claude Code, Codex, Copilot, Gemini",
      description:
        "Corporate AI training in Singapore: Claude Code, Codex, Microsoft Copilot and Gemini, customised to your workflows and use cases. Book a free training needs check.",
      keywords:
        "AI training for business, corporate AI training Singapore, Claude Code training, Codex training, Microsoft Copilot training, Gemini training, customised AI training, AI training for employees",
    },
    offer: {
      title: "Free training needs check",
      bullets: [
        "Which tool suits which of your teams?",
        "Which of your real use cases should the labs use?",
        "How will you know the training worked?",
      ],
      buttonLabel: "Plan my team's training →",
      placeholder: "Which teams need training, which tools do you already license, and what work should it improve?",
    },
    pains: [
      {
        title: "Generic training doesn't transfer",
        body: "Staff follow the demo, go back to their desks and don't use it. People adopt AI when they've practised on their own documents, data and processes.",
      },
      {
        title: "You've paid for licences nobody uses well",
        body: "Copilot or Gemini seats sit under-used because people only know how to ask it questions. Real gains come from changing how the work gets done.",
      },
      {
        title: "Without rules, people improvise",
        body: "Without guidance, staff paste sensitive data into whichever tool is open. Good training covers your policy on what is allowed, not only prompts.",
      },
    ],
    showcase: {
      id: "tracks",
      kicker: "[ TRAINING TRACKS ]",
      heading: "Four tools, one approach: your work, your use cases",
      intro: "Choose one track or mix them by team. Each is rebuilt around your company before we deliver it.",
      items: [
        { title: "Claude Code", body: "For developers and technical teams: agentic coding, skills, hooks, MCP servers and safe review workflows on your own repositories." },
        { title: "Codex", body: "For engineering teams on OpenAI: delegating tasks to agents, reviewing their work and building it into your development process." },
        { title: "Microsoft Copilot", body: "For Microsoft 365 organisations: Word, Excel, Outlook and Teams workflows, plus Copilot Studio agents for repeat tasks." },
        { title: "Gemini", body: "For Google Workspace organisations: Gmail, Docs, Sheets and Meet workflows, research and custom assistants for your team." },
      ],
    },
    overview: {
      kicker: "[ AI TRAINING FOR BUSINESS ]",
      heading: "Training that starts with your company, not a slide deck",
      paragraphs: [
        "Before delivery, we talk with your team leads, collect real tasks and rebuild the labs around them. A finance team practises on month-end work, marketing on campaign briefs, and developers on your codebase, with anything sensitive removed or replaced first.",
        "Tertiary Infotech Academy designs and delivers technical training every day through Tertiary Courses, and we use these tools ourselves to build real software. That means the trainers can answer what happens after the demo.",
        "Each participant leaves with working examples from their own job, and your company gets a playbook of use cases and rules to keep building on.",
      ],
      sections: [
        { heading: "Customised use cases", paragraphs: ["Labs are built from your documents, processes and systems, with sensitive content replaced by realistic substitutes."] },
        { heading: "Role-based tracks", paragraphs: ["Separate paths for leaders, business users and technical teams, because each needs something different from the same tool."] },
        { heading: "Your AI policy", paragraphs: ["What staff can and can't do with company data, covered in practice. We can help you write the policy if you don't yet have one."] },
        { heading: "After the course", paragraphs: ["A use-case playbook and optional follow-up clinics. To go further, our [virtual FDE](/ai-as-a-service) can deploy what teams identified."] },
      ],
    },
    processIntro: "We scope and customise before anyone sits in a classroom.",
    timeline: [
      { title: "Needs Check", duration: "Free · 30 min", accent: "cyan", body: "Teams, tools, goals and what success would look like." },
      { title: "Use-Case Discovery", accent: "blue", body: "We collect real tasks from your team leads and decide which to use." },
      { title: "Quotation", accent: "purple", body: "A proposal based on groups, duration, format and how much customisation you need." },
      { title: "Customise & Deliver", accent: "amber", body: "Labs rebuilt around your work, delivered on-site or online with hands-on practice." },
      { title: "Playbook & Follow-Up", accent: "green", body: "A playbook of use cases and rules, plus follow-up clinics if you want them." },
    ],
    benefits: [
      { title: "Your work, not generic demos", body: "**AI training for business** contextualised to your company's own workflows and use cases." },
      { title: "All the major tools", body: "**Claude Code**, **Codex**, **Microsoft Copilot** and **Gemini**, so that training follows the tools you already use." },
      { title: "Trainers who build with AI", body: "We use these tools for real projects, so that the training reflects daily practice, not only the features." },
      { title: "A clear path after class", body: "A playbook and a route to deploying what teams find, so that the training turns into change." },
    ],
    whatsIncluded: [
      "Training needs check with your team leads",
      "Use cases collected from your own workflows",
      "**Claude Code**, **Codex**, **Microsoft Copilot** or **Gemini** tracks",
      "Separate paths for leaders, business users and technical teams",
      "Hands-on labs rebuilt around your company's context",
      "Guidance on using company data safely",
      "Use-case playbook for each team",
      "Optional follow-up clinics",
    ],
    faq: [
      { q: "What makes this different from a public AI course?", a: "A public course teaches the tool. Our **AI training for business** is rebuilt around your company, so your people practise on the work they actually do." },
      { q: "Which tool should we train on?", a: "Usually the one you already license: **Microsoft Copilot** for Microsoft 365, **Gemini** for Google Workspace, and **Claude Code** or **Codex** for technical teams. We'll help you decide in the free check." },
      { q: "Do participants need technical skills?", a: "Not for the Copilot and Gemini tracks. The Claude Code and Codex tracks suit developers and technically minded staff." },
      { q: "Can we use our own data in the labs?", a: "We build labs from your real scenarios, but remove or replace anything sensitive. We agree this with you before delivery." },
      { q: "On-site or online?", a: "Either. We'll recommend what suits your group's size and the tools involved." },
      { q: "Is the training eligible for funding?", a: "This customised corporate training is quoted directly. If funding matters to you, ask us about our accredited courses at Tertiary Courses." },
    ],
  },
};

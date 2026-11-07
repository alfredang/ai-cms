// Lead-generating landing pages for the SSG Services list. Merged into
// SERVICE_PAGES in service-pages.ts, so admin overrides work the same way.
//
// Regulatory facts here come from what SWDA, IBF and the Private Education Act
// documents say, as verified on 7 Nov 2026. Re-check before changing a number.
// Never promise an approval or a TPQA grade, and never name a client.

import type { ServicePageContent } from "@/lib/service-pages";

export const SSG_SERVICE_PAGES: Record<string, ServicePageContent> = {
  "ibf-course-development": {
    slug: "ibf-course-development",
    title: "IBF Course Development",
    leadSource: "ibf-course-page",
    serviceType: "IBF Course Development",
    hero: {
      kicker: "[ IBF-STS · FTS · CORE FAA/SFA CPD ]",
      headlineHtml:
        '<span class="gradient-text">IBF course development</span>, including the experts IBF requires.',
      subhead:
        "IBF is notoriously hard to get approved. Our **IBF course development** builds IBF-STS, FTS and Core FAA/SFA CPD courses from the TSC up, and we can provide the Assessor Coach and financial-sector SME your application needs.",
    },
    meta: {
      title: "IBF Course Development Singapore — IBF-STS, FTS & CPD",
      description:
        "IBF course development for IBF-STS, FTS and Core FAA/SFA CPD courses in Singapore, built from the TSC with a marks-based rubric. Book a free course go/no-go.",
      keywords:
        "IBF course development, IBF-STS course development, IBF FTS course, IBF course accreditation Singapore, IBF Skills Framework course, Core FAA CPD course, IBF course submission",
    },
    offer: {
      title: "Free IBF course go/no-go",
      bullets: [
        "Does your course truly fit an FS job role and TSC?",
        "Which IBF route fits: STS, FTS or Core CPD?",
        "Who will be your Assessor Coach and financial-sector SME?",
      ],
      buttonLabel: "Get my IBF go/no-go →",
      placeholder: "What is the course about, who is it for, and have you filed with IBF before?",
    },
    pains: [
      {
        title: "No Assessor Coach or FS SME? That's where many stop",
        body: "IBF looks hard at the people named on a course. The Assessor Coach needs an ACTA, ACLP or equivalent and cannot also be the assessment developer. We can provide both the coach and an SME with a financial background.",
      },
      {
        title: "A generic course with FS examples gets found out",
        body: "IBF has told applicants a course “remained primarily focused” on general skills despite added finance examples. Mapping an existing course to the nearest TSC rarely works.",
      },
      {
        title: "WSQ habits cost you rounds",
        body: "Competent / Not Yet Competent grading, WSQ job titles and knowledge-recall questions are what IBF sends back. IBF expects a passing mark and a marks-based rubric.",
      },
      {
        title: "First-timers can lose everything at once",
        body: "A first-time provider files its organisation application with the course, and IBF judges them together. We have seen both rejected in a single decision.",
      },
    ],
    overview: {
      kicker: "[ IBF COURSE DEVELOPMENT ]",
      heading: "IBF is not WSQ, so the course cannot be built like one",
      paragraphs: [
        "**IBF course development** starts from the Skills Framework for Financial Services: the job role, the sub-sector and the Technical Skills and Competencies (TSC) your learners actually need. We build the learning outcomes, content and assessments from that TSC, rather than fitting a finished course to it afterwards.",
        "Tertiary Infotech Academy holds its own IBF-accredited courses, so we develop to the reviewer's questions: does the content reach practitioner level, is the assessment pitched at the proficiency level, and do the people named on the application have real financial-services experience?",
        "If your course does not have a genuine TSC behind it, we will say so in the first call. Rebuilding from the TSC works. Adding finance examples to a general course does not.",
      ],
      sections: [
        {
          heading: "IBF-STS and FTS courses",
          paragraphs: [
            "Course design, Skills Competency Checklist, FS contextualisation, Course Prospectus and IBF Certification write-up, prepared for filing on TPGateway.",
          ],
        },
        {
          heading: "Assessment IBF can trust",
          paragraphs: [
            "An Assessment Plan with a passing mark, a marks-based rubric, and questions in a financial-services context rather than knowledge recall.",
          ],
        },
        {
          heading: "Listing fields that fit",
          paragraphs: [
            "Your MySkillsFuture listing fields are capped at 2,000 characters and uploaded filenames at 50. We measure both before filing, so nothing bounces on a technicality.",
          ],
        },
        {
          heading: "Clarifications and renewals",
          paragraphs: [
            "We draft replies to IBF's points of clarification and support renewals. New to IBF? You will also need our [IBF ATO application](/ibf-ato-application) service.",
          ],
        },
      ],
    },
    processIntro:
      "From go/no-go to filed application. Timing depends on how much of the course exists and on SME availability.",
    timeline: [
      { title: "Go/No-Go", duration: "Free · 30 min", accent: "cyan", body: "We test the course against the FS job role, TSC and IBF route, and check your track record." },
      { title: "TSC Mapping", accent: "blue", body: "Job role, sub-sector, TSC and proficiency level confirmed, with the Skills Competency Checklist drafted." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal scoped to course length, assessment and what you already have." },
      { title: "Build", accent: "amber", body: "Lesson plan, prospectus, slides, learner guide, Assessment Plan and rubric, reviewed with your SME." },
      { title: "File & Clarify", accent: "green", body: "Application prepared for TPGateway, then support through IBF's points of clarification." },
    ],
    benefits: [
      { title: "Built from the TSC", body: "**IBF course development** that starts from the Skills Framework for Financial Services, not from a slide deck you already own." },
      { title: "The people, provided", body: "We can provide the Assessor Coach and financial-sector SME for your application, two of the hardest requirements for most providers to meet." },
      { title: "Honest go/no-go first", body: "We check fit before quoting, because a weak application can cost you both the course and the organisation approval." },
      { title: "IBF-specific assessment", body: "A passing mark, a marks-based rubric and FS context — no Competent / Not Yet Competent carried over from WSQ." },
      { title: "Own IBF experience", body: "We hold IBF-accredited courses ourselves, so we write for the questions reviewers ask." },
    ],
    whatsIncluded: [
      "**IBF course development** scoped to IBF-STS, FTS or Core FAA/SFA CPD",
      "FS job role, sub-sector and TSC mapping",
      "Skills Competency Checklist",
      "Course Prospectus and IBF Certification write-up",
      "Lesson Plan, slides and Learner Guide",
      "Assessment Plan with passing mark and marks-based rubric",
      "Assessor Coach provided, with ACTA, ACLP or equivalent",
      "SME with a financial-services background provided",
      "Course Validation Checklist support",
      "MySkillsFuture listing fields, measured against the 2,000-character cap",
      "Draft replies to IBF's points of clarification",
    ],
    faq: [
      { q: "Why is IBF so hard to get approved?", a: "IBF tests whether a course truly serves financial-services practitioners, and whether the people behind it have the right background. Many providers do not have an Assessor Coach or financial-sector SME in-house, which is a gap we can fill." },
      { q: "What is IBF course development?", a: "**IBF course development** means designing a financial-sector course to the Skills Framework for Financial Services so that it can be accredited by the Institute of Banking and Finance, under routes such as IBF-STS or FTS." },
      { q: "Can you convert our WSQ course to IBF?", a: "Only if the content really serves a financial-services job role and TSC. The assessment, roles and context all have to change. We test this in the free go/no-go before you spend anything." },
      { q: "Do we need to be an IBF-approved provider first?", a: "A first-time provider files its organisation application together with the course, and IBF judges them together. See our [IBF ATO application](/ibf-ato-application) service." },
      { q: "Can you provide the Assessor Coach and SME?", a: "Yes. We can provide an Assessor Coach and an SME with a financial background for your application. The Assessor Coach must hold an ACTA, ACLP or equivalent and cannot be the assessment developer, and IBF reviews everyone named." },
      { q: "What trainer experience does IBF look for?", a: "IBF looks closely at the financial-services and financial-training experience of the trainers, developers and Course Reviewer named on the course. We check your people against this early." },
      { q: "Can you guarantee IBF approval?", a: "No, and nobody honestly can. IBF decides. What we can do is tell you early if the application is weak, and build the strongest honest case if it is not." },
      { q: "Do you handle course renewals?", a: "Yes. We review the course against current IBF expectations and prepare the renewal application." },
    ],
  },

  "pwm-course-development": {
    slug: "pwm-course-development",
    title: "PWM Course Development",
    leadSource: "pwm-course-page",
    serviceType: "PWM Course Development",
    hero: {
      kicker: "[ PROGRESSIVE WAGE MODEL · WSQ ]",
      headlineHtml:
        '<span class="gradient-text">PWM course development</span> for the sectors that need it most.',
      subhead:
        "**PWM course development** for training providers serving Progressive Wage Model sectors — WSQ-accredited courses with the right sector, the right TSCs and the entry evidence SWDA looks for.",
    },
    meta: {
      title: "PWM Course Development Singapore — WSQ Progressive Wage",
      description:
        "PWM course development in Singapore: WSQ-accredited Progressive Wage Model courses with the right TSCs and CEB evidence. Book a free scoping check.",
      keywords:
        "PWM course development, Progressive Wage Model course, PWM training Singapore, WSQ PWM course, PWM courseware development, cleaning security landscape WSQ course",
    },
    offer: {
      title: "Free PWM course scoping check",
      bullets: [
        "Does your course meet SWDA's entry route for new WSQ courses?",
        "Which sector and TSCs should it carry?",
        "What will the SWDA reviewer expect to see?",
      ],
      buttonLabel: "Check my PWM course →",
      placeholder: "Which sector and job role is the course for, and how do your learners attend today?",
    },
    pains: [
      {
        title: "New WSQ courses now need an entry route",
        body: "Since 1 May 2026 a new WSQ modular course must match SWDA's entry criteria or carry a Course Endorsement Body's backing. Otherwise SWDA will not process it.",
      },
      {
        title: "The sector has to be obvious",
        body: "A PWM-targeted course should name its sector clearly in the title and description and use approved TSCs. Vague positioning invites questions and delay.",
      },
      {
        title: "Your learners are not office learners",
        body: "PWM workers are often shift-based, hands-on and may need support with language. Courseware written for desk-based audiences struggles in the classroom and in assessment.",
      },
    ],
    overview: {
      kicker: "[ PWM COURSE DEVELOPMENT ]",
      heading: "PWM courses have to work for the regulator and for the worker",
      paragraphs: [
        "Progressive Wage Model (PWM) sectors such as cleaning, security, landscape, retail and food services tie career progression to training. That makes **PWM course development** a steady opportunity for training providers, and one where a badly scoped course is expensive to fix.",
        "We start with the entry question: does the course match SWDA's criteria, or do you need a Course Endorsement Body's letter? Then we map the WSQ TSCs, write the Course Proposal, and build courseware your trainers can deliver to frontline workers.",
        "PWM courses currently stay on Skills Framework 1.0 while other WSQ courses move to SFw 2.0, so we check what applies to your course before any drafting starts.",
      ],
      sections: [
        { heading: "Course Proposal and TSC mapping", paragraphs: ["Sector named in the title and description, approved TSCs, and a clean mapping of learning outcomes to knowledge and abilities."] },
        { heading: "Courseware for frontline workers", paragraphs: ["Plain language, practical demonstrations and assessments that test the ability, built to the same audit standard as any [WSQ course](/wsq-course-development)."] },
        { heading: "Entry evidence", paragraphs: ["We help you identify the right Course Endorsement Body and prepare what it needs to see, before you spend on a full build."] },
        { heading: "Ready for checks after approval", paragraphs: ["Courseware stays aligned to the approved proposal, ready for a [CQC](/cqc-consultancy) and for your [TPQA](/tpqa-consultancy) review."] },
      ],
    },
    processIntro: "Entry route first, then the build. Timing depends on the course length and on your Course Endorsement Body.",
    timeline: [
      { title: "Scoping Check", duration: "Free · 30 min", accent: "cyan", body: "Sector, job role and entry route confirmed, with any risks flagged early." },
      { title: "Entry Evidence", accent: "blue", body: "Confirm the entry criteria match or the Course Endorsement Body's backing." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal based on course length and assessment." },
      { title: "Build", accent: "amber", body: "Course Proposal, slides, Lesson Plan, Learner Guide and assessments." },
      { title: "File & Clarify", accent: "green", body: "TPGateway application prepared, then support through SWDA's clarification rounds." },
    ],
    benefits: [
      { title: "Entry route checked first", body: "We confirm your **PWM course development** can pass SWDA's entry criteria before you commit to a build." },
      { title: "Designed for real learners", body: "Practical, plain-language courseware suited to shift-based and frontline workers." },
      { title: "One source of truth", body: "Slides, Lesson Plan, Learner Guide and assessments all generated to agree with the proposal." },
      { title: "Audit-ready from day one", body: "Version control that shows which courseware was deployed in which run." },
    ],
    whatsIncluded: [
      "**PWM course development** scoping and entry-route check",
      "Sector positioning and approved TSC mapping",
      "Course Proposal for TPGateway",
      "Slide deck, Lesson Plan and Learner Guide",
      "Facilitator Guide and Assessment Plan",
      "Assessments with marking guides",
      "Support through SWDA's clarification rounds",
    ],
    faq: [
      { q: "What is PWM course development?", a: "**PWM course development** is building WSQ-accredited courses for workers in Progressive Wage Model sectors, so that training supports their wage and career progression." },
      { q: "Do PWM courses need to be WSQ?", a: "PWM-targeted courses are generally built as WSQ-accredited courses. Check the current requirement for your sector, as the sector's tripartite recommendations set what training counts." },
      { q: "Do we need a Course Endorsement Body's letter?", a: "If the course does not match SWDA's entry criteria, you will need Course Endorsement Body backing. We check this in the free scoping call." },
      { q: "Are PWM courses moving to Skills Framework 2.0?", a: "SWDA has said PWM courses stay on SFw 1.0 for now. We re-check the position before quoting because the rules are still moving." },
      { q: "Can you adapt courseware for lower literacy?", a: "Yes. We write in plain language and lean on demonstrations and practical assessments, within what your approved proposal allows." },
      { q: "Can you guarantee SWDA approval?", a: "No. SWDA decides. Our job is to find scope problems early and give you a complete, consistent application." },
    ],
  },

  "cpd-course-development": {
    slug: "cpd-course-development",
    title: "CPD Course Development",
    leadSource: "cpd-course-page",
    serviceType: "CPD Course Development",
    hero: {
      kicker: "[ CPD · TAEPP · CORE FAA/SFA · SOCIETIES ]",
      headlineHtml:
        '<span class="gradient-text">CPD course development</span> your professionals can claim.',
      subhead:
        "**CPD course development** for adult educators, financial advisers and other professionals. We also advise on how to get approved by CPD authorisation bodies such as TAEPP and professional societies in Singapore.",
    },
    meta: {
      title: "CPD Course Development Singapore — Core FAA/SFA & More",
      description:
        "CPD course development in Singapore, plus advice on approval from TAEPP, IBF and professional societies. Qualifying hours mapped. Book a free check.",
      keywords:
        "CPD course development, TAEPP CPD course, TAEPP approved CPD provider, CPD authorisation Singapore, society CPD provider Singapore, CPD training provider Singapore, Core FAA CPD course, SFA CPD course, IBF CPD course, continuing professional development course Singapore, CPD points course",
    },
    offer: {
      title: "Free CPD mapping check",
      bullets: [
        "Which authorisation body fits: TAEPP, IBF or a society?",
        "How do you get approved as a CPD provider?",
        "Which topics and hours are likely to qualify?",
        "What records will you need to keep?",
      ],
      buttonLabel: "Map my CPD course →",
      placeholder: "Who are the learners, which professional body or licence is involved, and how long is the course?",
    },
    pains: [
      {
        title: "Getting approved is its own process",
        body: "TAEPP, IBF and professional societies each decide who can offer CPD that counts. We advise you on how to get approved by the bodies your learners need.",
      },
      {
        title: "Every body has its own rules",
        body: "What counts as CPD varies by regulator and professional body. A course built for one body's rules cannot be assumed to count for another's.",
      },
      {
        title: "Records are the product",
        body: "Your learners rely on your attendance and assessment records to meet their own obligations. Gaps there become their problem, then yours.",
      },
    ],
    overview: {
      kicker: "[ CPD COURSE DEVELOPMENT ]",
      heading: "CPD only has value if the hours count",
      paragraphs: [
        "Professionals take continuing professional development courses because they have to keep their standing, so **CPD course development** has to begin with the rules of the recognising body and not with the slides.",
        "For adult educators, the Training and Adult Educator Professional Pathway (TAEPP) sets a structured route with CPD at its heart, which creates steady demand for approved courses. For financial services, we develop for IBF's Core FAA/SFA CPD route, including the breakdown of qualifying topics and duration. For other professions, we work from the society's or body's published requirements and confirm anything unclear with them directly.",
        "We also advise on the step before the course: how your organisation gets approved by CPD authorisation bodies such as TAEPP and professional societies in Singapore, and what each one will expect from you.",
        "We pair the course with the records that prove it happened: attendance, assessment and learner transcripts. Our [LMS](/learning-management-system) can track CPD points and accreditation logging if you need a system to run it.",
      ],
      sections: [
        { heading: "Approval by CPD bodies", paragraphs: ["Advice on how to get approved by authorisation bodies such as TAEPP and societies in Singapore, including who to approach and what to prepare."] },
        { heading: "Core FAA/SFA CPD", paragraphs: ["Course content and a qualifying-hours breakdown prepared for IBF's application, alongside our wider [IBF course development](/ibf-course-development) service."] },
        { heading: "Professional bodies", paragraphs: ["Content mapped to the body's learning categories, with the outline and trainer details they ask for."] },
                { heading: "CPD records", paragraphs: ["Attendance and assessment records, learner transcripts and CPD tracking that are easy to produce when asked."] },
      ],
    },
    processIntro: "We confirm what counts before writing anything. Timing depends on course length and the recognising body.",
    timeline: [
      { title: "Mapping Check", duration: "Free · 30 min", accent: "cyan", body: "We identify the recognising body, its rules and the likely qualifying hours." },
      { title: "Course Outline", accent: "blue", body: "Learning outcomes, topics and an hours breakdown against the body's categories." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal scoped to format, length and assessment." },
      { title: "Build", accent: "amber", body: "Slides, trainer notes, learner materials and any assessment." },
      { title: "Application & Records", accent: "green", body: "Support with the recognition application and the records your learners will rely on." },
    ],
    benefits: [
      { title: "Approval advice included", body: "We advise on how to get approved by CPD authorisation bodies such as TAEPP and professional societies, as well as on building the course." },
      { title: "Rules first", body: "**CPD course development** that starts with the recognising body's rules, so the hours are designed to count." },
      { title: "Qualifying-hours breakdown", body: "Topics and durations laid out the way the application asks for them." },
      { title: "Records built in", body: "Attendance, assessment and transcripts planned from the start, with CPD tracking available in our LMS." },
          ],
    whatsIncluded: [
      "Advice on approval by CPD bodies such as TAEPP and professional societies",
      "**CPD course development** scoping against the recognising body's rules",
      "Learning outcomes and course outline",
      "Qualifying topics and hours breakdown",
      "Slides, trainer notes and learner materials",
      "Assessment and marking guide, where required",
      "Support with the recognition application",
      "Attendance and record templates",
      "Optional CPD tracking on our LMS",
    ],
    faq: [
      { q: "What is CPD course development?", a: "**CPD course development** is designing a course that a regulator or professional body will recognise towards a professional's continuing professional development hours." },
      { q: "Can you help us get approved to offer CPD?", a: "Yes. We advise on how to get approved by CPD authorisation bodies such as TAEPP and professional societies in Singapore. Each body makes its own decision." },
      { q: "Which CPD schemes do you work with?", a: "We work with TAEPP for adult educators and IBF's Core FAA/SFA CPD route, and with other professional societies based on their published requirements. Tell us which body you need." },
      { q: "Will all our course hours count?", a: "Not always. Recognition often applies to specific topics and durations, which is why we map this before writing the course." },
      { q: "Can you turn an existing course into a CPD course?", a: "Often, yes. We review it against the body's rules and tell you what has to change." },
      { q: "Can you track CPD points?", a: "Yes. Our [LMS](/learning-management-system) supports CPD tracking, accreditation logging and learner transcripts." },
      { q: "Do you guarantee recognition?", a: "No. The recognising body decides. We design to its rules and flag anything that looks doubtful early." },
    ],
  },

  "sctp-module-development": {
    slug: "sctp-module-development",
    title: "SCTP Module Development",
    leadSource: "sctp-module-page",
    serviceType: "SCTP Module Development",
    hero: {
      kicker: "[ SKILLSFUTURE CAREER TRANSITION PROGRAMME ]",
      headlineHtml:
        '<span class="gradient-text">SCTP module development</span> — 2–5 month programmes built around real jobs.',
      subhead:
        "We advise on **SCTP module development** for SkillsFuture Career Transition Programmes: multi-module extended training of 2–5 months that meets job-skill demand, plus consultancy on the job placement services you need to be eligible.",
    },
    meta: {
      title: "SCTP Module Development Singapore — Proposal to Courseware",
      description:
        "SCTP module development in Singapore: 2–5 month multi-module training that meets job demand, plus job placement consultancy. Book a free SCTP readiness check.",
      keywords:
        "SCTP module development, SCTP job placement, multi-module extended training, SkillsFuture Career Transition Programme, SCTP course development, SCTP proposal Singapore, SCTP programme partner, SCTP training provider",
    },
    offer: {
      title: "Free SCTP readiness check",
      bullets: [
        "Do you meet the TPQA Grade 1 requirement?",
        "Is your route a direct appointment or a Call-for-Proposal?",
        "Can you shape a 2–5 month programme around job demand?",
        "What job placement services will you need?",
      ],
      buttonLabel: "Check my SCTP readiness →",
      placeholder: "What job role would the SCTP lead to, what is your TPQA grade, and do you offer job placement today?",
    },
    pains: [
      {
        title: "There is no application form to fill in",
        body: "New SCTPs enter only by direct appointment or a Call-for-Proposal, and the provider must be [TPQA Grade 1](/tpqa-consultancy). Many providers find this out late.",
      },
      {
        title: "No job placement plan, no SCTP",
        body: "SCTP is train-and-place. SWDA expects employment partners, industry projects, career support and placement tracking. We provide consultancy on building the job placement services you need to be eligible.",
      },
      {
        title: "A short course doesn't stretch into an SCTP",
        body: "SCTP needs multi-module, extended training of 2–5 months that meets job-skill demand. Modules must also stay consistent across the parent bundle and each course application.",
      },
    ],
    overview: {
      kicker: "[ SCTP MODULE DEVELOPMENT ]",
      heading: "Design the modules around the job at the end",
      paragraphs: [
        "A SkillsFuture Career Transition Programme is judged by whether mid-career learners get hired. **SCTP module development** therefore begins with the job role and the employers who will hire, and works backwards to the modules, projects and assessments.",
        "We build each module with its lesson plan and Course Proposal form from a single source, so hours, skills and titles stay aligned across the whole programme. SCTP titles start with “SCTP” and are mounted as non-WSQ programmes, which we account for from the outset.",
        "We prepare our own SCTP proposals the same way, so we know what the pack looks like, from the proposal to employment-partner agreements.",
      ],
      sections: [
        { heading: "2–5 month multi-module design", paragraphs: ["We advise on a module map, session plan and hours for extended training, with skills checked against job demand and the Course Approval Skills List."] },
        { heading: "Job placement consultancy", paragraphs: ["How to set up career support, employment partners and placement tracking, so your programme can meet SCTP's train-and-place expectations."] },
        { heading: "Industry projects", paragraphs: ["Project briefs that give learners portfolio evidence and give employers a reason to interview them."] },
        { heading: "Proposal and partner pack", paragraphs: ["Proposal narrative, module annexes and employment-partner MOU templates for your review and signature."] },
        { heading: "Course applications", paragraphs: ["Course Proposal forms ready for the parent bundle and each modular course on TPGateway, after appointment."] },
      ],
    },
    processIntro: "Readiness first, because the route into SCTP is narrow. Timing depends on your appointment route and on your partners.",
    timeline: [
      { title: "Readiness Check", duration: "Free · 30 min", accent: "cyan", body: "TPQA grade, entry route, target job role and employer interest reviewed." },
      { title: "Programme Design", accent: "blue", body: "Module map, hours, skills and industry project plan." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal for the modules and pack you need." },
      { title: "Build", accent: "amber", body: "Modules, lesson plans, proposal, partner agreements and course forms." },
      { title: "Submit & Mount", accent: "green", body: "Pack ready for submission, then course applications once bundle codes are issued." },
    ],
    benefits: [
      { title: "Job role first", body: "**SCTP module development** that works back from employers' hiring needs." },
      { title: "One source across modules", body: "Hours, titles and skills stay aligned across the proposal, lesson plans and forms." },
      { title: "Job placement consultancy", body: "Advice on employment partners, career support and placement tracking, built in from the start so that you can meet SCTP's train-and-place expectations." },
      { title: "Extended training that fits", body: "Multi-module programmes of 2–5 months, shaped around the skills employers are asking for." },
          ],
    whatsIncluded: [
      "**SCTP module development** advice for a 2–5 month multi-module programme",
      "Job-skill demand review for the target role",
      "Job placement services consultancy",
      "Skills mapping against the Course Approval Skills List",
      "Industry project briefs",
      "Proposal narrative and module annex",
      "Employment-partner MOU templates",
      "Course Proposal forms for bundle and modular courses",
      "Slides, Lesson Plans and Learner Guides",
      "Career support and placement tracking plan",
    ],
    faq: [
      { q: "What is SCTP module development?", a: "**SCTP module development** is designing the modules, lesson plans and supporting documents of a SkillsFuture Career Transition Programme, which helps mid-career learners move into new roles." },
      { q: "How long should an SCTP programme be?", a: "We advise on multi-module, extended training of around 2–5 months, built around the skills the target job demands. The right length depends on the role and how much your learners need to learn." },
      { q: "What job placement services do we need?", a: "SCTP is train-and-place, so SWDA expects employment partners, career support and placement tracking. We provide consultancy on setting these up to meet eligibility." },
      { q: "How do we become an SCTP provider?", a: "There is no open application form. New SCTPs enter by direct appointment or a Call-for-Proposal, and the provider must be TPQA Grade 1." },
      { q: "We are not TPQA Grade 1 yet. What should we do?", a: "Start with your quality grade. Our [TPQA consultancy](/tpqa-consultancy) can help you prepare, and you can develop the modules in parallel." },
      { q: "Do SCTP courses count as WSQ?", a: "SCTPs are mounted as non-WSQ programmes, with titles beginning “SCTP”. We build the course forms accordingly." },
      { q: "Do you find employment partners for us?", a: "The partners need to be yours, because you will be working with them. Our job placement consultancy helps you define what to ask for and prepare the MOU." },
      { q: "Can you guarantee an SCTP appointment?", a: "No. SWDA decides who is appointed. We help you put forward the strongest honest case." },
    ],
  },

  "ibf-ato-application": {
    slug: "ibf-ato-application",
    title: "IBF ATO Application",
    leadSource: "ibf-ato-page",
    serviceType: "IBF ATO Application and Organisation Registration",
    hero: {
      kicker: "[ IBF ORGANISATION REGISTRATION ]",
      headlineHtml:
        '<span class="gradient-text">IBF ATO application</span> — notoriously hard, so don\'t file it alone.',
      subhead:
        "IBF is notoriously difficult to get approved. Our **IBF ATO application** service takes you through IBF Organisation Registration, starts with an honest go/no-go on your track record, and can provide the Assessor Coach and financial-sector SME you need.",
    },
    meta: {
      title: "IBF ATO Application Singapore — Organisation Registration",
      description:
        "IBF ATO application support for Singapore training providers: Organisation Registration, Quality Manual and FS track record. Book a free IBF ATO go/no-go today.",
      keywords:
        "IBF ATO application, IBF ATO service, SWDA IBF OR service, IBF Organisation Registration, IBF Organisation Eligibility, become IBF training provider, IBF approved training organisation",
    },
    offer: {
      title: "Free IBF ATO go/no-go",
      bullets: [
        "Is your financial-services track record strong enough?",
        "Which applicant category do you fall under?",
        "Do your trainers and reviewer meet IBF's bar?",
      ],
      buttonLabel: "Get my IBF ATO go/no-go →",
      placeholder: "Which financial institutions have you trained for in the past year, and what course do you want to file?",
    },
    pains: [
      {
        title: "IBF wants people with real financial backgrounds",
        body: "Assessor Coach, Course Reviewer, SME: IBF checks all of them, and rejections have cited a lack of financial-services expertise. We can provide the Assessor Coach and SME for your application.",
      },
      {
        title: "Track record is the real test",
        body: "IBF asks whether you can train financial-services practitioners. A general training business, however strong, can fall short on this one question, and paperwork cannot fix it.",
      },
      {
        title: "Organisation and course stand or fall together",
        body: "First-time applicants file the organisation with a course, and IBF judges them together. We have seen both rejected in one decision.",
      },
      {
        title: "An SWDA pack will not do",
        body: "IBF's criteria, assessment rules and refund expectations differ from SWDA's. Reusing an SWDA manual or track record is one of the fastest ways to get questions.",
      },
    ],
    overview: {
      kicker: "[ IBF ATO APPLICATION ]",
      heading: "IBF is a different regulator with a different test",
      paragraphs: [
        "People often call it “IBF ATO”, but the formal step is **IBF Organisation Registration**, previously Organisation Eligibility. To apply for the Finance framework, SWDA itself directs providers to apply to the Institute of Banking and Finance, so this is a separate file from your [SWDA ATO application](/ssg-ato-application).",
        "IBF's published guidance names three kinds of applicant: MAS-licensed or exempt financial institutions, FinTech firms certified by the Singapore FinTech Association, and training providers with at least a one-year track record of courses for financial industry professionals. Most consultancy clients come in by the third route, which is where applications are most exposed.",
        "So our **IBF ATO application** service begins with a go/no-go. If your track record is not there yet, we tell you before you spend money, and show you what to build first.",
      ],
      sections: [
        { heading: "Track record review", paragraphs: ["Your past-year financial-services training: named institutions, FS seats per run and sponsor split, tested the way IBF is likely to read them."] },
        { heading: "Criteria and Quality Manual", paragraphs: ["A policies and operations manual written to IBF's Organisation Criteria, including its refund expectations, in your own context."] },
        { heading: "People", paragraphs: ["Fit and Proper declarations, plus trainers, developers and reviewers checked against IBF's expectations for FS and financial-training experience."] },
        { heading: "The course you file with it", paragraphs: ["A first-time filing needs a course, so we pair this with [IBF course development](/ibf-course-development)."] },
      ],
    },
    processIntro: "We test eligibility before anything else. IBF sets its own timing and may ask questions at any stage.",
    timeline: [
      { title: "Go/No-Go", duration: "Free · 30 min", accent: "cyan", body: "Applicant route, FS track record and people reviewed honestly." },
      { title: "Gap Plan", accent: "blue", body: "What you have, what is missing and what must be real before you file." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal for the organisation pack and first course." },
      { title: "Build", accent: "amber", body: "Criteria mapping, Quality Manual, declarations, records and the course." },
      { title: "File & Clarify", accent: "green", body: "Application filed by you on TPGateway, then support through IBF's questions." },
    ],
    benefits: [
      { title: "An honest go/no-go", body: "Our **IBF ATO application** service tells you whether to apply, and not only how." },
      { title: "Written for IBF, not SWDA", body: "An IBF-specific manual, track record and assessment approach, kept separate from any SWDA file." },
      { title: "Both files together", body: "The organisation and first course are planned as one case, as IBF will read them." },
      { title: "The people, provided", body: "We can provide an Assessor Coach and an SME with a financial background, so that those requirements don't hold your application back." },
      { title: "Own IBF experience", body: "We hold IBF-accredited courses ourselves and know the questions IBF asks of providers." },
    ],
    whatsIncluded: [
      "**IBF ATO application** go/no-go and gap plan",
      "Financial-services track record review",
      "Organisation Criteria mapping",
      "Policies and Operations Manual and Quality Manual",
      "Refund policy aligned to IBF's expectations",
      "Fit and Proper declarations support",
      "Assessor Coach and financial-sector SME provided",
      "Trainer, developer and Course Reviewer check",
      "Draft replies to IBF's questions",
    ],
    faq: [
      { q: "What is an IBF ATO application?", a: "An **IBF ATO application** is the common name for IBF Organisation Registration, formerly Organisation Eligibility. It is how a provider is recognised to offer IBF-accredited financial-sector courses." },
      { q: "Can you provide the Assessor Coach and SME for our application?", a: "Yes. We can provide both for your application. Your own organisation still needs its financial-services track record, which is something only you can show." },
      { q: "Is IBF ATO the same as SWDA ATO?", a: "No. They are separate regulators with separate tests. You can hold both, but each needs its own file. See our [SWDA ATO application](/ssg-ato-application) service." },
      { q: "What if we do not have a financial-services track record?", a: "Then an application is likely to be weak, however good the documents are. We will tell you plainly and suggest what to build first." },
      { q: "Can we apply without a course?", a: "A first-time provider files together with a course application, and IBF judges them together." },
      { q: "How much is the IBF fee?", a: "Please confirm the current fee with IBF directly before budgeting. Our consultancy fee is separate and quoted after the go/no-go." },
      { q: "Can you guarantee approval?", a: "No. IBF decides, and we have seen capable organisations turned down on track record. Our job is to find that out early." },
    ],
  },

  "pei-ato-application": {
    slug: "pei-ato-application",
    title: "PEI ATO Application",
    leadSource: "pei-ato-page",
    serviceType: "PEI ATO Application and Private Education Institution Registration",
    hero: {
      kicker: "[ PEI REGISTRATION · ENHANCED REGISTRATION FRAMEWORK ]",
      headlineHtml:
        '<span class="gradient-text">PEI ATO application</span> — register your private school with SWDA.',
      subhead:
        "Our **PEI service** takes you through registration as a Private Education Institution under the Enhanced Registration Framework, and helps you set up the Academic Board and Examination Board you need. We are a registered PEI ourselves.",
    },
    meta: {
      title: "PEI ATO Application Singapore — PEI Registration Service",
      description:
        "PEI service for Singapore: Private Education Institution registration under the ERF, boards, premises, courses and site inspection. Book a free PEI route check.",
      keywords:
        "PEI ATO application, PEI service, PEI registration Singapore, private education institution registration, Enhanced Registration Framework, ERF application, SWDA PEI, course permission",
    },
    offer: {
      title: "Free PEI route check",
      bullets: [
        "Do you need to be a PEI at all?",
        "Does your company meet the entity and capital rules?",
        "Will your planned courses be permitted?",
      ],
      buttonLabel: "Check my PEI route →",
      placeholder: "What courses do you plan to offer, full-time or part-time, and do you already have premises?",
    },
    pains: [
      {
        title: "You may not need a PEI at all",
        body: "A part-time certificate alone does not need PEI registration, while a full-time certificate, diploma or degree does. Choosing the wrong course type can undo months of planning.",
      },
      {
        title: "Setting up the two boards is a real hurdle",
        body: "You need an Academic Board and an Examination Board of at least three members each, with more than half suitably qualified or experienced. We help you set up both.",
      },
      {
        title: "The entry rules are concrete",
        body: "New applicants also need at least S$100,000 paid-up capital and premises that meet the rules, all in place before they can rely on them.",
      },
      {
        title: "No advertising before you are granted",
        body: "You cannot advertise or recruit while your application is pending, and fees are non-refundable, so a stalled application directly delays your revenue.",
      },
    ],
    overview: {
      kicker: "[ PEI SERVICE ]",
      heading: "What registering a Private Education Institution really involves",
      paragraphs: [
        "A Private Education Institution (PEI) offers private education under the Private Education Act 2009. SWDA now regulates PEIs and administers EduTrust. People often search for a “**PEI ATO application**”, but PEI registration and SWDA's Organisation Registration are different things, so we start by checking which one you need.",
        "You apply through GoBusiness Licensing with Corppass. The stated fee is S$535 for registration and S$20 per course, and it is non-refundable. SWDA gives about 40 working days once an application is complete, but clarification rounds and the site inspection decide how long it really takes.",
        "Tertiary Infotech Academy went through this process as an applicant and is a registered PEI at tertiaryinfotech.edu.sg. Our **PEI service** uses what the regulator actually asked us, including management's harder questions after the inspection.",
      ],
      sections: [
        { heading: "Course structure first", paragraphs: ["Full-time means at least one month, five days a week and three hours a day. We settle the course type, entry requirements and teacher qualifications before anything else."] },
        { heading: "Academic and Examination Boards", paragraphs: ["We help you set up both boards: composition, members' qualifications, appointment and acceptance letters and declarations, plus manager fit-and-proper checks."] },
        { heading: "Premises and contracts", paragraphs: ["At least one classroom plus an admin area, signage, capacity, student contracts, Form 12 and fee-collection limits."] },
        { heading: "Site inspection and go-live", paragraphs: ["Preparation for the inspection, then your live website checked against disclosure requirements after grant."] },
      ],
    },
    processIntro: "Route first, then build. SWDA states about 40 working days once complete; clarifications and inspection can extend this.",
    timeline: [
      { title: "Route Check", duration: "Free · 30 min", accent: "cyan", body: "Do you need a PEI, and can your course be permitted? We answer this first." },
      { title: "Readiness Review", accent: "blue", body: "Entity, capital, name, managers, boards, premises and teachers checked." },
      { title: "Quotation", accent: "purple", body: "A fixed-fee proposal based on your courses and readiness." },
      { title: "Build & Submit", accent: "amber", body: "Self-checklist documents, course packs and application, filed by you on GoBusiness." },
      { title: "Inspection & Grant", accent: "green", body: "Clarification replies and inspection preparation, through to go-live." },
    ],
    benefits: [
      { title: "We have done it ourselves", body: "Our **PEI service** is based on our own registration, not only on the published notes." },
      { title: "Right route first", body: "We check whether a PEI is needed at all, which can save you a great deal of time and money." },
      { title: "Boards set up with you", body: "We help you set up the Academic Board and Examination Board the application requires." },
      { title: "Harder questions prepared", body: "We prepare you for what management asks after the inspection, on the credibility of people and courses." },
      { title: "After the grant", body: "Notifications, annual returns and renewal timing explained so that you stay compliant." },
    ],
    whatsIncluded: [
      "**PEI service** route check and readiness review",
      "Course structure and entry requirements",
      "Academic Board and Examination Board set-up",
      "Manager and teacher declarations support",
      "Premises checklist",
      "Student contract, Form 12 and fee policies",
      "Website and disclosure review",
      "Clarification replies and site-inspection preparation",
    ],
    faq: [
      { q: "What is a PEI ATO application?", a: "It is how people often describe registering as a **Private Education Institution** in Singapore. Strictly, it is PEI registration under the Enhanced Registration Framework, which is separate from an [SWDA ATO application](/ssg-ato-application)." },
      { q: "Who regulates PEIs now?", a: "SWDA exercises the functions under the Private Education Act 2009 and administers EduTrust." },
      { q: "Do I need to be a PEI for short courses?", a: "Not always. A part-time certificate alone does not need PEI registration, and courses of one month or 50 hours or less that are not diplomas or degrees do not need course permission. We check your exact plan." },
      { q: "Can you help set up the Academic and Examination Boards?", a: "Yes. We help you set up both boards to the requirements: at least three members each, with more than half holding a qualification one level above your top award or five years' relevant experience. The members must be genuine and able to serve." },
      { q: "How much paid-up capital do I need?", a: "A new applicant needs at least S$100,000 paid-up capital, shown on your BizFile." },
      { q: "Can a PEI enrol foreign students?", a: "Only EduTrust-certified PEIs can enrol foreign students on a student pass route. Plan for this early if it matters to your business." },
      { q: "How long does it take?", a: "SWDA states about 40 working days once complete. In practice, allow more time for clarification rounds and the site inspection." },
      { q: "Can you guarantee registration?", a: "No. SWDA decides. We help you avoid the mistakes that cause returned applications and long delays." },
    ],
  },

  "cqc-consultancy": {
    slug: "cqc-consultancy",
    title: "CQC Consultancy",
    leadSource: "cqc-page",
    serviceType: "CQC Consultancy and Course Quality Check Support",
    hero: {
      kicker: "[ COURSE QUALITY CHECK · PERIODIC CHECKS ]",
      headlineHtml:
        '<span class="gradient-text">CQC consultancy</span> when SWDA checks your course.',
      subhead:
        "**CQC audit** support for accredited courses — request packs, **Improvement Plans** within the 14-working-day window, rebuilt courseware and periodic-check replies that show what you really delivered.",
    },
    meta: {
      title: "CQC Consultancy Singapore — CQC Audit & Improvement Plans",
      description:
        "CQC consultancy for SWDA Course Quality Checks: Improvement Plans, courseware rebuilds and periodic-check replies for RTPs. Book a free CQC review.",
      keywords:
        "CQC consultancy, CQC audit, CQC audit Singapore, Course Quality Check SWDA, CQC Improvement Plan, SWDA periodic check, WSQ courseware audit, QMD periodic check reply",
    },
    offer: {
      title: "Free CQC outcome review",
      bullets: [
        "What is SWDA actually asking for?",
        "How many days do you really have left?",
        "Is the fix a rewrite or a rebuild?",
      ],
      buttonLabel: "Review my CQC →",
      placeholder: "Have you received a CQC request, outcome or periodic check? What is the due date and course?",
    },
    pains: [
      {
        title: "The clock is short",
        body: "CQC requests have typically given 3–10 days, and an Improvement Plan is due within 14 working days of the outcome. A rebuild does not fit into that unless you start now.",
      },
      {
        title: "Your courseware must match the approved proposal",
        body: "Learning outcomes, topics, K&A text, durations and assessment methods are compared with the approved Course Proposal. Small drifts across versions become findings.",
      },
      {
        title: "Sending the wrong version costs rounds",
        body: "A periodic check is about what was deployed in the named run, and not your latest version. Sending current files instead can lead to more rounds with the officer.",
      },
    ],
    overview: {
      kicker: "[ CQC CONSULTANCY ]",
      heading: "How SWDA checks a live course, and how to answer well",
      paragraphs: [
        "SWDA's Quality Management Division checks live courses in two ways. A **CQC audit** is a desk review of your Facilitator Guide, Lesson Plan, Learner Guide with slides, and Assessment Plan. A periodic check looks at delivery: courseware, assessment booklets, records, learner submissions and adult-educator CVs for named runs.",
        "Our **CQC consultancy** starts with what SWDA wrote, in its own structure. We trace each observation to the approved Course Proposal, decide what has to change, and draft your Improvement Plan in SWDA's format.",
        "We hold one line firmly: nothing is back-dated and no record is created after the fact. Remediated courseware carries a new version and the real date, and gaps are declared rather than hidden. That is what protects your registration.",
      ],
      sections: [
        { heading: "CQC request packs", paragraphs: ["Your Annex A documents checked against the approved proposal before they go to SWDA, so you avoid observations you could have caught."] },
        { heading: "Improvement Plans", paragraphs: ["Observation-by-observation responses in SWDA's table format, with dated actions and honest owners."] },
        { heading: "Courseware rebuilds", paragraphs: ["Courseware rebuilt from the approved proposal by our [WSQ course development](/wsq-course-development) team, in your brand only."] },
        { heading: "Periodic-check replies", paragraphs: ["We help you find the versions actually deployed in each named run, then assemble a clean reply pack with current files labelled for information only."] },
      ],
    },
    processIntro: "When a deadline is running, we work back from the due date.",
    timeline: [
      { title: "Outcome Review", duration: "Free · 30 min", accent: "cyan", body: "We read the SWDA email with you, confirm the due date and size the fix." },
      { title: "Trace", accent: "blue", body: "Each observation traced to the approved Course Proposal and to your files." },
      { title: "Quotation", accent: "purple", body: "A fixed fee for the plan and any courseware rebuild." },
      { title: "Fix", accent: "amber", body: "Courseware remediation, the Improvement Plan and the evidence pack." },
      { title: "Reply & Roll Out", accent: "green", body: "Your reply to SWDA, then the same fixes applied across your other courses." },
    ],
    benefits: [
      { title: "Fast start", body: "Our **CQC consultancy** works back from your SWDA due date from the first conversation." },
      { title: "SWDA's structure, SWDA's words", body: "Improvement Plans mirror SWDA's own table and observation lettering, so that officers can check them quickly." },
      { title: "Never back-dated", body: "New versions, real dates and declared gaps. Honest records are your strongest protection." },
      { title: "Automated courseware checks", body: "We test courseware against what SWDA has actually raised, then a person reviews the result." },
    ],
    whatsIncluded: [
      "**CQC audit** outcome review and deadline plan",
      "CQC request pack review (FG, LP, LG with slides, AP)",
      "Improvement Plan in SWDA's table format",
      "Courseware rebuild from the approved Course Proposal",
      "Periodic-check reply pack with deployed versions identified",
      "Records and learner-submission review",
      "Roll-out plan for your other courses",
    ],
    faq: [
      { q: "What is a CQC audit?", a: "A **CQC audit** is SWDA's Course Quality Check: a desk review of a live course's courseware against its approved Course Proposal." },
      { q: "How long do we have to respond?", a: "If you pass, you acknowledge within 3 working days. If an Improvement Plan is required, it is due within 14 working days. Always go by the dates in your own SWDA email." },
      { q: "What is the difference between a CQC and a periodic check?", a: "A CQC reviews the courseware itself. A periodic check audits delivery of specific named runs, so you must send what was actually deployed in those runs." },
      { q: "Our records have gaps. Can you recreate them?", a: "No. We will never back-date or create records after the fact. We help you declare the gap honestly and fix the process going forward." },
      { q: "Can you rebuild our courseware under our own brand?", a: "Yes. Client courseware carries your brand only, with no Tertiary Infotech Academy names or links." },
      { q: "Does a CQC affect our TPQA?", a: "They are separate checks, but the same discipline supports both. See our [TPQA consultancy](/tpqa-consultancy)." },
      { q: "Can you guarantee a pass?", a: "No. SWDA decides. We give you a complete, consistent and honest reply." },
    ],
  },
};

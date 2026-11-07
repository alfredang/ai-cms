export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AILmsTmsShowcase } from "@/components/sections/AILmsTmsShowcase";
import { ELearningShowcase } from "@/components/sections/ELearningShowcase";
import { MobileAppsShowcase } from "@/components/sections/MobileAppsShowcase";
import { CMSShowcase } from "@/components/sections/CMSShowcase";
import { Services } from "@/components/sections/Services";
import { SsgServices } from "@/components/sections/SsgServices";
import { AiServices } from "@/components/sections/AiServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedEdTools } from "@/components/sections/FeaturedEdTools";
import { FeaturedPosts } from "@/components/sections/FeaturedPosts";
import { ContactForm } from "@/components/sections/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SSG & AI Services in Singapore: TPQA, ATO, CQC, AI Agents | Tertiary Infotech Academy",
  description:
    "SSG and AI services in Singapore: TPQA, SWDA and IBF ATO and OR, CQC, course development, AI transformation, AI agents and AIaaS. Book a free consultation.",
  keywords:
    "TPQA services in Singapore, TPQA consultation in Singapore, TPQA Grade 1, SWDA ATO services in Singapore, SSG ATO services in Singapore, IBF ATO services in Singapore, SWDA OR services in Singapore, SSG OR services in Singapore, IBF OR services in Singapore, CQC services and consultation, PEI OR application in Singapore, AI as a Service (AIaaS), AI agents, Meta Muse, OpenAI Dots, Grok Bots, Manus Cue, Forward Deployed Engineer, customised AI training for business, AI transformation in Singapore, AI job design in Singapore, AI job redesign, workplace learning consultation, SSG services Singapore, AI services Singapore, AI LMS Singapore, WSQ LMS, TMS for training providers, WSQ courseware development, SWDA courseware development, AI agent deployment, agentic AI development, AI transformation evaluation and consultation, mobile apps development in Singapore",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "SSG & AI Services in Singapore: TPQA, ATO, CQC, AI Agents | Tertiary Infotech Academy",
    description:
      "SSG and AI services in Singapore: TPQA, SWDA and IBF ATO and OR, CQC, course development, AI transformation, AI agents, AIaaS and customised AI training.",
    locale: "en_SG",
    siteName: "Tertiary Infotech Academy",
    images: [{ url: "/icon-192.png", width: 192, height: 192, alt: "Tertiary Infotech Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSG & AI Services in Singapore: TPQA, ATO, CQC, AI Agents | Tertiary Infotech Academy",
    description:
      "SSG and AI services in Singapore: TPQA, SWDA and IBF ATO and OR, CQC, course development, AI transformation, AI agents and AIaaS.",
    images: ["/icon-192.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SsgServices />
        <AiServices />
        <AILmsTmsShowcase />
        <ELearningShowcase />
        <CMSShowcase />
        <MobileAppsShowcase />
        <Services />
        <WhyChooseUs />
        <FeaturedEdTools />
        <FeaturedPosts />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PAGE_URL = "https://www.tertiaryinfotech.com/terms/mobile-apps";
const COMPANY = "Tertiary Infotech Academy Pte. Ltd.";
const BRAND = "Tertiary Infotech Academy";
const EFFECTIVE_DATE = "5 November 2026";
const CONTACT_EMAIL = "sales@tertiarycourses.com.sg";
const LINK_CLASS = "text-(--color-cyan) hover:underline";

const DESCRIPTION =
  "Terms of Service for the mobile apps published by Tertiary Infotech Academy, covering use of the apps, accounts, purchases, third-party data, and your consumer rights.";

export const metadata: Metadata = {
  title: "Mobile App Terms of Service",
  description: DESCRIPTION,
  alternates: { canonical: "/terms/mobile-apps" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Mobile App Terms of Service — Tertiary Infotech Academy",
    description: DESCRIPTION,
    locale: "en_SG",
    siteName: BRAND,
    images: [{ url: "/icon-192.png", width: 192, height: 192, alt: BRAND }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Terms of Service — Tertiary Infotech Academy",
    description: DESCRIPTION,
    images: ["/icon-192.png"],
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-white mb-3">{title}</h2>
      {children}
    </section>
  );
}

export default function MobileAppTermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-32 pb-24">
        <div className="grid-bg opacity-40" />
        <div
          className="glow-blob"
          style={{
            top: "-10%",
            left: "10%",
            width: 480,
            height: 480,
            background: "radial-gradient(circle, #5C00E5 0%, transparent 70%)",
          }}
        />
        <div
          className="glow-blob"
          style={{
            bottom: "-15%",
            right: "5%",
            width: 420,
            height: 420,
            background: "radial-gradient(circle, #59EBFD 0%, transparent 70%)",
          }}
        />

        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="kicker mb-3">[ LEGAL ]</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Mobile App <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-white/60 text-sm font-mono mb-10">
              Effective date: {EFFECTIVE_DATE}
            </p>

            <div className="glass p-8 space-y-8 text-white/80 leading-relaxed">
              <Section title="1. About these Terms">
                <p>
                  These Terms apply to the mobile apps published by {COMPANY}{" "}
                  (&ldquo;{BRAND}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                  &ldquo;our&rdquo;), a company incorporated in Singapore (UEN
                  201200696W). They apply to each app we publish under our
                  developer name (the &ldquo;Apps&rdquo;). By installing or using
                  an App, you agree to these Terms.
                </p>
                <p className="mt-3">
                  Our website and training services are covered by our general{" "}
                  <a href="/terms" className={LINK_CLASS}>
                    Terms of Service
                  </a>
                  . If an App connects you to an online service that has its own
                  terms, such as a course registration site, those terms also
                  apply to that service.
                </p>
              </Section>

              <Section title="2. Who may use the Apps">
                <p>
                  If you are under 18, or under the age of majority where you
                  live, you need the permission of a parent or guardian to use
                  the Apps. Some Apps are designed for children. For those Apps,
                  the parent or guardian accepts these Terms and is responsible
                  for how the child uses the App.
                </p>
                <p className="mt-3">
                  If your employer or training provider gave you access to an
                  App, their own rules may also apply to your use of it.
                </p>
              </Section>

              <Section title="3. Your licence to use the Apps">
                <p>
                  We give you a personal, non-exclusive, non-transferable licence
                  to install and use the Apps on devices you own or control. Your
                  use must also follow the terms of the app store you downloaded
                  the App from. The app store is not responsible for the Apps;
                  we are.
                </p>
              </Section>

              <Section title="4. Acceptable use">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Use the Apps for any unlawful or fraudulent purpose;</li>
                  <li>
                    Try to gain unauthorised access to the Apps, our systems, or
                    another person&rsquo;s account or data;
                  </li>
                  <li>
                    Interfere with the Apps or the servers and networks they
                    connect to, including by automated scraping;
                  </li>
                  <li>
                    Copy, resell, or reverse engineer the Apps, except where the
                    law allows this regardless of these Terms;
                  </li>
                  <li>
                    Upload content that is unlawful, harmful, or that infringes
                    someone else&rsquo;s rights.
                  </li>
                </ul>
              </Section>

              <Section title="5. Accounts">
                <p>
                  Some Apps ask you to sign in or create an account. Please give
                  accurate information, keep your login details secure, and tell
                  us promptly if you think someone else has used your account.
                </p>
              </Section>

              <Section title="6. Prices and purchases">
                <p>
                  Our Apps are free to download unless the store listing says
                  otherwise. Some Apps let you view or buy courses, listings, or
                  other services. The price and any refund terms are shown before
                  you pay, and they apply together with the rights described in
                  section 13.
                </p>
              </Section>

              <Section title="7. Your content">
                <p>
                  You keep ownership of what you create or add in the Apps, such
                  as notes, drawings, scans, and photos. If you choose to upload
                  or sync content, you allow us to store, process, and display it
                  only as needed to provide the feature you are using.
                </p>
                <p className="mt-3">
                  Some Apps keep your content only on your device. It may be lost
                  if you uninstall the App or lose the device, so please keep your
                  own copy of anything important.
                </p>
              </Section>

              <Section title="8. Information shown in the Apps">
                <p>
                  We try to keep information accurate and useful, but please check
                  it before relying on it for an important decision. In
                  particular:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    Transport, parking, charging, weather, and map information
                    often comes from third parties, and may be delayed, incomplete,
                    or unavailable;
                  </li>
                  <li>
                    Course fee, grant, and funding figures are estimates until they
                    are confirmed by the provider or funding agency;
                  </li>
                  <li>
                    Fitness and wellbeing content is general information, not
                    medical advice. Speak to a doctor about any health concerns;
                  </li>
                  <li>
                    Answers generated by artificial intelligence can be wrong, so
                    please check them before relying on them.
                  </li>
                </ul>
                <p className="mt-3">
                  Please stay aware of your surroundings and follow local laws when
                  using an App while travelling or exercising. Do not operate an
                  App in a way that distracts you while driving.
                </p>
              </Section>

              <Section title="9. Device permissions and third-party services">
                <p>
                  Some features need access to your device, such as location, the
                  camera, or the microphone. You can change these permissions in
                  your device settings, although the related feature may then stop
                  working.
                </p>
                <p className="mt-3">
                  Some Apps rely on services run by other companies, such as maps,
                  sign-in, or data providers. Those companies&rsquo; own terms and
                  privacy policies apply to their services.
                </p>
              </Section>

              <Section title="10. Privacy">
                <p>
                  Our{" "}
                  <a href="/privacy" className={LINK_CLASS}>
                    Privacy Policy
                  </a>{" "}
                  explains how we handle personal data, and the Data safety section
                  of each app store listing describes what that App collects and
                  shares.
                </p>
              </Section>

              <Section title="11. Intellectual property">
                <p>
                  The Apps, including their software, design, text, and graphics,
                  belong to {COMPANY} or its licensors. These Terms do not give you
                  any ownership of them. Open-source components and third-party
                  content remain subject to their own licences.
                </p>
              </Section>

              <Section title="12. Updates and availability">
                <p>
                  We may update, change, or stop offering an App or any of its
                  features, for example to fix problems, improve the App, or meet
                  legal or app store requirements. An App may need updating before
                  you can keep using it, and may not always be available without
                  interruption.
                </p>
              </Section>

              <Section title="13. Your consumer rights">
                <p>
                  Nothing in these Terms removes or limits any right you have under
                  consumer protection laws that cannot be excluded by agreement.
                  This includes the mandatory rights of consumers in the European
                  Economic Area and the United Kingdom, where we act as a trader.
                  Where those rights apply, they take priority over anything in
                  these Terms that conflicts with them.
                </p>
              </Section>

              <Section title="14. Warranties and our liability">
                <p>
                  Subject to section 13, and to the extent the law allows, the Apps
                  are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
                  and we do not promise that they will be uninterrupted or free of
                  errors.
                </p>
                <p className="mt-3">
                  Subject to section 13, and to the extent the law allows, we are
                  not liable for indirect or consequential loss arising from your
                  use of the Apps. Nothing in these Terms limits liability that
                  cannot legally be limited, such as liability for fraud, or for
                  death or personal injury caused by negligence.
                </p>
              </Section>

              <Section title="15. Ending your use">
                <p>
                  You can stop using an App at any time by uninstalling it. Removing
                  an App does not automatically close any account you created, so
                  please contact us if you also want your account closed. We may
                  suspend or end your access to an App if you seriously or repeatedly
                  breach these Terms, or if we have to do so by law.
                </p>
              </Section>

              <Section title="16. Changes to these Terms">
                <p>
                  We may update these Terms from time to time. The current version
                  will always be published on this page with its effective date. We
                  will give reasonable notice of important changes where we can.
                </p>
              </Section>

              <Section title="17. Governing law">
                <p>
                  These Terms are governed by the laws of the Republic of Singapore,
                  and disputes are subject to the jurisdiction of the Singapore
                  courts. If you are a consumer living in the European Economic Area
                  or the United Kingdom, you also keep the protection of the mandatory
                  laws of your country and may bring a claim in your local courts.
                </p>
              </Section>

              <Section title="18. Contact us">
                <p>
                  Questions about these Terms or any of our Apps can be sent to{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
                    {CONTACT_EMAIL}
                  </a>{" "}
                  or made by phone at{" "}
                  <a href="tel:+6561000613" className={LINK_CLASS}>
                    +65 6100 0613
                  </a>
                  .
                </p>
                <p className="mt-3 text-sm text-white/60">
                  {COMPANY} &middot; UEN 201200696W &middot; 12 Woodlands Square,
                  #07-86, Woods Square, Singapore 737715
                </p>
              </Section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

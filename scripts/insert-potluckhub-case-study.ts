/**
 * Insert (or upsert by slug) the Potluckhub client case-study blog post.
 *
 * Potluckhub is a Singapore home-chef marketplace we built end to end:
 *   - full-stack marketing website + marketplace (Next.js) at https://potluckhub.io
 *   - native iOS app (SwiftUI)        https://apps.apple.com/app/id6759842391
 *   - native Android app (Kotlin)     https://play.google.com/store/apps/details?id=io.potluckhub.app
 * all served by one shared REST API (api.potluckhub.io).
 *
 * Run: npx tsx --env-file=.env scripts/insert-potluckhub-case-study.ts
 * Delete this script after a successful production push.
 */
import { db } from "../src/db";
import { posts } from "../src/db/schema";
import { eq } from "drizzle-orm";
import { getR2Config } from "../src/lib/r2";
import { renderAndUploadCover } from "../src/lib/post-cover";

const SLUG = "potluckhub-home-chef-marketplace-web-ios-android";
const TITLE = "Potluckhub: A Home-Chef Marketplace on Web, iOS & Android";
const KICKER = "Client Build · Marketplace";
const CATEGORY_ID = 10; // Bespoke Apps
const AUTHOR_ID = 2; // angch@tertiaryinfotech.com

const SCREENSHOT =
  "https://pub-62aa61537a134e9780c302c6f0795233.r2.dev/blog/potluckhub-homepage-2026.png";

const LIVE = "https://potluckhub.io/";
const IOS = "https://apps.apple.com/app/id6759842391";
const ANDROID = "https://play.google.com/store/apps/details?id=io.potluckhub.app";

// ---------------------------------------------------------------------------
// contentHtml — this is what /blog/[slug] renders verbatim. Every external <a>
// carries target/rel/title; internal links stay same-tab with a title.
// ---------------------------------------------------------------------------
const contentHtml = `
<p>Potluckhub is a Singapore home-chef marketplace we designed and built end to end for a client: a full-stack marketing website and marketplace at <a href="${LIVE}" target="_blank" rel="noopener noreferrer" title="Potluckhub — Singapore home-chef marketplace, live site">potluckhub.io</a>, plus a native <a href="${IOS}" target="_blank" rel="noopener noreferrer" title="PotLuckHub on the Apple App Store">iOS app</a> and a native <a href="${ANDROID}" target="_blank" rel="noopener noreferrer" title="Potluck on Google Play">Android app</a> — all served by one shared REST API. This case study walks through what we shipped, how the three client surfaces fit together, and the decisions that let a small team move fast. If you are planning a similar two-sided platform, you can <a href="/contact?source=blog-potluckhub-top" title="Book a marketplace build consultation with Tertiary Infotech Academy">book a marketplace build consultation</a>.</p>

<h2>The brief: one marketplace, three front doors</h2>
<p>The client wanted to connect verified home chefs with diners who want authentic, home-cooked meals — either dining at a chef's table or hosting a private dinner at their own home. A marketplace like this is two-sided: chefs need to list menus, set prices and manage bookings, while diners need to discover, book and pay with confidence. Trust is the product. Identity-verified chefs, secure SGD payments held until you dine, and real reviews are not nice-to-haves; they are the reason a stranger will eat food cooked in another stranger's kitchen.</p>
<p>That trust has to feel identical whether a diner lands on the website from a Google search or opens the app after a friend's referral. So the real brief was not "a website and two apps" — it was one coherent marketplace presented through three front doors, backed by a single source of truth. This is the same problem shape behind most <a href="/marketplace-development" title="Marketplace app development services in Singapore">marketplace app development</a> projects: the surfaces differ, the rules must not.</p>

<figure>
  <img src="${SCREENSHOT}" alt="Potluckhub home-chef marketplace homepage — Home-cooked meals from real Singapore kitchens, with live stats for chefs, cuisines, rating and meals served" />
  <figcaption>The Potluckhub web marketplace at potluckhub.io — hero, live marketplace stats, and the in-page concierge.</figcaption>
</figure>

<h2>What we built</h2>
<h3>The web marketing site and marketplace</h3>
<p>The website does double duty. It is the SEO and marketing surface that ranks for home-dining searches and converts cold visitors, and it is a fully functional marketplace where diners browse chefs by cuisine, neighbourhood and date, then book and pay. We built it on <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js — the React framework for production web apps">Next.js 15</a> with React 19 and Tailwind CSS 4, served by a Fastify API with Drizzle ORM over PostgreSQL. If you want the same combination as a content-and-conversion engine for your own brand, that is exactly what our <a href="/content-management-system" title="AI-powered self-hosted CMS by Tertiary Infotech Academy">marketing CMS</a> work is built on.</p>
<h3>The native iOS app</h3>
<p>The <a href="${IOS}" target="_blank" rel="noopener noreferrer" title="PotLuckHub iOS app on the App Store">PotLuckHub iOS app</a> is written in <a href="https://developer.apple.com/xcode/swiftui/" target="_blank" rel="noopener noreferrer" title="Apple SwiftUI — declarative UI framework for Apple platforms">SwiftUI</a> targeting iOS 17+, with a feature-based module structure (Explore, Dishes, Booking, Bookings, Profile). Networking uses async/await over URLSession with Codable models, and auth tokens live in the Keychain. It is a genuine native client, not a web view — it talks directly to the same REST API as the website.</p>
<h3>The native Android app</h3>
<p>The Android app is built in Kotlin with Jetpack Compose and Material 3, using OkHttp and kotlinx.serialization for networking, Coil for images and coroutines for async work. Like its iOS sibling, it is fully native and points at the same production API, so a chef's menu update or a new booking rule is reflected everywhere at once.</p>

<h2>One API, three clients: the architecture</h2>
<p>The decision that made everything else manageable was to keep all business logic — pricing, availability, booking state, payment holds, verification — behind a single REST API at <code>api.potluckhub.io</code>. Each client renders that state in its platform-native idiom and owns nothing authoritative of its own. The table below shows how the three surfaces divide responsibility while sharing one brain.</p>
<table>
  <thead>
    <tr><th>Surface</th><th>Stack</th><th>Primary job</th></tr>
  </thead>
  <tbody>
    <tr><td>Web (potluckhub.io)</td><td>Next.js 15, React 19, Tailwind 4</td><td>SEO, marketing, full marketplace + checkout</td></tr>
    <tr><td>iOS</td><td>SwiftUI, iOS 17+, URLSession</td><td>Native discovery, booking, profile</td></tr>
    <tr><td>Android</td><td>Kotlin, Jetpack Compose, Material 3</td><td>Native discovery, booking, profile</td></tr>
    <tr><td>Shared API</td><td>Fastify, Drizzle, PostgreSQL</td><td>Single source of truth for all clients</td></tr>
  </tbody>
</table>
<p>This is why two-sided platforms are worth building deliberately rather than bolting an app onto a website later. When the rules live in one API, adding a third client is mostly UI work — the hard parts (money, trust, state) are already solved once. If you are weighing whether to start native or add apps later, <a href="/contact?source=blog-potluckhub-demo" title="Talk to us about your marketplace architecture">walk through your architecture with us</a> before you commit.</p>

<h2>The build decisions that mattered</h2>
<ul>
  <li><strong>One source of truth, many renderers.</strong> Pricing and availability are computed server-side and returned ready to display, so an iOS, Android and web user always see the same number for the same booking.</li>
  <li><strong>Native where it counts.</strong> The apps are real SwiftUI and Compose clients, not wrappers — they earn their place in the App Store and Play Store with native performance, navigation and push-ready foundations.</li>
  <li><strong>Self-hosted, no per-seat lock-in.</strong> The web stack runs on a Docker build deployed via Coolify, so infrastructure cost scales with usage, not with a SaaS vendor's pricing tiers.</li>
  <li><strong>Trust built into the data model.</strong> Identity verification, held payments and reviews are first-class entities in the schema, not afterthoughts grafted on near launch.</li>
</ul>
<p>The same stack choices show up across our <a href="/ai-solutions" title="Bespoke web and mobile app development by Tertiary Infotech Academy">bespoke web and mobile apps</a> — modern React on the web, native Swift and Kotlin on mobile, a typed API and Postgres underneath.</p>

<h2>How we'd build your marketplace</h2>
<p>If you are scoping a two-sided platform — home services, rentals, tuition, food, anything that matches supply with demand — the path is the same one we took with Potluckhub: model the trust and money rules first, expose them through one API, then add client surfaces in priority order. Start with the web marketplace to validate demand and capture SEO, then layer native apps once the booking loop is proven. You can see the full engagement shape on our <a href="/marketplace-development" title="Marketplace platform development — web, iOS and Android">marketplace app development</a> page, and request a build quote when you are ready.</p>
<p>If your team would rather build in-house, the same skills are teachable. Tertiary Courses Singapore runs hands-on training in the exact technologies behind Potluckhub: <a href="https://www.tertiarycourses.com.sg/basic-react-js-training.html" target="_blank" rel="noopener noreferrer" title="Basic React.js training course in Singapore — Tertiary Courses">React for the web</a>, <a href="https://www.tertiarycourses.com.sg/ios-app-swift-programming-training.html" target="_blank" rel="noopener noreferrer" title="iOS app development with Swift training course in Singapore — Tertiary Courses">Swift for iOS</a>, and <a href="https://www.tertiarycourses.com.sg/android-programming-courses-in.html" target="_blank" rel="noopener noreferrer" title="Android app development courses in Singapore — Tertiary Courses">Kotlin for Android</a>.</p>

<h2>FAQ</h2>
<h3>Why build three native surfaces instead of one responsive web app?</h3>
<p>A responsive web app is the right start and we ship that first. But marketplaces live and die on repeat usage, and repeat users want an app on their home screen with native speed, push notifications and store distribution. Because every client talks to one API, the marginal cost of a second and third surface is mostly UI, not rebuilt logic.</p>
<h3>How long does a marketplace like this take?</h3>
<p>It depends on the booking and payment complexity, but the sequencing is consistent: API and data model first, then the web marketplace, then native apps. Validating demand on the web before investing in two app stores is almost always the cheaper path.</p>
<h3>Do we own the code and infrastructure?</h3>
<p>Yes. The web stack is self-hosted on your own infrastructure via Docker, and the source for all three clients is yours. There is no per-seat SaaS fee that grows with your user base.</p>
<h3>Can you take over an existing half-built marketplace?</h3>
<p>Often, yes — if the business rules can be consolidated behind a clean API. The first step is an architecture review to find where state is duplicated across clients, which is the usual source of "the app and the website disagree" bugs.</p>

<h2>What to do next</h2>
<ol>
  <li>See the offer and engagement model on our <a href="/marketplace-development" title="Marketplace app development services — Tertiary Infotech Academy">marketplace app development</a> page.</li>
  <li>Skill up your own team with <a href="https://www.tertiarycourses.com.sg/react-native-courses.html" target="_blank" rel="noopener noreferrer" title="React Native cross-platform mobile app courses in Singapore — Tertiary Courses">cross-platform and native mobile courses</a> at Tertiary Courses Singapore.</li>
  <li>Ready to build? <a href="/contact?source=blog-potluckhub-quote" title="Request a marketplace build quote from Tertiary Infotech Academy">request a marketplace build quote</a> and we will scope it with you.</li>
</ol>
`.trim();

// ---------------------------------------------------------------------------
// content — TipTap JSON for the admin editor. Mirrors the prose above; the
// public page renders contentHtml, so this is the editor's source of truth.
// ---------------------------------------------------------------------------
const t = (text: string, marks?: any[]) => (marks ? { type: "text", text, marks } : { type: "text", text });
const b = (text: string) => t(text, [{ type: "bold" }]);
const lk = (text: string, href: string) => t(text, [{ type: "link", attrs: { href } }]);
const p = (content: any[]) => ({ type: "paragraph", content });
const h2 = (text: string) => ({ type: "heading", attrs: { level: 2 }, content: [t(text)] });
const h3 = (text: string) => ({ type: "heading", attrs: { level: 3 }, content: [t(text)] });
const ul = (items: any[][]) => ({ type: "bulletList", content: items.map((c) => ({ type: "listItem", content: [p(c)] })) });
const ol = (items: any[][]) => ({ type: "orderedList", content: items.map((c) => ({ type: "listItem", content: [p(c)] })) });
const img = (src: string, alt: string) => ({ type: "image", attrs: { src, alt } });

const content = {
  type: "doc",
  content: [
    p([
      t("Potluckhub is a Singapore home-chef marketplace we designed and built end to end for a client: a full-stack marketing website and marketplace at "),
      lk("potluckhub.io", LIVE),
      t(", plus a native "),
      lk("iOS app", IOS),
      t(" and a native "),
      lk("Android app", ANDROID),
      t(" — all served by one shared REST API. If you are planning a similar two-sided platform, you can "),
      lk("book a marketplace build consultation", "/contact?source=blog-potluckhub-top"),
      t("."),
    ]),
    h2("The brief: one marketplace, three front doors"),
    p([t("The client wanted to connect verified home chefs with diners who want authentic, home-cooked meals — dining at a chef's table or hosting a private dinner at home. A marketplace like this is two-sided: chefs list menus, set prices and manage bookings; diners discover, book and pay with confidence. Trust is the product — identity-verified chefs, secure SGD payments held until you dine, and real reviews.")]),
    p([t("That trust must feel identical on the website and in the apps. So the brief was not \"a website and two apps\" — it was one coherent marketplace presented through three front doors, backed by a single source of truth. This is the shape of most "), lk("marketplace app development", "/marketplace-development"), t(" projects: the surfaces differ, the rules must not.")]),
    img(SCREENSHOT, "Potluckhub home-chef marketplace homepage"),
    h2("What we built"),
    h3("The web marketing site and marketplace"),
    p([t("The website is both the SEO/marketing surface and a working marketplace where diners browse chefs by cuisine, neighbourhood and date, then book and pay. Built on "), lk("Next.js 15", "https://nextjs.org/"), t(" with React 19 and Tailwind 4, served by a Fastify API with Drizzle ORM over PostgreSQL. The same combination underpins our "), lk("marketing CMS", "/content-management-system"), t(" work.")]),
    h3("The native iOS app"),
    p([t("The "), lk("PotLuckHub iOS app", IOS), t(" is written in "), lk("SwiftUI", "https://developer.apple.com/xcode/swiftui/"), t(" targeting iOS 17+, with a feature-based module structure, async/await networking over URLSession and Keychain-stored auth. A genuine native client, not a web view.")]),
    h3("The native Android app"),
    p([t("The Android app is built in Kotlin with Jetpack Compose and Material 3, using OkHttp and kotlinx.serialization, Coil and coroutines. Fully native and pointed at the same production API as everything else.")]),
    h2("One API, three clients: the architecture"),
    p([t("All business logic — pricing, availability, booking state, payment holds, verification — lives behind a single REST API at api.potluckhub.io. Each client renders that state natively and owns nothing authoritative of its own.")]),
    ul([
      [b("Web (potluckhub.io). "), t("Next.js 15 / React 19 / Tailwind 4 — SEO, marketing, full marketplace and checkout.")],
      [b("iOS. "), t("SwiftUI, iOS 17+, URLSession — native discovery, booking, profile.")],
      [b("Android. "), t("Kotlin, Jetpack Compose, Material 3 — native discovery, booking, profile.")],
      [b("Shared API. "), t("Fastify, Drizzle, PostgreSQL — single source of truth for all clients.")],
    ]),
    p([t("When the rules live in one API, adding a third client is mostly UI work. If you are weighing whether to start native or add apps later, "), lk("walk through your architecture with us", "/contact?source=blog-potluckhub-demo"), t(" before you commit.")]),
    h2("The build decisions that mattered"),
    ul([
      [b("One source of truth, many renderers. "), t("Pricing and availability are computed server-side, so every client shows the same number for the same booking.")],
      [b("Native where it counts. "), t("The apps are real SwiftUI and Compose clients, not wrappers.")],
      [b("Self-hosted, no per-seat lock-in. "), t("The web stack runs on Docker via Coolify; cost scales with usage, not SaaS tiers.")],
      [b("Trust built into the data model. "), t("Verification, held payments and reviews are first-class entities, not afterthoughts.")],
    ]),
    p([t("The same choices show up across our "), lk("bespoke web and mobile apps", "/ai-solutions"), t(" — modern React on the web, native Swift and Kotlin on mobile, a typed API and Postgres underneath.")]),
    h2("How we'd build your marketplace"),
    p([t("For any two-sided platform — home services, rentals, tuition, food — the path is the same: model the trust and money rules first, expose them through one API, then add client surfaces in priority order. Start with the web marketplace to validate demand, then layer native apps. See the engagement shape on our "), lk("marketplace app development", "/marketplace-development"), t(" page.")]),
    p([t("If your team would rather build in-house, the skills are teachable. Tertiary Courses Singapore runs hands-on training in "), lk("React for the web", "https://www.tertiarycourses.com.sg/basic-react-js-training.html"), t(", "), lk("Swift for iOS", "https://www.tertiarycourses.com.sg/ios-app-swift-programming-training.html"), t(", and "), lk("Kotlin for Android", "https://www.tertiarycourses.com.sg/android-programming-courses-in.html"), t(".")]),
    h2("FAQ"),
    h3("Why build three native surfaces instead of one responsive web app?"),
    p([t("A responsive web app is the right start and we ship that first. But repeat users want an app with native speed, push and store distribution. Because every client talks to one API, the marginal cost of a second and third surface is mostly UI, not rebuilt logic.")]),
    h3("How long does a marketplace like this take?"),
    p([t("It depends on booking and payment complexity, but the sequencing is consistent: API and data model first, then the web marketplace, then native apps.")]),
    h3("Do we own the code and infrastructure?"),
    p([t("Yes. The web stack is self-hosted on your own infrastructure via Docker, and the source for all three clients is yours. No per-seat SaaS fee.")]),
    h3("Can you take over an existing half-built marketplace?"),
    p([t("Often, yes — if the business rules can be consolidated behind a clean API. The first step is an architecture review to find where state is duplicated across clients.")]),
    h2("What to do next"),
    ol([
      [t("See the offer on our "), lk("marketplace app development", "/marketplace-development"), t(" page.")],
      [t("Skill up your team with "), lk("cross-platform and native mobile courses", "https://www.tertiarycourses.com.sg/react-native-courses.html"), t(" at Tertiary Courses Singapore.")],
      [t("Ready to build? "), lk("Request a marketplace build quote", "/contact?source=blog-potluckhub-quote"), t(" and we will scope it with you.")],
    ]),
  ],
};

const EXCERPT =
  "How we built Potluckhub, a Singapore home-chef marketplace, across a full-stack web app and native iOS and Android clients on one shared REST API — a bespoke marketplace build case study.";

(async () => {
  const r2 = await getR2Config();
  let featuredImage: string | undefined;
  if (r2) {
    const { url } = await renderAndUploadCover(r2, TITLE, SLUG, KICKER);
    featuredImage = url;
    console.log("Cover:", url);
  } else {
    console.log("R2 not configured — no cover generated.");
  }

  const now = new Date();
  const values = {
    slug: SLUG,
    title: TITLE,
    excerpt: EXCERPT,
    content,
    contentHtml,
    seoTitle: "Potluckhub Marketplace Build (Web + Apps) | Tertiary Infotech Academy",
    seoDescription:
      "See how we built Potluckhub, a Singapore home-chef marketplace, across web, iOS and Android on one API. Plan your own marketplace app development build with us.",
    seoKeywords:
      "home-chef marketplace, marketplace app development, custom marketplace platform, Next.js marketplace, native iOS app Singapore, Android app development Singapore, bespoke app development, two-sided marketplace",
    canonicalUrl: `https://www.tertiaryinfotech.com/blog/${SLUG}`,
    categoryId: CATEGORY_ID,
    authorId: AUTHOR_ID,
    status: "published" as const,
    featured: false,
    readingTime: 7,
    publishedAt: now,
    updatedAt: now,
    ...(featuredImage ? { featuredImage } : {}),
  };

  const existing = await db.select({ id: posts.id }).from(posts).where(eq(posts.slug, SLUG));
  if (existing.length) {
    await db.update(posts).set(values).where(eq(posts.slug, SLUG));
    console.log("Updated post id", existing[0].id);
  } else {
    const [row] = await db.insert(posts).values({ ...values, createdAt: now }).returning({ id: posts.id });
    console.log("Inserted post id", row.id);
  }

  console.log("Local:  http://localhost:3070/blog/" + SLUG);
  console.log("Prod:   https://www.tertiaryinfotech.com/blog/" + SLUG);
  process.exit(0);
})();

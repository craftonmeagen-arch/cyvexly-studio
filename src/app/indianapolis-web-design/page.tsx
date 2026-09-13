import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  indianapolisServiceJsonLd,
} from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Indianapolis Web Design & Development | Cyvexly",
  description:
    "Custom web design and development for Indianapolis-area businesses, with local consultations by appointment, clear pricing, and nationwide remote delivery.",
  path: "/indianapolis-web-design",
});

const localBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Indianapolis web design", path: "/indianapolis-web-design" },
]);

const localStartingPoints = [
  {
    title: "A clearer business website",
    copy: "Plan and build a responsive site that explains what you do, establishes credibility, and gives visitors a useful next step.",
    href: "/services/business-websites",
    label: "Explore business websites",
  },
  {
    title: "A thoughtful redesign",
    copy: "Reorganize an outdated or confusing site around stronger content, mobile usability, careful migration, and measurable business priorities.",
    href: "/services/website-redesigns",
    label: "Explore website redesigns",
  },
  {
    title: "A connected customer journey",
    copy: "Scope ecommerce, booking, membership, dashboard, or operational workflows without forcing a complex project into a basic template.",
    href: "/services/ecommerce-websites",
    label: "Explore commerce and booking",
  },
];

const localQuestions = [
  {
    question: "Does Cyvexly have an Indianapolis storefront?",
    answer:
      "No. Cyvexly is an Indiana-based independent studio, not a public walk-in office. Indianapolis-area consultations are arranged by appointment after the project request is reviewed.",
  },
  {
    question: "Can the whole project still be handled remotely?",
    answer:
      "Yes. Planning, reviews, approvals, delivery, and support can all happen remotely. An in-person meeting is available when it would make the Indianapolis-area project clearer or more productive.",
  },
  {
    question: "How much does an Indianapolis business website cost?",
    answer:
      "Cyvexly website projects currently begin at $1,800, with larger redesign, commerce, booking, and application scopes priced from their published starting points or after discovery. The written proposal confirms the actual price before work begins.",
  },
];

export default function IndianapolisWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indianapolisServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBreadcrumbJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
          <div className="page-intro-shell mx-auto max-w-4xl rounded-3xl px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Indianapolis web design
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              A local conversation. A website built for the business you are growing.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cool-graphite sm:text-lg">
              Cyvexly Studio plans, designs, and builds custom websites for Indianapolis-area businesses. Meet in person by appointment when it helps, then keep planning, reviews, and delivery moving through the same clear remote process available to clients across the United States.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=indianapolis-project">
                Ask about an Indianapolis project
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                View working examples
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-cool-graphite">
              Meetings are by appointment; Cyvexly does not operate a public walk-in storefront.
            </p>
          </div>
        </section>

        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                Start with the business need
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Web design and development without a one-size-fits-all package
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                You do not need to arrive with a technology list. Describe what customers need to understand or do, and Cyvexly will recommend the smallest responsible scope.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {localStartingPoints.map((item) => (
                <article key={item.title} className="glass-panel flex h-full flex-col rounded-2xl p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-midnight-slate">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cool-graphite">
                    {item.copy}
                  </p>
                  <Link href={item.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-cyber-blue hover:text-[#0b4fb0]">
                    {item.label} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2">
            <div className="glass-panel rounded-3xl p-7 sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                Local when useful
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
                How an Indianapolis meeting fits
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                An in-person conversation can help when the project involves several decision-makers, an existing customer experience, or operational details that are easier to map together. Request it in your inquiry; Cyvexly will confirm whether a local meeting or a focused video call is the better first step.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-7 sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                Clear before work begins
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
                Published starting points and written scope
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                Website projects currently start at $1,800. The final recommendation names deliverables, timing, price, responsibilities, and approval points before an agreement is signed.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <ButtonLink href="/pricing" variant="text">Review pricing →</ButtonLink>
                <ButtonLink href="/resources/small-business-website-cost" variant="text">Read the cost guide →</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
              Local-service questions
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              What Indianapolis-area businesses should expect
            </h2>
          </div>
          <div className="mt-8 divide-y divide-cyber-blue/10 rounded-3xl border border-white/70 bg-white/40 px-6 sm:px-8">
            {localQuestions.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold text-midnight-slate marker:content-none">
                  {item.question}
                  <span className="text-xl text-cyber-blue transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-2 pt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Start with the outcome your Indianapolis business needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Send a short description and note that you are interested in an Indianapolis-area consultation. Cyvexly will respond within two business days with the most useful next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=indianapolis-project">Request a consultation</ButtonLink>
              <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

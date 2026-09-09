import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { PackageIcon } from "@/components/package-icon";
import { PricingScopeSignal } from "@/components/pricing-scope-signal";
import {
  addOns,
  billedSeparately,
  carePlans,
  pricingFaq,
  pricingPackages,
  projectIncludes,
} from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { pricingJsonLd } from "@/lib/structured-data";

const packageInquiryKeys: Record<string, string> = {
  Signal: "signal-package",
  Orbit: "orbit-package",
  Nexus: "nexus-package",
  Commerce: "commerce-package",
  "Custom system": "custom-system",
};

export const metadata = buildPageMetadata({
  title: "Pricing — Cyvexly Studio",
  description:
    "Clear starting packages for Cyvexly Studio websites, plus add-ons and care plans. Final quotes are shaped around your goals, content, pages, and features.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="pricing-hero-stage relative overflow-hidden border-b border-smoke-glass/70">
          <div className="pricing-hero-layout relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:py-14 lg:gap-12 lg:pb-24 lg:pt-16">
            <div className="pricing-hero-copy relative rounded-3xl px-6 py-7 sm:px-8 sm:py-9">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
                Pricing
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
                Clear starting points.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
                Final quotes are shaped around your goals, content, pages, and
                features. No website project is identical, so every proposal is
                written in plain language before work begins.
              </p>
              <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-emerald" />
                Scope first · proposal before work
              </p>
            </div>

            <div className="pricing-scope-visual relative overflow-hidden rounded-[1.75rem] p-3 sm:p-5">
              <PricingScopeSignal />
            </div>
          </div>
        </section>

        <nav aria-label="Pricing sections" className="border-b border-smoke-glass/70 bg-white/35">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-4 text-sm">
            {[
              ["Packages", "#packages"],
              ["Compare", "#compare"],
              ["Example scopes", "#example-scopes"],
              ["Add-ons", "#add-ons"],
              ["Care", "#care-plans"],
              ["Ongoing costs", "#ongoing-costs"],
              ["Questions", "#pricing-questions"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="min-h-11 shrink-0 rounded-full border border-cyber-blue/15 bg-white/60 px-4 py-3 font-medium text-midnight-slate transition-colors hover:border-cyber-blue/40 hover:text-cyber-blue"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Package cards */}
        <section id="packages" className="pricing-package-stage scroll-mt-24 relative border-b border-smoke-glass/70">
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:-mt-14 lg:pb-20 lg:pt-0">
            <div className="grid gap-6 lg:grid-cols-3">
              {pricingPackages.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.name}
                  className={`glass-panel pricing-package-card flex flex-col rounded-2xl p-7 ${
                    pkg.featured ? "pricing-package-card-featured" : ""
                  }`}
                >
                {pkg.featured && (
                  <span className="mb-3 w-fit rounded-full bg-signal-emerald/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-emerald">
                    Recommended
                  </span>
                )}
                <PackageIcon name={pkg.name} />
                <h2 className="mt-3 font-display text-lg font-semibold text-midnight-slate">
                  {pkg.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-midnight-slate">{pkg.plainName}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  Starting at
                </p>
                <p className="mt-1 font-display text-3xl font-semibold text-cyber-blue">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm text-cool-graphite">{pkg.bestFor}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-midnight-slate">
                  {pkg.scope.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  {pkg.timeline}
                </p>
                <ButtonLink
                  href={`/contact?interest=${packageInquiryKeys[pkg.name]}`}
                  variant={pkg.featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  Ask about {pkg.name}
                </ButtonLink>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {pricingPackages.slice(3).map((pkg) => (
                <div
                  key={pkg.name}
                  id={
                    pkg.name === "Commerce"
                      ? "commerce-package"
                      : pkg.name === "Custom system"
                        ? "custom-system-package"
                        : undefined
                  }
                  className="glass-panel pricing-package-card scroll-mt-24 flex flex-col rounded-2xl p-7"
                >
                <PackageIcon name={pkg.name} />
                <h2 className="mt-3 font-display text-lg font-semibold text-midnight-slate">
                  {pkg.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-midnight-slate">{pkg.plainName}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  {pkg.name === "Custom system" ? "Price" : "Starting at"}
                </p>
                <p className="mt-1 font-display text-3xl font-semibold text-cyber-blue">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm text-cool-graphite">{pkg.bestFor}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-midnight-slate">
                  {pkg.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  {pkg.timeline}
                </p>
                <ButtonLink
                  href={`/contact?interest=${packageInquiryKeys[pkg.name]}`}
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Ask about {pkg.name}
                </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison grid */}
        <section id="compare" className="glass-section scroll-mt-24 border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              Compare packages
            </h2>
            {/* Below `sm`, the four-column table doesn't fit a phone-width
                container without clipping (the same silent overflow-x-auto
                pattern the Council flagged on Services, CYC-R2-F004) —
                reflow to stacked cards instead. */}
            <div className="mt-8 space-y-4 lg:hidden">
              {pricingPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-xl border border-smoke-glass bg-frosted-glass/60 px-4 py-4"
                >
                  <p className="font-display font-semibold text-midnight-slate">{pkg.name}</p>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Starting price
                      </dt>
                      <dd className="text-midnight-slate">{pkg.price}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Core pages
                      </dt>
                      <dd className="text-right text-cool-graphite">{pkg.scope[0]}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Typical window
                      </dt>
                      <dd className="text-cool-graphite">{pkg.timeline}</dd>
                    </div>
                    <div className="border-t border-smoke-glass/70 pt-2">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Content editing
                      </dt>
                      <dd className="mt-1 text-cool-graphite">{pkg.contentEditing}</dd>
                    </div>
                    <div className="border-t border-smoke-glass/70 pt-2">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Forms / integrations
                      </dt>
                      <dd className="mt-1 text-cool-graphite">{pkg.integrations}</dd>
                    </div>
                    <div className="border-t border-smoke-glass/70 pt-2">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                        Revisions
                      </dt>
                      <dd className="mt-1 text-cool-graphite">{pkg.revisions}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1040px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-smoke-glass">
                    <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Package
                    </th>
                    <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Starting price
                    </th>
                    <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Core pages
                    </th>
                    <th scope="col" className="py-3 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Typical window
                    </th>
                    <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Content editing
                    </th>
                    <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Forms / integrations
                    </th>
                    <th scope="col" className="py-3 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                      Revisions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPackages.map((pkg) => (
                    <tr key={pkg.name} className="border-b border-smoke-glass/70">
                      <td className="py-3 pr-4 font-medium text-midnight-slate">{pkg.name}</td>
                      <td className="py-3 pr-4 text-cool-graphite">{pkg.price}</td>
                      <td className="py-3 pr-4 text-cool-graphite">{pkg.scope[0]}</td>
                      <td className="py-3 text-cool-graphite">{pkg.timeline}</td>
                      <td className="py-3 pr-4 text-cool-graphite">{pkg.contentEditing}</td>
                      <td className="py-3 pr-4 text-cool-graphite">{pkg.integrations}</td>
                      <td className="py-3 text-cool-graphite">{pkg.revisions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-2xl text-xs text-cool-graphite">
              &ldquo;Core pages&rdquo; means distinct content templates or page
              layouts, not every automatically generated CMS item or product
              record. Final proposals define the page/template count in plain
              language.
            </p>
          </div>
        </section>

        <section id="example-scopes" className="scroll-mt-24 border-y border-smoke-glass/70 bg-white/25">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyber-blue">
              Put the numbers together
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              Two illustrative project scopes
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cool-graphite">
              These examples use the published starting prices and add-on ranges below. They are
              planning examples, not fixed quotes; a written proposal confirms the actual scope.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="glass-panel rounded-2xl p-7">
                <h3 className="font-display text-lg font-semibold text-midnight-slate">
                  Focused three-page launch
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                  Signal covers 1–3 core pages, responsive design, one primary form, essential SEO
                  setup, two review rounds, and launch support.
                </p>
                <p className="mt-5 font-display text-2xl font-semibold text-cyber-blue">
                  Build fee starts at $1,800
                </p>
              </article>
              <article className="glass-panel rounded-2xl p-7">
                <h3 className="font-display text-lg font-semibold text-midnight-slate">
                  Five-page business site with copywriting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                  Orbit starts at $3,500. Full copywriting for five pages adds $1,000–$2,250 at
                  the published $200–$450 per-page range.
                </p>
                <p className="mt-5 font-display text-2xl font-semibold text-cyber-blue">
                  Illustrative build fee: $4,500–$5,750
                </p>
              </article>
            </div>
            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-cool-graphite">
              Domain, hosting, premium assets, provider subscriptions, payment-processing fees,
              taxes, and other third-party costs are separate. Current provider prices are
              confirmed during scoping rather than estimated here.
            </p>
          </div>
        </section>

        {/* What every project includes */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            What every website project includes
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectIncludes.map((item) => (
              <li
                key={item}
                className="glass-panel flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-midnight-slate"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Add-ons */}
        <section id="add-ons" className="glass-section scroll-mt-24 border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              Add-ons
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite">
              Budget guidance, not a self-checkout menu — every add-on is
              scoped and confirmed in your proposal.
            </p>
            <div className="mt-8 space-y-2 sm:hidden">
              {addOns.map((addOn) => (
                <div
                  key={addOn.name}
                  className="flex flex-col items-start gap-1 border-b border-smoke-glass/70 py-3"
                >
                  <span className="text-midnight-slate">{addOn.name}</span>
                  <span className="max-w-full text-cool-graphite">{addOn.range}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <tbody>
                  {addOns.map((addOn) => (
                    <tr key={addOn.name} className="border-b border-smoke-glass/70">
                      <td className="py-3 pr-4 text-midnight-slate">{addOn.name}</td>
                      <td className="py-3 text-right text-cool-graphite">{addOn.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Care plans */}
        <section id="care-plans" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Care plans
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite">
            Launch is the start of the relationship, not the end of it. Care
            plans are optional and billed monthly in advance.
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-cool-graphite">
            A small content request is one update to existing page text or imagery that takes up
            to 30 minutes and does not add a new layout, page, feature, or integration. Response
            windows confirm when we reply and schedule the work; they are not emergency-resolution guarantees.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {carePlans.map((plan) => (
              <div key={plan.name} className="glass-panel flex flex-col rounded-2xl p-7">
                <h3 className="font-display text-lg font-semibold text-midnight-slate">
                  {plan.name}
                </h3>
                <p className="mt-1 font-display text-2xl font-semibold text-cyber-blue">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm font-medium text-midnight-slate">{plan.use}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cool-graphite">
                  {plan.capacity}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Billed separately + payment */}
        <section id="ongoing-costs" className="glass-section scroll-mt-24 border-y border-smoke-glass/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Billed separately
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                These are distinguished from our fee so your quote stays
                honest:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-midnight-slate">
                {billedSeparately.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cool-graphite" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Payment schedule
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-midnight-slate">Signal</dt>
                  <dd className="text-cool-graphite">
                    50% to reserve and begin; 50% after final approval and
                    before launch.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-midnight-slate">Orbit &amp; Nexus</dt>
                  <dd className="text-cool-graphite">
                    40% to begin; 30% at design approval; 30% before launch.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-midnight-slate">Commerce &amp; Custom</dt>
                  <dd className="text-cool-graphite">
                    Milestone schedule set in the proposal, typically 30–40%
                    to begin with later payments tied to named approvals.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-midnight-slate">Care plans</dt>
                  <dd className="text-cool-graphite">Billed monthly in advance.</dd>
                </div>
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-cool-graphite">
                We&apos;re finalizing our payment provider for United States
                clients. Your proposal and invoice will state exactly which
                methods are accepted before any payment is requested. We never
                store raw card or bank details on our own website.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="pricing-questions" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Pricing questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={pricingFaq} />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to make your business unmistakable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              A short description is enough to ask whether Cyvexly is a fit.
              Use the detailed Planner only when you&apos;re ready to share more.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=custom-project">Ask about a project</ButtonLink>
              <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

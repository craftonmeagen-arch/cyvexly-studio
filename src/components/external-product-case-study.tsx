import { ButtonLink } from "@/components/button";
import { CaseStudyScopeGuide } from "@/components/case-study-scope-guide";
import { ConceptPreview } from "@/components/concept-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/lib/site-config";

type ExternalProductStudy =
  | (typeof caseStudies)["eduailenz"]
  | (typeof caseStudies)["mudoinkle"];

export function ExternalProductCaseStudy({
  slug,
  study,
  breadcrumbJsonLd,
}: {
  slug: "eduailenz" | "mudoinkle";
  study: ExternalProductStudy;
  breadcrumbJsonLd: object;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-center">
            <div className="page-intro-shell rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
              <ButtonLink href="/work" variant="text" className="text-sm">
                ← All work
              </ButtonLink>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                  {study.status}
                </span>
                <span className="text-sm text-cool-graphite">{study.businessType}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
                {study.name}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                <span className="font-medium text-midnight-slate">Built for: </span>
                {study.audience}
              </p>
              <div className="mt-7 flex flex-col items-start gap-3">
                <ButtonLink
                  href={study.demoHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {study.externalLabel} ↗
                </ButtonLink>
                <p className="max-w-xl text-xs leading-relaxed text-cool-graphite">
                  {study.externalNote}
                </p>
              </div>
            </div>

            <div
              className={`min-h-72 overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br shadow-[0_30px_80px_-44px_rgba(7,41,83,0.82)] ${study.gradient}`}
              role="img"
              aria-label={`${study.name} product-interface illustration`}
            >
              <ConceptPreview slug={slug} />
            </div>
          </div>
        </section>

        <section className="glass-content-field mx-auto my-10 max-w-5xl rounded-3xl px-6 py-14 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                Product problem
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
                Complexity organized around real users
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                {study.challenge}
              </p>
            </div>
            <aside className="glass-panel rounded-2xl p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                Proof boundary
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-midnight-slate">
                {study.proofChecked}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-cool-graphite">
                This case study separates source-grounded capability from work that still needs focused acceptance. It makes no client, revenue, adoption, or outcome claim.
              </p>
            </aside>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate">
                Product goals
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                {study.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" aria-hidden="true" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate">
                System scope
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                {study.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ion-cyan" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate">
            Architecture and experience decisions
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {study.decisions.map((decision, index) => (
              <article key={decision} className="glass-panel rounded-2xl p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyber-blue">
                  Decision 0{index + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">{decision}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-2">
            <div className="rounded-2xl border border-signal-emerald/25 bg-signal-emerald/10 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-emerald">
                Verified capability
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                {study.verifiedCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-signal-emerald" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-smoke-glass bg-frosted-glass/75 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cool-graphite">
                Still to prove
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                {study.proofPending.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cool-graphite" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            What this work demonstrates
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cool-graphite sm:text-base">
            {study.intendedOutcome}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-cool-graphite">
            This is a built product-system capability example, not a client engagement or a claim of business results. Current lifecycle and proof limits are stated above.
          </p>
        </section>

        <CaseStudyScopeGuide
          eyebrow="From product complexity to a clear scope"
          heading="Custom systems are mapped before they are priced."
          summary="Roles, states, data, integrations, security, migration, and proof requirements shape the build. Cyvexly confirms the right path and pricing in writing after discovery."
          items={[
            {
              label: "Best fit",
              value: "Applications with connected workflows, protected roles, structured data, or real-time participation.",
            },
            {
              label: "What to bring",
              value: "The users, current workflow, pain points, example data, and systems that may need to connect.",
            },
            {
              label: "First decision",
              value: "Discovery maps the minimum useful release and the evidence required to accept it.",
            },
          ]}
          inquiryHref={study.inquiryHref}
          inquiryLabel="Ask about a custom application"
          serviceHref="/services/custom-web-applications"
          serviceLabel="Explore custom applications"
          pricingHref="/pricing#custom-system-package"
          pricingLabel="Review custom-app pricing"
          plannerHref={study.plannerHref}
        />
      </main>

      <SiteFooter />
    </>
  );
}

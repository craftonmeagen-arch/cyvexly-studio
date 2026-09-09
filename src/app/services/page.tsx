import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceIcon } from "@/components/service-icon";
import { ConceptPreview } from "@/components/concept-preview";
import {
  buyerNeeds,
  selectedWork,
  servicesFaq,
  servicesGroups,
} from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services — Cyvexly Studio",
  description:
    "Everything your business website needs — strategy, design, development, content, commerce, search, and ongoing care.",
  path: "/services",
});

const featuredWork = selectedWork[0];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-7 text-center sm:px-10 sm:py-9">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Services
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Everything your business website needs.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              From the first page decision to the day it goes live — one
              studio, one point of contact, no production line.
            </p>
          </div>
        </section>

        {/* Buyer-recognizable starting points */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyber-blue">
                Start with what you need
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Choose the business outcome that sounds most like yours.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
                You do not need to choose design, development, content, and integrations separately.
                Pick a recognizable starting point and we&apos;ll recommend the right combination.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {buyerNeeds.map((need, index) => (
                <article
                  key={need.id}
                  id={need.id}
                  className={`glass-panel scroll-mt-24 rounded-2xl p-6 sm:p-7 ${
                    index === buyerNeeds.length - 1 ? "lg:col-span-2" : ""
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-cyber-blue">
                    {need.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-midnight-slate">
                    {need.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                    {need.description}
                  </p>
                  <p className="mt-5 border-t border-cyber-blue/10 pt-4 text-sm font-medium text-midnight-slate">
                    Indicative starting point: {need.startingPoint}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                    <ButtonLink href={need.detailHref} variant="text" className="text-sm">
                      {need.detailLabel} →
                    </ButtonLink>
                    {need.proofHref && (
                      <ButtonLink href={need.proofHref} variant="text" className="text-sm">
                        {need.proofLabel} →
                      </ButtonLink>
                    )}
                    <ButtonLink href={need.inquiryHref} variant="text" className="text-sm">
                      Ask about this →
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting disciplines */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              What we handle inside the project
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite">
              These disciplines support the buyer need you chose above. Open any item for detail;
              Cyvexly remains responsible for joining them into one clear scope.
            </p>
            <div className="mt-8 grid gap-x-8 lg:grid-cols-2">
              {servicesGroups.map((group) => (
                <details key={group.id} id={group.id} className="group scroll-mt-24 border-t border-smoke-glass/80 py-5 last:border-b">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-4 text-left marker:content-none">
                    <ServiceIcon id={group.id} />
                    <span className="flex-1 font-display text-base font-semibold text-midnight-slate">
                      {group.title}
                    </span>
                    <span className="font-mono text-lg text-cyber-blue transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="pb-2 pl-[3.75rem] pt-3">
                    <p className="text-sm leading-relaxed text-cool-graphite">{group.problem}</p>
                    <ul className="mt-4 space-y-2 text-sm text-midnight-slate">
                      {group.included.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-cool-graphite">
                      <span className="font-medium text-midnight-slate">What can change scope: </span>
                      {group.scopeChange}
                    </p>
                    <ButtonLink href={group.nextHref} variant="text" className="mt-4 text-sm">
                      {group.nextAction} →
                    </ButtonLink>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Strongest inspectable proof */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                See the strongest working example
              </h2>
              <ButtonLink href="/work" variant="text">
                View all projects →
              </ButtonLink>
            </div>
            <div className="glass-panel mt-8 grid overflow-hidden rounded-3xl lg:grid-cols-[1.35fr_0.65fr]">
              <div className={`min-h-64 overflow-hidden bg-gradient-to-br ${featuredWork.gradient}`}>
                <ConceptPreview slug={featuredWork.slug} />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="w-fit rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                  {featuredWork.kind}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-midnight-slate">
                  {featuredWork.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                  {featuredWork.summary}
                </p>
                <ButtonLink href={featuredWork.href} variant="secondary" className="mt-6 w-fit">
                  View case study
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={servicesFaq} />
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to make your business unmistakable?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
                Not sure which services you need? Describe your project and
                we&apos;ll recommend the right scope — no jargon required.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/contact?interest=custom-project">Ask about your project</ButtonLink>
                <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

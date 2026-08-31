import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceIcon } from "@/components/service-icon";
import { ConceptPreview } from "@/components/concept-preview";
import {
  selectedWork,
  serviceCombinations,
  servicesFaq,
  servicesGroups,
  websiteTypes,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services — Cyvexly Studio",
  description:
    "Everything your business website needs, from the first page decision to the day it goes live: strategy, design, development, content, commerce, search, and ongoing care.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="signal-grid-bg border-b border-smoke-glass/70">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
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

        {/* Core service groups */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {servicesGroups.map((group) => (
              <div key={group.id} id={group.id} className="glass-panel scroll-mt-24 rounded-2xl p-7">
                <div className="flex items-center gap-4">
                  <ServiceIcon id={group.id} />
                  <h2 className="font-display text-lg font-semibold text-midnight-slate">
                    {group.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cool-graphite">
                  <span className="font-medium text-midnight-slate">The problem: </span>
                  {group.problem}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                  <span className="font-medium text-midnight-slate">Who needs it: </span>
                  {group.who}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-midnight-slate">
                  {group.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-cool-graphite">
                  <span className="font-medium">What may change the scope: </span>
                  {group.scopeChange}
                </p>
                <ButtonLink href="/start" variant="text" className="mt-4 text-sm">
                  {group.nextAction} →
                </ButtonLink>
              </div>
            ))}
          </div>
        </section>

        {/* Popular website types (footer anchor targets) */}
        <section className="border-y border-smoke-glass/70 bg-ice-field">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              Popular website types
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite">
              Every project combines the services above into the right shape
              for your business. These are the most common starting points.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {websiteTypes.map((type) => (
                <div
                  key={type.id}
                  id={type.id}
                  className="glass-panel glass-panel-interactive scroll-mt-24 rounded-2xl p-6"
                >
                  <h3 className="font-display text-base font-semibold text-midnight-slate">
                    {type.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                    {type.description}
                  </p>
                  <ButtonLink href={`/services/${type.id}`} variant="text" className="mt-4 text-sm">
                    Explore {type.name.toLowerCase()} →
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service combinations by client type */}
        <section className="service-combinations-stage border-y border-smoke-glass/70 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyber-blue">
                Service pathways
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Combinations that work together.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
                Most projects need more than one discipline. Start with the
                pathway closest to your business; we&apos;ll shape the exact scope
                after learning what you need.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
              {serviceCombinations.map((combination, index) => (
                <article
                  key={combination.audience}
                  className={`service-combination-card glass-panel glass-panel-signal relative overflow-hidden rounded-2xl p-5 sm:p-6 xl:col-span-2 ${
                    index === 3 ? "xl:col-start-2" : ""
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#315a8d]">
                    A strong start for
                  </p>
                  <h3 className="mt-2 min-h-12 font-display text-base font-semibold leading-snug text-midnight-slate">
                    {combination.audience}
                  </h3>

                  <div
                    className="combination-path mt-5"
                    role="list"
                    aria-label="Typical service combination"
                  >
                    {combination.services.map((service, serviceIndex) => (
                      <div key={service.label} className="contents">
                        <div className="combination-service-node" role="listitem">
                          <ServiceIcon id={service.id} />
                          <span>{service.label}</span>
                        </div>
                        {serviceIndex < combination.services.length - 1 && (
                          <span className="combination-plus" aria-hidden="true">
                            +
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 border-t border-cyber-blue/10 pt-4 text-sm leading-relaxed text-cool-graphite">
                    {combination.outcome}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/45 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl sm:px-6">
              <p className="text-sm text-cool-graphite">
                Not sure which path fits? That&apos;s exactly what the Project Planner is for.
              </p>
              <ButtonLink href="/start" variant="secondary" className="shrink-0 text-sm">
                Find your starting point →
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="border-y border-smoke-glass/70 bg-ice-field">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Recent work
              </h2>
              <ButtonLink href="/work" variant="text">
                View all projects →
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {selectedWork.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  className="group glass-panel flex flex-col overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    className={`h-40 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    aria-hidden="true"
                  >
                    <ConceptPreview slug={project.slug} />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="w-fit rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                      {project.kind}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-midnight-slate">
                      {project.name}
                    </h3>
                    <p className="text-sm text-cool-graphite">{project.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={servicesFaq} />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="signal-grid-bg relative overflow-hidden rounded-3xl bg-midnight-slate px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to make your business unmistakable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Not sure which services you need? Describe your project and
              we&apos;ll recommend the right scope — no jargon required.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/start">Describe your project</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

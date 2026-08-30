import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceIcon } from "@/components/service-icon";
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
                  className="glass-panel scroll-mt-24 rounded-2xl p-6"
                >
                  <h3 className="font-display text-base font-semibold text-midnight-slate">
                    {type.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service combinations by client type */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Common combinations
          </h2>
          {/* Below `sm`, the two-column table doesn't fit a phone-width
              container without clipping the combination column — reflow to
              stacked cards instead of relying on a horizontal-scroll
              affordance (Council finding CYC-R2-F004). */}
          <div className="mt-8 space-y-4 sm:hidden">
            {serviceCombinations.map((row) => (
              <div
                key={row.audience}
                className="rounded-xl border border-smoke-glass bg-frosted-glass/60 px-4 py-4"
              >
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  If you&apos;re
                </p>
                <p className="mt-1 font-medium text-midnight-slate">{row.audience}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                  A typical combination
                </p>
                <p className="mt-1 text-cool-graphite">{row.combination}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-smoke-glass">
                  <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                    If you&apos;re
                  </th>
                  <th scope="col" className="py-3 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
                    A typical combination
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceCombinations.map((row) => (
                  <tr key={row.audience} className="border-b border-smoke-glass/70">
                    <td className="py-3 pr-4 font-medium text-midnight-slate">{row.audience}</td>
                    <td className="py-3 text-cool-graphite">{row.combination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    className={`h-40 w-full bg-gradient-to-br ${project.gradient}`}
                    aria-hidden="true"
                  />
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

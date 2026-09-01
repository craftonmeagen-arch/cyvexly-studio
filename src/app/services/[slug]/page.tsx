import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button";
import { ConceptPreview } from "@/components/concept-preview";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceDetailSignal } from "@/components/service-detail-signal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isServiceSlug, serviceDetails } from "@/lib/service-details";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }

  const service = serviceDetails[slug];
  return {
    title: `${service.name} — Cyvexly Studio`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const service = serviceDetails[slug];
  const plannerHref = `/start?service=${service.slug}`;

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.86fr)] lg:gap-10">
            <div className="page-intro-shell rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
              <ButtonLink href="/services" variant="text" className="text-sm">
                ← All services
              </ButtonLink>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
                {service.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-midnight-slate sm:text-5xl">
                {service.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-cool-graphite sm:text-lg">
                {service.summary}
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={plannerHref}>Include this in my project</ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  See pricing
                </ButtonLink>
              </div>
            </div>

            <div className="service-detail-visual overflow-hidden rounded-3xl border border-white/80 px-4 py-5 sm:px-8 sm:py-7">
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-cool-graphite">
                {service.name} · service signal
              </p>
              <ServiceDetailSignal slug={service.slug} />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
          <article className="glass-panel rounded-2xl p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-warning-coral">
              The common problem
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
              What gets in the way
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
              {service.problem}
            </p>
          </article>
          <article className="glass-panel glass-panel-signal relative overflow-hidden rounded-2xl p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal-emerald">
              The intended outcome
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
              What the work should change
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
              {service.outcome}
            </p>
          </article>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
              Practical scope
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-midnight-slate">
              What&apos;s included
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.included.map((item, index) => (
                <article key={item} className="glass-panel glass-panel-interactive rounded-2xl p-6">
                  <span className="signal-icon font-mono text-xs" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-midnight-slate">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-3xl border border-smoke-glass bg-frosted-glass">
              <div className="flex items-center justify-between border-b border-smoke-glass/70 px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cool-graphite">
                  Relevant concept work
                </span>
                <span className="rounded-full bg-ice-field px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-cool-graphite">
                  Concept project
                </span>
              </div>
              <div className="h-64 overflow-hidden bg-ice-field sm:h-80" role="img" aria-label={`${service.example.name} abstract concept preview`}>
                <ConceptPreview slug={service.example.slug} />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
                Example work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-midnight-slate">
                {service.example.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cool-graphite">
                {service.example.context}
              </p>
              <ButtonLink href={`/work/${service.example.slug}`} variant="text" className="mt-5">
                Explore the case study →
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="border-y border-smoke-glass/70 bg-ice-field/70">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
            <article className="glass-panel rounded-2xl p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
                From you
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
                Typical client inputs
              </h2>
              <ul className="service-detail-step mt-6 space-y-5">
                {service.clientInputs.map((item, index) => (
                  <li key={item} className="relative flex gap-4">
                    <span className="z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-frosted-glass font-mono text-xs text-cyber-blue shadow-sm">
                      {index + 1}
                    </span>
                    <span className="pt-1.5 text-sm leading-relaxed text-cool-graphite">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-panel rounded-2xl p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
                Scope controls
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate">
                What affects price and timing
              </h2>
              <ul className="mt-6 space-y-4">
                {service.scopeFactors.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cool-graphite">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-cyber-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="glass-shell grid gap-6 rounded-3xl p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
                Related starting point
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-midnight-slate">
                {service.package.name} · {service.package.price}
              </h2>
              <p className="mt-2 text-sm font-medium text-cyber-blue">
                {service.package.timing}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cool-graphite">
                {service.package.note}
              </p>
            </div>
            <ButtonLink href="/pricing" variant="secondary">
              Compare pricing
            </ButtonLink>
          </div>
        </section>

        <section className="border-y border-smoke-glass/70 bg-ice-field/70">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
              Before you plan
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-midnight-slate">
              Common questions
            </h2>
            <div className="mt-8">
              <FaqAccordion items={[...service.faqs]} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="final-cta-shell relative overflow-hidden rounded-3xl px-7 py-14 sm:px-12 md:px-16">
            <div className="final-cta-copy relative max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#9BDFFF]">
                Add {service.name.toLowerCase()} to your brief
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Start with the service selected. Shape the rest around your business.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
                The Planner will carry this starting point forward. If you already saved a draft on this device, your draft stays in control.
              </p>
              <ButtonLink href={plannerHref} className="mt-7">
                Include this in my project
              </ButtonLink>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-cool-graphite">
            Still comparing? <Link href="/services" className="font-medium text-cyber-blue hover:text-[#0b4fb0]">Return to all services</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

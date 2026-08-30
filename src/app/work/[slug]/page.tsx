import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { caseStudies } from "@/lib/site-config";

type CaseStudySlug = keyof typeof caseStudies;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];
  if (!study) return { title: "Project — Cyvexly Studio" };
  return {
    title: `${study.name} — Cyvexly Studio`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];
  if (!study) notFound();

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="signal-grid-bg border-b border-smoke-glass/70">
          <div className="mx-auto max-w-4xl px-6 py-16">
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
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base">
              <span className="font-medium text-midnight-slate">Audience: </span>
              {study.audience}
            </p>
          </div>
          <div
            className={`h-56 w-full bg-gradient-to-br sm:h-72 ${study.gradient}`}
            role="img"
            aria-label={`${study.name} concept visual placeholder`}
          />
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            The challenge
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
            {study.challenge}
          </p>

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Goals
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-midnight-slate sm:text-base">
            {study.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                {goal}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Scope &amp; deliverables
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-midnight-slate sm:text-base">
            {study.scope.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Key decisions
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
            {study.decisions.map((decision) => (
              <li key={decision} className="glass-panel rounded-xl px-4 py-3">
                {decision}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Visual direction
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {study.palette.map((swatch) => (
              <div key={swatch.hex} className="flex items-center gap-2 rounded-full border border-smoke-glass bg-frosted-glass py-1.5 pl-1.5 pr-4">
                <span
                  className="h-7 w-7 shrink-0 rounded-full border border-smoke-glass"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
                />
                <span className="text-xs text-midnight-slate">
                  {swatch.label} <span className="font-mono text-cool-graphite">{swatch.hex}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
            {study.typographyNote}
          </p>
        </section>

        <section className="border-y border-smoke-glass/70 bg-ice-field">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
              Accessibility highlights
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-midnight-slate sm:text-base">
              {study.accessibilityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Intended outcome
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
            {study.intendedOutcome}
          </p>
          <p className="mt-4 text-xs text-cool-graphite">
            This is a labeled concept project — no client results are claimed.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="signal-grid-bg relative overflow-hidden rounded-3xl bg-midnight-slate px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Want something like this for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Describe your project and we&apos;ll shape the right scope.
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

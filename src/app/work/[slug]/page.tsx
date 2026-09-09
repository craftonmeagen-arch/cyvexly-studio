import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { ConceptPreview } from "@/components/concept-preview";
import { VeloraCaseStudy } from "@/components/velora-case-study";
import { caseStudies, selectedWork } from "@/lib/site-config";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/seo";

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
  if (!study) notFound();
  // The full "challenge" narrative (shown on-page) runs well past search
  // engines' ~155-160 char snippet budget and gets truncated mid-sentence;
  // reuse the already-published, already-short Work-listing card summary
  // instead of inventing new copy or shortening the on-page paragraph.
  const cardSummary = selectedWork.find((item) => item.slug === slug)?.summary;
  return buildPageMetadata({
    title: `${study.name} — Cyvexly Studio`,
    description: cardSummary ?? study.challenge,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];
  if (!study) notFound();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: study.name, path: `/work/${slug}` },
  ]);

  if (slug === "velora-dining") {
    return <VeloraCaseStudy breadcrumbJsonLd={breadcrumbJsonLd} />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
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
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base">
                <span className="font-medium text-midnight-slate">Audience: </span>
                {study.audience}
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={study.demoHref}>Explore the live demo ↗</ButtonLink>
                <span className="max-w-sm text-xs leading-relaxed text-cool-graphite">
                  Fictional sample content. The demonstration does not operate a real business service or transmit a request.
                </span>
              </div>
            </div>
          </div>
          <div
            className={`h-56 w-full overflow-hidden bg-gradient-to-br sm:h-72 ${study.gradient}`}
            role="img"
            aria-label={`${study.name} built homepage preview`}
          >
            <ConceptPreview slug={slug} />
          </div>
        </section>

        <section className="glass-content-field mx-auto my-10 max-w-4xl rounded-3xl px-6 py-16 sm:px-10">
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

          <h2 className="mt-12 font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
            Built responsive experience
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base">
            A responsive preview of the working {study.name} demonstration. All business
            details, interface data, and outcomes are fictional sample content.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_200px]">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                Desktop
              </p>
              <div className="overflow-hidden rounded-xl border border-smoke-glass bg-frosted-glass">
                <div className="flex items-center gap-1.5 border-b border-smoke-glass/70 bg-ice-field px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-smoke-glass" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-smoke-glass" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-smoke-glass" aria-hidden="true" />
                </div>
                {slug === "nexora-systems" ? (
                  <Image
                    src="/media/nexora-release-demo.png"
                    alt="Desktop view of the built Nexora release-intelligence dashboard"
                    width={1440}
                    height={900}
                    className="h-40 w-full object-cover object-top sm:h-48"
                    sizes="(min-width: 640px) 640px, 90vw"
                  />
                ) : (
                  <div className="h-40 w-full sm:h-48" role="img" aria-label={`${study.name} illustrative desktop preview`}>
                    <ConceptPreview slug={slug} viewport="desktop" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                Mobile
              </p>
              <div className="mx-auto max-w-[200px] overflow-hidden rounded-2xl border-4 border-midnight-slate bg-frosted-glass">
                <div className="h-3 bg-midnight-slate" aria-hidden="true" />
                {slug === "nexora-systems" ? (
                  <Image
                    src="/media/nexora-release-demo-mobile.png"
                    alt="Mobile view of the built Nexora release-intelligence dashboard"
                    width={390}
                    height={844}
                    className="h-56 w-full object-cover object-top sm:h-64"
                    sizes="200px"
                  />
                ) : (
                  <div className="h-56 w-full sm:h-64" role="img" aria-label={`${study.name} illustrative mobile preview`}>
                    <ConceptPreview slug={slug} viewport="mobile" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
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
            {study.demoHref
              ? "This is a Cyvexly-built fictional demonstration, not a client engagement or operating service. No client results are claimed."
              : "This is a labeled concept project — no client results are claimed."}
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Want something like this for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              A short description is enough to ask whether Cyvexly is a fit.
              Share the full brief only when you&apos;re ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=custom-system">
                Ask about a project
              </ButtonLink>
              <ButtonLink href="/start" variant="secondary">
                Share a detailed brief
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

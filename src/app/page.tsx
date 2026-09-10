import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { HeroShowcaseVideo } from "@/components/hero-showcase-video";
import { HowItWorksVideo } from "@/components/how-it-works-video";
import { FaqAccordion } from "@/components/faq-accordion";
import { ConceptPreview } from "@/components/concept-preview";
import { CredibilityIcon } from "@/components/credibility-icon";
import { FinalCtaSignalGraphic } from "@/components/final-cta-signal-graphic";
import { HomeGlassArchitecture } from "@/components/home-glass-architecture";
import {
  buyerNeeds,
  credibilityPoints,
  faqPreview,
  pricingPreview,
  selectedWork,
  siteConfig,
} from "@/lib/site-config";

const homeProcessSteps = [
  {
    number: "01",
    title: "Start with a short conversation",
    description:
      "Tell us what you need in a few sentences. If you already know the details, the Project Planner is available too.",
  },
  {
    number: "02",
    title: "Approve a clear plan",
    description:
      "You receive a written recommendation with deliverables, timing, price, and the decisions needed from you.",
  },
  {
    number: "03",
    title: "Review, launch, and own it",
    description:
      "You approve the work at named checkpoints, review the live site, and receive the finished project after final payment.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="home-hero-stage relative isolate overflow-hidden border-b border-smoke-glass/70">
          <HomeGlassArchitecture />
          <div className="home-hero-layout relative z-10 mx-auto grid max-w-[90rem] items-center gap-6 px-4 py-16 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 xl:gap-10">
            <div className="home-hero-copy relative overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#315a8d]">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-emerald" aria-hidden="true" />
                Independent web studio · Serving the United States
              </p>
              <h1
                aria-label={siteConfig.tagline}
                className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-tight text-midnight-slate sm:text-5xl xl:text-[3.45rem]"
              >
                Websites built to make your business{" "}
                <span className="text-cyber-blue">unmistakable.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-6 text-cool-graphite sm:mt-6 sm:text-lg sm:leading-relaxed">
                Cyvexly Studio plans, designs, builds, and supports custom websites for
                businesses ready to look credible, work smarter, and turn more visits into
                action.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <ButtonLink href="/contact?interest=custom-project" className="px-4 py-2.5 text-[0.8125rem] sm:px-6 sm:py-3 sm:text-sm">Ask about a project</ButtonLink>
                <ButtonLink href="/work" variant="secondary" className="px-4 py-2.5 text-[0.8125rem] sm:px-6 sm:py-3 sm:text-sm">
                  View our work
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-cool-graphite">
                Already have the details?{" "}
                <ButtonLink href="/start" variant="text" className="text-xs">
                  Share a detailed brief →
                </ButtonLink>
              </p>
            </div>
            <HeroShowcaseVideo />
          </div>

          <div className="home-signal-rail-wrap relative z-10 px-3 pb-6 sm:px-6 lg:px-8">
            <div className="signal-rail home-signal-rail mx-auto max-w-[88rem] overflow-hidden rounded-[1.5rem]">
              <ul className="grid gap-px px-3 py-3 text-xs font-medium text-cool-graphite sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
                {credibilityPoints.map((point) => (
                  <li
                    key={point.id}
                    className="flex min-w-0 items-center gap-3 rounded-xl px-3 py-3.5"
                  >
                    <CredibilityIcon id={point.id} />
                    <span className="leading-snug">{point.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">
                  Proof before promises
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                  Two working demos. Two different problems.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite sm:text-base">
                  Explore a brand-led hospitality website and a dense custom web
                  application. Both are fictional, interactive, and available to inspect.
                </p>
              </div>
              <ButtonLink href="/work" variant="text">
                Compare both projects →
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
              <article className="glass-panel glass-panel-interactive flex min-h-[34rem] flex-col overflow-hidden rounded-3xl">
                <div
                  className={`min-h-64 flex-1 overflow-hidden bg-gradient-to-br ${selectedWork[0].gradient}`}
                  aria-hidden="true"
                >
                  <ConceptPreview slug={selectedWork[0].slug} />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="w-fit rounded-full bg-signal-emerald/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-emerald">
                    Working concept demonstration
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-midnight-slate">
                    {selectedWork[0].name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base">
                    {selectedWork[0].summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink href={selectedWork[0].href}>View case study</ButtonLink>
                    <ButtonLink href={selectedWork[0].demoHref} variant="secondary">
                      Try interactive demo
                    </ButtonLink>
                  </div>
                </div>
              </article>

              {selectedWork.slice(1, 2).map((project) => (
                <article
                  key={project.name}
                  className="glass-panel flex min-h-[34rem] flex-col overflow-hidden rounded-3xl"
                >
                  <div
                    className={`min-h-64 flex-1 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    aria-hidden="true"
                  >
                    <ConceptPreview slug={project.slug} />
                  </div>
                  <div className="flex flex-col gap-2 p-6 sm:p-8">
                    <span className="w-fit rounded-full bg-signal-emerald/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-emerald">
                      Working concept demonstration
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-midnight-slate">
                      {project.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-cool-graphite sm:text-base">{project.summary}</p>
                    <div className="mt-auto flex flex-wrap gap-3 pt-4">
                      <ButtonLink href={project.href} variant="secondary">
                        View case study
                      </ButtonLink>
                      <ButtonLink href={project.demoHref}>Try interactive demo</ButtonLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Buyer-led services */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">
                  Start with what you need
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                  Choose the business goal that sounds familiar.
                </h2>
              </div>
              <ButtonLink href="/services" variant="text">
                Compare all services →
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {buyerNeeds.map((need, index) => (
                <a
                  key={need.id}
                  href={need.detailHref}
                  className="group glass-panel glass-panel-interactive flex min-h-64 flex-col rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-midnight-slate">
                    {need.eyebrow}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                    {need.title}
                  </p>
                  <p className="mt-auto pt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-cool-graphite">
                    {need.startingPoint}
                  </p>
                  <span className="mt-3 text-sm font-medium text-cyber-blue group-hover:text-[#0b4fb0]">
                    {need.detailLabel} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Process overview */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">
                  A clear working relationship
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                  From first conversation to a site you own.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                  Work directly with Cyvexly through named decisions and review points. You
                  always know what comes next, what is waiting on you, and what is waiting on
                  the studio.
                </p>
                <ol className="mt-7 space-y-4">
                  {homeProcessSteps.map((step) => (
                    <li key={step.number} className="glass-panel rounded-2xl p-5">
                      <div className="flex gap-4">
                        <span className="font-mono text-xs font-semibold text-cyber-blue">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-display text-base font-semibold text-midnight-slate">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/process" variant="secondary">
                    See the full process
                  </ButtonLink>
                  <ButtonLink href="/contact?interest=custom-project" variant="text">
                    Start with a short inquiry →
                  </ButtonLink>
                </div>
              </div>
              <div>
                <HowItWorksVideo />
                <p className="mt-3 text-xs leading-relaxed text-cool-graphite">
                  A short visual overview. The full Process page lists deliverables, timing,
                  your responsibilities, and every approval point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Simple starting points
              </h2>
              <ButtonLink href="/contact?interest=custom-project" variant="text">
                Need something custom? Let&apos;s talk →
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pricingPreview.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-2xl p-7 ${
                    tier.featured
                      ? "border-2 border-cyber-blue bg-frosted-glass shadow-[0_16px_40px_-16px_rgba(20,120,255,0.35)]"
                      : "glass-panel"
                  }`}
                >
                  {tier.featured && (
                    <span className="mb-3 w-fit rounded-full bg-signal-emerald/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-emerald">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold text-midnight-slate">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-cool-graphite">
                    Starting at
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold text-cyber-blue">
                    {tier.price}
                  </p>
                  <p className="mt-3 text-sm text-cool-graphite">{tier.description}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-midnight-slate">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={`/contact?interest=${tier.name.toLowerCase()}-package`}
                    variant={tier.featured ? "primary" : "secondary"}
                    className="mt-6 w-full"
                  >
                    Ask about {tier.name}
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              FAQ
            </h2>
            <ButtonLink href="/faq" variant="text">
              View all questions →
            </ButtonLink>
          </div>
          <div className="mt-8">
            <FaqAccordion items={faqPreview} />
          </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="glass-continuation border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="final-cta-shell relative overflow-hidden rounded-3xl" data-final-cta>
            <FinalCtaSignalGraphic />
            <div className="final-cta-copy relative z-10 px-8 py-12 text-center sm:px-12 md:max-w-[58%] md:py-14 md:text-left lg:px-16">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to make your business unmistakable?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#D5DFED] sm:text-base md:mx-0">
                Send a short note and we&apos;ll respond within two business days.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <ButtonLink href="/contact?interest=custom-project">Ask about a project</ButtonLink>
                <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
              </div>
              <p className="mt-4 text-xs text-[#B9C6DA]">
                No payment required · response within two business days
              </p>
            </div>
          </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

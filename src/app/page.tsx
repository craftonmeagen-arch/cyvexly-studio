import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { HeroShowcaseVideo } from "@/components/hero-showcase-video";
import { FaqAccordion } from "@/components/faq-accordion";
import { ConceptPreview } from "@/components/concept-preview";
import { CredibilityIcon } from "@/components/credibility-icon";
import { ServiceIcon } from "@/components/service-icon";
import { PartnershipSignalGraphic } from "@/components/partnership-signal-graphic";
import { ProcessIcon } from "@/components/process-icon";
import { FinalCtaSignalGraphic } from "@/components/final-cta-signal-graphic";
import {
  capabilities,
  credibilityPoints,
  faqPreview,
  pricingPreview,
  processSteps,
  selectedWork,
} from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="home-hero-stage relative isolate overflow-hidden border-b border-smoke-glass/70">
          <div className="home-hero-layout relative z-10 mx-auto grid max-w-[90rem] items-center gap-6 px-4 py-16 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 xl:gap-10">
            <div className="home-hero-copy relative overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#315a8d]">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-emerald" aria-hidden="true" />
                Independent web studio · Available worldwide
              </p>
              <h1 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-tight text-midnight-slate sm:text-5xl xl:text-[3.45rem]">
                Websites built to make your business{" "}
                <span className="text-cyber-blue">unmistakable.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-6 text-cool-graphite sm:mt-6 sm:text-lg sm:leading-relaxed">
                Cyvexly Studio plans, designs, builds, and supports custom websites for
                businesses ready to look credible, work smarter, and turn more visits into
                action.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <ButtonLink href="/start" className="px-4 py-2.5 text-[0.8125rem] sm:px-6 sm:py-3 sm:text-sm">Describe your project</ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="px-4 py-2.5 text-[0.8125rem] sm:px-6 sm:py-3 sm:text-sm">
                  Explore services
                </ButtonLink>
              </div>
            </div>
            <HeroShowcaseVideo />
          </div>

          <div className="signal-rail border-t border-white/80">
            <ul className="mx-auto grid max-w-[88rem] gap-px px-3 py-3 text-xs font-medium text-cool-graphite sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
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
        </section>

        {/* Selected work */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              Selected work
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
                className="group glass-panel glass-panel-interactive flex flex-col overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className={`h-44 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
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
                  <span className="mt-auto pt-2 text-sm font-medium text-cyber-blue group-hover:text-[#0b4fb0]">
                    View project →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              What Cyvexly can do
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className="glass-panel glass-panel-signal relative overflow-hidden rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <ServiceIcon id={capability.id} />
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-midnight-slate">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The difference */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="partnership-panel glass-panel signal-grid-bg relative grid overflow-hidden rounded-3xl px-8 py-10 text-center sm:px-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:items-center md:gap-10 md:text-left lg:px-16">
            <PartnershipSignalGraphic />
            <div className="relative z-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">
                Built around your business
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                We&apos;re not a DIY builder. We&apos;re your independent web partner.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base md:mx-0">
                This isn&apos;t a template or a drag-and-drop. You describe what your business
                needs, and we shape a custom website around your brand, your users, and your
                goals — strategy, design, and code working together.
              </p>
            </div>
          </div>
        </section>

        {/* Process preview */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Give us the brief. We&apos;ll shape the route.
          </h2>
          <ol className="process-route mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.number} className="process-route-step glass-panel rounded-2xl p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
                <span className="process-node font-mono text-xs text-cyber-blue">{step.number}</span>
                <ProcessIcon number={step.number} />
                <h3 className="mt-4 font-display text-base font-semibold text-midnight-slate">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing preview */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Simple starting points
              </h2>
              <ButtonLink href="/pricing" variant="text">
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
                      Most popular
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
                    href="/start"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="mt-6 w-full"
                  >
                    Describe your project
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="mx-auto max-w-6xl px-6 py-20">
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
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="final-cta-shell relative overflow-hidden rounded-3xl" data-final-cta>
            <FinalCtaSignalGraphic />
            <div className="final-cta-copy relative z-10 px-8 py-12 text-center sm:px-12 md:max-w-[58%] md:py-14 md:text-left lg:px-16">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to build something extraordinary?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#D5DFED] sm:text-base md:mx-0">
                Describe your project and we&apos;ll respond within two business days.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <ButtonLink href="/start">Describe your project</ButtonLink>
              </div>
              <p className="mt-4 text-xs text-[#B9C6DA]">
                No payment required · response within two business days
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

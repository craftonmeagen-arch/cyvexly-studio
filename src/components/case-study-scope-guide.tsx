import { ButtonLink } from "@/components/button";

type ScopeGuideItem = {
  label: string;
  value: string;
};

export function CaseStudyScopeGuide({
  eyebrow,
  heading,
  summary,
  items,
  inquiryHref,
  inquiryLabel,
  serviceHref,
  serviceLabel,
  pricingHref,
  pricingLabel,
  plannerHref,
}: {
  eyebrow: string;
  heading: string;
  summary: string;
  items: readonly ScopeGuideItem[];
  inquiryHref: string;
  inquiryLabel: string;
  serviceHref: string;
  serviceLabel: string;
  pricingHref: string;
  pricingLabel: string;
  plannerHref: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
      <div className="cyber-focal-panel rounded-3xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ion-cyan">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#B9C6DA] sm:text-base">
              {summary}
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={inquiryHref}>{inquiryLabel}</ButtonLink>
              <ButtonLink href={serviceHref} variant="secondary">
                {serviceLabel}
              </ButtonLink>
            </div>
            <div className="mt-3 flex flex-wrap items-start gap-x-4 gap-y-1">
              <ButtonLink href={pricingHref} variant="text" className="!text-white hover:!text-ion-cyan">
                {pricingLabel} →
              </ButtonLink>
              <ButtonLink href={plannerHref} variant="text" className="!text-white hover:!text-ion-cyan">
                Share a prefilled brief →
              </ButtonLink>
            </div>
          </div>

          <details className="group rounded-2xl border border-white/15 bg-white/[0.07] sm:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ion-cyan [&::-webkit-details-marker]:hidden">
              What shapes the scope
              <span className="text-base transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <dl className="space-y-4 border-t border-white/15 px-5 py-5">
              {items.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ion-cyan">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-white/80">{item.value}</dd>
                </div>
              ))}
            </dl>
          </details>

          <dl className="hidden gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-1">
            {items.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-5 sm:px-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ion-cyan">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-white/80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { collaborationPromise, processSteps } from "@/lib/site-config";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 10.5l3.5 3.5L16 6" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Process — Cyvexly Studio",
  description:
    "How a Cyvexly Studio project works: five stages from brief and fit to launch and care, with clear inputs, deliverables, and approval points at every step.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              How projects work
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Give us the brief. We&apos;ll shape the route.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              Every Cyvexly project moves through the same five stages, so you
              always know what&apos;s waiting on us, what&apos;s waiting on you,
              and what happens next.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <ol className="relative space-y-8 sm:space-y-6">
            <div
              className="absolute left-7 top-3 bottom-3 hidden w-px bg-smoke-glass sm:block"
              aria-hidden="true"
            />
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full border-2 border-cyber-blue bg-arctic-mist font-mono text-lg font-semibold text-cyber-blue">
                  {step.number}
                </div>

                <div className="glass-panel flex-1 rounded-2xl p-7 sm:p-9">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                      {step.title}
                    </h2>
                    <span className="rounded-full bg-ice-field px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                      {step.timeframe}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cool-graphite sm:text-base">
                    {step.description}
                  </p>

                  <dl className="mt-6 grid gap-5 border-t border-smoke-glass/70 pt-6 sm:grid-cols-3">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        From you
                      </dt>
                      <dd className="mt-1 text-sm text-midnight-slate">{step.clientInput}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        From Cyvexly
                      </dt>
                      <dd className="mt-1 text-sm text-midnight-slate">{step.deliverable}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        <CheckIcon className="h-3 w-3 text-cyber-blue" />
                        Approval point
                      </dt>
                      <dd className="mt-1 text-sm text-midnight-slate">{step.approval}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Typical timing
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                Most projects follow this timeline. Your actual dates depend on
                scope and how quickly feedback comes back.
              </p>
              <dl className="mt-6 divide-y divide-smoke-glass/70">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-start gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <dt className="min-w-0 text-sm text-midnight-slate">
                      <span className="mr-2 font-mono text-xs text-cyber-blue">
                        {step.number}
                      </span>
                      {step.title}
                    </dt>
                    <dd className="min-w-0 max-w-full font-mono text-[11px] uppercase tracking-[0.08em] text-cool-graphite sm:max-w-[58%] sm:text-right">
                      {step.timeframe}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="glass-panel rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Our collaboration promise
              </h2>
              <ul className="mt-6 space-y-4">
                {collaborationPromise.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-emerald" />
                    <span className="text-sm leading-relaxed text-midnight-slate">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
              You will always know what&apos;s waiting on Cyvexly, what&apos;s
              waiting on you, and what happens next.
            </h2>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to start the brief?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Describe your project and we&apos;ll respond within two business
              days.
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

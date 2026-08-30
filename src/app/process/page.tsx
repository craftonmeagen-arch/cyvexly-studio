import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { processSteps } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Process — Cyvexly Studio",
  description:
    "How a Cyvexly Studio project works: five stages from brief and fit to launch and care, with clear inputs, deliverables, and approval points at every step.",
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="signal-grid-bg border-b border-smoke-glass/70">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
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
          <ol className="space-y-6">
            {processSteps.map((step, index) => (
              <li key={step.number} className="glass-panel rounded-2xl p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-cyber-blue">
                      {step.number}
                    </span>
                    <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                      {step.title}
                    </h2>
                  </div>
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
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                      Approval point
                    </dt>
                    <dd className="mt-1 text-sm text-midnight-slate">{step.approval}</dd>
                  </div>
                </dl>

                {index < processSteps.length - 1 && (
                  <div
                    className="mx-auto mt-6 h-6 w-px bg-smoke-glass"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-smoke-glass/70 bg-ice-field">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
              You will always know what&apos;s waiting on Cyvexly, what&apos;s
              waiting on you, and what happens next.
            </h2>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="signal-grid-bg relative overflow-hidden rounded-3xl bg-midnight-slate px-8 py-16 text-center sm:px-16">
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

import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { aboutValues, capabilities } from "@/lib/site-config";

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
  title: "About — Cyvexly Studio",
  description:
    "Cyvexly Studio is an independent web design and development studio built to help United States business owners get a clearer, more useful website.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              About Cyvexly
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              An independent studio, built around one clear process.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              No agency layers, no founder mythology — just a focused way of
              turning a business brief into a website that works.
            </p>
          </div>
        </section>

        {/* Origin story */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="glass-panel grid gap-10 rounded-3xl p-8 sm:p-12 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-center md:gap-12">
            <div className="flex justify-center md:justify-start">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/80 bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_40px_-24px_rgba(15,102,224,0.55)] sm:h-36 sm:w-36">
                <Image
                  src="/icon.svg"
                  alt="Cyvexly Studio signal mark"
                  width={72}
                  height={72}
                  className="h-14 w-14 sm:h-20 sm:w-20"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Why Cyvexly exists
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                Cyvexly Studio was founded to make building a strong digital
                presence clearer and more useful for business owners. A
                website should do more than look polished — it should give a
                business the tools to explain its value, support its
                marketing, reach the right people, and turn interest into
                action. Cyvexly brings strategy, design, development, and
                practical guidance into one clear process so owners can stay
                focused on their business while their website works with
                them.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
              What guides the work
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aboutValues.map((value) => (
                <div
                  key={value.id}
                  className="glass-panel glass-panel-signal relative overflow-hidden rounded-2xl p-6"
                >
                  <h3 className="font-display text-base font-semibold text-midnight-slate">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working style, capabilities, and collaborator model */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                How Cyvexly works
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-emerald" />
                  <span className="text-sm leading-relaxed text-midnight-slate">
                    Fully remote, serving business owners across the United
                    States.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-emerald" />
                  <span className="text-sm leading-relaxed text-midnight-slate">
                    Cyvexly is run directly as an independent studio, without
                    agency layers. When a project needs capacity or expertise
                    beyond that, trusted collaborators are brought in
                    transparently and never presented as in-house staff.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-emerald" />
                  <span className="text-sm leading-relaxed text-midnight-slate">
                    Built on modern, standards-based tools (React, Next.js,
                    accessible semantic markup) chosen for speed, security,
                    and long-term compatibility — not locked to a proprietary
                    platform.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-emerald" />
                  <span className="text-sm leading-relaxed text-midnight-slate">
                    A response within two business days, and open project
                    slots reviewed on a rolling basis.
                  </span>
                </li>
              </ul>
              <p className="mt-6 flex items-center gap-2 text-xs font-medium text-cool-graphite">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-signal-emerald shadow-[0_0_10px_rgba(10,107,69,0.6)]"
                  aria-hidden="true"
                />
                Available for new projects
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                What that looks like day to day
              </h2>
              <ul className="mt-6 space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability.id} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue" />
                    <span className="text-sm leading-relaxed text-midnight-slate">
                      <span className="font-semibold">{capability.title}:</span>{" "}
                      {capability.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to work together?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Describe your project and we&apos;ll respond within two
              business days.
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

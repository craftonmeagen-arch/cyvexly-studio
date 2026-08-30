import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work — Cyvexly Studio",
  description:
    "Selected Cyvexly Studio work: business sites, redesigns, landing pages, and commerce projects. Concept work is clearly labeled.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="signal-grid-bg border-b border-smoke-glass/70">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Work
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Design judgment you can see.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              A few strong, clearly labeled projects — not twelve thin ones.
              Concept work is honestly marked as such.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <WorkGrid />
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="signal-grid-bg relative overflow-hidden rounded-3xl bg-midnight-slate px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Want something like this — but not identical?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Every project starts from your brand and goals, not a template.
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

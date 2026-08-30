import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Page not found — Cyvexly Studio",
  description: "This page doesn't exist. Find your way back to Work, Services, or the Project Planner.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="signal-grid-bg flex min-h-[60vh] items-center border-b border-smoke-glass/70">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <p className="font-mono text-sm text-cyber-blue">404</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              This page doesn&apos;t exist yet.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              The link may be outdated, or the page hasn&apos;t been built.
              Here are a few places to go instead.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/">Back to home</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Services
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Work
              </ButtonLink>
              <ButtonLink href="/start" variant="secondary">
                Describe your project
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

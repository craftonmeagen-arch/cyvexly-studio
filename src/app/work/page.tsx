import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { WorkGrid } from "@/components/work-grid";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Work — Cyvexly Studio",
  description:
    "Selected Cyvexly Studio work: business sites, redesigns, landing pages, and commerce projects. Concept work is clearly labeled.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Work
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Design judgment you can see.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              See what was built, what works, and what remains a design
              concept. Every project is labeled so you can judge the evidence
              for yourself.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <WorkGrid />
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Have a different goal in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Send a short note about what you need. We&apos;ll tell you whether
              Cyvexly is a fit and what the most useful next step would be.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=custom-project">
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

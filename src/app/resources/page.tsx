import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { resourceGuides } from "@/lib/resource-guides";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Planning Guides for Business Owners | Cyvexly",
  description:
    "Practical guides to website cost, project scope, launch decisions, and comparing proposals from Cyvexly Studio, a U.S. web design and development studio.",
  path: "/resources",
});

const guides = Object.values(resourceGuides);

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
          <div className="page-intro-shell mx-auto max-w-4xl rounded-3xl px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Buyer resources
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Make a clearer website decision before you ask for a quote.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cool-graphite sm:text-lg">
              Practical guidance grounded in the decisions Cyvexly scopes with business owners: budget, inclusions, responsibilities, launch, and what should wait.
            </p>
          </div>
        </section>

        <section className="glass-continuation border-b border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                Start with the decision in front of you
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                Two foundations for a responsible project comparison
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">
                These guides are written for buyers, not for search engines. Each one gives you a short answer, an inspectable framework, and the questions that should be settled before work begins.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {guides.map((guide, index) => (
                <article key={guide.slug} className="glass-panel glass-panel-signal flex h-full flex-col rounded-3xl p-7 sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                      Guide {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-ice-field px-3 py-1 font-mono text-[9px] uppercase tracking-[0.11em] text-cool-graphite">
                      {guide.readTime}
                    </span>
                  </div>
                  <h2 className="mt-7 font-display text-2xl font-semibold leading-snug text-midnight-slate sm:text-3xl">
                    <Link href={`/resources/${guide.slug}`} className="hover:text-cyber-blue">
                      {guide.title}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cool-graphite sm:text-base">
                    {guide.summary}
                  </p>
                  <Link href={`/resources/${guide.slug}`} className="mt-7 inline-flex min-h-11 items-center font-semibold text-cyber-blue hover:text-[#0b4fb0]">
                    Read the guide →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Need", "Start with the business outcome—not a list of technologies.", "/services", "Explore services"],
              ["Investment", "Compare current starting prices, add-ons, outside costs, and milestones.", "/pricing", "Review pricing"],
              ["Working relationship", "See how fit, scope, design, build, launch, and support connect.", "/process", "See the process"],
            ].map(([label, copy, href, action]) => (
              <Link key={href} href={href} className="rounded-2xl border border-cyber-blue/12 bg-white/45 p-6 hover:border-cyber-blue/30">
                <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-cyber-blue">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">{copy}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-midnight-slate">{action} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Have a project these guides do not quite describe?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Send a short description. Cyvexly will recommend a starting scope and explain the next decision without expecting you to choose the technical solution first.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?interest=custom-project">Ask about a project</ButtonLink>
              <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

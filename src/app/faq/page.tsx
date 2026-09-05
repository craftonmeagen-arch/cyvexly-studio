import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqLibrary } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ — Cyvexly Studio",
  description:
    "Answers to common questions about fit, pricing, timing, content, ownership, integrations, accessibility, care plans, and how to start a Cyvexly Studio project.",
  alternates: {
    canonical: "/faq",
  },
};

function toAnchorId(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function FaqPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              FAQ
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Questions, answered plainly.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              Can&apos;t find what you need?{" "}
              <ButtonLink href="/contact" variant="text">
                Send us a message →
              </ButtonLink>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <nav aria-label="FAQ categories" className="flex flex-wrap gap-2">
            {faqLibrary.map((group) => (
              <a
                key={group.category}
                href={`#${toAnchorId(group.category)}`}
                className="rounded-full glass-panel px-4 py-2 text-xs font-medium text-cool-graphite hover:text-midnight-slate"
              >
                {group.category}
              </a>
            ))}
          </nav>
        </section>

        {faqLibrary.map((group, index) => (
          <section
            key={group.category}
            id={toAnchorId(group.category)}
            className={`scroll-mt-24 px-6 py-14 ${index % 2 === 1 ? "glass-section border-y border-smoke-glass/70" : ""}`}
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                {group.category}
              </h2>
              <div className="mt-6">
                <FaqAccordion items={group.items} />
              </div>
            </div>
          </section>
        ))}

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="cyber-focal-panel rounded-3xl px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Still have a question?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
              Send a short message on the{" "}
              <ButtonLink href="/contact" variant="text" className="text-sm text-ion-cyan hover:text-white">
                Contact page
              </ButtonLink>
              , or describe your project and we&apos;ll answer as part of
              your proposal.
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

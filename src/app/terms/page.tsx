import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website Terms — Cyvexly Studio",
  description:
    "The terms that govern using cyvexly.com — this marketing website and Project Planner — separate from any signed client project agreement.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Legal
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Website Terms
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              Effective September 5, 2026. These terms cover this website
              only — not a signed client project.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="glass-panel space-y-10 rounded-3xl px-6 py-8 text-sm leading-relaxed text-cool-graphite sm:px-10 sm:py-10 sm:text-base">
            <div className="rounded-2xl border border-cyber-blue/30 bg-cyber-blue/5 p-5 text-xs text-cool-graphite sm:text-sm">
              <strong className="text-midnight-slate">Draft under review.</strong>{" "}
              The exact registered legal entity name is still pending Owner
              confirmation and this draft has not yet received final Owner
              review. It is published no-index while Chunk 5 is in progress.
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Acceptance of these terms
              </h2>
              <p className="mt-3">
                These Website Terms govern your use of cyvexly.com — the
                marketing pages, Project Planner, and Contact form. By using
                this site, you agree to these terms. If you do not agree,
                please do not use the site; you can still reach us by phone
                or email.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                What this site is for
              </h2>
              <p className="mt-3">
                Cyvexly Studio is an independent web design and development
                studio operated as a limited liability company based in
                Indiana, United States. This site is informational and
                exists to explain our services, showcase concept and project
                work, and let prospective clients describe a project through
                the Project Planner or reach us through the Contact form.
                Submitting either form is the start of a conversation, not an
                order, purchase, or binding commitment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                This is separate from a client project agreement
              </h2>
              <p className="mt-3">
                These Website Terms describe how you may use cyvexly.com
                itself. They are not the agreement that governs an actual
                paid project. If you engage Cyvexly Studio for a website
                project, the scope, timeline, deliverables, payment terms,
                and ownership of that specific project are set out in a
                separate written project agreement that both parties sign
                before work or payment begins.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Concept and portfolio work
              </h2>
              <p className="mt-3">
                Work labeled as a concept project is original, illustrative
                work created to demonstrate our design and development
                approach. It does not represent an actual client, a real
                business relationship, or measured client results unless the
                page states otherwise. We label concept work clearly and will
                never present it as a real client outcome.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Intellectual property
              </h2>
              <p className="mt-3">
                The design, layout, original graphics, and code of
                cyvexly.com belong to Cyvexly Studio unless otherwise noted.
                You may view and share pages of this site for personal,
                non-commercial reference. You may not copy, resell, or reuse
                our site design, code, or written content as your own work
                without our written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Acceptable use
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Do not submit false, misleading, or malicious information
                  through our forms.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Do not attempt to scrape, disrupt, overload, or gain
                  unauthorized access to this site or its infrastructure.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Do not use this site for any unlawful purpose or to violate
                  another person&apos;s rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                No payment on this site
              </h2>
              <p className="mt-3">
                This site does not currently process payments. No payment
                method is represented as active. Any future payment
                relationship will be described in a proposal and invoice
                before it applies, and will use a dedicated, secure payment
                provider rather than a form on this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Third-party links
              </h2>
              <p className="mt-3">
                Where this site links to a third-party website, we are not
                responsible for that site&apos;s content, availability, or
                practices. Review the linked site&apos;s own terms and
                privacy information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Disclaimer and limitation of liability
              </h2>
              <p className="mt-3">
                This site and its content are provided &ldquo;as is,&rdquo;
                without warranties of any kind, to the fullest extent
                permitted by law. To the fullest extent permitted by law,
                Cyvexly Studio is not liable for indirect, incidental, or
                consequential damages arising from your use of this site.
                This section does not limit any protection a client project
                agreement separately provides for a paid engagement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Governing law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of the State of Indiana,
                United States, without regard to conflict-of-law principles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Changes to these terms
              </h2>
              <p className="mt-3">
                We may update these Website Terms as the site changes. We
                will update the effective date above when we do.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Contact us
              </h2>
              <p className="mt-3">
                Questions about these terms: email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.email}
                </a>{" "}
                or call{" "}
                <a href={siteConfig.phoneHref} className="text-cyber-blue hover:text-[#0b4fb0]">
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

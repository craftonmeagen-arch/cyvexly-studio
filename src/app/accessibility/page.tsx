import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility Statement — Cyvexly Studio",
  description:
    "Cyvexly Studio's accessibility commitment and target for cyvexly.com and for websites we build, plus how to report an accessibility problem.",
};

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Accessibility
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Accessibility Statement
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="glass-panel space-y-10 rounded-3xl px-6 py-8 text-sm leading-relaxed text-cool-graphite sm:px-10 sm:py-10 sm:text-base">
            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Our commitment
              </h2>
              <p className="mt-3">
                Cyvexly Studio is committed to making this website, and the
                websites we build for clients, usable by as many people as
                possible, including people who use assistive technology such
                as screen readers, screen magnifiers, voice control, or
                keyboard-only navigation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Our target
              </h2>
              <p className="mt-3">
                We target conformance with the{" "}
                <a
                  href="https://www.w3.org/TR/WCAG22/"
                  className="text-cyber-blue hover:text-[#0b4fb0]"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
                </a>
                . In practice, this means we aim for:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  All interactive functions reachable and operable by keyboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Visible focus indicators that aren&apos;t hidden by sticky
                  interface elements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Sufficient color contrast for text and interface components
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Meaningful link and button labels, and persistent form
                  labels
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Error messages that identify what happened and how to
                  correct it
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Animation that respects your reduced-motion preference and
                  never hides required information
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  Meaningful text alternatives for images that convey
                  information, with decorative visuals ignored by assistive
                  technology
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Ongoing work
              </h2>
              <p className="mt-3">
                Accessibility is an ongoing practice, not a one-time checklist.
                As we add new pages and features to this site, we review them
                against the same target. Some third-party tools or embeds we
                may use in the future are outside our direct control; where
                that&apos;s the case, we&apos;ll note it here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Websites we build for clients
              </h2>
              <p className="mt-3">
                Every Cyvexly Studio project includes an accessibility target
                as standard scope — see{" "}
                <a href="/pricing" className="text-cyber-blue hover:text-[#0b4fb0]">
                  Pricing
                </a>
                . Deeper accessibility audits and remediation beyond that
                baseline are available as a scoped add-on.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Reporting a problem
              </h2>
              <p className="mt-3">
                If you encounter an accessibility barrier anywhere on this
                site, please tell us — we want to know and will work to fix
                it. Email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.email}
                </a>{" "}
                with the page URL and a description of the issue, and we&apos;ll
                respond within two business days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

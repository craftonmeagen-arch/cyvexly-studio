import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Cyvexly Studio",
  description:
    "A short, low-friction way to reach Cyvexly Studio with a general question. For a full project brief, use the Project Planner instead.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="signal-grid-bg border-b border-smoke-glass/70">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Have a quick question?
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cool-graphite sm:text-lg">
              Use this for general questions — not a full project brief.
              Ready to start a project?{" "}
              <ButtonLink href="/start" variant="text">
                Describe your project →
              </ButtonLink>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                We typically respond within two business days.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-cyber-blue hover:text-[#0b4fb0]"
              >
                {siteConfig.email}
              </a>

              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Project inquiries
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    Use the{" "}
                    <ButtonLink href="/start" variant="text" className="text-sm">
                      Project Planner
                    </ButtonLink>{" "}
                    for a full brief.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Support on an existing project
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    Choose &ldquo;Existing project support&rdquo; below and
                    include your project name.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Partnerships &amp; press
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    Choose &ldquo;Partnership / press&rdquo; below.
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Privacy questions
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    See our{" "}
                    <ButtonLink href="/privacy" variant="text" className="text-sm">
                      Privacy Policy
                    </ButtonLink>
                    , or send a message below.
                  </dd>
                </div>
              </dl>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

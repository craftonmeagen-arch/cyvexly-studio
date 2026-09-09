import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — Cyvexly Studio",
  description:
    "Ask Cyvexly Studio about a project with your name, email, and a short description. A detailed Project Planner remains available when you are ready.",
  path: "/contact",
});

const inquiryMessages: Record<string, string> = {
  "custom-project": "I’d like to ask whether Cyvexly is a fit for my project.\n\nHere’s what I’m considering: ",
  "signal-package": "I’m interested in the Signal package.\n\nHere’s what I’m considering: ",
  "orbit-package": "I’m interested in the Orbit package.\n\nHere’s what I’m considering: ",
  "nexus-package": "I’m interested in the Nexus package.\n\nHere’s what I’m considering: ",
  "commerce-package": "I’m interested in the Commerce package.\n\nHere’s what I’m considering: ",
  "custom-system": "I’d like to ask about a custom web application or unusual workflow.\n\nHere’s what I’m considering: ",
  "hospitality-website": "I’d like to ask about a website for a restaurant or hospitality business.\n\nHere’s what I’m considering: ",
  "business-websites": "I’d like to ask about a new business website.\n\nHere’s what I’m considering: ",
  "website-redesigns": "I’d like to ask about improving or redesigning an existing website.\n\nHere’s what I’m considering: ",
  "landing-pages": "I’d like to ask about a focused landing page.\n\nHere’s what I’m considering: ",
  "ecommerce-websites": "I’d like to ask about selling products or taking bookings online.\n\nHere’s what I’m considering: ",
  "website-care": "I’d like to ask about ongoing website care and updates.\n\nHere’s what I’m considering: ",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const query = await searchParams;
  const interest = typeof query.interest === "string" ? query.interest : undefined;
  const initialMessage = interest ? inquiryMessages[interest] ?? "" : "";

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Tell us what you&apos;re considering.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cool-graphite sm:text-lg">
              Your name, email, and a short description are enough to ask if
              Cyvexly is a fit. No technical language, finished content, or
              complete sitemap required. Already know the details?{" "}
              <ButtonLink href="/start" variant="text">
                Share a detailed brief →
              </ButtonLink>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="glass-content-field rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                We typically respond within two business days.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 font-display text-lg font-semibold text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 font-display text-lg font-semibold text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Project inquiries
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    Send a short note in this form. The{" "}
                    <ButtonLink href="/start" variant="text" className="text-sm">
                      Project Planner
                    </ButtonLink>{" "}
                    is optional when you want to share a full brief.
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

            <ContactForm
              initialMessage={initialMessage}
              initialTopic={initialMessage ? "Project inquiry" : undefined}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

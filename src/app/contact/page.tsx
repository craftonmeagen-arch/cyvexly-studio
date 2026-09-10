import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { getInquiryContext } from "@/lib/contact-context";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — Cyvexly Studio",
  description:
    "Ask Cyvexly Studio about a project with your name, email, and a short description. A detailed Project Planner remains available when you are ready.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[]; request?: string | string[] }>;
}) {
  const query = await searchParams;
  const consultationMode = query.request === "consultation";
  const interest = typeof query.interest === "string" ? query.interest : undefined;
  const inquiryContext = getInquiryContext(interest);
  const plannerHref = inquiryContext
    ? `/start?service=${inquiryContext.plannerService}`
    : "/start";

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-3 sm:px-6 sm:py-6">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-3 text-center sm:px-9 sm:py-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Contact
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:mt-3 sm:text-[2.625rem]">
              {consultationMode ? "Request a consultation." : "Tell us what you’re considering."}
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-cool-graphite sm:mt-4 sm:leading-relaxed">
              {consultationMode ? (
                <>Leave the contact details and window that work for you. We&apos;ll follow up on the next business day.</>
              ) : (
                <>A name, email, and short note are enough. <span className="hidden sm:inline">No technical language, finished content, or sitemap required.</span></>
              )}
            </p>
            <p className="mt-2 text-sm text-cool-graphite sm:mt-4">
              {consultationMode ? "Prefer to share the details now? " : "Want to skip the project description? "}
              <ButtonLink href={consultationMode ? plannerHref : "/contact?request=consultation"} variant="text" className="text-sm">
                {consultationMode ? "Use the detailed Project Planner →" : "Request a consultation →"}
              </ButtonLink>
              {!consultationMode && (
                <span className="hidden sm:inline">
                  {" · "}<ButtonLink href={plannerHref} variant="text" className="text-sm">Share a detailed brief →</ButtonLink>
                </span>
              )}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-6 sm:py-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <ContactForm
              inquiryInterest={inquiryContext?.id}
              inquiryLabel={inquiryContext?.label}
              mode={consultationMode ? "consultation" : "contact"}
            />

            <div className="glass-content-field rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-midnight-slate sm:text-2xl">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                {consultationMode
                  ? "Consultation requests receive next-business-day follow-up. The requested window is not a confirmed appointment."
                  : "We typically respond within two business days."}
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-11 items-center rounded-xl px-3 font-display text-lg font-semibold text-cyber-blue transition-colors hover:bg-cyber-blue/[0.06] hover:text-[#0b4fb0] focus-visible:bg-cyber-blue/[0.06]"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-h-11 items-center rounded-xl px-3 font-display text-lg font-semibold text-cyber-blue transition-colors hover:bg-cyber-blue/[0.06] hover:text-[#0b4fb0] focus-visible:bg-cyber-blue/[0.06]"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <dl className="mt-10 space-y-6 text-sm">
                {consultationMode ? (
                  <>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        Your requested window
                      </dt>
                      <dd className="mt-1 text-midnight-slate">
                        We&apos;ll use it where possible on the next business day. It is not a booked appointment or an exact-time guarantee.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        More detail or another topic
                      </dt>
                      <dd className="mt-1 text-midnight-slate">
                        Use the{" "}
                        <ButtonLink href="/contact" variant="text" className="text-sm">
                          standard Contact form
                        </ButtonLink>{" "}
                        for project support, partnerships, press, or a longer message.
                      </dd>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        Project inquiries
                      </dt>
                      <dd className="mt-1 text-midnight-slate">
                        Send a short note in this form. The{" "}
                        <ButtonLink href={plannerHref} variant="text" className="text-sm">
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
                        Open &ldquo;Add optional details,&rdquo; choose &ldquo;Existing
                        project support,&rdquo; and include your project name.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                        Partnerships &amp; press
                      </dt>
                      <dd className="mt-1 text-midnight-slate">
                        Open &ldquo;Add optional details&rdquo; and choose
                        &ldquo;Partnership / press.&rdquo;
                      </dd>
                    </div>
                  </>
                )}
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-cool-graphite">
                    Privacy questions
                  </dt>
                  <dd className="mt-1 text-midnight-slate">
                    See our{" "}
                    <ButtonLink href="/privacy" variant="text" className="text-sm">
                      Privacy Policy
                    </ButtonLink>
                    {consultationMode ? ", or use the standard Contact form linked above." : ", or use this form to send a message."}
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

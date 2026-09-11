import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { isValidGaMeasurementId } from "@/lib/analytics";

const analyticsConfigured = isValidGaMeasurementId(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim(),
);

export const metadata = buildPageMetadata({
  title: "Privacy Policy — Cyvexly Studio",
  description:
    "How Cyvexly Studio handles information submitted through cyvexly.com's Contact and Project Planner forms, browser storage, hosting, and your choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-7 text-center sm:px-10 sm:py-9">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Legal
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              Effective September 10, 2026. This describes what actually
              happens on cyvexly.com today, not a generic template.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="glass-panel space-y-10 rounded-3xl px-6 py-8 text-sm leading-relaxed text-cool-graphite sm:px-10 sm:py-10 sm:text-base">
            <div className="rounded-2xl border border-cyber-blue/30 bg-cyber-blue/5 p-5 text-xs text-cool-graphite sm:text-sm">
              <strong className="text-midnight-slate">Draft under review.</strong>{" "}
              This page describes real, current site behavior. Owner has selected
              Cyvexly LLC as the intended legal name, but formation and exact
              filing-name verification are still pending. This draft has not yet received
              final Owner review. It is
              published no-index while Chunk 5 is in progress.
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Who we are
              </h2>
              <p className="mt-3">
                Cyvexly Studio is an independent web design and development
                studio based in Indiana, United States, serving clients across
                the United States. Cyvexly LLC is the Owner-selected legal name;
                formation and exact filing-name verification remain pending. You can reach us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.email}
                </a>{" "}
                or{" "}
                <a href={siteConfig.phoneHref} className="text-cyber-blue hover:text-[#0b4fb0]">
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Information you submit through our forms
              </h2>
              <p className="mt-3">
                The Contact form collects your name, email address, a topic,
                and your message. The short consultation form collects your name,
                chosen contact method, the corresponding email address or phone
                number, preferred contact window, timezone, consent, and any
                optional note. The Project Planner collects a more
                detailed project brief — information about you, your
                business, and what you want the website to do — so we can
                prepare a real recommendation.
              </p>
              <p className="mt-3">
                These forms submit directly from your browser to our server,
                which sends your submission to our business inbox using
                Resend, a third-party transactional email service. When you
                provide an email address, the server also attempts to email you
                a confirmation of what you submitted; phone-only consultation
                requests do not receive an email or SMS confirmation.
                We reply to that submission using the address you provided (a
                &ldquo;Reply-To&rdquo; header pointed at your email). We do
                not store your submission in an application database. Copies
                can exist in Resend&apos;s delivery systems, our business email
                inbox, the requester&apos;s inbox when confirmation succeeds, and
                the hosting provider&apos;s standard operational logs.
              </p>
              <p className="mt-3">
                When you submit either form, our server also reads the IP
                address your submission came from. We use it to limit
                automated and spam submissions using a short-lived, per-IP rate
                limit held in server memory. The raw IP address is not placed in
                internal notification or confirmation emails by our form code.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Information saved only on your own device
              </h2>
              <p className="mt-3">
                The Project Planner can save your in-progress answers to your
                browser&apos;s local storage so you can leave and come back
                later on the same device and browser. This draft stays on
                your device — we do not receive it or see it until you
                actually submit the form. You can clear it at any time by
                clearing your browser&apos;s site data for cyvexly.com, or it
                clears automatically once you submit.
              </p>
              <p className="mt-3">
                If analytics is configured, this browser also saves your
                analytics choice in local storage. That preference does not
                contain your contact or project information.
              </p>
              <p className="mt-3">
                The Project Planner also includes a hidden field used only to
                detect automated spam submissions. Legitimate visitors never
                see or fill it in, and it is not used to identify or track
                you.
              </p>
            </div>

            <div id="cookies-and-analytics" className="scroll-mt-28">
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Cookies and analytics
              </h2>
              {analyticsConfigured ? (
                <>
                  <p className="mt-3">
                    Google Analytics 4 is available on this site, but its tag
                    does not load and no data is sent to Google unless you
                    choose &ldquo;Allow analytics.&rdquo; If allowed, it measures
                    page visits and records a successful Contact, Planner, or
                    consultation submission as a lead type. Our analytics code
                    does not send names, email addresses, phone numbers, project
                    notes, or other form contents.
                  </p>
                  <p className="mt-3">
                    Google Analytics may set first-party analytics cookies after
                    you allow it. Advertising storage, advertising personalization,
                    remarketing signals, and Google Signals are disabled in our
                    tag configuration. You can reopen &ldquo;Analytics settings&rdquo;
                    at any time; declining or withdrawing permission removes the
                    Google Analytics cookies this site can identify and stops the
                    tag from loading on the refreshed page.
                  </p>
                </>
              ) : (
                <p className="mt-3">
                  Google Analytics is not currently configured, so this site
                  does not load its tag or set analytics cookies. The dormant
                  integration requires a valid measurement ID and, once
                  configured, will still wait for your explicit permission
                  before loading.
                </p>
              )}
              <p className="mt-3">
                Google Search Console ownership verification, when configured,
                uses site metadata and does not add a visitor tracking script.
                We do not use advertising pixels on cyvexly.com.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Fonts and other assets
              </h2>
              <p className="mt-3">
                The typefaces on this site are bundled and served from our
                own hosting at build time, so your browser does not make a
                live request to a third-party font provider when you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Hosting and technical logs
              </h2>
              <p className="mt-3">
                This site is hosted on a third-party web hosting platform.
                Like most hosting providers, ours may generate standard
                technical logs (such as IP address, request time, and
                requested page) for security, reliability, and abuse
                prevention, separate from anything you submit through our
                forms. Our server also reads a form-submission IP address only
                for the short-lived rate limit described above. Form fields are
                sent in request bodies, not page URLs, and our application does
                not intentionally write their contents to debug logs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                How we use what you send us
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  To respond to your question or project inquiry.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  To prepare a scope recommendation, proposal, or agreement if
                  you want to move forward.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-emerald" />
                  To keep records reasonably needed for our business and
                  legal obligations.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your information, and we do not use it for
                marketing you did not ask for. Checking the consent box on a
                form only confirms you would like us to reply about that
                submission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Payment information
              </h2>
              <p className="mt-3">
                We do not currently collect payment information anywhere on
                this site, and no payment method is active for public use.
                Cyvexly has selected Stripe Invoicing for provider-hosted
                invoices after a signed agreement. If the Owner later verifies
                and activates the account, payment details for an offered ACH
                bank debit or card payment will be entered directly with
                Stripe, never typed into a form on cyvexly.com. Cyvexly will not
                store raw card or bank details on this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                How long we keep it
              </h2>
              <p className="mt-3">
                Inquiry emails and related project records may remain in our
                email and provider systems while reasonably useful for the
                business relationship and any legal or tax obligations. We are
                preparing an operational retention schedule with a proposed
                review of inactive inquiries after 12 months; that review is not
                yet an automatic deletion schedule or guarantee. Contact us if
                you would like us to review or delete records we hold about you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Your choices
              </h2>
              <p className="mt-3">
                Email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cyber-blue hover:text-[#0b4fb0]"
                >
                  {siteConfig.email}
                </a>{" "}
                to ask what information we hold about you, to correct it, or
                to request that we delete it. We will respond within two
                business days.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Children&apos;s privacy
              </h2>
              <p className="mt-3">
                This site is intended for business owners and adults seeking
                web design services. It is not directed at children under 13,
                and we do not knowingly collect information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Changes to this policy
              </h2>
              <p className="mt-3">
                If how we collect or use information changes — for example,
                activating a payment provider or expanding analytics — we will
                update this page and its effective date before that change goes
                live.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-midnight-slate">
                Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy: email{" "}
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

# Cyvexly App Debt

## Open

1. **About page is authorized but not built.** Owner direction `2026-09-04-14`
   supersedes the prior founder-identity blocker. The launch About page is
   studio-led: publish no personal founder name or portrait, use the existing
   Cyvexly logo/brand treatment, and implement the reviewable studio-origin
   draft in vision §6.8. Do not invent a person, biography, pronouns, team, or
   photo. Reintroduce About navigation only when the route is complete and
   verified.
2. **Production domain is confirmed; the account-bound DNS/Render connection
   remains open. Round 29 closed the reachable code-side metadata gap.**
   The Owner confirmed `cyvexly.com`. The domain still needs Render custom-
   domain setup, DNS replacement of the Namecheap parking destination, HTTPS
   verification, root/`www` canonical behavior, and public route proof —
   these require account access this Builder does not have.
   **Round 29 update:** `metadataBase` is now set to `https://cyvexly.com` in
   `src/app/layout.tsx`, and a real `src/app/sitemap.ts` (App Router
   `MetadataRoute.Sitemap` special file) now enumerates all 17 built public
   routes (static pages plus every service-detail and case-study slug) with
   the production origin. Verified via a real production `pnpm run build`:
   the generated `.next/server/app/sitemap.xml.body` lists all 17 absolute
   `https://cyvexly.com/...` URLs, and `.next/server/app/index.html`'s baked
   `og:image`/`twitter:image` meta tags now resolve to
   `https://cyvexly.com/opengraph-image?...` instead of the previous
   `http://localhost:3000` fallback — the long-standing domain-blocked
   `metadataBase` warning is gone from the build output. Canonical
   `rel="canonical"` link tags per-route and staged indexing behavior
   (`NEXT_PUBLIC_SITE_INDEXABLE`, unchanged and still defaulting to
   no-index) remain open follow-ups; robots.txt already gates on the same
   env var and needed no change. This closes the code-only portion of item 2;
   the DNS/Render account connection is still the real remaining blocker.
3. **Privacy Policy and Website Terms are authorized but need the exact legal
   entity name.** The Owner confirmed an LLC based in Indiana, United States,
   serving the United States only at launch. Draft `/privacy` and `/terms`
   around those facts and the technologies actually used. The Owner has not
   supplied the exact registered LLC name; verify it before final publication,
   invoices, or agreements. Keep Website Terms separate from the client project
   agreement and route legal copy to the Owner for review.
4. **§4.12 Outcome Reachability Check — Project Planner (Chunk 3)
   email-delivery mechanism.** Performed round 3, before opening Chunk 3,
   per the round-2 handoff's explicit recommendation. **Round 4 update:**
   the separable, authorized part of this item (the Planner's UI/state/
   validation) is now built and verified at `/start` — see
   `CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report. The blocked part described
   below (a real automatic confirmation email sent *from* Cyvexly) is
   unchanged and still needs both authorizations named here. The Planner
   currently submits via the same `mailto:` interim bridge as Contact,
   explicitly labeled in the UI as not satisfying this requirement.
   - **Required outcome (vision §6.9):** on Planner submit, (a) Cyvexly
     receives the complete structured answers, and (b) the prospect
     automatically receives a confirmation email summarizing their own
     answers, sent *from* Cyvexly — not something the prospect must send
     themselves.
   - **Normal handling for this class of problem:** a Next.js Route
     Handler (server-side `app/api/.../route.ts`) that calls a
     transactional email API (e.g., Resend, Postmark, SendGrid, AWS SES)
     to send both the internal notification and the prospect
     confirmation. This is the standard pattern for a dynamic Next.js app
     (not a static site) needing server-sent email, and is the strongest
     departure-justified alternative to a client-only mechanism precisely
     because the outcome requires mail sent *by* the server, not the
     visitor's own mail client.
   - **Actual platform/constraints:** the app is Next.js on (per vision
     §15) a Render web service — capable of running server routes, so the
     pattern is technically compatible. No credential capability is
     recorded for any email-delivery provider (`CYVEXLY_TOOLS_AND_
     CAPABILITIES.md`).
   - **Verified reachability:** the domain is now confirmed as `cyvexly.com`,
     but end-to-end delivery still requires a chosen business-inbox and
     transactional-email provider, authorized credentials, DNS-based sender
     verification (SPF/DKIM), and real receipt/confirmation proof.
   - **What would falsify this:** discovering the deploy platform includes
     a zero-credential outbound-email primitive that needs no third-party
     account or domain verification — not found; every mainstream
     transactional-email path requires a provider account at minimum, and
     reliable delivery additionally requires domain verification.
   - **Classification:** reachable after provider/account authorization,
     credential configuration, and sending-domain verification; not something
     a Builder may substitute with a fabricated or silently-scoped-down path.
   - **Separable authorized work that remains reachable now (not
     blocked):** the Planner's UI — nine-step form, progress indicator,
     per-step validation, conditional questions, review/summary step —
     needs no email backend to build and verify (content/state/interaction
     only). The interim zero-authorization submit mechanism already
     proven on the Contact page (round 2's `mailto:` bridge) can serve
     `/start` too, but must be documented as not fulfilling the "automatic
     confirmation email from Cyvexly" requirement — it only lets the
     *visitor's own* mail client send a notification to Cyvexly, exactly
     like Contact. Route to the Owner: which business-inbox and transactional
     email provider to authorize, and enter its credential securely in Render.
   - **Recommendation:** the next Builder opening Chunk 3 should build the
     full Planner UI/state/validation now as the coherent authorized
     slice, wire submission to the same `mailto:` interim pattern as
     Contact with the limitation stated in this entry, and leave the real
     transactional-email wiring as an explicitly routed follow-up once
     both the domain and an email-provider authorization exist — not
     invent or silently downgrade the "sent from Cyvexly" requirement.
   - **Round 4 update — a real, honest limitation of the interim bridge
     for a form this size, not a new blocker.** Built round 4: the
     Planner's `mailto:` submission (`/start`) encodes the entire
     nine-step answer summary into the `mailto:` URL itself, unlike
     Contact's single short message field. A thoroughly answered
     submission (long text in several open-ended fields: business
     description, current problems, sites admired, open notes, etc.)
     could plausibly produce a `mailto:` URL long enough to hit a
     mail-client or OS protocol-handler length limit on some platforms —
     not measured precisely this round (no clean way to intercept
     `window.location.href` assignment for measurement without
     triggering a real OS-level mail-client handoff, which this round
     deliberately avoided — see `CYVEXLY_ACTIVE_CHUNK.md`'s round-4
     report). This has no clean fix within the current no-backend
     constraint: truncating the body risks silently dropping real
     prospect answers, which is worse than the rare failure case it
     would prevent. The real fix is the same one already tracked above —
     a server-side email route once authorized, which sends the full
     structured data directly rather than round-tripping it through a
     URL. Not a new blocker on opening Chunk 3 or building the Planner
     (Contact already accepted this class of interim-bridge limitation),
     but worth the next Builder or Owner knowing before treating the
     `mailto:` bridge as a durable solution rather than the explicitly
     temporary one it's labeled as in the UI.

## Resolved round 29

- **Public contact identity replaced sitewide.** `src/lib/site-config.ts`'s
  `siteConfig.email` changed from the stale `hello@cyvexly.com` to the
  Owner-confirmed `design@cyvexly.com`; added `phoneDisplay` (`"(317)
  572-5780"`) and `phoneHref` (`"tel:+13175725780"`). Since Contact,
  Planner, and the footer all read `siteConfig.email` rather than a
  hardcoded string, the change propagates automatically. Added the new
  phone as a visible `tel:` link next to email on `/contact` (`src/app/
  contact/page.tsx`) and in the footer's Contact column (`src/components/
  site-footer.tsx`). Verified in the real production build output
  (`.next/server/app/contact.html`, `footer` markup on every page): both
  `design@cyvexly.com` and `tel:+13175725780` / `(317) 572-5780` render
  correctly; zero remaining `hello@cyvexly` references anywhere in built
  HTML (grep-verified).
- **United States-only truth audit — "worldwide"/international-market and
  unsupported payment-method claims removed.** Owner direction
  `2026-09-04-14` requires removing stale worldwide/international language
  and any claim that a specific payment method is presently active before a
  provider is authorized (vision §8 is explicit: "the public site must not
  state or imply that a specific payment method is presently operational").
  A repo-wide grep for `worldwide`, `international`, and specific payment
  brand names (`Venmo`, `PayPal`, `Apple Pay`, `Google Pay`, `ACH`, `bank
  wire`, `installment`) found six worldwide/international-market
  occurrences and three payment-method-claim occurrences across
  `src/lib/site-config.ts` (Home/FAQ preview line, the FAQ library's
  "International clients" category, `pricingFaq`, and `faqLibrary`'s
  "Pricing & payment" category), `src/app/page.tsx` and
  `src/app/opengraph-image.tsx` (both had the same "Available worldwide"
  hero/OG line), `src/components/site-footer.tsx` ("Remote & worldwide"),
  and `src/app/pricing/page.tsx` (an inline payment-methods paragraph
  duplicating the FAQ claim). All were rewritten to state United
  States-only availability truthfully and to describe the payment-method
  decision honestly as pending provider selection — proposals/invoices will
  state exactly which methods are active once a provider is authorized, and
  no payment is ever requested before a signed agreement and invoice. The
  FAQ library's "International clients" category was renamed "Service area
  & time zones" with its first question/answer rewritten to state
  Indiana/United States-only service rather than removed outright, since the
  time-zone-coordination question underneath it remains accurate and useful.
  Re-verified via the real production build: zero `worldwide` or
  `hello@cyvexly` matches remain in any generated route's HTML.
- **`metadataBase` and `sitemap.xml` closed** — see item 2 above, Round 29
  update.
- **Verification:** `pnpm exec tsc --noEmit`, `pnpm run lint`, and
  `pnpm run build` (24 routes including the new `/sitemap.xml`) all pass
  clean. This unattended scheduled-task session cannot open the visible
  in-app Browser (dev-server preview is blocked for unattended sessions —
  see the tool's own refusal message), so visual/rendered proof relies on
  the real production build's generated static HTML/XML output rather than
  a live screenshot; the next attended Builder round should still open the
  public Render site to confirm the same result visually.
- **Not touched this round:** the About page (item 1), Privacy/Terms (item
  3), the real server-side email delivery path (item 4), and Chunk 5's
  domain/DNS, legal, analytics, and QA workstreams remain open. This round
  is one bounded workstream (contact-identity truth + metadata/sitemap), not
  a claim that Chunk 5 is complete.

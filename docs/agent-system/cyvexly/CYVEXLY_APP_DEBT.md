# Cyvexly App Debt

## Open

1. **Production domain is confirmed; the account-bound DNS/Render connection
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
   env var and needed no change. This closes the code-only portion of item 1;
   the DNS/Render account connection is still the real remaining blocker.
2. **§4.12 Outcome Reachability Check — Project Planner (Chunk 3)
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

## Resolved round 32

- **Content-Security-Policy header added — with a real reachability
  correction, not the nonce recipe originally planned.** The open item this
  resolves (as it read entering this round) suggested a nonce-based
  `script-src` via middleware, the standard Next.js docs recipe. Built it
  first
  (`src/proxy.ts` — Next.js 16 renamed the `middleware.ts` convention to
  `proxy.ts`; the build's own deprecation warning caught this before it
  shipped under the old name), then verified against a real running
  `next start` production server rather than assuming the recipe would just
  work. It would have **silently broken hydration**: most routes here
  prerender statically at build time, so there is no per-request value
  available to nonce Next's own inline hydration scripts. The real generated
  HTML's `self.__next_f.push(...)` scripts ship with no `nonce` attribute at
  all, and one serialized script prop literally reads
  `"nonce":"$undefined"` — under `'strict-dynamic'`, a spec-compliant browser
  refuses every un-nonced inline script, which is nearly all of them on a
  static page. This is exactly the failure mode this item already warned
  about ("getting this wrong silently breaks hydration"); caught by testing
  before shipping, not discovered after.
  Corrected to a static CSP with no middleware/proxy file: added a
  `Content-Security-Policy` entry to `next.config.ts`'s existing
  `securityHeaders` array — `default-src 'self'`, every directive locked to
  `'self'` except `script-src`/`style-src` (`'unsafe-inline'`, required by
  the static-rendering architecture — a real, documented trade-off, not an
  oversight) and `img-src` (adds `blob: data:` for `next/image`/
  `ImageResponse`). No third-party origins are permitted anywhere in the
  policy, consistent with round 31's grep finding that the site has none.
- **Verification:** `tsc --noEmit`, `lint`, and `build` (27 routes, zero
  warnings) all pass. Started the actual production server (`next start`)
  and `curl`ed `/` (static), `/about` (static), and `/start` (the one
  dynamic route) — identical CSP header present on all three via real HTTP
  responses. Opened the real in-app Browser against that running server:
  Home renders with zero console errors; on `/start` (the most
  JS-interactive route — a nine-step client-state form) actually typed into
  a field and clicked "Continue →" — the form advanced to step 2 with new
  fields rendered and zero console errors, proving hydration and
  client-side event handlers work under the policy rather than just that
  pages load.

## Resolved round 31

- **Release-QA sweep across all 27 routes now that About/Privacy/Terms
  exist.** No round had looked at the whole site together since those three
  pages landed (round 30). Verified: `tsc --noEmit`/`lint`/`build` all clean
  (27 routes, zero warnings — the historical `metadataBase` warning is
  confirmed gone); a Node script cross-checked every internal `href` in the
  generated HTML against the actual generated route set — zero broken
  internal links (the one non-route hit, `/start`, is the intentionally
  dynamic Planner route, not a defect); `sitemap.xml` lists all 17 static/
  SSG routes including `/about`, `/privacy`, `/terms`; grepped generated HTML
  for `worldwide`, `hello@cyvexly`, `founder` (as a claim, not the honest
  "no founder mythology" disclosure line), and named payment brands — none
  found; footer `/privacy` and `/terms` links present on every generated page
  except Next's generic `_global-error` fallback (expected, has no shared
  layout). Used the real in-app Browser (this session type can composite/
  screenshot, confirmed again after round 30) to visually check About/
  Privacy/Terms at 375px/768px/1440px — no horizontal overflow at any width,
  hamburger nav correct at 768px (below the `lg` breakpoint), mobile menu
  opens via a real dispatched click and lists all expected links including
  About/Privacy/Terms/design@cyvexly.com/tel:+13175725780. Confirmed
  `noindex, nofollow` still present on the three new pages, consistent with
  every other page's staged-release gate. No defects found in the existing
  three pages.
- **Added baseline HTTP security headers (vision §17 item 10's "security
  headers" QA requirement) — reachable, no Owner gate.** `next.config.ts`
  had no `headers()` function at all. Added `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (denies camera/microphone/geolocation/payment/usb and
  disables `interest-cohort`, consistent with the Privacy Policy's "no
  tracking" claims), and `Strict-Transport-Security` (`max-age=63072000;
  includeSubDomains; preload`) applied to every route. CSP is deliberately
  not included yet — see the new "Open" item 3 above. Verified via a real
  `fetch()` against the running dev server that all five headers are present
  on the actual response (not just declared in config), then reloaded the
  Home page and confirmed it still renders correctly with zero new console
  errors (the only console entries are dev-mode HMR WebSocket messages,
  unrelated to the headers change and absent from a production build).
  `tsc --noEmit`, `lint`, and a full production `build` (27 routes) all pass
  after the change.

## Resolved round 30

- **About page built and verified.** Owner direction `2026-09-04-14`
  authorized the studio-led launch treatment (no personal founder name or
  portrait). Built `/about` (`src/app/about/page.tsx`) with every element
  vision §6.8 requires: the Cyvexly signal mark as the principal identity
  image (no portrait), the approved studio-origin draft verbatim, five short
  values (`aboutValues` in `src/lib/site-config.ts`: Clarity, Originality,
  Practicality, Ownership, Continued care), working style/remote-availability
  copy, an honestly-worded collaborator model (independent studio, no
  in-house team invented, collaborators disclosed transparently when used),
  a brief technology mention (React/Next.js, chosen for compatibility, not
  marketing), current availability/response-time language, and a closing CTA
  to `/start`. Restored the "About" link to `primaryNav` and
  `footerNav.studio` now that the route is real and verified (was
  deliberately removed from navigation in round 22 while unbuilt).
- **Verification:** `pnpm exec tsc --noEmit`, `pnpm run lint`, and
  `pnpm run build` (25 routes) all pass clean; grepped the generated
  `.next/server/app/about.html` for every required content block (origin
  story, all five value names, working-style list, capability list, CTA) —
  all present. Heading hierarchy measured directly (`h1` → `h2` → `h3`, no
  skipped level). **Stronger proof than prior rounds' documented limitation:**
  this session's in-app Browser pane *can* composite and screenshot
  (`computer{action:"screenshot"}` succeeded after one retry, repeatedly) —
  unlike the hard limitation recorded in `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  for the historical Codex-based session type. Started the dev server
  manually (`preview_start` with a bare `{name}` still refuses in this
  unattended scheduled session, same as before) and attached via
  `preview_start({url})`, then took real screenshots at 375px (mobile),
  ~785px (default pane width, hamburger nav confirmed below `lg`), and
  1440px (full desktop nav with "About" present, two-column layout
  confirmed) — no horizontal overflow, no clipping, correct contrast at any
  width. One manually-emulated-1440px scroll position produced a blank
  screenshot on retry despite a correct, fully-populated accessibility tree
  (`read_page`) and zero console errors at that exact position — treated as
  a transient compositing quirk of the emulated-viewport path (reproduced
  once, did not reproduce at the pane's native width for the same content),
  not a product defect; not worth further session time chasing per the
  non-converging-loop guidance. Stopped the manually-started dev server
  processes before exiting (role-owned port 5173 cleanup).
- **Privacy Policy and Website Terms drafted and verified.** Built
  `/privacy` and `/terms` (`src/app/privacy/page.tsx`,
  `src/app/terms/page.tsx`), grounded in Indiana/United States operations and
  the site's *actual* current behavior rather than generic template
  language: verified in source first that the site has no live analytics,
  no cookies, no third-party tracking scripts, and self-hosts fonts (no
  live Google Fonts request); that Contact and the Project Planner both
  submit via a `mailto:` link (data goes device-to-inbox, no server-side
  storage today) with the Planner's `localStorage` draft-save and honeypot
  described accurately; and that no payment is collected anywhere on the
  site. Terms sets Indiana governing law and explicitly separates these
  public Website Terms from the future signed client project agreement, per
  vision §6.12 and Owner direction `2026-09-04-14` item 5. Both pages carry
  a visible "Draft under review" notice stating the exact registered LLC
  legal name is still pending Owner confirmation and that final Owner
  review has not happened yet — **do not remove that notice or treat either
  page as final/publishable until the Owner supplies the exact registered
  entity name and reviews the copy.** Footer legal links (already pointing
  to `/privacy` and `/terms` since round 1) now resolve instead of 404ing.
  Verified: `tsc`/`lint`/`build` clean (27 routes), `h1`→`h2`-only heading
  hierarchy on both pages (measured, no skip), both pages carry `noindex`
  consistent with every other page's staged-release gate, and real in-app
  Browser screenshots at 375px/785px/1440px show no overflow and correct
  contrast on both pages.
- **Found and fixed: `sitemap.ts` didn't list the three new routes.** After
  committing About/Privacy/Terms, re-checked the actual generated
  `sitemap.xml` (not just that the build succeeded) and found `/about`,
  `/privacy`, and `/terms` were missing from `src/app/sitemap.ts`'s
  `staticRoutes` array — they existed and were linked in navigation, but
  would have been invisible to search engines relying on the sitemap. Fixed
  by adding all three; re-verified `.next/server/app/sitemap.xml.body` lists
  all 20 static+dynamic routes. Separate commit (`1ea04eb`).
- **Environment fix, documented for the next agent:** this Windows host's
  Node.js 24.19.0 install
  (`C:\Users\Tcraf\AppData\Local\Programs\NodeJS\node-v24.19.0-win-x64`) and
  the global `pnpm` shim (`%APPDATA%\npm`) are registered in the **User**
  PATH environment variable, but the shell processes this tool session
  spawns do not inherit that PATH (`node`/`pnpm` were both "not recognized"
  until fixed). Workaround used this round: prepend both directories to
  `$env:Path` at the start of each PowerShell tool call that needs
  node/pnpm/next (per-call, since shell state does not persist between
  calls in this harness). This is a session/harness PATH inheritance gap,
  not a missing install — do not reinstall Node or edit the real PATH
  variable to "fix" it.

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
- **`metadataBase` and `sitemap.xml` closed** — see item 1 above, Round 29
  update.
- **Verification:** `pnpm exec tsc --noEmit`, `pnpm run lint`, and
  `pnpm run build` (24 routes including the new `/sitemap.xml`) all pass
  clean. This unattended scheduled-task session cannot open the visible
  in-app Browser (dev-server preview is blocked for unattended sessions —
  see the tool's own refusal message), so visual/rendered proof relies on
  the real production build's generated static HTML/XML output rather than
  a live screenshot; the next attended Builder round should still open the
  public Render site to confirm the same result visually.
- **Not touched this round:** the About page and Privacy/Terms drafts (both
  built round 30, see above), the real server-side email delivery path
  (item 2), and Chunk 5's domain/DNS, analytics, and QA workstreams remain
  open. This round is one bounded workstream (contact-identity truth +
  metadata/sitemap), not a claim that Chunk 5 is complete.

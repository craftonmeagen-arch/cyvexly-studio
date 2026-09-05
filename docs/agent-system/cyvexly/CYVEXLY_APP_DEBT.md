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
   `metadataBase` warning is gone from the build output. **Round 33:** added
   `alternates: { canonical: ... }` to the root layout and all 13 static/
   dynamic route metadata exports (every `export const metadata`/
   `generateMetadata` in `src/app`), closing the last code-only follow-up
   named above. Staged indexing behavior (`NEXT_PUBLIC_SITE_INDEXABLE`)
   is unchanged and still defaults to no-index; robots.txt already gates on
   the same env var. This closes the code-only portion of item 1 completely;
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

## Resolved round 36

- **Confirmed public Render adoption directly against the live production
  preview, not just build output or a local/isolated-review server.**
  Several rounds' entries above (32-35) note "public Render adoption ...
  remain pending" because their own verification only reached a local
  `next start`/dev server or the Auditor's isolated review port — none
  fetched the actual deployed `https://cyvexly-studio.onrender.com` site
  itself. This round did: navigated the real in-app Browser to
  `https://cyvexly-studio.onrender.com/contact` and confirmed via
  `getBoundingClientRect()` on the live page that the email/phone links sit
  at identical x/width with `y:1240.5`/`y:1276.5` (36px gap, no overlap —
  `CYV-IFA-012`'s fix is live in production, not only in the build
  artifact). A same-origin `fetch()` from that live page confirmed
  `<link rel="canonical" href="https://cyvexly.com/contact">` and all 6
  security headers including the exact CSP string, present on the real
  public HTTP response (`x-nextjs-cache: HIT`, confirming it served the
  actual deployed build, not a cold miss). Zero console errors. This
  closes the "public adoption pending" caveat for rounds 31-34's header/
  CSP/canonical/contact-link work — it is confirmed live, not just built.
  Extended the sweep to all 13 public routes plus `/sitemap.xml`,
  `/robots.txt`, and a 404 probe against the same live production origin:
  all return the expected status (200/404), content type, CSP, and HSTS.
  Also confirmed the staged-release gate is genuinely intact in production
  — live `/` carries `<meta name="robots" content="noindex, nofollow">`
  and `/robots.txt` is `Disallow: /` — so the site is not accidentally
  publicly indexable while Chunk 5 remains open.
- **Dispositioned Auditor inbox item `IFA-2026-09-05-R27`** — an
  independent confirmation round (reviewed commit `620ba77`), not a new
  finding: re-verified `CYV-IFA-012` CLOSED via its own real multi-viewport
  CDP screenshots (1440/768/390px, zero collision/overflow), all 20
  routes' canonical tags, all 6 security headers/CSP, and a 32-link
  site-wide crawl with zero broken links — all PASS, matching round 35's
  own conclusions. `tsc --noEmit`/`lint` re-run clean as a sanity check (no
  source touched). Moved to `exchange/processed/`. **This is the second
  consecutive round confirming zero reachable-without-an-Owner-gate
  defects** — see `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-36 entry for
  the recommendation to surface this to the Owner.

## Resolved round 35

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R26`.** Its one finding
  (`CYV-IFA-012` "STILL OPEN") was re-verified against pre-fix commit
  `bdf0263` (round 33's HEAD, before round 34's `0afb789` fix landed) — the
  report itself names that source commit. Confirmed via real DOM measurement
  on the current running app (`getBoundingClientRect()` on both `<a>` tags
  under "Reach us directly": email at `y:233-261`, phone at `y:269-297`,
  identical `x`/width, no overlap) that the fix is genuinely present in
  current `main`. This is stale evidence from a superseded review round, not
  a new or unfixed defect. Moved to
  `website-independent-review/exchange/processed/`.
- **Full release-QA sweep, first since round 31's (3 rounds of narrow code
  changes since: CSP round 32, canonical tags round 33, contact-link fix
  round 34).** `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build`
  (27 routes, zero warnings) all pass clean. Grepped generated
  `.next/server/app/**/*.html` for `worldwide`, `hello@cyvexly`, payment
  brand names (Venmo/PayPal/Apple Pay/Google Pay/ACH/bank wire/installment):
  zero matches. The only `founder` match is the honest "no founder
  mythology" disclosure on `/about`. `sitemap.xml` lists all 20 static/SSG
  routes; `robots.txt` still correctly disallows all (no-index preview gate
  unchanged). Every route has exactly one `<link rel="canonical">`; every
  route has `noindex` except Next's own `_global-error` fallback (expected,
  no shared layout — same as round 31's finding). A Node link-crawl script
  found zero broken internal navigation hrefs (the only non-route matches
  were static asset/preload links and `/`, all valid). Started the real
  production server (`next start --port 5173`) and `curl`ed `/` and
  `/start`: all 6 security headers (including CSP) present and identical;
  `/non-existent-probe-404-check` returns 404; `/sitemap.xml` and
  `/robots.txt` return 200 with correct content types. Drove the real
  in-app Browser against the running server for `/about`: real page text
  and zero console errors confirm genuine rendered content (not a 404),
  contradicting `CYVEXLY_CHUNK_DEBT.md`'s stale item 1 — see that file's
  correction. **No new reachable-without-an-Owner-gate defect found.**
  Chunk 5's remaining scope is unchanged: DNS/domain connection, real
  email-provider delivery, analytics/Search Console ownership, and exact
  LLC name all still require Owner account access or a provider decision.
- **Session/tooling note — this round's in-app Browser pane went from
  composited (real 800×455 screenshots, matching real layout, for the first
  several actions) to `document.visibilityState === "hidden"` /
  `window.innerWidth === 0` partway through the round** (after a
  `computer{action:"scroll_to"}` call, a `resize_window{preset:"desktop"}`
  call, and several `navigate` calls in sequence — exact trigger not
  isolated). `tabs_context` explicitly reported "the Browser pane is
  currently hidden"; `tabs_select` fronting the tab did not restore
  `innerWidth`/visibility. This is the same root-cause family documented in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md` (rounds 1-7): when hidden, the
  renderer's layout/compositor pipeline stops updating, so screenshots
  freeze on a stale frame and layout APIs return 0 — not a product defect.
  Unlike rounds 1-7 (hidden for the entire session) and rounds 29-34 (fully
  composited for the entire session), **this round changed state
  mid-session** — new information for the tools file. Switched to
  `get_page_text`/`read_console_messages`/`javascript_tool`
  (`getBoundingClientRect`/`getComputedStyle`), which the tools file already
  documents as reliable independent of compositing, and which is what
  produced the CYV-IFA-012 re-verification evidence above. A future round
  should keep verifying per-round rather than assuming a fixed state for
  the whole session.
- **Corrected two stale entries in `CYVEXLY_CHUNK_DEBT.md`** (About/Privacy/
  Terms 404 claim, OG-image domain-block claim) that no longer matched
  current source — see that file for the correction and evidence.

## Resolved round 34

- **Fixed `CYV-IFA-012` (Auditor-tracked, open across four consecutive
  external review rounds R22-R25).** `src/app/contact/page.tsx`'s email and
  phone links under "Reach us directly" both used `inline-flex` with no
  block/column wrapper; JSX collapses the whitespace-only text between two
  sibling elements on separate source lines, so the two anchors rendered
  with zero separating space — `design@cyvexly.com(317) 572-5780` — on any
  viewport wide enough to fit both inline (confirmed by the Auditor at
  1440px in all four rounds). Wrapped both `<a>` tags in a
  `<div className="flex flex-col gap-2">` per the Auditor's recommended fix.
  Verified: `tsc --noEmit`, `lint`, and `build` (27 routes) all pass clean;
  grepped real generated `.next/server/app/contact.html` for the two link
  hrefs — confirmed no longer text-adjacent, wrapped in the new flex-col
  container. Also checked `site-footer.tsx`'s own email/phone links (same
  `siteConfig.email`/`phoneHref` source data, so a plausible leftover of the
  same shape) — already each in their own `<li>`, not affected. Opened the
  real dev server in the in-app Browser (this session's screenshot
  compositor is currently functional — see note below) at 1440px, 785px
  (pane default), and 390px: email/phone stack cleanly on separate lines at
  all three, zero console errors, zero horizontal overflow. Stopped the
  manually-started `next start --port 5173` process (and its `next`-binary
  child, the actual port listener) after verification.
- **Session-capability note:** this scheduled/unattended session's in-app
  Browser pane *could* composite and screenshot this round (succeeded after
  one retry, consistent with round 30's finding, inconsistent with the
  original rounds 1-7 hard-limitation record in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`). That file's documented limitation is
  evidently no longer universal for this session type; a future round should
  keep verifying per-round rather than assuming either the old limitation or
  this success is permanent.
- Re-checked for other newly-reachable items: grepped real build output for
  `worldwide`/`hello@cyvexly` (zero matches, still clean from round 29) and
  confirmed `CYV-IFA-005` (metadataBase/OG) remains closed. No other new
  reachable-without-an-Owner-gate defect surfaced in the four unread Auditor
  reports beyond `CYV-IFA-012` — `CYV-IFA-006` (server-side Planner receipt)
  and the DNS/analytics/LLC-name gates all remain genuinely Owner-blocked,
  unchanged from round 33's assessment.

## Resolved round 33

- **Pushed round 32's two local-only commits to `origin/main`** after
  independently re-verifying them this round (`tsc --noEmit`, `lint`,
  `build` all clean) rather than pushing on round 32's own say-so alone —
  `be60862..8c07262` now on `origin/main`.
- **Per-route canonical tags added — closes the last code-only follow-up
  from round 29's item 1.** Added `alternates: { canonical: "/<path>" }` to
  the root layout (`"/"`) and to all 11 static-page metadata exports plus
  both dynamic `generateMetadata` functions (`/services/[slug]`,
  `/work/[slug]`), resolving against the existing `metadataBase`. Verified
  in real production build output: grepped `.next/server/app/**/*.html` for
  `<link rel="canonical"` across the home page, every static route, one
  service-detail route, and one case-study route — all 13 resolve to the
  correct absolute `https://cyvexly.com/...` URL with no duplicates or
  mismatches. `tsc --noEmit`, `lint`, and `build` (27 routes) all pass clean.
  `/start` (the one fully dynamic, non-prerendered route) uses the identical
  code pattern as the verified static/SSG routes and was not independently
  screenshotted this round — same code shape, not a separate unverified
  claim.

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

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_30_ARCHIVE.md` in
round 36 to keep this file under its 30720-byte hot-file cap: the built and
verified About page (`src/app/about/page.tsx`), Privacy Policy and Website
Terms drafts (`src/app/privacy`, `src/app/terms` — both still carry a
"Draft under review" notice pending the exact LLC name and Owner review),
and a fixed `sitemap.ts` omission (About/Privacy/Terms were missing from
`staticRoutes`).

- **Environment fix, documented for the next agent — still an active
  per-session workaround, kept inline rather than archived.** This Windows host's
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

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_29_ARCHIVE.md` in
round 35 to keep this file under its 30720-byte hot-file cap: public
contact-identity replacement (`design@cyvexly.com`/`(317) 572-5780`
sitewide), the United States-only truth audit (removed stale
worldwide/international/payment-method claims), and the code-only
`metadataBase`/`sitemap.xml` fix (see item 1 above).

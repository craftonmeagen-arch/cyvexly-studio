# Cyvexly App Debt

## Resolved round 44

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R35`** — an eleventh
  consecutive independent confirmation (reviewed commit `1de36c3`, round
  42's HEAD, one commit behind round 43's JSON-LD commit), 0 active code
  defects. Re-verifies round 42's Contact/Planner honeypots, the RTL/
  long-name Planner review-step stress test, `CYV-IFA-012` contact-layout
  maintenance across three widths, all 20 routes/canonicals/security
  headers, and live production parity. Moved to `exchange/processed/`.
  `tsc --noEmit`/`lint`/`build` re-run clean before making any change.
- **New angle — FAQPage JSON-LD for `/faq`**, the discoverability follow-up
  round 43 named. Added `faqPageJsonLd` to `src/lib/structured-data.ts`,
  flattening the already-published `faqLibrary` (11 categories, 30 Q&As —
  no new facts) into schema.org `FAQPage`/`Question`/`Answer` entities,
  embedded only on `src/app/faq/page.tsx` alongside the existing sitewide
  `Organization` schema. Verified in real production build output
  (`.next/server/app/faq.html`: both scripts present, `FAQPage` has exactly
  30 `mainEntity` entries with correct first/last question; confirmed
  `index.html`/`contact.html`/`about.html` still carry only `Organization`
  — no leak to other routes) and live via real CDP navigation against a
  production `next start` server on `/faq` and `/`: zero console messages,
  zero network failures, correct 30-entry JSON-LD parse. `tsc`/`lint`/
  `build` all pass clean. Script at
  `docs/agent-system/cyvexly/builder/evidence/round-44-faq-jsonld-check.mjs`.
- **Hot-memory rotation.** Archived rounds 40-41's full `CYVEXLY_ACTIVE_
  CHUNK.md` reports to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md` to
  restore the intended latest-three rotation (§7.14) — 42, 43, 44 stay
  live; live file is now 17057 bytes (cap 30720).
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact `chrome-profile-round44`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.

## Resolved round 43

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R34`** — a tenth
  consecutive independent confirmation (reviewed commit `3bbb879`, round
  41's HEAD, one commit behind round 42's honeypot fix), not a new finding.
  Moved to `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean
  before making any change.
- **New angle — sitewide structured data (JSON-LD), previously entirely
  absent.** Vision §17 names "searchable" as a launch requirement; a grep
  of `src/` for `application/ld+json`/`schema.org` found zero matches.
  Added a schema.org `Organization` JSON-LD block
  (`src/lib/structured-data.ts`, embedded once in `src/app/layout.tsx`)
  using only Owner-confirmed facts already in `site-config.ts`: name, URL,
  logo (`/icon.svg`), phone, email, and `addressRegion: "IN"` /
  `addressCountry: "US"` — no street address or social profiles invented.
  Verified in real production build output (parsed generated
  `<script type="application/ld+json">` from `index.html`, `contact.html`,
  and `services/business-websites.html` — valid JSON, correct fields on
  all three) and live via real CDP navigation against a production
  `next start` server across `/`, `/contact`, `/about`, and
  `/services/business-websites`: zero console errors, zero network
  failures, JSON-LD parses correctly in the real DOM every time. `tsc`/
  `lint`/`build` all pass clean. Script at
  `docs/agent-system/cyvexly/builder/evidence/round-43-jsonld-check.mjs`.
- **Hot-memory drift fix.** `CYVEXLY_ACTIVE_CHUNK.md` had grown to 29313
  bytes (near its cap) because rounds 31-39's full reports were never
  archived once later rounds landed, breaking the intended §7.14
  latest-three rotation for roughly a dozen rounds. Archived verbatim to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`; live
  file is now 18288 bytes with only rounds 40-43 live. Also archived round
  41's full handoff detail to
  `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_41_REPORT.md` to keep
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md` under its own 12288-byte cap after
  adding round 43's entry (now 10271 bytes).
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process tree (verified by exact `chrome-profile-round43`
  `--user-data-dir` command-line match across all child processes),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.

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

## Resolved round 42

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R33`** — a ninth
  consecutive independent confirmation (reviewed commit `46eae51`, round
  40's HEAD), not a new finding. Moved to `exchange/processed/`. `tsc
  --noEmit`/`lint`/`build` re-run clean before making any change.
- **Found and fixed a real defect: the Contact form had no spam/rate
  protection at all**, while the Planner already has a hidden honeypot
  field. Vision §17 item 6 groups "Contact and Planner" together under
  "proportionate accessible spam/rate controls." Reachable now — a
  client-side honeypot needs no backend/credentials/Owner authorization,
  and the Planner's already-accepted pattern is the precedent. Fixed in
  `src/components/contact-form.tsx`: added an identical hidden honeypot
  field (`contact-company-website`) and validation check. Live-verified
  with real CDP mouse clicks against a production server: honeypot filled
  → submission blocked (mailto bridge never fires); honeypot cleared →
  submission works normally (no regression). Same method live-tested the
  **Planner's existing honeypot for the first time** (previously untested
  per round 41): filled → blocked; cleared → works. `tsc`/`lint`/`build`
  all pass clean. Script and results at
  `docs/agent-system/cyvexly/builder/evidence/round-42-honeypot-overflow-*`.
- **New QA angle — RTL/very-long-name overflow in the Planner review
  step.** A ~130-character unbroken string (no spaces) in "Full name" and
  an Arabic RTL name concatenated directly (no separator) with the same
  string in "Company name" — worst case, zero break opportunities at the
  RTL/Latin boundary. Measured at a real 375px width: `document.
  documentElement.scrollWidth` (375) equals `window.innerWidth` (375) —
  **zero horizontal overflow, no defect found.**
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact `chrome-profile-round42`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.

## Resolved round 41

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R32`** — an eighth
  consecutive independent confirmation (reviewed commit `a8c5769`, round 39's
  HEAD, one commit behind round 40's step-focus fix already on `main`), not a
  new finding. Moved to `exchange/processed/`. `tsc --noEmit`/`lint`/`build`
  re-run clean before making any change (no source touched).
- **New QA angle — WCAG 1.4.10 Reflow / 200%-zoom-equivalent, one of round
  40's two named uncovered candidates.** Emulated 320 CSS px (the exact
  1.4.10 threshold) and 640 CSS px (a proxy for a 1280px viewport at 200%
  zoom, using the same width-halving equivalence WCAG 1.4.10's own guidance
  relies on) across 8 marketing routes and all 9 real Planner steps,
  advancing the Planner with genuine CDP mouse clicks on Continue (not just
  static snapshots) at a production server. **Result: 34/34 checks, zero
  horizontal overflow, and the Planner's real step-advancement kept working
  at both narrow widths.** No defect found. Script and result summary at
  `docs/agent-system/cyvexly/builder/evidence/round-41-zoom-reflow-*`.
- **Bonus QA — re-checked round 40's other named candidate: does Back (and
  by extension the progress-rail/edit-link callers) get round 40's
  scroll/focus/live-region fix, since all four call the same shared
  `goToStep()`?** Source read confirmed `goToStep()` is a single function
  used identically by `handleNext`, `handleBack`, `onEdit`, and the progress
  rail, and the fix is a `useEffect` keyed only on `currentStep` — not on
  which caller changed it. Live-verified with a real CDP click on the "←
  Back" button after advancing to step 2 and manually scrolling away from
  the top: scroll reset to 0, focus moved to the step 1 heading, and the
  live region announced "Step 1 of 9: About you". **No defect found** —
  confirms the fix is caller-agnostic as the source structure implies.
  Script at `docs/agent-system/cyvexly/builder/evidence/round-41-back-button-test.mjs`.
- **Ninth consecutive round (35-41, with 39/40 as the only two that found
  real defects) confirms zero reachable-without-an-Owner-gate defects**,
  now also covering WCAG 1.4.10 reflow/zoom. Both candidates round 40 named
  as untested are now closed. See `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s
  round-41 entry for remaining untried QA angles.
- Cleaned up: stopped the owned `next start` production server (verified
  real listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the
  owned headless Chrome process tree (verified by exact
  `chrome-profile-round41` command-line match before touching anything),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.

## Resolved round 40

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R31`** — a seventh
  consecutive independent confirmation (reviewed commit `f1a264f`, round 38's
  HEAD — one commit behind round 39's skip-link fix already on `main`), not a
  new finding. Moved to `exchange/processed/`.
- **New QA angle — screen-reader semantics on the Planner's step-advance
  flow**, one of the candidates round 39 named as uncovered. Source review
  found Contact's and the Planner's per-field validation (`aria-invalid`,
  `aria-describedby`, `role="alert"`) already solidly correct — no defect
  there. Live-tested the *successful* step-advance path (not validation
  failure) with real synthetic mouse clicks via CDP against a **production**
  build/server (the in-app Browser pane's `computer`/screenshot path proved
  intermittent mid-round — screenshot timeouts matching the documented
  "pane hidden" pattern — and an initial plain-JS `.click()` test gave a
  false-positive "focus lost" reading because `document.hasFocus()` is false
  in that pane; real headless Chrome has genuine document focus, so it is the
  trustworthy instrument for this claim). **Found and fixed a real defect:**
  `goToStep()` called `window.scrollTo({top:0})` synchronously before React
  committed the new step's DOM, so Chrome's scroll-anchoring silently
  overrode the intended top-scroll; focus also never left the Continue/Back
  button. Confirmed before fix: `scrollY` settled at 721 (not 0), focus
  stayed on the button, and no `aria-live` region announced the change.
  Fixed in `src/components/planner/planner-form.tsx`: moved the scroll+focus
  into a `useEffect` keyed on `currentStep` (guarded by a `previousStepRef`
  comparison, not a one-shot flag, so it stays correct under React Strict
  Mode's dev-only double-invoke of mount effects), deferred one
  `requestAnimationFrame` past commit, focusing the step `<h2>` with
  `preventScroll: true` so the focus call doesn't re-fight the scroll, and
  added a `role="status" aria-live="polite"` sr-only announcer ("Step 2 of 9:
  The business"). Verified after fix: `scrollY` reaches `0`, focus lands on
  the new heading, live region fires. `tsc`/`lint`/`build` all pass clean.
  Full before/after evidence and the reusable CDP test script are at
  `docs/agent-system/cyvexly/builder/evidence/round-40-planner-step-focus-*`.
- Cleaned up: stopped the owned `next start` production server and the owned
  headless Chrome process tree (verified by exact `--user-data-dir` command-
  line match before touching anything), removed the temporary Chrome profile
  directory under the OS temp scratchpad root.

Rounds 36-39 detail archived to docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_36_39_ARCHIVE.md in round 43 to keep this file under its 30720-byte hot-file cap: skip-to-main-content fix (round 39), full-site console/network diagnostics sweep (round 38), performance spot-check (round 37), and live production-deployment parity confirmation (round 36).

## Resolved round 35

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_35_ARCHIVE.md` in
round 42 to keep this file under its 30720-byte hot-file cap: dispositioned
`IFA-2026-09-05-R26` (stale `CYV-IFA-012` re-verification), a full
release-QA sweep (contrast, worldwide/payment-claim grep, sitemap/robots,
canonical tags, link crawl, security headers, live `/about` render), an
in-app-Browser-pane hidden-state tooling note, and corrections to two stale
`CYVEXLY_CHUNK_DEBT.md` entries.

## Resolved rounds 32-34

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_32_34_ARCHIVE.md` in
round 40 to keep this file under its 30720-byte hot-file cap: `CYV-IFA-012`
contact-link collision fix (round 34), per-route canonical tags (round 33),
and the corrected static Content-Security-Policy header (round 32, after
catching that the textbook nonce recipe would have broken hydration on this
mostly-static route architecture).

Round 31 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_31_ARCHIVE.md` in round 38
(security headers added; first full 27-route release-QA sweep).

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

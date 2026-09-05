# Cyvexly App Debt

## Resolved round 49

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R40`** — a sixteenth
  consecutive independent confirmation (reviewed commit `1c64d81`, round
  47's HEAD, one commit behind round 48's raster-icon commit), 0 active
  code defects. Moved to `exchange/processed/`.
- **New angle — `src/app/error.tsx` route-segment error boundary.** No
  route had one; an unhandled render error previously fell through to
  Next's default unstyled generic error screen. Same special-file family
  as `not-found.tsx`; reuses `SiteHeader`/`SiteFooter`/`ButtonLink`.
- **New angle — `src/app/global-error.tsx`** for a root-layout-level error
  (which `error.tsx` cannot catch). Renders its own `<html>`/`<body>` per
  Next's documented convention; dependency-free (inline styles only).
- **New angle — `viewport.themeColor`/`colorScheme`** added to the root
  layout metadata (`#0f66e0`, `light`) — no invented facts, reuses the
  existing brand-blue token.
- Verified with a temporary `force-dynamic` throwaway route (deleted before
  commit, confirmed clean via a full re-typecheck/re-lint/re-build) against
  a real `next start` server: sanitized error digest in the SSR shell, real
  in-app-Browser navigation showed the actual `error.tsx` UI text with the
  digest as the only console error; `theme-color`/`color-scheme` meta
  confirmed live via `document.querySelector`; Home/`/faq`/manifest/
  apple-icon/icons all still `200` with zero regressions afterward.
- `tsc`/`lint`/`build` all pass clean. Committed and pushed.
- Archived round 46's full `CYVEXLY_ACTIVE_CHUNK.md` report and rounds 46
  and 47's full `CYVEXLY_NEXT_BUILDER_HANDOFF.md` closeouts to restore the
  intended latest-three rotation (§7.14) in both files.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via the port's actual listener before stopping), closed the owned
  Browser-pane tab.

## Resolved round 48

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R39`** — a fifteenth
  consecutive independent confirmation (reviewed commit `727d809`, round
  46's HEAD, one commit behind round 47's Apple touch icon commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — added raster 192×512 PNG manifest icons**
  (`src/app/icons/[size]/route.tsx`), closing the item round 46/47 named as
  open: the Web App Manifest was SVG-only, and Android's "Add to Home
  Screen" install flow has historically preferred PNG at these standard
  sizes. Same `next/og` `ImageResponse` technique as `apple-icon.tsx`,
  statically generated at build time via `generateStaticParams` restricted
  to exactly these two sizes (any other size 404s at runtime). No invented
  facts — reuses the existing C/Y mark and brand-blue token. Verified:
  production build emits correctly-sized real PNGs at both sizes (opened
  locally, clean/centered/unclipped); a real `next start` server serves
  both `200 image/png` with the exact built byte lengths; an unregistered
  size correctly 404s; the live manifest JSON lists all three icons;
  `apple-icon`/`icon.svg` unchanged; a real in-app-Browser screenshot of
  Home shows zero visual regression, zero console errors.
- **New angle — fixed a real print-legibility defect.** No route had any
  `@media print` CSS; this site's light-text-on-dark-background sections
  print invisible under browsers' default no-background-printing behavior.
  Added `print-color-adjust: exact` (`globals.css`, MDN's documented fix).
  Verified via CDP `Page.printToPDF`: `printBackground:false`/`:true`
  produced identically-sized PDFs (~41.7MB each), proving backgrounds
  embed regardless of the toggle; no screen-mode regression.
- `tsc`/`lint`/`build` all pass clean. Committed (`8d959f0`, `90ea41e`) and
  pushed.
- Cleaned up: stopped the owned `next start` server and headless Chrome
  process tree (verified real listener PID via the port's actual listener,
  not `Start-Process`'s returned PID — see the new caveat in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`; Chrome verified by exact
  `chrome-profile-round48` `--user-data-dir` match), closed the owned
  Browser-pane tab. The temporary Chrome profile directory under the OS
  temp root could not be removed this round (Windows reported the path
  locked after process exit despite no matching process remaining) — left
  in place as a disposable OS-temp artifact; the next round should retry
  `Remove-Item` on `%TEMP%\chrome-profile-round48` and report if it
  persists.

## Resolved round 47

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R38`** — a fourteenth
  consecutive independent confirmation (reviewed commit `140bb0b`, round
  45's HEAD, one commit behind round 46's manifest/cleanup commit), 0
  active code defects. Re-verifies BreadcrumbList JSON-LD structure/scoping
  on all 5 service-detail and 3 case-study routes, both Contact/Planner
  honeypots, WCAG 1.4.10 reflow, canonicals, security headers, and live
  production parity. Moved to `exchange/processed/`.
- **New angle — added an Apple touch icon** (`src/app/apple-icon.tsx`),
  closing a gap the Web App Manifest (round 46) doesn't cover: iOS Safari's
  "Add to Home Screen" icon, which ignores the manifest's icon list and
  needs its own `<link rel="apple-touch-icon">`. Built with the same
  `next/og` `ImageResponse` technique as `opengraph-image.tsx` — 180×180
  PNG, brand-blue background, existing C/Y mark in white. No invented
  facts. Verified: production build emits `/apple-icon` and the correct
  `<link rel="apple-touch-icon">` tag; the generated PNG opened cleanly
  (round-3/7's proxy-image technique); a real `next start` server serves
  it `200 image/png`; a real in-app-Browser screenshot of Home confirms
  zero visual regression, zero console/network errors.
- `tsc`/`lint`/`build` all pass clean. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173` before
  stopping), closed the owned Browser-pane tab.

## Resolved round 46

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R37`** — a thirteenth
  consecutive independent confirmation (reviewed commit `12e43a7`, round
  44's HEAD, one commit behind round 45's BreadcrumbList commit), 0 active
  code defects. Re-verifies FAQPage JSON-LD scoping, both Contact/Planner
  honeypots, WCAG 1.4.10 reflow on `/faq`, canonicals, security headers, and
  live production parity. Moved to `exchange/processed/`.
- **New angle — removed 5 dead `create-next-app` scaffold assets**
  (`public/{next,vercel,window,globe,file}.svg`), confirmed unreferenced via
  a full source grep. These were publicly served at e.g.
  `cyvexly.com/vercel.svg` on the live launched domain — unrelated
  third-party branding, not a Cyvexly asset. Verified post-build: all five
  404 on a real production server; `icon.svg` still 200.
- **New angle — added a Web App Manifest** (`src/app/manifest.ts`), a
  routine launch-QA item the site had never covered. Uses only
  already-confirmed facts (`site-config.ts` name/tagline, shipped brand
  color tokens) and the existing `icon.svg` — no invented facts, no new
  raster assets generated this round. Verified: production build emits
  `/manifest.webmanifest` with correct content; `index.html` links it; a
  real `next start` server serves it `200 application/manifest+json`; a
  real in-app-Browser screenshot of Home confirms zero visual regression,
  zero console/network errors.
- `tsc`/`lint`/`build` all pass clean. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping), closed
  the owned Browser-pane tab.

Rounds 44-45 full detail are archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_44_45_ARCHIVE.md` (moved there
round 49 to keep this file under its 30720-byte hot-file cap): round 45
added BreadcrumbList JSON-LD for service-detail/case-study routes; round 44
added FAQPage JSON-LD for `/faq`.

Round 43 detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_43_ARCHIVE.md` (moved there
round 48 to keep this file under its 30720-byte hot-file cap). Round 43
found the site had no structured data at all and added sitewide
Organization JSON-LD.

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

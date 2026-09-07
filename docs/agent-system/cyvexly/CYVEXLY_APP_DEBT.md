# Cyvexly App Debt

## Round 82 — real Privacy Policy truth-accuracy defect found and fixed

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R73`
  (48th consecutive clean confirmation, reviewed commit `18fc2bb` — round
  80's head, predating round 81's docs-only round), 0 active code
  defects, "PASS WITH COMMENDATION". Its §6.3 external gates list repeats
  the same stale "Production Domain Connection" wording rounds 77-81
  already noted (domain verified live since round 53). No Builder action
  required; moved to `exchange/processed/`.
- **Ran the standard local verification suite first** (`tsc --noEmit`,
  `pnpm run lint`, `pnpm run build`) against the unchanged round-81 source
  — all clean (same pre-existing round-42 evidence-script lint warning) —
  confirming no regression before looking for new work.
- **Fresh surface: adversarially diffed the Privacy Policy copy
  (`src/app/privacy/page.tsx`) against actual API-route behavior**
  (`src/lib/mailer.ts`, `src/app/api/{contact,planner}/route.ts`), a
  surface no recent round had explicitly re-verified against current
  code. **Found and fixed a real truth-claim defect:** the "Hosting and
  technical logs" section stated "We do not separately combine these logs
  with information you submit through our forms," but `getClientIp()`'s
  result is embedded directly inside the same internal notification email
  as the name/email/message (`` `IP: ${ip}` `` in both routes'
  `internalTextLines`) and used as the rate-limiter key — the code and
  the policy text contradicted each other. Added an accurate disclosure
  paragraph to "Information you submit through our forms" (IP is captured
  for anti-spam rate-limiting and included in the internal notification,
  not the visitor confirmation) and corrected the "Hosting and technical
  logs" section to stop claiming no combination occurs, naming the one
  real exception. Commit `19ae224`.
- **Verified:** `tsc`/lint/build clean after the edit; started a real
  `next start` production server on port 5173 and confirmed via `curl`
  that the new copy renders in the actual page HTML and a 12-route sweep
  (`/`, `/about`, `/privacy`, `/terms`, `/contact`, `/faq`,
  `/accessibility`, `/services`, `/pricing`, `/work`, `/process`,
  `/start`) all returned 200.
- Cleaned up: stopped the manually-started `next start` listener on port
  5173 by its verified real listener PID (`netstat`-confirmed, not a
  guess); removed the scratch server log from the OS temp root.
- Pushed to `origin/main` for Render auto-deploy.

## Round 81 — no new defect; Enter/Space key-synthesis proof gap closed via CDP

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R72`
  (47th consecutive clean confirmation, reviewed commit `71617d0` — round
  79's head), 0 active code defects, "PASS WITH COMMENDATION". Its "External
  Business Operations Gates" list repeats the same stale "Production Domain
  Connection" wording rounds 77-80 already noted (domain verified live since
  round 53). No Builder action required; moved to `exchange/processed/`.
- **Completed round 80's routed first task: reproduced its exact
  Return/Space-key-synthesis test via local headless-Chrome/CDP** (round
  8/79's established stronger instrument for this class of proof gap), per
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s round-80 note. Seeded a
  `localStorage` Planner draft (`step: 6`) to reach Step 6 with
  `maxReachedStep: 6` — the same state round 80 tested live — then used
  real `Input.dispatchKeyEvent` (native Chromium input, not the Browser
  pane's `computer{action:"key"}` tool) against the two exact component
  types round 80 named:
  - **Step 6's `StatusRow` toggle button** (`aria-pressed`): a real
    `Return` press on the focused, correctly-verified-focused button
    flipped `aria-pressed` from `"false"` to `"true"` — genuine
    activation, not a no-op. A follow-up `Space` press on the
    already-selected option correctly left it `"true"` (idempotent
    re-selection, matching a real mouse click on the same already-selected
    option, which produced the identical `"true"` → `"true"` result —
    confirmed as a same-value re-click, not a stuck key).
  - **Progress-rail step-jump button** (`aria-label="Step 3: Goals
    (complete)"`, reachable/enabled since `maxReachedStep: 6`): a real
    `Return` press on the focused button navigated the Planner from
    "Step 6 of 9" to "Step 3 of 9" — genuine `onClick`-driven navigation
    triggered by a native Enter keypress.
  **Conclusion: this closes round 80's proof gap with genuine positive
  evidence — real native Chromium Return/Space key dispatch DOES activate
  a focused native `<button>` correctly.** Round 80's finding is confirmed
  as an artifact of the Browser pane's own `computer{action:"key"}` tool's
  key-synthesis path specifically (it does not reach Chromium's native
  button-activation pipeline for Return/Space, even though it does for
  `Tab`), not a product accessibility defect. See
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s round-81 note for the full method
  and `CYVEXLY_NEXT_BUILDER_HANDOFF.md` for the closed handoff item.
- **Verified:** no source file changed this round (verification-only), so
  `tsc`/lint/build were not re-run (round 80's clean results stand
  unchanged).
- Cleaned up: stopped the manually-started `next dev` listener on port
  5173 by its verified real listener PID; stopped the round-owned headless
  Chrome instance by matching its unique `--user-data-dir` command-line
  substring (not by process name); removed the unique Chrome profile
  directory and the CDP driver script from the OS temp root/session
  scratchpad.

Round 80's full detail (Planner steps 2-9 keyboard/data-integrity
verification + the routed Enter/Space key-synthesis instrument finding,
closed by round 81 above) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_80_ARCHIVE.md` (moved there
round 81 to keep this file under its 30,720-byte hot-file cap).

## Round 79 — no new defect; live keyboard/validation verification + rAF proof-instrument refinement

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R70` (45th
  consecutive clean confirmation, reviewed commit `7708964` — round 77's head),
  0 active code defects, "PASS WITH COMMENDATION" including its own live CDP
  re-verification of the round-76 video. Same stale "Production Domain
  Connection" gate wording rounds 77-78 already noted (domain verified live
  since round 53). No Builder action required; moved to `exchange/processed/`.
- **Completed round 78's recommended live keyboard-only Tab traversal of the
  header nav / Contact form / Planner** via the manual-start-then-attach
  Browser-pane workaround (real compositing screenshot + real native `Tab`
  confirmed working again this round). Real click + `Tab` sequence through
  the Home hero traversed hero CTA → Explore services → the round-76 "how it
  works" video trigger (a focusable `role="button"` `<div>` — confirmed it
  carries `aria-label="Open the Cyvexly process video in a larger view"`, not
  a defect) → Work cards, in correct visual/DOM order. On `/contact`, a real
  native `Tab` sequence from a real click on Name traversed Name → Email →
  Phone → Company → Topic → Message → Consent → Send message, each with
  correct `<label for>` association; the honeypot field
  (`contact-company-website`) is confirmed `tabIndex="-1"` and correctly
  unreachable by keyboard.
- **Found and correctly diagnosed a proof-instrument gap, not a product
  defect.** A real click on Contact's "Send message" with an empty form set
  `aria-invalid`/`aria-describedby`/the `role="alert"` summary correctly, but
  focus stayed on the button instead of moving to the first invalid field as
  `contact-form.tsx` intends (`form.querySelector('[aria-invalid="true"]')
  ?.focus()`, wrapped in `requestAnimationFrame`). Root-caused before
  concluding it was a bug: a direct rAF probe in the same Browser-pane session
  (`requestAnimationFrame` counter after a real 3s wait) stayed at `0` even
  though `document.hidden` read `false` and compositing/Tab-focus worked —
  this is the same rAF-suppression limitation `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  documented at round 6, now shown to be an *independent* degradation from
  compositing/keyboard (one can work while the other stays suppressed; they
  are not one unified capability). Verified the real product behavior instead
  via round 8's local-headless-Chrome/CDP method, where `requestAnimationFrame`
  genuinely fires: a real DOM click on Contact's submit button with an empty
  form correctly moved focus to the Name input (`aria-invalid="true"`,
  `aria-describedby="name-error"` → "Please enter your name."). **No product
  defect** — confirmed working as designed via a stronger instrument.
- **Planner Step 1, same method:** a real native click (headless-Chrome CDP)
  on "Continue →" with every field empty correctly moved focus to `fullName`
  (`aria-invalid="true"`, `aria-describedby="fullName-error"`, 3 real
  `role="alert"` messages), then real native `Input.dispatchKeyEvent` `Tab`
  presses traversed workEmail → contactMethod → roleTitle → companyName →
  country → otherApprovers in correct order with correct labels — reconfirms
  round 8's original finding still holds on current source (commit
  `94048c4`), no regression.
- **Verified:** no source file changed this round (verification/proof-gap
  closure only), so `tsc`/lint/build were not re-run (round 78's clean
  results stand unchanged).
- Cleaned up: stopped the manually-started `next dev` listener on port 5173
  by verified real listener PID; stopped the round-owned headless-Chrome
  instance by matching its unique `--user-data-dir` command-line substring
  (not by process name — several unrelated `chrome.exe` processes were
  running); removed the unique Chrome profile directory, dev-server log, and
  both scratch CDP helper scripts from the OS temp root and session
  scratchpad; closed the Browser pane tab.

Round 78's full detail (environment finding — the manual-start-then-attach
Browser-pane workaround is reachable but intermittent; and the round-76
autoplay proof-gap closure) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_78_ARCHIVE.md` (moved there
round 81 to keep this file under its 30,720-byte hot-file cap).

Round 77's full detail (Auditor `IFA-2026-09-07-R68` disposition, a
`service-details.ts`/`site-config.ts` field-by-field diff, and a
source-level accessibility scan — 0 defects found) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_77_ARCHIVE.md` (moved there
round 80 to keep this file under its 30,720-byte hot-file cap).

Round 76's full detail (Home "how does it work?" video build + the
`backdrop-filter`/`position:fixed` containing-block bug fix; its named
`document.hidden` proof gap was independently closed round 78) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_76_ARCHIVE.md` (moved there round
79 to keep this file under its 30,720-byte hot-file cap; also preserved in
`CYVEXLY_ACTIVE_CHUNK.md`'s "Round 76 report" and `CYVEXLY_BUILD_SUMMARY.md`).

## Resolved round 75

- **Checked the Auditor inbox first:** one new item,
  `IFA-2026-09-06-R64` (39th consecutive clean confirmation, 0 active
  code defects, reviewed commit `7db867c` — round 73's head, predating
  round 74's doc-only round). Moved to `exchange/processed/`.
- **Actioned its one recommendation.** The Auditor noted `site-config.ts`
  lines 56/66/114/152 (the `gradient` Tailwind class strings for
  Aurora Spaces and Nexora Systems) still hardcoded the pre-refresh
  `#1478FF` — round 73 had deliberately left these alone after
  confirming each `ConceptPreview` SVG's own opaque full-viewBox
  background `<rect>` fully covers the gradient div in every render
  path (inert, not a rendering gap), but flagged them for full
  sitewide token consistency. Replaced all 4 with `#0F66E0`. Verified
  via a real `next start` server: `grep -rn "#1478FF" src/` now
  returns zero matches anywhere in the codebase; the `ConceptPreview`
  background rects (lines 16/35/63) still fully cover the divs, so
  the fix is confirmed purely cosmetic-in-source with zero rendered
  effect.
- **Adversarially reviewed `service-details.ts` vs `site-config.ts`
  pricing** (the round-74 handoff's recommended fresh, not-yet-diffed
  surface), field-by-field. Every `serviceDetails[slug].package.price`
  reads "From $X" (e.g. Orbit "From $3,500"), while the matching
  `pricingPackages`/`carePlans` entry reads a bare "$X" (Orbit
  "$3,500"). Traced both render paths before concluding this was a
  defect: `/pricing` (`pricing/page.tsx` line 83) prefixes the bare
  price with its own "Starting at" label; `/services/[slug]`
  (`services/[slug]/page.tsx` line 224) prefixes its "From $X" string
  with a "Related starting point" label. Both independently
  communicate the same starting-price fact through different but
  non-contradictory copy — not a truth-claim inconsistency, just
  stylistic redundancy on the services-detail side ("starting point"
  + "From"). Also checked `structured-data.ts`'s
  `extractStartingPrice()`: its `\$([\d,]+)` regex matches the
  leading numeric figure regardless of a "From " prefix, so
  `AggregateOffer.lowPrice`/`OfferCatalog` JSON-LD values are
  identical either way — no schema defect. **No defect found** — a
  genuine negative result after real investigation, not skipped work.
- **Verified:** `tsc --noEmit`/lint/`pnpm run build` all clean (same
  pre-existing round-42 evidence-script lint warning, untouched). Real
  `next start` production server on port 5173: a 21-route sweep
  (every public static/dynamic route plus `/not-found`) returned 200
  (`/not-found` correctly 404s).
- Cleaned up: stopped the owned `next start` listener on port 5173
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen` before `Stop-Process`, not by process name); no
  scratch files were created this round.

## Round 74 — no new defect (investigated, documented)

Dispositioned Auditor item `IFA-2026-09-06-R63` (38th consecutive clean
confirmation, 0 active code defects). Extended round 73's color-token
staleness fix into a full historical audit: used `git log -G` on
`globals.css` to enumerate every token value ever changed (cyber-blue,
cool-graphite, signal-emerald, warning-coral) and grepped all four
pre-refresh hex values sitewide — no further drift exists beyond round
73's fix. Also verified sitewide "two business days" response-time
copy consistency (16 occurrences, all identical) and re-confirmed the
Planner's "Worldwide" geographic-market option is a question about the
prospect's own business, not a Cyvexly service-area claim. No source
change this round; see `CYVEXLY_NEXT_BUILDER_HANDOFF.md` for the next
recommended surface.

Round 73's full detail (case-study palette/artwork color-token staleness
fix, Aurora Spaces + Nexora Systems) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_73_ARCHIVE.md` (moved there
round 78 to keep this file under its 30,720-byte hot-file cap).

Round 72's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_72_ARCHIVE.md` (moved there
round 73 to keep this file under its 30,720-byte hot-file cap): the
Planner Review-page validation-bypass fix (`validateAllSteps()`).

Round 71's full detail (the `/work` dead-end filter-pill fix and a
hot-file-cap violation fix) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_71_ARCHIVE.md` (moved there
round 76 to keep this file under its 30,720-byte hot-file cap).

Rounds 43-70's full detail are each archived at their correspondingly
named `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND(S)_<N>_ARCHIVE.md`
files (consolidated round 76 to keep this file under its 30,720-byte
hot-file cap; no history lost — one-line outcomes only): 43 sitewide
Organization JSON-LD; 44-45 FAQPage/BreadcrumbList JSON-LD; 46 removed
dead scaffold SVGs + Web App Manifest; 47 Apple touch icon; 48 raster
manifest icons + print-legibility fix; 49 error boundaries + viewport
theme-color; 50 COOP/CORP headers + security.txt; 51 sitewide OG/Twitter
metadata; 52 per-route OG images; 54 per-slug OG images; 55 Service
JSON-LD; 56 OfferCatalog JSON-LD; 57 meta-description trims; 58
`lang="en-US"` + hot-file-cap fix; 59 Home meta-description fix; 61
rate-limiter memory-pruning fix; 62 dormant Cloudflare-bypass gate; 63
timing-safe-comparison fix; 64 30th audit confirmation, clean re-review;
65 request-body-size cap; 66 Planner spectrum data-loss fix; 67 Planner
secondary-goals-label fix; 68 `robots.ts` missing `Sitemap:` fix; 69
Home FAQ CMS-claim qualification; 70 text-cursor/editable-copy fix.

## Open

1. **RESOLVED round 53 (verified live, not a code change).** This item's
   text below claimed the DNS/Render connection was still open and required
   Owner account access. Round 53 (interactive session, Owner direction
   `2026-09-05-15`) checked the actual production domain directly — no
   account access needed to observe live DNS/HTTP/TLS behavior — and found
   it fully connected: `http://cyvexly.com` and `http://www.cyvexly.com`
   both 301 to `https://cyvexly.com/`; `https://www.cyvexly.com` 301s to
   the apex; a valid Google Trust Services certificate is active (the
   domain sits behind Cloudflare in front of the Render origin, confirmed
   via `Server: cloudflare` plus `x-render-origin-server: Render` response
   headers); `robots.txt`, `sitemap.xml`, and per-route canonical/og tags
   all resolve correctly on the live production domain; round 52's per-
   route Open Graph images are already deployed and live. No reachable
   Builder work remains on domain/HTTPS/canonicalization. **Original text,
   preserved for history:** "Production domain is confirmed; the account-
   bound DNS/Render connection remains open. Round 29 closed the reachable
   code-side metadata gap. The Owner confirmed `cyvexly.com`. The domain
   still needs Render custom-domain setup, DNS replacement of the
   Namecheap parking destination, HTTPS verification, root/`www` canonical
   behavior, and public route proof — these require account access this
   Builder does not have."
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
2. **RESOLVED round 53 (code-complete; delivery untested pending Owner
   account).** Contact and Planner now both submit server-side (Next.js
   Route Handlers, `src/app/api/contact/route.ts` and
   `src/app/api/planner/route.ts`) through Resend, per Owner direction
   `2026-09-05-15`. Internal notification goes to `design@cyvexly.com`
   with Reply-To set to the visitor's email; a best-effort visitor
   confirmation is sent with Reply-To `design@cyvexly.com`. Server-side
   validation mirrors every client-side required-field rule; the honeypot
   is re-checked server-side; a per-IP in-memory rate limiter (5/15min) is
   new defense-in-depth; all text is sanitized (control-character/length
   caps, single-line header-injection defense) before use in email
   subjects/headers/bodies. `src/lib/mailer.ts` centralizes this. No secret
   is readable from client code — `RESEND_API_KEY` is read only inside the
   two Node-runtime route handlers.
   **What remains — a real Owner account, not a Builder-reachable gap:**
   1. Create a Resend account (resend.com).
   2. Add `cyvexly.com` (or a subdomain) as a sending domain in Resend and
      add the DNS records Resend generates (SPF/DKIM, account-specific —
      only available after adding the domain) in Namecheap; verify in
      Resend.
   3. Create an API key in Resend and add it to Render's environment
      variables as `RESEND_API_KEY` (a secret — never place it in source,
      docs, or chat). Optionally set `RESEND_FROM_EMAIL` to override the
      default `Cyvexly Studio <notifications@cyvexly.com>`.
   4. Redeploy (Render redeploys automatically on push; setting an env var
      alone also triggers a redeploy).
   **Verified without a real account:** `tsc`/`lint`/`build` clean; a real
   running server with no `RESEND_API_KEY` returns 503 `not-configured`
   (confirmed live on production, not just locally); every required-field
   validation and the honeypot rejection verified via real HTTP requests on
   both routes; the rate limiter verified by exhausting it live; a
   deliberately invalid API key produced a real Resend API auth failure,
   caught as a graceful 502 rather than a crash; a real browser-driven
   (not synthetic) submission on production shows the intended error UI
   and preserves the visitor's entered data. Actual message delivery is
   the one thing that cannot be verified without step 1-3 above.

3. **Dormant round-62 scaffolding for the residual Cloudflare-bypass gap
   named under "Resolved round 60" above — activation is an Owner/account
   step, not a Builder-reachable one.** `isTrustedOrigin()`
   (`src/lib/mailer.ts`), wired into both `/api/contact` and
   `/api/planner`, always passes today (no behavior change) and starts
   rejecting (403) any request missing a matching `x-cf-origin-secret`
   header once `CF_ORIGIN_SECRET` is set in Render. **Exact Owner steps
   to activate:** (1) In the Cloudflare dashboard for `cyvexly.com`: Rules
   → Transform Rules → create a "Modify Request Header" rule matching all
   incoming requests, action "Set static", header name
   `x-cf-origin-secret`, value = a long random secret you choose (this is
   not an API key or account credential — treat it like a password, don't
   paste it into chat or source). (2) In Render, on the `cyvexly-studio`
   web service: add environment variable `CF_ORIGIN_SECRET` set to that
   exact same value, then redeploy (Render also auto-redeploys on env
   changes). Once both match, direct requests to
   `cyvexly-studio.onrender.com` that skip Cloudflare have no way to learn
   or forge the secret and are rejected at the origin. Verified round 62:
   dormant (unset) and activated (set, matching/mismatched/missing header)
   behavior both proved live on a real `next start` server; zero
   regressions across a 14-route sweep. **Round 63:** hardened the secret
   comparison itself from `===` to `timingSafeEqual` (a plain string
   comparison is a timing side-channel once this gate is activated); same
   dormant/activated behavior reverified, no functional change.

Rounds 40-42 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_40_42_ARCHIVE.md` in round 58
to keep this file under its 30720-byte hot-file cap: Contact-form honeypot
fix plus first live Planner-honeypot verification (round 42), WCAG 1.4.10
reflow/zoom sweep with no defect found (round 41), and the Planner
step-advance scroll/focus/live-region fix (round 40).

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

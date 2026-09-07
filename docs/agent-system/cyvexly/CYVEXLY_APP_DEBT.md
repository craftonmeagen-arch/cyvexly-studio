# Cyvexly App Debt

## Round 80 — no new defect; Planner steps 2-9 keyboard/data-integrity verification + Enter/Space key-synthesis instrument finding

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R71`
  (46th consecutive clean confirmation, reviewed commit `94048c4` — round
  78's head), 0 active code defects, "PASS WITH COMMENDATION". Its "External
  Business Operations Gates" list repeats the same stale "Production Domain
  Connection" wording rounds 77-79 already noted (domain verified live since
  round 53). No Builder action required; moved to `exchange/processed/`.
- **Completed round 79's recommended fresh surface: a real live keyboard/
  data-integrity pass over Planner steps 2-9** (only Step 1 had this exact
  treatment since round 8). Via the manual-start-then-attach Browser-pane
  workaround (compositing + native `Tab` confirmed working this round):
  real native `Tab` traversal through Step 2's 7 fields landed in exact
  source order (`businessDescription → productsServices → currentWebsite →
  businessStage → geographicMarket → customerGroups → competitors →
  differentiation`); Step 3's `primaryGoal` `RadioCardGroup` → `Tab` moved
  directly to the first `secondaryGoals` checkbox (no stray
  `primaryGoalOther` field, correctly conditional) → 8 real `Tab` presses
  through all 8 secondary-goal checkboxes landed exactly on
  `importantAction`. Filled required fields through every step to Step 9
  and confirmed the Review page correctly reflects every entered/selected
  value from Steps 1-8 (name, email, contact method, business description,
  primary goal, website type, page selection, budget, timing) — a genuine
  positive data-integrity result, not just a keyboard-order check. The
  Step 9 acknowledgment/consent/marketing checkboxes are real
  `<input type="checkbox">` with correct `<label for>` wiring; the
  `planner-company-website` honeypot remains `tabIndex="-1"` and
  `aria-hidden="true"` (unreachable by keyboard, no regression from round
  42's original fix). Also spot-verified via direct DOM inspection (not
  just the accessibility tree) that Step 2's two `SelectField`s
  (`businessStage`, `geographicMarket`) both have a real `<label for>`
  correctly pointing at the select's `id` — `read_page` displays both as
  named "Select one" (the current placeholder option text), which looked
  like a shared-accessible-name defect at first glance but is a
  `read_page` rendering convention for `<select>`/combobox roles, not a
  real label-association gap. **No defect found** in any of the above — a
  genuine negative result after real investigation.
- **New instrument finding, not a product defect (see
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s round-80 note for full detail):**
  this session's `computer{action:"key"}` reliably moves focus via `Tab`
  (reconfirmed many times this round) but a synthetic `Return`/`space` key
  press does **not** trigger a click on a correctly-focused native
  `<button type="button">` in this Browser-pane session — tested twice,
  independently, on two different native-button components (Step 6's
  `StatusRow` toggle button and the progress-rail's "Step 6" jump button):
  focus was verified correct before and after each key press
  (`document.activeElement` unchanged), `aria-pressed` never flipped, and
  the progress-rail Enter press never navigated to Step 6. Both are plain
  `<button>` elements with no custom keydown handling — native Enter/Space
  activation requires zero product-side JS — and real mouse clicks on the
  same `StatusRow` button correctly toggled `aria-pressed`, so this is
  overwhelmingly an artifact of how this tool synthesizes `Return`/`space`
  key events (distinct from `Tab`, a lower-level browser focus-traversal
  mechanism that does not depend on the same event-dispatch path) rather
  than a real keyboard-accessibility gap. Not independently reproduced via
  local headless-Chrome/CDP this round (time-boxed); recommended as the
  next round's first task since round 8/79's CDP method is the established
  stronger instrument for exactly this class of gap.
- **Verified:** no source file changed this round (verification-only), so
  `tsc`/lint/build were not re-run (round 79's clean results stand
  unchanged).
- Cleaned up: stopped the manually-started `next dev` listener on port
  5173 by its verified real listener PID; closed the Browser pane tab; no
  other scratch files/processes were created.

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

## Round 78 — no new defect; environment finding + proof-gap closure

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R69`
  (44th consecutive clean confirmation, reviewed commit `3409faf` — round
  76's head), 0 active code defects, "PASS WITH COMMENDATION" on the round-76
  video feature via the Auditor's own live CDP verification. Its "External
  Business Operations Gates" list still names "Production Domain Connection"
  as pending — same stale template wording round 77 already noted (domain
  verified live since round 53). No Builder action required; moved to
  `exchange/processed/`.
- **Environment capability finding (see `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  round-78 note for full detail):** round 77 concluded live/CDP verification
  was categorically unreachable this session type. That conclusion was too
  broad — only `preview_start({name})`'s own dev-server launch is refused for
  unattended sessions. Starting `next dev` manually via the Bash tool, then
  attaching the Browser pane with `preview_start({url: "http://localhost:5173"})`
  (round 1's documented workaround), produced genuine compositing screenshots
  and at least one genuine real `Tab`-key focus move in this exact scheduled/
  unattended session — both degraded to intermittent partway through the
  round (blank screenshot, focus stopped moving), matching the pattern
  rounds 35/40 already recorded for attended sessions. Reachable, not
  reliable; worth retrying each round rather than assuming either extreme.
- **Closed round 76's named proof-instrument limitation with genuine
  positive evidence.** Round 76 could not confirm the ambient Home video
  autoplays because `document.hidden` read `true` even for the sole/fronted
  tab that session. This round, in a live attached tab, `document.hidden`
  correctly read `false`/`visibilityState: "visible"`, and the video's
  `currentTime` was read twice 3 real seconds apart (`3.24s` → `11.14s`),
  proving genuine unattended real-time playback progression — not merely
  `readyState`/`paused` flags. Independently re-verified the click-to-open
  lightbox (portaled to `document.body`, `aria-modal="true"`, body scroll
  locked, focus moved to the close control) and Escape-to-close (dialog
  removed, scroll restored, focus returned to the trigger) live, matching
  the Auditor's and round 76's own findings. **No defect found** — this
  closes a proof gap, not a code change.
- **Verified:** no source file changed this round, so `tsc`/lint/build were
  not re-run (round 77's clean results stand unchanged). Cleaned up: stopped
  the manually-started `next dev` listener on port 5173 by its verified real
  listener PID (`Get-NetTCPConnection -LocalPort 5173 -State Listen`), not by
  process name; removed the scratch dev-server log from `$env:TEMP`.

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

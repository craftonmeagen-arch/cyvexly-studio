# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress) retain incomplete closure
items. **Chunk 5 — United States Launch Completion & Business Operations is
now OPEN**, started round 29. Its integrated verification will close the
overlapping delivery and launch items in Chunks 3 and 4. Chunk 2 — Core
marketing pages — remains closed but revisitable.

**Round 29** (scheduled/unattended, 50-minute limit) opens Chunk 5 and closes
one bounded workstream: public contact identity (`design@cyvexly.com`, `(317)
572-5780`) sitewide, the code-only half of production metadata/discovery
(`metadataBase`, `sitemap.xml`), and a United States-only truth audit removing
stale "worldwide"/international-market and unsupported-payment-method claims.
See the round-29 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 29"
section. Chunk 5's About page, Privacy/Terms, real inquiry delivery,
domain/DNS connection, analytics, and full release QA remain open — this is
one workstream, not chunk completion.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email still needs an authorized provider,
credentials, and verified sending domain. `/not-found`, `/faq`, and
`/accessibility` are complete; `/privacy` and `/terms` can now be drafted for
Indiana/United States operations once the exact registered LLC name is
confirmed; the favicon is fixed. The Owner has confirmed `cyvexly.com`,
`design@cyvexly.com`, `(317) 572-5780`, United States-only availability, and a
logo-led/no-personal-founder About direction. Payment and real portfolio
replacement are tabled. Round 19 prevents
invalid dynamic-route metadata from replacing the correct hydrated 404 title
and gates the Planner until saved-draft restoration completes. Round 20 removes
the Home reel's visible muted/duration, progress, and circular playback chrome,
slows playback to `0.75×`, and preserves pause/resume on the complete named
media surface. Round 21 carries the Owner-approved pale-blue architectural
glass environment across route families with protected copy fields and verified
contrast. Round 22 restores the shared sticky header, completes Home/Services section
continuity, and defers the unavailable About link without inventing content.
Round 23 repairs shared validation contrast. Round 24 implements authoritative
Owner direction `2026-09-01-10` over every full public page height. Round 25
hardens the shared navigation lifecycle/current semantics and closes one
enlarged-root Services overflow without changing that appearance. Round 26
strengthens the shared visible environment after Owner rejection. Round 27
rebuilds Home's first viewport as a discrete architectural-glass scene after
the Owner found Round 26 insufficient. Round 28 carries that architecture
through middle/lower sections and all matching route families with persistent
scene structure and protected bounded glass bays. Round 18 replaces
Pricing's sparse text-only entry with a split glass scope signal and coordinated
package field while preserving every package fact. Round 17 replaces
the Services combination table with five mockup-aligned, icon-led glass
pathways and a Planner handoff, including compact-desktop breakpoint hardening.
Round 16 implements Owner direction 2026-08-31-07 as a larger integrated Home
reel inside a light-ice-blue glass stage. Round 15 makes the accepted Home
video visible on the real Render site by aligning the deployment branch with
accepted source. Round 14's five focused service-detail journeys and safe
Planner preselection remain intact alongside rounds 11-13's Home systems.

## Active chunk boundaries

### Chunk 3 — Project Planner

- **Outcome:** A calm, nine-step conversational form at `/start`, covering the
  complete vision field plan and eventually sending a real automatic
  confirmation email from Cyvexly.
- **Built:** UI, state, validation, conditional fields, review/edit, draft save,
  responsive progress rail, and DOM/accessibility-tree audit.
- **Remaining:** the real server-side delivery path. The production domain is
  now confirmed; a business-inbox/transactional-email provider, credentials,
  sending-domain verification, internal receipt, visitor confirmation, and
  production delivery proof remain.
- **Closure boundary:** the UI remains fully proved and the delivery gap is
  implemented and publicly proved after provider/account authorization; if an
  account gate remains, it must be named precisely rather than treated as an
  unknown domain decision.

### Chunk 4 — Utility, legal & launch readiness

- **Outcome:** utility/legal routes, metadata assets, and launch-readiness
  conditions from vision §15.
- **Built:** custom 404, FAQ, Accessibility statement, favicon/ICO, OG image,
  robots/no-index preview default.
- **Remaining:** logo-led About, Indiana/United States Privacy/Terms, exact LLC
  legal-name confirmation, `cyvexly.com` DNS/HTTPS/canonical setup,
  production-domain metadata, sitemap, indexing release, analytics/search
  ownership, and full production QA. Chunk 5 owns this integrated completion.

### Chunk 5 — United States Launch Completion & Business Operations (NEXT)

- **Authority:** Owner direction `2026-09-04-14`, vision §17, and the Chunk 5
  entry in `CYVEXLY_PROJECT_CHUNK_MAP.md`.
- **Outcome:** launch a truthful, contactable, searchable, legally coherent
  United States business site on canonical `https://cyvexly.com`.
- **Required scope:** domain/HTTPS/canonical redirects; metadata/canonicals/
  social URLs/sitemap/staged robots; `design@cyvexly.com` and public phone;
  logo-led About; Indiana/United States Privacy and Website Terms; secure real
  Contact/Planner delivery and visitor confirmation; privacy-aware analytics
  and search ownership; United States/payment/portfolio truth audit; complete
  public release QA.
- **Deferred:** payment-provider integration and real-client portfolio
  replacement. Do not invent, activate, or claim either.
- **Owner gates:** exact registered LLC name; account-bound DNS/Render access;
  inbox/transactional-email provider authorization and securely entered
  secrets; analytics/Search Console ownership or no-analytics decision; About/
  legal/public-visual review; final indexability approval.
- **Closure boundary:** all Chunk 5 requirements pass on the production domain,
  and the carried Chunk 3/4 operational items are closed. A partial domain-only,
  legal-only, or UI-only release does not close this chunk.

## Round 43 report — global round 43 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R34` (reviewed commit
`3bbb879`, round 41's HEAD — one commit behind round 42's honeypot fix).
Tenth consecutive independent confirmation, not a new finding. Moved to
`exchange/processed/`. Re-ran `tsc`/`lint`/`build` clean before making any
change.

Ran a genuinely new angle: the site had **no structured data (JSON-LD)
anywhere**, even though vision §17's launch outcome explicitly names
"searchable" alongside truthful/contactable/legally coherent. Added a
schema.org `Organization` JSON-LD block to the root layout
(`src/lib/structured-data.ts`), using only Owner-confirmed facts already in
`site-config.ts` — name, domain, email, phone, and Indiana/United States
location (region + country only, no invented street address; no social
profiles, since none are confirmed). §4.12 check: JSON-LD via a `<script
type="application/ld+json">` tag is the standard, well-documented Next.js/
schema.org pattern for business discoverability — not a departure. Verified
in real production build output (`.next/server/app/*.html` across home,
contact, and one dynamic service-detail route: valid parsed JSON with
correct name/phone/email) and live via real CDP navigation against a
production `next start` server across `/`, `/contact`, `/about`, and
`/services/business-websites`: zero console errors, zero network failures,
JSON-LD parses correctly in the real DOM on every route. Script preserved at
`builder/evidence/round-43-jsonld-check.mjs`. `tsc`/`lint`/`build` all pass
clean; committed and pushed.

Also fixed real hot-memory drift found this round: this file had grown to
29313 bytes (near its cap) because rounds 31-39's full reports were never
archived when later rounds landed, violating the intended latest-three
rotation (§7.14). Archived them to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`.

## Round 42 report — global round 42 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R33` (reviewed commit
`46eae51`, round 40's HEAD). Ninth consecutive independent confirmation,
not a new finding. Moved to `exchange/processed/`. Re-ran `tsc`/`lint`/
`build` clean before making any change.

Swept round 41's two named untried QA candidates:

1. **Spam/rate-limit and honeypot live behavior (vision §17 item 6).**
   Source read found the Contact form had **no spam/rate protection at
   all**, while the Planner already has a hidden honeypot. **Fixed**:
   added an identical hidden honeypot field to
   `src/components/contact-form.tsx`. Live-verified with real CDP mouse
   clicks against a production server: filled honeypot blocks submission
   (no regression on a clean resubmit); same method also live-verified the
   Planner's own honeypot end-to-end for the first time (previously
   untested).
2. **RTL/very-long-name overflow in the Planner review step.** A
   ~130-character unbroken string plus a concatenated Arabic RTL name
   (zero break opportunities) in Full name/Company name, advanced to the
   review step at 375px. Measured `scrollWidth` (375) equals `innerWidth`
   (375): zero horizontal overflow, no defect.

Full detail and scripts in `CYVEXLY_APP_DEBT.md`'s "Resolved round 42"
section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`. This closes both candidates
round 41 named; the next round should keep looking for genuinely new QA
angles (a print-stylesheet check and a true rate-limit check beyond the
honeypot are named as untried in the handoff).

## Round 41 report — global round 41 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R32` (reviewed commit
`a8c5769`, round 39's HEAD, one commit behind round 40's fix). Eighth
consecutive independent confirmation, not a new finding. Moved to
`exchange/processed/`. Re-ran `tsc`/`lint`/`build` clean before making any
change.

Closed both QA candidates round 40 named as untried, with no source change
needed (no defect found):

1. **WCAG 1.4.10 Reflow / 200%-zoom-equivalent.** Emulated 320 CSS px (the
   exact 1.4.10 threshold) and 640 CSS px (a width-halving proxy for a
   1280px viewport at 200% zoom) across 8 marketing routes and all 9 real
   Planner steps, advancing the Planner with genuine CDP mouse clicks on
   Continue against a production server. 34/34 checks: zero horizontal
   overflow, and the Planner's real step-advancement kept working at both
   narrow widths.
2. **Back-button re-check of round 40's shared `goToStep()` fix.** Source
   read confirmed one function serves `handleNext`, `handleBack`, `onEdit`,
   and the progress rail, with the fix keyed only on `currentStep`. Live
   CDP click on "← Back" confirmed: scroll reset to 0, focus moved to the
   step heading, live region announced correctly.

Full detail, method honesty notes, and scripts in `CYVEXLY_APP_DEBT.md`'s
"Resolved round 41" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`. Ninth
consecutive round (35-41) with only rounds 39/40 finding real defects — the
next round should look for genuinely new QA angles (candidates in the
handoff) rather than assume the surface stays empty.

## Round 40 report — global round 40 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R31` (reviewed commit
`f1a264f`, round 38's HEAD). Seventh consecutive independent confirmation,
not a new finding. Moved to `exchange/processed/`. Re-ran `tsc`/`lint`/
`build` clean before making any change.

Ran a screen-reader-semantics QA pass on the Planner's step-advance flow, one
of round 39's named uncovered candidates. Per-field validation ARIA wiring
was already solid on Contact and the Planner. Live-testing the successful
step-advance path via real CDP mouse events against a production server
(the in-app Browser pane proved intermittent this round — screenshot
timeouts and a `document.hasFocus()===false` false-positive) **found and
fixed a real defect**: `goToStep()` called `window.scrollTo({top:0})`
synchronously before React committed the new step's DOM, so Chrome's
scroll-anchoring silently kept the old scroll position, and focus never left
the Continue/Back button — no top-scroll for sighted users, no focus move or
`aria-live` announcement for keyboard/screen-reader users. Fixed by moving
scroll+focus into a `useEffect` keyed on `currentStep` (guarded by a
`previousStepRef` comparison, verified safe under React Strict Mode's
dev-only double-invoke), deferred one `requestAnimationFrame` past commit,
plus a polite live-region announcer. Verified before/after against a real
production server: `tsc`/`lint`/`build` clean, commit `71d233f` pushed.
Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 40" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

Rounds 39 and 40 both found real defects from previously-uncovered QA
angles, contradicting rounds 35-38's "pause scheduled cadence, queue is
empty" recommendation. See the handoff for untried candidates (200% zoom/
text-resize, a Back/progress-rail re-check of this round's fix).

Rounds 31-39 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md (moved there round 43 to restore latest-three rotation). Summarized outcomes remain in CYVEXLY_BUILD_SUMMARY.md and CYVEXLY_APP_DEBT.md.

## Prior round summaries

- **Round 1:** established Next.js/TypeScript/Tailwind source truth, design
  system, Home, and Process; closed Chunk 1. Full report:
  `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND1_REPORT.md`.
- **Round 2:** built Services, Pricing, Contact, Work/case studies, FAQ,
  Accessibility, and 404; fixed a Next.js 16 dynamic-params runtime bug. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md`.
- **Round 3:** closed Chunk 2 with About honestly bounded, ran the Planner email
  reachability check, added no-index/robots and OG asset, and refreshed launch
  readiness. Full report: `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md`.
- **Round 4:** opened Chunk 3 and built/verified the full Planner, including
  mobile-overflow, missing-field, reduced-motion, and accessible-name fixes.
  Full report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND4_REPORT.md`.
- **Round 5:** rebuilt Process as a connected timeline and replaced Work/case-
  study gradients with truthful project-specific `ConceptPreview` SVGs. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
- **Round 6:** fixed three Council findings plus two same-shape Pricing table
  issues; root-caused the unattended-browser compositor limitation. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md`.
- **Round 7:** redesigned/fixed the favicon and real ICO, and audited Planner
  keyboard-accessibility properties through DOM/accessibility-tree evidence.
  Full hot-path snapshot/report:
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.

- **Round 8:** unified truthful concept artwork across Home, Services, and Work;
  established exact CDP rendering and fixed Planner first-error focus. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND8_REPORT.md`.
- **Round 9:** fixed cross-computer scale drift from browser font defaults/rem
  breakpoints and strengthened shared glass/large-text resilience. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND9_REPORT.md`.
- **Round 10:** ran the wider method audit and added the inset glass header,
  credibility icon rail, and capability-card grammar. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND10_REPORT.md`.
- **Round 11:** integrated the Owner-supplied Home showcase video with honest
  provenance, motion/data-saver controls, and responsive media proof. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND11_REPORT.md`.
- **Round 12:** added the Home partnership diagram and five-stage process-route
  visual system. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND12_REPORT.md`.
- **Round 13:** replaced the flat Home final CTA with a split luminous
  planetary/network composition. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND13_REPORT.md`.
- **Round 14:** added five focused service-detail journeys and safe Planner
  preselection. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND14_REPORT.md`.
- **Round 15:** repaired the deployment/source branch mismatch so the accepted
  Home video appeared on the real Render site. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_DEPLOYMENT_ROUND15_REPORT.md`.
- **Round 16:** implemented the larger integrated Owner-directed Home reel.
  Full report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND16_REPORT.md`.
- **Round 17:** replaced the Services combination table with five icon-led
  audience pathways. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND17_REPORT.md`.

Rounds 18 and 19 are archived at
`docs/archive/chunks/CYVEXLY_SHARED_PRICING_ROUND18_REPORT.md` and
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND19_REPORT.md`.

Round 24 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUND24_REPORT.md`.

Round 25 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND25_REPORT.md`.

Rounds 26-29 (Owner-rejection visual-fidelity corrections and the Chunk 5
opening workstream) are archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUNDS_26_29_REPORT.md`.

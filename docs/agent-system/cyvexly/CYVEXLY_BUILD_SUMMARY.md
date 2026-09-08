# Cyvexly Build Summary

## Owner launch direction — 2026-09-04

Round 29 opened Chunk 5 — United States Launch Completion & Business
Operations — under Owner direction `2026-09-04-14` and vision §17. Confirmed
facts are `cyvexly.com`, Indiana/United States LLC operations, United States-only
launch market, `design@cyvexly.com`, `(317) 572-5780`, and a logo-led About with
no public personal founder identity. The chunk integrates domain/discovery,
contact, About, legal, real Contact/Planner delivery, privacy-aware measurement,
truth audit, and production QA. Payment integration and real portfolio
replacement are deferred. Historical summaries below describe the source
baseline, not current decision gaps.

Older setup and rounds 1-10 are preserved in
`docs/archive/CYVEXLY_BUILD_SUMMARY_ARCHIVE.md`.

## Round 95 / Velora chunk round 1 — 2026-09-07

Opened Chunk 6 under Owner direction `2026-09-07-17` and established
`velora/index.html` as the standalone concept source truth. Corrected the
fictional location/contact identity, prevented real phone/email transmission,
and fixed a major rendered hero cascade defect discovered from baseline proof.
Added a durable Chrome/CDP smoke suite and proved all primary demo workflows at
desktop/mobile with zero overflow or runtime/network errors. The parent Cyvexly
typecheck/lint/build remains clean. Chunk 6 stays open for deeper negative,
keyboard/zoom, content/provenance, integration, and independent-review proof.

## Round 94 — 2026-09-07

Dispositioned Auditor item `IFA-2026-09-07-R85` (60th consecutive clean
confirmation, "historic benchmark"; stale on arrival — evaluated a head
predating round 93's own lint fix and convergence checks). Ran two fresh
convergence checks named by round 93's handoff: the Accessibility
statement's "see Pricing" cross-reference against current Pricing
content (0 defects — both claims still match `site-config.ts`'s
`projectIncludes`/`addOns`), and Contact's topic `<select>`/consent
checkbox reviewed at the source level (native controls, no custom
keyboard logic, already exercised by round 79's CDP Tab traversal). 0
new defects; no product-source change.

## Round 87 — 2026-09-07

Dispositioned Auditor item `IFA-2026-09-07-R78` (53rd consecutive clean
confirmation, "PASS WITH COMMENDATION"). Convergence-checked Home's other
CTAs/claims against `site-config.ts` and found/fixed a real
truth-precision defect: the Home pricing-preview card overstated a
capped Nexus-tier inclusion ("Up to two standard integrations") as a
guaranteed "Two standard integrations" — every other page-count feature
in the same array correctly kept "Up to". Fixed and verified live on a
rebuilt `next start` server (corrected text renders, 17/17 routes 200).

## Round 84 — 2026-09-07

Dispositioned Auditor item `IFA-2026-09-07-R75` (50th consecutive clean
confirmation, "PASS WITH COMMENDATION"). Fixed a Builder-owned
environment defect (Node/pnpm missing from this session's PowerShell
`PATH`; documented the one-line fix for future rounds). Convergence-
checked FAQ content, Pricing payment terms, sitewide response-time copy,
and the About page against Owner direction and each other's
source-of-truth data. No defects found; no source change.

## Round 81 — 2026-09-07

Closed round 80's routed proof gap: reproduced its Return/Space
key-synthesis test via local headless-Chrome/CDP. Real native key
dispatch correctly activated a Planner Step 6 `StatusRow` toggle button
and the progress-rail's step-jump button, confirming the earlier
non-activation was specific to the Browser pane's own key-synthesis
tool, not a product accessibility defect. No source change; dispositioned
Auditor's 47th consecutive clean confirmation.

## Round 76 — 2026-09-06 (interactive, Owner direction 2026-09-06-17)

Added a Home "So how does it work?" section: an Owner-supplied process
video embedded under the "We're not a DIY builder" panel as a silent,
looping, chrome-less ambient clip (`how-it-works-video.tsx`) that opens
a controllable lightbox on click/Enter. Found and fixed a real bug
during verification — the lightbox's `fixed` overlay wasn't actually
viewport-fixed because a `backdrop-filter` ancestor (the sitewide glass
treatment) creates a new CSS containing block for `position: fixed` —
fixed via `createPortal(..., document.body)`. TypeScript, lint, and
build passed; verified via CDP (portal/backdrop-click/Escape/focus-
return, 0 overflow at 375px). Pushed to `origin/main`.

## Round 75 — 2026-09-06

Dispositioned Auditor item `IFA-2026-09-06-R64` (39th consecutive clean
confirmation) and actioned its one recommendation: replaced the last 4
pre-refresh `#1478FF` literals (inert `gradient` Tailwind class strings
in `site-config.ts`) with `#0F66E0` for full sitewide token
consistency — zero visual effect. Adversarially diffed
`service-details.ts` pricing copy against `site-config.ts`'s
`pricingPackages`/`carePlans` and the JSON-LD price extractor; found no
defect (both surfaces independently label the same starting price).
TypeScript, lint, and build passed; verified via a real `next start`
21-route sweep. Pushed to `origin/main`.

## Round 40 — 2026-09-05

Fixed a real Planner defect (`71d233f`): `goToStep()` scrolled to top
synchronously before React committed the new step's DOM, so scroll-anchoring
silently kept the old position and focus never left the Continue/Back
button. Moved scroll+focus into a post-render `useEffect` and added a polite
live-region step announcement for assistive tech. Verified before/after with
real CDP mouse events against a production server. TypeScript, lint, and
build passed; pushed to `origin/main`.

## Round 29 — 2026-09-04

Contact identity, phone, production metadata/sitemap, and United States/payment truth copy
implemented as f35a2a6 on main. TypeScript, lint and build passed; public adoption and
Owner visual acceptance remain unconfirmed. This completes one workstream, not Chunk 5.

## Round 27 — 2026-09-01

- Opened the public Home at 1440×900 in the visible in-app Browser and measured
  the Owner-rejected baseline: correct copy/media proportions but a flat grid
  and two opaque-card reading versus mockup 06's architectural glass space.
- Changed component grammar instead of repeating a global opacity pass. Home
  now has layered architectural planes, luminous columns and beams, circuit
  traces/nodes, coordinate marks, a reflected floor, a protected double-rim
  copy pane, a deeper media chassis, and an inset credibility deck.
- Preserved the established headline/actions, truthful content, real media,
  `0.75×` looping playback, data-saving/reduced-motion behavior, and absence of
  visible/native playback chrome.
- Opened final 1440×900, 768×1024, and 390×844 renders plus the complete Home.
  All states are exactly width-contained with one main/H1; phone retains one
  architectural column while hiding secondary density. Sticky/z50 navigation,
  pointer pause, native Enter resume, and clean browser diagnostics pass.
- ESLint, optimized 23-page build, and post-build TypeScript pass. Durable
  target visualization, baseline/final PNGs, runtime metrics, and verification
  are indexed under `builder/evidence/`. The Round 27 commit is pushed to
  `origin/main`; public Render adoption and Owner acceptance remain pending.

## Round 28 — 2026-09-01

- Confirmed the Owner's scrolled-Home diagnosis in the visible in-app Browser:
  the architectural first viewport gave way to flat pale section bands and
  ordinary cards; Services and Pricing repeated the same shared failure.
- Extended the shared environment with portal planes, luminous cross-stage
  beams, and a perspective horizon. Replaced flat continuation/direct-section
  surfaces with bounded, rim-lit translucent bays so the architecture remains
  visible between protected content fields through every route height.
- Darkened secondary graphite copy to `#46576e`; the conservative protected-
  field model measures `5.5986:1`. Phone hides secondary portal/rail/data
  density while keeping one portal and simplified beams.
- Visible IAB route-family renders, video/FAQ/menu interactions, and 54 measured
  states at desktop/tablet/phone widths pass. Every state is width-contained
  with one main/H1 and sticky/z50 navigation.
- ESLint, optimized 23-page build, and TypeScript pass. The existing
  Owner/domain-blocked `metadataBase` warning is unchanged. Round 28 is pushed
  to `origin/main`; public Render adoption and Owner acceptance remain pending.

Earlier rounds 11–26 are preserved in
docs/archive/role-migration-2026-09-05/CYVEXLY_BUILD_SUMMARY.md.

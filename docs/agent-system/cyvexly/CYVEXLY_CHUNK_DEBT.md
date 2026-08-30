# Cyvexly Chunk Debt

Active-chunk (Chunk 2 — Core marketing pages, extending into Chunk 4 —
Utility pages) findings and reachable follow-ups. Not the full backlog — see
`CYVEXLY_PROJECT_CHUNK_MAP.md` for chunk-level direction.

## Open

1. **`/process` uses a simpler card-stack layout than
   `mockups/04-process-planner.png`'s left panel.** The mockup shows a
   vertical connected-line timeline (numbered circles joined by a line) with
   a separate "Typical Timing" summary table and an "Our Collaboration
   Promise" panel; the shipped page uses stacked cards with the timeframe as
   a small badge per card, and has no timing-summary table or collaboration-
   promise panel. This is a genuine gap, not a deliberate adaptation — it
   was a time-boxed choice to ship a real, content-complete page (all five
   stages' inputs/deliverables/approval points, matching vision §6.7)
   without the extra layout/table work. Revisit when Chunk 2 does a
   dedicated visual pass on this page.
2. **Remaining sitemap routes that still 404: `/about`, `/start`,
   `/privacy`, `/terms`.** As of round 2, `/services`, `/work` (+ three
   case-study pages), `/pricing`, `/process`, `/contact`, `/faq`, and
   `/accessibility` are all built and verified — most of the header/footer
   nav now resolves. `/about` and legal pages are honestly blocked on
   Owner-supplied facts (see `CYVEXLY_APP_DEBT.md` items 1 and 3); `/start`
   is Chunk 3 (Project Planner), not yet opened.
3. **Placeholder work-card imagery.** `selectedWork` / `caseStudies` in
   `src/lib/site-config.ts` use CSS gradients, not real screenshots/crops,
   for the three concept projects (Aurora Spaces, Nexora Systems, Vellora
   Care). This is honest (no fabricated client work) but should be replaced
   with real designed crops/screen sequences — `mockups/03-work-case-study.png`
   shows real architectural photography and desktop/mobile screen preview
   panels on the case-study template that this round could not add without
   a real design asset (round 2 did add a real color-swatch + typography
   "Visual direction" section per case study, closing part of this gap, but
   the photographic hero and desktop/mobile screen previews remain).
4. **Favicon: partially addressed round 2, social-sharing image still
   open.** Added `src/app/icon.svg` — a hand-authored abstract "C/Y signal
   mark" (an open orbit-ring arc plus a Y formed from two converging paths,
   single-color `#0F66E0`, no clichés) per vision §4's logo direction,
   replacing the Next.js default for browsers that honor the SVG icon link
   (Next.js emits both; the old `favicon.ico` default remains as a fallback
   for browsers/contexts that don't). **Verified:** valid build (`○
   /icon.svg` in the route table), served with correct content-type, and
   correctly linked in `<head>` (`rel="icon" ... type="image/svg+xml"`) —
   confirmed via a temporary dev server on a scratch port, not port 5173
   (see the round-2 report's Audibles for why). **Not verified:** actual
   pixel-rendered appearance in a browser tab — this unattended session has
   no working screenshot capability, so this is a code/serve-correctness
   proof, not a visual one. The next attended session or Auditor/Council
   round should confirm it actually looks right at 16×16/32×32. A real
   social-sharing (Open Graph) image is still not built — also blocked on
   `metadataBase`/domain per `CYVEXLY_APP_DEBT.md` item 2 for the metadata
   wiring, though the image asset itself doesn't strictly need the domain.
5. **Round-2 mockup comparison found real layout/density gaps on
   Services and Pricing vs. `mockups/02-services-pricing.png`** (visual
   floor comparison performed this round — see the round-2 report in
   `CYVEXLY_ACTIVE_CHUNK.md` for the full comparison):
   - Services: mockup uses a compact 6-card icon-led grid; the shipped page
     uses 7 denser text-only-until-round-2 cards (now with icon badges added
     round 2) with more per-card detail (problem/who/included/scope-change/
     next-action) than the mockup shows — a deliberate adaptation, since
     vision §6.2's explicit "each service card must answer..." requirement
     is more specific than the compact mockup thumbnail, but the 7th group
     ("Care & improvement") doesn't appear in the mockup's 6-card grid at
     all, worth a second look.
   - Services "Service Combinations" section: mockup shows icon-math cards
     (icon + icon + icon = named combo); shipped page uses an audience-type
     comparison table instead. Different framing, same informational intent
     — not fixed this round.
   - Pricing "What's Included in Every Project": mockup shows a per-package
     checkmark matrix; shipped page uses a flat 12-item checklist (matrix
     would be redundant since every item is checked for every package in
     the mockup) — a deliberate, reasoned adaptation, not a gap.
   - Pricing add-ons/billing tiles: mockup uses compact icon+text tiles;
     shipped page uses full tables/lists matching vision §7's complete
     add-on price-range list — again a deliberate adaptation favoring the
     more detailed written vision over the compact mockup, but Pricing
     still has no icon badges (Services now does after round 2's fix).
   - Both pages' final-CTA headline ("Not sure which package/services fits/
     you need?") differs from the mockup's "READY TO BUILD SOMETHING
     EXCEPTIONAL?" — cosmetic, not fixed this round.

## Resolved round 2

- **Fixed a real Next.js 16 runtime bug**: `/work/[slug]` initially typed
  `params` as a plain `{ slug: string }` object (typecheck passed, since the
  hand-written type bypassed the framework's generated `PageProps` check),
  but Next.js 16's dynamic `params` is a Promise that must be awaited —
  every case-study route 404'd at runtime with a logged
  `sync-dynamic-apis` error until fixed to `params: Promise<{ slug: string
  }>` + `await params`. Caught only by real dev-server route testing after
  build/typecheck/lint all passed clean — see `CYVEXLY_WATCH.md`.
- **Closed a real visual-comparison gap**: opened `mockups/03-work-case-
  study.png` and found the case-study template was missing the "visual
  system excerpt" (item 7 of vision §6.5) the mockup shows as a color-swatch
  + typography specimen panel. Added a real "Visual direction" section per
  case study (actual project palette hex values rendered as swatches,
  verified via `getComputedStyle` to match, plus a typography note) rather
  than leaving the gap unaddressed.
- **Closed a related icon-parity gap on Services**: `mockups/02-services-
  pricing.png` shows icon badges on every service card; the initial Services
  build had none. Added a small hand-authored inline-SVG icon set
  (`service-icon.tsx`, 7 simple line icons, no external asset needed) rather
  than leaving it as an unaddressed observation.
- **Fixed the dangling footer service anchors**: `footerNav.services` in
  `site-config.ts` has linked to `/services#business-websites` etc. since
  round 1, but `/services` didn't exist until this round, so those anchors
  were previously part of a 404 page. The new Services page includes a
  "Popular website types" section whose card `id`s exactly match those five
  existing footer anchor targets — verified all 5 (+ the 7 core-service-
  group anchors) resolve via `document.getElementById`.

## Resolved round 1

- Fixed `.codex/roles/scripts/Claim-BuilderLock.ps1` failing to parse for
  every invocation (not a lock-contention condition) because the file had no
  UTF-8 BOM and its embedded em-dash was misread; added a BOM. See
  `CYVEXLY_WATCH.md`.
- Fixed Next.js 16's `next dev` auto-appending a `<!-- BEGIN:nextjs-agent-rules
  -->` block into the Owner-authored root `AGENTS.md` on every dev-server
  start; removed the appended block and set `agentRules: false` in
  `next.config.ts`. See `CYVEXLY_WATCH.md`.
- Fixed `eslint.config.mjs` linting `.codex/runtime/**` (another role's
  disposable build/runtime output, not product source) by adding it to
  `globalIgnores`.
- **Full visual comparison against `mockups/01-home.png` is now done**, using
  real screenshots the concurrently-running Auditor round happened to publish
  to the shared durable evidence root
  (`docs/agent-system/cyvexly/auditor/evidence/auditor-20260830T1324Z-current-*.png`)
  while this Builder's own dev server was live — genuine rendered-output
  evidence of this round's actual Home page, not a substitute. Desktop
  (1280×720) and the full mobile scroll (375×~8900) match the mockup's
  hierarchy, composition, and cyber-arctic palette closely: hero layout/copy,
  credibility strip, three labeled concept-project cards, six capability
  cards, the "not a DIY builder" statement, five-stage process, three-tier
  pricing, FAQ, and final CTA all render in the right order with no clipping
  or overlap on desktop or mobile.
- **Fixed a real WCAG AA text-contrast failure in the color system.** The
  concurrent Auditor round's contrast probe
  (`docs/agent-system/cyvexly/auditor/evidence/auditor-20260830T1324Z-contrast-probe.md`)
  measured the vision's suggested "Cyber blue" `#1478FF` at 4.07:1 as white
  button text and 3.67:1 as small link text — both below the 4.5:1 AA
  threshold for normal text that vision §13 requires. The vision table marks
  `#1478FF` as a "Suggested value," so darkened the `--color-cyber-blue`
  token to `#0F66E0` (5.25:1 as button text, 4.74:1 as link text on the
  arctic-mist background — both now pass) and its hover/focus shade to
  `#0B4FB0`. While auditing the same class of failure, independently found
  and fixed the same problem in `--color-signal-emerald` (`#16B777` measured
  2.35:1 on arctic mist, 2.16:1 on ice-field — failing even the 3:1 large-text/
  UI-component floor) by darkening it to `#0A6B45` (5.92:1 / 5.45:1 / 6.56:1
  against arctic mist / ice-field / white). Verified all three pairs by
  reading real computed styles in the running app and computing WCAG relative
  luminance/contrast in-browser (same formula the Auditor's probe used), not
  just by calculation against the source file. Decorative-only uses of the
  original brighter blue (the orbit graphic's gradient, the work-card
  gradient placeholders) were left unchanged since WCAG text-contrast rules
  do not apply to non-text decoration.
- **Found and fixed a real tablet-width (768px) defect** from that same
  evidence: the header's desktop nav switched on at Tailwind's `md` (768px)
  breakpoint, but five nav links + the logo + the "Describe your project"
  button do not fit at 768px — the tablet screenshot showed "About" clipped
  behind the CTA button. Root cause was the breakpoint choice, not spacing;
  fixed by moving the header's mobile/desktop nav switch from `md:` to `lg:`
  (1024px) in `src/components/site-header.tsx`, so tablet widths now get the
  hamburger menu instead of a cramped desktop nav. Verified by measuring
  `getBoundingClientRect()` for the logo/nav/CTA at 768px (hamburger shown,
  no desktop nav in the layout) and at 1024px (full nav visible, zero
  overlap between logo/nav/CTA) — typecheck, lint, and build all still pass.

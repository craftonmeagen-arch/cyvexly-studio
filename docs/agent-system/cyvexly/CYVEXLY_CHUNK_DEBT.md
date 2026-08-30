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
2. **Remaining sitemap routes that still 404: `/about`, `/privacy`,
   `/terms`.** As of round 4, `/services`, `/work` (+ three case-study
   pages), `/pricing`, `/process`, `/contact`, `/faq`, `/accessibility`,
   and `/start` (Project Planner, built round 4) are all built and
   verified — only `/about` and the two legal pages remain, all honestly
   blocked on Owner-supplied facts (see `CYVEXLY_APP_DEBT.md` items 1 and
   3).
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
   (see the round-2 report's Audibles for why).

   **Round 3: got real pixel evidence of small-size rendering for the
   first time, via a proxy method, and found a genuine legibility
   concern.** This session still cannot screenshot a live browser tab
   (unchanged limitation — see `CYVEXLY_WATCH.md`), but rendered the exact
   same path data through Next's `ImageResponse`/`resvg` pipeline (the
   same rasterizer used for `opengraph-image.tsx`) at 16px, 32px, and 64px
   in a temporary throwaway route, fetched the real PNG, and visually
   inspected it — then deleted the temporary route and captures
   immediately after (ephemeral-evidence rule). At 64px and 32px the mark
   reads cleanly as an orbit ring + Y. **At 16px — the actual default
   browser-tab favicon size — it does not: it degrades to an
   indistinct blur**, and a follow-up test bumping `stroke-width` from
   2.6 to 3.4 and 4.2 did not meaningfully fix it, pointing to overall
   shape complexity (two thin overlapping strokes) rather than line
   weight as the real cause. **Caveat, stated honestly:** `resvg` is a
   real SVG rasterizer but is not proof of exactly how Chrome/Safari/
   Firefox render an `<link rel="icon">` SVG in an actual tab (device
   pixel ratio and browser-specific favicon scaling can differ) — treat
   this as strong evidence of a real risk, not a final visual verdict.
   **Recommendation:** the next attended session or Auditor/Council round
   should confirm this in a real browser tab; if confirmed, the fix is
   likely a simplified/bolder small-size mark rather than a stroke-width
   tweak (e.g., a solid-fill glyph or a single dominant shape instead of
   two thin overlapping strokes), possibly via a `sizes="16x16"` PNG
   favicon variant alongside the SVG rather than relying on one mark to
   scale from 16px to 64px.

   **Social-sharing (Open Graph) image asset: built and pixel-verified
   round 3; the metadata wiring remains correctly blocked on the domain
   decision, confirmed by testing rather than assuming.** Added
   `src/app/opengraph-image.tsx` using Next's `ImageResponse` special-file
   convention: reuses the exact `icon.svg` C/Y signal-mark path data, the
   real cyber-arctic palette tokens, the recommended launch headline, and
   the "Independent web studio · Available worldwide" line (vision §6.1).
   Fetched the real generated 1200×630 PNG and visually inspected it (not
   just status/content-type): correct colors, correct mark, correct copy,
   no clipping, no font-load failure. First tested against the live *dev*
   server, where the auto-generated `og:image`/`twitter:image` URLs
   resolved correctly to the real request origin even with `metadataBase`
   unset — which looked like it disproved the domain-block assumption in
   `CYVEXLY_APP_DEBT.md` item 2. **That would have been a wrong
   conclusion:** checking the actual `pnpm run build` output caught it —
   the build prints `metadataBase property in metadata export is not
   set ... using "http://localhost:3000"`, and the real static HTML in
   `.next/server/app/index.html` bakes in
   `http://localhost:3000/opengraph-image?...` as the absolute
   `og:image`/`twitter:image` URL. Dev mode resolves per-request;
   the production static build resolves once at build time using a
   hardcoded fallback — only the build behavior matters for what actually
   ships. So: the image generator itself is real, on-brand, and needs no
   domain to exist — it stays in source now, ready to go. But do not
   deploy until `metadataBase` is set (per item 2, unchanged), or the live
   site will ship social-preview meta tags pointing at
   `http://localhost:3000`, which is worse than shipping no preview image
   at all.
5. **Round-2 mockup comparison found real layout/density gaps on
   Services and Pricing vs. `mockups/02-services-pricing.png`** (visual
   floor comparison performed this round — see the round-2 report in
   `CYVEXLY_ACTIVE_CHUNK.md` for the full comparison):
   - Services: mockup uses a compact 6-card icon-led grid; the shipped page
     uses 7 denser text-only-until-round-2 cards (now with icon badges added
     round 2) with more per-card detail (problem/who/included/scope-change/
     next-action) than the mockup shows — a deliberate adaptation, since
     vision §6.2's explicit "each service card must answer..." requirement
     is more specific than the compact mockup thumbnail. Re-verified: the
     7th group ("Care & improvement") is absent from the mockup's visible
     6-card grid but IS listed in the same mockup's own footer "Services"
     column (as "Core & Improvement") — so the mockup's intended taxonomy
     does include a 7th category, it's just cropped from the main grid
     capture. This confirms 7 groups is the correct target, not a Builder
     addition beyond the mockup's intent.
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
     add-on price-range list — a deliberate adaptation favoring the more
     detailed written vision over the compact mockup. (Icon-badge parity
     itself — Pricing having no icons where Services does — was fixed
     round 3; see "Resolved round 3" below. The tables-vs-tiles layout
     choice remains a deliberate adaptation, not fixed.)
   - Both pages' final-CTA headline differed from the mockup's "READY TO
     BUILD SOMETHING EXCEPTIONAL?" — **revisited round 3, not just
     copied.** Vision §4's own voice guide explicitly favors grounded,
     practical language over hype ("Avoid: 'We make all your dreams come
     true.'"), so literally copying the mockup's exclamation-heavy line
     would have worked against the vision's own instructions, not toward
     them. Instead changed the headline to "Ready to make your business
     unmistakable?" on both Services and Pricing (echoes the site's own
     hero headline for full-circle brand cohesion — a real copywriting
     technique, not filler) and moved the original "Not sure which
     services/package..." line down into the supporting paragraph, so
     both the confident hook and the reassuring detail survive. Verified
     rendered on both pages via the live dev server.

## Resolved round 2

- **Fixed a real heading-hierarchy defect found by direct measurement, not
  just code review.** After the icon/port work, ran an actual heading-level
  check (`querySelectorAll('h1,h2,...')`, checked for any level skip) across
  every round-2 page rather than relying on construction-time judgment. Six
  of seven passed clean; `/work` skipped H1→H3 with no H2 in between,
  because `WorkGrid`'s shared project-card component used `<h3>` for card
  names while `/work/page.tsx` never wraps the grid in its own `<h2>`
  section (unlike the Services page's own inline "Recent work" markup,
  which correctly nests similar cards under an `<h2>`). Fixed by changing
  `work-grid.tsx`'s card heading to `<h2>` (verified the component is only
  used on `/work`, so this couldn't regress Services); re-measured all seven
  pages afterward and confirmed zero skipped levels everywhere, including
  the case-study template, FAQ, Accessibility, and the custom 404.
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

## Resolved round 3

- **Closed the Pricing icon-parity gap** (part of item 5): added
  `src/components/package-icon.tsx`, five hand-authored inline-SVG icons
  (one per package — Signal: beacon/signal-strength arcs, Orbit: ring +
  center dot, Nexus: three connected nodes, Commerce: bag, Custom system:
  gear/compass), matching the existing `service-icon.tsx` pattern (same
  22px stroke icon in an 11×11 rounded `bg-cyber-blue/10` badge). Wired into
  both the top three-card grid and the bottom two-card row on
  `src/app/pricing/page.tsx`. Verified via the real dev server: `tsc
  --noEmit` and `pnpm run lint` clean, `document.querySelector('svg')`
  confirmed present inside the correct badge class for all five package
  cards by name, zero console errors, no horizontal overflow at 375px
  mobile width. Pixel appearance not confirmed via a live screenshot
  (unattended-session limitation still applies — see `CYVEXLY_WATCH.md`),
  but the concurrent Auditor's `pricing-desktop.png` (see the round-3
  report addendum) independently confirmed correct rendering, and a
  manual WCAG contrast check (same formula/method as round 1's original
  contrast fixes) of the icon stroke color `#0F66E0` against the
  frosted-glass badge/card background computed to roughly 5:1 — passes
  both the 4.5:1 text and 3:1 non-text/UI-component thresholds with
  margin, consistent with round 1's already-verified 5.25:1 for the same
  color against the arctic-mist page background.

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

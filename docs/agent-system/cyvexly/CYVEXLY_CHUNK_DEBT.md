# Cyvexly Chunk Debt

Active-chunk (Chunk 1 — Foundation & Home) findings and reachable follow-ups
from global round 1. Not the full backlog — see `CYVEXLY_PROJECT_CHUNK_MAP.md`
for chunk-level direction.

## Open

1. **Other sitemap routes 404.** The header/footer link to `/services`,
   `/work`, `/pricing`, `/process`, `/about`, `/start`, `/contact`, `/faq`,
   `/privacy`, `/terms`, `/accessibility`. These are intentionally out of
   Chunk 1's coherent slice (Home + design-system foundation) and are Chunk
   2/3/4's job per the project map — not a defect to fix inside Chunk 1.
2. **Placeholder work-card imagery.** `selectedWork` in
   `src/lib/site-config.ts` uses CSS gradients, not real screenshots/crops,
   for the three concept projects (Aurora Spaces, Nexora Systems, Vellora
   Care) named in the vision and mockups. This is honest (no fabricated
   client work) but should be replaced with real designed crops once Chunk 2
   builds the actual case-study pages for those concepts.
3. **`/favicon.ico` and social-sharing image are still the Next.js
   defaults.** Vision §12 requires a final wordmark/favicon and
   social-sharing image before launch; out of scope for Chunk 1.

## Resolved this round

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

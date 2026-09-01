# Auditor R18 — Round 22 continuation glass and sticky navigation

## Review identity and isolation

- Review: `IFA-2026-09-01-R18` / `auditor-20260901T1530Z-018`.
- Heartbeat minute zero: `2026-09-01T15:29:25.880Z`.
- Current docs-only HEAD: `3b7a57efa7bce97a0b9c10bf8ec2bc8d6a3ec91d`; accepted product commit: `4265fa4`; `src/` tree `aaab79e355b7536536b12b37315f3759b7a38514` (41 files). The accepted source changed since R17 in `globals.css`, Home, Services, and `site-config.ts`.
- No `.engine-lock` was present at entry. The standard review guard could not write `.codex/role-state/auditor.active.json`, so I used only the exact role-owned runtime `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1530Z-018` on port `5273` and left all Builder/Council resources untouched.
- During the review/cleanup window, Builder session `cyvexly-builder-20260901T153920Z-r23` claimed `.engine-lock` and advanced HEAD to `22279618f07b0d6e0f7682b65cf8af8d778f4207` (`2227961`). That later source was not inspected; the R18 verdict remains scoped to immutable `4265fa4`.

## Fresh scope and method

This round directly audited the accepted Round 22 changes rather than repeating R17's Contact/FAQ validation: the narrowed root stacking selector, the new full-width `.glass-continuation` fields on Home and Services, and removal of the unavailable About link from primary/footer navigation. I used the real Codex in-app Browser at 1280, 1024, 768, 390, and 320 requested widths; physically clicked Home and Services FAQ controls, opened/closed the compact menu at terminal scroll, activated the Services CTA and browser Back, exercised the About 404 boundary, and opened exact Chrome-rendered Home/Services captures at desktop and tablet widths. Direct role-runtime ESLint and TypeScript shims passed.

## Results

### `CYV-IFA-010` — verified closed in R18

The accepted `4265fa4` selector is now `.site-root > main, .site-root > footer`, so the direct `SiteHeader` is no longer matched. In the real IAB, Home and Services computed the header as `position: sticky; z-index: 50; top: 0` at desktop, tablet, 390px, and 320px states. After terminal scrolling, the header stayed at the viewport top and `elementFromPoint(10,10)` resolved inside `HEADER`; opening the compact menu expanded the sticky header to 377px with every visible destination inside the viewport. This closes the R14 regression; production cross-browser behavior remains outside this local proof.

### Continuation-glass result — pass, no new defect

Home rendered five and Services three full-width continuation bands with computed `rgba(235, 246, 253, 0.66)` and `blur(11px) saturate(1.22)`. At 1280, 1024, 768, 390, and 320 requested widths, each band matched the layout width exactly (`1265`, `1009`, `753`, `375`, and `305` respectively) with zero horizontal overflow. Opened Home and Services desktop captures and the Services tablet capture show the quieter pale-blue environment preserving dark proof/CTA panels, card hierarchy, and protected copy rather than flattening or washing them out.

### Navigation/content truth — pass

The compact menu at terminal scroll exposed Services, Work, Pricing, Process, and Describe your project, with no About link; activating Services closed the menu and landed at `/services` at scroll position `0`. Home/Services each retained exactly one `main` and one `h1`; heading scans found no level skips. Direct `/about` remains an intentional HTTP/hydrated 404 with title `Page not found — Cyvexly Studio` and no advertised `/about` link. Privacy/Terms 404s remain known Owner/legal debt, not a new R18 finding.

FAQ expand/collapse worked on Home and Services, the Services continuation CTA reached `/start` and browser Back recovered `/services`, and Browser warning/error diagnostics remained empty. The R17 `CYV-IFA-011` Contact/Planner contrast finding remains open and was not reclassified by this unrelated source delta.

## Evidence

- `auditor-20260901T1530Z-018-runtime-metrics.json` — source, responsive, sticky, menu, route, heading, and diagnostic metrics.
- `auditor-20260901T1530Z-018-home-1440.png` — opened Home desktop top render.
- `auditor-20260901T1530Z-018-home-full.png` — opened Home desktop full-page continuation render.
- `auditor-20260901T1530Z-018-services-full.png` — opened Services desktop full-page continuation render.
- `auditor-20260901T1530Z-018-services-tablet.png` — opened Services tablet hero/continuation render.

## Limits

The public Render origin was blocked by managed network permissions. The CLI phone screenshot path was deliberately not retained because headless Chrome without CDP device emulation cropped a desktop layout; exact phone geometry and interaction claims come from the real IAB viewport override. Physical keyboard hardware, reduced-motion preferences, Safari/Firefox, field Web Vitals, external mail delivery, and Owner visual acceptance remain unconfirmed.

## Cleanup

After publication, reset the IAB viewport, close tab `1`, stop only the exact Auditor server and Chrome process chain, remove the exact Auditor runtime and temporary Chrome profiles, verify port `5273` is clear, and recheck that no Builder lock or source bytes were touched.

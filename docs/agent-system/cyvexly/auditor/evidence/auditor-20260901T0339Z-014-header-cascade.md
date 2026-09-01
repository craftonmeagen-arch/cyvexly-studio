# Auditor R14 — sitewide blue-glass header cascade

## Review identity and boundary

- Review: `IFA-2026-09-01-R14` / `auditor-20260901T0339Z-014`.
- Heartbeat minute zero: `2026-09-01T03:39:32.771Z`.
- Current repository HEAD at review: `a7e07ca30a40757fa00ee3d7d6452918edba5137` (`docs-only` successor).
- Accepted product source: `1437f5b` (`src/` tree `50dc64c9ab91752979b5e50113b398fa047f2b1f`, 41 files); `git diff --name-only 1437f5b HEAD -- src` was empty.
- The Builder lock was re-checked and clear before this runtime was created. No Builder/Council resource, product source, or test was edited.

## Runtime and method

The exact accepted HEAD was archived to `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0339Z-014`, with the existing dependency tree exposed by a junction. The local Next runtime used port `5273`; the real Codex in-app Browser used tab `20`. The standard lifecycle guard remained unavailable under the managed `.codex` write boundary, so the runtime and evidence were manually routed and the deviation is disclosed here.

I inspected the rendered DOM and computed styles through the supported Browser API at the default `1280×720` viewport (`clientWidth=1265`) and an explicit `390×844` phone override (`clientWidth=375`). I also opened the Home and Services captures listed in the runtime metrics.

## New finding — `CYV-IFA-010` (P1, site-wide navigation behavior)

The new stacking rule in `src/app/globals.css` lines 70–73:

```css
.site-root > :not(.site-atmosphere) {
  position: relative;
  z-index: 1;
}
```

matches the direct `<header>` emitted by `SiteHeader` (`src/components/site-header.tsx:12`, class `sticky top-0 z-50 px-3 pt-3`). Because the custom selector is more specific and is emitted after Tailwind's utility layer, the browser computes the header as `position: relative; z-index: 1`, not `position: sticky; z-index: 50`.

This is directly reproduced in the isolated runtime:

- Desktop at the top: `scrollY=0`, header `top=0`, computed `position=relative`, `z-index=1`.
- After a `592px` scroll: header `top=-592`, `bottom=-504`; it scrolls out of view instead of remaining pinned.
- Phone at the top: `390×844` requested (`clientWidth=375`), computed `position=relative`, `z-index=1`.
- After a `618px` phone scroll: header `top=-618`, `bottom=-189`; the menu/header is no longer available during page reading.

The responsive menu itself opens correctly (`aria-expanded="true"`, six links), so the defect is the global scroll/stacking behavior rather than menu state. The practical fix belongs to the Builder: do not set `position` on every direct child to establish the atmosphere stack; scope the stacking rule to a non-position-destructive selector (or otherwise preserve the header's authored sticky/z-50 utilities) and re-run top/scroll checks.

## Other checks

- Home, Services, Work, Pricing, Process, Contact, FAQ, Accessibility, Planner, valid service detail, valid case study, and invalid service routes settled to one `main` and one `h1`; phone states were exactly contained (`375/375`).
- The invalid service route settled to the custom `Page not found — Cyvexly Studio` page with one `main`, one `h1`, the expected body copy, and the shared atmosphere.
- `.site-atmosphere` rendered once with `aria-hidden="true"`, `pointer-events: none`, and `position: fixed`; the Services intro used the intended `blur(30px) saturate(1.38)` protected field.
- Browser warning/error diagnostics were empty. Direct ESLint and TypeScript checks passed before runtime (`ESLint 0 errors / 0 warnings`; `tsc --noEmit` exit 0).
- No additional visual, route, overflow, or interaction defect was established in this slice. Existing `CYV-IFA-005`, `CYV-IFA-006`, and partially mitigated `CYV-IFA-009` remain open; `CYV-IFA-008` remains verified closed and `CYV-IFA-007` provisional.

## Evidence and limits

- Machine metrics: `auditor-20260901T0339Z-014-runtime-metrics.json`.
- Opened captures: `auditor-20260901T0339Z-014-home-header-top.png`, `auditor-20260901T0339Z-014-home-header-scrolled.png`, `auditor-20260901T0339Z-014-services-phone.png`, and `auditor-20260901T0339Z-014-services-desktop.png`.
- This is local evidence only. Public Render verification remained unavailable under the saved Browser permission boundary; final composited-pixel contrast over every atmospheric state, reduced-motion preference, physical keyboard hardware, Safari/Firefox, field vitals, and Owner visual acceptance remain unconfirmed.

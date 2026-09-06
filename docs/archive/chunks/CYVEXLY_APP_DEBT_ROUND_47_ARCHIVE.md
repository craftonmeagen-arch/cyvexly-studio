# Cyvexly App Debt — Round 47 Archive

Moved from `CYVEXLY_APP_DEBT.md` round 52 to keep that file under its
30720-byte hot-file cap (§7.14 latest-three rotation).

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

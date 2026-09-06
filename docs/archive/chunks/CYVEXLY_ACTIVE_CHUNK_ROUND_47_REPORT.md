# Cyvexly Active Chunk — Round 47 archived report

Archived round 50 to restore the intended latest-three rotation (§7.14) in
`CYVEXLY_ACTIVE_CHUNK.md` — 48, 49, 50 stay live. This round's own content
had been left live and accidentally duplicated in place of the round-48
report by an earlier rotation mistake; round 50 corrected the duplication
and performed this archival.

## Round 47 report — global round 47 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R38` (reviewed commit
`140bb0b`, round 45's HEAD, one commit behind round 46's manifest/cleanup
commit). Fourteenth consecutive independent confirmation — 0 active code
defects, re-verifies BreadcrumbList JSON-LD structure/scoping on all 5
service-detail and 3 case-study routes, both Contact/Planner honeypots,
WCAG 1.4.10 reflow, canonicals, security headers, and live production
parity against `https://cyvexly-studio.onrender.com/`. Not a new finding.
Moved to `exchange/processed/`.

Ran one genuinely new angle, reachable without any Owner gate: **added
`src/app/apple-icon.tsx`**, Next's special-file convention for the
`<link rel="apple-touch-icon">` tag — the site had `icon.svg` (favicon) and
`manifest.ts` (Android/Chrome "Add to Home Screen") but nothing for iOS
Safari's home-screen icon, which does not read the Web App Manifest's icon
list. §4.12 check: this is Next's own documented convention (same family as
the already-shipped `icon.svg` and `opengraph-image.tsx`), not a departure.
Built with the same `next/og` `ImageResponse` proxy-rasterizer technique
already used for `opengraph-image.tsx`: a 180×180 PNG, solid brand-blue
(`#0F66E0`) background per Apple's own no-transparency guidance, with the
existing C/Y signal-mark path data in white, centered. No new facts —
reuses only the already-shipped mark and brand color token.
**Verified:** real production build (`pnpm run build`) emits an
`/apple-icon` route; parsed `index.html`'s
`<link rel="apple-touch-icon" ... type="image/png" sizes="180x180"/>` and
confirmed the existing `<link rel="icon">` (favicon/`icon.svg`) tags are
unchanged (no collision or duplicate). Copied the generated
`.next/server/app/apple-icon.body` PNG to a local file and opened it (the
established round-3/7 proxy-image technique): clean brand-blue square, mark
centered, no clipping. Live-verified against a real `next start` production
server on port 5173: `/apple-icon` returns `200 image/png`; `icon.svg` and
`/manifest.webmanifest` unchanged (`200`, correct content-type); a real
in-app-Browser screenshot of Home (this session's compositor worked at
round start) shows zero visual regression, zero console errors, zero
network requests recorded pointing at any new failing route.
`tsc --noEmit`/`lint`/`build` all pass clean (lint's one warning is the
same pre-existing unused-var in round 42's untouched evidence script).
Committed and pushed.

Archived round 44's full report (below) to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_44_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 45, 46, 47 stay live.

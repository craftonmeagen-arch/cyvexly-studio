# Cyvexly App Debt — Round 52 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 56 to keep that file under its
30720-byte hot-file cap.

## Resolved round 52

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R43`** — a nineteenth
  consecutive independent confirmation (reviewed commit `eb03a33`, round
  50's HEAD, one commit behind round 51's OG/Twitter-metadata commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — per-route Open Graph images.** Round 51's handoff named
  this directly: every route shared Home's single generated
  `opengraph-image`, so shared links for About/Services/Pricing/Work/
  Process/Contact/FAQ/Project Planner all showed the same generic Home
  preview instead of one reflecting the actual page. Added
  `src/lib/og-image.tsx`'s `renderRouteOgImage()` (reuses Home's brand
  mark/palette/grammar) and a new `opengraph-image.tsx` per static route,
  reusing only each route's own already-shipped title/description — no
  invented copy.
- **Verified:** `tsc`/`lint`/`build` all pass clean. Real `next start`
  server on port 5173: each of the 9 routes' `og:image` meta now resolves
  to its own distinct URL; downloaded and visually opened the actual
  generated PNGs (About, Services, Pricing, Work, Process, Contact, FAQ,
  Start, Home) — correct brand mark, page name, and description text, no
  clipping/overflow. **Regression check on the dynamic routes:** before
  shipping, moved the two new sibling files (`services/opengraph-image.tsx`,
  `work/opengraph-image.tsx`) aside, rebuilt, and confirmed
  `/services/business-websites` and `/work/aurora-spaces` already had no
  `og:image` at all in that baseline — restored the files and confirmed the
  same absence after. This is a real before/after A-B test proving the
  dynamic-route image gap is pre-existing (Next's image-convention file
  does not cascade into a parameterized child segment the way static
  metadata text fields do), not something this round's sibling files broke.
  Full 26-route/asset regression sweep (all pages, sitemap, robots,
  manifest, icons, security.txt, an invalid path) shows zero regressions.
  Committed (`57b8fb7`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping), removed
  the round's own temporary log files and scratch PNGs.

# Cyvexly App Debt — Round 75 archive

Moved from `CYVEXLY_APP_DEBT.md` round 85 to keep that file under its
30,720-byte hot-file cap. No history lost — the one-line outcome remains
in the consolidated rounds-43-74 list there ("74 extended color-token/
response-time audit"; round 75's own brand-color-token-consistency fix
is also summarized in `CYVEXLY_ACTIVE_CHUNK.md`'s Round 75 report).

## Resolved round 75

- **Checked the Auditor inbox first:** one new item,
  `IFA-2026-09-06-R64` (39th consecutive clean confirmation, 0 active
  code defects, reviewed commit `7db867c` — round 73's head, predating
  round 74's doc-only round). Moved to `exchange/processed/`.
- **Actioned its one recommendation.** The Auditor noted `site-config.ts`
  lines 56/66/114/152 (the `gradient` Tailwind class strings for
  Aurora Spaces and Nexora Systems) still hardcoded the pre-refresh
  `#1478FF` — round 73 had deliberately left these alone after
  confirming each `ConceptPreview` SVG's own opaque full-viewBox
  background `<rect>` fully covers the gradient div in every render
  path (inert, not a rendering gap), but flagged them for full
  sitewide token consistency. Replaced all 4 with `#0F66E0`. Verified
  via a real `next start` server: `grep -rn "#1478FF" src/` now
  returns zero matches anywhere in the codebase; the `ConceptPreview`
  background rects (lines 16/35/63) still fully cover the divs, so
  the fix is confirmed purely cosmetic-in-source with zero rendered
  effect.
- **Adversarially reviewed `service-details.ts` vs `site-config.ts`
  pricing** (the round-74 handoff's recommended fresh, not-yet-diffed
  surface), field-by-field. Every `serviceDetails[slug].package.price`
  reads "From $X" (e.g. Orbit "From $3,500"), while the matching
  `pricingPackages`/`carePlans` entry reads a bare "$X" (Orbit
  "$3,500"). Traced both render paths before concluding this was a
  defect: `/pricing` (`pricing/page.tsx` line 83) prefixes the bare
  price with its own "Starting at" label; `/services/[slug]`
  (`services/[slug]/page.tsx` line 224) prefixes its "From $X" string
  with a "Related starting point" label. Both independently
  communicate the same starting-price fact through different but
  non-contradictory copy — not a truth-claim inconsistency, just
  stylistic redundancy on the services-detail side ("starting point"
  + "From"). Also checked `structured-data.ts`'s
  `extractStartingPrice()`: its `\$([\d,]+)` regex matches the
  leading numeric figure regardless of a "From " prefix, so
  `AggregateOffer.lowPrice`/`OfferCatalog` JSON-LD values are
  identical either way — no schema defect. **No defect found** — a
  genuine negative result after real investigation, not skipped work.
- **Verified:** `tsc --noEmit`/lint/`pnpm run build` all clean (same
  pre-existing round-42 evidence-script lint warning, untouched). Real
  `next start` production server on port 5173: a 21-route sweep
  (every public static/dynamic route plus `/not-found`) returned 200
  (`/not-found` correctly 404s).
- Cleaned up: stopped the owned `next start` listener on port 5173
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen` before `Stop-Process`, not by process name); no
  scratch files were created this round.

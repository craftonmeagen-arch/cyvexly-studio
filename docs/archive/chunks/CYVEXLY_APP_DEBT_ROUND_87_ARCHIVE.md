# Cyvexly App Debt — Round 87 (archived)

Archived round 89 from `CYVEXLY_APP_DEBT.md` to keep that file under its
30,720-byte hot-file cap. Full detail preserved verbatim below.

## Round 87 — real defect fixed; Home pricing-preview overstated a capped inclusion as guaranteed

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R78` (53rd
consecutive clean confirmation, "PASS WITH COMMENDATION", 0 action
needed — same stale "Production Domain Connection" gate wording rounds
77-86 already noted). Moved to `exchange/processed/`.

Ran the standard verification suite first: `tsc --noEmit`/`pnpm run
lint`/`pnpm run build` all clean (zero warnings; same pre-existing
round-42 evidence-script lint warning) on unchanged round-82 source
(`f331746`).

**Convergence-check, fresh surface (the round-86 handoff's named
candidate):** diffed Home's other CTAs/claims (`src/app/page.tsx`) against
their `site-config.ts` source-of-truth arrays. `processSteps`/
`collaborationPromise` are directly reused (same array, no copy — no
drift possible). `credibilityPoints`/`capabilities`/`selectedWork` are
generic or already-labeled-concept claims with no measurable-fact
mismatch. **Found and fixed one real, reachable truth-precision defect:**
`pricingPreview`'s Nexus tier (rendered on Home, `src/lib/site-config.ts`
line 348) listed a feature as `"Two standard integrations"`, but the
single source of truth for that fact — `pricingPackages`'s Nexus `scope`
entry (line 621) — defines it as `"Up to two standard integrations"`, a
cap, not a guaranteed count. Every other page-count feature in the same
`pricingPreview` array correctly preserves "Up to" (e.g. Orbit's "Up to 7
core pages"), confirming this was an inconsistent-editing oversight, not
a deliberate simplification. A prospect reading only the Home preview
card would reasonably expect exactly two integrations included, an
overstatement of actual package scope. Fixed by changing the Home
feature string to `"Up to two standard integrations"`, matching the
Pricing page exactly (grep-verified: `"standard integration"` now has
exactly 2 occurrences sitewide, both saying "Up to two").
**Verified:** `tsc`/lint/production build clean after the fix; started a
real `next start` production server and confirmed the corrected string
renders in the actual page HTML (`curl` against `http://localhost:5173/`
showed `"Up to two standard integrations"` in three expected DOM/RSC
payload locations, none showing the old "Two standard integrations"
text); swept all 17 public routes, all 200. Cleaned up: stopped the
manually-started `next start` listener on port 5173 by its verified real
listener PID (`Get-NetTCPConnection -LocalPort 5173 -State Listen`),
confirmed port clear afterward; removed the two scratch server logs from
the OS temp root.
**Completion:** DONE WITH PROOF (1 real defect found and fixed).
Rotated this file (archived round 84's inline detail to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_84_ARCHIVE.md`, kept a
one-line pointer) to restore hot-file headroom ahead of adding this
round's entry.

# Cyvexly App Debt — Round 71 full detail (archived round 76)

Moved out of `CYVEXLY_APP_DEBT.md` round 76 to keep that file under its
30,720-byte hot-file cap. Round 71 fixed the `/work` dead-end filter-pill
defect and a hot-file-cap violation in `CYVEXLY_APP_DEBT.md` itself.

## Resolved round 71

- **Checked the Auditor inbox first:** two new items existed
  (`IFA-2026-09-06-R59`, `IFA-2026-09-06-R60`) — the 34th and 35th
  consecutive clean confirmations (0 active code defects). R59 flagged
  `CYVEXLY_CURRENT_STATE.md` over its byte cap; round 69 had already fixed
  that before R60 re-verified it closed. Both moved to `exchange/processed/`.
- **Found and fixed a real, previously-unflagged reachable defect on a
  fresh surface (`/work`'s filter UI), per round 69/70's recommendation
  to review surfaces not yet given a dedicated pass.** `workFilters` in
  `src/lib/site-config.ts` listed `"Redesign"` and `"Landing Page"` as
  filter pills, but no `selectedWork` item's `category` is ever
  `"Redesign"` or `"Landing Page"` (all three concept projects are
  `"Business Site"` ×2 or `"Commerce"` ×1) — clicking either pill
  guaranteed the empty state ("No projects match that filter yet.") on a
  core marketing page, for every visitor, permanently. Not a truth-claim
  violation (no fabricated work), but a real dead-end interactive control.
- **Fixed:** trimmed `workFilters` to `["All", "Business Site", "Commerce",
  "Concept"]` — every remaining filter matches at least one real item. Did
  not fabricate a new concept project to fill the missing categories
  (out of proportion to the defect, and not requested).
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated round-42 evidence-script lint warning,
  untouched). Real `next start` server on port 5173: a scripted click of
  every filter pill confirmed 0 empty states (`All`→3, `Business Site`→2,
  `Commerce`→1, `Concept`→3 cards); an 18-route sweep (all public static
  and dynamic routes plus `robots.txt`/`sitemap.xml`) returned 200.
- **Independently found and fixed a second real reachable defect: this
  file itself was already 2669 bytes over its 30720-byte hot-file cap**
  at round start (33389 bytes, confirmed via
  `.codex/roles/scripts/Test-HotFileCaps.ps1` — the same automated check
  the Auditor uses for `CYV-DOC-*` findings), from rounds 48-55's detail
  never having been rotated. Archived rounds 50, 51, and 55's full detail
  to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_{50,51,55}_ARCHIVE.md`;
  re-verified 0 hot-file-cap violations after the edit.
- Cleaned up: stopped the owned `next start`/`next dev` listeners
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen`, not process name). Two scratch log files
  (`next-dev-5173.log`, `next-start-5173.log`) under `$env:TEMP` could not
  be removed this round (Windows reported them locked after the owning
  process exited) — same transient lock behavior round 48 hit with a
  Chrome profile directory; left in place as disposable OS-temp artifacts,
  next round should retry `Remove-Item` and report if it persists.

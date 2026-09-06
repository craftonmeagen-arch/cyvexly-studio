# Cyvexly App Debt — Round 58 Full Detail (Archived)

Archived round 66 to keep `CYVEXLY_APP_DEBT.md` under its 30,720-byte
hot-file cap.

## Resolved round 58

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R48`** — a
  twenty-fourth consecutive independent confirmation (reviewed commit
  `176b91d`, round 56's HEAD, predating round 57's meta-description fix),
  0 active code defects. Its "Production Domain & DNS Connection" gate
  note is stale (round 53 verified the domain fully connected). Moved to
  `exchange/processed/`.
- **Fixed the one real finding it raised — a hot-file cap violation.**
  `Test-HotFileCaps.ps1` flagged `CYVEXLY_CURRENT_STATE.md` at 8,728 bytes
  against the reviewed commit (grown to 9,653 by round 58 start), over its
  own 8,192-byte cap. Archived rounds 52-56's detailed outcome paragraphs
  (already duplicated in `CYVEXLY_ACTIVE_CHUNK.md`/
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`) to
  `docs/archive/chunks/CYVEXLY_CURRENT_STATE_ROUNDS_52_56_ARCHIVE.md` and
  rewrote it as a lean dashboard. Re-ran the cap script clean afterward.
- **Found and fixed a real rotation-order defect in
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`** while archiving (same class as round
  50's `CYVEXLY_ACTIVE_CHUNK.md` fix): round 54's full closeout had stayed
  live while round 55's was already archived, skipping a round out of
  order. Restored correct latest-three order (archived round 54's full
  text; no content lost).
- **New angle — `html lang="en"` → `en-US`**, named as untried in round
  57's handoff. Owner direction `2026-09-04-14` confirms a United
  States-only launch market and structured data already uses
  `areaServed: "US"` throughout; `en-US` is the more precise BCP 47 tag.
  Fixed in `src/app/layout.tsx` (root layout) and
  `src/app/global-error.tsx` (replaces the root `<html>` when it fires).
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: fetched all 14 HTML routes plus
  sitemap/robots/manifest/an invalid path (18 total) — every HTML route
  renders `lang="en-US"`, zero regressions. `Test-HotFileCaps.ps1` re-run
  clean (0 violations across all 57 tracked files). Committed (`9a6ff1e`,
  `3b70fc0`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `Get-NetTCPConnection` before stopping). Two scratch
  server logs under the OS temp root (rounds 57 and 58) remain
  Windows-locked after process exit despite no matching process — same
  recurring class as round 48's temp-profile lock; left in place, next
  round should retry `Remove-Item` on them.

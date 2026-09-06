# Cyvexly App Debt — Round 63 Full Detail (Archived)

Archived from `CYVEXLY_APP_DEBT.md` round 64 to keep that file under its
30,720-byte hot-file cap.

## Resolved round 63

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R52`** — a
  twenty-eighth consecutive independent confirmation (reviewed commit
  `1854a3f`, round 60's HEAD, predating round 61's memory-pruning fix and
  round 62's dormant Cloudflare-bypass gate), 0 active code defects.
  Moved to `exchange/processed/`.
- **Found a real timing-side-channel defect in round 62's own new
  `isTrustedOrigin()` gate** (`src/lib/mailer.ts`), continuing the pattern
  from rounds 60-61 of adversarial review of this file's newest code
  surfacing real issues. The origin-secret comparison used plain `===`,
  which short-circuits at the first differing byte — not exploitable
  today since the gate is dormant (`CF_ORIGIN_SECRET` unset in
  production), but present in the code regardless of activation state.
- **Fixed:** switched to `node:crypto`'s `timingSafeEqual`, with an
  explicit length check first (mismatched-length buffers throw in
  `timingSafeEqual` rather than compare) and an early `false` for a
  missing header.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: dormant state confirmed
  unaffected; activated state (env var set) confirmed rejecting missing,
  wrong-length, and wrong-but-same-length header requests with 403 on
  both routes while the exact-matching header still passes through; a
  15-route regression sweep was clean.
- Cleaned up: stopped both owned `next start` servers (verified real
  listener PIDs via `netstat`/`LISTENING`, stopped with `taskkill` since
  this session's shell is Git Bash). Removed this round's scratch server
  logs.

Round 62's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_62_ARCHIVE.md` (moved there
round 63 to keep this file under its 30,720-byte hot-file cap): prepared
the dormant Cloudflare-bypass origin-secret gate.

Round 61's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_61_ARCHIVE.md` (moved there
round 62 to keep this file under its 30,720-byte hot-file cap): the
rate-limiter memory-pruning fix.

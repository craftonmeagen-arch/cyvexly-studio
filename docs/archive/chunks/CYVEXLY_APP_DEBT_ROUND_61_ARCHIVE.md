# Resolved round 61

Archived from `CYVEXLY_APP_DEBT.md` round 62 to keep that file under its
30,720-byte hot-file cap.

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R51`** — a
  twenty-seventh consecutive independent confirmation (reviewed commit
  `6f41600`, round 59's HEAD, predating round 60's rate-limiter fix), 0
  active code defects. Moved to `exchange/processed/`.
- **Found and fixed a second real defect in the same rate-limiter code
  round 60 had just fixed, via adversarial review of that fix.**
  `checkRateLimit` (`src/lib/mailer.ts`) stores its sliding window in a
  `Map<string, number[]>` keyed by client IP but never deleted a key —
  once a key's timestamps all age out of the 15-minute window, the
  filtered-to-empty array is written back instead of the key being
  removed, so the key lives in memory forever. Any caller that can vary
  its own key grows the map without bound; the `x-forwarded-for`
  fallback in `getClientIp` (still the only path for non-Cloudflare
  traffic, e.g. the direct Render origin round 60 already named as a
  residual bypass) is exactly such a caller, since the client fully
  controls that header — a pure in-process memory-exhaustion DoS,
  additive to round 60's already-named bypass gap, not a duplicate of it.
- **Fixed:** added `pruneStaleEntries()`, invoked from `checkRateLimit`
  every 5 minutes or immediately once the map exceeds 5,000 tracked
  keys, deleting any key whose timestamps are now all outside the
  window. No change to external rate-limit behavior.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: same-IP 6-request regression
  still 429s on the 6th before and after the change; a 5,200-request
  concurrent burst with unique spoofed `x-forwarded-for` values
  completed with zero fetch errors and no server-log errors (exercising
  the size-triggered immediate prune, since 5,200 exceeds the 5,000-key
  threshold well before the 5-minute timer would fire); the same-IP
  regression re-checked immediately after the burst still correctly
  429'd on the 6th on both `/api/contact` and `/api/planner`. A 14-route
  sweep found zero regressions. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`LISTENING` before stopping). Removed this
  round's scratch server log, PID file, and burst-test script.

Round 60's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_60_ARCHIVE.md`: the
Cloudflare `cf-connecting-ip` IP-spoofing fix this round's finding builds
on.

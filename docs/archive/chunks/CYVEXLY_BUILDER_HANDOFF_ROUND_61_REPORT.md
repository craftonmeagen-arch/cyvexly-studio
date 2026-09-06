# Cyvexly Next Builder Handoff — Round 61 Full Closeout (Archived)

Moved from `CYVEXLY_NEXT_BUILDER_HANDOFF.md` round 63 to keep that file
under its 12,288-byte hot-file cap.

## Round 61 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-06, 50-minute hard
time limit (unattended)
**Start source:** `1854a3f` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item
(`IFA-2026-09-06-R51`) and found/fixed a second real defect in the same
rate-limiter code round 60 had just fixed.
**Completion:** REAL SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-06-R51` (reviewed commit `6f41600`, round 59's HEAD,
  predating round 60's rate-limiter fix) is a **twenty-seventh
  consecutive independent confirmation, not a new finding** — 0 active
  code defects. Moved to `exchange/processed/`.
- **Found and fixed an unbounded-memory-growth defect in
  `checkRateLimit` (`src/lib/mailer.ts`).** The in-memory `Map` tracking
  submission timestamps per key never deleted a key once created — a
  stale key's timestamps filter down to an empty array but the key
  itself stays in the map forever. Any caller varying its own key grows
  the map without bound; the `x-forwarded-for` fallback in `getClientIp`
  (still the only path for non-Cloudflare traffic, e.g. the direct
  Render origin round 60 already named as a residual bypass) is exactly
  such a caller, since the client fully controls that header. A pure
  in-process memory-exhaustion DoS, independent of round 60's already-
  named rate-limit-bypass gap.
- **Fixed:** added periodic pruning — every 5 minutes, or immediately if
  the map exceeds 5,000 tracked keys, delete any key whose timestamps
  are all outside the 15-minute window. No change to external rate-limit
  behavior.
- Verified: `tsc --noEmit`/`lint`/`build` all clean (same pre-existing,
  unrelated lint warning in the round-42 evidence script). Real `next
  start` server on port 5173: same-IP 6-request regression still 429s on
  the 6th, both before and after the change; a 5,200-request concurrent
  burst with unique spoofed `x-forwarded-for` values completed with zero
  fetch errors and no server-log errors (exercising the size-triggered
  immediate prune); the same-IP regression re-checked immediately after
  the burst still correctly 429'd on the 6th on both `/api/contact` and
  `/api/planner`. A 14-route sweep found zero regressions.
- Committed and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`LISTENING` before stopping). Removed this
  round's scratch server log, PID file, and burst-test script.

### Recommended next workstream

Re-sweep for any newly published Auditor findings first; keep hunting
for genuinely new adversarial angles in the rate-limiter/mailer surface
(two real defects found there in two consecutive rounds — 60 and 61 —
after 25+ rounds of clean audits, so this area rewarded closer scrutiny).
The residual Cloudflare-bypass gap named in round 60 is still an account-
level gate, not Builder-reachable. Genuinely Owner-gated items are
unchanged: Resend account/DNS/API key, analytics/Search Console
ownership, exact LLC name, About/legal/visual review, final
indexability approval (see `CYVEXLY_OWNER_DIRECTION.md`).

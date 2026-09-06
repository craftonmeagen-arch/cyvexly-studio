# Cyvexly Active Chunk — Round 61 Full Report (Archived)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` round 64 to restore latest-three
rotation (62, 63, 64 stay live).

## Round 61 report — global round 61 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R51` (reviewed
commit `6f41600`, round 59's HEAD, predating round 60's rate-limiter
IP-spoofing fix). **Twenty-seventh consecutive independent confirmation,
not a new finding** — 0 active code defects. Moved to `exchange/processed/`.

**Found a second real defect in the same rate-limiter code round 60 had
just fixed, through adversarial review of that fix rather than a fresh
feature sweep.** `checkRateLimit` (`src/lib/mailer.ts`) stores its sliding
window in a plain `Map<string, number[]>` keyed by client IP, but never
deleted a key once created — after a key's timestamps all age out of the
15-minute window, the filtered-to-empty array is still written back with
`.set()`, so the key lives in memory forever. Any caller that can vary its
own key grows the map without bound. The `x-forwarded-for` fallback path
in `getClientIp` (still active for non-Cloudflare traffic, e.g. the direct
Render origin round 60 already named as a residual bypass) is exactly
such a caller: an attacker can mint an unlimited number of distinct
`x-forwarded-for` values, so this is a pure in-process memory-exhaustion
DoS with no rate limit of its own to slow it down — independent of, and
additive to, round 60's already-named Cloudflare-bypass gap.

**Fixed:** added `pruneStaleEntries()`, called from `checkRateLimit`
whenever 5 minutes have elapsed since the last prune or the map exceeds
5,000 tracked keys (whichever comes first), deleting any key whose
timestamps are now all outside the window and compacting the rest.
Bounds worst-case memory to roughly one 5-minute burst plus the window's
worth of genuinely active keys, without changing the limiter's external
behavior.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173: (1) regression — 6 requests from
one spoofed IP to `/api/contact` still correctly 429 on the 6th, both
before and after the change; (2) new-defect proof — a 5,200-request
concurrent burst, each with a unique spoofed `x-forwarded-for`, completed
with zero fetch errors and no server-log errors/exceptions (exercising
the size-triggered immediate prune, since 5,200 exceeds the 5,000-key
threshold well before the 5-minute timer would fire); a same-IP 6-request
regression check immediately afterward still correctly 429'd on the 6th,
proving the prune did not corrupt live rate-limit state. Same check
repeated on `/api/planner`. A 14-route sweep (12 HTML routes +
sitemap.xml/robots.txt + an invalid path) found zero regressions.
Committed and pushed.

Cleaned up: stopped the owned `next start` server (verified the real
listener PID via `netstat`/`LISTENING` before stopping). Removed this
round's scratch server log, PID file, and burst-test script under the OS
temp scratchpad.

Round 60's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_60_REPORT.md` (moved
there round 63 to restore latest-three rotation).
Round 60 fixed the Contact/Planner rate limiter's `X-Forwarded-For`
IP-spoofing bypass.

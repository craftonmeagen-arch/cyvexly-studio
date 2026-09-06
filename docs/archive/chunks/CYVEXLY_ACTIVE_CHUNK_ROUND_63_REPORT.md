# Cyvexly Active Chunk — Round 63 Full Report (Archived)

Archived round 66 to keep `CYVEXLY_ACTIVE_CHUNK.md` under its 30,720-byte
hot-file cap while adding round 66's report and preserving latest-three
rotation (64, 65, 66 live).

## Round 63 report — global round 63 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R52` (reviewed
commit `1854a3f`, round 60's HEAD, predating round 61's memory-pruning
fix and round 62's dormant Cloudflare-bypass gate). **Twenty-eighth
consecutive independent confirmation, not a new finding** — 0 active
code defects (its adversarial rate-limiter re-verification and 20-route
snippet-budget survey both reconfirm already-shipped work). Moved to
`exchange/processed/`.

**Found a real defect through adversarial review of round 62's own new
code, continuing the pattern from rounds 60-61.** `isTrustedOrigin()`
(`src/lib/mailer.ts`) compared the incoming `x-cf-origin-secret` header
against `CF_ORIGIN_SECRET` with plain `===`. JavaScript string equality
short-circuits at the first differing character, so once the gate is
activated, an attacker able to measure response-time differences across
many requests could in principle narrow down the secret one byte at a
time — a classic timing side-channel on secret comparison. Not
exploitable today (the gate is dormant, `CF_ORIGIN_SECRET` unset in
production), but the defect is in the code now, not only once activated.

**Fixed:** switched to Node's `crypto.timingSafeEqual`, comparing UTF-8
byte buffers, with an explicit length check first (buffers of different
lengths throw in `timingSafeEqual` rather than compare) and an early
`false` when the header is missing entirely.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173: **dormant** (`CF_ORIGIN_SECRET`
unset) — no header and a wrong header both still reach the normal 400
validation response, unaffected. **Activated** (env var set) — a request
with no header, a wrong header of the same length, and a wrong header of
a different length all correctly 403 on both `/api/contact` and
`/api/planner`; a request with the exact matching header passes through
to normal validation on both routes. A 15-route regression sweep (13
HTML routes + sitemap.xml/robots.txt + an invalid path) was clean.
Committed and pushed.

Cleaned up: stopped both owned `next start` server instances (verified
the real listener PID via `netstat`/`LISTENING` before each stop, using
`taskkill` since this session's shell is Git Bash rather than
PowerShell). Removed this round's scratch server logs.

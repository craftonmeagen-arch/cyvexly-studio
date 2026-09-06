# Cyvexly Active Chunk — Round 62 Full Report (Archived)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` round 65 to restore latest-three
rotation (63, 64, 65 stay live).

## Round 62 report — global round 62 (scheduled/unattended session)

No new Auditor inbox item was published this round (the last consumed
item was `IFA-2026-09-06-R51`, dispositioned round 61).

**Prepared dormant scaffolding for the residual Cloudflare-bypass gap**
round 60 named and round 61's finding shared a root cause with: an
attacker hitting the direct Render origin (`cyvexly-studio.onrender.com`)
skips Cloudflare and can forge `cf-connecting-ip` themselves, since
nothing between the attacker and Render overwrites it on that path.
Fully closing this needs a Cloudflare-dashboard control (a Transform
Rule, or Authenticated Origin Pulls) this role cannot configure — but the
origin-side half of a shared-secret-header mitigation is pure code and
is Builder-reachable now, dormant until the Owner does the one-time
Cloudflare/Render setup.

Added `isTrustedOrigin()` (`src/lib/mailer.ts`): returns `true`
unconditionally while `CF_ORIGIN_SECRET` is unset (today's state, so
zero behavior change), and once set, requires an exact-matching
`x-cf-origin-secret` request header, rejecting anything else with 403.
Wired into both `/api/contact` and `/api/planner` as the first check in
each `POST` handler. Exact Owner activation steps recorded in
`CYVEXLY_APP_DEBT.md` item 3.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173, tested in both states:
- **Dormant** (`CF_ORIGIN_SECRET` unset): a request with no secret header
  and one with a wrong secret header both still reach the normal 503
  not-configured response on `/api/contact` — unaffected.
- **Activated** (`CF_ORIGIN_SECRET` set): a request with no header and
  one with a wrong header both correctly 403 on `/api/contact` and
  `/api/planner`; a request with the exact matching header passes
  through to the normal validation/mailer path on both routes.
A 14-route regression sweep (12 HTML routes + sitemap.xml/robots.txt + an
invalid path) was clean in the activated state. Safe to commit and push
immediately since the gate stays inert for real production traffic until
the Owner completes the Cloudflare/Render step.

Cleaned up: stopped both owned `next start` server instances (verified
the real listener PID via `netstat`/`LISTENING` before each stop).
Removed this round's scratch server logs and PID files.

Round 61's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_61_REPORT.md` (moved
there round 64 to restore latest-three rotation).
Round 61 fixed the rate limiter's unbounded-memory-growth defect.

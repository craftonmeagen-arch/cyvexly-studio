# Cyvexly App Debt — Round 62 Full Detail (Archived)

Moved from `CYVEXLY_APP_DEBT.md` round 63 to keep that file under its
30,720-byte hot-file cap.

## Resolved round 62

- No new Auditor inbox item published yet this round.
- **Prepared dormant scaffolding for the residual Cloudflare-bypass gap**
  named in round 60/61 (see item 3 under "Open" in the live file for the
  exact activation steps and full rationale). Added `isTrustedOrigin()`
  (`src/lib/mailer.ts`) and wired it into both `/api/contact` and
  `/api/planner`; always passes today (dormant, `CF_ORIGIN_SECRET`
  unset), starts rejecting (403) unmatched requests once set.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: dormant state confirmed
  unaffected (no/wrong header still reaches the normal 503
  not-configured path); activated state (env var set) confirmed
  rejecting no-header and wrong-header requests with 403 on both routes
  while a correct-header request still passes through; 14-route
  regression sweep clean in both states.
- Cleaned up: stopped both owned `next start` servers (verified real
  listener PIDs via `netstat`/`LISTENING`). Removed this round's scratch
  server logs and PID files.

(Round 63 later hardened this same gate's secret comparison to a
timing-safe check — see the live file's "Resolved round 63" section.)

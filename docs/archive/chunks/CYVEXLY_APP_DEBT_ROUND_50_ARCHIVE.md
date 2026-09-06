# Cyvexly App Debt — Round 50 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 71 to keep that file under its
30720-byte hot-file cap.

## Resolved round 50

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R41`** — a seventeenth
  consecutive independent confirmation (reviewed commit `ae0644b`, round
  48's HEAD, one commit behind round 49's error-boundary commit), 0 active
  code defects. Moved to `exchange/processed/`.
- **Fixed a real hot-memory rotation defect (not a product feature).**
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-48 rotation had left round 47's report
  live and duplicated round 48's report in its place instead of archiving
  round 47. Archived round 47 to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_47_REPORT.md`, removed
  the duplicate, restored latest-three (48, 49, 50 live).
- **New angle — `Cross-Origin-Opener-Policy`/`Cross-Origin-Resource-Policy:
  same-origin`** added to `next.config.ts`. Confirmed via grep that the app
  has zero `window.open`/`postMessage`/`window.opener` usage, so same-origin
  isolation costs nothing.
- **New angle — `/.well-known/security.txt`** (RFC 9116), contact
  `design@cyvexly.com` (Owner-confirmed), `Expires: 2027-09-05`. No invented
  facts.
- Verified: `tsc`/`lint`/`build` all pass clean. Real `next start` server on
  port 5173: `curl -D -` confirmed both new headers on `/` alongside every
  pre-existing header unchanged; `security.txt` returns `200 text/plain`
  with exact content; `/`, `/faq`, `/manifest.webmanifest`, `/apple-icon`,
  `/icons/192`, `/sitemap.xml` all still `200`, zero regressions. Committed
  (`b5b7109`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping). No
  browser pane was opened this round (curl against the local server was the
  appropriate proof layer for an HTTP-header/static-text-file claim).

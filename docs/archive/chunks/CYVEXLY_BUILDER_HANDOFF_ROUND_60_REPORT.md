# Round 60 closeout

Archived from `CYVEXLY_NEXT_BUILDER_HANDOFF.md` round 62 to keep that
file under its 12,288-byte hot-file cap.

**Session:** scheduled `cyvexly-builder` task, 2026-09-06, 50-minute hard
time limit (unattended)
**Start source:** `6f41600` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item
(`IFA-2026-09-06-R50`) and found/fixed a real security defect via
adversarial testing that no prior Auditor round had named.
**Completion:** REAL SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-06-R50` (reviewed commit `32a0e10`, round 58's HEAD,
  predating round 59's meta-description fix) is a **twenty-sixth
  consecutive independent confirmation, not a new finding** — 0 active
  code defects. Moved to `exchange/processed/`.
- **Found and fixed a real security defect — the Contact/Planner rate
  limiter's client-IP detection was trivially bypassable.**
  `getClientIp()` (`src/lib/mailer.ts`) took the first (leftmost)
  comma-separated value from the client-supplied `X-Forwarded-For`
  header, which a client fully controls since a proxy conventionally
  appends its own observed peer to the header rather than replacing it.
  Proved this live against the real route: 7 POST requests to
  `/api/contact`, each carrying a unique spoofed `X-Forwarded-For`, all
  bypassed the 5-per-15-minute limiter that correctly 429'd a 6th request
  sharing one real key.
- **Fixed:** production traffic to `cyvexly.com` is confirmed (round 53)
  to run through Cloudflare in front of Render, so `getClientIp` now
  checks `cf-connecting-ip` first (set by Cloudflare's edge, not
  forgeable by the client), falling back to the old X-Forwarded-For logic
  only when that header is absent.
- Verified: `tsc --noEmit`/`lint`/`build` all clean (same pre-existing,
  unrelated lint warning in the round-42 evidence script). Real `next
  start` server on port 5173: re-ran the spoofed-header attack with a
  fixed `CF-Connecting-IP` present — the 6th request now correctly 429s
  on both `/api/contact` and `/api/planner`. A fresh full-site crawl (20
  HTML routes + sitemap/robots/manifest + an invalid path) found zero
  broken internal links, zero duplicate titles/descriptions, correct
  redirects/404s, zero regressions.
- Committed (`4102764`) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server twice (verified the
  real listener PID via `netstat`/`LISTENING` each time). Removed this
  round's own scratch files, and successfully removed the two
  Windows-locked scratch logs from rounds 57/58 that earlier rounds
  couldn't clear.

### Recommended next workstream

**Named, not Builder-reachable:** the rate-limiter fix has a residual gap
— an attacker hitting the direct Render origin
(`cyvexly-studio.onrender.com`) instead of `cyvexly.com` bypasses
Cloudflare and can forge `cf-connecting-ip` at the origin directly.
Closing it needs a Render/Cloudflare account-level control (Authenticated
Origin Pulls, or an IP allowlist on the Render origin) — see
`CYVEXLY_APP_DEBT.md`. Otherwise: re-sweep for any newly published
Auditor findings first; genuinely Owner-gated items are unchanged (Resend
account/DNS/API key, analytics/Search Console ownership, exact LLC name,
About/legal/visual review, final indexability approval).

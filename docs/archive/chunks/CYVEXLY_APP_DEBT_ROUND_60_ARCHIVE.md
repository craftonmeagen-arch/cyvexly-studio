# Resolved round 60

Archived from `CYVEXLY_APP_DEBT.md` round 61 to keep that file under its
30,720-byte hot-file cap.

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R50`** — a
  twenty-sixth consecutive independent confirmation (reviewed commit
  `32a0e10`, round 58's HEAD, predating round 59's meta-description
  fix), 0 active code defects. Moved to `exchange/processed/`.
- **Found and fixed a real security defect via adversarial testing, not
  named by any prior Auditor round: the Contact/Planner rate limiter's
  client-IP detection was trivially bypassable.** `getClientIp()` (in
  `src/lib/mailer.ts`) took the *first* comma-separated hop of the
  client-supplied `X-Forwarded-For` header — a value the client fully
  controls, since a proxy conventionally appends its own observed peer
  to the header rather than replacing it. Proved this live: 7 POST
  requests to `/api/contact`, each carrying a unique spoofed
  `X-Forwarded-For` value, all passed the 5-per-15-minute limiter that
  correctly 429'd a 6th request sharing one real key — a one-line
  client-side header change defeated the entire "proportionate
  accessible spam/rate protection" Owner direction `2026-09-04-14`
  requires. Production traffic to `cyvexly.com` is confirmed (round 53)
  to pass through Cloudflare in front of Render, so fixed `getClientIp`
  to check `cf-connecting-ip` first — set by Cloudflare's edge and
  overwritten on every request, never passed through from the client —
  falling back to the old (still-spoofable) `X-Forwarded-For` logic only
  for non-Cloudflare paths.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: re-ran the exact spoofed-header
  attack with a fixed `CF-Connecting-IP` present — the 6th request now
  correctly 429s regardless of the (still-varying, still-spoofed)
  `X-Forwarded-For` value, on both `/api/contact` and `/api/planner`
  (separate rate-limit keys, same shared helper). A fresh full crawl (20
  HTML routes + sitemap/robots/manifest + an invalid path) found zero
  duplicate titles/descriptions, zero broken internal links (22 checked),
  correct trailing-slash redirects, correct 404s on invalid static/
  dynamic paths, and correct immutable/no-cache header split between
  hashed `_next/static` assets and unhashed `public/` files — zero
  regressions. Committed (`4102764`) and pushed.
- **Named, not fixed — a genuine authorization gate, not a Builder-reachable
  gap:** an attacker can still bypass this fix entirely by hitting the
  direct Render origin (`cyvexly-studio.onrender.com`, listed live in
  `AGENTS.md`) instead of `cyvexly.com`, skipping Cloudflare and forging
  `cf-connecting-ip` directly at the origin. Closing that residual path
  needs a Render/Cloudflare account-level control (Cloudflare
  Authenticated Origin Pulls, or restricting the Render origin to
  Cloudflare's IP ranges) that requires dashboard access this role does
  not have.
- Cleaned up: stopped the owned `next start` server twice (before and
  after the rebuild; verified the real listener PID via `netstat` +
  `LISTENING` before each stop). Removed this round's own scratch server
  logs and crawl script under the OS temp scratchpad. Retried removing
  the two Windows-locked scratch logs named in round 58's handoff
  (`cyvexly-round57-server.log`, `cyvexly-round58-server.log`) — both
  removed cleanly this round; that recurring lock class is resolved for
  now.

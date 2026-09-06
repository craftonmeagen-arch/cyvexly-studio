# Cyvexly Active Chunk — Round 60 Full Report (Archived)

Moved from `CYVEXLY_ACTIVE_CHUNK.md` round 63 to restore latest-three
rotation (61, 62, 63 stay live).

## Round 60 report — global round 60 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R50` (reviewed
commit `32a0e10`, round 58's HEAD, predating round 59's meta-description
fix). **Twenty-sixth consecutive independent confirmation, not a new
finding** — 0 active code defects. Moved to `exchange/processed/`.

**Found a real security defect through adversarial testing that no prior
Auditor round had named.** `getClientIp()` (`src/lib/mailer.ts`) keyed the
Contact/Planner rate limiter off the first (leftmost) comma-separated
value in the client-supplied `X-Forwarded-For` header — fully attacker
controlled, since a proxy conventionally appends its own observed peer to
the header rather than replacing it. Proved this live: 7 POST requests to
`/api/contact`, each with a unique spoofed `X-Forwarded-For`, all sailed
past the 5-per-15-minute limiter that correctly 429'd a 6th request
sharing one real key — a one-line client change defeated the
"proportionate accessible spam/rate protection" Owner direction
`2026-09-04-14` requires.

**Fixed:** production traffic to `cyvexly.com` is confirmed (round 53) to
run through Cloudflare in front of Render, so `getClientIp` now checks
`cf-connecting-ip` first — set by Cloudflare's edge and overwritten on
every request, never passed through from the client — falling back to
the old (still-spoofable) `X-Forwarded-For` logic only when that header
is absent.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173: re-ran the exact spoofed-header
attack with a fixed `CF-Connecting-IP` present — the 6th request now
correctly 429s regardless of the (still-varying, still-spoofed)
`X-Forwarded-For`, on both `/api/contact` and `/api/planner`. A fresh
full-site crawl (20 HTML routes + sitemap/robots/manifest + an invalid
path) found zero duplicate titles/descriptions, zero broken internal
links (22 checked), correct trailing-slash redirects, correct 404s, and
correct immutable/no-cache cache-header split between hashed
`_next/static` assets and unhashed `public/` files. Committed (`4102764`)
and pushed.

**Named, not fixed — a genuine Owner/account gate:** an attacker can
still bypass this by hitting the direct Render origin
(`cyvexly-studio.onrender.com`) instead of `cyvexly.com`, skipping
Cloudflare and forging `cf-connecting-ip` at the origin directly. Closing
that needs a Render/Cloudflare account-level control (Authenticated
Origin Pulls, or an IP allowlist on the Render origin) this role cannot
configure.

Cleaned up: stopped the owned `next start` server twice (before and after
the rebuild; verified the real listener PID via `netstat`/`LISTENING`
each time). Removed this round's own scratch server logs/crawl script,
and successfully retried removing the two Windows-locked scratch logs
named in round 58's handoff (now gone).

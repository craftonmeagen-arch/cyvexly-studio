# Cyvexly Current State

**Global round:** 60. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`).
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34), a sitewide
skip-to-main-content link (round 39), the Planner's step-advance
focus/scroll/live-region defect (round 40), the Contact form's missing
spam/rate protection (round 42), sitewide Organization JSON-LD (round 43),
FAQPage JSON-LD (round 44), BreadcrumbList JSON-LD (round 45), a Web App
Manifest plus dead-asset cleanup (round 46), an Apple touch icon
(round 47), raster manifest icons plus a print-legibility fix (round 48),
error boundaries plus theme-color metadata (round 49), COOP/CORP headers
plus security.txt (round 50), sitewide Open Graph/Twitter Card metadata
(round 51), per-route OG images (round 52), real server-side Contact/
Planner email delivery via Resend plus dormant GA4/GSC scaffolding
(round 53), per-slug OG images for dynamic routes (round 54), Service
JSON-LD (round 55), Pricing OfferCatalog JSON-LD (round 56), trimmed
meta descriptions (round 57), `html lang="en-US"` (round 58), Home's
meta-description trim (round 59), and a rate-limiter IP-spoofing fix
(round 60) are done. Remaining Chunk 5 scope (real
Resend account/API key, DNS/domain provider access, analytics/search
ownership, exact LLC name, final indexability approval) is Owner-gated —
see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates". Full
round-by-round detail is in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`; rounds 52-56 are archived at
`docs/archive/chunks/CYVEXLY_CURRENT_STATE_ROUNDS_52_56_ARCHIVE.md`.

**Round 60 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R50` (26th consecutive confirmation, reviewed commit
`32a0e10`, predating round 59's meta-description fix, 0 active code
defects). Adversarial testing (not named by any prior Auditor round)
found and fixed a real security defect: the Contact/Planner rate
limiter's `getClientIp()` trusted the client-controlled leftmost
`X-Forwarded-For` hop, letting 7 requests with unique spoofed headers
all bypass the 5-per-15-minute limit. Fixed to check Cloudflare's
`cf-connecting-ip` (unforgeable, verified live in front of Render since
round 53) first. Verified live: a fixed `cf-connecting-ip` now
correctly 429s a 6th request despite varying spoofed `X-Forwarded-For`,
on both routes; zero regressions across a full crawl/link-check.
Committed (`4102764`) and pushed. Named, not fixed: bypassing Cloudflare
via the direct Render origin still defeats this — needs Render/
Cloudflare account-level origin restriction (see `CYVEXLY_APP_DEBT.md`).

**Round 59 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R49` (25th consecutive confirmation, reviewed commit
`111582f`, predating round 58's `html lang`/hot-file-cap fixes, 0 active
code defects — its hot-file-cap observation on this file was already
fixed by round 58). Fixed the one real finding it raised: Home's
rendered meta description measured 166 chars, 6 over the ~155-160 char
budget round 57 established sitewide. Trimmed the shared description
string in `src/app/layout.tsx` to 158 chars without dropping any claim.
`tsc`/`lint`/`build` clean; verified via a real `next start` server
across a 24-route sweep, zero regressions. Committed (`343444f`) and
pushed.

**Round 58 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R48` (24th consecutive confirmation, reviewed commit
`176b91d`, predating round 57's meta-description fix, 0 active code
defects — its "Production Domain & DNS Connection" gate note is stale,
corrected by round 53). Fixed the one real finding it raised: this file
had grown to 8,728 bytes at the reviewed commit (9,653 by round 58 start),
over its own 8,192-byte `Test-HotFileCaps.ps1` cap. Archived rounds 52-56's
detailed outcome paragraphs (already duplicated in `CYVEXLY_ACTIVE_CHUNK.md`/
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`) and rewrote this file as a lean dashboard
per §7.12's own spec. Re-ran `Test-HotFileCaps.ps1` clean (0 violations).

Round 57's full outcome is archived at
`docs/archive/chunks/CYVEXLY_CURRENT_STATE_ROUNDS_52_56_ARCHIVE.md`
(moved there round 60 to keep this file under its byte cap): trimmed 5
oversized meta descriptions.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 60. Open Graph/Twitter coverage,
structured data, manifest/icons, print CSS, error boundaries/theme-color,
security headers/security.txt, meta-description length, `html
lang="en-US"`, and the rate-limiter IP-spoofing fix are all shipped —
keep looking for genuinely new QA/build angles (adversarial testing, not
just feature checklists, found round 60's finding) rather than assuming
the surface is empty. The residual Cloudflare-bypass gap named in round
60 needs Render/Cloudflare account-level config, not more Builder code.
What remains genuinely Owner-gated is unchanged; see "Owner launch
decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through round 60's commits
on `origin/main` (see `git log`) and Render has auto-deployed them. The
production domain `cyvexly.com` is fully connected, HTTPS-verified, and
canonicalized (verified live, round 53). `origin/master` is historical and
is not the deployment branch.

## Owner launch decisions and remaining gates

The Owner has now confirmed: Cyvexly Studio; LLC structure; Indiana, United
States; United States-only launch market; `cyvexly.com`;
`design@cyvexly.com`; `(317) 572-5780`; logo-led About; no public personal
founder name or portrait; and a studio-origin narrative authorized for review.

The following still require Owner account access, confirmation, or final
approval and must not be invented:

1. exact registered LLC legal name for legal text and later agreements;
2. Resend account creation, sending-domain DNS verification (account-
   specific records Resend generates after the domain is added — see
   `CYVEXLY_APP_DEBT.md` item 2), and `RESEND_API_KEY` entered securely in
   Render — the code path is built, deployed, and tested short of an
   actual send;
3. a GA4 property + Measurement ID (or an explicit no-analytics decision),
   and/or a Google Search Console verification value — both are wired in
   code (dormant) and activate the moment a real value is supplied;
4. review of About/Privacy/Terms drafts, public visual acceptance, and
   final permission to enable search indexing.

Domain/DNS/HTTPS/canonicalization is **done** — verified live round 53, not
merely code-complete. Payment-provider selection and real portfolio
replacement are deliberately tabled. Existing payment claims must be
removed or qualified until supported; existing concepts must remain
unmistakably labeled. Contact/Planner now use real server-side delivery
(not `mailto:`) — see `CYVEXLY_APP_DEBT.md` item 2.

## Working orientation

Use the six current root orientations and CYVEXLY_ROLE_RULES_MAPPING.md. New reviewer
reports and memory are external; read CYVEXLY_REVIEW_INDEX.md and all unread inbox items.
The existing architectural-glass visual baseline is unchanged. Older round proof is in
CYVEXLY_BUILD_SUMMARY.md and the archived pre-migration current state. No new product
round or Owner visual acceptance is claimed by the environment migration.

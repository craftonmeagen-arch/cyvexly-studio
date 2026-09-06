# Cyvexly Current State

**Global round:** 69. Owner launch direction updated 2026-09-04, extended
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
meta-description trim (round 59), a rate-limiter IP-spoofing fix
(round 60), an unbounded-memory-growth fix in the same rate limiter
(round 61), a dormant Cloudflare-bypass gate (round 62), a
timing-safe-comparison hardening of that same gate (round 63), a
request-body-size cap on both API routes (round 65), and a Planner
visual-direction data-loss fix (round 66) are done.
Remaining Chunk 5 scope (real
Resend account/API key, DNS/domain provider access, analytics/search
ownership, exact LLC name, final indexability approval) is Owner-gated —
see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates". Full
round-by-round detail is in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`; rounds 52-56 are archived at
`docs/archive/chunks/CYVEXLY_CURRENT_STATE_ROUNDS_52_56_ARCHIVE.md`.

**Round 69 outcome:** dispositioned Auditor item `IFA-2026-09-06-R58`
(34th confirmation, commit `0cc8f61`, 0 active code defects). Reviewed
About/Privacy/Terms and `service-details.ts` — clean. Found/fixed a
real truth-claim defect: the Home FAQ preview overclaimed every site
includes a CMS, contradicting the Signal package's own scope and
`service-details.ts`'s own qualified answer. Verified live, 12-route
sweep. Full detail in `CYVEXLY_ACTIVE_CHUNK.md`/`CYVEXLY_APP_DEBT.md`.

Rounds 60-68 (IP-spoofing fix, rate-limiter memory leak, dormant
Cloudflare-bypass gate, its timing-safe hardening, an adversarial
re-review finding 0 new defects, the request-body-size cap, a Planner
visual-spectrum data-loss fix, a Planner secondary-goals-label fix, and
a `robots.ts` sitemap-directive fix) are summarized in
`CYVEXLY_APP_DEBT.md`'s resolved-round history; rounds 58-59 fixed a
hot-file-cap violation, `html lang="en-US"`, and trimmed Home's meta
description.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 69. About/Privacy/Terms copy,
`service-details.ts`, and pricing-consistency checks are now clean
(round 69, one real fix landed); genuinely fresh surfaces still not
given a dedicated adversarial pass include the Planner's client-side
`planner-form.tsx` UI logic and the case-study (`/work/[slug]`) content
against `site-config.ts`'s `selectedWork`/`caseStudies`. The
Cloudflare-bypass gap has a dormant code-side gate (round 62, hardened
round 63); it activates only once the Owner adds one Cloudflare
Transform Rule (see `CYVEXLY_APP_DEBT.md` item 3) — not more Builder
code. What remains genuinely Owner-gated is otherwise unchanged; see
"Owner launch decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through round 69's source
commit (`7239d3b`) on `origin/main` and Render auto-deploys it.
`cyvexly.com` is fully connected/HTTPS/canonicalized (verified live,
round 53). `origin/master` is historical, not the deployment branch.

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

# Cyvexly Current State

**Global round:** 96. **Active product work:** Chunk 6 — Velora Capability
Demonstration, chunk-local round 2, opened under Owner direction
`2026-09-07-17`. Chunk 5 remains open in parallel with only Owner/account
gates left; its completed Cyvexly launch work and gates are summarized below.

Round 96 extended `velora/smoke.mjs` from happy-path coverage into real
invalid→corrected form paths, menu/room keyboard tabs, native-dialog focus and
return behavior, mobile-menu Escape focus, reduced-motion emulation, 320px
reflow (1280px at 400% equivalent), image-fallback recovery, noindex/form
boundaries, and network-origin auditing. Accepted Velora source `2e79c45`
passes with zero failures, runtime/network errors, unexpected destinations, or
horizontal overflow. Desktop/mobile/320px captures were opened and inspected;
the parent Cyvexly typecheck/lint/build remains clean (49/49 routes; only the
pre-existing round-42 evidence-script lint warning). Round 95's identity,
contact-safety, hero correction, and primary workflow work remains intact.

**Accepted product position:** Round 96 Velora proof source is committed at
`2e79c45` on `main`; the closeout documentation commit follows it.
`cyvexly.com` remains fully connected, HTTPS, and canonicalized (verified round
53). `origin/master` is historical.

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

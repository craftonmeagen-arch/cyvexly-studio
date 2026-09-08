# Cyvexly Current State

**Global round:** 95. **Active product work:** Chunk 6 — Velora Capability
Demonstration, chunk-local round 1, opened under Owner direction
`2026-09-07-17`. Chunk 5 remains open in parallel with only Owner/account
gates left; its completed Cyvexly launch work and gates are summarized below.

Round 95 reconciled the new authority and began useful implementation in the
same round. The restored standalone `velora/index.html` is now established as
source truth. It uses the Owner's explicitly fictional Evansville contact facts
(`123 Not Real Drive`, `555-555-5555`, `notrealrestaurant@gmail.com`) and safe
copy controls instead of live phone/email links. A rendered baseline exposed a
real hero-layout cascade bug: the generic `.photo` rule overrode the hero's
absolute positioning and pushed all hero content below its clipped viewport.
The selector is now corrected. A dependency-free Chrome/CDP smoke harness at
`velora/smoke.mjs` proves desktop and mobile layout, menu/filter/gallery/nav
controls, reservation, private-event, gift-card, newsletter, disclosure, and
copy-contact demo states without transmission, storage, booking, or payment.
Round 95 evidence is under `builder/evidence/round-95-velora/`; smoke passed
with zero runtime/network errors and zero horizontal overflow at 1440×900 and
390×844. The parent Cyvexly app also remains clean: typecheck passed, lint has
only the pre-existing round-42 evidence-script warning, and production build
passed all 49 routes.

**Accepted product position:** Round 95 Velora source and reconciliation are
committed at `b4b4608` on `main`; the closeout documentation commit follows it.
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

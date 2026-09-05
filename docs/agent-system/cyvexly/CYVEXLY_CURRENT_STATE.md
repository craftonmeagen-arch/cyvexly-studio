# Cyvexly Current State

**Global round:** 34. Owner launch direction updated 2026-09-04.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), and the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34) are done. Remaining Chunk 5
scope (real Contact/Planner email delivery, DNS/domain connection,
analytics/search ownership, final indexability approval) is Owner-gated —
see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates". Full round-by-round
detail is in `CYVEXLY_ACTIVE_CHUNK.md` and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 34 outcome (scheduled/unattended, 50-minute limit):** read four
unread external Auditor inbox items (`IFA-2026-09-05-R22` through `R25`) and
fixed the one persistent, reachable, Owner-gate-free finding they all
flagged: `CYV-IFA-012`, `/contact`'s email/phone links colliding into
`design@cyvexly.com(317) 572-5780` with no separating whitespace on widths
≥ ~370px. Wrapped both links in a `flex flex-col gap-2` container.
`tsc --noEmit`, `lint`, and `build` (27 routes) all pass; verified in real
generated HTML and real in-app-Browser screenshots at 1440px/785px/390px
(stacked cleanly, zero console errors, zero overflow). Committed (`0afb789`)
and pushed to `origin/main`; moved all four consumed inbox items to
`exchange/processed/`. Full detail in `CYVEXLY_ACTIVE_CHUNK.md`'s round-34
report and `CYVEXLY_APP_DEBT.md`'s "Resolved round 34" section.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 34 (e.g. `CYV-IFA-006` may keep
recurring until the email-provider gate clears); if it's empty or
already-known, re-scan `CYVEXLY_APP_DEBT.md`/`CYVEXLY_CHUNK_DEBT.md` for any
newly-reachable item, or run a fresh release-QA sweep if enough rounds have
passed since round 31's. What's left beyond that (real Contact/Planner
email delivery, DNS/domain connection, analytics/search ownership, final
indexability approval) needs Owner account access or provider selection —
see "Owner launch decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through commit `0afb789` on
`origin/main` (round 34's `/contact` fix, on top of round 33's `8c07262`).
The production domain is confirmed as `cyvexly.com`, but DNS still needs to
be connected and verified. `origin/master` is historical and is not the
deployment branch.

## Owner launch decisions and remaining gates

The Owner has now confirmed: Cyvexly Studio; LLC structure; Indiana, United
States; United States-only launch market; `cyvexly.com`;
`design@cyvexly.com`; `(317) 572-5780`; logo-led About; no public personal
founder name or portrait; and a studio-origin narrative authorized for review.

The following still require Owner account access, confirmation, or final
approval and must not be invented:

1. exact registered LLC legal name for legal text and later agreements;
2. Namecheap/Render account-bound DNS work and canonical-domain verification;
3. business-inbox and transactional-email provider selection/authorization,
   secure provider secrets, and sending-domain verification;
4. analytics/Search Console ownership or a no-analytics launch decision;
5. review of About/Privacy/Terms drafts, public visual acceptance, and final
   permission to enable search indexing.

Payment-provider selection and real portfolio replacement are deliberately
tabled. Existing payment claims must be removed or qualified until supported;
existing concepts must remain unmistakably labeled. The interim `mailto:`
disclosures remain truthful but are a Chunk 5 replacement target.


## Working orientation

Use the six current root orientations and CYVEXLY_ROLE_RULES_MAPPING.md. New reviewer
reports and memory are external; read CYVEXLY_REVIEW_INDEX.md and all unread inbox items.
The existing architectural-glass visual baseline is unchanged. Older round proof is in
CYVEXLY_BUILD_SUMMARY.md and the archived pre-migration current state. No new product
round or Owner visual acceptance is claimed by the environment migration.

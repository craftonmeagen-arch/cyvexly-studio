# Cyvexly Current State

**Global round:** 41. Owner launch direction updated 2026-09-04.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34), a sitewide
skip-to-main-content link (round 39), and the Planner's step-advance
focus/scroll/live-region defect (round 40) are done. Remaining Chunk 5 scope
(real Contact/Planner email delivery, DNS/domain connection, analytics/search
ownership, final indexability approval) is Owner-gated — see
`CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates". Full round-by-round
detail is in `CYVEXLY_ACTIVE_CHUNK.md` and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 41 outcome (scheduled/unattended, 50-minute limit):** dispositioned
the one new Auditor inbox item, `IFA-2026-09-05-R32` — an eighth consecutive
independent confirmation, not a new defect. Closed both QA candidates round
40 named as untried: (1) WCAG 1.4.10 reflow / 200%-zoom-equivalent, tested
via a width-halving proxy (320px and 640px) across 8 marketing routes and
all 9 real Planner steps (advanced with genuine CDP clicks) against a
production server — 34/34 checks, zero horizontal overflow, no defect; (2) a
real CDP click on the Planner's "← Back" button confirming round 40's shared
`goToStep()` scroll/focus/live-region fix applies identically regardless of
caller — no defect. No source changed this round. Full detail in
`CYVEXLY_APP_DEBT.md`'s "Resolved round 41" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 41. Both QA candidates round 40
named are now closed; round 41 named new untried angles instead: a
spam/rate-limit and honeypot-field live-behavior check on Contact/Planner
(vision §17 item 6), and RTL/very-long-name overflow edge cases in the
Planner's dynamic list fields. Rounds 39 and 40 found real defects from
previously-uncovered QA angles — keep looking for genuinely new angles
rather than assuming the surface is empty just because 41 found nothing.
What remains genuinely Owner-gated (real Contact/Planner email delivery,
DNS/domain connection, analytics/search ownership, exact LLC name, final
indexability approval, About/legal/visual review) is unchanged; see "Owner
launch decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through round 40's commit
(`71d233f`, plus its `46eae51` docs commit) on `origin/main`. Round 41 made
no source change (no new defect found), so `origin/main` is still `46eae51`.
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

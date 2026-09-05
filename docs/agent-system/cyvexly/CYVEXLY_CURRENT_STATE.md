# Cyvexly Current State

**Global round:** 39. Owner launch direction updated 2026-09-04.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34), and a sitewide
skip-to-main-content link (round 39) are done. Remaining Chunk 5 scope (real
Contact/Planner email delivery, DNS/domain connection, analytics/search
ownership, final indexability approval) is Owner-gated — see
`CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates". Full round-by-round
detail is in `CYVEXLY_ACTIVE_CHUNK.md` and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 39 outcome (scheduled/unattended, 50-minute limit):** dispositioned
the one new Auditor inbox item, `IFA-2026-09-05-R30` — a sixth consecutive
independent confirmation, not a new defect. Ran a genuinely new QA angle
(rounds 31-38 had not covered it): a keyboard/ARIA accessibility sweep
across all 20 routes. **Found and fixed a real, reachable defect** — no
skip-to-main-content link existed on any route, so keyboard-only users had
to tab through the full nav every page load (WCAG 2.4.1 Bypass Blocks,
Level A). An initial script-based test method produced a false-positive
"no focus indicator" reading; investigated before trusting it and confirmed
via real `Input.dispatchKeyEvent` Tab presses that the site's existing
`:focus-visible` styling already works correctly. Fixed and verified the
skip link with real keyboard Tab+Enter events on three sampled routes.
`tsc`/`lint`/`build` all clean. Full detail in `CYVEXLY_APP_DEBT.md`'s
"Resolved round 39" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 39. **Round 39 shows the
reachable-work queue was not actually exhausted** — five prior
"verification-only, nothing new" rounds (31, 35-38) simply had not yet
covered the keyboard/ARIA accessibility angle, and that angle held a real
defect. The next Builder should keep looking for vision §17 item-10 QA
categories not yet covered with real interactive evidence (candidates:
screen-reader semantics/aria-live on Contact/Planner, 200% zoom/text-resize,
reduced-motion beyond the hero video) rather than assuming the surface is
empty. What remains genuinely Owner-gated (real Contact/Planner email
delivery, DNS/domain connection, analytics/search ownership, exact LLC name,
final indexability approval, About/legal/visual review) is unchanged; see
"Owner launch decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through round 39's commit on
`origin/main` (on top of round 38's `f1a264f`, round 37's `af9fa82`, round
36's `52178f7`, and round 35's `92acb98`). The production domain is
confirmed as `cyvexly.com`, but DNS still needs to be connected and
verified. `origin/master` is historical and is not the deployment branch.

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

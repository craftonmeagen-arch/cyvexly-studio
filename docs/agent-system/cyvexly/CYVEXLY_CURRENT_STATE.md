# Cyvexly Current State

**Global round:** 45. Owner launch direction updated 2026-09-04.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34), a sitewide
skip-to-main-content link (round 39), the Planner's step-advance
focus/scroll/live-region defect (round 40), the Contact form's missing
spam/rate protection (round 42), sitewide Organization JSON-LD structured
data (round 43), FAQPage JSON-LD for `/faq` (round 44), and BreadcrumbList
JSON-LD for service-detail/case-study routes (round 45) are done.
Remaining Chunk 5 scope (real Contact/Planner email delivery, DNS/domain
connection, analytics/search ownership, final indexability approval) is
Owner-gated — see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining Owner gates".
Full round-by-round detail is in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 45 outcome (scheduled/unattended, 50-minute limit):** dispositioned
the one new Auditor inbox item, `IFA-2026-09-05-R36` — a twelfth
consecutive independent confirmation, 0 active code defects, not a new
finding. Implemented `BreadcrumbList` JSON-LD, the discoverability angle
named as untried in rounds 43/44's handoffs: added `buildBreadcrumbJsonLd()`
to `src/lib/structured-data.ts` and embedded a 3-item Home → listing →
detail trail on `/services/[slug]` and `/work/[slug]`, reusing only each
route's own existing name/URL. Verified in real production build output
(correct trail on both detail routes; confirmed `index.html`/
`services.html`/`work.html` carry only `Organization` — no leak) and live
via real CDP navigation: zero console messages, zero network failures on
all five checked routes. Also rotated hot memory: archived round 42's full
`CYVEXLY_ACTIVE_CHUNK.md` report to restore the §7.14 latest-three rule.
Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 45" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 45. Untried angles remaining: a
print-stylesheet check (low priority, not in vision §17 item 10's explicit
list) and a true rate-limiting check beyond the honeypot (architecturally
tied to the same server-side email delivery this chunk already defers).
Organization, FAQPage, and BreadcrumbList JSON-LD are all now shipped —
keep looking for genuinely new QA/build angles rather than assuming the
surface is empty. What remains genuinely Owner-gated (real Contact/Planner
email delivery, DNS/domain connection, analytics/search ownership, exact
LLC name, final indexability approval, About/legal/visual review) is
unchanged; see "Owner launch decisions and remaining gates" below.

**Accepted product position:** `main` is pushed through round 45's source
feature commit on `origin/main` — see `git log` for exact SHAs (docs commit
to follow this same round). The production domain is confirmed as
`cyvexly.com`, but DNS still needs to be connected and verified.
`origin/master` is historical and is not the deployment branch.

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

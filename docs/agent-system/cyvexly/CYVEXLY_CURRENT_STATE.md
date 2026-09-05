# Cyvexly Current State

**Global round:** 29 product baseline; Owner launch direction updated
2026-09-04.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is now open**, started round
29 (one bounded workstream: contact identity, metadata/sitemap, and a
worldwide/payment truth audit — not chunk completion). Chunk 5 will implement
and verify the remaining operational work and close the overlapping Chunk 3/4
delivery, legal, domain, and discovery boundaries.

**Round 29 outcome (scheduled/unattended, 50-minute limit):** replaced the
stale `hello@cyvexly.com` with the Owner-confirmed `design@cyvexly.com`
everywhere (Contact, Planner, and footer all read one shared config value),
and added the confirmed phone `(317) 572-5780` / `tel:+13175725780` as a
visible link on Contact and in the footer. Set `metadataBase` to
`https://cyvexly.com` in the root layout now that the domain is confirmed,
resolving the long-standing domain-blocked warning: production build output
confirms `og:image`/`twitter:image` now resolve to the real domain instead of
`http://localhost:3000`. Added `src/app/sitemap.ts`, verified in the real
build to emit all 17 public routes as absolute `https://cyvexly.com/...`
URLs. Audited the whole `src/` tree for stale "worldwide"/international-market
language and unsupported payment-method claims (vision §8 explicitly forbids
stating a payment method as active before a provider is authorized); rewrote
six worldwide/market lines and three payment-claim lines to state United
States-only availability and an honest "provider selection pending" payment
line. `tsc --noEmit`, `lint`, and `build` all pass; zero `worldwide` or
`hello@cyvexly` matches remain in generated HTML output (grep-verified against
`.next/server/app/**`). This unattended session type could not open the
visible in-app Browser (dev-server preview is blocked without an attended
approver), so this is build-output proof, not a live screenshot — the next
attended round should confirm visually on the public Render site. Full detail
in `CYVEXLY_ACTIVE_CHUNK.md`'s round-29 report and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 29" section.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Round 29 closed the contact-
identity/metadata/truth-audit workstream; the recommended next reachable
workstream is the About page (fully authorized, no Owner gate — see
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`). Preserve the continuous architectural
environment and verify its public adoption while completing the remaining
domain-connection, legal, real inquiry delivery, analytics/search ownership,
and release-QA work. Payment integration and real portfolio replacement
remain explicitly deferred.

**Accepted product position:** Round 29 product source is commit `f35a2a6` on
`main`, pushed to `origin/main`; Round 28's visual system (commit `c960f72`)
is unchanged by round 29's contact/metadata/copy-only edits. Public Render
adoption of round 29 is unconfirmed (this scheduled/unattended session could
not open the visible in-app Browser to verify the live site) — the next
attended round should check `https://cyvexly-studio.onrender.com/` reflects
it. The production domain is confirmed as `cyvexly.com`, but DNS still needs
to be connected and verified. `origin/master` is historical and is not the
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

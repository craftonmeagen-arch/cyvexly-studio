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

**Round 28 outcome:** after reviewing Home below the first viewport, the Owner
identified the remaining mismatch: middle and lower sections still became pale
bands and ordinary card fields. Visible in-app Browser comparison confirmed the
same failure on Services and Pricing. The shared environment now carries two
portal planes, three luminous beams, and a perspective horizon through the
complete route. Flat continuation slabs and direct content sections are now
bounded glass bays with bright rims, inner cyan edges, protected translucent
fields, local grids/sheens, and environmental space visible between them.
Secondary graphite copy is darker for dependable contrast; phone density is
reduced to one portal and simplified beams.

Visible in-app Browser inspection covered Home, Work, Contact, Pricing, FAQ,
Planner, the media surface, FAQ expansion, and phone navigation. A 54-state
matrix across all route families at desktop/tablet/phone widths passes exact
containment, one main/H1, and sticky/z50 navigation. ESLint, TypeScript, and the
optimized 23-page build pass. This is rendered implementation proof, not a
claim of Owner acceptance.

**Immediate next mission:** open Chunk 5 from Owner direction `2026-09-04-14`
and `CYVEXLY_VISION_PLAN.md` §17. Preserve the continuous architectural
environment and verify its public adoption while completing the domain,
production metadata/discovery, public contact, About, legal, real inquiry
delivery, analytics/search ownership, truth audit, and release-QA work.
Payment integration and real portfolio replacement remain explicitly deferred.

**Accepted product position:** Round 28 product source is commit `c960f72` on
`main` and is live at `https://cyvexly-studio.onrender.com/`. The production
domain is confirmed as `cyvexly.com`, but DNS still needs to be connected and
verified. `origin/master` is historical and is not the deployment branch.

## Current product truth

- Round 28 extends the approved architectural-glass grammar through middle and
  lower sections across every route after the Owner rejected flat pale bands.
  Owner public visual acceptance remains pending.
- Round 27 materially restructures the Home hero around the authoritative
  glass-architecture composition after the Owner found Round 26 insufficient.
  Owner public visual acceptance remains pending.
- Round 26 materially strengthens the shared site-wide environment and glass
  hierarchy after the Owner rejected the prior visible result. Owner public
  visual acceptance remains pending.
- Round 25 commit `e38851f` hardens shared navigation lifecycle/current-page
  semantics and closes the reproduced Services enlarged-root overflow without
  changing the authoritative visual system.
- Round 24 commits `5656584`/`06fbadd` complete the authoritative every-route
  theme slice and first-invalid Contact focus correction with public proof.
- Round 22 commit `4265fa4` restores sticky/z50 navigation, adds protected
  continuation fields to Home/Services, and defers the unavailable About link.
- Round 21 commit `1437f5b` establishes the shared blue-glass atmosphere and
  protected route introductions. These are foundations, not completion of the
  newer Owner full-height every-route standard.
- Round 20 commit `d6cd17c` keeps the Home reel free of visible playback chrome
  at authored `0.75×`, with the whole named media surface as pause/resume.
- Round 19 commits `e716541`/`744cdd8` preserve invalid-route 404 metadata and
  gate Planner interactivity until draft restoration completes.
- Round 18 Pricing, Round 17 Services, Round 16 Home, Round 15 deployment, and
  Round 14 service-detail/Planner-preselection work remain accepted source.

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

## Verification and orientation

- Round 28: visible in-app Browser route-family inspection, interactions, and
  54 desktop/tablet/phone states pass exact containment, one main/H1, sticky
  navigation, responsive decoration reduction, lint, TypeScript, and optimized
  23-page build.
- Round 27: visible in-app Browser 1440/768/390 and complete-Home renders pass
  visual inspection and exact containment. Media pause/resume, removed native
  controls, sticky header, clean diagnostics, ESLint, TypeScript, and optimized
  23-page build pass.
- Round 26: opened 1440 Home viewport/full page, 1100 Services full page, 768
  Pricing, and 390 Planner/Contact renders pass visual inspection and exact
  containment. ESLint, TypeScript, and optimized 23-page build pass.
- Round 25: 114/114 exact-width optimized states and 19/19 24px-root states
  pass; native Escape/focus, Tab/Enter, history, breakpoint reconciliation,
  route-aware current semantics, byte-identical header renders, representative
  form/dynamic/work views, lint, build, and independent Council R41 local proof
  pass. Public Render interaction/semantic proof closes Council R41's initial
  deployment gate.
- Round 24: 198/198 optimized-local and 198/198 public states pass across all
  route families and eleven widths; opened full-height comparisons,
  interactions, composited contrast, build, and Render CSS adoption pass.
- Round 23: ESLint, optimized 23-page build, post-build TypeScript, real
  validation paths, composited contrast, exact containment, focus, sticky
  header, and public adoption pass. Durable evidence is indexed under
  `builder/evidence/`.
- Round 22: 154 hydrated optimized states across 18 routes/eight widths passed
  containment, sticky header, landmarks, headings, controls, focusability,
  images, menu, Home media, and visible-link truth.
- Builder runtime uses port `5173`; use Chrome headless + CDP exact device
  metrics for unattended pixel proof. Verify exact ownership before stopping a
  process.
- Read `CYVEXLY_ACTIVE_CHUNK.md` for the latest three reports, then
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`, Owner direction, current
  reviewer reports, and both debt files before planning.
- The recurring scheduler/automation is Owner-controlled and must never be
  read, modified, paused, deleted, renamed, or rescheduled by the Builder.

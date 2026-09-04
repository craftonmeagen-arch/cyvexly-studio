# Cyvexly Next Builder Handoff

## Owner-directed next mission — September 4, 2026

Open **Chunk 5 — United States Launch Completion & Business Operations** as the
next major chunk. Read Owner direction `2026-09-04-14`,
`CYVEXLY_VISION_PLAN.md` §17, and the Chunk 5 map before planning. This newer
direction supersedes the Round 28 handoff's statement that domain, Indiana
jurisdiction, public contact details, founder-image choice, and initial market
are wholly undecided.

Confirmed inputs:

- Cyvexly Studio; LLC; Indiana, United States; United States-only launch market.
- Production domain `cyvexly.com`.
- Public email `design@cyvexly.com`.
- Public phone `(317) 572-5780` / `+13175725780`.
- Logo-led studio About; no public personal founder name or portrait.
- Implement the reviewable studio-origin copy from vision §6.8.
- Payment selection/integration and real portfolio replacement are tabled.

The integrated scope is domain/HTTPS/canonical routing, production metadata and
discovery, truthful public contact data, About, Indiana/United States Privacy
and Website Terms, secure Contact/Planner server delivery and visitor
confirmation, privacy-aware analytics/search ownership, content-truth audit,
and complete public release QA. Do not report completion from one workstream.

Still route to the Owner at the real account/decision boundary: exact registered
LLC name; DNS/Render access; business-inbox and transactional-email provider;
secure secret entry; analytics/Search Console ownership or no-analytics choice;
About/legal/public-visual review; and final approval to enable indexing.

## Round 29 closeout

**Session:** scheduled `cyvexly-website-builder` task, 2026-09-04, 50-minute
hard time limit (unattended)
**Start source:** `6747f06` on `main`
**Accepted product source:** `f35a2a6` on `main`, pushed to `origin/main`
**Scope:** opened Chunk 5 and closed one bounded, Owner-gate-free workstream:
public contact identity, the code-only half of production metadata/discovery,
and a United States-only truth audit. Full detail in
`CYVEXLY_ACTIVE_CHUNK.md`'s round-29 report and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 29" section.
**Completion:** IMPLEMENTED AND PUSHED; PUBLIC RENDER ADOPTION/OWNER VISUAL
CONFIRMATION PENDING (this session could not open the visible in-app Browser)

### What changed

- `siteConfig.email` → `design@cyvexly.com`; added `phoneDisplay`/`phoneHref`
  for `(317) 572-5780` / `tel:+13175725780`; wired the phone onto `/contact`
  and the footer.
- `metadataBase` set to `https://cyvexly.com` in `src/app/layout.tsx`; added
  `src/app/sitemap.ts` covering all 17 public routes.
- Removed six stale "worldwide"/international-market lines and three
  unsupported-payment-method-claim lines across `site-config.ts`, the Home
  hero, the OG image, the footer, and the Pricing page, replacing them with
  truthful United States-only and payment-pending language per vision §8 and
  Owner direction `2026-09-04-14` item 8.

### What did not change / still open

About page, Privacy/Terms, real server-side inquiry delivery, the actual
DNS/Render domain connection, analytics/search ownership, and full release QA
are all still open — this round did not touch them. The recurring
scheduler/automation was not read, modified, paused, deleted, renamed, or
rescheduled. Concurrent Auditor evidence/report files present in the working
tree at session start were left untouched and excluded from this round's
commit.

### Recommended next workstream

Given the 50-minute budget forces one workstream per round, the next Builder
round should pick up another reachable Chunk 5 piece — most likely the About
page (fully authorized, no Owner gate: build `/about` from vision §6.8's
reviewable draft, the logo/brand treatment, and the required content list in
vision §6.8, then restore its now-safe navigation link) — while leaving the
account-gated items (LLC legal name, DNS/Render access, email-provider
authorization, analytics ownership, final visual/legal review, indexing
approval) named precisely rather than treated as unknowns.

## Round 28 closeout

**Session:** `root-sitewide-cyber-glass-20260901-r28`
**Start source:** `8c2e777` on `main`
**Accepted product source:** Round 28 commit on `main`, pushed to `origin/main`;
use `git log` for the exact immutable hash
**Completion:** IMPLEMENTED AND PUSHED; PUBLIC ADOPTION/OWNER REVIEW PENDING

## Completed work

- Reproduced the Owner's center-page concern in the visible in-app Browser:
  Home's strong hero gave way to flat pale bands and ordinary cards, with the
  same failure visible on Services and Pricing.
- Strengthened the shared full-height scene with two portal planes, three
  cross-stage beams, and a perspective horizon while retaining existing rails,
  planes, circuits, nodes, coordinates, and controlled blue refraction.
- Replaced flat continuation/direct-section masks with bounded architectural
  glass bays: white outer rims, cyan inner edges, protected translucent fields,
  local grids/sheens, deeper shadows, and scene visibility between sections.
- Darkened secondary copy to `#46576e`; conservative protected-field contrast
  is `5.5986:1`. Phone retains one portal and simplified beams while hiding
  secondary atmospheric density.
- Preserved canonical copy, pricing, facts, routes, forms, navigation semantics,
  real Home media, `0.75×` playback, and the absence of visible/native playback
  chrome.

## Verification

- Used only the visible Codex in-app Browser for rendered product QA. Opened
  Home opening/center/full page, Work, Contact, Pricing, FAQ, and Planner across
  representative desktop/tablet/phone states, then reopened Home and Pricing
  centers from the optimized production artifact.
- The 18-route × 3-width matrix passes 54/54 states with exact containment, one
  main, one H1, sticky navigation, and z-index 50.
- Home media pause/resume, FAQ expansion, and phone navigation open/close pass.
- ESLint, TypeScript, and optimized 23-page build pass. The known Owner/domain-
  blocked `metadataBase` warning remains unchanged.
- Plan and verification are indexed under `builder/evidence/INDEX.md`.

## Immediate next mission

Preserve the Round 28 continuous architecture and protected section-bay grammar
while executing the newer Chunk 5 mission above. Confirm the live Render visual
state as part of production QA, but do not let another cosmetic-only round
displace the Owner's integrated launch-completion priority.

The domain, jurisdiction, contact information, initial market, and logo-led
About direction are no longer unknown. Provider credentials, exact registered
LLC name, final copy/visual/indexing approval, payment selection, and real
portfolio replacement remain bounded exactly as stated above.

The recurring scheduler/automation was not read, modified, paused, deleted,
renamed, or rescheduled and remains Owner-controlled. Concurrent Council files
and the Owner attachment were preserved and excluded from the Builder commit.

# Chunk 4 — Round 3 Report (archived)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` during round 4 to stay under its
30KB hot-path cap (§7.14). This is the complete, unedited round-3 report,
preserved here for full accountability.

---

### Round Plan

This is a scheduled round with a 50-minute minimum work window (longer than
the governing packet's own 25-minute normal window). Reconciled current
source/runtime truth first (git log matched round 2's own final
accounting; git status showed only the same pre-existing, untouched
Auditor/Council files as round 2 left them — no new reviewer round ran
between round 2 and this round). Read the round-2 handoff's recommended
next tasks and planned a coherent round 3 slice from them: (1) close the
one well-scoped, low-risk logged debt item (Pricing icon parity vs
Services), (2) independently verify and, if still true, formally close
Chunk 2 per §7.9, (3) run the §4.12 Outcome Reachability Check on Chunk
3's email-delivery mechanism before opening it (explicitly recommended,
not yet done), and (4) use remaining time on Chunk 4's other remaining
items (favicon pixel-verification, social-sharing image, a real
launch-readiness pass against vision §15) rather than starting Chunk 3's
full multi-step Planner build in the same round — building a partial
9-step form with no working backend risked a half-finished
implementation, which the governing packet explicitly warns against;
better to leave it clearly scoped for a dedicated round than to rush it
here.

### Methodology check

Continued the same Next.js App Router + TypeScript + Tailwind v4 stack and
component patterns from rounds 1–2. For the Pricing icons, mirrored the
exact `service-icon.tsx` pattern (same badge size/classes) rather than
inventing a new icon style. For the OG image and the favicon-legibility
check, used Next's own `ImageResponse`/`next/og` file-convention (the
standard, documented Next.js mechanism for this exact problem) rather
than reaching for an external image-generation tool or asset. For the
robots/indexing fix, used Next's own `metadata.robots` field and the
`robots.ts` special-file convention (the standard mechanism), gated
behind one explicit env var rather than a guessed domain check.

### What changed

- `src/components/package-icon.tsx` — new: five hand-authored inline-SVG
  icons (Signal, Orbit, Nexus, Commerce, Custom system), matching
  `service-icon.tsx`'s pattern exactly.
- `src/app/pricing/page.tsx` — wired `PackageIcon` into both the top
  three-card grid and the bottom two-card row.
- `src/app/layout.tsx` — added `robots: { index: isIndexable, follow:
  isIndexable }` to root metadata, gated on
  `process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true"` (defaults to
  no-index/no-follow).
- `src/app/robots.ts` — new: dynamic `robots.txt`, same env-var gate,
  defaults to disallow-all.
- `src/app/opengraph-image.tsx` — new: a real, on-brand 1200x630 OG/
  Twitter card image via `ImageResponse`, reusing the `icon.svg` mark,
  real palette tokens, and the recommended launch headline.
- `docs/agent-system/cyvexly/CYVEXLY_APP_DEBT.md`, `CYVEXLY_CHUNK_DEBT.md`,
  `CYVEXLY_PROJECT_CHUNK_MAP.md`, `CYVEXLY_WATCH.md`,
  `CYVEXLY_ENVIRONMENT.md` — see Audibles and Git/diff accountability
  below; updated to reflect all findings rather than left stale.

### Audibles

- **Closed Chunk 2 per §7.9.** Independently re-verified via a live route
  sweep (not just trusting the prior report) that `/`, `/process`,
  `/services`, `/pricing`, `/contact`, `/work` (+3 case studies) all
  return 200 and `/about` still 404s. The founder-identity gap is
  unchanged and still not Builder-reachable (no new Owner input arrived).
  Closed per the chunk's own boundary; About carried forward as
  `CYVEXLY_APP_DEBT.md` item 1, not open chunk debt.
- **Ran the §4.12 Outcome Reachability Check for Chunk 3's email-delivery
  mechanism** (explicitly recommended by round 2, not yet done). Full
  writeup in `CYVEXLY_APP_DEBT.md` item 4. Conclusion: sending a real
  confirmation email *from* Cyvexly is unreachable until both a
  transactional-email provider (credential) and the production domain
  (for deliverable sender verification) are authorized/decided — these
  two gaps compound. The Planner's UI/state/validation is a genuinely
  separable, authorized, reachable slice that does not need to wait.
  Recommended (not built this round, to avoid a half-finished
  implementation) that the next Builder opening Chunk 3 build the full
  UI now and reuse Contact's `mailto:` interim pattern for submission,
  explicitly documented as not satisfying the "sent from Cyvexly"
  requirement.
- **Found and fixed the "no accidental search indexing" launch-readiness
  gap from vision §15** — there was no `robots.txt` and no `robots` meta
  tag anywhere; every response would have been fully crawlable/indexable
  by default. Fixed with an explicit opt-in env var (see What changed)
  rather than guessing a domain-based rule.
- **Tested rather than trusted the assumption that the OG/social-sharing
  image was blocked on the domain decision.** First evidence (live dev
  server) suggested it wasn't blocked at all — `og:image` resolved
  correctly to the real origin even with `metadataBase` unset. Checking
  the actual `pnpm run build` output caught that this was misleading: the
  production static build bakes in `http://localhost:3000` as the image
  URL without `metadataBase` set (`.next/server/app/*.html` inspected
  directly, not just build stdout). Net finding, stated precisely: the
  image *asset* is real, on-brand, and domain-independent (built and
  kept); the *metadata wiring* is genuinely domain-dependent, confirming
  (with sharper reasoning than round 2 had) that `CYVEXLY_APP_DEBT.md`
  item 2 was right to defer it, and that `metadataBase` must be set
  before deploy or production will ship a broken `localhost:3000`
  social-preview link. Full detail in `CYVEXLY_WATCH.md`.
- **Found a real proxy method for pixel-level visual proof in this
  unattended session** (still no live-tab screenshot capability — see
  `CYVEXLY_WATCH.md`): a `curl`-fetched, server-rendered PNG opened with
  `Read` renders as a real viewable image here. Used it to visually
  confirm the new OG image looks right, and then built a temporary
  `ImageResponse` route reusing the favicon's exact path data at
  16/32/64px to finally get real pixel evidence for the favicon
  (previously "not verified" since round 2). **Found a genuine
  legibility problem at 16px** (the actual default browser-tab favicon
  size) that a stroke-width increase (2.6 to 3.4 to 4.2) did not fix —
  points to shape complexity, not line weight, as the real cause. Stated
  the honest caveat that this rasterizer is not proof of exact
  real-browser tab rendering. Deleted the temporary route and all scratch
  capture files immediately after inspection (ephemeral-storage rule) —
  did not leave a `scratch-favicon-check` route or any leftover PNG in
  the working tree; verified via `git status` and a directory listing
  that nothing scratch-related remained.
- **Ran a first structured launch-readiness pass against vision §15's 14
  items** (never done as a discrete pass before). Findings, in the
  vision's own order: (1) positioning/audience consistency — spot-checked
  via real page nav/footer content across pages, consistent everywhere
  checked; (2) sitemap/utility pages — 8 of 15 routes live, `/about`,
  `/start`, `/privacy`, `/terms` remain (all honestly bounded) — **not
  ready**; (3) package/add-on/care-plan consistency — `pricingPreview`
  (Home) and `pricingPackages` (Pricing) are two separately maintained
  arrays, verified currently consistent but a real future-drift risk
  (new minor watch item, not refactored — the two arrays intentionally
  curate different feature subsets, so a mechanical dedup would silently
  change curated content); (4) Planner captures enough info — Chunk 3
  not built, **not ready** (expected); (5) proposal/invoice/payment
  workflow — not built, foundational, **not ready** (expected); (6)
  payment options — described in text per vision §8, no live processing
  yet (expected pre-launch); (7) three portfolio pieces truthfully
  labeled — **ready**; (8) every claim/testimonial verifiable — no
  testimonials exist, Home correctly uses "what every project includes"
  instead — **ready**; (9) legal/privacy reflects real jurisdiction —
  not built, honestly bounded — **not ready**; (10) forms/emails/errors/
  confirmations — Contact verified round 2, Planner doesn't exist yet —
  **partially ready**; (11) desktop/mobile visual QA — content/structure
  checks done every round, true pixel QA still not reachable — **not
  fully ready**; (12) accessibility/performance reviewed — structural
  checks done, no automated axe/Lighthouse audit yet — **partially
  ready**; (13) no accidental preview indexing — **fixed this round**,
  see above — **ready**; (14) domain/email/analytics/social-preview
  ready — domain undecided, analytics not wired, OG image metadata still
  needs `metadataBase` — **not ready**. Overall: **not launch-ready**, as
  expected this early — the useful output is this concrete, current
  per-item list, which the next Builder or Owner can act on directly
  rather than re-deriving it from scratch. Recorded here rather than as a
  new standing checklist file, since `CYVEXLY_PROJECT_CHUNK_MAP.md`/
  `CYVEXLY_APP_DEBT.md` already carry the open items this surfaced.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean
  after every change this round (checked incrementally).
- Started the dev server manually (proven workaround) and ran a full live
  route regression sweep via `curl` across every existing route plus the
  three new ones (`/robots.txt`, `/opengraph-image`, `/icon.svg`) and one
  intentionally-unmatched path — all returned the expected status.
- Verified the Pricing icon fix via `javascript_tool`: confirmed a real
  `<svg>` exists inside the correct badge class for all five package
  cards by name (not just "a card exists"), zero console errors, no
  horizontal overflow at 375px mobile width.
- Verified `robots.txt` output text and the home page's real rendered
  `<meta name="robots">` tag both reflect the safe no-index default.
- Verified the OG image via two independent layers: (1) HTTP-level —
  fetched the real image at `/opengraph-image`, confirmed
  `200`/`image/png`, and confirmed the auto-generated `og:image`/
  `twitter:image` meta tags exist with correct dimensions; (2)
  pixel-level — fetched the actual PNG bytes and visually inspected them
  via `Read`, confirming correct colors, correct mark, correct copy, no
  clipping. Then independently checked the *production* build output
  (`pnpm run build` stdout plus the generated `.next/server/app/*.html`)
  and found the `metadataBase`-missing warning and the resulting wrong
  baked-in URL — a genuinely different, stronger check than the
  dev-server test alone, which had been misleading.
- Verified the favicon's small-size rendering via the temporary
  `ImageResponse` proxy route described in Audibles, at three sizes and
  three stroke weights; deleted the route and all capture files
  immediately after.
- Console/network check on `/pricing` after a fresh (forced) navigation:
  zero new errors attributable to this round's changes; the only 404s
  present in console history were pre-existing, expected `/about`
  requests from an earlier, unrelated navigation in the same tab/session,
  not a regression.

### What was not checked

- No cross-browser check beyond the one Chromium-based Browser-pane
  engine (unchanged from rounds 1–2).
- No axe/automated accessibility audit (unchanged from round 2).
- True live-page pixel screenshot comparison against the mockups remains
  unreachable in this unattended session (unchanged) — the new
  `ImageResponse`-proxy technique only covers standalone generated-image
  routes (OG image, the favicon check), not full page layout/CSS
  rendering in real browser context.
- Did not attempt to fix the newly-found favicon 16px legibility issue —
  deliberately routed to an attended session/reviewer round instead of
  guessing a redesign against an unverified proxy-render caveat.
- Did not build any part of Chunk 3 (Project Planner UI) — scoped and
  reasoned about (see Audibles), deliberately not started, to avoid a
  half-finished multi-step form.
- Did not attempt `/about`, `/privacy`, `/terms`, `/start`,
  `sitemap.xml`, or `metadataBase` — all remain correctly bounded on
  Owner-supplied facts or the domain decision, unchanged from round 2's
  reasoning (now with a sharper, tested rationale for `metadataBase`
  specifically).
- Did not refactor the `pricingPreview`/`pricingPackages` duplication
  found during the launch-readiness pass — logged as a new minor watch
  item rather than risked as a scope-creeping "mechanical" change that
  would actually alter curated content.

### Git/diff accountability

At round start, `git log` showed the same commit count round 2's own
report ended on; `git status` showed only the same pre-existing,
untouched Auditor/Council files as modified/untracked that round 2 also
found and correctly left alone. This round's own changes are exactly
what's listed under "What changed" above plus the routine `CYVEXLY_*`
documentation updates (this report, `CYVEXLY_CURRENT_STATE.md`,
`CYVEXLY_PROJECT_CHUNK_MAP.md`, `CYVEXLY_CHUNK_DEBT.md`,
`CYVEXLY_APP_DEBT.md`, `CYVEXLY_WATCH.md`, `CYVEXLY_BUILD_SUMMARY.md`,
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`, `CYVEXLY_ENVIRONMENT.md`) — committed
as git source truth in one or more commits following this report (see
`git log` for exact hashes). No file outside what's described here was
touched; the temporary `scratch-favicon-check` route and its capture
files were deleted before any commit, so they never entered source
history.

### Completion state

Chunk 2: `DONE WITH PROOF`, formally **CLOSED**. Chunk 4: `NEEDS COHERENT
FOLLOW-UP` — favicon and OG-image work advanced with real new evidence
(one genuine defect found and routed, one asset completed), robots/
indexing fixed, but `/privacy`/`/terms` still bounded and a full
launch-readiness convergence is still well out (see the per-item list
above). Chunk 3: still `NOT YET OPENED`, now with its foundational
email-delivery question formally answered via §4.12 rather than left
implicit.

### Recommended next tasks

1. **Open Chunk 3 and build the Planner's full UI/state/validation** (nine
   steps, vision §6.9/§9) as the coherent, separable, authorized slice
   identified by this round's Reachability Check. Reuse Contact's
   `mailto:` interim submit pattern, explicitly labeled as not satisfying
   the "confirmation email sent from Cyvexly" requirement. This is a
   substantial build — plan it as its own round rather than a fragment of
   a broader one.
2. Route two Owner-input requests still blocking real pages: About-page
   founder identity, and Privacy/Terms jurisdiction facts (unchanged from
   round 2, see `CYVEXLY_APP_DEBT.md` items 1 and 3).
3. Route the now-precisely-scoped domain/email-provider decisions needed
   before Chunk 3's real "sent from Cyvexly" email and before deploy
   (`CYVEXLY_APP_DEBT.md` items 2 and 4).
4. When an attended session or another Auditor/Council round is
   available: (a) confirm the favicon's 16px legibility problem in a real
   browser tab and, if confirmed, redesign the small-size mark rather
   than just thickening strokes; (b) get a real pixel-level screenshot
   comparison of the round-2 pages against the mockups (still not
   reachable from this unattended session type even with this round's
   new `ImageResponse`-proxy technique, which only covers standalone
   generated images, not full page rendering).
5. Revisit the logged-but-not-fixed visual gaps in `CYVEXLY_CHUNK_DEBT.md`
   item 5 (service-combination icon-math framing vs. the current table)
   and the pre-existing `/process` layout gap (item 1) during a dedicated
   visual-polish pass. (The CTA-headline-wording part of item 5 was
   revisited and fixed in a follow-on commit after this report was
   originally drafted — see the addenda below and `git log`.)
6. Consider consolidating `pricingPreview`/`pricingPackages` in
   `site-config.ts` into one source of truth if they're touched again for
   any other reason — not urgent on its own (verified currently
   consistent), but a real future-drift risk now logged rather than
   silently carried.

### Addendum — a concurrent Auditor round published real pixel-level evidence mid-round

After the accountability section above was written, `git status` showed
new modified/untracked files that were not present at round start: fresh
Council report-plumbing files (a delayed "emergency continuity"
publication of the same stale `council-20260830T134231Z` round-1-era
findings — read, contained nothing new, left untouched) and four new
Auditor evidence screenshots timestamped `auditor-20260830T1738Z-*`
(`pricing-desktop.png`, `case-study-desktop.png`, `work-mobile.png`,
`work-redesign-empty.png`). `CYVEXLY_AUDITOR_ACTIVE_ROUNDS.md` and
`AUDITOR_CURRENT.md` still show only the round-1-era completed round, so
this looks like a still-in-progress concurrent Auditor round that has
published evidence but not yet its report — consistent with §7.10's
expectation that Builder and reviewer rounds may run concurrently.
Read the four new screenshots (read-only, did not touch any
Auditor-owned file, same non-interference discipline as every prior
round) and got the first real pixel-level confirmation of several
things this round and round 2 could only verify structurally:

- **Pricing page, desktop:** confirms this round's new package icons
  render correctly on all five cards (Signal, Orbit, Nexus, Commerce,
  Custom system), with clean layout, correct "Most popular" badge
  placement, and no visual defects — genuine pixel proof for
  `CYVEXLY_CHUNK_DEBT.md`'s "Resolved round 3" item, which previously
  only had DOM/computed-style proof.
- **Aurora Spaces case study, desktop:** confirms round 2's "Visual
  direction" color-swatch + typography section (added after the
  round-2 mockup comparison) renders correctly and looks clean.
- **Work page, mobile (375px):** confirms the filter chips, project
  cards, and footer render correctly at real mobile width with no
  visible overflow or clipping — first real pixel confirmation of a
  mobile view for this route.
- **Work page, "Redesign" filter selected:** confirms the zero-match
  empty state ("No projects match that filter yet.") renders cleanly —
  an interaction path no prior round had specifically screenshotted.

None of the four surfaced a new defect. This does not replace a
dedicated mockup-comparison pass (still recommended — see recommended
next tasks) but is real, independently-produced evidence this round
would not otherwise have had access to, and is recorded here rather
than silently used without attribution.

**Independent corroboration, found just before closeout.** A fifth new
Auditor evidence file appeared during final verification:
`auditor-20260830T1738Z-metadata-probe.md`, from what its own header
identifies as round `auditor-20260830T1738Z-002` (a second, newer
Auditor round, confirming one was genuinely in progress, not just
evidence left over from the round-1-era round). It independently ran
`pnpm build` in its own isolated runtime and reached the exact same
conclusion this round did, from a fully separate runtime and process:
`metadataBase` is unset, the build warns and bakes
`http://localhost:3000` into `og:image`/`twitter:image`, and the
no-index default (`robots.txt` + meta `robots`) is correct and working.
Independent confirmation, from a different role using a different
runtime, of both this round's `metadataBase` finding and its
`robots.txt`/no-index fix.


The same round's `auditor-20260830T1738Z-route-probe.md` (also read
read-only) independently exercised every route and several stateful
interactions (Work filters, Pricing mobile nav, Pricing FAQ, Contact
validation) and found zero defects — full agreement with this round's
and round 2's own verification. It also surfaced one minor, low-priority
observation not previously logged: the `Redesign` and `Landing Page`
Work filter chips currently have no matching project (only `Business
Site`, `Commerce`, and `Concept` return results), so those two filters
always show the honest empty state. Not a defect — the empty state
renders correctly and truthfully, and vision's own "three strong
concept projects" guidance doesn't require covering every filter
category — but noted here as a minor content-coverage gap for whenever
the portfolio grows past three projects.

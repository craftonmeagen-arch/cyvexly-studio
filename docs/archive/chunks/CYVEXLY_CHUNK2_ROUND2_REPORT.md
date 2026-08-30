# Cyvexly Chunk 2/4 — Round 2 Report (Archived)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` during round 3 to stay under
the hot-path file's 30KB cap (§7.14). This is the complete, unedited
Round 2 report — durable history, not actively read every round.

## Round 2 report — global round 2

### Round Plan

Reconcile current source/runtime truth (git log showed the prior session had
continued past its own round-1 report's stated commit count, all as
"Round 1 (cont.)" commits — read as history, not a blocker). Continue Chunk 2
with the strongest remaining coherent slice: the four fully-specified,
unblocked marketing pages (Services, Pricing, Contact, Work + case-study
template), reusing the existing design system and `site-config.ts` pattern
established in round 1. Verify every page against the real dev server, not
just build/typecheck/lint. Given the scheduled task's stated minimum
work-window (50 minutes, longer than this packet's own 25-minute normal
window), continue with coherent, reachable follow-on work — a mockup visual
comparison pass, then Chunk 4's cheapest well-specified items (custom 404,
FAQ library, Accessibility statement) — rather than stopping once the
Chunk 2 provisional plan was nominally complete.

### Methodology check

Continued the same Next.js App Router + TypeScript + Tailwind v4 stack and
component patterns from round 1 (`SiteHeader`/`SiteFooter`/`ButtonLink`/
`FaqAccordion`, `glass-panel`/`signal-grid-bg` utilities, shared
`site-config.ts` data). For the Contact form, since no email-delivery service
is authorized yet (a foundational/authorization-sensitive decision per
§4.12 — same class of gap as the Project Planner in Chunk 3), used a
`mailto:` bridge (constructs a pre-filled mailto link and sets
`window.location.href`) rather than inventing a backend/credential — this is
a real, honestly-labeled, zero-authorization interim mechanism, not a
disguised fake submission. For the Work page, added client-side category
filtering (matches vision §6.4's filter-chip requirement) using the
project's existing `category`/`kind` fields rather than introducing new
infrastructure.

### What changed

- `src/lib/site-config.ts` — added `pricingPackages`, `projectIncludes`,
  `addOns`, `carePlans`, `billedSeparately`, `pricingFaq`, `contactTopics`,
  `servicesGroups` (7 groups), `websiteTypes` (5, matching the pre-existing
  footer anchor hrefs), `serviceCombinations`, `servicesFaq`, `workFilters`,
  `caseStudies` (3 full concept case studies, each now including a `palette`
  + `typographyNote`), and added `slug`/`category` fields to the existing
  `selectedWork` entries.
- `src/app/pricing/page.tsx` — new page: 5 package cards, comparison table,
  "what every project includes," add-ons table, care plans, billed-
  separately/payment-schedule section, pricing FAQ, CTA (vision §6.6).
- `src/app/services/page.tsx` — new page: 7 service-group cards (each
  answering problem/who/included/scope-change/next-action per vision §6.2,
  now with icon badges), a "popular website types" section whose 5 card
  `id`s match the pre-existing `footerNav.services` anchor hrefs (previously
  dangling since `/services` didn't exist), a service-combinations table,
  reused selected-work cards, FAQ, CTA.
- `src/components/service-icon.tsx` — new: 7 small hand-authored inline-SVG
  line icons (no external asset), one per service group.
- `src/components/contact-form.tsx`, `src/app/contact/page.tsx` — new:
  accessible contact form (labeled fields, `aria-invalid`/
  `aria-describedby`, `role="alert"`/`role="status"`) with real client-side
  validation and a `mailto:`-bridge submit path (vision §6.10).
- `src/components/work-grid.tsx`, `src/app/work/page.tsx` — new: filterable
  portfolio grid (All/Business Site/Redesign/Landing Page/Commerce/Concept,
  vision §6.4).
- `src/app/work/[slug]/page.tsx` — new: case-study template (vision §6.5)
  with `generateStaticParams`/`notFound()`, rendering challenge, goals,
  scope, key decisions, a "Visual direction" color-swatch + typography
  section (added after mockup comparison — see Audibles), accessibility
  highlights, intended outcome, CTA.
- `src/app/faq/page.tsx` — new: full FAQ library, 11 categories / 30 Q&As
  covering every topic vision §6.11 lists, with an anchor-linked category
  nav (vision §6.11; Chunk 4).
- `src/app/accessibility/page.tsx` — new: Accessibility Statement — WCAG 2.2
  AA target, what that means in practice, ongoing-work note, and a report-a-
  problem contact route (vision §6.12; Chunk 4). Deliberately did not build
  `/privacy` or `/terms` in the same pass — see Audibles.
- `src/app/not-found.tsx` — new: custom 404 replacing the Next.js default,
  with links back to Home/Services/Work/Planner (vision §6.12; Chunk 4).
  Applies to both unmatched routes and explicit `notFound()` calls (verified
  against the case-study template's unknown-slug path).

### Audibles

- **Found and fixed a real Next.js 16 runtime bug.** `/work/[slug]/page.tsx`
  was first written with `params: { slug: string }` (pre-Next.js-15
  convention). `tsc --noEmit`, `pnpm run lint`, and `pnpm run build` all
  passed clean — the hand-written type bypassed the framework's generated
  `PageProps` check. Real dev-server requests to all three case-study routes
  404'd, and the server log showed `Route "/work/[slug]" used
  \`params.slug\`. \`params\` is a Promise and must be unwrapped...`. Fixed
  by typing `params: Promise<{ slug: string }>` and awaiting it in both
  `generateMetadata` and the page component; re-verified all three routes
  return 200 with correct content afterward. Recorded in `CYVEXLY_WATCH.md`
  as a pattern to watch for in any future dynamic route.
- **Performed a real mockup visual-comparison pass** against
  `mockups/02-services-pricing.png` and `mockups/03-work-case-study.png`
  (opened both as images). Found and fixed one genuinely actionable,
  reachable gap: the case-study template was missing the "visual system
  excerpt" vision §6.5 item 7 requires and the mockup visually demonstrates
  (a compact color-palette + typography specimen) — added a real "Visual
  direction" section per case study using each project's actual gradient hex
  values as swatches (verified via `getComputedStyle` in the running app,
  not just source inspection) plus a short typography note. Also found the
  Services page had no icon badges where the mockup shows them on every
  card; added a small hand-authored inline-SVG icon set rather than leaving
  it unaddressed. Named, but deliberately left open (logged in
  `CYVEXLY_CHUNK_DEBT.md` rather than silently claimed as converged): the
  Services/Pricing pages are denser and more text-heavy than the mockup's
  compact cards (a reasoned adaptation favoring the more specific written
  vision text over the compact thumbnail, per §4.3's "preserve product
  intent" guidance — not an oversight), Pricing still has no icon badges,
  and both pages' final-CTA headline wording differs from the mockup.
- **Refined a round-1 Watch finding.** Round 1's note said
  `javascript_tool`-dispatched clicks "work normally" in this unattended
  session. Round 2 found this needs a caveat: a `computer` tool click (by
  ref) on a submit button and a text input produced zero effect (no state
  change, no focus, no typed text) across repeated controlled tests, even
  though the tool call itself reported apparent success. An earlier same-
  session test that seemed to show a `computer` click succeeding on the FAQ
  accordion was very likely a false positive — a stale read racing an
  unrelated `javascript_tool`-dispatched click's delayed state commit, not
  the `computer` click itself. Standardized on `javascript_tool` dispatching
  real `MouseEvent`/`input` events (with a short `await setTimeout` after,
  since React's commit isn't synchronous with the dispatch call) as the
  session's one reliable interaction-verification method for the rest of
  this round; updated `CYVEXLY_WATCH.md` accordingly so the next Builder
  doesn't have to rediscover this.
- **Chose a `mailto:` bridge for the Contact form's submit action** rather
  than inventing a backend/email-delivery integration, since no such service
  is authorized (§4.12 applies — this is the same class of foundational gap
  as the Project Planner's eventual backend). This is a real, functioning,
  zero-authorization mechanism (verified: constructs a correct
  `mailto:hello@cyvexly.com?subject=...&body=...` target and calls
  `window.location.href = mailto` on valid submit, confirmed via a real
  submit-flow test with intercepted navigation), not a placeholder disguised
  as complete. Documented as the current mechanism in the round report
  rather than silently treated as the final answer — a real email-delivery
  service is still an open foundational decision for Chunk 3.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean
  after every page added this round (checked incrementally, not just once
  at the end).
- Started the dev server manually (unattended-session workaround from round
  1) and, for every new route (`/services`, `/pricing`, `/contact`, `/work`,
  `/work/aurora-spaces`, `/work/nexora-systems`, `/work/vellora-care`,
  `/faq`, `/accessibility`, `/not-found` via an unmatched path and via the
  case-study template's `notFound()`) plus the pre-existing `/` and
  `/process`: confirmed HTTP 200 (404 for intentionally-unmatched paths),
  fetched real rendered page text confirming correct content, checked
  `read_console_messages` for zero unexpected errors, and checked
  `read_network_requests` for all-200/304 asset loads.
- Real interaction testing via `javascript_tool`-dispatched DOM events (see
  Audibles for why `computer` actions were not used): FAQ accordion
  open/toggle on Pricing and FAQ pages (verified `aria-expanded` and panel
  text), mobile nav open/close on Pricing (verified `aria-expanded` and
  rendered link count), Work page category filter (verified "Commerce"
  isolates exactly Vellora Care), Contact form's full validation path (empty
  submit → all 4 expected field errors + alert banner) and full valid-submit
  path (filled all fields including checkbox → confirmation state rendered,
  form reset, no unwanted page navigation observed).
- Verified the "visual direction" color swatches render the correct actual
  colors via `getComputedStyle(...).backgroundColor` against the source hex
  values (not just visual inspection of markup).
- Verified all 12 Services-page anchor targets (7 service groups + 5
  website-type cards, including the previously-dangling footer anchor ids)
  resolve via `document.getElementById`.
- Checked every new page at 375×812 (mobile preset) for
  `document.documentElement.scrollWidth > clientWidth` (horizontal overflow)
  — none found.
- Ran a full route regression sweep (`curl` HTTP status) across every route,
  old and new, after all `site-config.ts` changes, plus a live re-check of
  the Home page (`/`) confirming its FAQ accordion, work cards, and content
  were unaffected by the shared-config growth.
- Opened `mockups/02-services-pricing.png` and `mockups/03-work-case-
  study.png` as images and performed the visual-plan/target comparison
  required by §2.2/§4.3 — see Audibles for findings, both fixed and
  deliberately logged as open.

### What was not checked

- No cross-browser check beyond the one Chromium-based Browser-pane engine
  (unchanged from round 1).
- No axe/automated accessibility audit; structural checks only (labels,
  aria-invalid/describedby, role=alert/status, heading order, focus-visible
  by construction/code review).
- Full pixel screenshot comparison against the mockups was not reachable
  this round either (same unattended-session limitation as round 1) — the
  mockup comparison performed was: open the mockup image directly, read its
  actual visible content/layout, and compare against real fetched page text/
  DOM structure from the running app. This is real evidence of content and
  structure, not of exact pixel layout/spacing/typography rendering.
- `/about`, `/start`, `/privacy`, `/terms` were not built — all four are
  honestly bounded on Owner-supplied facts or a Chunk 3 authorization
  decision, not reachable this round (see `CYVEXLY_APP_DEBT.md` and the
  project chunk map).
- Did not attempt to resolve the pre-existing placeholder work-card/case-
  study photographic imagery gap (needs a real design asset, not a text
  generation task) — partially narrowed (added real color/typography data)
  but the photographic hero and desktop/mobile screen-preview panels from
  `mockups/03-work-case-study.png` remain unaddressed.
- Did not investigate why the prior session's commits are labeled
  "Round 1 (cont.)" past round 1's own stated commit count, beyond noting it
  in `CYVEXLY_CURRENT_STATE.md` as a documentation-accuracy observation for
  the next Builder — not a source-truth risk (git log is unambiguous), just
  a prose-vs-history mismatch worth a look if it recurs.

### Git/diff accountability

At round start, `git log` showed 7 commits on `master` (2 from round 1's own
report plus 5 more labeled "Round 1 (cont.)" that round 1's own report did
not describe — read as history, not re-litigated). `git status` at round
start showed only concurrently-running Auditor/Council-owned files as
modified/untracked (left untouched, per non-interference). This round's own
changes — all `src/` files listed under "What changed" above, plus the
documentation files listed in this report's own commit — are what this round
is responsible for; committed as git source truth in one or more commits
following this report (see the commit(s) immediately after this report entry
for the exact hashes). No file outside what's described in this report and
the routine documentation updates (`CYVEXLY_*` state/debt/watch/handoff/
summary/chunk-map files) was touched.

### Addendum — favicon, port conflict, and a real heading-hierarchy fix

After the accountability section above was written, this round continued
with time remaining rather than stopping at a nominally-complete state:

- Added `src/app/icon.svg` — a hand-authored abstract "C/Y signal mark"
  favicon per vision §4's logo direction (verified via build success and a
  scratch-port dev server; pixel appearance not visually confirmed — this
  unattended session has no screenshot capability).
- Mid-check, found this round's own port-5173 dev server had died and the
  port was occupied by an unrelated foreign process ("EduAILenz V2", a
  different product's Vite dev server, not part of this project or role
  system). Left it untouched per role/process non-interference — its
  ownership was not proven to be orphaned Builder infrastructure — and
  verified the rest of this addendum's work on scratch ports instead. Full
  detail in `CYVEXLY_WATCH.md`.
- Ran an actual measured heading-hierarchy check (`h1`–`h6` sequence, flagged
  on any level skip) across all seven round-2 pages against the final
  production build — stronger proof than the code-review-only check this
  report's own "What was not checked" section originally logged. Found and
  fixed one real, reachable defect: `/work` skipped H1→H3 (no H2) because
  the shared `WorkGrid` card component used `<h3>` while `/work/page.tsx`
  never wraps the grid in its own `<h2>` section. Fixed by changing the
  card heading to `<h2>` (confirmed the component is only used on `/work`,
  so Services' own separate "Recent work" markup was unaffected); re-ran the
  same measurement across all seven pages afterward and confirmed zero
  skipped levels remain anywhere, including the case-study template, FAQ,
  Accessibility, and the custom 404. See `CYVEXLY_CHUNK_DEBT.md`'s "Resolved
  round 2" section.
- Committed both as separate follow-on commits (see `git log` for exact
  hashes: one for the favicon/port finding, one for the heading fix), same
  non-interference discipline as the main round (Auditor/Council files left
  untouched throughout).

### Completion state

Chunk 2: `NEEDS COHERENT FOLLOW-UP` → now effectively `DONE WITH PROOF`
except one honestly `FULFILLED TO THE BEST OF CURRENT PRACTICAL ABILITY`
item (About page — blocked on Owner-supplied founder identity, not a
reachable gap). Chunk 4: opened early, `NEEDS COHERENT FOLLOW-UP` (3 of ~5
known items done; Privacy/Terms bounded on Owner-supplied jurisdiction
facts; favicon/social assets and a launch-readiness pass remain).

### Recommended next tasks

1. Independently verify Chunk 2's bounded state and, if agreed, formally
   close it per §7.9 (only the About-page gap remains, and it is not
   reachable without Owner input).
2. Continue Chunk 4: favicon/social-sharing image asset (needs a real design
   asset — likely not a pure code-generation task), then a launch-readiness
   pass against vision §15 once more of the site exists.
3. Route two Owner-input requests that are now blocking real pages rather
   than just documentation: (a) About-page founder identity (vision §6.8,
   carried from round 1), and (b) Privacy/Terms jurisdiction facts — business
   location and customer markets to address (vision §6.12/§12, new this
   round). See `CYVEXLY_APP_DEBT.md` items 1 and 3 for the exact questions.
4. Before opening Chunk 3 (Project Planner), run the full §4.12 Outcome
   Reachability Check on the email-delivery/backend mechanism — the Contact
   page's `mailto:` bridge (this round) is a reasonable interim pattern for
   a short form, but the Planner is described in vision §6.9 as needing a
   confirmation email with a full answer summary, which a `mailto:` bridge
   cannot reliably deliver (the visitor, not Cyvexly, would need to actually
   send it). Don't assume the same interim mechanism scales to Chunk 3
   without checking.
5. When an attended session or another Auditor/Council round is available,
   get a real pixel-level screenshot comparison of the round-2 pages against
   `mockups/02-services-pricing.png` and `mockups/03-work-case-study.png` —
   this round's comparison was real (opened the actual mockup images) but
   was necessarily content/structure-level, not pixel-level, per the
   unattended-session screenshot limitation.
6. Revisit the logged-but-not-fixed visual gaps in `CYVEXLY_CHUNK_DEBT.md`
   item 5 (Pricing icon parity, service-combination framing, CTA headline
   wording) during a dedicated visual-polish pass, alongside the pre-existing
   `/process` layout gap (item 1).


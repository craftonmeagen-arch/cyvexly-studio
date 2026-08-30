# Cyvexly Next Builder Handoff

## Urgent items

None. Round 5 closed cleanly — no crash, no unsafe uncommitted state, no
unresolved urgent reviewer finding discovered this round. Check
`git log dfc0485..HEAD` for the exact commit set: one main commit
(`c159226`, the `/process` timeline + concept-preview work) plus several
small documentation-only "(cont.)" follow-ups recording additional
verification/research performed after the main commit closed (a
concurrent Council round noted in watch, a production-build verification
pass, the exact commit list, and design-industry disclosure-practice
research for the framing question below) — same pattern round 4 used for
its own "(cont.)" commits.

## Heads-up: in-progress Council evidence found real Planner/Services issues, not yet formally published

While closing this round, a concurrent Council round (`council-
20260830T194545Z`, still in progress — see `CYVEXLY_WATCH.md`) published
evidence directly to `docs/agent-system/cyvexly/council/evidence/
council-20260830T194545Z-planner-progress.md` before this round ended.
This Builder read it (read-only, did not touch it or any Council file)
since it names concrete, real defects worth knowing before the Council's
own formal report and inbox entry land: (1) the Planner's progress rail
at `/start` doesn't auto-scroll to keep the active step visible at 390px/
768px viewports — at step 9, the rail is clipped after circle 5 and stays
scrolled to position 0, so a user must discover a hidden horizontal
scroll to see their own current step; confirmed only at 1440px is the
active step actually visible without scrolling. (2) The Services page's
"Common combinations" table renders wider than its container at 390px
(560px content in a 342px parent) with an unlabeled horizontal-scroll
affordance and clipped right-column content. (3) A console warning:
`scroll-behavior: smooth` is set on `<html>` without the Next.js-
recommended `data-scroll-behavior="smooth"` attribute. **This is the
Council's own finding, not verified independently by this Builder round**
— treat it as a strong, specific lead to reproduce and fix, not yet an
adopted Builder fact, and check whether the Council's own formal report
(once published to `CYVEXLY_REVIEW_INDEX.md`'s current-report path) adds
anything further before acting.

## Orientation

- **Round 5 revisited two open items on the closed Chunk 2 (closed does
  not mean frozen) — both reachable, neither Owner-blocked.** (1) Rebuilt
  `/process`'s steps section as a connected vertical timeline with
  numbered circle badges, plus a new "Typical timing" table and "Our
  collaboration promise" panel, matching `mockups/04-process-planner.png`.
  Closes `CYVEXLY_CHUNK_DEBT.md` item 1 (open since round 1). (2) Replaced
  the Work grid/case-study flat two-tone gradients — independently
  flagged by both the Auditor (`CYV-IFA-002`) and the Council
  (`CYC-R1-F002`) as their own "Next" priority — with
  `src/components/concept-preview.tsx`, three distinct hand-authored
  abstract SVG compositions grounded in each concept project's own
  already-written creative decisions and palette. A direct mockup
  comparison also found a second, more specific gap — the case-study page
  was entirely missing `mockups/03-work-case-study.png`'s "Desktop
  experience"/"Mobile experience" device-frame section — and built it,
  reusing the same artwork. This is a **partial** closure of
  `CYVEXLY_CHUNK_DEBT.md` item 2: real photographic/screen-sequence
  imagery, which is what both reviewers' closure tests actually ask for,
  remains open — see the framing question below. See
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-5 report for full plan, methods, and
  proof.
- **New Owner framing question, not yet asked before:** should the Work/
  case-study visual gap be considered closed with honestly-labeled
  abstract illustrative artwork (round 5's approach, same craft level as
  the existing `icon.svg`/`opengraph-image.tsx`), or does the vision's
  "Concept project" case-study work need real commissioned design mockups
  for one or more projects to fully satisfy what both external reviewers
  asked for ("real designed crops or screen sequences")? This is a
  product-presentation decision, not a Builder judgment call — route it
  alongside the other three Owner-input questions below. **Light research
  context, not a decision:** general design-industry practice for
  speculative/fictional portfolio work centers on clear disclosure that
  a project is conceptual, not a specific visual-fidelity bar — Cyvexly's
  existing "Concept project" labeling already meets that transparency
  standard regardless of which visual treatment is chosen. This doesn't
  resolve the Owner's actual preference, but suggests the abstract-artwork
  path is a normal, defensible industry approach, not a corner-cutting one.
- **Chunk 3 (Project Planner) is unchanged from round 4**, still open:
  the full nine-step UI/state/validation is DONE WITH PROOF at `/start`,
  but the chunk does not close until the real server-side email route
  exists, which needs the domain + email-provider decision (see below).
  No pixel-level visual proof of `/start` exists yet either (unchanged —
  see round 5's own Browser-pane limitation note below, which affected
  this round's ability to get new screenshots of anything, not just
  `/start`).
- **A new Browser-pane symptom appeared mid-round, beyond the
  already-known screenshot limitation.** `document.documentElement.
  clientWidth`/`window.innerWidth` began reading `0` and
  `document.visibilityState` read `"hidden"` partway through this round,
  on every page (confirmed on `/process`, which had measured correctly
  earlier in the same round). A fresh foreground tab did not recover it.
  Read `CYVEXLY_WATCH.md`'s round-5 entry before assuming viewport-size
  DOM measurement is available at the start of the next round — verify
  it directly rather than assuming either way, since round 5 had it work
  for part of the round and fail for the rest.
- **The round-3 `ImageResponse`-proxy pixel-proof technique now has a
  second proven use case**: not just standalone image-convention routes
  (favicon, OG image) but also arbitrary hand-authored SVG components
  meant to be embedded in a normal page. If the next round needs real
  pixel proof of any SVG-based visual and a live screenshot is
  unavailable, this is a faster, already-proven path — see
  `CYVEXLY_WATCH.md`'s round-5 entry for the exact mechanism.
- Chunk 4 (utility/legal pages) is unchanged from round 3: `/not-found`,
  `/faq`, `/accessibility`, the favicon, `robots.txt`/no-index default,
  and the OG image asset are done; `/privacy`/`/terms` remain blocked on
  Owner-supplied jurisdiction facts; the favicon's 16px legibility
  concern (found round 3) is still unconfirmed in a real browser tab.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching the favicon, the OG image/
  `metadataBase`, or Services/Pricing (known density/framing gaps vs.
  mockups, logged not fixed, unchanged since round 2/3) — note the item
  numbers shifted this round (favicon is now item 3, Services/Pricing
  density is now item 4) since item 1 (`/process`) was resolved and
  removed.

## Three (plus one new) Owner-input questions still blocking real work

1. **About page founder identity** (carried from round 1): what name/
   pronoun should the site use, is there a real portrait or should a
   non-portrait studio image stand in, and what should the first-person
   story say about why Cyvexly exists?
2. **Privacy/Terms jurisdiction** (carried from round 2): what is
   Cyvexly's business location/registration, and which customer markets
   should the policies explicitly address?
3. **Production domain and an authorized transactional-email provider**
   (carried from round 3, still the only remaining blocker for Chunk 3):
   needed before `metadataBase`/canonical URLs/`sitemap.xml`/real
   OG-image metadata can ship, and before the Project Planner can send a
   real confirmation email "from Cyvexly" rather than relying on the
   visitor's own mail client.
4. **New this round: is abstract illustrative concept artwork an
   acceptable permanent answer for the Work/case-study visual gap, or is
   real commissioned design work needed** for one or more of the three
   fictional concept projects? See the framing question above.

All four are Owner-supplied facts, authorizations, or presentation-level
product decisions, not reversible Builder judgment calls.

## Favicon: still needs an attended-session confirmation before any redesign

Unchanged from round 3 — see `CYVEXLY_CHUNK_DEBT.md` item 3 for full
detail. The current C/Y signal-mark favicon may not be legible at 16x16,
the actual default browser-tab size, per a proxy-rendering technique
(not a real browser tab). Needs independent confirmation before
redesigning.

## Round-5 method note: grep-based color audits catch design-system drift that eyeballing misses

Round 5 found a real invented color (not in any project's palette) in a
first draft of new hand-authored SVG artwork, caught only by
`grep -oE '#[0-9A-Fa-f]{6}' <file> | sort -u` against the palette arrays
— not by visual inspection. Worth running the same check on any future
hand-authored SVG/color work in this app before calling it done.

## Round-4 method note: reused the established shared-component + config-data pattern

The Planner's ~60 fields across nine steps were built with one small
reusable field-component library (`src/components/planner/
planner-fields.tsx`) driven by config data transcribed from vision §9
(`src/lib/planner-config.ts`), the same shape the app already uses for
`servicesGroups`/`pricingPackages`/`faqLibrary`. If a future round
touches the Planner's content (e.g. splitting the shared step-5
feature-detail field into per-feature fields — see
`CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report in the archive for why that
wasn't done then), extend `planner-config.ts` first rather than
hand-editing step markup directly.

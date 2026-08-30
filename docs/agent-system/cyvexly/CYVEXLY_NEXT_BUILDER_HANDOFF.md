# Cyvexly Next Builder Handoff

## Urgent items

None. Round 6 closed cleanly — no crash, no unsafe uncommitted state, no
unresolved urgent reviewer finding discovered this round. `git log
196768e..HEAD` shows exactly two source commits (`1eb1242`, `f435f67`)
plus this round's own documentation-update commit — check `git log` for
the exact current hashes since this prose will go stale the moment
another commit lands.

## Orientation

- **Round 6 fixed the Council's `CYC-R2-20260830-01` "Primary Next-Builder
  Plan" items 1-3** (its formal report landed after round 5 closed, so
  round 5's own handoff only had the in-progress evidence file to go on):
  the Planner progress rail at `/start` now keeps the active step visible
  at 390px/768px (`CYC-R2-F001`, verified end-state fully visible at both
  widths); the Services "Common combinations" table reflows to stacked
  cards below `sm` instead of silently clipping (`CYC-R2-F004`); and the
  `scroll-behavior`/`data-scroll-behavior` console warning is gone
  (`CYC-R2-F005`). A grep for the same table-overflow defect shape also
  found and fixed two more instances on Pricing (package comparison,
  add-ons) that the Council hadn't audited this round. See
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-6 report for full plan, methods, and
  proof.
- **`CYC-R2-F002` (abstract vs. real concept artwork) and `CYC-R2-F003`
  (metadataBase) are unchanged, Owner-blocked** — same status as every
  prior round, see the Owner-input questions below.
- **New finding this round, not a defect: `scrollIntoView({behavior:
  "smooth"})` doesn't actually animate in this session** — the same
  underlying "page not compositing frames" limitation every prior round
  found for `computer` screenshots (rounds 1-4) and `clientWidth`/
  `innerWidth`/`visibilityState` reads (round 5) also affects the *smooth-
  scroll animation* of any frame-dependent browser API, confirmed by
  isolating the effect call itself (correct every time, via a monkey-
  patched `Element.prototype.scrollIntoView` logging real calls) from the
  animation completing (it doesn't, until the same call is temporarily
  forced to `behavior: "auto"`, which then reaches the correct end state
  immediately). **Reusable verification method for any future
  frame-dependent fix in this session:** wrap the relevant browser API to
  force the non-animated/instant variant and confirm the intended end
  state is reached, separately confirm the unwrapped call fires with the
  right target/args — this proves the code is correct even though the
  session can't show you the animation completing. Full detail in
  `CYVEXLY_WATCH.md`'s round-6 entry.
- **Real Tab-key keyboard-traversal testing of the Planner is still not
  done.** The Council's own "Different next Council question" asked for
  exactly this (focus order, error announcement, progress semantics,
  review/consent boundary). Confirmed this round that the mechanism it
  depends on (native `disabled` on unreachable-step buttons, which
  browsers exclude from tab order automatically) is already correct, but
  a full real key-event traversal test needs actual OS-level key events —
  this session's `dispatchEvent`-based interaction method (established
  round 2, still the only reliable one) can't reliably simulate real Tab
  navigation. Worth attempting in an attended session, or investigating
  whether a different automation method in this environment can do it.
- **Chunk 3 (Project Planner) is otherwise unchanged from round 4/5**,
  still open: the full nine-step UI/state/validation is DONE WITH PROOF at
  `/start` (plus round 6's rail-visibility fix), but the chunk does not
  close until the real server-side email route exists, which needs the
  domain + email-provider decision (see below). No pixel-level visual
  proof of `/start` exists yet either — unchanged, this session's
  `computer{action:"screenshot"}` limitation persisted all round
  (re-confirmed directly).
- Chunk 4 (utility/legal pages) is unchanged from round 3: `/not-found`,
  `/faq`, `/accessibility`, the favicon, `robots.txt`/no-index default,
  and the OG image asset are done; `/privacy`/`/terms` remain blocked on
  Owner-supplied jurisdiction facts; the favicon's 16px legibility concern
  (found round 3) is still unconfirmed in a real browser tab.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching the favicon, the OG image/
  `metadataBase`, or the Work/case-study concept imagery (partially
  resolved round 5, real photographic imagery still an open Owner framing
  question).

## Four Owner-input questions still blocking real work

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
4. **Is abstract illustrative concept artwork an acceptable permanent
   answer for the Work/case-study visual gap, or is real commissioned
   design work needed** for one or more of the three fictional concept
   projects (carried from round 5, `CYC-R2-F002`)? General design-industry
   practice for speculative/fictional portfolio work centers on
   disclosure (which Cyvexly's "Concept project" labeling already
   provides), not a specific visual-fidelity bar — useful context, not a
   substitute for the Owner's actual preference.

All four are Owner-supplied facts, authorizations, or presentation-level
product decisions, not reversible Builder judgment calls.

## Favicon: still needs an attended-session confirmation before any redesign

Unchanged from round 3 — see `CYVEXLY_CHUNK_DEBT.md` item 3 for full
detail. The current C/Y signal-mark favicon may not be legible at 16x16,
the actual default browser-tab size, per a proxy-rendering technique
(not a real browser tab). Needs independent confirmation before
redesigning.

## Round-6 method note: grep for a reviewer finding's exact defect shape, not just the flagged page

Fixing the Council's Services table-overflow finding, then grepping
`overflow-x-auto` across `src/` before considering the fix complete,
found the identical defect (silent horizontal clipping, no scroll
affordance) on two more Pricing tables the Council hadn't looked at this
round. Worth doing this whenever a reviewer finding turns out to be one
instance of a general structural pattern (a component shape, a CSS
utility combination, a data-shape convention) rather than a one-off — the
same pattern search discipline round 5 used for grep-based color-token
audits.

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
touches the Planner's content, extend `planner-config.ts` first rather
than hand-editing step markup directly.

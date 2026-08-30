# Cyvexly Next Builder Handoff

## Urgent items

None. Round 4 closed cleanly — no crash, no unsafe uncommitted state, no
unresolved urgent reviewer finding discovered this round. It landed as
13 commits, not just one — check `git log 09a7653..HEAD` for the full
set. The "(cont.)" commits are all closed, verified follow-on fixes
found by re-auditing this round's own work with fresh eyes (a
field-usage audit found two vision §9 fields typed but never rendered; a
`prefers-reduced-motion` gap in the new scroll-to-top; three groups of
Planner buttons with missing or duplicate accessible names for
assistive technology) — the initial commit message alone undersells
what actually shipped.

## Orientation

- **Chunk 3 (Project Planner) is now open and its UI/state/validation is
  DONE WITH PROOF at `/start`.** All nine steps of vision §6.9/§9 are
  built and verified through real interaction: per-step validation with
  "not sure — recommend it" escape hatches, conditional questions, a
  review step with edit links, required consent checkboxes, a
  spam-protection honeypot, and a client-side "save & continue later"
  draft. Submission reuses Contact's `mailto:` interim bridge, explicitly
  labeled (in both the confirmation state and the review step) as not
  satisfying the "confirmation email sent from Cyvexly" requirement. See
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report for the full plan, methods,
  and proof.
- **Chunk 3 does not close until the real server-side email route
  exists**, which needs two Owner authorizations that are still open:
  the production domain and a transactional-email-provider choice +
  credential (`CYVEXLY_APP_DEBT.md` item 4). Once both arrive, the
  recommended next step is a Next.js Route Handler
  (`app/api/.../route.ts`) calling the chosen provider's API — the
  standard pattern already identified by round 3's §4.12 Reachability
  Check, unchanged.
- **A real CSS Grid mobile-overflow bug was found and fixed this round**
  in the Planner's two-column layout (a grid item with no `min-w-0`
  wouldn't shrink below a horizontally-scrolling descendant's
  min-content size, forcing the whole page 622px wide on a 375px
  viewport). Fixed at the source with one `min-w-0` class; re-verified
  zero overflow on all nine steps individually. Read
  `CYVEXLY_WATCH.md`'s round-4 entry before building any future
  breakpoint-gated multi-column grid layout that contains a
  horizontally-scrollable descendant — this is a real, recurring CSS
  Grid gotcha class, not a one-off.
- **No pixel-level visual proof of `/start` exists yet.** This round's
  verification is thorough on structure, interaction, validation, and
  mobile overflow (all via real dispatched DOM events and DOM
  measurement — `computer` screenshot is still non-functional in this
  session type, re-confirmed), but nobody has actually seen the page
  rendered. If an attended session or another Auditor/Council round
  becomes available before the next Builder round, get real screenshots
  of `/start` at desktop/tablet/mobile and compare against
  `mockups/04-process-planner.png`'s visual pattern (progress rail,
  card styling, sidebar panel) before claiming visual convergence — this
  round deliberately did not claim visual completion, only structural/
  interactive completion.
- Chunk 4 (utility/legal pages) is unchanged from round 3: `/not-found`,
  `/faq`, `/accessibility`, the favicon, `robots.txt`/no-index default,
  and the OG image asset are done; `/privacy`/`/terms` remain blocked on
  Owner-supplied jurisdiction facts; the favicon's 16px legibility
  concern (found round 3) is still unconfirmed in a real browser tab.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching the favicon, the OG image/
  `metadataBase`, or Services/Pricing (known density/framing gaps vs.
  mockups, logged not fixed, unchanged since round 2/3).

## Three Owner-input questions still blocking real work

1. **About page founder identity** (carried from round 1): what name/
   pronoun should the site use, is there a real portrait or should a
   non-portrait studio image stand in, and what should the first-person
   story say about why Cyvexly exists?
2. **Privacy/Terms jurisdiction** (carried from round 2): what is
   Cyvexly's business location/registration, and which customer markets
   should the policies explicitly address?
3. **Production domain and an authorized transactional-email provider**
   (carried from round 3, now the only remaining blocker for Chunk 3):
   needed before `metadataBase`/canonical URLs/`sitemap.xml`/real
   OG-image metadata can ship, and before the Project Planner can send a
   real confirmation email "from Cyvexly" rather than relying on the
   visitor's own mail client.

All three are Owner-supplied facts or authorizations, not reversible
Builder judgment calls.

## Favicon: still needs an attended-session confirmation before any redesign

Unchanged from round 3 — see `CYVEXLY_CHUNK_DEBT.md` item 4 for full
detail. The current C/Y signal-mark favicon may not be legible at 16x16,
the actual default browser-tab size, per a proxy-rendering technique
(not a real browser tab). Needs independent confirmation before
redesigning.

## Round-4 method note: reused the established shared-component + config-data pattern

The Planner's ~60 fields across nine steps were built with one small
reusable field-component library (`src/components/planner/
planner-fields.tsx`) driven by config data transcribed from vision §9
(`src/lib/planner-config.ts`), the same shape the app already uses for
`servicesGroups`/`pricingPackages`/`faqLibrary`. If a future round
touches the Planner's content (e.g. splitting the shared step-5
feature-detail field into per-feature fields — see
`CYVEXLY_ACTIVE_CHUNK.md`'s round-4 Audibles for why that wasn't done
this round), extend `planner-config.ts` first rather than hand-editing
step markup directly.

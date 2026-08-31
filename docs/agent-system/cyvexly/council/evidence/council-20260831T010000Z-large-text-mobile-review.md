# Council Round 8 — large-text mobile reflow review

## Review identity

- Round: `council-20260831T010000Z`
- Source snapshot: `85a1d2b995a877bf936937e63314d08cd547149b`
- Snapshot dirty fingerprint: `769DC08C1926E560D8B337CC453929EDFE776DCF6CC1C8F069EFD70D8F8DF990`
- Fresh product diff: commit `2d82b0b` changes Pricing add-on rows and Process
  timing rows from horizontal flex rows to mobile-stacked layouts, restoring
  desktop row alignment at `sm` and above.
- Council runtime: `.codex/runtime/council/council-20260831T010000Z/runtime`, port `5373`

## Direct visual review

At phone width (`390×844`, CSS client width `375`), Pricing was opened and
viewed end to end. Add-on names and ranges now read as distinct stacked lines;
the five package cards, comparison cards, care plans, FAQ, CTA, and footer stay
within the viewport. Process was likewise opened and viewed end to end. The
five timeline cards, Typical timing panel, collaboration promise, CTA, and
footer remain legible with no clipped timeframe values.

The live runtime reported zero horizontal overflow on both routes. Computed
checks showed Pricing add-on rows use `display:flex; flex-direction:column` at
phone width, while Process timing rows use the same column direction and retain
the `sm:flex-row` responsive override in source. The fix addresses the
large-text/compact-width failure shape without changing the content or the
desktop information architecture.

At `1440px`, the same Process timing rows computed as `display:flex;
flex-direction:row` with a `402px` content width, confirming that the compact
reflow does not flatten the intended desktop comparison layout.

Bounding-box checks showed the representative Pricing row contained both
children inside a `327px` row (`x=24..351`) and Process timing rows contained
both children inside a `269px` row (`x=53..322`), with no horizontal overlap or
right-edge escape.

At `768px`, the responsive Pricing comparison table remained active with zero
page overflow, confirming a stable breakpoint handoff between phone and
desktop.

A source pattern sweep found no additional non-wrapping paired rows matching
this failure shape; the remaining `justify-between` uses are wrapped controls,
flex-wrap metadata, or already mobile-first layouts.

## Scope and limits

This round's direct visual evidence covers the new Pricing/Process behavior in
the real in-app browser. The Builder's custom 24px profile evidence was read as
context, not promoted as Council execution. No source or tests were edited;
no valid form submission, external mail, or deployment action was attempted.

A compact route stress pass also covered all 15 expected public paths in two
batches. Every path exposed one `h1`, one `main`, zero unnamed links, zero empty
image alts, and zero horizontal overflow. `/about`, `/privacy`, and `/terms`
continue to render the intentional custom 404 while their Owner-gated facts
remain unresolved. The route slices are retained as
`council-20260831T010000Z-route-slice-a.json` and
`council-20260831T010000Z-route-slice-b.json`.

A six-route compact control audit (`council-20260831T010000Z-control-audit.json`)
found no visible unnamed buttons/links and no warning/error console entries on
Pricing, Process, Contact, Work, Services, or Planner.

Direct served asset probes also returned `200` for `/favicon.ico`
(`image/x-icon`), `/icon.svg`, `/opengraph-image` (`image/png`), and
`/robots.txt`; no asset source was changed in this round.

The fresh runtime's direct ESLint command passed. Standalone TypeScript before
the production build reported the known generated-artifact `LayoutProps`
failure in `src/app/layout.tsx`; the concurrent dev/build probe did not finish
generating `.next/types`, so this round makes no fresh build/typecheck claim.

The first exact `Describe your project` link on both Pricing and Process was
activated in the live browser; each navigated to `/start` with the expected
Project Planner title. No form submission or external side effect was triggered.
The same primary CTA path was exercised from Home, Services, and Work at phone
width; all three links resolved to `/start`.

## Post-snapshot source drift

While this round was active, Builder commit `95c365f` changed the primary CTA
gradient in `src/components/button.tsx` for contrast; docs-only commit
`95232d5` followed. The Council runtime remains the immutable `85a1d2b`
snapshot, so the CTA color change was not independently reviewed or promoted.
The next fresh Council snapshot should inspect its visual/contrast effect.

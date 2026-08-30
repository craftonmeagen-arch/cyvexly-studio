# Cyvexly Current State

**Global round:** 5
**Active chunk:** Chunk 2 — Core marketing pages — CLOSED round 3, but
closed does not mean frozen: round 5 revisited two of its open debt items
(see below). Chunk 3 — Project Planner — opened round 4, full UI/state/
validation built and verified at `/start`, real "sent from Cyvexly"
confirmation email still blocked on the domain + email-provider decision.
Chunk 4 — Utility/legal pages — opened round 2, in progress, unchanged
this round.
**Chunk-local round:** N/A this round (round 5 worked reachable debt on
the closed Chunk 2, not a chunk-opening round)
**Current mission:** Route the domain + transactional-email-provider
decision to the Owner (`CYVEXLY_APP_DEBT.md` item 4) so the Planner's
real confirmation-email route can be built and Chunk 3 formally closed —
unchanged, still the single highest-value blocked item. In parallel or
after: get a real pixel-level screenshot of `/process`'s new timeline
section, the Work grid, and the three case-study heroes once an attended
session or reviewer round is available — round 5's own verification is
thorough on structure, DOM, accessibility, and (for the new concept-preview
artwork) genuine `ImageResponse`-proxy pixel proof, but has no live-page
screenshot; confirm the favicon's 16px legibility problem in a real
browser tab (`CYVEXLY_CHUNK_DEBT.md` item 3, open since round 3); continue
Chunk 4's remaining items. Three Owner-input requests still block real
work: About-page founder identity, Privacy/Terms jurisdiction, and the
domain/email-provider decision (`CYVEXLY_APP_DEBT.md` items 1, 3, 4) — do
not invent any of them. A new framing question for the Owner: should the
Work/case-study visual gap be closed with abstract illustrative artwork
(round 5's approach) or does it need real commissioned design mockups for
one or more concept projects — see the round-5 report's recommended next
tasks.
**Accepted source position:** Git repository on branch `master`. Round 5
landed as one or more commits (the `/process` timeline/timing/promise
rebuild and the three concept-project SVG previews replacing flat
gradients, plus documentation updates including archiving round 4's full
report) after round 4's 13 commits — **treat `git log` as the source of
truth for the exact count and hashes**; this prose is a summary, not a
ledger, and will go stale the moment another commit lands. Working tree
is clean of Builder-owned changes at close; only the same pre-existing
Auditor/Council-owned files remain uncommitted (correctly left untouched
across every round — see `CYVEXLY_WATCH.md`).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-5 report before planning round
  6 — it includes a real design-system-violation self-catch (an invented
  color not in any project's palette, found and fixed via a grep-based
  cross-check before commit) worth knowing before hand-authoring any
  future SVG artwork against this project's fixed per-project palettes.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on Services/Pricing (known visual-density gaps vs. mockups), the
  favicon (16px legibility finding, still open), the OG image/
  `metadataBase`, the About page, legal pages, the Planner's
  email-delivery route, or the Work/case-study concept imagery (partially
  resolved round 5 — see item 2, which now also covers a new "Desktop &
  mobile experience" device-frame section built this round; an Owner
  framing question is now open on whether abstract artwork is an
  acceptable permanent answer for either).
- Read `CYVEXLY_WATCH.md` for round-5 findings: the Browser pane's
  `computer` screenshot limitation persisted and a related new symptom
  appeared mid-round (`clientWidth`/`innerWidth` reading `0`,
  `visibilityState` reading `"hidden"`) that blocked viewport-dependent
  measurement for the second half of the round; the `ImageResponse`-proxy
  pixel-verification technique (established round 3) was reused
  successfully for a second, different kind of asset (page-embedded
  decorative SVG artwork, not just a standalone image route).

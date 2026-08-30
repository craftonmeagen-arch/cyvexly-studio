# Cyvexly Current State

**Global round:** 6
**Active chunk:** Chunk 2 — Core marketing pages — CLOSED round 3, but
closed does not mean frozen. Chunk 3 — Project Planner — opened round 4,
full UI/state/validation built and verified at `/start`; round 6 fixed a
real Council-flagged progress-rail visibility bug (`CYC-R2-F001`); real
"sent from Cyvexly" confirmation email still blocked on the domain +
email-provider decision. Chunk 4 — Utility/legal pages — opened round 2,
in progress, unchanged this round.
**Chunk-local round:** N/A this round (round 6 fixed reviewer-flagged
cross-cutting bugs on Chunk 2/3 surfaces, not a chunk-opening round)
**Current mission:** Route the domain + transactional-email-provider
decision to the Owner (`CYVEXLY_APP_DEBT.md` item 4) so the Planner's
real confirmation-email route can be built and Chunk 3 formally closed —
unchanged, still the single highest-value blocked item. In parallel: real
Tab-key keyboard-traversal testing of the Planner (the Council's own
suggested next question, not reachable this round — see
`CYVEXLY_WATCH.md`'s round-6 entry); get real pixel-level screenshots of
the Planner rail, `/process`'s timeline section, the Work grid, the three
case-study heroes, and the reflowed Services/Pricing tables once an
attended session or reviewer round is available — round 6's own
verification is thorough on structure, DOM, accessibility, and measured
geometry, but has no live-page screenshot for any of it. Four Owner-input
requests still block real work: About-page founder identity, Privacy/Terms
jurisdiction, the domain/email-provider decision, and (new since round 5)
whether abstract concept artwork is an acceptable permanent answer for the
Work/case-study visual gap (`CYVEXLY_APP_DEBT.md` items 1, 3, 4, and the
round-5 framing question) — do not invent any of them.
**Accepted source position:** Git repository on branch `master`. Round 6
landed as two commits (`1eb1242` — Planner progress-rail fix, Services
table reflow, `data-scroll-behavior` fix; `f435f67` — the same table-
reflow fix applied to two more Pricing tables found via grep) plus this
round's documentation-update commit, after round 5's several "(cont.)"
commits — **treat `git log` as the source of truth for the exact count
and hashes**; this prose is a summary, not a ledger, and will go stale the
moment another commit lands. Working tree is clean of Builder-owned
changes at close; only the same pre-existing Auditor/Council-owned files
remain uncommitted (correctly left untouched across every round — see
`CYVEXLY_WATCH.md`).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round. If a standalone `tsc --noEmit` reports an error
  in a file you didn't touch right after a `.next` deletion, run `pnpm run
  build` first to regenerate `.next/types` before treating it as real —
  see `CYVEXLY_WATCH.md`'s round-5 entry.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-6 report before planning round
  7 — it includes a real technique for proving a fix's logic and intended
  end state when this session's frame-compositing limitation blocks
  observing the actual animated/rendered result directly (monkey-patch
  the browser API to log real calls, then separately force the non-
  animated end state to confirm the outcome).
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on the favicon (16px legibility finding, still open), the OG
  image/`metadataBase`, the About page, legal pages, the Planner's
  email-delivery route, or the Work/case-study concept imagery (an Owner
  framing question is open on whether abstract artwork is an acceptable
  permanent answer).
- Read `CYVEXLY_WATCH.md` for round-6 findings: `scrollIntoView({behavior:
  "smooth"})` doesn't actually animate in this session (same frame-
  compositing limitation as the screenshot/clientWidth issues), isolated
  and verified via a monkey-patch-and-force-`"auto"` technique worth
  reusing for any future frame-dependent fix; a grep for a reviewer
  finding's exact defect *shape* (not just the flagged page) found two
  more real instances of the same bug on a page the reviewer hadn't
  audited.

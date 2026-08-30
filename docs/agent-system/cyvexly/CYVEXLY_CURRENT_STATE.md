# Cyvexly Current State

**Global round:** 7
**Active chunk:** Chunk 3 — Project Planner — the nine-step UI/state/
validation remains built and verified at `/start`; round 7 added a real
DOM/accessibility-tree-level keyboard-traversal, focus-order, error-
announcement, and progress-semantics audit (an alternate method to the
still-unreachable live Tab-key path). Chunk 4 — Utility/legal pages —
**the favicon's 16px legibility defect is now fixed** (round 7); other
items unchanged.
**Chunk-local round:** N/A this round (round 7 fixed a real bounded
defect and ran a proof-method audit, not a chunk-opening round)
**Current mission:** The same four Owner-input questions still block the
highest-value remaining work — About founder identity, Privacy/Terms
jurisdiction, domain + email-provider, and the abstract-vs-real concept-
artwork framing question (`CYVEXLY_APP_DEBT.md` items 1, 3, 4, and the
round-5 framing question) — do not invent any of them. Beyond that: a
real attended-session or differently-capable-automation Tab-key
traversal of the Planner remains the one piece of the Council's
keyboard-review ask this round's DOM-level audit couldn't reach; a real
live-tab screenshot of the new favicon would still strengthen (not
replace) round 7's proxy-rasterizer pixel evidence. Read
`CYVEXLY_NEXT_BUILDER_HANDOFF.md` for the full list.
**Accepted source position:** Git repository on branch `master`. Round 7
landed as one source commit (`97f7b69` — favicon/OG-image mark redesign)
plus this round's documentation-update commit, after round 6's several
"(cont.)" commits — **treat `git log` as the source of truth for the
exact count and hashes**; this prose is a summary, not a ledger, and
will go stale the moment another commit lands. Working tree is clean of
Builder-owned changes at close; only the same pre-existing Auditor/
Council-owned files remain uncommitted (correctly left untouched across
every round — see `CYVEXLY_WATCH.md`).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
  **Note for scheduled/unattended sessions:** `preview_start({name})`
  refuses to launch a dev server directly ("nobody is present to
  approve the command") — start it manually via a background shell
  command first, then `preview_start({url: "http://localhost:5173"})`.
  Even then, real screenshots/clicks/key-presses are not reachable in
  this exact session type (re-confirmed round 7) — see
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md` and `CYVEXLY_WATCH.md` for what
  *does* still work (`javascript_tool`, `read_page`'s accessibility
  tree, `get_page_text`, and — newly found round 7 —
  `computer{action:"scroll_to"}` using a `read_page` ref).
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all
  pass clean as of this round. If a standalone `tsc --noEmit` reports an
  error in a file you didn't touch right after a `.next` deletion, run
  `pnpm run build` first to regenerate `.next/types` before treating it
  as real — see `CYVEXLY_WATCH.md`'s round-5 entry.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-7 report before planning round
  8 — it has the full favicon-redesign method (three candidates tested
  with real pixel evidence via the `ImageResponse` proxy technique) and
  the full DOM/accessibility-tree keyboard-audit method, both reusable
  for future work in this session type.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on the OG image/`metadataBase`, the About page, legal pages,
  the Planner's email-delivery route, or the Work/case-study concept
  imagery (an Owner framing question is open on whether abstract artwork
  is an acceptable permanent answer). The favicon item is now resolved.
- Read `CYVEXLY_WATCH.md` for round-7 findings: a real, reusable
  DOM/accessibility-tree audit method for keyboard accessibility when
  live key-press input isn't reachable; a `Record<string, ReactNode>`
  module-level-JSX-lookup pitfall in `ImageResponse` proxy routes; and
  `scroll_to`'s scroll-position capability (real and reusable, but
  confirmed not to unlock screenshots).

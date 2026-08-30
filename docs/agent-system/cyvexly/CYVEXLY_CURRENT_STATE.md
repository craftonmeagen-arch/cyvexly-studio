# Cyvexly Current State

**Global round:** 3
**Active chunk:** Chunk 2 — Core marketing pages — CLOSED round 3. Chunk 4
— Utility/legal pages — opened round 2, in progress. Chunk 3 — Project
Planner — not yet opened; its foundational email-delivery question was
formally answered this round (see below) but the UI itself was
deliberately not started.
**Chunk-local round:** Chunk 4 round 2
**Current mission:** Open Chunk 3 and build the Planner's full UI/state/
validation (vision §6.9/§9) as a dedicated round — round 3's §4.12
Reachability Check found this is a genuinely separable, authorized slice
even though real "sent from Cyvexly" email is still blocked on a domain +
email-provider decision (`CYVEXLY_APP_DEBT.md` item 4). In parallel or
after, continue Chunk 4: the favicon has a newly-found real 16px
legibility problem needing an attended-session confirmation and redesign
(`CYVEXLY_CHUNK_DEBT.md` item 4); `/privacy`/`/terms` remain blocked on
Owner-supplied jurisdiction facts. Two Owner-input requests still block
real pages: About-page founder identity, and Privacy/Terms jurisdiction
(`CYVEXLY_APP_DEBT.md` items 1 and 3) — do not invent either.
**Accepted source position:** Git repository on branch `master`. Round 3
landed as one or more commits (Pricing icon parity, robots/no-index
default, a real OG-image asset, Chunk 2 closure, and documentation
accuracy/archival follow-ups) after round 2's commits — **treat `git log`
as the source of truth for the exact count and hashes**; this prose is a
summary, not a ledger, and will go stale the moment another commit lands.
Working tree is clean of Builder-owned changes at close; only the same
pre-existing Auditor/Council-owned files remain uncommitted (correctly
left untouched across rounds 2 and 3 — see `CYVEXLY_WATCH.md`).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-3 report before planning round 4
  — it includes a full launch-readiness pass against vision §15's 14
  items, worth reading before claiming any readiness state.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on Services/Pricing (known visual-density gaps vs. mockups), the
  favicon (new 16px legibility finding), the OG image/`metadataBase`, the
  About page, or legal pages.
- Read `CYVEXLY_WATCH.md` for round-3 findings worth knowing before
  further work: a served image fetched via `curl` and opened with `Read`
  IS viewable in this unattended session (unlike a live browser-tab
  screenshot, which still is not) — useful for verifying any
  `ImageResponse`/generated-image route; `next dev` and `next build`
  resolve `metadataBase`-dependent absolute URLs differently, so always
  check real `pnpm run build` output for that class of claim, not just
  the dev server; and an App Router folder named `_something` is a
  private-folder convention silently excluded from routing.

# Cyvexly Next Builder Handoff

## Urgent items

None. Round 3 closed cleanly — no crash, no unsafe uncommitted state, no
unresolved urgent reviewer finding discovered this round.

## Orientation

- Chunk 2 (core marketing pages) is now formally CLOSED (round 3, per
  §7.9) — see `CYVEXLY_PROJECT_CHUNK_MAP.md`. Only `/about` remains
  unbuilt, honestly bounded on Owner-supplied founder identity
  (`CYVEXLY_APP_DEBT.md` item 1) — **do not invent a founder name,
  story, or photo.**
- Chunk 4 (utility/legal pages): `/not-found`, `/faq`, `/accessibility`,
  the favicon, `robots.txt`/no-index default, and a real social-sharing
  (OG) image asset are all done. `/privacy`/`/terms` remain blocked on
  Owner-supplied jurisdiction facts (`CYVEXLY_APP_DEBT.md` item 3).
- **Chunk 3 (Project Planner) is ready to open.** Round 3 ran the
  required §4.12 Outcome Reachability Check
  (`CYVEXLY_APP_DEBT.md` item 4): a real confirmation email "sent from
  Cyvexly" needs a transactional-email provider (credential) and the
  production domain (for sender verification) — both currently
  unauthorized/undecided. But the Planner's full UI/state/validation
  (vision §6.9/§9 — nine steps, progress indicator, per-step validation,
  conditional questions, review/summary) is a genuinely separable,
  authorized, reachable slice that needs no email backend to build or
  verify. **Recommended next round:** build that UI in full, wire
  submission to the same `mailto:` interim pattern Contact already uses
  (round 2), explicitly documented as not satisfying the "automatic
  confirmation email from Cyvexly" requirement — do not silently treat
  the `mailto:` bridge as the final answer. This is a substantial build;
  plan it as its own coherent round rather than a fragment of a broader
  one, to avoid a half-finished multi-step form.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-3 report in full before
  planning — it includes a full launch-readiness pass against all 14
  items in vision §15 (a first for this project), the OG-image
  dev-vs-build metadata finding, and the favicon 16px legibility finding.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching the favicon (new,
  real 16px legibility problem, needs an attended-session confirmation
  before redesigning), the OG image/`metadataBase`, or Services/Pricing
  (known density/framing gaps vs. mockups, logged not fixed).
- Read `CYVEXLY_WATCH.md` before assuming this session can't get any
  pixel-level visual proof — round 3 found that a `curl`-fetched served
  image opened with `Read` DOES render as a real viewable image here
  (useful for any `ImageResponse`/generated-image route), even though a
  live browser-tab screenshot still fails exactly as rounds 1-2 found.
  Also: `next dev` and `next build` resolve `metadataBase`-dependent
  absolute URLs differently — always check real `pnpm run build` output,
  not just the dev server, for that class of claim; and an App Router
  folder named `_something` is a private-folder convention silently
  excluded from routing.

## Three Owner-input questions now blocking real work

1. **About page founder identity** (carried from round 1): what name/
   pronoun should the site use, is there a real portrait or should a
   non-portrait studio image stand in, and what should the first-person
   story say about why Cyvexly exists?
2. **Privacy/Terms jurisdiction** (carried from round 2): what is
   Cyvexly's business location/registration, and which customer markets
   should the policies explicitly address?
3. **Production domain and an authorized transactional-email provider**
   (new this round, `CYVEXLY_APP_DEBT.md` item 4): needed before
   `metadataBase`/canonical URLs/`sitemap.xml`/real OG-image metadata can
   ship, and before the Project Planner can send a real confirmation
   email "from Cyvexly" rather than relying on the visitor's own mail
   client.

All three are Owner-supplied facts or authorizations, not reversible
Builder judgment calls.

## Favicon: needs an attended-session confirmation before any redesign

Round 3 found real evidence (via a temporary `ImageResponse` proxy route,
deleted after use) that the current C/Y signal-mark favicon may not be
legible at 16x16, the actual default browser-tab size — a stroke-width
increase did not fix it. This was tested through Next's `resvg`-based
rasterizer, not a real browser tab, so it needs independent confirmation
before redesigning. If confirmed, the likely fix is a simplified/bolder
small-size mark (or a separate small-size PNG variant), not just a
thicker line. See `CYVEXLY_CHUNK_DEBT.md` item 4 for full detail.

## A concurrent Auditor round published new evidence mid-round (correction)

Unlike round 2, a concurrent reviewer round DID publish new material this
time. Mid-round, four new Auditor evidence screenshots appeared
(`auditor-20260830T1738Z-pricing-desktop.png`,
`-case-study-desktop.png`, `-work-mobile.png`,
`-work-redesign-empty.png`) plus a delayed "emergency continuity"
publication of the Council's stale round-1-era report (same content as
before, nothing new). `CYVEXLY_AUDITOR_ACTIVE_ROUNDS.md`/
`AUDITOR_CURRENT.md` still only show the completed round-1-era Auditor
round, so a new Auditor round may still be in progress and could publish
its actual report/findings after this Builder round closes — the next
Builder should re-check `CYVEXLY_REVIEW_INDEX.md`'s current reports
fresh, not assume this round's read covered everything. All four new
screenshots were read (not touched) and showed no new defect — they
independently confirmed this round's Pricing icons, round 2's case-study
visual-direction section, and Work page mobile/empty-filter states all
render correctly. Full detail in `CYVEXLY_ACTIVE_CHUNK.md`'s round-3
report addendum. All Auditor/Council-owned files were left untouched per
role non-interference, same as every prior round.

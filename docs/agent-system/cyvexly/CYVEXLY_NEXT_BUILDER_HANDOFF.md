# Cyvexly Next Builder Handoff

## Urgent items

None. Round 2 closed cleanly — no crash, no unsafe uncommitted state, no
unresolved urgent reviewer finding discovered this round.

## Orientation

- Chunk 2 (core marketing pages) is now effectively complete: `/`, `/process`,
  `/services`, `/pricing`, `/contact`, `/work` (+ 3 case studies) all exist,
  are verified, and pass build/typecheck/lint. Only `/about` remains, and it
  is honestly bounded on Owner-supplied founder identity (see
  `CYVEXLY_APP_DEBT.md` item 1) — **do not invent a founder name, story, or
  photo to close this.** Independently verify this state, then consider
  formally closing Chunk 2 per §7.9.
- Chunk 4 (utility/legal pages) was opened early this round: `/not-found`,
  `/faq`, `/accessibility`, and a hand-authored SVG favicon (`icon.svg`,
  replacing the Next.js default) are done. `/privacy` and `/terms` are
  deliberately not built — they need Owner-supplied jurisdiction facts
  (business location, customer markets) before honest legal text can be
  drafted (see `CYVEXLY_APP_DEBT.md` item 3, new this round). A real
  social-sharing (Open Graph) image and a launch-readiness pass (vision §15)
  still remain.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s Round 2 report (plus its addendum) in
  full before planning — it documents a real Next.js 16 runtime bug found
  and fixed (dynamic `params` is a Promise), a real visual-comparison gap
  found and fixed (case-study "visual system excerpt"), a real
  heading-hierarchy skip found and fixed (`/work` went H1→H3 with no H2),
  and several visual gaps found but deliberately left open and logged
  rather than fixed.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching Services/Pricing (known
  density/icon-parity gaps vs. mockups, logged not fixed) or the case-study
  template (photographic imagery still placeholder gradients).
- Read `CYVEXLY_WATCH.md` before assuming port `5173` is free or that
  `computer` tool actions work in this unattended session — this round
  found `computer` click/type actions are non-functional here (not just
  screenshots, as round 1 first noted; use `javascript_tool`-dispatched real
  DOM events instead), the Next.js 16 async-params pattern, and a foreign,
  unrelated dev server ("EduAILenz V2") occupying the reserved Builder port
  5173 mid-round after this round's own server died — left untouched
  (ownership not proven to be orphaned Builder infrastructure) and worked
  around via scratch ports instead. Re-check port 5173 before assuming it's
  available, and apply the same non-interference judgment if the same
  foreign process (or a different one) is still there.

## Two Owner-input questions now blocking real pages (not just documentation)

1. **About page founder identity** (carried from round 1): what name/
   pronoun should the site use, is there a real portrait or should a
   non-portrait studio image stand in, and what should the first-person
   story say about why Cyvexly exists?
2. **Privacy/Terms jurisdiction** (new this round): what is Cyvexly's
   business location/registration, and which customer markets should the
   policies explicitly address (for applicable consumer-protection/data-
   privacy language)?

Both are Owner-supplied facts, not reversible Builder judgment calls — see
`CYVEXLY_APP_DEBT.md` for the full reasoning on each.

## Before opening Chunk 3 (Project Planner)

Run the full §4.12 Outcome Reachability Check on the email-delivery/backend
mechanism before implementing. This round's Contact page uses a `mailto:`
bridge (functional, verified, honestly documented) as an interim,
zero-authorization submission mechanism for a short form — but vision §6.9
describes the Planner needing a confirmation email with a full answer
summary sent *from Cyvexly*, which a `mailto:` bridge cannot reliably do
(it would rely on the visitor's own mail client actually sending). Don't
assume the same pattern scales; this is a real foundational decision to
route or resolve, not just reuse.

## No Council/Auditor finding newly published this round

The `docs/agent-system/cyvexly/reports/AUDITOR_CURRENT.md` and Council
evidence files present at round start were unchanged (same content,
timestamps, and untracked-file set) throughout this round — no new Auditor
or Council round ran concurrently this time, unlike round 1. The existing
uncommitted Auditor report/evidence files were left untouched, per role
non-interference; they still describe pre-round-1 source state (its own
`CYV-IFA-001` "most destinations 404" finding is now substantially resolved,
per this round's work, but the report itself was not edited by this
Builder — an Auditor round should re-verify and republish rather than a
Builder editing a reviewer's report).

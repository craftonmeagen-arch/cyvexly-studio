# Round 180 — Chunk 5 candidate acceptance

## Second independent challenge consumed

Found unconsumed Auditor publication `IFA-2026-09-11-R140` in the external
review root (`C:/app projects/website-independent-review/reports/published/auditor/IFA-2026-09-11-R140.md`),
not yet reflected in `CYVEXLY_REVIEW_INDEX.md`.

Verified before recording:
- Evaluated head `b14a92b1a9dbea8adb585f5aabd8bd4ac609c0c3` matches
  `git rev-parse b14a92b` exactly (full hash).
- `git merge-base --is-ancestor b14a92b HEAD` confirms `b14a92b` is an
  ancestor of current `main` (HEAD `5699211` at round start).
- All 15 commits between `b14a92b` and HEAD are documentation-only
  (`git diff --stat 67fb358 HEAD -- . ':!docs' ':!*.md'` returns empty),
  so current `main`'s product source is unchanged from the reviewed
  candidate plus the already-verified-clean orphaned-route removal
  (`67fb358`, Round 178).
- All 39 evidence screenshots the report lists (plus one additional
  `consultation-keyboard-desktop.png` present but not individually named in
  the report's prose — file count still matches "39 Evidence Screenshots")
  are present on disk under
  `C:/app projects/website-independent-review/evidence/auditor/auditor-20260911T052000Z-138`.

R140 is the second exact-source review of candidate `b14a92b` (R139 supplied
the first). Together they satisfy the two-clean-independent-challenge gate.

## Fresh full verification (this round, current `main` HEAD)

Run in this order per `CYVEXLY_ROLE_RULES_MAPPING.md`: lint, build, tsc.

- `pnpm run lint`: 0 errors, 1 unchanged historical evidence-file warning.
- `pnpm run build`: 55 routes, compiles clean (Turbopack, Next 16.3.3).
- `pnpm exec tsc --noEmit`: exit 0.
- `test:business-days`: 7 calendar cases passed.
- `test:consultation-api`: email-only/phone-only/timezone/validation/
  honeypot/rate-limit paths passed; 0 real messages sent.
- `test:search-readiness`: dormant baseline (`indexable: false`,
  `verification: absent`, `robots: disallow`, correct canonical) passed.
- `buyer-journey-smoke.mjs`: 35 routes, 17 inquiry contexts, passed.
- `submission-receipt-smoke.mjs`: 6 intercepted inquiries, 0 real emails,
  passed.
- `nexora-demo-smoke.mjs`: desktop/phone interactive demo, 0 overflow,
  passed.
- `test:analytics-consent`: passed against a separate, uncommitted local
  build with a synthetic `NEXT_PUBLIC_GA_MEASUREMENT_ID` (the consent panel
  only mounts when a measurement ID is configured — dormant production has
  none, by design). Zero Google requests before grant, tag loads only after
  grant, one `generate_lead/contact` event, 44px controls, 0 phone overflow.
  Workspace was rebuilt back to the safe no-ID/no-index state immediately
  after this check; no synthetic ID or secret was committed.
- `internal-hierarchy-smoke.mjs`: **found and fixed a test-only defect**,
  see below. Passed after the fix (all viewports, both rails, keyboard and
  touch, 0 runtime errors, 0 overflow).

## Found and fixed: fragile single-jump touch simulation in `internal-hierarchy-smoke.mjs`

**Symptom:** `internal-hierarchy-smoke.mjs` failed reproducibly (2/2 runs)
against both a synthetic-ID and a dormant production build in this
environment, at the phone Work-rail touch-swipe assertion
(`scrollLeft > 100`), and would have failed identically at the equivalent
Home-rail assertion. This is a different specific assertion than Round 178's
documented `next dev` timing flake (that was an `aria-live` text-settling
race); this one reproduced against a `next build && next start` production
server, so the existing dev-vs-prod explanation does not cover it.

**Root cause, confirmed by a stronger instrument:** `.work-project-rail` /
`.home-work-project-rail` use `scroll-snap-type: x mandatory` with
full-card-width snap points at the phone breakpoint
(`src/app/globals.css`). The script simulated a swipe with exactly one
`touchStart` → one `touchMove` (an instant jump to the end position) →
`touchEnd`, carrying no velocity information. A standalone CDP diagnostic
against the same running server showed: (a) directly assigning
`rail.scrollLeft = 150` snaps back to `0` immediately (confirms mandatory
snap is active and working correctly); (b) a single-jump touch dispatch
consistently left `scrollLeft` at `0`; (c) an 8-step touch dispatch with
~16ms spacing between points (approximating a real finger's velocity) moved
`scrollLeft` to `335` and advanced the status to "Project 2 of 4" on the
first attempt, reproduced across the fix. This points to this Chromium
build's scroll-snap fling heuristic treating a zero-velocity single-jump
touch as a rest position (correctly snapping back), not a Work-rail or
Home-rail product defect — real users' swipes carry velocity and the rail
already responds correctly to them.

**Fix:** added a shared `swipeHorizontal(client, y, startX, endX, steps=8)`
helper dispatching a multi-point touch gesture, and replaced both the
Work-rail and Home-rail single-jump touch blocks with it. No product source
changed. Commit: see `CYVEXLY_BUILD_SUMMARY.md` Round 180.

**Why this isn't the same finding as Round 178:** that finding was about
`next dev`/Turbopack incremental-hydration timing vs `next build`/`next
start`; the fix there was "use a production server." This finding
reproduces unchanged against a production server and is specific to how the
touch gesture itself was synthesized, independent of dev vs. prod. Both are
now recorded in `CYVEXLY_TOOLS_AND_CAPABILITIES.md`.

## Acceptance

Two clean independent exact-source challenges (R139, R140) plus this
round's fresh zero-regression full verification satisfy the Chunk 5 review
gate. Candidate `b14a92b` (via current `main` HEAD, product-identical) is
accepted. Pushed to `origin/main`; see `CYVEXLY_BUILD_SUMMARY.md` and
`CYVEXLY_CURRENT_STATE.md` for the release commit and post-push live check.

No real message, analytics hit, payment, provider submission, indexing
change, or account action occurred. Production remains dormant
(`noindex, nofollow`, no GA ID, no Search Console verification) exactly as
Owner direction `2026-09-10-07` requires until the Owner completes the
account-side gates in `CYVEXLY_APP_DEBT.md`.

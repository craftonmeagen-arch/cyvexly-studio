## Round 19 report — global round 19

### Preserved plans and selection

**Session:** `builder-20260831T213918Z-r19`; lock claimed
`2026-08-31T21:39:18.9107395Z`; start HEAD `409ef80`; no active PM prompt.
Plans: `builder/evidence/round-19-dynamic-404-metadata-plan.md` and
`builder/evidence/round-19-planner-restore-gate-visual-plan.md`.

Fresh Auditor evidence supplied two reproducible defects. `CYV-IFA-008` showed
that invalid service/work routes returned the correct 404 server title but
streamed `Service`/`Project` fallback metadata over it after hydration.
`CYV-IFA-009` showed the Planner exposing interactive Step 1 before restoring a
saved later-step draft, allowing immediate user input to be overwritten. These
concrete runtime defects took priority over another visual-system expansion.

### What changed

Product commit `e716541` calls `notFound()` from invalid dynamic
`generateMetadata` branches, preventing fallback metadata from superseding the
404 state. Product commit `744cdd8` adds a browser-storage readiness gate to
`PlannerForm`: a stable glass status panel is shown while a saved draft is
checked, and the interactive step appears only after restore/prefill resolution
finishes. Storage failures release the gate through `finally`.

### Runtime and deployment proof

- Baseline invalid routes were HTTP 404 with the correct server HTML title but
  hydrated to generic `Service`/`Project` titles. Final local and public pages
  retain `Page not found — Cyvexly Studio`, `noindex`, one main/H1, four
  recovery links, no overflow, and no browser warning/error.
- All five valid service details and three valid work details remain HTTP 200
  with expected titles. `/scratch-favicon-check` remains absent and publicly
  404, completing the prior provisional cleanup confirmation.
- Initial optimized `/start` HTML contains `Preparing your Planner`, polite
  busy-state semantics, one main/H1, and no form or Full name field.
- A draft created through visible Planner controls, saved at Step 3, and
  reloaded settled at Step 3; Back showed the preserved synthetic name/contact
  and restore message. A clean-origin run settled at Step 1, and the
  `business-websites` prefill preserved its starting-point message.
- Public `/start` initial HTML has the gate and no early form; opened settled
  output has the correct Planner title/H1, one main, and zero horizontal
  overflow. The invalid-route public ETags/content also changed as expected.
- ESLint, optimized 23-page build, and immediate post-build TypeScript pass.
  Only the documented Owner/domain-blocked `metadataBase` warning remains.

### Limits and accountability

The in-app Browser did not honor an exact phone viewport in this round, so no
new exact-390 Planner screenshot is claimed. Auditor's phone evidence proves
the baseline race; the fixed transient is constrained to the same glass shell
and was opened in the real browser. Physical Safari/Firefox, field Web Vitals,
the original second computer, and Owner visual acceptance remain unavailable.

Only the two named defects and Builder records changed. Concurrent Auditor/
Council records and evidence remained excluded. No scheduler or automation was
read, modified, paused, deleted, rescheduled, or otherwise touched.

### Completion state

**DONE WITH PUBLIC PROOF** for the hydrated dynamic-404 title and Planner draft
restore gate. **OWNER REVIEW PENDING** remains for rounds 16–18 visual direction
and original second-device confirmation.

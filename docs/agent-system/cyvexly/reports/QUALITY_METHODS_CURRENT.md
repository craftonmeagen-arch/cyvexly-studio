# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R5-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260830T224200Z`
- Round started: `2026-08-30T22:41:14.9030160Z`
- Source head at start: `d04dc9d271d15103aaa3b32897d3b64b74fd9a8c`
- Dirty-tree fingerprint at round start: `53BD896212C2291969C0236DCA5E15A1BF993B2287C48889FEADD00F9C2975DB`
- Current source head at close: `da9c6d99962ba3f8a318bf3eed9a9b3ef63c0942`; current dirty-tree
  fingerprint before publication: `0EFB1199436F02FC5F4105D4EEE15F52F92C78B642517B7829FB122A74DF561E`.
- Council nonce: `b2cae96a86204e0986d80f55445d0a5a`
- Runtime: isolated Council runtime at `http://127.0.0.1:5373`
- PM state: `NO ACTIVE PM PROMPT`; standing Council review
- Auditor state: no active Auditor guard was present during this round
- Status: Complete; publish through the collision-safe Council publisher and close within the normal work window

## Scope and method

This round independently reviewed accepted Round 7 follow-on work and Round 8's
cross-surface concept-visual unification. It used the immutable Council runtime
captured at start head `d04dc9d`; a further Builder commit (`da9c6d9`, Planner
validation focus) landed after snapshot creation and was source-inspected but
not served by this independent runtime. The review used in-app browser visible
captures opened for inspection, side-by-side comparison
with `mockups/01-home.png`, direct served asset fetches and opened raster frames,
route-wide DOM/overflow probes, source/status inspection, and isolated lint,
typecheck, and production-build checks. Home was captured at `1440x900`,
`768x1024`, and `390x844`; Work at desktop; Services at phone. This is a
different question from R4's stale-favicon discovery: the effective ICO and
cross-surface rendering were checked as served outcomes.

## Accepted work since CYC-R4

- `ce6d273` corrected the favicon mark's measured viewBox clipping and shipped
  a real multi-resolution `src/app/favicon.ico`; `1a77970`, `aee303f`, and
  `1904634` document that work and rotate Builder hot-path state.
- `d04dc9d` reuses `ConceptPreview` in Home Selected work and Services Recent
  work, bringing those surfaces into the same truthful visual system as Work.
- `da9c6d9` adds first-error focus and linked group-error semantics to the
  Planner. It landed after this Council snapshot; Builder evidence was read, but
  Council does not promote that claim to independent runtime verification here.
- The current `icon.svg` and Open Graph mark use the corrected scaled orbit/check
  path. Source status for `src/` is clean at close; no scratch route remains.

## Findings and dispositions

### CYC-R4-F001 — Effective browser favicon

**Disposition: verified resolved.** The live head exposes `/favicon.ico?...`
before `/icon.svg?...`, and the served ICO contains branded orbit/check frames
at `16x16`, `32x32`, `48x48`, and `256x256`. The opened 16px and 32px frames are
recognizable and no longer the Vercel triangle. The previous closure test is
satisfied by the actual served asset, not only source inspection.

### CYC-R4-F002 — Untracked scratch favicon route

**Disposition: verified resolved.** `src/app/scratch-favicon-ico/route.tsx` is
absent from current source status, the isolated runtime returns the normal 404
for that path, and the production build route table contains no scratch route.

### CYC-R2-F002 — Concept visual concreteness

**Disposition: implementation symptom verified resolved; Owner framing decision
retained.** Home and Services now reuse the distinct, truthful `ConceptPreview`
compositions already present on Work/case studies. Opened Home, Work, and
Services captures show no remaining flat-gradient cross-surface inconsistency,
and every card remains explicitly labeled `CONCEPT PROJECT`. The approved
mockup still uses higher-fidelity photographic/rendered scenes, so whether
abstract illustration is release-sufficient or commissioned concept design is
required remains an Owner decision; do not reopen the fixed implementation
symptom as a defect or fabricate client proof.

### CYC-R5-F001 — Post-snapshot Planner validation-focus change needs fresh verification

**Disposition: Observation / Priority Next verification.** Commit `da9c6d9`
landed after the Council snapshot and changes product source in
`planner-form.tsx` and `planner-fields.tsx`: it focuses the first invalid control
and links radio/checkbox group errors with stable names and IDs. The change is
plausible and Builder's separate native-Chromium evidence reports the expected
focus/error behavior, but this Council's isolated runtime predates it. A fresh
round must serve the current head and independently exercise empty-step
validation at desktop and phone before marking this verification debt closed.

### Coordinated debt retained

- `CYC-R2-F003` / Auditor `CYV-IFA-005`: `metadataBase` remains an Owner/domain
  decision; build output still warns and static social metadata falls back to
  localhost until the public domain is approved and wired.
- Auditor `CYV-IFA-006`: Planner server-side email/backend capability remains an
  Owner-gated launch decision.
- Planner physical keyboard-only traversal and visibly reduced-motion behavior
  remain unconfirmed. This round's DOM focusable-order probe at phone width
  found the expected header/progress/form ordering and the source contains both
  reduced-motion branches, but it is not a physical Tab-key claim. Playwright/
  DOM clicks did not toggle controls in this unattended session; prior R3 is the
  last successful live interaction evidence.
- About, Privacy, and Terms remain intentional 404-backed Owner/Chunk debt.

## Additional live quality checks

- Twelve public routes loaded at all three required widths: each had one `h1`,
  one `main`, no empty image alt values, no unnamed links, and no horizontal
  overflow (`scrollWidth == clientWidth` at each viewport). Browser diagnostics
  after the sweep were empty.
- The direct served Open Graph PNG is 1200x630, uses the corrected cyan mark,
  and was opened for visual inspection. The live favicon's four ICO sizes were
  extracted and opened.
- `pnpm run lint`, `pnpm exec tsc --noEmit`, and `pnpm run build` passed in the
  isolated `d04dc9d` runtime. Build generated 18 expected routes, with only the
  known `metadataBase` localhost fallback warning; the post-snapshot `da9c6d9`
  source was not rebuilt by this round.

## Primary next-Builder plan

1. Freshly verify `da9c6d9`'s Planner first-error focus and linked group-error
   semantics from a runtime built from the current head, at desktop and phone.
2. Resolve the Owner's public-domain and transactional-email decisions, then
   set `metadataBase` and implement the server-side Planner delivery path with
   explicit consent, success/error/retry states, and sandbox-recipient proof.
3. Keep the unified truthful concept visuals and disclosure; obtain the Owner's
   decision on whether higher-fidelity commissioned concept imagery is required
   before spending another implementation round on artwork.
4. If a genuinely attended or differently capable browser becomes available,
   complete the physical Planner Tab-key and reduced-motion observation; until
   then preserve the honest DOM-level boundary.
5. Obtain Owner facts for About, Privacy, and Terms before filling those routes.

## Next Council question

On the next round, independently verify the post-snapshot Planner validation-
focus commit first, then inspect production metadata and the Planner submission
boundary after the Owner-gated domain/email decisions. Revisit keyboard/reduced-
motion with a genuinely different browser capability. Do not repeat the now-
closed favicon or cross-surface gradient review without new source or a
contradictory artifact.

## Handoff

Round 5 verified the actual branded favicon and the Round 8 unified concept
visual system across Home, Services, and Work. The former R4 favicon and scratch
route findings are closed. Builder commit `da9c6d9` landed after snapshot and
requires fresh independent Planner validation-focus verification. Preserve
cited captures and retain the Owner-gated metadata/email/artwork,
keyboard/reduced-motion, and post-snapshot verification questions.

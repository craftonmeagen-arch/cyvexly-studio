# Round 23 error-state contrast visual plan

**Session:** `cyvexly-builder-20260901T153920Z-r23`
**Start source:** `3b7a57e` on `main`, equal to `origin/main`
**Reviewer trigger:** Auditor `IFA-2026-09-01-R17`, finding `CYV-IFA-011`
**Baseline runtime:** Builder-owned Next development runtime at `http://localhost:5173`

## Intended outcome and coherent slice

Make every shared Contact and Planner validation message reliably readable at
WCAG AA normal-text contrast without weakening the established warning-coral
semantics, glass atmosphere, form hierarchy, or existing validation behavior.
Council `CYC-R37-F001` through `F003` remain outside this slice because each
depends on an Owner-supplied domain/indexability, legal-jurisdiction, or email-
provider decision; no substitute metadata, policy, or delivery claim will be
invented.

## Measured baseline

The opened Contact desktop/phone and Planner phone validation states show the
same semantic token at the same `12px` size:

- current token: `#d9435f` / rendered `rgb(217, 67, 95)`;
- frosted input field: `#f8fbff` / rendered `rgb(248, 251, 255)`;
- measured contrast: `4.1139:1`, below the `4.5:1` normal-text floor;
- the summary alert uses the same text token over its own 10%-tinted warning
  fill, a still weaker pairing;
- Contact exposes four associated field errors at both 1440 and 390; Planner
  exposes three Step 1 errors and focuses `#fullName`; all three captured states
  are exactly width-contained and the shared header remains sticky/z50.

Baseline evidence:

- `round-23-baseline-contact-errors-1440.png`
- `round-23-baseline-contact-errors-390.png`
- `round-23-baseline-planner-errors-390.png`
- `round-23-baseline-error-contrast-runtime.json`

## Visual target and implementation plan

Use the existing semantic warning token as the single source of truth and
darken it to `#bd2d49`. Preserve all type sizes, spacing, form geometry,
validation copy, alert tint, field associations, focus behavior, and glass
surfaces. This retains a distinct refined coral signal while increasing the
calculated contrast to approximately `5.57:1` on `#f8fbff`, `5.78:1` on white,
and `4.76:1` over the token's nominal 10%-tinted alert fill. The change belongs
at the token, not as per-component overrides, because Contact and every Planner
field intentionally share one semantic error language.

The final visual should read as a clear warning hierarchy—not black body copy,
not saturated neon red, and not a thicker or larger error treatment. Decoration
must remain subordinate beneath the protected form glass.

## Proof plan and failure modes

Re-run the identical real validation paths and open the final 1440 Contact,
390 Contact, and 390 Planner captures beside these baselines. Record computed
foreground/background values and final composited-pixel contrast for the field
errors and summary alert. Require at least `4.5:1` for every sampled normal-text
pair, exact viewport containment, four Contact errors, three Planner Step 1
errors, retained `aria-invalid`/descriptions, Planner focus on `#fullName`, and
sticky/z50 navigation. Run lint, optimized build, post-build TypeScript, and a
focused optimized-runtime regression. A darker token that meets arithmetic but
looks muddy, loses the coral semantic, or causes a component-specific mismatch
is a visual failure and must be revised.

## Methodology check

Shared semantic color tokens are the normal source layer for a repeated form-
state defect. The measured gap is small but release-significant, so a single
token correction plus final composited-pixel/browser proof is proportionate.
No new dependency, component system, or route is warranted.

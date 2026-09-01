# Round 23 error-state contrast verification

**Session:** `cyvexly-builder-20260901T153920Z-r23`
**Start HEAD:** `3b7a57e` on `main`, equal to `origin/main`
**Accepted product commit:** `2227961` (`fix: strengthen form error contrast`)
**Reviewer trigger:** `IFA-2026-09-01-R17` / `CYV-IFA-011`, independently
duplicated by Council `CYC-R38-F001`
**Completion state:** DONE WITH PUBLIC ADOPTION PROOF

## Root cause and change

Contact and every Planner error intentionally shared `--color-warning-coral`,
but its value `#d9435f` did not meet the 4.5:1 normal-text threshold on the
actual protected form glass. The Contact alert compounded the failure because
the same foreground sat over a 10%-tinted warning fill. The source fix changes
that one semantic token to `#bd2d49`; no component override, font-size change,
copy change, geometry change, or alternate visual language was introduced.
This preserves the approved cyber/blue-glass concept and its hierarchy.

## Measured visual comparison

The same validation paths were rendered before and after the token change and
the screenshots were opened at their native size.

| State | Baseline composited contrast | Optimized final composited contrast | Result |
| --- | ---: | ---: | --- |
| Contact field errors, 1440 | 4.1065–4.1394:1 | 5.5560–5.6004:1 | PASS |
| Contact summary, 1440 | 3.5387–3.5784:1 | 4.6881–4.7410:1 | PASS |
| Contact field errors, 390 | 4.0314–4.1065:1 | 5.4543–5.5560:1 | PASS |
| Contact summary, 390 | 3.5484–3.6232:1 | 4.7009–4.8008:1 | PASS |
| Planner field errors, 390 | 4.0965–4.1394:1 | 5.5424–5.6004:1 | PASS |

Pixel samples come from empty background pixels inside each rendered error or
summary rectangle and use the opaque authored foreground with the WCAG 2
relative-luminance calculation. This tests the final composited glass pixels,
not only nominal CSS colors. The darker coral remains visibly a restrained
warning accent rather than becoming body text or neon red.

## Runtime and interaction proof

- Contact at 1440 and 390 retains four field errors, four `aria-invalid`
  controls with descriptions, exact viewport containment, and sticky/z50
  navigation.
- Planner Step 1 at 390 retains three errors, exact containment, and focus moves
  to `#fullName` after invalid Continue.
- Optimized-runtime values are `rgb(189, 45, 73)` at `12px`; the field surface
  remains `rgb(248, 251, 255)`.
- No valid Contact or Planner submission was made and no `mailto:` side effect
  was triggered.
- ESLint, optimized 23-page Next build (build ID
  `8DmmX69FXZuI6QGDpEuNH`), and immediate post-build
  `tsc --noEmit` pass. The build emits only the already-routed missing-
  `metadataBase` warning.

## Public adoption

After `2227961` reached `origin/main`, Render changed Contact HTML ETag from
`"r8qfthy90nu3l"` to `"dz1pxpcij5u3l"` and its CSS asset from
`/_next/static/chunks/3iuje_o_bser5.css` (old `#d9435f`) to
`/_next/static/chunks/2av52ff54cn1q.css` (new `#bd2d49`, old token absent).
Public Contact 1440/390 and Planner 390 then reproduced the final computed
token, error counts, focus behavior, containment, and sticky-header state; all
three public captures were opened.

## Council R37 disposition

- `CYC-R37-F001` remains Owner-blocked on the production domain and launch-
  indexability decision. No localhost substitute or guessed canonical was
  added.
- `CYC-R37-F002` remains Owner-blocked on jurisdiction-approved Privacy/Terms
  content. Their visible links remain known release blockers; About remains
  truthfully deferred from navigation.
- `CYC-R37-F003` remains blocked on a domain, provider, credentials, and
  sending-domain authorization. The explicit interim `mailto:` disclosure is
  unchanged.
- `CYC-R37-F004` stays a current preview-behavior pass.

Fresh reports published during closeout were also reconciled. Auditor R18
independently verifies Round 22's sticky-header fix, continuation fields, and
About-link deferral, but correctly leaves R17's contrast finding open because
it reviewed pre-R23 source. Council R38 independently reproduces the same
4.1139:1 warning-token defect as `CYC-R38-F001`; product commit `2227961` and
the local/public proof above satisfy its exact closure condition. R38's R37
carry-forwards remain Owner-blocked.

## Plan and diff accountability

The product diff matches both the preserved Round Plan and the Builder's
recollection exactly: one semantic token changed in `src/app/globals.css`.
The evidence/docs listed below were generated to establish the baseline,
optimized result, and public adoption. Reviewer-owned files that appeared
during the round were preserved byte-for-byte and excluded from Builder
staging. No plan deviation or unexplained product file exists.

## Evidence index for this claim

- `round-23-error-contrast-visual-plan.md`
- `round-23-baseline-composited-contrast.json`
- `round-23-optimized-composited-contrast.json`
- `round-23-baseline-error-contrast-runtime.json`
- `round-23-optimized-error-contrast-runtime.json`
- `round-23-public-error-contrast-runtime.json`
- baseline, optimized, and public Contact 1440/390 plus Planner 390 PNGs

## Not checked

Physical Safari/Firefox, keyboard hardware, the Owner's original second
computer, field Web Vitals, real email delivery, final legal/domain metadata,
and final Owner visual acceptance were not available. They are not claimed.

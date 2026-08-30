# Council evidence — Planner progress visibility

- Round: `council-20260830T194545Z`
- Source head: `dfc04859af2432980765e8c4469d72c513da85cd`
- Runtime: `http://127.0.0.1:5373`
- Flow: real in-app browser, `/start`, progressed with non-submitting synthetic
  values through all nine steps; empty sitemap and consent validation were also
  exercised without triggering an external submit.

## Observation

At the final `09 Review & submit` step, the live phone screenshot visibly showed
the horizontal progress rail clipped after the fifth circle, while the active
step 9 remained off-screen. Read-only geometry confirmed the same condition:

| viewport | rail client width | rail scroll width | active step | active fully visible |
| --- | ---: | ---: | ---: | --- |
| 390px phone | 277px | 548px | 9 | no |
| 768px tablet | 639px | 676px | 9 | no |
| 1440px desktop | 686px | 686px | 9 | yes |

The rail is horizontally scrollable (`overflow: auto`) and the scroll position
remained `0` after advancing to step 9, so a user must discover and manually
scroll the indicator to see the current step. The page's visible `Step 9 of 9`
text remains present, but the progress control itself does not communicate the
active position at the two narrower required viewpoints.

## Closure test

Advance a fresh Planner to steps 1 and 9 at 390px and 768px; the active step
control must be fully visible without requiring user discovery of a hidden
horizontal scroll (or the design must provide an equivalently clear compact
current-step status). Recheck keyboard focus visibility and all nine controls.

## Additional responsive observation — Services table

While smoking the connected Services entry point at `390px`, the “Common
combinations” table rendered at `560px` wide inside a `342px` parent with
`overflow-x: auto`. The live screenshot showed the right-column heading and
combination text clipped at the initial scroll position. The document itself
did not overflow, but the horizontal scroll affordance was not labeled or
otherwise obvious. Closure should either reflow the table for phone width or
provide an explicit, keyboard-accessible cue and verify that the complete right
column can be reached and understood.

## Additional methods observation — console warning

After route navigation in the same runtime, the in-app browser recorded one
Next.js warning: `scroll-behavior: smooth` is set on `<html>` without the
recommended `data-scroll-behavior="smooth"` attribute. No errors were recorded.
This is a small console-health/method issue and should be resolved or explicitly
accepted before the next clean-console claim.

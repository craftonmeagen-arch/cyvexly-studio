# CYC-R17 Planner validation and route-boundary review

## Scope and method

Round 17 had no new product source after R16, so the Council selected a fresh
utility question: whether the Project Planner's first-step validation/focus
behavior and the documented legal/lifecycle boundaries remain truthful in a
fresh production runtime. Home was literally viewed at desktop, tablet, phone,
and full-page sizes; the Planner validation and Step 2 transition were opened
and literally viewed at phone width.

## Findings

- Clicking an empty Planner Step 1 `Continue →` produced the local alert
  “Please enter your name.”, marked `fullName`, `workEmail`, and
  `contactMethod` `aria-invalid="true"`, and moved focus to `#fullName` (the
  first error). The phone capture shows field-level messages and a visible
  focus ring without page overflow.
- Entering the review-only name/contact values and advancing reached the
  “02 The business” step without external submission; the Step 2 phone capture
  preserves the nine-step progress treatment, labels, fields, Back/Continue
  controls, and “What happens next” panel.
- The fresh browser displayed the expected local “We restored a saved draft
  from this device” notice from the Council's prior save-state probe. This is a
  local role-owned browser state, not a product/network submission; fields can
  be cleared individually as the UI says.
- Direct HTTP route checks returned `200` for `/`, `/services`, `/work`,
  `/pricing`, `/process`, `/start`, `/contact`, `/faq`, and `/accessibility`;
  the documented `/about`, `/privacy`, `/terms`, `/cookies`, `/thank-you`, and
  `/404` boundaries returned `404`. Browser landmark checks preserved one
  `main`, one `h1`, and zero overflow on the reviewed boundary paths.

## Limits

The email field's unattended browser fill helper did not reflect a typed value
in the DOM, so no Planner completion or submit path was attempted. Physical
keyboard traversal, reduced-motion emulation, Safari/Firefox, field Web
Vitals, and second-device scale remain open. Council did not edit product source
or tests.

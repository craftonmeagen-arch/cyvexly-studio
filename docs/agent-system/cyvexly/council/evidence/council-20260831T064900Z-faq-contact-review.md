# CYC-R13 FAQ and Contact review

## Scope and method

Council served a fresh production build in the isolated Council runtime at
`http://localhost:5373` and opened the Home, FAQ, Contact, Work, Vellora Care,
Planner, and legal route surfaces at `1440×900` and `390×844`. Captures were
literally viewed. The FAQ Project timing anchor was activated and “How long
does a typical project take?” was expanded; the live answer exposed the
published `2–3 weeks` Signal timing. Contact was submitted empty only to
exercise validation; the page returned its alert and four field-level
`aria-invalid` states without making an external request. The Work Commerce
filter selected `Vellora Care` and its case-study handoff resolved cleanly.

## Results

- FAQ category anchors and disclosure controls are readable and responsive;
  expanded state is represented by `aria-expanded` and the answer remains
  visible at phone width.
- Contact preserves the branded grid/hero hierarchy at desktop and phone;
  labelled fields, mailto fallback, Project Planner links, and inline error
  semantics are present. Delivery remains the documented Owner-gated interim
  mailto boundary.
- The 15-route production probe retains one `main`, one `h1`, and zero
  horizontal overflow at both viewports. `/about`, `/privacy`, `/terms`,
  `/cookies`, and `/thank-you` remain intentional not-found/legal or lifecycle
  surfaces, not regressions.
- Home media is a muted, looping, ready-to-play local MP4 with an explicit
  named pause/play control; HTTP HEAD and a 1,024-byte range request returned
  the expected `200`/`206` responses.

## Limits

This unattended in-app browser does not close physical-keyboard, Safari/
Firefox, field Web Vitals, full-loop end-to-start, or original second-device
scale questions. The opened production Home remains less luminous and less
art-directed than the approved `mockups/01-home.png`; final parity is still an
Owner decision.

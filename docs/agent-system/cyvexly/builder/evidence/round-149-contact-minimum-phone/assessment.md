# Round 149 — minimum-phone inquiry prominence

- **Source:** local product commit `567097c`, deployed as patch-equivalent
  `c231fbc`, based on accepted Round 148 closeout `1e10670` / deployed
  product-equivalent `0bdbb6e`.
- **Observed public baseline:** at 320×568, the short form began at `601px`,
  the required cue at `626px`, and the Name label at `666px`. The entire first
  viewport was introductory copy. The strengthened hierarchy regression fails
  the deployed Round 148 source at that exact geometry.
- **Target:** keep the accepted Contact message and desktop Planner path while
  placing the required cue and complete first field label inside the 320×568
  viewport without horizontal overflow.
- **Result:** local source places the form at `481px`, required cue at `506px`,
  and full Name label at `546–563px`; document scroll/client width is
  `320/320px`. At 390×844 the form moves from the accepted `575px` baseline to
  `457px`. Desktop remains `468.5px` and retains the contextual detailed-brief
  action.
- **Implementation:** the mobile intro uses shorter reassurance, hides the
  duplicated detailed-Planner pitch below `sm`, and reduces only mobile stage,
  panel, and form-entry spacing. Desktop spacing and optional Planner context
  remain unchanged.
- **Proof:** 52-route optimized build, post-build `tsc --noEmit`, lint (one
  historical evidence-script warning), 33-route/15-context buyer suite, and
  responsive hierarchy suite pass. The in-app browser and opened retained
  captures confirm the 320×568 and 1280×720 compositions. No inquiry was
  submitted.
- **Retained evidence:** `contact-minimum-phone.png` and `contact-desktop.png`.
  Delete after current-source independent review or when superseded by stronger
  accepted proof.

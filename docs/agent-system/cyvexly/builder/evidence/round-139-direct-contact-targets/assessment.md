# Round 139 — direct contact target assessment

- Baseline: deployed `c783dbd`; local equivalent `5d84ba1`.
- Candidate: local product/test commit `1dc61ae`.
- Accepted deployment: `3118a3f`; stable patch ID matches local.
- Live 390×844 baseline: Contact email and phone targets measured `[28, 28]`
  pixels; the new regression failed on that deployment.
- Local and adopted public result: both targets measure `[44, 44]` pixels at
  259px wide, with document scroll width 375px in a 390px viewport.
- Proof: 52-route production build; post-build TypeScript; lint with one
  unchanged historical evidence-script warning; local/public buyer journey and
  responsive hierarchy suites; local Nexora smoke; visible IAB phone review.
- Safety: no inquiry was submitted and no email, phone, account, scheduler,
  Team 2, or indexing action was triggered.
- Cleanup: the visible Builder tab was closed and its viewport reset; the
  verified port-5173 process tree stopped; `.next`, the deployment worktree,
  and run captures/logs were removed (356,079,254 measured bytes). Ports
  5173/9350–9354 and all recorded Round 139 temporary roots are clear.
- Review gate: Auditor R106 passed exact Round 138 source before this change;
  two independent reviews of accepted `3118a3f` remain.

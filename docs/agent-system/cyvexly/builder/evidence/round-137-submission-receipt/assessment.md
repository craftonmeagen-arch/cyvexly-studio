# Round 137 — truthful submission receipts

- **Observed gap:** both API routes deliberately treated the visitor confirmation
  email as best-effort, but Contact and Planner always claimed that confirmation
  had been emailed after the internal Cyvexly notification succeeded. A visitor
  could therefore receive a false receipt and reasonably resubmit.
- **Source correction:** each API now returns `confirmationSent`; each form shows
  either the complete-delivery receipt or an honest partial-delivery receipt that
  confirms Cyvexly received the inquiry, says the copy could not be emailed, and
  explicitly says not to resubmit. Planner pre-submit and Privacy wording now
  describe the confirmation as an attempted second delivery.
- **Focus correction:** the first exact 390px run showed Contact's receipt action
  11px below the viewport. The shared `SubmissionReceipt` now focuses and scrolls
  both success receipts below the sticky header, respecting reduced motion.
- **Regression:** the receipt smoke fails on prior public `1e127ae` because the old
  client has no delivery-aware receipt. The final local run intercepts four API
  calls (Contact/Planner × confirmation sent/unavailable), sends zero real
  messages, verifies exact copy/state/focus geometry, and reports zero horizontal
  overflow. Local buyer smoke passes 33 routes and all 15 inquiry contexts.
- **Visual inspection:** opened the retained desktop complete-delivery Contact
  capture and both 390px confirmation-unavailable captures. The receipts are fully
  visible, clearly focused, readable, and preserve the approved glass system.
  A real local IAB submission through the safe no-send preview independently
  confirmed Contact's partial receipt and responsive 390px state.
- **Retained proof:** `contact-confirmation-sent-desktop.png`,
  `contact-confirmation-unavailable-phone.png`, and
  `planner-confirmation-unavailable-phone.png`. Delete after an independent review
  no longer needs Round 137 visual evidence.

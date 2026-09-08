# Cyvexly Active Chunk — Round 107 Report

**Round 107 / Chunk 7 round 8** found and fixed a keyboard-continuity
defect in the free-sample print action. The visible Print button had moved
focus into the 1×1 `aria-hidden` print iframe and never restored it. A new
real-Chromium regression failed on the deployed baseline with
`IFRAME#sample-print-frame`; accepted/deployed source `9465ae9` now invokes
the frame's print method without focusing hidden content, so the trigger
retains focus. The complete local/public suites, TypeScript, lint (one known
evidence warning), and 53-route build passed. Two independent reviews remained.

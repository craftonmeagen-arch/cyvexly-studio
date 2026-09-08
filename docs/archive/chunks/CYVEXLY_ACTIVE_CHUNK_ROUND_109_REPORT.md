# Round 109 / Chunk 7 round 10

Found and fixed Back to top keyboard-focus loss. On the deployed baseline,
real Space-key activation scrolled to the top, hid the trigger, and left focus
on `BODY`. Accepted/deployed source `7b9813c` makes the hero heading
programmatically focusable and focuses it before the reduced-motion-aware
scroll. The complete local/public suites, TypeScript, lint (one known evidence
warning), and the 53-route build pass. Two independent reviews remain.

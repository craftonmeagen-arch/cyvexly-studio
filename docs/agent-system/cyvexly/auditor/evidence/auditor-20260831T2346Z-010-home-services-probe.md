# Independent Forensic Auditor evidence — IFA-2026-08-31-R10

## Identity and isolation

- Heartbeat minute zero: `2026-08-31T23:46:26.996Z`.
- Accepted source: HEAD `05a2403184c53f3d80f522e7ae958052dda324c5` (`Record completed Auditor and Council reviews`), 40 `src/` files. The `src/` tree matched the R9 accepted successor (`98dad5e43a8f2c6e4fb878574490c20e7078f6c7a42d08394315c78efd1fc9e3`); no newer accepted product diff was reachable.
- The Builder lock was live at start (`builder-20260831T234220Z-owner-video-cleanup`, mission `remove Home video chrome and slow playback`), so the Auditor did not inspect or control mutable Builder resources. The standard Auditor guard again failed on managed `.codex` write permission.
- Exact disposable runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2346Z-010`, port `5273`.

## Scope and method

With no new accepted product source since R9, this was a different standing-role question: visibly stress the Home showcase media and the Services combination/FAQ surface rather than repeat dynamic-404 or Planner restore checks. The real in-app Browser was used at requested 320×900, 390×844, 768×1024, 1024×900, and 1440×900 states. The pass exercised video autoplay, pause hold, resume, rapid toggle sequences, accessible control discovery, responsive containment, screenshot review, Services pathway card semantics, a visible detail-route transition/back recovery, and FAQ open/close behavior. No external submission or storage inspection was used.

## Results

- Home media loaded with `readyState=4`, 30-second duration, muted looping playback, `controls=false`, inline playback, and exactly one custom button controlling the video. A baseline 1.8-second observation advanced about 2.05 seconds; pause held `currentTime` unchanged for 1.2 seconds; resume advanced about 1.28 seconds. Rapid pause/play/pause settled paused with the correct `Play showcase video` label and `aria-pressed=false`.
- Requested widths were contained: layout widths were 305px (320), 375px (390), 753px (768), 1009px (1024), and 1425px (1440), each equal to its document `scrollWidth`. Video/figure geometry preserved the 16:9 media and the custom control remained inside the shell. Opened 320, 390, 768, and 1440 captures showed readable overlay copy and no clipping.
- Services rendered five combination cards, each with three named service nodes and an outcome. The 390px pathway capture showed the vertical node-plus-node grammar contained and readable. The visible `Explore business websites` link navigated to the authored detail page (`Business websites — Cyvexly Studio`) and browser Back returned to `/services`; the mobile menu opened, exposed six expected links, and its scoped Services link returned to `/services` while closing the menu. The Services FAQ opened each of four answers and closed cleanly with zero expanded answers and no overflow.
- As a third fresh surface, Process was opened at 390px and 1024px. Five stages each exposed `From you`, `From Cyvexly`, and `Approval point` terms in the accessibility tree. The mobile timeline hides its decorative connector and the 1024px layout shows it, while both states remained exactly contained. The full mobile process capture showed the stage sequence, timing panel, collaboration promise, and CTA without clipping; the CTA reached `/start` and browser Back recovered `/process`.
- Browser warn/error diagnostics were empty; direct ESLint and TypeScript passed in the exact runtime. No new product defect was established.

## Limits

The Builder's live video-cleanup work was not accepted source and was excluded. Reduced-motion and save-data media branches were not emulated in this Browser; physical keyboard and cross-browser behavior remain unconfirmed. Playwright keyboard presses were attempted on the custom control but were not consistent enough in this unattended Browser to support a keyboard claim; no product finding was assigned from that harness limitation. Public deployment, optimized build, and Owner visual acceptance were not claimed.

## Cleanup

The viewport was reset, the review tab was closed, the exact Auditor server chain was stopped, port `5273` was verified clear, and only the exact temporary runtime was removed. The Builder lock cleared naturally and was not touched. Only durable evidence is retained.

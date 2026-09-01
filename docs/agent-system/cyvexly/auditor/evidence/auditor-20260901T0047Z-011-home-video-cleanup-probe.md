# Independent Forensic Auditor evidence — IFA-2026-09-01-R11

## Identity and isolation

- Heartbeat minute zero: `2026-09-01T00:46:58.785Z`.
- Accepted source: HEAD `8e7ad528fe186c0b7a3b5e43ae579a8ce135d9d1` (`Record Round 20 Home showcase cleanup`), 40 `src/` files. The source fingerprint is `db2aadb38ba593ef91da40a60881f8ca6804984feb192b19829a5c1b5c457ead`.
- The actual product diff since R10 is limited to `src/components/hero-showcase-video.tsx` (27 insertions, 45 deletions): the Owner-directed playback chrome removal, `0.75×` playback rate, and named surface interaction.
- The standard Auditor guard again failed because managed permissions deny `.codex/role-state/auditor.active.json`. I used the exact disposable archive `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0047Z-011` on port `5273`, with no Builder lock active at entrance. Product source, tests, Builder/Council resources, `.engine-lock`, and scheduler automation were not edited.

## Scope and method

This round directly audited the accepted Home showcase cleanup rather than repeating the prior Home/Services/Process sweep. The real in-app Browser exercised the updated media at exact 320×900, 390×844, 768×1024, 1024×900, and 1440×900 viewports; screenshots were opened and visually inspected at 390, 768, and 1440. The media surface was clicked and keyboard-activated with Enter and Space; pause hold, resume, rapid toggles, accessible names/states, media properties, responsive containment, mobile menu recovery, and browser diagnostics were checked. Direct source ESLint and TypeScript were run in the exact runtime. Optimized-build attempts were made and their environment limits are recorded below.

## Results

- The updated surface has no nested button, progress element, muted/time pill, or visible playback bar. It is one `role="button"` target with `tabIndex=0`, `aria-controls="cyvexly-services-showcase"`, dynamic Play/Pause label, and `aria-pressed`; the video remains `aria-hidden="true"` with the authored poster and caption.
- Stable mobile media state at 390×844 reported `readyState=4`, 30-second duration, muted inline looping playback, `defaultPlaybackRate=0.75`, `playbackRate=0.75`, and `controls=false`. A stable user-pause hold kept `currentTime` unchanged for 1.6 seconds; resume advanced about 2.63 seconds over 3.2 seconds. Three rapid clicks settled paused with `Play showcase video` and `aria-pressed=false`. Enter toggled to paused and Space toggled back to playing while the surface retained focus.
- Responsive containment stayed exact: `scrollWidth === clientWidth` at every requested width (305/375/753/1009/1425 layout pixels respectively). The figure/surface remained contained at 320, 390, 768, 1024, and 1440; opened captures show the clean cinematic media composition without clipping or residual chrome.
- Home mobile navigation still opened and closed through the visible menu; six expected links were present and the menu state remained exactly contained. Browser warning/error diagnostics were empty.
- No new product defect was established. A bounded observation is that visual users discover pause/resume through the cursor/keyboard focus or assistive label rather than a visible control; this is an intentional Owner tradeoff and not assigned a finding.

## Build and capability boundaries

- Source ESLint (`eslint src --format json`) passed with zero errors; the only suppressed message is the pre-existing Planner effect directive. `tsc --noEmit --pretty false` passed.
- `next build` could not run in the isolated junction runtime because Turbopack rejects the out-of-root `node_modules` link. `next build --webpack` reached compilation but failed on sandbox-denied Google Fonts HTTPS fetches (`Inter`, `JetBrains Mono`, `Space Grotesk`). The Builder's accepted optimized-build/public proof remains bounded evidence; this round makes no new optimized-build or public-deployment claim.
- Reduced-motion and `navigator.connection.saveData` branches are present in source but were not emulated in the in-app Browser (`prefers-reduced-motion=false`, `saveData=null` in the observed session). Physical keyboard hardware, Safari/Firefox, field vitals, and Owner second-device confirmation remain unconfirmed.

## Cleanup

The Auditor viewport was reset, all three Auditor-created Browser tabs were closed, the exact server/build process chain was stopped, port `5273` was verified clear, and only the exact temporary runtime was removed. Only this cited evidence and opened captures are retained.

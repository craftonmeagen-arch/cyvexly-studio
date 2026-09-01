# Cyvexly Round 20 report — Home showcase playback-chrome cleanup

## Preserved direction and visual plan

**Session:** `builder-20260831T234220Z-owner-video-cleanup`; lock claimed
`2026-08-31T23:42:21.6657567Z`; start HEAD `05a2403`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-20-home-video-cleanup-visual-plan.md`.

The opened 1440 baseline measured the existing 726.56×420.06px reel at `1.0×`
and visibly confirmed the three Owner-named distractions: top-right muted/time
pill, advancing timeline, and circular Pause control. The plan retained the
successful glass composition and changed only playback presentation/tempo.

## What changed

Product commit `d6cd17c` removes all three visible playback-chrome elements and
their progress state. The retained studio identifier and lower capability copy
now sit in a clean cinematic field. Authored playback is `0.75×`, applied on
mount, metadata readiness, and explicit resume. The complete media surface is
the named click/keyboard toggle with a focus-visible outline, preserving a
pause mechanism without restoring visible chrome. Muted inline looping,
poster, visibility, reduced-motion, and data-saver holds remain intact.

## Rendered and runtime proof

- Opened and preserved the exact 1440 baseline and final 1440/768/390 renders.
  Desktop figure geometry remains 726.56×420.06px; tablet and phone stack at
  705×407.94px and 343×200.81px. All report exact width containment.
- Final DOM/runtime has zero native player buttons, zero `Muted loop` text, and
  zero progress spans. The named surface reports Pause/Play state correctly.
- Native media reports `muted=true`, `loop=true`, and `playbackRate=0.75`; it
  advanced 1.579 seconds over two real seconds. Click, Enter, and Space each
  toggled pause/resume and preserved the slower rate.
- ESLint, optimized 23-page build, immediate post-build TypeScript, Home 200,
  a 22/22 production route/asset sweep, MP4 `video/mp4` plus
  `206 bytes 0-1023/3978486`, and built-output absence of the removed text/
  progress state pass. The known Owner/domain-blocked `metadataBase` warning
  is unchanged.

## Limits and accountability

The in-app Browser blocked a repeat navigation after the production server
restart, so the cited responsive screenshots are the real hot-reloaded app
renders and the optimized output is covered by build, HTTP, and static-output
proof rather than a second claimed screenshot set. Physical Safari/Firefox,
the original second computer, field Web Vitals, and final Owner visual
acceptance remain unavailable.

Only the Owner-directed Home component and Builder/canonical records changed.
Concurrent Auditor/Council records and evidence remained excluded. No
scheduler or automation was read, modified, paused, deleted, rescheduled, or
otherwise touched.

## Completion state

Product commit `d6cd17c` is pushed to `origin/main`; public ETag changed from
`"17zuriw8lcv2fqm"` to `"a75ifwpw1u2f7v"`, with no removed text and passing
Home/media delivery. **OWNER REVIEW PENDING** for the cleaned reel and the
earlier unresolved visual/device acceptance items.

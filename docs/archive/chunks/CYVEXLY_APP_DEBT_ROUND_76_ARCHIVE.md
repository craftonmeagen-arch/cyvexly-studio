# Archived — CYVEXLY_APP_DEBT.md "Resolved round 76" (moved round 79)

Moved out of `CYVEXLY_APP_DEBT.md` at round 79 to restore hot-file headroom.
No history lost — this is the exact text that was live there, and the same
detail is also preserved in `CYVEXLY_ACTIVE_CHUNK.md`'s "Round 76 report" and
`CYVEXLY_BUILD_SUMMARY.md`'s round-76 entry.

## Resolved round 76 (interactive, Owner direction 2026-09-06-17)

- **Owner-requested feature, not an audit finding.** Added a Home "So
  how does it work?" section under the "We're not a DIY builder" panel:
  a supplied process video (`cyvexley video.mp4`, a Project Planner
  intake-flow screen recording) embedded as a silent, looping,
  chrome-less ambient clip with a subtle "expand" affordance that opens
  a larger, controllable lightbox on click/Enter. Full Owner transcript
  in `CYVEXLY_OWNER_DIRECTION.md`'s "Home 'how does it work?' process
  video 2026-09-06-17".
- **Built:** `src/components/how-it-works-video.tsx`, wired into
  `src/app/page.tsx` inside the existing DIY-builder panel's
  `max-w-6xl` container (not a separate full-width section, so it reads
  as one continuous tile). Media copied to
  `public/media/cyvexly-how-it-works.mp4`; a poster frame
  (`cyvexly-how-it-works-poster.webp`) was generated via an in-browser
  canvas capture (no ffmpeg/ffprobe on this host).
- **Found and fixed a real bug during verification:** the lightbox's
  `fixed inset-0` overlay was not actually pinned to the viewport.
  Several glass-panel ancestors on this page set `backdrop-filter` (the
  sitewide frosted-glass treatment), which — like `transform`/`filter`/
  `perspective`/`will-change: transform` — creates a new CSS containing
  block for `position: fixed` descendants. Live CDP inspection showed
  the overlay's bounding rect at a negative, scroll-dependent Y instead
  of `(0,0)`, so a real backdrop-corner click missed it. Fixed by
  rendering the modal through `createPortal(..., document.body)`.
  Re-verified: dialog is now a direct child of `<body>`, its rect
  matches the window exactly regardless of scroll, and backdrop-click
  now closes it correctly.
- **Verified via CDP:** click and Enter/Space both open the modal;
  clicking the video panel itself does not close it (`stopPropagation`
  confirmed); Escape and the close button both close it and correctly
  restore focus/body scroll; zero horizontal overflow at 375px;
  `tsc --noEmit`/lint/`pnpm run build` all clean (same pre-existing
  round-42 evidence-script lint warning, untouched); a real
  `next start` 21-route sweep (including both new media files) all
  returned 200.
- **Named proof-instrument limitation, not a product defect:** this
  session's Browser pane consistently reports `document.hidden = true`
  even when the tab is the sole/fronted one, so the ambient loop's
  existing `document.hidden`-driven auto-pause (matching the Home hero
  video's established pattern) could not be positively distinguished
  from a real background-tab pause via the Page Visibility API in this
  session. Real screenshots taken earlier in the same session (before
  this check was added) showed the frame content visibly advancing over
  real elapsed time, and manual `.play()` calls succeed with no error —
  the playback path itself is sound; a genuinely attended browser
  session would close this proof gap.
- Cleaned up: stopped the owned `next start`/`next dev` listeners on
  port 5173 by verified PID; removed scratch log/base64 files from
  `$env:TEMP` and the session scratchpad.

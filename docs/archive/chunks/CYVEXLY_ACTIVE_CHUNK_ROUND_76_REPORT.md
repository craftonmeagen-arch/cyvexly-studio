# Cyvexly Active Chunk — Round 76 full report

Moved out of the hot `CYVEXLY_ACTIVE_CHUNK.md` file round 83 to restore
headroom under its 30,720-byte cap. One-line outcome preserved inline in
`CYVEXLY_ACTIVE_CHUNK.md`'s "Round 76" summary line; full detail below.

## Round 76 report — global round 76 (interactive session, Owner direction 2026-09-06-17)

Owner (via interactive Claude Code chat) asked for a supplied local
video (`cyvexley video.mp4`, a Project Planner intake-flow screen
recording, 640×368, ~28.3s) to be added to Home under the "We're not a
DIY builder" panel, sized like the existing tiles (not full-bleed), in
a seamless look, under a new "So how does it work?" heading; a
follow-up message specified a silent looping ambient embed that never
looks pausable, with click/Enter opening a larger controllable view.
Explicitly confirmed as Owner-direction work. Full transcript recorded
in `CYVEXLY_OWNER_DIRECTION.md`'s "Home 'how does it work?' process
video 2026-09-06-17".

**Built:** `src/components/how-it-works-video.tsx` — an ambient inline
loop (autoplay, muted, `loop`, no visible controls, no click-to-pause,
respects reduced-motion/data-saver/tab-visibility like the existing
Home hero video) with a subtle corner "expand" icon (never a play/pause
icon) that opens a `createPortal`-rendered lightbox with real native
`<video controls>`, closable via close button/Escape/backdrop click,
with focus moved to the close control on open and returned to the
trigger on close. Copied the source video to
`public/media/cyvexly-how-it-works.mp4` and generated a poster frame
(`cyvexly-how-it-works-poster.webp`) via an in-browser canvas capture
(no ffmpeg/ffprobe available on this host — used the Browser pane's
`javascript_tool` to draw a video frame to canvas and encode WebP,
avoiding a raw/unposterized video element). Wired into
`src/app/page.tsx`'s "The difference" section, inside the same
`max-w-6xl` container as the existing DIY-builder panel (not a separate
full-width section) so it reads as one continuous tile stack.

**Found and fixed a real bug during verification, not just a proof
gap.** The first implementation rendered the lightbox in place with
`fixed inset-0`. Live CDP inspection showed the overlay's
`getBoundingClientRect()` at a negative, scroll-dependent Y offset
instead of `(0,0)` — several glass-panel ancestors on this page set
`backdrop-filter` (the sitewide frosted-glass treatment), which — like
`transform`/`filter`/`perspective`/`will-change: transform` — creates a
new containing block for `position: fixed` descendants per the CSS
spec. The overlay was fixed to that ancestor, not the viewport, so a
backdrop click at a real viewport corner missed it entirely. Fixed by
rendering the modal through `createPortal(..., document.body)`; since
`isOpen` is `false` on both server and first client render, no separate
mount-detection effect was needed (avoided a `react-hooks/set-state-in-
effect` lint error this way too). Re-verified: dialog is now a direct
child of `<body>`, `getBoundingClientRect()` matches the window exactly
regardless of scroll position, and a backdrop-corner click now closes
it.

**Verified live via CDP:** inline video decodes correctly (`readyState
4`, plays with no error when forced); click and Enter/Space both open
the modal; clicking the video panel itself does not close it
(`stopPropagation` confirmed); Escape and the close button both close
it and restore focus/body scroll; zero horizontal overflow at 375px.
One honest proof-instrument limitation: this session's Browser pane
consistently reports `document.hidden = true` even when the tab is the
sole/fronted one (a`document.hidden`-driven pause is part of the
established sitewide video pattern, matching the Home hero video), so
autoplay-on-load could not be positively confirmed via the Page
Visibility API in this session — real screenshots taken earlier in the
same session (before this check was added) did show the frame content
visibly advancing over time, and manual `.play()` calls succeed with no
error, so the underlying playback path is sound; this is a session
proof-instrument limitation, the same class already recorded in
`CYVEXLY_WATCH.md` for this session type, not an unresolved product
defect. `tsc --noEmit`/lint/`pnpm run build` all clean (same
pre-existing round-42 evidence-script lint warning, untouched); a real
`next start` 21-route sweep (including both new media files) all
returned 200.

Cleaned up: stopped the owned `next start`/`next dev` listeners on port
5173 by verified PID; removed scratch log/base64 files from `$env:TEMP`
and the session scratchpad.

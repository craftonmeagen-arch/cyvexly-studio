# Round 76 closeout (archived round 77 to keep CYVEXLY_NEXT_BUILDER_HANDOFF.md under its 12,288-byte hot-file cap)

**Session:** interactive Claude Code chat, 2026-09-06, Owner direction
`2026-09-06-17`
**Start source:** `55ffb6d` on `main` (pushed, matched `origin/main`)
**Scope:** Owner-requested feature — a supplied process video added to
Home under a new "So how does it work?" heading.
**Completion:** DONE WITH PROOF — feature shipped; a real bug found and
fixed during verification. See `CYVEXLY_APP_DEBT.md`'s "Resolved round
76" and `CYVEXLY_OWNER_DIRECTION.md`'s "Home 'how does it work?' process
video 2026-09-06-17" for full detail.

### What was built and fixed

Added `src/components/how-it-works-video.tsx` (ambient muted looping
inline video, no play/pause affordance, click/Enter opens a lightbox
with real controls) and wired it into `src/app/page.tsx` under the
existing "We're not a DIY builder" panel. Copied
`public/media/cyvexly-how-it-works.mp4` and generated a poster WebP.

Found and fixed a real bug: the lightbox's `fixed inset-0` overlay
wasn't actually viewport-fixed, because a `backdrop-filter` ancestor
(the sitewide glass treatment) creates a new CSS containing block for
`position: fixed` — same category as `transform`/`filter`/
`perspective`. Fixed via `createPortal(..., document.body)`; re-verified
correct full-viewport coverage and backdrop-click-to-close via CDP.

`tsc --noEmit`/lint/`pnpm run build` clean; real `next start` 21-route
sweep all 200; port 5173 cleanly stopped, no scratch files left. One
named proof-instrument limitation (this session's `document.hidden`
always reads `true`) — see `CYVEXLY_APP_DEBT.md` for detail; not a
product defect.

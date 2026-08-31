# Round 15 — Live video deployment verification

**Session:** `builder-20260831T091345658Z-b8c1c2b439ba`
**Public route:** `https://cyvexly-studio.onrender.com/`
**Final deployed product source:** `57480e359c2e8252006547da59b55d06dd100d7b`
**Checked:** 2026-08-31 UTC

## Root cause and repair

The video component and media were already correct in accepted source, but the
public service was not deploying that source:

- GitHub repository default branch: `main` at `c13ae7a`.
- Builder branch: `master` at `57480e3`, 52 commits ahead and with zero
  `main`-only commits.
- Public HTML before repair: one old Orbit graphic, exact visible labels
  `STRATEGY`, `DESIGN`, and `DEVELOPMENT`; zero `video` elements; zero showcase
  Play/Pause controls. Opened capture: `round-15-live-home-before.png`.
- Accepted video commit `34a5bd3` and its 3,978,486-byte MP4 existed only in the
  history after the deployed `main` position.

Render's documented connected-repository model deploys the service's linked
branch on push by default: <https://render.com/docs/deploys>. The repository had
no hosting manifest or GitHub workflow competing with that behavior. A
non-force `git push origin master:main` therefore fast-forwarded `main` from
`c13ae7a` to `57480e3`; the public Home ETag changed from `"u0km5ioize1ien"`
to `"h1ldxn0dq2epv"` about 51 seconds later and began serving the new media
component. Remote `main` and `master` then resolved to the same full SHA.

The local branch was renamed from `master` to `main` and set to track
`origin/main`, preventing a future ordinary Builder push from bypassing the
deployment branch again. Remote `master` was preserved; no branch or history
was deleted or force-written.

## Public HTTP and media proof

| Request | Result |
| --- | --- |
| Home | `200`, new 112,459-byte HTML with the MP4/control markers |
| Poster | `200 image/webp`, 12,006 bytes, byte ranges advertised |
| Full video | `200 video/mp4`, 3,978,486 bytes, byte ranges advertised |
| Video `bytes=0-1023` | `206 video/mp4`, 1,024 bytes, `Content-Range: bytes 0-1023/3978486` |

Local `ffprobe` records one silent H.264 High-profile stream at 1280×720,
24 fps, 30.000 seconds, YUV 4:2:0, and about 1.06 Mbps. The MP4 atom order is
`ftyp` at byte 4, `moov` at byte 36, and `mdat` at byte 9465, confirming
fast-start layout. Local Git blob identities match `origin/main`:

- video: `4f4f9891b7635c25e7c38d67a51e5af54dacc4b5`
- poster: `f5a892afc01a28e7b8fe20aa0a5d0ba72209c1c6`

An independent full public download is byte-for-byte equal to the accepted
local media: video SHA-256
`280cbbf707d8031ec1343fff5dcbf7a226fc84e883739ef9eebd1dfad98bad2b`
and poster SHA-256
`14708dc37d4b699bc22884516ed98d0e2860099a22db84c4d8f36b6b63a27b3f`.

## Real browser and rendered comparison

The real public route was opened in the in-app browser before and after the
repair.

### Desktop/default browser viewport

- one video and one visible Pause control;
- public `currentSrc` is `/media/cyvexly-services-loop.mp4`;
- native video metadata is 1280×720 with 30-second duration, `readyState = 4`,
  no media error, muted looping playback, and the old Orbit labels absent;
- playback advanced to 2.57 seconds before sampling;
- Pause changed the label/state and held time with only 0.088 seconds of
  click-transition drift; explicit Play then advanced 1.49 seconds;
- `scrollWidth === clientWidth`, so the deployment introduced no horizontal
  overflow;
- opened final capture: `round-15-live-home-after-desktop.png`.

The final render preserves the established copy hierarchy and glass header, and
replaces the obsolete orbit with the intended 16:9 systems showcase. The media
is clear, contained, and visually dominant without obscuring the headline or
actions. This matches the preserved visual target; it is not a new redesign.

### Exact 390×844 phone viewport

- one ready, playing video with no media error and the named Pause control;
- shell geometry: `x=24`, `y=604.5`, `327×183.94`, right edge `351` inside the
  375px layout viewport;
- `scrollWidth === clientWidth === 375`;
- opened final capture: `round-15-live-home-after-phone.png`.

The phone render keeps the Home message and both actions first, then presents
the complete video in a contained stack. No copy, control, or media edge is
clipped.

## Playback preference and loop challenge

A separate Builder-owned Chrome 151/CDP session checked the public route at an
exact 390×844 viewport. Its temporary profile was outside the repository and
was removed to the Recycle Bin after Chrome closed.

- **Normal:** one ready H.264 video, muted/looping/inline, autoplaying at
  2.708 seconds; Pause drift `0`; Play advanced `1.211` seconds.
- **Loop boundary:** after positioning the native media at 29.7 seconds, it
  wrapped to 1.092 seconds, stayed playing, and did not enter `ended`.
- **Natural loop control:** a later uninterrupted 35-second live observation
  advanced from 6.136 to 11.178 seconds, crossing one full 30-second boundary
  while staying ready, playing, not ended, and error-free.
- **Reduced motion:** initial time `0`, paused, `Play showcase video`; explicit
  Play advanced `1.197` seconds and changed to Pause.
- **Data saver:** initial time `0`, paused, `Play showcase video`; explicit Play
  advanced `1.193` seconds and changed to Pause.
- Every state reported `videoCount = 1`, 30-second duration, `readyState = 4`,
  `networkState = 1`, `muted = true`, `loop = true`, `playsInline = true`, no
  media error, and exact width containment.

The in-app browser's live error/warning log was empty after the desktop and
phone interaction passes.

## Integrated regression and source verification

- `pnpm run lint` passed.
- `pnpm run build` generated all 23 expected pages and passed; the only warning
  is the already Owner/domain-blocked `metadataBase` localhost fallback.
- Immediate post-build `pnpm exec tsc --noEmit` passed.
- Public route sweep: all 22 expected pages/assets returned `200`; unknown
  service plus the three documented Owner-blocked routes returned expected
  `404`; every expected HTML page had one reachable `main`/H1 baseline and Home
  carried the video marker.

## Limits and disposition

The exact public Render service settings/dashboard and deployment logs were not
credential-accessible. Their configured branch is instead established by the
strict branch/source fingerprint match before and after the safe fast-forward,
the official deployment model, the changed public ETag, and the actual public
render. Physical Safari/Firefox and the Owner's original second computer were
not checked. No domain, provider, infrastructure setting, scheduler, or
automation was created, deleted, paused, or modified.

**DONE WITH PROOF:** the uploaded showcase video is now present, visible,
playable, looped, preference-aware, and responsive on the real website.

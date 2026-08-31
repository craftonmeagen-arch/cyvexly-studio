# Council R21 public Home video deployment review

- Round: `council-20260831T144100Z` / review `CYC-R21-20260831-01`
- Scheduler minute zero: `2026-08-31T14:41:17.406Z`
- Snapshot head: `dc0f104b3008f20842f3d86121d3a0d9fff7be3c`
- Start dirty fingerprint: `D519449B7946278E700CA973E6FD72ECE2BCF17641DE99F70ACE88CBCBE46123`
- Local runtime: isolated Council server on port `5373`.

## Public deployment proof

The actual in-app Browser opened `https://cyvexly-studio.onrender.com/` and
rendered one ready H.264 video from `/media/cyvexly-services-loop.mp4`. Native
metadata reported `readyState = 4`, a 30-second duration, muted playback,
looping, and no media error. The named control paused and resumed the video;
the label changed from `Pause showcase video` to `Play showcase video` and back
and playback advanced about 1.49 seconds after Play. Browser console errors were
zero. Direct read-only HTTP corroboration returned Home `200`, one `<video>`,
poster `200 image/webp`, and video `206` for `bytes=0-1023` with
`Content-Range: bytes 0-1023/3978486`.

## Responsive and local comparison

The deployed Home was literally viewed at 1440×900 and 390×844. At desktop,
the video figure measured 528×297 inside a 1425px client width (45.8% of the
1152px content frame, consistent with the Owner’s requested 46–50% hero media
share). At phone width it measured 325×181.94 inside the 375px layout width;
`scrollWidth === clientWidth` in both views. The retained captures are:

- `council-20260831T144100Z-public-home-desktop.png`
- `council-20260831T144100Z-public-home-paused-desktop.png`
- `council-20260831T144100Z-public-home-tablet.png`
- `council-20260831T144100Z-public-home-phone.png`
- `council-20260831T144100Z-public-menu-open-phone-settled.png`

The isolated local runtime was also opened in the in-app Browser at the same
desktop/phone widths. It served one matching video and the same containment
metrics; captures are `...local-home-desktop.png` and `...local-home-phone.png`.
The current public render therefore matches the accepted source/deployment
identity for this slice.

The public Home path was also followed to
`/start?service=business-websites` at phone width. The Planner rendered its
nine-step progress, the visible `Starting point added: Business websites.`
notice, and the no-payment copy with no horizontal overflow; the retained
capture is `council-20260831T144100Z-public-planner-phone.png`.

## Mockup comparison and limits

The Owner reference `mockups/05-home-hero-video-owner-direction.png` was
literally viewed beside the public captures. The live composition preserves the
headline/actions-first hierarchy, integrated 16:9 media position, light grid
atmosphere, and responsive stacking. The sampled live frame is darker and less
information-dense than the mockup’s rich multi-device frame; this is an Owner
fidelity choice, not a deployment failure. Native loop-boundary timing, OS
reduced-motion, Safari/Firefox, physical second-device, and production field
vitals were not re-proven in this round.

# Round 11 Home Hero Video Comparison

**Product commit:** `34a5bd3` — `Add accessible Home showcase video`
**Reference:** `mockups/01-home.png`
**Owner direction:** add the Owner-supplied showcase media to Home as a
repeating advertisement of Cyvexly's offer.

## Media identity and budget

The Owner supplied `yes_security_and_reliabilty_a.mp4` in the active thread.
The shipping files are web-delivery derivatives of that supplied source, not
Builder-authored client proof:

| Asset | Shipping facts | SHA-256 |
| --- | --- | --- |
| `cyvexly-services-loop.mp4` | H.264, yuv420p, 1280x720, 24fps, 30.000s, silent, fast-start, 3,978,486 bytes, ~1.06Mbps | `280CBBF707D8031EC1343FFF5DCBF7A226FC84E883739EF9EEBD1DFAD98BAD2B` |
| `cyvexly-services-poster.webp` | WebP, yuv420p, 1280x720, 12,006 bytes, extracted at 1.5s | `14708DC37D4B699BC22884516ED98D0E2860099A22DB84C4D8F36B6B63A27B3F` |

The upstream production method of the Owner-supplied source is unstated. This
evidence therefore does not attribute it to Gemini or another generator. The
Owner supplied the file for this requested website use; no independent license,
model-release, or third-party-rights audit was available or claimed.

## Rendered comparison

Opened production captures at exact 1440x900, 768x1024, and 390x844 show the
video replacing the former static orbit without displacing the hero message or
actions. At 1440px the media is a 528x297 right-column panel; at 768px it moves
below the copy as a 705x396.56 panel; at 390px it is a 342x192.38 panel below
both CTAs. Every state is width-contained. The phone caption and 36x36 playback
control occupy separate regions and do not overlap.

Compared with the accepted mockup, the live hero now has the intended luminous
systems/device motion rather than a restrained line orbit. Its dark midnight
panel remains bounded by the existing blue/cyan glass language, while the bright
page, headline, and primary CTA retain visual priority. This materially advances
the Owner's glassy/futuristic direction without claiming final mockup parity.

Opened evidence:

- `round-11-home-desktop.png`
- `round-11-home-tablet.png`
- `round-11-home-phone.png`
- `round-11-home-phone-reduced-motion-still.png`

## Interaction and delivery proof

- Normal autoplay advanced 0.904 seconds during a 0.9-second sample; the visible
  pause control then held time with `0` seconds drift.
- Seeking to 29.7 seconds and continuing playback returned to 0.887 seconds,
  proving the 30-second loop in the actual production runtime.
- Reduced-motion starts paused at time 0 with the poster and a named Play
  control. Native Chromium Enter on the focused control explicitly played the
  video and advanced 0.893 seconds.
- Pre-fix `saveData=true` emulation still autoplayed to 1.4 seconds. Commit
  `34a5bd3` now holds the poster at time 0 with Play/pressed=false. Explicit
  Play advances 0.899 seconds. A live connection-change probe paused when
  save-data became true, resumed when false, and retained an explicit user pause
  through later connection changes.
- The MP4 and poster return correct MIME types, byte lengths, `Accept-Ranges:
  bytes`, and valid 206 responses for a 1,024-byte range. `preload="metadata"`
  and the 12KB poster keep the initial still independent of a complete download.
- A cold-cache desktop run at 150ms latency and ~1.64Mbps download recorded the
  video/poster as LCP at 1.004s, CLS `0.00009`, active playback at 6.105s, and
  zero overflow. After eight seconds the browser had fetched the 12KB poster
  and about 991KB across video byte ranges, not the complete 3.98MB file.
- The media is silent. Its imagery is supplementary, `aria-hidden` on the
  `<video>`, and represented by a concise figure caption. The visible playback
  control exposes its changing Play/Pause name, pressed state, and controlled
  target.

Durable metrics are in `round-11-hero-runtime-proof.json`,
`round-11-save-data-baseline.json`,
`round-11-save-data-post-fix-explicit-play.json`,
`round-11-save-data-change-proof.json`, and
`round-11-route-media-audit.json`. Cold constrained proof is in
`round-11-constrained-media-proof.json` and its opened PNG.

## Regression proof and honest limits

Lint, production build, and post-build TypeScript pass; the only build warning
is the existing Owner/domain-blocked `metadataBase` fallback. Thirteen expected
route statuses and twelve 390px content routes pass one-main/one-H1, visible
control naming, and no-horizontal-overflow checks. There are no unexpected
runtime/console errors; one `/privacy` RSC prefetch 404 is the already-bounded
Owner/jurisdiction gap.

The actual Owner device, physical Safari/Firefox, deployment cache behavior,
field Core Web Vitals, and independent media-rights documentation were not
checked. The 4MB video is accepted as the current Owner-supplied media budget
with data-saver/reduced-motion protection; future replacement or multi-codec
compression should be evidence-led, not a silent rewrite of the Owner's asset.
Representative frame inspection also found stylized pseudo-interface copy baked
into the supplied source, including truncated or malformed labels. Most is small
at the shipping hero size and the overlay does not treat it as authoritative
copy, but the Owner should view the complete 30-second loop before release and
supply a corrected master if any source-frame wording is unacceptable.

# Round 16 — Integrated Home hero reel verification

**Session:** `builder-20260831T110720-7c9b5e92d4f1`
**Lock claim:** `2026-08-31T15:07:46.1928578Z`
**Start source:** `dc0f104` on `main`
**Product commit:** `14e12d4`
**Owner direction:** `2026-08-31-07`
**Reference:** `mockups/05-home-hero-video-owner-direction.png`
**PM prompt:** no active prompt

## Implemented comparison

The Owner-approved 1672×941 reference makes the studio reel a primary hero
object inside a wide light-ice-blue glass atmosphere. The prior public source
used a 1152px content frame and a 528×297 player: technically 45.8% of that
content frame, but small in absolute viewport area and visually detached from
the unframed copy.

The committed Home-only composition now uses a stage up to 1440px, an
asymmetric `0.9fr / 1.1fr` desktop grid, a protected translucent copy pane, a
larger padded glass media bezel, layered grids/refractions, and a widened
credibility rail. The accepted 30-second media is unchanged and remains
truthful. The progress line is derived from `currentTime / duration`; it is not
a fake seek control.

At a 1440×900 viewport (1425px layout viewport because of the scrollbar):

- hero stage: `1425×627.25`, ending at `y=715.25`;
- copy pane: `594.44×499.25` at `x=32`, with the headline in the intended
  three-line rhythm;
- reel: `726.56×420.06` at `x=666.44`, about 51.0% of the layout viewport;
- credibility rail: `1408×88`, immediately after the hero;
- reel width grew by 198.56px, or 37.6%, from the prior 528px baseline;
- `scrollWidth === clientWidth === 1425`.

This closes the Owner's named thumbnail-scale and pale-blue glass-composition
gap. Deliberate differences remain: the real accepted video is the existing
abstract Cyvexly systems reel, not the mockup's invented device screens; the
canonical wordmark/header remains; and no generated microcopy, score, metric,
client result, or brand was copied from the reference.

## Opened responsive renders

- `round-16-home-hero-desktop.png` — final exact 1440×900 production render;
  SHA-256 `1f64bc4aa2e725ab17632bf2e93d66f0a36f4e9956826c101f4127120f785ce7`.
- `round-16-home-hero-tablet.png` — exact 768×1024 stacked production render;
  copy `705×409.5`, reel `705×407.94`, zero horizontal overflow; SHA-256
  `078ef4cb95c96c0f0b1d6ef27df8e5a2eb6f00910bfb2bc767430062efa35181`.
- `round-16-home-hero-phone.png` — final exact 390×844 production render;
  copy `343×489`, reel `343×200.81` directly after the actions at `y=659`,
  `scrollWidth === clientWidth === 375`; SHA-256
  `c1dcfcb5f138e332aa500db303c488c1f8352963b0ea3924692ea833fdc74fea`.

The 1023/1024 boundary was measured explicitly. At 1023 the 960px content
column remains stacked and contained; at 1024 it changes to `410.844px /
502.156px`, exposes the desktop navigation, and remains contained. This is the
authored breakpoint rather than a browser-zoom accident.

## Visual and reading checks

- The copy field computes to `blur(30px) saturate(132%)`; the reel bezel to
  `blur(26px) saturate(145%)`. Their light-blue layers and white edges are
  visible in every opened capture without the saturated royal-blue wash the
  Owner rejected.
- H1 `rgb(16, 33, 61)`, body `rgb(82, 97, 118)`, and eyebrow
  `rgb(49, 90, 141)` have conservative white-background contrast of 16.07:1,
  6.31:1, and 7.05:1 respectively. The copy field is darker than pure white in
  places, so these are not inflated by assuming a dark backing.
- Desktop, tablet, and phone preserve copy → actions → reel → credibility DOM
  and visual order. Phone buttons stay named and stacked without squeezing.
- One page H1 and one `main` remain. The video remains `aria-hidden`; its
  screen-reader-only figure caption describes the showcase, and the visible
  control targets `cyvexly-services-showcase` with the correct Play/Pause name
  and pressed state.

## Playback and preference proof

- Normal production playback loaded at `readyState=4`, advanced 1.681 seconds
  over a 1.6-second observation, and reported no media error.
- Pause held exactly (`0.000` observed drift over 1.2 seconds); Play resumed.
- One natural loop was observed from `6.600` seconds through the 30-second
  boundary to `5.660` seconds. It stayed playing, `loop=true`, `ended=false`.
- A Chrome 151 headless run with `prefers-reduced-motion: reduce` held the
  poster and exposed `aria-label="Play showcase video"` after hydration.
- The existing `navigator.connection.saveData` branch and live `change`
  listener are unchanged from the fully exercised Round 15 proof. This
  in-app browser does not expose the Network Information API, so Round 16 did
  not manufacture a new runtime result for it.
- The clean Cyvexly browser tab had zero warning/error console entries. A
  separate stale `127.0.0.1` tab briefly resolved to an unrelated app; it was
  discarded. A fresh `localhost` origin and direct HTTP identity check both
  proved the Builder runtime title and Cyvexly content before final checks.

## Build, route, and source proof

- `pnpm exec eslint .` — pass.
- `pnpm run build` — pass, 23 generated pages; only the existing
  Owner/domain-blocked `metadataBase` warning.
- immediate post-build `pnpm exec tsc --noEmit` — pass.
- Every route in the production prerender manifest returned `200`; expected
  HTML routes contained `main`. This covered Home, Accessibility, Contact,
  FAQ, Pricing, Process, Services, five service details, Work, and three work
  details, plus the generated icon/OG/robots assets.
- The real product diff is limited to `src/app/page.tsx`,
  `src/app/globals.css`, `src/components/hero-showcase-video.tsx`, and the
  preserved visual plan. No route, claim, media byte, infrastructure setting,
  credential, scheduler, or automation was changed.

## Honest limits and disposition

After `git push origin main`, the public Render Home changed from ETag
`{"ki45jt85ws2epv"}` to `{"l3tca9huev2fqm"}` within about 61 seconds and began
serving both `home-hero-stage` and `Muted loop`. An opened live desktop tab
showed the correct Cyvexly title, a contained `638.56×370.56` reel in its
1265px available layout viewport, `readyState=4`, no media error, 1.264 seconds
of playback advance, the named Pause control, zero horizontal overflow, and an
empty warning/error console.

Owner approval of the final live visual remains required. Physical Safari,
Firefox, the Owner's original second computer, field Web Vitals, and a real
data-saver-capable browser were not available in this round. Founder/legal/
domain/email/art-framing decisions remain exactly as previously bounded.

**Result:** DONE WITH PUBLIC PROOF for the Round 16 larger integrated Home hero reel
and light-ice-blue glass slice; OWNER REVIEW PENDING for visual acceptance and
the original second-device scale.

# Cyvexly Watch Index

Observations and evidence, not new rules. Each entry is a place to look, not a
boundary on future reasoning. Rounds 1-7 are rotated to
`docs/archive/CYVEXLY_WATCH_ARCHIVE.md` to stay under this file's 20KB cap
(§7.14) — read that file for full detail; the findings below still apply.

## Round 8

- **The unattended in-app Browser pane's suspended compositor does not mean
  real page screenshots are unavailable on this host.** Local Chrome 151 can
  run independently with `--headless=new`; its DevTools Protocol works from
  Node 24's built-in `WebSocket`, enabling real page captures and exact viewport
  geometry without adding dependencies. A raw Windows headless call using
  `--window-size=390,...` produced a misleading 390px *crop* of a wider minimum
  layout, which looked like product overflow. `Emulation.setDeviceMetricsOverride`
  then proved the actual page at an exact 390px CSS viewport had
  `scrollWidth === clientWidth === 390` and captured the complete selected-work
  section. Treat raw CLI window sizing as an unvalidated instrument for narrow
  viewport claims; use CDP device metrics and record `innerWidth`/`clientWidth`/
  `scrollWidth` as controls. This is a newly reachable proof method, not a
  change to the known in-app Browser-pane limitation.
- **CDP `Input.dispatchKeyEvent` reaches native Chromium focus navigation even
  when the in-app Browser pane's `computer` key action does not.** Round 8 sent
  real Tab events from a body focus origin through `/start`, then activated
  `Continue` with Enter at exact 1440x900 and 390x844. For Enter activation,
  the CDP key-down needs `text` and `unmodifiedText` set to carriage return;
  omitting those fields moved focus correctly with Tab but did not activate the
  button. Keep the claim bounded: this proves Chromium's native sequential-
  focus/input path, not a physical keyboard or another browser.

## Round 9

- **A 100%-zoom mismatch can still come from browser font preferences.** A 24px
  default-font profile reproduced the Owner's apparent zoom: rem geometry grew
  1.5× and the rem breakpoint hid desktop navigation. A 16px root corrected
  declarations, but media-query rems still followed the browser's initial basis;
  explicit pixel breakpoints completed the fix. A separate 24px minimum-font
  stress test then found two phone rows that resisted wrapping, demonstrating
  why default-font and minimum-font profiles must be tested independently.

## Round 10

- **When the reference gap is compositional, change the component grammar—not
  just blur/opacity tokens.** Mapping the mockup to an inset shell, icon rail,
  and icon-bearing card pattern produced a larger visible fidelity gain than a
  fourth global glass-token adjustment would have, while keeping the change
  reusable and testable.
- **Read React state after its commit, and synthesize Enter as a complete CDP
  key sequence.** A same-turn `.click()` read returned the old `aria-expanded`
  value even though the subsequent PNG showed the open menu. Waiting one render
  turn fixed the instrument. On Chrome 151, native Enter activation required
  `rawKeyDown`, a carriage-return `char` event, then `keyUp`; Tab alone worked
  with ordinary key events. Preserve both details in future interaction scripts.
- **On a fresh tree, generate Next route/layout types before standalone
  `tsc`.** Deleting `.next` and invoking `tsc --noEmit` directly reports the
  generated `LayoutProps` global as missing. `next build` regenerates
  `.next/types` and runs its own TypeScript phase; the immediate post-build
  standalone compiler then passes. Keep the clean verification order as lint →
  build (or `next typegen`) → standalone `tsc`. Round 10 separately proved
  `pnpm exec next typegen && pnpm exec tsc --noEmit` succeeds from a clean
  `.next`.

## Round 11

- **Keep live Chrome profiles outside the project tree.** A Builder-owned
  headless profile under `.codex/tmp/<session>/chrome-profile` held its Cookies
  database open while Turbopack/Tailwind scanned the project, causing a
  deterministic build panic on that locked file. The exact owned Chrome tree
  was stopped, the profile removed, and the same build passed. A profile under
  the OS temp root then supported all remaining CDP proof without entering the
  build graph. The failure was instrumentation placement, not product source.
- **Autoplay media must honor explicit data-saving intent as well as reduced
  motion.** Controlled `navigator.connection.saveData=true` emulation proved
  the initial Home video still autoplayed. The component now holds the poster,
  responds to live connection changes, permits explicit Play, and preserves a
  user pause through later changes; durable before/after evidence is indexed.

## Round 12

- **Tailwind utility classes do not necessarily override a later-authored
  custom component class.** The first 1440 render showed `.glass-panel` still
  painting desktop process-card borders/backgrounds despite `lg:border-0` and
  `lg:bg-transparent`. The custom CSS is emitted after Tailwind utilities, so
  the equal-specificity custom rule won. A scoped desktop
  `.process-route-step` rule fixed the actual source order; the repeated render
  now matches the visual plan while tablet/phone retain glass cards. When a
  utility appears correct in JSX but the render disagrees, inspect cascade
  order before adding stronger unrelated classes.
- **Measure original inline SVG ink against its viewBox before accepting the
  thumbnail.** `getBBox()` records the partnership diagram at `304x218` inside
  `360x260` (`x=28`, `y=26`), leaving positive clearance on every edge. This
  directly applies the favicon overflow lesson without assuming that a clean
  screenshot proves unclipped source geometry.

## Round 13

- **Wait for scroll completion before synthesizing pointer input.** The first
  CTA proof computed coordinates while the page's smooth scroll was still in
  flight, so the point was outside the viewport and the path stayed `/`.
  Forcing `scroll-behavior:auto`, waiting for layout, and checking
  `elementFromPoint(...).closest('a')` before dispatching the mouse events
  correctly proved `/start` navigation. Preserve the hit-target control in
  later CDP interaction claims.
- **A deliberate horizon crop can make SVG `getBBox()` exceed the viewBox.**
  Unlike an accidentally clipped standalone mark, the final-CTA planet is
  intentionally larger than the visible frame and the containing panel owns
  the crop. Judge this pattern from both source intent and opened responsive
  renders; do not apply a blanket ink-within-viewBox rule to compositional art.
- **The in-app Browser runtime may fail before it creates a session.** This
  round received `failed to write kernel assets: The system cannot find the
  path specified.` before any page interaction. No plugin state was changed;
  exact Builder-owned Chrome/CDP evidence remained available as the documented
  fallback.

## Round 15

- **A successful push is not deployment proof when the pushed branch differs
  from the hosting branch.** GitHub contained the video and all later product
  work on `master`, but its default `main` branch remained at round 6 and the
  public Render HTML matched that exact old source. The safe falsifier was a
  branch graph: `main` had zero unique commits and was a strict ancestor, so a
  non-force fast-forward changed the public ETag/content within about 51
  seconds. The local Builder branch now tracks `origin/main`. Future release
  claims should compare the accepted commit, configured/default deployment
  branch, and real public artifact instead of treating `git push` as the
  boundary. This is a source-identity checkpoint to apply when deployment
  behavior is in scope, not a reason to add hosting checks to unrelated rounds.

## Round 16

- **A percentage alone can conceal a thumbnail-scale composition.** The prior
  reel occupied 45.8% of its 1152px content frame, yet its 528px absolute width,
  broad unframed copy field, and flat surrounding grid still read as a small
  card to the Owner. Expanding the Home-only stage, measuring absolute viewport
  area, and coordinating the copy pane, media bezel, and atmospheric layers
  produced the material change. Future visual reviews should record both local
  component ratio and whole-viewport hierarchy.
- **In-app `127.0.0.1` and `localhost` can resolve to different task relays.**
  During final verification, a previously valid `127.0.0.1:5173` tab exposed
  an unrelated app while direct Windows HTTP and the proven Builder listener
  still served Cyvexly. Navigating a clean tab to `localhost:5173` restored the
  correct task route and a clean console. Always recheck page title/content
  identity after a local-browser relay change; do not treat a shared port label
  alone as process ownership evidence.

## Round 17

- **A breakpoint can be overflow-safe and still be visually too early.** The
  first Services pathway render at 1024px fit three 307px cards with no root
  overflow, but the longest service label wrapped into a cramped five-line
  cluster. Holding the three-card composition until 1280px yields 471px
  two-column cards at compact desktop and 371px three-column cards at 1280.
  For dense labelled diagrams, inspect line wrapping and scanability on both
  sides of the breakpoint; `scrollWidth === clientWidth` is necessary but not
  sufficient responsive proof.

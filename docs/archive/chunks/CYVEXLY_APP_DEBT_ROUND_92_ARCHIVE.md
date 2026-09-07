# Cyvexly App Debt — Round 92 archived detail

Archived round 93 to keep `CYVEXLY_APP_DEBT.md` under its 30,720-byte
hot-file cap. No history lost — full detail preserved verbatim below.

## Round 92 — no new defect; Accessibility-statement-claims vs. actual rendered behavior (contrast, focus order, skip-link, reduced-motion), doc-cap fix

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R83` (58th
consecutive clean confirmation, "PASS WITH COMMENDATION", evaluated head
`cf14cd1` — round 90's head — 1 documentation-debt item `CYV-DOC-003`:
`CYVEXLY_CURRENT_STATE.md` measured at 8,644 bytes against its 8,192-byte
cap). Moved to `exchange/processed/`. Fixed `CYV-DOC-003`: condensed
rounds 87-90's four separate outcome paragraphs in
`CYVEXLY_CURRENT_STATE.md` into a single one-line pointer (detail already
preserved in this file's own "Round 87"-"Round 90" sections and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`), bringing the file to 6,540 bytes — well
under cap. The report's other advisory (rotate
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`, 352b headroom at the evaluated head) was
already satisfied by round 91's own rotation before this report published
(confirmed: that file measures 7,665 bytes now, comfortable headroom).

Ran the standard verification suite (round-84 `PATH` fix applied first):
`pnpm exec tsc --noEmit` clean, `pnpm run lint` clean (same pre-existing
round-42 evidence-script warning), `pnpm run build` clean, on unchanged
round-87 source (`871b8db`, round 91's docs-only HEAD).

**Convergence-check, fresh surface (round 91's handoff-named candidate):**
diffed the Accessibility statement page's (`src/app/accessibility/page.tsx`)
specific claims — "all interactive functions reachable... by keyboard,"
"visible focus indicators that aren't hidden by sticky interface elements,"
"sufficient color contrast," and "animation that respects your
reduced-motion preference" — against actual rendered behavior via a real
local headless-Chrome/CDP session (round 8/79/81's method: genuine
`Input.dispatchKeyEvent` keyboard input and `Emulation.setEmulatedMedia`,
not `javascript_tool`-synthesized events). Four checks, all **0 defects**:

1. **Reduced motion:** with `prefers-reduced-motion: reduce` emulated via
   real CDP `Emulation.setEmulatedMedia`, `window.matchMedia(...).matches`
   read `true`, a probed element's computed `transition-duration` collapsed
   to `1e-06s` (the `globals.css` reduced-motion block's `0.001ms
   !important` rule firing correctly), and `scroll-behavior` read `auto`
   (smooth-scroll disabled) — confirms the sitewide reduced-motion CSS is
   genuinely active, not just present in source.
2. **Contrast:** measured this page's own body-copy color (`rgb(70, 87,
   110)`, the `cool-graphite` token) against its actual composited
   `.glass-panel` background (`rgba(218, 240, 253, 0.55)`) via a real
   WCAG relative-luminance calculation on the live computed styles —
   **6.27:1**, comfortably clears the 4.5:1 AA floor.
3. **Skip-link / focus order — a genuine finding worth recording, not
   assumed:** a real first `Tab` press from page load correctly focuses
   the "Skip to main content" link first (`href="#main-content"`), with a
   real visible `solid 2px` cyber-blue `:focus-visible` outline. A real
   `Enter` press activates it: `location.hash` becomes `#main-content` and
   the page genuinely scrolls (`scrollY: 88`). Checking
   `document.activeElement` immediately after shows `BODY`, not the
   `<main>` element — because `<main id="main-content">` carries no
   `tabindex` on any page (verified via `hasAttribute('tabindex')`),
   confirming it is not a focusable target. **This looked like it might be
   the classic "skip link doesn't actually move focus, so the next Tab
   re-enters the header nav" anti-pattern** — investigated further instead
   of concluding a defect from `activeElement` alone: a real second `Tab`
   press was dispatched and it landed directly inside `<main>` (the "Web
   Content Accessibility Guidelines (WCAG) 2.2" link, several DOM levels
   past the entire header/nav/mobile-menu-button), not back on the skip
   link or into the header. This is real Chromium's documented "sequential
   focus navigation starting point" behavior — a fragment-navigation
   target can become the effective next-Tab anchor point even without
   being focusable/reporting as `document.activeElement` — so the skip
   link **genuinely bypasses the repeated header for a real keyboard user
   in this real browser**, confirmed by dispatched input, not inferred
   from `mainHasTabindex: false` alone. **0 defect; a stronger positive
   proof than any prior round recorded for this exact mechanism** (rounds
   39/79 verified the skip link exists and is reachable; this round is the
   first to verify what actually happens on the Tab press immediately
   after activating it).
4. **Focus indicator vs. sticky header:** the header is `sticky top-0
   z-50`; `services/page.tsx` and `faq/page.tsx`'s in-page anchor targets
   already carry `scroll-mt-24` (pre-existing, not added this round),
   which was specifically checked because an un-compensated sticky header
   is a common real cause of a focused/scrolled-to element's outline being
   clipped under it — confirmed present, so no fix was needed here.

**Completion:** DONE WITH PROOF (0 defects found across all four named
surfaces; 0 source change — a genuine negative result plus one stronger
proof-closure). Cleaned up: stopped the manually-started `next dev`
listener on port 5173 by its verified real listener PID
(`Get-NetTCPConnection -LocalPort 5173 -State Listen`), confirmed port
clear afterward; killed the round-owned headless-Chrome instance by its
unique `--user-data-dir` timestcamped path (not by process name — several
unrelated `chrome.exe`/Playwright-owned processes were running on this
host), removed its unique profile directory and the scratch CDP script/
log files from the OS temp scratchpad (one dev-server log initially
resisted PowerShell `Remove-Item` with "Access is denied" immediately
after the owning process was stopped — resolved by retrying the same
delete via the Bash tool's `rm`, which succeeded; not a real leftover).

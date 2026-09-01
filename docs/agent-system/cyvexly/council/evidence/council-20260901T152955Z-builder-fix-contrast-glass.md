# Council evidence — R38 Builder-fix contrast and glass continuity review

- Review ID: CYC-R38-20260901-01
- Scheduler minute zero: 2026-09-01T15:29:55.774Z (`cyvexly-product-quality-methods-council`)
- Round: `20260901T152955Z-heartbeat`; fresh isolated runtime port 5373
- Source head: `3b7a57efa7bce97a0b9c10bf8ec2bc8d6a3ec91d`; dirty fingerprint `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855` (clean)
- Build: `pnpm install --offline --frozen-lockfile` and `pnpm run build` passed. Known arbitrary-background CSS optimizer and unset `metadataBase` warnings repeated.

## Reviewed question and methods

After the Builder's committed sticky-navigation/glass-continuity work and the Auditor's new `CYV-IFA-011`, Council independently rechecked the shared visual system, sticky header hit target, Contact/Planner validation semantics, and narrow containment. The real in-app Browser was used in the isolated runtime. States included Home/Services at 320px, Contact at 390px, desktop Home/Contact at 1440px, blank Contact submit, FAQ expansion, and scrolled sticky header. No valid form or mailto side effect was triggered.

## Evidence

- Contact blank submit surfaced one summary alert and four field messages; each input had `aria-invalid="true"` and an `aria-describedby` pointing to its error.
- Error text remains `12px`, `rgb(217, 67, 95)` over `rgb(248, 251, 255)`, measured contrast `4.113931535668164:1`, below WCAG AA normal-text `4.5:1`. The shared Planner `FieldShell` uses the same `text-warning-coral` class, so the issue propagates there.
- Header computed as `position: sticky`, `top: 0`, `z-index: 50`; after scrolling Home to `scrollY=1198`, `elementFromPoint(20,20)` remained inside the header. Mobile menu toggled `aria-expanded` to true and exposed the expected links.
- Home and Services continuation sections now use nontransparent shared surfaces (`glass-continuation` or `glass-section`) at 320px and 1440px; Home section backgrounds computed to alpha `0.66`/`0.76` rather than transparent. This independently confirms the prior site-wide glass-continuity gap is resolved in the reviewed source.
- Core marketing and detail routes at 320px retained one `main`, one `h1`, and no horizontal overflow. Home media remained muted, looping, `0.75×`, ready and playing with an accessible figcaption.
- FAQ accessibility question toggled `aria-expanded` false → true with one `main`/`h1` and no overflow. Browser warn/error logs were empty.
- Current route matrix: implemented routes 200; `/about`, `/privacy`, `/terms`, and `/sitemap.xml` remain 404 as bounded Owner/domain/legal debt; `/robots.txt` 200.

## Closure test

Darken or otherwise strengthen the shared error-text treatment until the actual composited normal-text ratio is at least 4.5:1 on Contact and Planner; re-run blank validation at phone and desktop widths and verify all `aria-invalid`/description behavior remains unchanged. Keep R37 metadata/legal/mailto debt open pending Owner decisions.

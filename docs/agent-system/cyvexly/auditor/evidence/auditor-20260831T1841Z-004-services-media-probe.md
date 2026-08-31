# IFA-2026-08-31-R4 — Services detail and Home media probe

## Identity and isolation

- Review: `IFA-2026-08-31-R4`; round id `auditor-20260831T1841Z-004`.
- Heartbeat minute zero: `2026-08-31T18:40:56.883Z`.
- Reviewed source: `HEAD f0f1eacee667cf7f63be54b4cf3432f71056ab74` (`main`).
- Source fingerprint: `4aa73afd7b0cfac313700c241c88df6ef56d71cfdd732e1fab01cee0a57f09b7` (39 files; SHA-256 over sorted `src/` paths, NUL separators, and Base64 file bytes).
- Worktree status fingerprint: `40e99060261b61ff11962da867ce1b792aeee3454885076326296c926dfc4a45`; product `src/` had no untracked scratch route and no source diff at review time.
- Standard `Start-ReviewRound.ps1` could not create `.codex/role-state/auditor.active.json` because managed permissions deny writes to `.codex`. I did not touch the Council guard or any other role resource. As a bounded recovery, I copied the current product source into `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T1841Z-004b`, mounted the existing dependency tree read-only through a junction, and ran the Auditor server on reserved port `5273` (owned Node PID `47912`). This deviation is disclosed and is not a claim that the standard guard/manifest lifecycle succeeded.

## Scope and method

This round intentionally used a different slice from the Council's latest Services-pathway review: the five new service-detail routes, their data-driven completeness and Planner targets, the Home hero media's live DOM/playback state, and a fresh local route/404/status check. I used the real Codex in-app browser against the isolated local runtime, Playwright DOM snapshots/evaluation, exact 1440×900 and 390×844 viewport overrides, opened desktop/phone renders, source inspection, HTTP status checks, ESLint, and TypeScript. No form was submitted and no product source/tests were edited.

The public Render URL from Builder evidence could not be opened from this managed environment: both the in-app browser and direct HTTPS request were blocked/left on the local tab by the sandbox socket policy. Public claims below therefore remain the previously cited Builder/Council evidence, not a new Auditor public proof.

## Results

### Home hero media

- One `<video>` rendered at `/` with source `/media/cyvexly-services-loop.mp4`, poster `/media/cyvexly-services-poster.webp`, `duration=30`, `readyState=4`, `muted=true`, `loop=true`, `playsInline=true`, `aria-hidden=true`, no native controls, and the named `Pause showcase video` control with `aria-pressed=true` while playing.
- Normal playback advanced `1.2636s` after an explicit Play activation. Explicit Pause changed the control to `Play showcase video`, `aria-pressed=false`, and held the sampled time during a 0.9s observation.
- Desktop reel geometry at a 1425px layout viewport: `x=666.44`, `y=220.84`, `726.56×420.06`; document containment was exact (`scrollWidth=clientWidth=1425`).
- Phone geometry at the 375px layout viewport from a requested 390×844 device: `x=16`, `y=659`, `343×200.81`; `scrollWidth=clientWidth=375`, one `main`, one H1, ready/playing video, and named Pause control.
- Opened captures: `auditor-20260831T1841Z-004-home-desktop.jpg` and `auditor-20260831T1841Z-004-home-phone.jpg`. Both were visually inspected. The desktop shows the intended light-ice glass copy/media composition; the phone keeps copy/actions before the contained reel without horizontal clipping.
- Browser warning/error log query returned `[]` after the Home and service-detail passes.

### Five service-detail routes

All of `/services/business-websites`, `/services/website-redesigns`, `/services/landing-pages`, `/services/ecommerce-websites`, and `/services/website-care` returned local HTTP `200`, one H1, one `main`, two `Include this in my project` links targeting the matching `/start?service=<slug>`, one case-study link, all required problem/outcome/scope/example/FAQ sections, and exact phone containment (`scrollWidth=clientWidth=375`). The five titles and H1s were distinct and matched the typed service data.

Business Websites was opened and visually inspected at desktop and phone sizes. Desktop service signal geometry was `491.97×356.97` inside the 1425px layout; phone signal geometry was `327×267.33` within the 375px layout. Captures: `auditor-20260831T1841Z-004-service-desktop.jpg` and `auditor-20260831T1841Z-004-service-phone.jpg`.

The unknown route `/services/not-a-real-service` returned HTTP `404` with title `Page not found — Cyvexly Studio`. The three intentionally bounded routes `/about`, `/privacy`, and `/terms` also remained HTTP `404`, matching existing Owner/project debt rather than creating a new finding.

## Verification commands

- `pnpm run lint` in the isolated copy: passed.
- `tsc --noEmit` via the source TypeScript binary: passed.
- Optimized build attempt with Turbopack: blocked by the junctioned dependency tree (`Symlink [project]/node_modules is invalid; it points out of the filesystem root`).
- Optimized build retry with Webpack: blocked by the managed environment's outbound HTTPS EACCES while `next/font` attempted to fetch Inter, JetBrains Mono, and Space Grotesk. This is an environment limitation; no source/build defect was inferred. Prior Builder/Council clean builds remain the build proof of record.
- Local HTTP route status sweep: implemented routes returned `200`; only `/about`, `/privacy`, `/terms`, and the fabricated unknown service returned `404`.

## Findings and dispositions

- `CYV-IFA-005` remains open: production `metadataBase`/approved domain must be supplied before launch so static OG/Twitter URLs do not fall back to localhost.
- `CYV-IFA-006` remains open: Planner currently exposes a transparent client-mail interim, not the vision's server-side receipt and automatic confirmation email.
- `CYV-IFA-007` is resolved in the current source candidate: `src/app/scratch-favicon-check/route.tsx` is absent and `git status --short src` is clean. Keep the closure provisional until the next immutable snapshot/build confirms the same route table.
- No new product defect was established in this slice. Owner visual acceptance, domain/legal/founder facts, real external email delivery, cross-browser proof, and public deployment re-check remain bounded as documented debt/limits.

## Limits

The standard Auditor guard could not be created under managed permissions. The disposable copy was not a claim of a normal role-owned snapshot and must be cleaned by exact path. Public Render was not reachable from this sandbox. Physical keyboard-only and reduced-motion preference testing were not repeated; they remain unconfirmed rather than inferred from Playwright.

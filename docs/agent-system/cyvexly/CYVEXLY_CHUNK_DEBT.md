# Cyvexly Chunk Debt

Active-chunk (Chunk 1 — Foundation & Home) findings and reachable follow-ups
from global round 1. Not the full backlog — see `CYVEXLY_PROJECT_CHUNK_MAP.md`
for chunk-level direction.

## Open

1. **Full visual screenshot comparison against `mockups/01-home.png` is not
   yet done.** This scheduled Builder round ran unattended: `preview_start`
   with a dev-server name is blocked in unattended sessions ("nobody is
   present to approve the command"), and once the server was started manually
   with Bash, the Browser pane could not composite frames to produce a
   screenshot ("the Browser pane is not displayed"). Round 1 verified the
   real rendered result through DOM/content extraction (`get_page_text`,
   `read_page`), console/network inspection (no errors, all assets 200,
   fonts loaded), and real interaction (mobile-menu open/close, FAQ
   accordion open/close) at both desktop (1280×720) and mobile (375×812)
   viewports — but this is not a substitute for the required visual-plan/
   target comparison floor (§2.2). **Reopen condition:** the next Builder (or
   any attended session with a working Browser pane / screenshot tool)
   should open `http://localhost:5173`, screenshot desktop and mobile, and
   compare against `mockups/01-home.png` for hierarchy, density, and
   composition drift before this chunk is treated as visually converged.
2. **Other sitemap routes 404.** The header/footer link to `/services`,
   `/work`, `/pricing`, `/process`, `/about`, `/start`, `/contact`, `/faq`,
   `/privacy`, `/terms`, `/accessibility`. These are intentionally out of
   Chunk 1's coherent slice (Home + design-system foundation) and are Chunk
   2/3/4's job per the project map — not a defect to fix inside Chunk 1.
3. **Placeholder work-card imagery.** `selectedWork` in
   `src/lib/site-config.ts` uses CSS gradients, not real screenshots/crops,
   for the three concept projects (Aurora Spaces, Nexora Systems, Vellora
   Care) named in the vision and mockups. This is honest (no fabricated
   client work) but should be replaced with real designed crops once Chunk 2
   builds the actual case-study pages for those concepts.
4. **`/favicon.ico` and social-sharing image are still the Next.js
   defaults.** Vision §12 requires a final wordmark/favicon and
   social-sharing image before launch; out of scope for Chunk 1.

## Resolved this round

- Fixed `.codex/roles/scripts/Claim-BuilderLock.ps1` failing to parse for
  every invocation (not a lock-contention condition) because the file had no
  UTF-8 BOM and its embedded em-dash was misread; added a BOM. See
  `CYVEXLY_WATCH.md`.
- Fixed Next.js 16's `next dev` auto-appending a `<!-- BEGIN:nextjs-agent-rules
  -->` block into the Owner-authored root `AGENTS.md` on every dev-server
  start; removed the appended block and set `agentRules: false` in
  `next.config.ts`. See `CYVEXLY_WATCH.md`.
- Fixed `eslint.config.mjs` linting `.codex/runtime/**` (another role's
  disposable build/runtime output, not product source) by adding it to
  `globalIgnores`.

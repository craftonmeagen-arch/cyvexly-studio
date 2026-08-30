# Cyvexly Auditor Watch

- Route links can outpace route files: repeat a complete visible same-origin route probe and compare the build route table whenever nav/CTA links change. R3 confirms `/start` is live; `/about`, `/privacy`, and `/terms` remain bounded.
- Track source movement explicitly. R3's immutable runtime preceded an untracked `scratch-favicon-check` source route that was absent from the build/runtime; never assume reviewer scratch is cleaned until `git status` and the next route table agree.
- Production build output outranks dev metadata: static builds still fall back to `http://localhost:3000` for OG/Twitter URLs without `metadataBase`. Recheck only after an approved domain exists.
- Keep explicit no-index controls on previews; do not infer launch readiness from a passing build while domain/legal/Planner backend decisions remain open.
- Planner client-mail handoff is deliberately transparent but does not satisfy the vision's emailed confirmation copy; do not close `CYV-IFA-006` without a sandboxed server-side test.

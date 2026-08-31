# CYC-R13 build and accessibility probes

- `pnpm lint`: passed.
- `pnpm exec tsc --noEmit`: passed.
- `pnpm build`: passed; Next.js emitted the known `metadataBase` localhost
  warning and prerendered the expected static/SSG routes.
- Production route sweep at `1440×900` and `390×844`: all 15 targets exposed
  exactly one `main`, exactly one `h1`, and zero horizontal overflow. The
  nine content routes with image surfaces had zero missing image alt values.
- Production browser console after the FAQ/Contact/Home checks: no warnings
  or errors.

`/about`, `/privacy`, `/terms`, `/cookies`, and `/thank-you` remain the
documented intentional not-found or lifecycle/legal boundaries.

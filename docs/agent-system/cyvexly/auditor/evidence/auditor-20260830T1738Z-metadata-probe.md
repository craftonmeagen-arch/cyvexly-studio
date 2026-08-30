# IFA-2026-08-30-R2 metadata and indexing probe

- Round: `auditor-20260830T1738Z-002`
- Source candidate: `a8bf75b54dd4dd6e740129d0b295b0eebd13c6e5adf0148b4fbb36f3e97d2526`
- Method: ran the isolated runtime's production `pnpm build`, then inspected the generated static home HTML and the live `/robots.txt` response.

## Observed

- Build passed and generated `/opengraph-image`, `/robots.txt`, and all implemented content routes.
- Build emitted Next.js warning: `metadataBase property in metadata export is not set ... using "http://localhost:3000"`.
- Generated `.next/server/app/index.html` contains absolute `og:image` and `twitter:image` values beginning `http://localhost:3000/opengraph-image?...`.
- Live preview head correctly reports `robots: noindex, nofollow`; live `/robots.txt` returns `User-Agent: *` and `Disallow: /`.

The no-index default is safe for a preview, but the production social metadata cannot be deployed truthfully until the Owner confirms the real public domain and `metadataBase` is set. The generated image itself served as `image/png` and rendered in the live page metadata.

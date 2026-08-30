# Cyvexly App Debt

## Open

1. **About page needs Owner-supplied founder identity.** Vision §6.8 requires
   an honest first-person founder story, a real name, and a portrait/
   distinctive studio image. No Builder round has this information and must
   not invent a founder name, backstory, or photo to fill it — that would be
   fabricated identity content, not a reversible implementation detail. Route
   to the Owner: what name/pronoun should the site use, is there a real
   portrait or should a non-portrait studio image stand in for now, and what
   should the first-person story actually say about why Cyvexly exists.
2. **Public domain is undecided.** Vision §15 allows a temporary Render
   preview URL before the owned domain is connected. No Builder round should
   hardcode a production domain into metadata, sitemap, or canonical URLs
   until the Owner confirms one; when that happens, add `metadataBase` and
   `openGraph`/`twitter` image metadata (currently omitted rather than
   guessed).

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
3. **Privacy Policy and Website Terms need Owner-supplied jurisdiction
   facts before they can be honestly drafted.** Round 2 built
   `/accessibility` (jurisdiction-agnostic: a WCAG target and a contact
   route) but deliberately did not attempt `/privacy` or `/terms`. Vision
   §6.12 and §12 both note legal text "should be reviewed for the business
   location and customer markets before launch" — that implies the business
   location and primary customer markets need to be known facts, not
   Builder-guessed ones, before drafting text that references applicable
   consumer-protection or data-privacy regimes (e.g., which state/country
   law governs, whether GDPR/CCPA-style disclosures apply). Route to the
   Owner: what is Cyvexly's business location/registration, and which
   customer markets should the policies explicitly address? Do not invent a
   jurisdiction to unblock this — draft only once that's known, the same
   principle as the About page's founder-identity gap (item 1).

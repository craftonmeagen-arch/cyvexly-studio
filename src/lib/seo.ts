import type { Metadata } from "next";

export const SITE_URL = "https://cyvexly.com";
export const SITE_NAME = "Cyvexly Studio";

/**
 * Shared per-route metadata: canonical alternate plus Open Graph / Twitter
 * Card fields. `openGraph.images`/`twitter.images` are intentionally omitted
 * so Next's file-convention `opengraph-image.tsx` keeps supplying the image.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

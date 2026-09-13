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
  kind = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  kind?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const openGraph = kind === "article"
    ? {
        title,
        description,
        url,
        siteName: SITE_NAME,
        type: "article" as const,
        locale: "en_US",
        publishedTime,
        authors: [SITE_NAME],
      }
    : {
        title,
        description,
        url,
        siteName: SITE_NAME,
        type: "website" as const,
        locale: "en_US",
      };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

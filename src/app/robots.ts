import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      [isIndexable ? "allow" : "disallow"]: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

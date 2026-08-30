import type { MetadataRoute } from "next";

const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      [isIndexable ? "allow" : "disallow"]: "/",
    },
  };
}

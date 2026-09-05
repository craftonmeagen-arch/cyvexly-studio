import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Cyvexly",
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#eef4fa",
    theme_color: "#0f66e0",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/site-config";
import { serviceDetails } from "@/lib/service-details";

const baseUrl = "https://cyvexly.com";

const staticRoutes = [
  "",
  "/services",
  "/work",
  "/pricing",
  "/process",
  "/contact",
  "/faq",
  "/accessibility",
  "/start",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = Object.keys(serviceDetails).map((slug) => `/services/${slug}`);
  const workRoutes = Object.keys(caseStudies).map((slug) => `/work/${slug}`);

  const routes = [...staticRoutes, ...serviceRoutes, ...workRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

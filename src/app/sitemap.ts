import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/site-config";
import { serviceDetails } from "@/lib/service-details";
import { resourceGuides } from "@/lib/resource-guides";

const baseUrl = "https://cyvexly.com";

const staticRoutes = [
  "",
  "/services",
  "/work",
  "/pricing",
  "/indianapolis-web-design",
  "/resources",
  "/process",
  "/about",
  "/contact",
  "/faq",
  "/accessibility",
  "/privacy",
  "/terms",
  "/start",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = Object.keys(serviceDetails).map((slug) => `/services/${slug}`);
  const workRoutes = Object.keys(caseStudies).map((slug) => `/work/${slug}`);
  const resourceRoutes = Object.keys(resourceGuides).map((slug) => `/resources/${slug}`);

  const routes = [...staticRoutes, ...serviceRoutes, ...workRoutes, ...resourceRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

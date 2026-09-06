import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Pricing — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Pricing",
    "Clear starting packages for Cyvexly Studio websites, plus add-ons, care plans, and how payment works. Final quotes are shaped around your goals, content, pages, and features."
  );
}

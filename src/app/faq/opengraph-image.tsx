import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "FAQ — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "FAQ",
    "Answers to common questions about fit, pricing, timing, content, ownership, integrations, accessibility, care plans, and how to start a Cyvexly Studio project."
  );
}

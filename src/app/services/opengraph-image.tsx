import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Services — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Services",
    "Everything your business website needs, from the first page decision to the day it goes live: strategy, design, development, content, commerce, search, and ongoing care."
  );
}

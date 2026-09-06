import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Work — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Work",
    "Selected Cyvexly Studio work: business sites, redesigns, landing pages, and commerce projects. Concept work is clearly labeled."
  );
}

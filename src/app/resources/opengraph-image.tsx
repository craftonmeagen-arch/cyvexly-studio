import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Website planning guides — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Buyer resources",
    "Practical guidance for understanding website cost, project scope, launch decisions, and proposals.",
  );
}

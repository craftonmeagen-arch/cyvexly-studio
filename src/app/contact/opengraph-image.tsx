import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Contact — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Contact",
    "A short, low-friction way to reach Cyvexly Studio with a general question. For a full project brief, use the Project Planner instead."
  );
}

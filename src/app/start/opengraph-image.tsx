import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Project Planner — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Project Planner",
    "Tell us what you need. A calm, nine-step brief that shapes the right scope for your website — no payment required."
  );
}

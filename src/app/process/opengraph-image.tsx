import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Process — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "Our process",
    "How a Cyvexly Studio project works: five stages from brief and fit to launch and care, with clear inputs, deliverables, and approval points at every step."
  );
}

import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "About — Cyvexly Studio";

export default function OpengraphImage() {
  return renderRouteOgImage(
    "About",
    "Cyvexly Studio is an independent web design and development studio built to help United States business owners get a clearer, more useful website."
  );
}

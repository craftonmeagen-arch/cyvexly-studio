import { notFound } from "next/navigation";
import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";
import { isServiceSlug, serviceDetails } from "@/lib/service-details";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cyvexly Studio service detail";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }

  const service = serviceDetails[slug];
  return renderRouteOgImage(service.name, service.summary);
}

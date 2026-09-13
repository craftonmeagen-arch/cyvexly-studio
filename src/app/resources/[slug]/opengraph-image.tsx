import { notFound } from "next/navigation";
import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";
import { isResourceGuideSlug, resourceGuides } from "@/lib/resource-guides";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cyvexly Studio website planning guide";

export function generateStaticParams() {
  return Object.keys(resourceGuides).map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isResourceGuideSlug(slug)) notFound();
  const guide = resourceGuides[slug];
  return renderRouteOgImage(guide.shortTitle, guide.summary);
}

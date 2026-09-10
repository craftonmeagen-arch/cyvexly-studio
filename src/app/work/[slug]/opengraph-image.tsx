import { notFound } from "next/navigation";
import { ogImageContentType, ogImageSize, renderRouteOgImage } from "@/lib/og-image";
import { caseStudies } from "@/lib/site-config";

type CaseStudySlug = keyof typeof caseStudies;

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cyvexly Studio portfolio case study";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];
  if (!study) {
    notFound();
  }

  return renderRouteOgImage(study.name, study.challenge);
}

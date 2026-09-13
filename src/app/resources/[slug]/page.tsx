import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ResourceGuidePage } from "@/components/resource-guide-page";
import { isResourceGuideSlug, resourceGuides } from "@/lib/resource-guides";
import { buildPageMetadata } from "@/lib/seo";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return Object.keys(resourceGuides).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isResourceGuideSlug(slug)) return {};
  const guide = resourceGuides[slug];
  return buildPageMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/resources/${guide.slug}`,
    kind: "article",
    publishedTime: guide.published,
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isResourceGuideSlug(slug)) notFound();
  const guide = resourceGuides[slug];
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: guide.shortTitle, path: `/resources/${guide.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(guide)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <ResourceGuidePage guide={guide} />
      </main>
      <SiteFooter />
    </>
  );
}

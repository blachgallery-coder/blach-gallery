import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleView } from "@/components/blog-article-view";
import { fluxusArticles, getFluxusArticle } from "@/lib/blog-fluxus";

export const dynamicParams = false;

export function generateStaticParams() {
  return fluxusArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getFluxusArticle(params.slug);
  if (!a) return {};
  const url = `/en/blog/${a.slug}`;
  return {
    title: a.en.title,
    description: a.en.description,
    alternates: {
      canonical: url,
      languages: { "fr-FR": `/blog/${a.slug}`, en: url, "x-default": `/blog/${a.slug}` }
    },
    openGraph: { type: "article", locale: "en_GB", siteName: "BLACH GALLERY", url, title: a.en.title, description: a.en.description }
  };
}

export default function FluxusArticleEnPage({ params }: { params: { slug: string } }) {
  const a = getFluxusArticle(params.slug);
  if (!a) notFound();
  const article = { ...a, ...a.en, slug: a.slug, publishedAt: a.publishedAt, updatedAt: a.updatedAt };
  return <BlogArticleView article={article} lang="en" altHref={`/blog/${a.slug}`} />;
}

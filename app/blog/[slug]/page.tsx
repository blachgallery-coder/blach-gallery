import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleView } from "@/components/blog-article-view";
import { fluxusArticles, getFluxusArticle } from "@/lib/blog-fluxus";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return fluxusArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getFluxusArticle(params.slug);
  if (!a) return {};
  const meta = pageMeta(`/blog/${a.slug}`, a.title, a.description);
  return {
    title: a.title,
    description: a.description,
    ...meta,
    alternates: {
      canonical: `/blog/${a.slug}`,
      languages: { "fr-FR": `/blog/${a.slug}`, en: `/en/blog/${a.slug}`, "x-default": `/blog/${a.slug}` }
    }
  };
}

export default function FluxusArticlePage({ params }: { params: { slug: string } }) {
  const a = getFluxusArticle(params.slug);
  if (!a) notFound();
  return <BlogArticleView article={a} altHref={`/en/blog/${a.slug}`} />;
}

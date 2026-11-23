import type { Metadata } from "next";
import { BlogArticleView } from "@/components/blog-article-view";
import { getBlogArticle } from "@/lib/blog-articles";
import { pageMeta } from "@/lib/seo";

const article = getBlogArticle("blach-fluxus-moderne");

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  ...pageMeta("/blog/blach-fluxus-moderne", article.title, article.description)
};

export default function BlachFluxusModernePage() {
  return <BlogArticleView article={article} />;
}

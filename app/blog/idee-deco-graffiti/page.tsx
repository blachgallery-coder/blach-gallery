import type { Metadata } from "next";
import { BlogArticleView } from "@/components/blog-article-view";
import { getBlogArticle } from "@/lib/blog-articles";
import { pageMeta } from "@/lib/seo";

const article = getBlogArticle("idee-deco-graffiti");

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  ...pageMeta("/blog/idee-deco-graffiti", article.title, article.description)
};

export default function IdeeDecoGraffitiPage() {
  return <BlogArticleView article={article} />;
}

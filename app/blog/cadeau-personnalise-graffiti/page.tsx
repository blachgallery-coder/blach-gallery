import type { Metadata } from "next";
import { BlogArticleView } from "@/components/blog-article-view";
import { getBlogArticle } from "@/lib/blog-articles";
import { pageMeta } from "@/lib/seo";

const article = getBlogArticle("cadeau-personnalise-graffiti");

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  ...pageMeta("/blog/cadeau-personnalise-graffiti", article.title, article.description)
};

export default function CadeauPersonnaliseGraffitiPage() {
  return <BlogArticleView article={article} />;
}

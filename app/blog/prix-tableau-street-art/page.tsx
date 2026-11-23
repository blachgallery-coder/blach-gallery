import type { Metadata } from "next";
import { BlogArticleView } from "@/components/blog-article-view";
import { getBlogArticle } from "@/lib/blog-articles";
import { pageMeta } from "@/lib/seo";

const article = getBlogArticle("prix-tableau-street-art");

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  ...pageMeta("/blog/prix-tableau-street-art", article.title, article.description)
};

export default function PrixTableauStreetArtPage() {
  return <BlogArticleView article={article} />;
}

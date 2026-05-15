import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog street art, déco graffiti et conseils d'achat",
  description:
    "Articles BLACH GALLERY sur le prix d'un tableau street art, les idées déco graffiti et les cadeaux personnalisés."
};

export default function BlogPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">Conseils, inspiration et intention d'achat</h1>
        <p className="page-intro">
          Le blog soutient les requêtes informationnelles et alimente le maillage interne vers le shop et les pages
          thématiques.
        </p>
      </div>
      <div className="triple-grid">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <p className="eyebrow">Article</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

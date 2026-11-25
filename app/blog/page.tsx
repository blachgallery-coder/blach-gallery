import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog Fluxus — réflexion artistique de BLACH®",
  description: "Le Blog Fluxus de BLACH GALLERY : réflexion artistique, street art, humour Fluxus et coulisses de BLACH® (Maxime Blachère), artiste à Dardilly près de Lyon.",
  ...pageMeta("/blog", "Blog Fluxus — réflexion artistique de BLACH®", "Le Blog Fluxus de BLACH GALLERY : réflexion artistique, street art, humour Fluxus et coulisses de BLACH® (Maxime Blachère), artiste à Dardilly près de Lyon.")
};

export default function BlogPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog Fluxus</p>
        <h1 className="page-title">Blog Fluxus — réflexion artistique</h1>
        <p className="page-intro">
          Coulisses, humour et réflexion artistique de BLACH® (Maxime Blachère) et du collectif BLACH GALLERY : street
          art, graffiti, esprit Fluxus et conseils pour vivre avec l&apos;art.
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

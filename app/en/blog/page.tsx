import type { Metadata } from "next";
import Link from "next/link";
import { fluxusArticles } from "@/lib/blog-fluxus";

const TITLE = "Fluxus Blog — artistic thoughts by BLACH®";
const DESCRIPTION =
  "The BLACH GALLERY Fluxus Blog: artistic thoughts, street art, Fluxus humour and behind the scenes with BLACH® (Maxime Blachère), artist in Dardilly near Lyon, France.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/en/blog", languages: { "fr-FR": "/blog", en: "/en/blog", "x-default": "/blog" } }
};

export default function EnglishBlogPage() {
  return (
    <section className="page-shell container" lang="en">
      <div>
        <p className="eyebrow">Fluxus Blog</p>
        <h1 className="page-title">Fluxus Blog — artistic thoughts</h1>
        <p className="page-intro">
          Behind the scenes, humour and artistic thinking from BLACH® (Maxime Blachère) and the BLACH GALLERY
          collective: street art, graffiti and the Fluxus spirit. <Link href="/blog">Version française</Link>
        </p>
      </div>
      <div className="triple-grid">
        {fluxusArticles.map((a) => (
          <Link key={a.slug} href={`/en/blog/${a.slug}`} className="blog-card">
            <p className="eyebrow">Fluxus</p>
            <h2>{a.en.title}</h2>
            <p>{a.en.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

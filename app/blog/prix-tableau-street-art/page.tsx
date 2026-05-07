import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((item) => item.slug === "prix-tableau-street-art")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt
};

export default function PrixTableauStreetArtPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-intro">{post.content}</p>
        <p className="page-intro">
          Explorez ensuite le <Link href="/shop">shop</Link> ou la collection{" "}
          <Link href="/theme/street-art-lyon">street art Lyon</Link>.
        </p>
      </div>
    </section>
  );
}

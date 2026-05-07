import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((item) => item.slug === "idee-deco-graffiti")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt
};

export default function IdeeDecoGraffitiPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-intro">{post.content}</p>
        <p className="page-intro">
          Pour aller plus loin, découvrez les <Link href="/artistes">artistes</Link> et la page{" "}
          <Link href="/theme/pop-art">pop art</Link>.
        </p>
      </div>
    </section>
  );
}

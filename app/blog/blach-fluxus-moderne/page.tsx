import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((item) => item.slug === "blach-fluxus-moderne")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt
};

export default function BlachFluxusModernePage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-intro">{post.content}</p>
        <p className="page-intro">
          Découvrez aussi les <Link href="/artistes-du-collectif">artistes du collectif</Link>, le <Link href="/shop">shop</Link> et les <Link href="/encheres-de-la-semaine">enchères de la semaine</Link>.
        </p>
      </div>
    </section>
  );
}

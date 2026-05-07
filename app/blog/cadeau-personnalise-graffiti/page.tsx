import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((item) => item.slug === "cadeau-personnalise-graffiti")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt
};

export default function CadeauPersonnaliseGraffitiPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-intro">{post.content}</p>
        <p className="page-intro">
          Ce besoin peut aussi déboucher sur des <Link href="/performances-artistiques">performances artistiques</Link>{" "}
          ou une sélection d'oeuvres dans le <Link href="/shop">shop</Link>.
        </p>
      </div>
    </section>
  );
}

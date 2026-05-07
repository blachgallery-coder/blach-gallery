import Image from "next/image";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="product-copy">
        <p className="product-meta">
          {product.artist} • {product.style}
        </p>
        <h3>{product.title}</h3>
        <p>{product.format}</p>
        <strong>{product.price.toLocaleString("fr-FR")} €</strong>
        <p>{product.seoDescription}</p>
      </div>
    </article>
  );
}

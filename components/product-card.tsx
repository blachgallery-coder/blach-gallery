import Image from "next/image";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const hasMeta = Boolean(product.artist || product.style);
  const hasFormat = Boolean(product.format);
  const hasFeatures = Boolean(product.features?.length);
  const hasShipping = Boolean(product.shipping?.length);
  const hasCta = Boolean(product.ctaLabel && product.ctaHref);

  return (
    <article className="product-card">
      <div className="product-media">
        <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="product-copy">
        {hasMeta ? <p className="product-meta">{[product.artist, product.style].filter(Boolean).join(" • ")}</p> : null}
        <h3>{product.title}</h3>
        {product.subtitle ? <p className="product-subtitle">{product.subtitle}</p> : null}
        {hasFormat ? <p>{product.format}</p> : null}
        <strong>{product.price.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</strong>
        <p>{product.seoDescription}</p>

        {hasFeatures ? (
          <div className="product-section">
            <h4>Caractéristiques</h4>
            <ul className="product-list">
              {product.features?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasShipping ? (
          <div className="product-section">
            <h4>Livraison</h4>
            <ul className="product-list">
              {product.shipping?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasCta ? (
          <a href={product.ctaHref} className="button product-cta" target="_blank" rel="noreferrer">
            {product.ctaLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}

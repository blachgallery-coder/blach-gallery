import { ArtworkImage } from "@/components/artwork-image";
import { formatPrice, productUrl, type Artwork } from "@/lib/gallery";

export function ArtworkCard({
  artwork,
  sizes,
  lang = "fr"
}: {
  artwork: Artwork;
  sizes?: string;
  lang?: "fr" | "en";
}) {
  const href = lang === "en" ? productUrl(artwork.handle).replace("/products/", "/en/products/") : productUrl(artwork.handle);
  const typeLabel = lang === "en" ? (artwork.type === "Original" ? "Original" : "Limited edition") : artwork.type;
  return (
    <a className="artwork" href={href} target="_blank" rel="noopener noreferrer">
      <div className="artwork-frame">
        <ArtworkImage
          src={artwork.image}
          alt={`${artwork.title} — ${artwork.artist}`}
          width={artwork.width}
          height={artwork.height}
          sizes={sizes ?? "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"}
        />
      </div>
      <div className="artwork-caption">
        <p className="artwork-artist">{artwork.artist}</p>
        <h3 className="artwork-title">{artwork.title}</h3>
        <p className="artwork-meta">
          <span>{typeLabel}</span>
          <span>{formatPrice(artwork.price)}</span>
        </p>
      </div>
    </a>
  );
}

export function ArtworkGrid({ items, lang = "fr" }: { items: Artwork[]; lang?: "fr" | "en" }) {
  return (
    <div className="artwork-grid">
      {items.map((artwork) => (
        <ArtworkCard key={artwork.handle} artwork={artwork} lang={lang} />
      ))}
    </div>
  );
}

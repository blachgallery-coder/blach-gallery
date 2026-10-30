import { ArtworkImage } from "@/components/artwork-image";
import { formatPrice, productUrl, type Artwork } from "@/lib/gallery";

export function ArtworkCard({ artwork, sizes }: { artwork: Artwork; sizes?: string }) {
  return (
    <a className="artwork" href={productUrl(artwork.handle)} target="_blank" rel="noopener noreferrer">
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
          <span>{artwork.type}</span>
          <span>{formatPrice(artwork.price)}</span>
        </p>
      </div>
    </a>
  );
}

export function ArtworkGrid({ items }: { items: Artwork[] }) {
  return (
    <div className="artwork-grid">
      {items.map((artwork) => (
        <ArtworkCard key={artwork.handle} artwork={artwork} />
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { FeaturedArtwork } from "@/lib/collective";

export function ArtworkMasonry({ items }: { items: FeaturedArtwork[] }) {
  return (
    <div className="artwork-masonry">
      {items.map((item) => (
        <Link key={`${item.artist}-${item.title}`} href={item.href} className={`artwork-tile artwork-tile-${item.size}`}>
          <div className="artwork-tile-media">
            <Image src={item.image} alt={`${item.title} - ${item.artist}`} fill sizes="(max-width: 960px) 100vw, 33vw" />
          </div>
          <div className="artwork-tile-overlay">
            <p className="artwork-tile-note">{item.note}</p>
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

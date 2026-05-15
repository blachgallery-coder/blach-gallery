import Image from "next/image";
import type { CollectiveArtist } from "@/lib/collective";

function ArtistVisual({ artist }: { artist: CollectiveArtist }) {
  if (artist.image) {
    return (
      <div className="collective-visual has-image">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          sizes="(max-width: 960px) 100vw, 30vw"
          style={{ objectFit: artist.imageMode === "contain" ? "contain" : "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      className="collective-visual collective-visual-placeholder"
      style={{
        background: `linear-gradient(135deg, ${artist.palette[0]}, ${artist.palette[1]})`
      }}
    >
      <span>{artist.name.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}

export function CollectiveShowcase({ artists }: { artists: CollectiveArtist[] }) {
  return (
    <div className="collective-grid">
      {artists.map((artist) => (
        <article key={artist.slug} className="collective-card">
          <ArtistVisual artist={artist} />
          <div className="collective-card-copy">
            <p className="eyebrow">{artist.role}</p>
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <div className="collective-meta">
              <span>{artist.style}</span>
              <span>{artist.artwork}</span>
              {artist.city ? <span>{artist.city}</span> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

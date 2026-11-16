import { ArtworkImage } from "@/components/artwork-image";
import type { CollectiveArtist } from "@/lib/collective";
import { productUrl } from "@/lib/gallery";
import { RevealImage } from "@/components/reveal-image";

export function CollectiveShowcase({ artists }: { artists: CollectiveArtist[] }) {
  return (
    <div className="artists">
      {artists.map((artist) => (
        <article key={artist.slug} className="artist" id={artist.slug}>
          <div className="artist-text">
            <p className="kicker">{artist.role}</p>
            <h2>{artist.name}</h2>
            {artist.bio ? artist.bio.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : null}
            {artist.style || artist.city ? (
              <p className="muted">{[artist.style, artist.city].filter(Boolean).join(" — ")}</p>
            ) : null}
          </div>
          {artist.works?.length || artist.gallery?.length ? (
            <div className="artist-works">
              {artist.gallery?.map((img) => (
                <RevealImage key={img.src} {...img} />
              ))}
              {artist.works?.map((work) => (
                <a key={work.handle} href={productUrl(work.handle)} target="_blank" rel="noopener noreferrer">
                  <ArtworkImage
                    src={work.image}
                    alt={`${work.title} — ${work.artist}`}
                    width={work.width}
                    height={work.height}
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                  <span>{work.title}</span>
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

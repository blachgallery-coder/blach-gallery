import type { Metadata } from "next";
import Image from "next/image";
import { artists, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artistes street art et art moderne",
  description:
    "Découvrez les artistes de BLACH GALLERY, leurs bios courtes et leurs oeuvres disponibles en galerie en ligne."
};

export default function ArtistsPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Collectif</p>
        <h1 className="page-title">Les artistes BLACH GALLERY</h1>
        <p className="page-intro">
          Une page claire pour valoriser les signatures, rassurer les visiteurs et faciliter la navigation entre
          artistes et oeuvres.
        </p>
      </div>
      <div className="artist-grid">
        {artists.map((artist) => (
          <article key={artist.slug} className="artist-card">
            <div className="artist-visual">
              <Image src={artist.image} alt={artist.name} fill sizes="(max-width: 960px) 100vw, 30vw" />
            </div>
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <p>
              <strong>Spécialités :</strong> {artist.specialties.join(", ")}
            </p>
            <p>
              <strong>Oeuvres :</strong>{" "}
              {products
                .filter((product) => product.artist === artist.name)
                .map((product) => product.title)
                .join(" • ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

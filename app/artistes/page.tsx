import type { Metadata } from "next";
import { CollectiveShowcase } from "@/components/collective-showcase";
import { collectiveArtists } from "@/lib/collective";

export const metadata: Metadata = {
  title: "Artistes street art et art moderne",
  description:
    "Explorez les profils artistes de BLACH GALLERY entre street art, pop culture, peinture contemporaine et collectifs visuels."
};

export default function ArtistsPage() {
  return (
    <section className="page-shell container collective-page-shell">
      <div>
        <p className="eyebrow">Galerie</p>
        <h1 className="page-title">Découvrir le collectif</h1>
        <p className="page-intro">
          Une lecture plus éditoriale de la scène BLACH GALLERY, pensée comme une vraie page collectif avec artistes,
          styles et présences visuelles.
        </p>
      </div>
      <CollectiveShowcase artists={collectiveArtists} />
    </section>
  );
}

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
        <h1 className="page-title">Decouvrir le collectif</h1>
        <p className="page-intro">
          Une lecture plus editoriale de la scene BLACH GALLERY, pensee comme une vraie page collectif avec artistes,
          styles et presences visuelles.
        </p>
      </div>
      <CollectiveShowcase artists={collectiveArtists} />
    </section>
  );
}

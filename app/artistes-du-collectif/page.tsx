import type { Metadata } from "next";
import { CollectiveShowcase } from "@/components/collective-showcase";
import { collectiveArtists } from "@/lib/collective";

export const metadata: Metadata = {
  title: "Collectif artistique street art contemporain",
  description:
    "Découvrez le collectif BLACH GALLERY : BLACH, La Carotte, ArtHM, Michel Donier, Jacques Berger, Alain Méraud et Emric Mer."
};

export default function ArtistesDuCollectifPage() {
  return (
    <section className="page-shell container collective-page-shell">
      <div>
        <p className="eyebrow">Collectif</p>
        <h1 className="page-title">Les artistes de la BLACH GALLERY</h1>
        <p className="page-intro">
          Une sélection de profils, d'œuvres et d'énergies qui compose aujourd'hui l'identité artistique de la
          galerie entre street culture, peinture contemporaine et gestes plus sensibles.
        </p>
      </div>
      <CollectiveShowcase artists={collectiveArtists} />
    </section>
  );
}

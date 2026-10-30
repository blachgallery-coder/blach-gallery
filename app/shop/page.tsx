import type { Metadata } from "next";
import { ArtworkGrid } from "@/components/artwork-card";
import { SHOP_URL, artworks } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Les œuvres — originaux, sculptures et éditions limitées",
  description:
    "Œuvres originales, sculptures et éditions limitées des artistes de BLACH GALLERY (BLACH®, Bonté, La Carotte, Art HM), disponibles sur le shop.",
  alternates: { canonical: "/shop" }
};

const sorted = [...artworks].sort((a, b) => b.price - a.price);

export default function ShopPage() {
  return (
    <section className="page container">
      <header className="page-head">
        <p className="kicker">Les œuvres</p>
        <h1>Œuvres disponibles</h1>
        <p className="lead">
          Originaux, sculptures et éditions limitées. Chaque œuvre renvoie à sa fiche sur le shop officiel.
        </p>
        <div className="actions">
          <a href={SHOP_URL} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
            Accéder au shop
          </a>
        </div>
      </header>
      <ArtworkGrid items={sorted} />
    </section>
  );
}

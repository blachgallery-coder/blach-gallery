import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ShopFilters } from "@/components/shop-filters";
import { officialShopUrl } from "@/lib/collective";
import { products } from "@/lib/data";


export const metadata: Metadata = {
  title: "Shop tableaux street art et art moderne",
  description:
    "Achetez des tableaux classés par thématique avec filtres par prix, style, artiste et format sur BLACH GALLERY."
};

export default function ShopPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Le coeur du business</p>
        <h1 className="page-title">Shop BLACH GALLERY</h1>
        <p className="page-intro">
          Le shop centralise les tableaux par thématique et simplifie l'achat avec des filtres utiles, une
          lecture rapide des prix et des fiches optimisées SEO.
        </p>
        <div className="hero-actions">
          <a href={officialShopUrl} className="button" target="_blank" rel="noreferrer">
            SHOP EN LIGNE
          </a>
        </div>
      </div>
      <SectionHeading
        title="Trouvez la bonne oeuvre selon votre budget, votre style et votre artiste."
        description="Le moteur de filtres est conçu pour les visiteurs à intention forte, sur desktop comme sur mobile."
      />
      <ShopFilters products={products} />
    </section>
  );
}


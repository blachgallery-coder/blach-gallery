import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

const catawikiUrl = "https://www.catawiki.com/fr/u/7440221-blachgallery";

const auctionHighlights = [
  {
    title: "Éditions limitées",
    text: "Chaque semaine, une sélection d'éditions signées et numérotées, mises aux enchères sans prix de réserve."
  },
  {
    title: "Pièces uniques",
    text: "Certaines semaines, retrouvez aussi des œuvres originales uniques signées Maxime Blachère."
  },
  {
    title: "Bonnes affaires",
    text: "L'occasion de collectionner une œuvre à prix d'enchère et, parfois, de faire une très belle affaire."
  }
];

export const metadata: Metadata = {
  title: "Enchères de la semaine street art",
  description: "Suivez les enchères de la semaine et les ventes en cours liées à BLACH GALLERY sur Catawiki."
};

export default function EncheresDeLaSemainePage() {
  return (
    <ContentPageShell
      eyebrow="Ventes en direct sur Catawiki"
      title="Enchères de la semaine"
      description="Chaque semaine, je propose sur Catawiki, leader européen des enchères en ligne, une sélection de mes éditions limitées, signées et numérotées, mises aux enchères sans prix de réserve."
    >
      <div className="split-grid">
        {auctionHighlights.map((item) => (
          <div key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="info-card">
        <p className="eyebrow">Rendez-vous hebdomadaire</p>
        <h2>Découvrez les ventes BLACH GALLERY et enchérissez sur Catawiki</h2>
        <p>
          Retrouvez chaque semaine mes dernières mises en vente et suivez les enchères en direct, sans prix de
          réserve.
        </p>
        <div className="hero-actions">
          <a href={catawikiUrl} className="button" target="_blank" rel="noreferrer">
            👉 Voir les enchères sur Catawiki
          </a>
        </div>
      </div>
    </ContentPageShell>
  );
}

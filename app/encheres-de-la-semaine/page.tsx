import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

const catawikiAuctionsUrl = "https://www.catawiki.com/fr/u/7440221-blachgallery";

export const metadata: Metadata = {
  title: "Encheres de la semaine street art",
  description: "Selection hebdomadaire des encheres BLACH GALLERY avec redirection vers les ventes en cours."
};

export default function EncheresDeLaSemainePage() {
  return (
    <ContentPageShell
      eyebrow="Ventes en cours"
      title="Encheres de la semaine"
      description="Cette page sert de hub simple pour pousser les ventes Catawiki, mettre en avant les pieces du moment et renvoyer rapidement vers les encheres en cours."
    >
      <div className="hero-actions">
        <a href={catawikiAuctionsUrl} className="button" target="_blank" rel="noreferrer">
          VOIR LES ENCHERES
        </a>
      </div>
    </ContentPageShell>
  );
}

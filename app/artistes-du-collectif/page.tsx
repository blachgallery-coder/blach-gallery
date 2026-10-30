import type { Metadata } from "next";
import { CollectiveShowcase } from "@/components/collective-showcase";
import { collectiveArtists } from "@/lib/collective";

export const metadata: Metadata = {
  title: "Le collectif — artistes lyonnais et régionaux",
  description:
    "Le collectif BLACH GALLERY : BLACH®, Bonté, La Carotte, Art HM, Pascal Nègre et des peintres de la région lyonnaise, à Dardilly.",
  alternates: { canonical: "/artistes-du-collectif" }
};

export default function ArtistesDuCollectifPage() {
  return (
    <section className="page container">
      <header className="page-head">
        <p className="kicker">Le collectif</p>
        <h1>Un collectif d&apos;artistes indépendants</h1>
        <p className="lead">
          Fondée par Maxime Blachère (BLACH®), BLACH GALLERY rassemble des artistes locaux autour d&apos;une vision libre,
          contemporaine et accessible de l&apos;art. Peinture, street art, sculpture, photographie et esprit Fluxus se
          rencontrent dans une galerie indépendante à Dardilly, aux portes de Lyon.
        </p>
      </header>
      <CollectiveShowcase artists={collectiveArtists} />
    </section>
  );
}

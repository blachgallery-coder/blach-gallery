import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CollectiveShowcase } from "@/components/collective-showcase";
import { collectiveArtists } from "@/lib/collective";
import { artists, artistPath } from "@/lib/artists";
import { catalogCounts } from "@/lib/artist-catalog";

export const metadata: Metadata = {
  title: "Le collectif — artistes lyonnais et régionaux",
  description: "Le collectif BLACH GALLERY : BLACH®, Bonté, La Carotte, Art HM, Pascal Nègre et des peintres de la région lyonnaise, à Dardilly.",
  ...pageMeta("/artistes-du-collectif", "Le collectif — artistes lyonnais et régionaux", "Le collectif BLACH GALLERY : BLACH®, Bonté, La Carotte, Art HM, Pascal Nègre et des peintres de la région lyonnaise, à Dardilly.", "/en/artists")
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
      <section className="section" aria-labelledby="invites-titre">
        <p className="kicker">Artistes invités</p>
        <h2 id="invites-titre">Street art international à la galerie</h2>
        <ul className="triple-grid" style={{ listStyle: "none", padding: 0 }}>
          {artists
            .filter((a) => a.group === "invite")
            .map((a) => (
              <li key={a.slug} className="info-card">
                <p className="kicker">{a.origin}</p>
                <h3>
                  <a href={artistPath(a.slug)}>{a.name}</a>
                </h3>
                <p>{a.short}</p>
                <a className="text-link" href={artistPath(a.slug)}>
                  {catalogCounts[a.slug] ? `${catalogCounts[a.slug]} œuvre${catalogCounts[a.slug] > 1 ? "s" : ""} à vendre →` : "Découvrir →"}
                </a>
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
}

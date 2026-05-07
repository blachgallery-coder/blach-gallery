import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performances artistiques live pour entreprises et événements",
  description:
    "Performances artistiques graffiti et live painting par BLACH GALLERY pour entreprises, lieux premium et événements privés."
};

export default function PerformancesPage() {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Service signature</p>
        <h1 className="page-title">Performances artistiques</h1>
        <p className="page-intro">
          BLACH GALLERY propose des performances artistiques live pour entreprises, marques, lancements de
          produit, hospitalité haut de gamme et événements privés. L'objectif est de transformer une animation
          en expérience mémorable, photogénique et partageable.
        </p>
      </div>
      <div className="service-grid">
        <article className="service-card">
          <p className="eyebrow">Pour les entreprises</p>
          <h2>Un contenu événementiel à forte valeur perçue</h2>
          <p>
            Live painting, personnalisation d'objet, activation de marque et scénographie créative pour vos
            temps forts corporate.
          </p>
        </article>
        <article className="service-card">
          <p className="eyebrow">Pour les lieux premium</p>
          <h2>Une présence artistique qui attire le regard</h2>
          <p>
            Hôtels, restaurants, showrooms et espaces réceptifs peuvent intégrer une performance pour créer de
            l'émotion et du contenu social media.
          </p>
        </article>
        <article className="service-card">
          <p className="eyebrow">Pour les particuliers</p>
          <h2>Une intervention sur mesure pour marquer un moment</h2>
          <p>
            Nous accompagnons aussi des demandes privées à forte attente esthétique, avec cadrage du format,
            du lieu et du rendu final.
          </p>
        </article>
      </div>
      <div className="info-card">
        <p className="eyebrow">Maillage interne</p>
        <h2>Prolongez l'expérience côté galerie.</h2>
        <p>
          Les performances renvoient naturellement vers le <Link href="/shop">shop</Link>, les{" "}
          <Link href="/artistes">artistes</Link> et les pages thématiques pour soutenir la conversion.
        </p>
      </div>
    </section>
  );
}

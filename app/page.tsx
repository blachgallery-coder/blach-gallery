import Link from "next/link";
import { ArtworkMasonry } from "@/components/artwork-masonry";
import { NewsBoard } from "@/components/news-board";
import { featuredArtworks, homepageActions, newsEvents } from "@/lib/collective";
import { themePages } from "@/lib/data";

function HomeActionLink({
  href,
  label,
  tone,
  external
}: {
  href: string;
  label: string;
  tone: "orange" | "pink" | "yellow" | "green" | "blue";
  external?: boolean;
}) {
  const className = `hero-pop-button hero-pop-button-${tone}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="section section-tight">
        <div className="container" style={{ textAlign: "center" }}>
          <p>BLACH GALLERY prépare la rentrée. Réouverture le mercredi 26 août 2026.</p>
        </div>
      </section>

      <section className="hero hero-premium">
        <div className="container hero-grid hero-grid-premium">
          <div className="hero-card hero-card-premium">
            <p className="eyebrow">Collectif artistique contemporain</p>
            <h1>Bienvenue a la BLACH GALLERY</h1>
            <p className="hero-lead">La BLACH GALLERY est un collectif d'artistes fonde par Maxime Blachere.</p>
            <p>
              Une galerie en ligne vivante, pop et internationale, pensee pour faire dialoguer street art,
              culture visuelle, gestes libres et signatures singulieres dans un meme accrochage.
            </p>
            <div className="hero-actions hero-actions-rainbow">
              {homepageActions.map((action) => (
                <HomeActionLink key={action.label} {...action} />
              ))}
            </div>
          </div>
          <div className="hero-stage-card">
            <div className="hero-stage-copy">
              <p className="eyebrow">Edition signature</p>
              <h2>Lyon feat Carotte XL</h2>
              <p>
                Le point d'ancrage du collectif : un format manifeste, urbain, colore et frontal qui donne tout de
                suite le ton BLACH GALLERY.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading section-heading-compact">
            <p className="eyebrow">Selection visuelle</p>
            <h2>Voici quelques-uns de nos bangers</h2>
          </div>
          <ArtworkMasonry items={featuredArtworks} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container home-editorial-grid">
          <Link href="/artistes-du-collectif" className="editorial-card editorial-card-collectif">
            <p className="eyebrow">Collectif</p>
            <h3>Des artistes, des styles, une scene en mouvement.</h3>
            <p>Entrez dans la BLACH GALLERY comme dans un accrochage vivant, avec des profils plus humains et plus incarnes.</p>
          </Link>
          <Link href="/fresque-graffiti" className="editorial-card editorial-card-fresque">
            <p className="eyebrow">Mur & espace</p>
            <h3>Fresques murales, activations visuelles et projets sur mesure.</h3>
            <p>Pour les lieux qui veulent une presence artistique forte, du geste spontane au grand format premium.</p>
          </Link>
          <Link href="/blog-fluxus" className="editorial-card editorial-card-news">
            <p className="eyebrow">News</p>
            <h3>Expos, vernissages, performances live et carnet de bord.</h3>
            <p>Une porte d'entree editoriale pour suivre l'energie du collectif et ses prochains rendez-vous.</p>
          </Link>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading section-heading-compact">
            <p className="eyebrow">News & evenements</p>
            <h2>La galerie bouge aussi hors cadre.</h2>
          </div>
          <NewsBoard events={newsEvents.slice(0, 3)} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-compact">
            <p className="eyebrow">Themes</p>
            <h2>Univers street, pop et contemporain pour continuer la visite.</h2>
          </div>
          <div className="triple-grid">
            {themePages.map((theme) => (
              <Link key={theme.slug} href={`/theme/${theme.slug}`} className="info-card info-card-vivid">
                <p className="eyebrow">{theme.label}</p>
                <h3>{theme.h1}</h3>
                <p>{theme.intro.slice(0, 145)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
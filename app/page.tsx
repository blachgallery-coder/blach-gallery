import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { products, themePages } from "@/lib/data";

const etsyShopUrl = "https://artofblach.patternbyetsy.com/shop";
const catawikiAuctionsUrl = "https://www.catawiki.com/fr/u/7440221-blachgallery";

export default function HomePage() {
  const bestSellers = products.filter((product) => product.isBestSeller);
  const newProducts = products.filter((product) => product.isNew);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <p className="eyebrow">Galerie en ligne multi-artistes</p>
            <h1>Des tableaux street art conçus pour attirer l'oeil et déclencher l'achat.</h1>
            <p>
              BLACH GALLERY réunit Maxime Blachere et des artistes invités autour d'une collection pensée
              pour la décoration premium, le cadeau marquant et l'achat rapide sur mobile.
            </p>
            <div className="hero-actions">
              <a href={etsyShopUrl} className="button" target="_blank" rel="noreferrer">
                SHOP EN LIGNE
              </a>
              <a href={catawikiAuctionsUrl} className="button-secondary" target="_blank" rel="noreferrer">
                VOIR LES ENCHERES
              </a>
              <Link href="/artistes" className="button-secondary">
                Découvrir les artistes
              </Link>
            </div>
            <div className="tag-row">
              <span>Street art</span>
              <span>Pop art</span>
              <span>Manga</span>
              <span>Art moderne</span>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/home/street-art-blach-gallery.webp"
              alt="tableau street art moderne artiste BLACH Lyon"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Catégories principales"
            title="Trois portes d'entrée pour convertir plus vite."
            description="La homepage guide immédiatement le visiteur vers la boutique, les enchères et les demandes de fresques."
          />
          <div className="split-grid">
            <a href={etsyShopUrl} className="category-card" target="_blank" rel="noreferrer">
              <p className="eyebrow">1. Tableaux street art</p>
              <h3>SHOP EN LIGNE</h3>
              <p>Accédez directement à la boutique Etsy pour voir les tableaux disponibles.</p>
            </a>
            <a href={catawikiAuctionsUrl} className="category-card" target="_blank" rel="noreferrer">
              <p className="eyebrow">2. Enchères</p>
              <h3>VOIR LES ENCHERES</h3>
              <p>Retrouvez les ventes Catawiki en cours et les nouvelles pièces mises aux enchères.</p>
            </a>
            <Link href="/fresque-graffiti" className="category-card">
              <p className="eyebrow">3. Fresques</p>
              <h3>DEMANDER UN DEVIS</h3>
              <p>Explorez l'offre fresque graffiti pour les particuliers, entreprises et projets sur mesure.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Best sellers"
            title="Les oeuvres qui performent déjà."
            description="Une sélection immédiatement rassurante pour les visiteurs prêts à acheter."
          />
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Nouveautés"
            title="Les dernières pièces ajoutées à la galerie."
            description="Idéal pour réactiver le trafic récurrent et créer un rendez-vous visuel."
          />
          <ProductGrid products={newProducts} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Catégories SEO"
            title="Des univers éditoriaux conçus pour Google et pour l'achat."
          />
          <div className="triple-grid">
            {themePages.map((theme) => (
              <Link key={theme.slug} href={`/theme/${theme.slug}`} className="info-card">
                <p className="eyebrow">{theme.label}</p>
                <h3>{theme.h1}</h3>
                <p>{theme.intro.slice(0, 180)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


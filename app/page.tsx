import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { products, themePages } from "@/lib/data";

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
              <Link href="/shop" className="button">
                Voir le shop
              </Link>
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
              src="/images/home/street-art-blach-gallery.png"
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
            description="La homepage guide immédiatement le visiteur vers l'achat d'oeuvres, les prestations sur mesure ou les performances live."
          />
          <div className="split-grid">
            <Link href="/shop" className="category-card">
              <p className="eyebrow">1. Tableaux street art</p>
              <h3>Shop par thématique</h3>
              <p>Explorez les oeuvres par style, artiste, format et budget.</p>
            </Link>
            <Link href="/performances-artistiques" className="category-card">
              <p className="eyebrow">2. Performances artistiques</p>
              <h3>Live painting et événements</h3>
              <p>Une offre pensée pour les marques, entreprises et lieux premium.</p>
            </Link>
            <Link href="/theme/street-art-lyon" className="category-card">
              <p className="eyebrow">3. Collections SEO</p>
              <h3>Pages thématiques à forte intention</h3>
              <p>Des landing pages éditoriales pour capter plus de trafic qualifié.</p>
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

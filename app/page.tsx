import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkCard } from "@/components/artwork-card";
import { ArtworkImage } from "@/components/artwork-image";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  CATAWIKI_URL,
  FRESQUES_URL,
  GALLERY_ADDRESS,
  SHOP_URL,
  featuredHandles,
  formatPrice,
  getArtwork,
  productUrl
} from "@/lib/gallery";

export const metadata: Metadata = {
  title: { absolute: "BLACH GALLERY | Galerie d'art contemporain & collectif d'artistes lyonnais — Dardilly" },
  description:
    "BLACH GALLERY, galerie d'art contemporain et collectif d'artistes lyonnais à Dardilly : originaux, sculptures, éditions limitées, enchères Catawiki et fresques murales.",
  alternates: { canonical: "/" }
};

const hero = getArtwork("la-fete-de-la-couleur-port-sete-2052-blach");
const shopVisual = getArtwork("avatar-experience-baril");
const auctionVisual = getArtwork("new-york-gundam-vs-sangoku");
const collectiveWorks = [
  getArtwork("pure-energy-bonte-street-art-lyon-original-xxl"),
  getArtwork("carotte-spirale-endless-loop-serie-ardoise-la-carotte"),
  getArtwork("lion-king"),
  getArtwork("new-york-bay-2025-blach®")
];
const featured = featuredHandles.map(getArtwork);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: "BLACH GALLERY",
  url: "https://www.blachgallery.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: GALLERY_ADDRESS.street,
    postalCode: GALLERY_ADDRESS.postalCode,
    addressLocality: GALLERY_ADDRESS.city,
    addressCountry: "FR"
  },
  founder: { "@type": "Person", name: "Maxime Blachère" },
  sameAs: [SHOP_URL, CATAWIKI_URL, FRESQUES_URL]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1 — HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <a className="hero-media" href={productUrl(hero.handle)} target="_blank" rel="noopener noreferrer">
          <ArtworkImage
            src={hero.image}
            alt={`${hero.title} — ${hero.artist}`}
            width={hero.width}
            height={hero.height}
            sizes="100vw"
            priority
          />
        </a>
        <div className="container hero-copy">
          <h1 id="hero-title">BLACH GALLERY</h1>
          <p className="hero-sub">Galerie d&apos;art contemporain &amp; collectif d&apos;artistes lyonnais</p>
          <div className="actions">
            <Link href="/shop" className="btn btn-dark">
              Découvrir les œuvres
            </Link>
            <a href="#visiter" className="btn btn-outline">
              Visiter la galerie
            </a>
          </div>
          <p className="hero-credit">
            {hero.artist}, <em>{hero.title}</em> — {hero.type}, {formatPrice(hero.price)}
          </p>
        </div>
      </section>

      {/* 2 — ŒUVRES À LA UNE */}
      <section className="section" aria-labelledby="une-title">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Sélection</p>
            <h2 id="une-title">Œuvres à la une</h2>
          </header>
          <div className="artwork-grid">
            {featured.map((artwork) => (
              <ArtworkCard key={artwork.handle} artwork={artwork} />
            ))}
          </div>
          <div className="actions actions-center">
            <a href={SHOP_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Toutes les œuvres sur le shop
            </a>
          </div>
        </div>
      </section>

      {/* 3 — LE COLLECTIF */}
      <section className="section section-alt" aria-labelledby="collectif-title">
        <div className="container split">
          <div className="split-text">
            <p className="kicker">Le collectif</p>
            <h2 id="collectif-title">Un collectif d&apos;artistes indépendants</h2>
            <p>
              Fondée par Maxime Blachère (BLACH®), BLACH GALLERY rassemble des artistes locaux autour d&apos;une vision
              libre, contemporaine et accessible de l&apos;art.
            </p>
            <p>
              Le collectif réunit notamment BLACH®, La Carotte, Pascal Nègre, Art HM et Bonté, ainsi que des artistes
              issus de la peinture traditionnelle et d&apos;anciens membres de l&apos;association Les Arts de La
              Tour-de-Salvagny.
            </p>
            <p>
              Peinture, street art, sculpture, photographie et esprit Fluxus se rencontrent dans une galerie
              indépendante à Dardilly, aux portes de Lyon.
            </p>
            <div className="actions">
              <Link href="/artistes-du-collectif" className="btn btn-dark">
                Découvrir le collectif
              </Link>
            </div>
          </div>
          <div className="mosaic">
            {collectiveWorks.map((artwork) => (
              <a
                key={artwork.handle}
                href={productUrl(artwork.handle)}
                target="_blank"
                rel="noopener noreferrer"
                className="mosaic-item"
              >
                <ArtworkImage
                  src={artwork.image}
                  alt={`${artwork.title} — ${artwork.artist}`}
                  width={artwork.width}
                  height={artwork.height}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
                <span>{artwork.artist}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — SHOP */}
      <section className="section" aria-labelledby="shop-title">
        <div className="container split split-reverse">
          <a className="feature-media" href={productUrl(shopVisual.handle)} target="_blank" rel="noopener noreferrer">
            <ArtworkImage
              src={shopVisual.image}
              alt={`${shopVisual.title} — ${shopVisual.artist}`}
              width={shopVisual.width}
              height={shopVisual.height}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </a>
          <div className="split-text">
            <p className="kicker">Shop en ligne</p>
            <h2 id="shop-title">Acheter une œuvre</h2>
            <p>Originaux, sculptures et éditions limitées. Découvrez notre sélection d&apos;œuvres disponibles en ligne.</p>
            <div className="actions">
              <a href={SHOP_URL} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                Accéder au shop
              </a>
            </div>
            <p className="caption">
              {shopVisual.artist}, <em>{shopVisual.title}</em> — {formatPrice(shopVisual.price)}
            </p>
          </div>
        </div>
      </section>

      {/* 5 — ENCHÈRES */}
      <section className="section section-alt" aria-labelledby="encheres-title">
        <div className="container split">
          <div className="split-text">
            <p className="kicker">Catawiki</p>
            <h2 id="encheres-title">Enchères en ligne</h2>
            <p>
              Chaque semaine, BLACH GALLERY propose sur Catawiki des éditions limitées et, ponctuellement, des œuvres
              originales.
            </p>
            <p>Découvrez nos créations et tentez de les acquérir aux enchères.</p>
            <div className="actions">
              <a href={CATAWIKI_URL} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                Découvrir les enchères
              </a>
            </div>
          </div>
          <a className="feature-media" href={CATAWIKI_URL} target="_blank" rel="noopener noreferrer">
            <ArtworkImage
              src={auctionVisual.image}
              alt={`${auctionVisual.title} — ${auctionVisual.artist}`}
              width={auctionVisual.width}
              height={auctionVisual.height}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </a>
        </div>
      </section>

      {/* 6 — FRESQUES */}
      <section className="section section-dark" aria-labelledby="fresques-title">
        <div className="container narrow center">
          <p className="kicker">Max le Tagueur</p>
          <h2 id="fresques-title">Fresques murales &amp; live painting</h2>
          <p>
            Notre collectif se déplace pour réaliser des fresques murales, des créations participatives et des
            performances artistiques en direct.
          </p>
          <p>
            Entreprises, collectivités, événements et particuliers : découvrez toutes nos réalisations sur Max le
            Tagueur.
          </p>
          <div className="actions actions-center">
            <a href={FRESQUES_URL} className="btn btn-light" target="_blank" rel="noopener noreferrer">
              Découvrir nos fresques
            </a>
          </div>
        </div>
      </section>

      {/* 7 — EXPOSITION */}
      <section className="section" aria-labelledby="expo-title">
        <div className="container narrow center">
          <p className="kicker">Prochaine exposition</p>
          <p className="date">14 novembre 2026</p>
          <h2 id="expo-title">Exposition street art</h2>
          <p>
            Rendez-vous à BLACH GALLERY pour une exposition exceptionnelle réunissant des artistes locaux, nationaux et
            internationaux.
          </p>
          <p>Des surprises, des œuvres inédites et des rencontres artistiques dans un véritable lieu d&apos;exposition.</p>
          <address>
            {GALLERY_ADDRESS.street}
            <br />
            {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
          </address>
          <div className="actions actions-center">
            <Link href="/expositions" className="btn btn-outline">
              Toutes les expositions
            </Link>
          </div>
        </div>
      </section>

      {/* 8 — NEWSLETTER */}
      <section className="section section-alt" aria-labelledby="newsletter-title">
        <div className="container narrow">
          <header className="section-head center">
            <p className="kicker">Newsletter</p>
            <h2 id="newsletter-title">Restez informés</h2>
            <p>Recevez nos invitations aux vernissages, nos événements et nos annonces d&apos;enchères exceptionnelles.</p>
          </header>
          <NewsletterForm />
        </div>
      </section>

      {/* 9 — VISITER */}
      <section className="section" id="visiter" aria-labelledby="visiter-title">
        <div className="container narrow center">
          <p className="kicker">Visiter la galerie</p>
          <h2 id="visiter-title">Rendez-vous à Dardilly</h2>
          <address className="address-block">
            <strong>{GALLERY_ADDRESS.name}</strong>
            <br />
            {GALLERY_ADDRESS.street}
            <br />
            {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
          </address>
          <p className="muted">Horaires d&apos;ouverture : nous contacter avant votre visite.</p>
          <div className="actions actions-center">
            <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              Itinéraire Google Maps
            </a>
            <Link href="/bio-contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

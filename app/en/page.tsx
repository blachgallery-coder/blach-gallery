import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkCard } from "@/components/artwork-card";
import {
  CATAWIKI_URL,
  FRESQUES_URL,
  GALLERY_ADDRESS,
  GALLERY_PHONE,
  SHOP_URL,
  featuredHandles,
  getArtwork
} from "@/lib/gallery";
import { SITE_URL } from "@/lib/seo";

// Page anglaise indexable (23/11/2026) — remplace, pour Google, la traduction Google Translate côté navigateur.
const TITLE = "BLACH GALLERY | Original street art & contemporary art gallery near Lyon, France";
const DESCRIPTION =
  "Independent art gallery and collective near Lyon, France: original street art, pop art and contemporary paintings, signed limited editions and sculptures. Worldwide shipping.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", en: "/en", "x-default": "/" }
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["fr_FR"],
    siteName: "BLACH GALLERY",
    url: "/en",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/home/hero-street-art-mont-saint-michel-blach.webp", width: 1672, height: 711, alt: "Mont-Saint-Michel — BLACH®" }]
  }
};

const SHOP_EN = `${SHOP_URL}/en`;

const featured = featuredHandles.slice(0, 6).map(getArtwork);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/en#webpage`,
  url: `${SITE_URL}/en`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#gallery` }
};

export default function EnglishHomePage() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section">
        <div className="container narrow">
          <p className="kicker">Contemporary art gallery · Lyon, France</p>
          <h1>BLACH GALLERY — original street art from Lyon, shipped worldwide</h1>
          <p>
            BLACH GALLERY is an independent art gallery and artist collective in Dardilly, on the doorstep of Lyon,
            France. Founded by the French artist Maxime Blachère, known as BLACH®, it shows original paintings, signed
            and numbered limited editions and sculptures by local and international artists, from street art and pop
            art to contemporary painting.
          </p>
          <div className="actions">
            <a href={SHOP_EN} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              Browse the artworks
            </a>
            <a href="#visit" className="btn btn-outline">
              Visit the gallery
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="works-title">
        <div className="container">
          <p className="kicker">Selected works</p>
          <h2 id="works-title">Originals and limited editions</h2>
          <p>
            Every artwork comes with a hand-signed certificate of authenticity. Original works are unique pieces;
            limited editions are produced in a fixed number of copies, each signed and numbered by hand. Prices are
            shown in euros.
          </p>
          <div className="artwork-grid">
            {featured.map((artwork) => (
              <ArtworkCard key={artwork.handle} artwork={artwork} lang="en" />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="blach-title">
        <div className="container narrow">
          <p className="kicker">The founder</p>
          <h2 id="blach-title">BLACH®, a modern Fluxus artist</h2>
          <p>
            Former PE teacher, musician, graffiti writer and performer, Maxime Blachère has been painting since 1992
            and working as a full-time artist since 2016. His signature style, &laquo;&nbsp;Vandal Is Color&nbsp;&raquo;,
            takes large urban photographs — Hong Kong, New York, Paris, Dubai — and covers them with thousands of
            acrylic-marker graffiti, pop icons and humour. He calls it &laquo;&nbsp;Fluxus 2.0&nbsp;&raquo;: the
            freedom of the 1960s Fluxus movement applied to today&apos;s urban and digital culture.
          </p>
          <p>
            His work has been shown in galleries in Hong Kong, Miami, Dubai, the Netherlands, Switzerland, Paris and
            Lyon.
          </p>
          <div className="actions">
            <Link href="/artistes/blach" className="btn btn-outline">
              BLACH® artist page (in French)
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="collective-title">
        <div className="container narrow">
          <p className="kicker">The collective</p>
          <h2 id="collective-title">An independent artist collective</h2>
          <p>
            Beside BLACH®, the gallery represents a collective of independent artists — painters, street artists,
            sculptors and photographers — including La Carotte, Art HM, Bonté and Pascal Nègre. Each artwork is listed
            under its own artist&apos;s name.
          </p>
          <div className="actions">
            <Link href="/artistes-du-collectif" className="btn btn-outline">
              Meet the artists (in French)
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="buy-title">
        <div className="container narrow">
          <p className="kicker">Collectors</p>
          <h2 id="buy-title">How to buy</h2>
          <ul>
            <li>
              <strong>Online shop</strong> — originals and limited editions, secure checkout:{" "}
              <a href={SHOP_EN} target="_blank" rel="noopener noreferrer">
                shop.blachgallery.com/en
              </a>
            </li>
            <li>
              <strong>Weekly online auctions</strong> on{" "}
              <a href={CATAWIKI_URL} target="_blank" rel="noopener noreferrer">
                Catawiki
              </a>
            </li>
            <li>
              <strong>At the gallery</strong> in Dardilly, near Lyon
            </li>
            <li>
              <strong>Commissions, murals and live painting</strong> by Max le Tagueur:{" "}
              <a href={FRESQUES_URL} target="_blank" rel="noopener noreferrer">
                maxletagueur.com
              </a>
            </li>
          </ul>
          <h3>Worldwide shipping</h3>
          <p>
            Orders are prepared within 1 to 3 days, professionally packed and shipped with tracking. Delivery takes
            about 2 days within France and 4 to 15 days elsewhere. For deliveries outside the European Union, import
            duties and taxes may be charged by the destination country.
          </p>
        </div>
      </section>

      <section className="section section-alt" id="visit" aria-labelledby="visit-title">
        <div className="container narrow center">
          <p className="kicker">Visit</p>
          <h2 id="visit-title">Visit the gallery in Dardilly, near Lyon</h2>
          <address className="address-block">
            <strong>{GALLERY_ADDRESS.name}</strong>
            <br />
            {GALLERY_ADDRESS.street}
            <br />
            {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}, France
          </address>
          <ul className="hours-list">
            <li>Tuesday, Thursday, Friday: 9 am – 4 pm</li>
            <li>Wednesday, Saturday: 10 am – 12 pm and 2 pm – 7 pm</li>
            <li>Sunday, Monday: closed</li>
          </ul>
          <p className="muted">
            Outside these hours, visits by appointment: <a href={`tel:${GALLERY_PHONE.e164}`}>+33 6 41 85 19 48</a>
          </p>
          <div className="actions actions-center">
            <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

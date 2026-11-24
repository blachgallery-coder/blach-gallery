import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtworkImage } from "@/components/artwork-image";
import { RevealImage } from "@/components/reveal-image";
import { artists, artistPath, getArtist } from "@/lib/artists";
import { catalog, catalogCounts } from "@/lib/artist-catalog";
import { formatPrice, productUrl, GALLERY_ADDRESS } from "@/lib/gallery";
import { artistPathEn, artistsEn, artworkTypeEn, getArtistEn, shopEn } from "@/lib/i18n-en";
import { pageMetaEn, SITE_URL } from "@/lib/seo";

// Version anglaise des pages artistes (24/11/2026) — contenu : lib/i18n-en.ts.
type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artists.filter((a) => artistsEn[a.slug]).map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artist = getArtist(params.slug);
  const en = getArtistEn(params.slug);
  if (!artist || !en) return {};
  const n = catalogCounts[artist.slug] ?? 0;
  const title = n ? `${artist.name} — artworks for sale (${n})` : `${artist.name} — artist`;
  return {
    title,
    description: en.metaDescription,
    ...pageMetaEn(artistPathEn(artist.slug), artistPath(artist.slug), title, en.metaDescription)
  };
}

const productUrlEn = (handle: string) => productUrl(handle).replace("/products/", "/en/products/");

export default function ArtistPageEn({ params }: Props) {
  const artist = getArtist(params.slug);
  const en = getArtistEn(params.slug);
  if (!artist || !en) notFound();
  const works = catalog[artist.slug] ?? [];
  const total = catalogCounts[artist.slug] ?? 0;
  const originals = works.filter((w) => w.type === "Original").length;
  const minPrice = works.length ? Math.min(...works.map((w) => w.price)) : 0;
  const others = artists
    .filter((a) => a.slug !== artist.slug && artistsEn[a.slug] && (catalogCounts[a.slug] ?? 0) > 0)
    .slice(0, 8);
  const url = `${SITE_URL}${artistPathEn(artist.slug)}`;
  const shopUrl = artist.shopUrl ? shopEn(artist.shopUrl) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": artist.kind === "Group" ? "PerformingGroup" : "Person",
        "@id": `${SITE_URL}${artistPath(artist.slug)}#artist`,
        name: artist.name,
        description: en.short,
        jobTitle: artist.kind === "Person" ? "Visual artist" : undefined,
        knowsAbout: en.mediums,
        url,
        sameAs: [shopUrl, ...(artist.sameAs ?? [])].filter(Boolean),
        affiliation: { "@id": `${SITE_URL}/#gallery` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Artists", item: `${SITE_URL}/en/artists` },
          { "@type": "ListItem", position: 3, name: artist.name, item: url }
        ]
      },
      ...(works.length
        ? [
            {
              "@type": "ItemList",
              name: `Available artworks by ${artist.name}`,
              numberOfItems: works.length,
              itemListElement: works.map((w, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "VisualArtwork",
                  name: w.title,
                  image: w.image,
                  url: productUrlEn(w.handle),
                  creator: { "@id": `${SITE_URL}${artistPath(artist.slug)}#artist` },
                  artform: w.type === "Original" ? "Original artwork" : "Limited edition",
                  offers: { "@type": "Offer", price: w.price, priceCurrency: "EUR", url: productUrlEn(w.handle) }
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <article className="page container artist-page" lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="muted" aria-label="Breadcrumb" style={{ fontSize: ".85rem", marginBottom: "1rem" }}>
        <a href="/en">Home</a> / <a href="/en/artists">Artists</a> / <span>{artist.name}</span>
        {" · "}
        <a href={artistPath(artist.slug)} hrefLang="fr" lang="fr">Français</a>
      </nav>

      <header className="page-head" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: artist.portrait ? "minmax(0,1fr) 220px" : "1fr", alignItems: "center" }}>
        <div>
          <p className="kicker">{artist.group === "collectif" ? "BLACH GALLERY collective" : "Guest artist"} · {en.origin}</p>
          <h1>{artist.name}</h1>
          <p className="lead">{en.tagline}</p>
          <p>{en.short}</p>
          {works.length ? (
            <p className="muted">
              {total} artwork{total > 1 ? "s" : ""} available
              {originals ? ` · ${originals} original${originals > 1 ? "s" : ""} here` : ""} · from {formatPrice(minPrice)}
            </p>
          ) : null}
          <div className="actions">
            {works.length ? <a className="btn btn-dark" href="#artworks">See the artworks</a> : null}
            {shopUrl ? (
              <a className="btn btn-outline" href={shopUrl} target="_blank" rel="noopener noreferrer">
                Full collection in the shop
              </a>
            ) : (
              <a className="btn btn-outline" href="/en#visit">See the works at the gallery</a>
            )}
          </div>
        </div>
        {artist.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={artist.portrait.src} alt={en.portraitAlt ?? artist.portrait.alt} width={artist.portrait.width} height={artist.portrait.height} style={{ width: "100%", height: "auto" }} />
        ) : null}
      </header>

      {works.length || artist.gallery?.length ? (
        <section id="artworks" className="section" aria-labelledby="artworks-title">
          <h2 id="artworks-title">Artworks by {artist.name} for sale</h2>
          <div className="artwork-grid">
            {works.map((w) => (
              <a key={w.handle} className="artwork" href={productUrlEn(w.handle)} target="_blank" rel="noopener noreferrer">
                <div className="artwork-frame">
                  <ArtworkImage src={w.image} alt={`${w.title} — ${artist.name}`} width={w.width} height={w.height} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </div>
                <div className="artwork-caption">
                  <p className="artwork-artist">{artworkTypeEn(w.type)}{w.dims ? ` · ${w.dims}` : ""}</p>
                  <h3 className="artwork-title">{w.title}</h3>
                  <p className="artwork-meta">
                    <span>Buy online</span>
                    <span>{formatPrice(w.price)}</span>
                  </p>
                </div>
              </a>
            ))}
            {artist.gallery?.map((img, i) => <RevealImage key={img.src} {...img} alt={en.galleryAlts?.[i] ?? img.alt} lang="en" />)}
          </div>
          {total > works.length && shopUrl ? (
            <p className="center" style={{ marginTop: "2rem" }}>
              <a className="btn btn-dark" href={shopUrl} target="_blank" rel="noopener noreferrer">
                See all {total} artworks by {artist.name}
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="section split-grid" aria-labelledby="bio-title" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div>
          <h2 id="bio-title">Who is {artist.name}?</h2>
          {en.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="info-card">
          <h3>Key facts</h3>
          <ul>
            <li>Origin: {en.origin}</li>
            <li>Techniques: {en.mediums.join(", ")}</li>
            {en.facts?.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <h3>Collect with confidence</h3>
          <ul>
            <li>Secure payment on shop.blachgallery.com</li>
            <li>Tracked, insured shipping: prepared in 1 to 3 days, delivery in about 2 days within France, 4 to 15 days internationally</li>
            <li>Edition, signature and certificate detailed on each product page</li>
            <li>
              Works on view at the gallery: {GALLERY_ADDRESS.street}, {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}, France
            </li>
          </ul>
          <p>
            <a className="text-link" href="/en#visit">Hanging advice or a private visit in Dardilly? Contact the gallery →</a>
          </p>
        </aside>
      </section>

      {others.length ? (
        <section className="section" aria-labelledby="others-title">
          <h2 id="others-title">Discover other artists</h2>
          <p>
            {others.map((a, i) => (
              <span key={a.slug}>
                {i ? " · " : ""}
                <a className="text-link" href={artistPathEn(a.slug)}>{a.name}</a>
              </span>
            ))}
          </p>
        </section>
      ) : null}
    </article>
  );
}

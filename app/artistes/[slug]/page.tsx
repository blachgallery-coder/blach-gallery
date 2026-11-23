import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtworkImage } from "@/components/artwork-image";
import { RevealImage } from "@/components/reveal-image";
import { artists, artistPath, getArtist } from "@/lib/artists";
import { catalog, catalogCounts } from "@/lib/artist-catalog";
import { formatPrice, productUrl, GALLERY_ADDRESS } from "@/lib/gallery";
import { pageMeta, SITE_URL } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artist = getArtist(params.slug);
  if (!artist) return {};
  const n = catalogCounts[artist.slug] ?? 0;
  const title = n ? `${artist.name} — œuvres à vendre (${n})` : `${artist.name} — artiste`;
  return { title, description: artist.metaDescription, ...pageMeta(artistPath(artist.slug), title, artist.metaDescription) };
}

export default function ArtistPage({ params }: Props) {
  const artist = getArtist(params.slug);
  if (!artist) notFound();
  const works = catalog[artist.slug] ?? [];
  const total = catalogCounts[artist.slug] ?? 0;
  const originals = works.filter((w) => w.type === "Original").length;
  const minPrice = works.length ? Math.min(...works.map((w) => w.price)) : 0;
  const others = artists.filter((a) => a.slug !== artist.slug && (catalogCounts[a.slug] ?? 0) > 0).slice(0, 8);
  const url = `${SITE_URL}${artistPath(artist.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": artist.kind === "Group" ? "PerformingGroup" : "Person",
        "@id": `${url}#artist`,
        name: artist.name,
        description: artist.short,
        jobTitle: artist.kind === "Person" ? "Artiste plasticien" : undefined,
        knowsAbout: artist.mediums,
        url,
        sameAs: [artist.shopUrl, ...(artist.sameAs ?? [])].filter(Boolean),
        affiliation: { "@id": `${SITE_URL}/#gallery` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Artistes", item: `${SITE_URL}/artistes-du-collectif` },
          { "@type": "ListItem", position: 3, name: artist.name, item: url }
        ]
      },
      ...(works.length
        ? [
            {
              "@type": "ItemList",
              name: `Œuvres de ${artist.name} disponibles`,
              numberOfItems: works.length,
              itemListElement: works.map((w, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "VisualArtwork",
                  name: w.title,
                  image: w.image,
                  url: productUrl(w.handle),
                  creator: { "@id": `${url}#artist` },
                  artform: w.type === "Original" ? "Œuvre originale" : "Édition limitée",
                  offers: { "@type": "Offer", price: w.price, priceCurrency: "EUR", url: productUrl(w.handle) }
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <article className="page container artist-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="muted" aria-label="Fil d'Ariane" style={{ fontSize: ".85rem", marginBottom: "1rem" }}>
        <a href="/">Accueil</a> / <a href="/artistes-du-collectif">Artistes</a> / <span>{artist.name}</span>
      </nav>

      <header className="page-head" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: artist.portrait ? "minmax(0,1fr) 220px" : "1fr", alignItems: "center" }}>
        <div>
          <p className="kicker">{artist.group === "collectif" ? "Collectif BLACH GALLERY" : "Artiste invité"} · {artist.origin}</p>
          <h1>{artist.name}</h1>
          <p className="lead">{artist.tagline}</p>
          <p>{artist.short}</p>
          {works.length ? (
            <p className="muted">
              {total} œuvre{total > 1 ? "s" : ""} disponible{total > 1 ? "s" : ""}
              {originals ? ` · ${originals} original${originals > 1 ? "aux" : ""} ici` : ""} · à partir de {formatPrice(minPrice)}
            </p>
          ) : null}
          <div className="actions">
            {works.length ? <a className="btn btn-dark" href="#oeuvres">Voir les œuvres</a> : null}
            {artist.shopUrl ? (
              <a className="btn btn-outline" href={artist.shopUrl} target="_blank" rel="noopener noreferrer">
                Toute la collection en boutique
              </a>
            ) : (
              <a className="btn btn-outline" href="/bio-contact">Voir les œuvres en galerie</a>
            )}
          </div>
        </div>
        {artist.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={artist.portrait.src} alt={artist.portrait.alt} width={artist.portrait.width} height={artist.portrait.height} style={{ width: "100%", height: "auto" }} />
        ) : null}
      </header>

      {works.length || artist.gallery?.length ? (
        <section id="oeuvres" className="section" aria-labelledby="oeuvres-titre">
          <h2 id="oeuvres-titre">Œuvres de {artist.name} à vendre</h2>
          <div className="artwork-grid">
            {works.map((w) => (
              <a key={w.handle} className="artwork" href={productUrl(w.handle)} target="_blank" rel="noopener noreferrer">
                <div className="artwork-frame">
                  <ArtworkImage src={w.image} alt={`${w.title} — ${artist.name}`} width={w.width} height={w.height} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </div>
                <div className="artwork-caption">
                  <p className="artwork-artist">{w.type}{w.dims ? ` · ${w.dims}` : ""}</p>
                  <h3 className="artwork-title">{w.title}</h3>
                  <p className="artwork-meta">
                    <span>Acheter en ligne</span>
                    <span>{formatPrice(w.price)}</span>
                  </p>
                </div>
              </a>
            ))}
            {artist.gallery?.map((img) => <RevealImage key={img.src} {...img} />)}
          </div>
          {total > works.length && artist.shopUrl ? (
            <p className="center" style={{ marginTop: "2rem" }}>
              <a className="btn btn-dark" href={artist.shopUrl} target="_blank" rel="noopener noreferrer">
                Voir les {total} œuvres de {artist.name}
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="section split-grid" aria-labelledby="bio-titre" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div>
          <h2 id="bio-titre">Qui est {artist.name} ?</h2>
          {artist.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="info-card">
          <h3>Repères</h3>
          <ul>
            <li>Origine : {artist.origin}</li>
            <li>Techniques : {artist.mediums.join(", ")}</li>
            {artist.facts?.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <h3>Collectionner en confiance</h3>
          <ul>
            <li>Paiement sécurisé sur shop.blachgallery.com</li>
            <li>Expédition suivie et assurée : préparation 1 à 3 jours, livraison France 2 jours, international 4 à 15 jours</li>
            <li>Édition, signature et certificat précisés sur chaque fiche produit</li>
            <li>
              Œuvres visibles à la galerie : {GALLERY_ADDRESS.street}, {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
            </li>
          </ul>
          <p>
            <a className="text-link" href="/bio-contact">Un conseil d&apos;accrochage, une visite privée à Dardilly ? Contacter la galerie →</a>
          </p>
        </aside>
      </section>

      {others.length ? (
        <section className="section" aria-labelledby="autres-titre">
          <h2 id="autres-titre">Découvrir d&apos;autres artistes</h2>
          <p>
            {others.map((a, i) => (
              <span key={a.slug}>
                {i ? " · " : ""}
                <a className="text-link" href={artistPath(a.slug)}>{a.name}</a>
              </span>
            ))}
          </p>
        </section>
      ) : null}
    </article>
  );
}

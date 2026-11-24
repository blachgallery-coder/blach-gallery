import type { Metadata } from "next";
import { artists } from "@/lib/artists";
import { catalogCounts } from "@/lib/artist-catalog";
import { artistPathEn, artistsEn, themePathEn, themesEn } from "@/lib/i18n-en";
import { pageMetaEn } from "@/lib/seo";

// Index anglais des artistes (24/11/2026) — équivalent EN de /artistes-du-collectif.
const TITLE = "The artists — Lyon collective and international guests";
const DESCRIPTION =
  "The artists of BLACH GALLERY near Lyon: BLACH®, Bonté, La Carotte, Art HM, Pascal Nègre and international street art guests. Artworks for sale.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageMetaEn("/en/artists", "/artistes-du-collectif", TITLE, DESCRIPTION)
};

function ArtistList({ group }: { group: "collectif" | "invite" }) {
  return (
    <ul className="triple-grid" style={{ listStyle: "none", padding: 0 }}>
      {artists
        .filter((a) => a.group === group && artistsEn[a.slug])
        .map((a) => {
          const n = catalogCounts[a.slug] ?? 0;
          return (
            <li key={a.slug} className="info-card">
              <p className="kicker">{artistsEn[a.slug].origin}</p>
              <h3>
                <a href={artistPathEn(a.slug)}>{a.name}</a>
              </h3>
              <p>{artistsEn[a.slug].short}</p>
              <a className="text-link" href={artistPathEn(a.slug)}>
                {n ? `${n} artwork${n > 1 ? "s" : ""} for sale →` : "Discover →"}
              </a>
            </li>
          );
        })}
    </ul>
  );
}

export default function ArtistsEnPage() {
  return (
    <section className="page container" lang="en">
      <header className="page-head">
        <p className="kicker">The collective</p>
        <h1>An independent artist collective</h1>
        <p className="lead">
          Founded by Maxime Blachère (BLACH®), BLACH GALLERY brings local artists together around a free, contemporary
          and accessible vision of art. Painting, street art, sculpture, photography and the Fluxus spirit meet in an
          independent gallery in Dardilly, on the doorstep of Lyon, France.
        </p>
        <p className="muted">
          <a href="/artistes-du-collectif" hrefLang="fr" lang="fr">Version française</a>
        </p>
      </header>
      <section className="section" aria-labelledby="collective-title">
        <h2 id="collective-title">The collective</h2>
        <ArtistList group="collectif" />
      </section>
      <section className="section" aria-labelledby="guests-title">
        <p className="kicker">Guest artists</p>
        <h2 id="guests-title">International street art at the gallery</h2>
        <ArtistList group="invite" />
      </section>
      <section className="section" aria-labelledby="themes-title">
        <h2 id="themes-title">Browse by theme</h2>
        <p>
          {Object.values(themesEn).map((t, i) => (
            <span key={t.slug}>
              {i ? " · " : ""}
              <a className="text-link" href={themePathEn(t.slug)}>{t.label}</a>
            </span>
          ))}
        </p>
      </section>
    </section>
  );
}

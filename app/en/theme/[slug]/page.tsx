import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtworkGrid } from "@/components/artwork-card";
import { themePages } from "@/lib/data";
import { artworks, type ArtworkTheme } from "@/lib/gallery";
import { getThemeEn, themePathEn, themesEn } from "@/lib/i18n-en";
import { pageMetaEn } from "@/lib/seo";

// Version anglaise des pages thématiques (24/11/2026) — contenu : lib/i18n-en.ts.
type Props = { params: { slug: string } };

export function generateStaticParams() {
  return themePages.filter((t) => themesEn[t.slug]).map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const theme = getThemeEn(params.slug);
  if (!theme) return {};
  return {
    title: theme.h1,
    description: theme.metaDescription,
    ...pageMetaEn(themePathEn(theme.slug), `/theme/${theme.slug}`, theme.h1, theme.metaDescription)
  };
}

export default function ThemePageEn({ params }: Props) {
  const theme = getThemeEn(params.slug);
  if (!theme) notFound();
  const items = artworks.filter((artwork) => artwork.themes.includes(theme.slug as ArtworkTheme));
  const others = Object.values(themesEn).filter((t) => t.slug !== theme.slug);

  return (
    <section className="page container" lang="en">
      <header className="page-head">
        <p className="kicker">{theme.label}</p>
        <h1>{theme.h1}</h1>
        <p className="lead">{theme.intro}</p>
        <p className="muted">
          <a href={`/theme/${theme.slug}`} hrefLang="fr" lang="fr">Version française</a>
        </p>
      </header>
      <ArtworkGrid items={items} lang="en" />
      <p className="muted" style={{ marginTop: "2rem" }}>
        Other themes:{" "}
        {others.map((t, i) => (
          <span key={t.slug}>
            {i ? " · " : ""}
            <a className="text-link" href={themePathEn(t.slug)}>{t.label}</a>
          </span>
        ))}
      </p>
    </section>
  );
}

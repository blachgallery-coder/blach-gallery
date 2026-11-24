import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getThemeEn, themePathEn } from "@/lib/i18n-en";
import { notFound } from "next/navigation";
import { ArtworkGrid } from "@/components/artwork-card";
import { getThemeBySlug, themePages } from "@/lib/data";
import { artworks, type ArtworkTheme } from "@/lib/gallery";

type ThemePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return themePages.map((theme) => ({ slug: theme.slug }));
}

export function generateMetadata({ params }: ThemePageProps): Metadata {
  const theme = getThemeBySlug(params.slug);
  if (!theme) return {};
  return { title: theme.h1, description: theme.intro.slice(0, 155), ...pageMeta(`/theme/${theme.slug}`, theme.h1, theme.intro.slice(0, 155), getThemeEn(theme.slug) ? themePathEn(theme.slug) : undefined) };
}

export default function ThemePage({ params }: ThemePageProps) {
  const theme = getThemeBySlug(params.slug);
  if (!theme) notFound();
  const items = artworks.filter((artwork) => artwork.themes.includes(theme.slug as ArtworkTheme));

  return (
    <section className="page container">
      <header className="page-head">
        <p className="kicker">{theme.label}</p>
        <h1>{theme.h1}</h1>
        <p className="lead">{theme.intro}</p>
        {getThemeEn(theme.slug) ? (
          <p className="muted">
            <a href={themePathEn(theme.slug)} hrefLang="en" lang="en">English version</a>
          </p>
        ) : null}
      </header>
      <ArtworkGrid items={items} />
    </section>
  );
}

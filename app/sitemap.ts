import type { MetadataRoute } from "next";
import { blogPosts, themePages } from "@/lib/data";
import { artists } from "@/lib/artists";
import { artistsEn, themesEn } from "@/lib/i18n-en";
import { fluxusArticles } from "@/lib/blog-fluxus";

const baseUrl = "https://www.blachgallery.com";
// Dates de dernière modification RÉELLES (à mettre à jour quand le contenu change).
// Une date identique partout = signal ignoré par Google.
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-11-23",
  "/en": "2026-11-24",
  "/en/artists": "2026-11-24",
  "/bio-contact": "2026-11-23",
  "/artistes-du-collectif": "2026-11-23",
  "/expositions": "2026-11-21",
  "/blog": "2026-11-25",
  "/blog/prix-tableau-street-art": "2026-11-23",
  "/blog/idee-deco-graffiti": "2026-11-23",
  "/blog/cadeau-personnalise-graffiti": "2026-11-23",
  "/blog/blach-fluxus-moderne": "2026-11-23"
};
const DEFAULT_LAST_MODIFIED = "2026-11-16";
const lastMod = (path: string) =>
  new Date(
    LAST_MODIFIED[path] ??
      (path.startsWith("/en/") ? "2026-11-24" : path.startsWith("/artistes/") ? "2026-11-23" : DEFAULT_LAST_MODIFIED)
  );

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/en",
    "/en/artists",
    "/shop",
    "/artistes-du-collectif",
    "/expositions",
    "/newsletter",
    "/bio-contact",
    "/blog",
    "/encheres-de-la-semaine",
    "/performances-artistiques"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod(path)
  }));

  const themeEntries = themePages.map((theme) => ({
    url: `${baseUrl}/theme/${theme.slug}`,
    lastModified: lastMod(`/theme/${theme.slug}`)
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastMod(`/blog/${post.slug}`)
  }));

  const artistEntries = artists.map((artist) => ({
    url: `${baseUrl}/artistes/${artist.slug}`,
    lastModified: lastMod(`/artistes/${artist.slug}`)
  }));

  // Versions anglaises (24/11/2026)
  const enArtistEntries = artists
    .filter((artist) => artistsEn[artist.slug])
    .map((artist) => ({ url: `${baseUrl}/en/artists/${artist.slug}`, lastModified: lastMod(`/en/artists/${artist.slug}`) }));
  const enThemeEntries = themePages
    .filter((theme) => themesEn[theme.slug])
    .map((theme) => ({ url: `${baseUrl}/en/theme/${theme.slug}`, lastModified: lastMod(`/en/theme/${theme.slug}`) }));

  const fluxusEntries = fluxusArticles.flatMap((a) => [
    { url: `${baseUrl}/blog/${a.slug}`, lastModified: new Date(a.updatedAt) },
    { url: `${baseUrl}/en/blog/${a.slug}`, lastModified: new Date(a.updatedAt) }
  ]);
  const blogIndexes = [
    { url: `${baseUrl}/en/blog`, lastModified: new Date("2026-11-25") }
  ];

  return [...fluxusEntries, ...blogIndexes, ...staticPages, ...artistEntries, ...themeEntries, ...blogEntries, ...enArtistEntries, ...enThemeEntries];
}

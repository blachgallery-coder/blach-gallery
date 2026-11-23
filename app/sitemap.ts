import type { MetadataRoute } from "next";
import { blogPosts, themePages } from "@/lib/data";
import { artists } from "@/lib/artists";

const baseUrl = "https://www.blachgallery.com";
// Dates de dernière modification RÉELLES (à mettre à jour quand le contenu change).
// Une date identique partout = signal ignoré par Google.
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-11-23",
  "/en": "2026-11-23",
  "/bio-contact": "2026-11-23",
  "/artistes-du-collectif": "2026-11-23",
  "/expositions": "2026-11-21",
  "/blog/prix-tableau-street-art": "2026-11-23",
  "/blog/idee-deco-graffiti": "2026-11-23",
  "/blog/cadeau-personnalise-graffiti": "2026-11-23",
  "/blog/blach-fluxus-moderne": "2026-11-23"
};
const DEFAULT_LAST_MODIFIED = "2026-11-16";
const lastMod = (path: string) =>
  new Date(LAST_MODIFIED[path] ?? (path.startsWith("/artistes/") ? "2026-11-23" : DEFAULT_LAST_MODIFIED));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/en",
    "/shop",
    "/artistes-du-collectif",
    "/expositions",
    "/newsletter",
    "/atelier-graffiti",
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

  return [...staticPages, ...artistEntries, ...themeEntries, ...blogEntries];
}

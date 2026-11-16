import type { Metadata } from "next";

export const SITE_URL = "https://www.blachgallery.com";
export const DEFAULT_OG_IMAGE = "/images/home/hero-street-art-mont-saint-michel-blach.webp";

/**
 * Métadonnées propres à une page : canonical auto-référent + Open Graph cohérent.
 * Évite l'héritage du canonical "/" et de l'og:title de l'accueil (bug SEO P0, audit 16/11/2026).
 */
export function pageMeta(path: string, title: string, description: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "BLACH GALLERY",
      url: path,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1672, height: 711, alt: "Mont-Saint-Michel — BLACH®" }]
    }
  };
}

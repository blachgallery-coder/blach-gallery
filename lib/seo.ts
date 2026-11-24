import type { Metadata } from "next";

export const SITE_URL = "https://www.blachgallery.com";
export const DEFAULT_OG_IMAGE = "/images/home/hero-street-art-mont-saint-michel-blach.webp";

/**
 * Métadonnées propres à une page : canonical auto-référent + Open Graph cohérent.
 * Évite l'héritage du canonical "/" et de l'og:title de l'accueil (bug SEO P0, audit 16/11/2026).
 */
export function pageMeta(
  path: string,
  title: string,
  description: string,
  /** Chemin de la version anglaise, si elle existe (hreflang). */
  enPath?: string
): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: enPath
      ? { canonical: path, languages: { "fr-FR": path, en: enPath, "x-default": path } }
      : { canonical: path },
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

/** Version anglaise de pageMeta : canonical EN + hreflang vers la page FR équivalente (24/11/2026). */
export function pageMetaEn(path: string, frPath: string, title: string, description: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path, languages: { "fr-FR": frPath, en: path, "x-default": frPath } },
    openGraph: {
      type: "website",
      locale: "en_GB",
      alternateLocale: ["fr_FR"],
      siteName: "BLACH GALLERY",
      url: path,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1672, height: 711, alt: "Mont-Saint-Michel — BLACH®" }]
    }
  };
}

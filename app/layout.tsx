import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTranslateProvider } from "@/components/google-translate-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blachgallery.com"),
  title: {
    default: "BLACH GALLERY | Galerie d'art contemporain & collectif d'artistes lyonnais",
    template: "%s | BLACH GALLERY"
  },
  description:
    "BLACH GALLERY, galerie d'art contemporain et collectif d'artistes lyonnais à Dardilly : originaux, sculptures, éditions limitées, enchères et fresques murales.",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "BLACH GALLERY",
    url: "https://www.blachgallery.com",
    title: "BLACH GALLERY | Galerie d'art contemporain & collectif d'artistes lyonnais",
    description:
      "BLACH GALLERY, galerie d'art contemporain et collectif d'artistes lyonnais à Dardilly : originaux, sculptures, éditions limitées, enchères et fresques murales."
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACH GALLERY | Galerie d'art contemporain & collectif d'artistes lyonnais",
    description:
      "BLACH GALLERY, galerie d'art contemporain et collectif d'artistes lyonnais à Dardilly : originaux, sculptures, éditions limitées, enchères et fresques murales."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <GoogleTranslateProvider />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blachgallery.com"),
  title: {
    default: "BLACH GALLERY | Galerie en ligne street art et art moderne",
    template: "%s | BLACH GALLERY"
  },
  description:
    "BLACH GALLERY, galerie en ligne multi-artistes pour acheter des tableaux street art, pop art, manga et art moderne.",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

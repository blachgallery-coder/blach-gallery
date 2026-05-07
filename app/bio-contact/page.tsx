import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Bio contact BLACH GALLERY",
  description: "Presentation de BLACH GALLERY, bio du collectif et informations de contact."
};

export default function BioContactPage() {
  return (
    <ContentPageShell
      eyebrow="Presentation"
      title="Bio / contact"
      description="Cette page rassemblera la bio BLACH GALLERY, la vision du collectif, les liens utiles et les informations de contact pour galerie, presse et projets sur mesure."
    />
  );
}

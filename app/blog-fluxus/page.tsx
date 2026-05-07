import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Blog Fluxus street art et culture visuelle",
  description: "Espace editorial BLACH GALLERY pour le SEO, les tendances street art et l'univers Fluxus."
};

export default function BlogFluxusPage() {
  return (
    <ContentPageShell
      eyebrow="Editorial"
      title="Blog Fluxus"
      description="Cette page servira d'entree pour le futur contenu SEO : street art, Fluxus, graffiti, deco, cadeaux et univers BLACH."
    />
  );
}

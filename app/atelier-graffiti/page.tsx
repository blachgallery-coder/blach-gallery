import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Atelier graffiti entreprises et ecoles",
  description: "Ateliers graffiti pedagogiques et team building pour entreprises, collectivites et ecoles."
};

export default function AtelierGraffitiPage() {
  return (
    <ContentPageShell
      eyebrow="Ateliers"
      title="Atelier graffiti"
      description="Cette page accueillera l'offre ateliers pour entreprises, ecoles et structures culturelles avec promesse claire, cas d'usage et formulaire de contact."
    />
  );
}

import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Fresque graffiti Lyon et Ouest lyonnais",
  description: "Page de conversion pour les demandes de fresques graffiti et projets muraux premium."
};

export default function FresqueGraffitiPage() {
  return (
    <ContentPageShell
      eyebrow="Leads premium"
      title="Fresque graffiti"
      description="Cette page servira de landing haute valeur pour capter les demandes de devis fresque a Lyon et dans l'Ouest lyonnais, puis renvoyer vers maxletagueur.com."
    />
  );
}

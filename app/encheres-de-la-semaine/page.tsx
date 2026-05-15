import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Enchères de la semaine street art",
  description: "Suivez les enchères de la semaine et les ventes en cours liées à BLACH GALLERY."
};

export default function EncheresDeLaSemainePage() {
  return (
    <ContentPageShell
      eyebrow="Ventes"
      title="Enchères de la semaine"
      description="Une page dédiée aux ventes en cours, aux formats à suivre et aux prochains temps forts des enchères BLACH GALLERY."
    />
  );
}

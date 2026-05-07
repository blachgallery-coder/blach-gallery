import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Encheres de la semaine street art",
  description: "Selection hebdomadaire des encheres BLACH GALLERY avec redirection vers les ventes en cours."
};

export default function EncheresDeLaSemainePage() {
  return (
    <ContentPageShell
      eyebrow="Ventes en cours"
      title="Encheres de la semaine"
      description="Cette page servira de hub simple pour pousser les ventes Catawiki, mettre en avant les pieces du moment et renvoyer rapidement vers les encheres en cours."
    />
  );
}

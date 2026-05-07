import type { Metadata } from "next";
import { ContentPageShell } from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Artistes du collectif street art",
  description: "Presentation des artistes du collectif BLACH GALLERY et de leurs univers."
};

export default function ArtistesDuCollectifPage() {
  return (
    <ContentPageShell
      eyebrow="Collectif"
      title="Artistes du collectif"
      description="Cette route accueillera la version business de la page artistes, avec bios courtes, signatures visuelles et liens vers shop, encheres et commandes."
    />
  );
}

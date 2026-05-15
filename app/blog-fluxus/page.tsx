import type { Metadata } from "next";
import { NewsBoard } from "@/components/news-board";
import { newsEvents } from "@/lib/collective";

export const metadata: Metadata = {
  title: "News et événements BLACH GALLERY",
  description:
    "Retrouvez les news, expositions, vernissages, performances live et annonces du collectif BLACH GALLERY."
};

export default function BlogFluxusPage() {
  return (
    <section className="page-shell container news-page-shell">
      <div>
        <p className="eyebrow">News & événements</p>
        <h1 className="page-title">Le carnet vivant de la BLACH GALLERY</h1>
        <p className="page-intro">
          Une base éditoriale moderne pour suivre les expos, vernissages, performances live, projets muraux et temps
          forts du collectif.
        </p>
      </div>
      <NewsBoard events={newsEvents} />
    </section>
  );
}

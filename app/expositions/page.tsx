import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_ADDRESS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Expositions — prochaine exposition street art le 14 novembre 2026",
  description:
    "Expositions de BLACH GALLERY à Dardilly : exposition street art le 14 novembre 2026, 11 place de l'Église, 69570 Dardilly.",
  alternates: { canonical: "/expositions" }
};

export default function ExpositionsPage() {
  return (
    <section className="page container">
      <header className="page-head">
        <p className="kicker">Expositions</p>
        <h1>Prochaine exposition</h1>
      </header>

      <article className="expo">
        <p className="date">14 novembre 2026</p>
        <h2>Exposition street art</h2>
        <p>
          Rendez-vous à BLACH GALLERY pour une exposition exceptionnelle réunissant des artistes locaux, nationaux et
          internationaux.
        </p>
        <p>Des surprises, des œuvres inédites et des rencontres artistiques dans un véritable lieu d&apos;exposition.</p>
        <address>
          {GALLERY_ADDRESS.name}
          <br />
          {GALLERY_ADDRESS.street}
          <br />
          {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
        </address>
        <div className="actions">
          <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
            Itinéraire Google Maps
          </a>
        </div>
      </article>

      <section className="expo expo-past" aria-labelledby="passees">
        <p className="kicker" id="passees">Exposition passée</p>
        <h2>Exposition de printemps 2026</h2>
        <div className="poster">
          <Image
            src="/images/expo-printemps/affiche-expo-printemps-2026.png"
            alt="Affiche de l'exposition de printemps 2026 de BLACH GALLERY"
            width={1054}
            height={1492}
            sizes="(max-width: 700px) 100vw, 420px"
          />
        </div>
      </section>
    </section>
  );
}

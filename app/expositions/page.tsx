import type { Metadata } from "next";
import Image from "next/image";
import { CurrentExpo, currentExpoJsonLd } from "@/components/current-expo";

export const metadata: Metadata = {
  title: "Expositions — Expo Fluxus à Dardilly, du 14 novembre au 24 décembre 2026",
  description:
    "Expo Fluxus à la BLACH GALLERY, derrière l'église de Dardilly-le-Bas : 23 artistes, plus de 600 œuvres (originaux, éditions limitées, sculptures). Vernissage samedi 14 novembre 2026, 17h-21h, entrée libre. BLACH GALLERY, 11 place de l'Église, 69570 Dardilly.",
  alternates: { canonical: "/expositions" },
  openGraph: {
    title: "Expo Fluxus : parce que tout se passe derrière l'église !",
    description:
      "23 artistes, 600+ œuvres. Vernissage samedi 14 novembre 2026, 17h-21h, entrée libre. Exposition du 14 novembre au 24 décembre 2026 — BLACH GALLERY, Dardilly.",
    url: "/expositions",
    images: [
      {
        url: "/images/expo-street-art/affiche-expo-fluxus-dardilly-2026.webp",
        width: 1024,
        height: 1536,
        alt: "Affiche Expo Fluxus — BLACH GALLERY Dardilly, du 14 novembre au 24 décembre 2026"
      }
    ]
  }
};

export default function ExpositionsPage() {
  return (
    <section className="page container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(currentExpoJsonLd) }} />
      <header className="page-head">
        <p className="kicker">Expositions</p>
        <h1>À l&apos;affiche</h1>
      </header>

      <article className="expo-current" aria-labelledby="expo-current-title">
        <CurrentExpo headingId="expo-current-title" tone="light" priority />
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

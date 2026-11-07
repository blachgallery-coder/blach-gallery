import Image from "next/image";
import Link from "next/link";
import { GALLERY_ADDRESS } from "@/lib/gallery";

// Exposition à l'affiche — données validées par Maxime Blachère (affiche + post du 07/11/2026). Ne rien inventer ici.
export const currentExpo = {
  title: "Le street art international débarque à Dardilly !",
  shortTitle: "Street Art International",
  intro:
    "23 artistes, plus de 600 œuvres : originaux, éditions limitées, sculptures. Pop art, graffiti, aquarelle… il y en a pour tous les murs (et tous les cadeaux de Noël).",
  vernissage: {
    label: "Samedi 14 novembre 2026, 17h → 21h",
    details: "Entrée libre · animation graffiti",
    start: "2026-11-14T17:00:00+01:00",
    end: "2026-11-14T21:00:00+01:00"
  },
  period: {
    label: "Du 14 novembre au 24 décembre 2026",
    shortLabel: "14 nov. → 24 déc. 2026",
    start: "2026-11-14",
    end: "2026-12-24"
  },
  poster: {
    src: "/images/expo-street-art/affiche-street-art-international-dardilly-2026.webp",
    alt: "Affiche Street Art International débarque à Dardilly — vernissage samedi 14 novembre 2026, 17h-21h, BLACH GALLERY, 11 place de l'Église, 69570 Dardilly",
    width: 1240,
    height: 1754
  },
  headliners: ["GRAFFMATT", "Brunograffer", "BLACH®", "LA CAROTTE", "BENNY THE KID (BTK)", "ArtUp"],
  guests: [
    "SOCRATE",
    "MR POULET",
    "CANNED",
    "2FAST",
    "TRUTEAU",
    "ART HM",
    "PASCAL NÈGRE",
    "BONTÉ",
    "SÉVERINE",
    "DINARA HÖRTNAGL",
    "MARIA LUISA AZZINI",
    "LEE HENDERSON",
    "LEA ROCHE",
    "MICHEL DONIER",
    "ALAIN MÉRAUD",
    "JACQUES BERGER",
    "RÉMI PORCAR"
  ]
};

const fullAddress = `${GALLERY_ADDRESS.street}, ${GALLERY_ADDRESS.postalCode} ${GALLERY_ADDRESS.city}`;

export const currentExpoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExhibitionEvent",
  name: `${currentExpo.shortTitle} — ${GALLERY_ADDRESS.name} ${GALLERY_ADDRESS.city}`,
  description: currentExpo.intro,
  startDate: currentExpo.period.start,
  endDate: currentExpo.period.end,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: `https://www.blachgallery.com${currentExpo.poster.src}`,
  url: "https://www.blachgallery.com/expositions",
  location: {
    "@type": "ArtGallery",
    name: GALLERY_ADDRESS.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: GALLERY_ADDRESS.street,
      postalCode: GALLERY_ADDRESS.postalCode,
      addressLocality: GALLERY_ADDRESS.city,
      addressCountry: "FR"
    }
  },
  organizer: { "@type": "Organization", name: GALLERY_ADDRESS.name, url: "https://www.blachgallery.com" },
  subEvent: {
    "@type": "Event",
    name: `Vernissage — ${currentExpo.shortTitle}`,
    startDate: currentExpo.vernissage.start,
    endDate: currentExpo.vernissage.end,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    location: { "@type": "Place", name: GALLERY_ADDRESS.name, address: fullAddress }
  }
};

type CurrentExpoProps = {
  headingId: string;
  /** "dark" : section noire de l'accueil ; "light" : page /expositions. */
  tone?: "dark" | "light";
  priority?: boolean;
};

export function CurrentExpo({ headingId, tone = "light", priority = false }: CurrentExpoProps) {
  const onHome = tone === "dark";
  const poster = (
    <Image
      src={currentExpo.poster.src}
      alt={currentExpo.poster.alt}
      width={currentExpo.poster.width}
      height={currentExpo.poster.height}
      sizes="(max-width: 860px) 100vw, 46vw"
      priority={priority}
    />
  );

  return (
    <div className={`split expo-feature expo-feature-${tone}`}>
      {onHome ? (
        <Link href="/expositions" className="expo-poster" aria-label="Voir l'exposition Street Art International">
          {poster}
        </Link>
      ) : (
        <div className="expo-poster">{poster}</div>
      )}

      <div className="split-text">
        <p className="kicker">Exposition · {currentExpo.period.shortLabel}</p>
        <h2 id={headingId}>{currentExpo.title}</h2>
        <p>{currentExpo.intro}</p>

        <dl className="expo-facts">
          <div>
            <dt>Vernissage</dt>
            <dd>
              <strong>{currentExpo.vernissage.label}</strong>
              <br />
              {currentExpo.vernissage.details}
            </dd>
          </div>
          <div>
            <dt>Exposition</dt>
            <dd>{currentExpo.period.label}</dd>
          </div>
          <div>
            <dt>Lieu</dt>
            <dd>
              <address>
                {GALLERY_ADDRESS.name}
                <br />
                {GALLERY_ADDRESS.street}
                <br />
                {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
              </address>
            </dd>
          </div>
        </dl>

        <p className="expo-artists-label">Avec</p>
        <ul className="expo-headliners">
          {currentExpo.headliners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul className="expo-guests">
          {currentExpo.guests.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <div className="actions">
          {onHome ? (
            <>
              <Link href="/expositions" className="btn btn-light">
                Voir l&apos;exposition
              </Link>
              <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
                Itinéraire
              </a>
            </>
          ) : (
            <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              Itinéraire Google Maps
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

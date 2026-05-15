import Image from "next/image";
import Link from "next/link";

const eventFacts = [
  { label: "Lieu", value: "Dardilly-le-Bas" },
  { label: "Dates", value: "Du 23 mai au 30 juin 2026" },
  { label: "Vernissage", value: "Samedi 23 mai - 13h a 23h" },
  { label: "Adresse", value: "BLACH GALLERY - 11 place de l'eglise, 69570 Dardilly-le-Bas" }
];

const eventArtists = [
  "BLACH",
  "Carotte",
  "Art HM",
  "Porcar Remi",
  "Severine",
  "Donier Michel",
  "Alain Meraud",
  "Jacques Berger"
];

const eventHighlights = [
  "Initiation au graffiti a la bombe pour les plus grands",
  "Dessins aux marqueurs acryliques pour les plus petits",
  "Concerts & performances live",
  "Degustation de produits locaux avec Tapas de Pat'"
];

const eventTimeline = [
  {
    time: "16h",
    title: "Beuf session acoustique",
    description:
      "Appel aux zikos locaux & improvisateurs. Guitares, percussions legeres, chant, impro libre et ambiance conviviale."
  },
  { time: "18h", title: "Dardywood Crew", description: "Live collectif et energie street acoustique." },
  { time: "19h", title: "Secteur S", description: "Set brut, rap et vibration locale." },
  { time: "20h", title: "Fluxus Maximus", description: "Final live, performance et ambiance BLACH GALLERY." }
];

const galleryImages = [
  {
    src: "/images/expo-printemps/lyon-feat-carotte-test.png",
    alt: "Exposition BLACH GALLERY Dardilly art contemporain street art Lyon",
    className: "event-gallery-item event-gallery-item-wide",
    priority: true
  },
  {
    src: "/images/expo-printemps/expo-printemps-photo-1.jpg",
    alt: "Paysages lyonnais revisites BLACH GALLERY",
    className: "event-gallery-item",
    priority: false
  },
  {
    src: "/images/expo-printemps/expo-printemps-photo-2.jpg",
    alt: "Galerie d'art Dardilly BLACH GALLERY",
    className: "event-gallery-item",
    priority: false
  },
  {
    src: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp",
    alt: "Street art et graffiti a Dardilly BLACH GALLERY",
    className: "event-gallery-item",
    priority: false
  }
];

export function SpringExpoShowcase() {
  return (
    <section className="section event-feature-section">
      <div className="container">
        <div className="event-feature-shell">
          <div className="event-feature-top">
            <div className="event-poster-card">
              <div className="event-poster-frame">
                <Image
                  src="/images/expo-printemps/affiche-expo-printemps-2026.png"
                  alt="Affiche Expo de Printemps BLACH GALLERY Dardilly paysages lyonnais street art"
                  width={1054}
                  height={1492}
                  priority
                  sizes="(max-width: 960px) 100vw, 32vw"
                />
              </div>
            </div>

            <div className="event-copy-card">
              <p className="eyebrow event-eyebrow">Expo Dardilly</p>
              <h2>EXPO DE PRINTEMPS - BLACH GALLERY</h2>
              <p className="event-subtitle">Paysages Lyonnais revisites facon Street Art & Fluxus</p>
              <p className="event-description">
                La BLACH GALLERY presente son Expo de Printemps : une exposition collective Lyon pensee comme un rendez-vous
                vivant autour des paysages lyonnais. Entre galerie art Dardilly, street art Lyon, graffiti Lyon, peinture,
                musique et esprit Fluxus, l'accrochage compose une experience plus humaine, plus festive et plus immersive.
              </p>

              <div className="event-facts-grid">
                {eventFacts.map((fact) => (
                  <div key={fact.label} className="event-fact-card">
                    <p>{fact.label}</p>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>

              <div className="event-split-grid">
                <div className="event-panel">
                  <p className="eyebrow">Artistes</p>
                  <p className="event-artists-list">{eventArtists.join(" / ")}</p>
                </div>
                <div className="event-panel">
                  <p className="eyebrow">Programme</p>
                  <ul className="event-highlight-list">
                    {eventHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="event-live-panel">
                <p className="eyebrow">Live</p>
                <div className="event-timeline-grid">
                  {eventTimeline.map((slot) => (
                    <article key={slot.time} className="event-timeline-card">
                      <span>{slot.time}</span>
                      <h3>{slot.title}</h3>
                      <p>{slot.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="event-cta-row">
                <Link href="/blog-fluxus" className="event-button event-button-primary">
                  Voir l'evenement
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=BLACH+GALLERY+11+place+de+l%27eglise+69570+Dardilly-le-Bas"
                  className="event-button event-button-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Venir a la galerie
                </a>
              </div>
            </div>
          </div>

          <div className="event-gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.src} className={image.className}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.priority}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
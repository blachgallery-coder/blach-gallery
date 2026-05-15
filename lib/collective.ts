export type HeroAction = {
  label: string;
  href: string;
  tone: "orange" | "pink" | "yellow" | "green" | "blue";
  external?: boolean;
};

export type FeaturedArtwork = {
  title: string;
  artist: string;
  image: string;
  href: string;
  size: "square" | "wide" | "tall";
  note: string;
};

export type CollectiveArtist = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  style: string;
  image?: string;
  artwork: string;
  city?: string;
  imageMode?: "cover" | "contain";
  palette: [string, string];
};

export type NewsEvent = {
  slug: string;
  title: string;
  dateLabel: string;
  venue: string;
  excerpt: string;
  image: string;
  ctaLabel: string;
  href: string;
};

export const homepageActions: HeroAction[] = [
  { label: "Shop en ligne", href: "https://artofblach.patternbyetsy.com/shop", tone: "orange", external: true },
  { label: "Enchères en ligne", href: "https://www.catawiki.com/fr/u/7440221-blachgallery", tone: "pink", external: true },
  { label: "Découvrir le collectif", href: "/artistes-du-collectif", tone: "yellow" },
  { label: "Fresque murale", href: "/fresque-graffiti", tone: "green" },
  { label: "News & événements", href: "/blog-fluxus", tone: "blue" }
];

export const featuredArtworks: FeaturedArtwork[] = [
  { title: "Lyon feat Carotte XL", artist: "BLACH x La Carotte", image: "/images/home/street-art-blach-gallery.webp", href: "/shop", size: "tall", note: "Édition phare du collectif" },
  { title: "Portrait pop vitamine", artist: "La Carotte", image: "/images/home/pop-art-blach-gallery.webp", href: "/artistes-du-collectif", size: "square", note: "Couleurs vives et culture urbaine" },
  { title: "Trait urbain énergique", artist: "ArtHM", image: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp", href: "/artistes-du-collectif", size: "wide", note: "Portraits et animalité pop" },
  { title: "Atelier BLACH GALLERY", artist: "Collectif", image: "/images/artists/maxime-blachere.webp", href: "/artistes-du-collectif", size: "square", note: "Sélection street culture contemporaine" },
  { title: "Signal couleur grand format", artist: "Scène BLACH", image: "/images/home/street-art-breton-normand-blach-gallery.webp", href: "/shop", size: "tall", note: "Accrochage premium et solaire" },
  { title: "Icônes lyonnaises en mouvement", artist: "La Carotte", image: "/images/artists/carotte.webp", href: "/blog-fluxus", size: "wide", note: "Graffiti, pop culture et humour" }
];

export const collectiveArtists: CollectiveArtist[] = [
  {
    slug: "blach-maxime-blachere",
    name: "BLACH (Maxime Blachère)",
    role: "Fondateur de la BLACH GALLERY",
    bio: "Fondateur de la BLACH GALLERY, BLACH construit un langage hybride entre graffiti, photographie, performance et culture Fluxus. Les biographies publiques de la galerie et de Catawiki le présentent comme un artiste français diffusé à l'international, avec des œuvres vues en Europe, aux États-Unis et en Asie, et une pratique murale spectaculaire marquée notamment par une fresque monumentale pour le Tour de France 2019.",
    style: "Street art, Fluxus, performance, photographie augmentée",
    image: "/images/home/street-art-blach-gallery.webp",
    artwork: "Lyon feat Carotte XL",
    city: "Lyon",
    imageMode: "cover",
    palette: ["#ff8a5b", "#ffd166"]
  },
  {
    slug: "la-carotte",
    name: "La Carotte",
    role: "Figure graffiti de la scène lyonnaise",
    bio: "Sur la page de campagne 'La Carotte for President', BLACH GALLERY décrit La Carotte comme une figure légendaire du graffiti rhônalpin. Son univers vitaminé, prolifique et discret a essaimé dans Lyon et ses alentours depuis plus d'une décennie, avec des personnages immédiatement reconnaissables et une énergie pop très urbaine.",
    style: "Graffiti figuratif, pop urbaine, personnages signature",
    image: "/images/artists/carotte.webp",
    artwork: "Série pop culture et personnages",
    city: "Lyon / Rhône-Alpes",
    imageMode: "contain",
    palette: ["#ff5fa2", "#ffd166"]
  },
  {
    slug: "art-hm",
    name: "ArtHM",
    role: "Peintre autodidacte lyonnais",
    bio: "Les fiches publiques Artsper et Trait d'Union présentent Hassan Mahzoum, alias Art H.M, comme un artiste autodidacte né en 1979 au Maroc et installé à Lyon. Son travail croise portrait, animalité, culture pop urbaine, aérosol, Posca et peinture classique, dans un univers coloré qui a multiplié les expositions lyonnaises depuis 2019.",
    style: "Portraits, animaux, pop street art, techniques mixtes",
    artwork: "Lion bleu / portraits hommages",
    city: "Lyon",
    palette: ["#6dd3ff", "#7c5cff"]
  },
  {
    slug: "michel-donier",
    name: "Michel Donier",
    role: "Peintre voyageur",
    bio: "Dans Le Progrès, Michel Donier est présenté comme un artiste de La Tour-de-Salvagny dont les nombreux voyages nourrissent des peintures acryliques sensibles et lumineuses. Son regard de coloriste donne au collectif une respiration plus contemplative, sans quitter l'impact décoratif.",
    style: "Acrylique, paysages inspirés du voyage, couleur et lumière",
    artwork: "Séries acryliques et paysages de voyage",
    city: "La Tour-de-Salvagny",
    palette: ["#ffb703", "#fb5607"]
  },
  {
    slug: "jacques-berger",
    name: "Jacques Berger",
    role: "Peintre de nature morte et de composition",
    bio: "Les profils publics Artmajeur et Le Progrès décrivent Jacques Berger comme un artiste formé à Lyon, passé par l'atelier de son grand-père puis par les cours du soir du peintre Malgrand. Son vocabulaire plastique, souvent lié à la nature morte et à la composition, apporte un contrepoint plus silencieux et pictural à l'ensemble du collectif.",
    style: "Nature morte contemporaine, composition, peinture d'atelier",
    artwork: "Natures mortes et paysages structurés",
    city: "Lyon / Charbonnières-les-Bains",
    palette: ["#7bd389", "#3a86ff"]
  },
  {
    slug: "alain-meraud",
    name: "Alain Méraud",
    role: "Peintre des territoires et de la lumière",
    bio: "Le site officiel d'Alain Méraud présente une peinture nourrie par Lyon, les forêts du centre de la France et les rivages de Bretagne. Cette relation au territoire, au motif et à la vibration colorée enrichit la sélection BLACH GALLERY d'une note plus paysagiste et atmosphérique.",
    style: "Paysage, vibration colorée, mémoire des lieux",
    artwork: "Paysages urbains et horizons sensibles",
    city: "Lyon",
    palette: ["#06d6a0", "#118ab2"]
  },
  {
    slug: "emric-mer",
    name: "Emric Mer",
    role: "Présence invitée du collectif",
    bio: "Les informations publiques vérifiées restent aujourd'hui très limitées pour Emric Mer. Nous le présentons ici comme une présence invitée de la sélection BLACH GALLERY, dans une logique d'accrochage ouvert, en attendant un enrichissement iconographique et biographique plus complet.",
    style: "Sélection en cours d'archivage public",
    artwork: "Fiche en cours d'enrichissement",
    palette: ["#8338ec", "#ff006e"]
  }
];

export const newsEvents: NewsEvent[] = [
  {
    slug: "collective-hang",
    title: "Accrochage collectif BLACH GALLERY",
    dateLabel: "Date à annoncer",
    venue: "Lyon et formats invités",
    excerpt: "Une sélection d'œuvres, de rencontres et de signatures pour montrer la pluralité du collectif dans une ambiance galerie très street culture.",
    image: "/images/home/street-art-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/artistes-du-collectif"
  },
  {
    slug: "live-performance",
    title: "Performance live & peinture en direct",
    dateLabel: "Programmation en cours",
    venue: "Hors les murs / partenaires",
    excerpt: "Un format vivant pour mêler geste, musique, public et énergie visuelle dans l'esprit Fluxus cher à la galerie.",
    image: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/bio-contact"
  },
  {
    slug: "mural-commission",
    title: "News fresques murales",
    dateLabel: "Toute l'année",
    venue: "Entreprises, particuliers, lieux culturels",
    excerpt: "Demandes de fresques, activations visuelles et projets sur mesure : une porte d'entrée claire pour les collaborations murales et les scénographies.",
    image: "/images/home/street-art-breton-normand-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/fresque-graffiti"
  },
  {
    slug: "gallery-notebook",
    title: "Carnet de bord du collectif",
    dateLabel: "Mises à jour régulières",
    venue: "BLACH GALLERY online",
    excerpt: "Expos, vernissages, annonces d'artistes et moments de vie de la galerie : une ligne éditoriale plus humaine et plus internationale.",
    image: "/images/home/pop-art-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/blog"
  }
];

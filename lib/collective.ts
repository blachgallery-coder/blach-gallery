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
  external?: boolean;
};

export const officialSpringExpoFacebookUrl =
  "https://www.facebook.com/events/892521603862140/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D";

export const officialShopUrl = "https://shop.blachgallery.com/";

export const homepageActions: HeroAction[] = [
  { label: "SHOP EN LIGNE", href: "https://shop.blachgallery.com/", tone: "orange", external: true },
  { label: "Encheres en ligne", href: "https://www.catawiki.com/fr/u/7440221-blachgallery", tone: "pink", external: true },
  { label: "Decouvrir le collectif", href: "/artistes-du-collectif", tone: "yellow" },
  { label: "Fresque murale", href: "https://www.maxletagueur.com/", tone: "green", external: true },
  { label: "News & evenements", href: "/blog-fluxus", tone: "blue" }
];

export const featuredArtworks: FeaturedArtwork[] = [
  {
    title: "Lyon feat Carotte XL",
    artist: "BLACH x La Carotte",
    image: "/images/home/street-art-blach-gallery.webp",
    href: "/shop",
    size: "tall",
    note: "Edition phare du collectif"
  },
  {
    title: "Portrait pop vitamine",
    artist: "La Carotte",
    image: "/images/home/pop-art-blach-gallery.webp",
    href: "/artistes-du-collectif",
    size: "square",
    note: "Couleurs vives et culture urbaine"
  },
  {
    title: "Trait urbain energique",
    artist: "ArtHM",
    image: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp",
    href: "/artistes-du-collectif",
    size: "wide",
    note: "Portraits et animalite pop"
  },
  {
    title: "Atelier BLACH GALLERY",
    artist: "Collectif",
    image: "/images/artists/maxime-blachere.webp",
    href: "/artistes-du-collectif",
    size: "square",
    note: "Selection street culture contemporaine"
  },
  {
    title: "Signal couleur grand format",
    artist: "Scene BLACH",
    image: "/images/home/street-art-breton-normand-blach-gallery.webp",
    href: "/shop",
    size: "tall",
    note: "Accrochage premium et solaire"
  },
  {
    title: "Icones lyonnaises en mouvement",
    artist: "La Carotte",
    image: "/images/artists/carotte.webp",
    href: "/blog-fluxus",
    size: "wide",
    note: "Graffiti, pop culture et humour"
  }
];

export const collectiveArtists: CollectiveArtist[] = [
  {
    slug: "blach-maxime-blachere",
    name: "BLACH (Maxime Blachere)",
    role: "Fondateur de la BLACH GALLERY",
    bio: "Fondateur de la BLACH GALLERY, BLACH construit un langage hybride entre graffiti, photographie, performance et culture Fluxus. Les biographies publiques de la galerie et de Catawiki le presentent comme un artiste francais diffuse a l'international, avec des oeuvres vues en Europe, aux Etats-Unis et en Asie, et une pratique murale spectaculaire marquee notamment par une fresque monumentale pour le Tour de France 2019.",
    style: "Street art, Fluxus, performance, photographie augmentee",
    image: "/images/home/street-art-blach-gallery.webp",
    artwork: "Lyon feat Carotte XL",
    city: "Lyon",
    imageMode: "cover",
    palette: ["#ff8a5b", "#ffd166"]
  },
  {
    slug: "la-carotte",
    name: "La Carotte",
    role: "Figure graffiti de la scene lyonnaise",
    bio: "Sur la page de campagne 'La Carotte for President', BLACH GALLERY decrit La Carotte comme une figure legendaire du graffiti rhonalpin. Son univers vitamine, prolifique et discret a essaime dans Lyon et ses alentours depuis plus d'une decennie, avec des personnages immediatement reconnaissables et une energie pop tres urbaine.",
    style: "Graffiti figuratif, pop urbaine, personnages signature",
    image: "/images/artists/carotte.webp",
    artwork: "Serie pop culture et personnages",
    city: "Lyon / Rhone-Alpes",
    imageMode: "contain",
    palette: ["#ff5fa2", "#ffd166"]
  },
  {
    slug: "art-hm",
    name: "ArtHM",
    role: "Peintre autodidacte lyonnais",
    bio: "Les fiches publiques Artsper et Trait d'Union presentent Hassan Mahzoum, alias Art H.M, comme un artiste autodidacte ne en 1979 au Maroc et installe a Lyon. Son travail croise portrait, animalite, culture pop urbaine, aerosol, Posca et peinture classique, dans un univers colore qui a multiplie les expositions lyonnaises depuis 2019.",
    style: "Portraits, animaux, pop street art, techniques mixtes",
    artwork: "Lion bleu / portraits hommages",
    city: "Lyon",
    palette: ["#6dd3ff", "#7c5cff"]
  },
  {
    slug: "michel-donier",
    name: "Michel Donier",
    role: "Peintre voyageur",
    bio: "Dans Le Progres, Michel Donier est presente comme un artiste de La Tour-de-Salvagny dont les nombreux voyages nourrissent des peintures acryliques sensibles et lumineuses. Son regard de coloriste donne au collectif une respiration plus contemplative, sans quitter l'impact decoratif.",
    style: "Acrylique, paysages inspires du voyage, couleur et lumiere",
    artwork: "Series acryliques et paysages de voyage",
    city: "La Tour-de-Salvagny",
    palette: ["#ffb703", "#fb5607"]
  },
  {
    slug: "jacques-berger",
    name: "Jacques Berger",
    role: "Peintre de nature morte et de composition",
    bio: "Les profils publics Artmajeur et Le Progres decrivent Jacques Berger comme un artiste forme a Lyon, passe par l'atelier de son grand-pere puis par les cours du soir du peintre Malgrand. Son vocabulaire plastique, souvent lie a la nature morte et a la composition, apporte un contrepoint plus silencieux et pictural a l'ensemble du collectif.",
    style: "Nature morte contemporaine, composition, peinture d'atelier",
    artwork: "Natures mortes et paysages structures",
    city: "Lyon / Charbonnieres-les-Bains",
    palette: ["#7bd389", "#3a86ff"]
  },
  {
    slug: "alain-meraud",
    name: "Alain Meraud",
    role: "Peintre des territoires et de la lumiere",
    bio: "Le site officiel d'Alain Meraud presente une peinture nourrie par Lyon, les forets du centre de la France et les rivages de Bretagne. Cette relation au territoire, au motif et a la vibration coloree enrichit la selection BLACH GALLERY d'une note plus paysagiste et atmospherique.",
    style: "Paysage, vibration coloree, memoire des lieux",
    artwork: "Paysages urbains et horizons sensibles",
    city: "Lyon",
    palette: ["#06d6a0", "#118ab2"]
  },
  {
    slug: "emric-mer",
    name: "Emric Mer",
    role: "Presence invitee du collectif",
    bio: "Les informations publiques verifiees restent aujourd'hui tres limitees pour Emric Mer. Nous le presentons ici comme une presence invitee de la selection BLACH GALLERY, dans une logique d'accrochage ouvert, en attendant un enrichissement iconographique et biographique plus complet.",
    style: "Selection en cours d'archivage public",
    artwork: "Fiche en cours d'enrichissement",
    palette: ["#8338ec", "#ff006e"]
  }
];

export const newsEvents: NewsEvent[] = [
  {
    slug: "live-performance",
    title: "Performance live & peinture en direct",
    dateLabel: "Programmation en cours",
    venue: "Hors les murs / partenaires",
    excerpt: "Un format vivant pour meler geste, musique, public et energie visuelle dans l'esprit Fluxus cher a la galerie.",
    image: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/bio-contact"
  },
  {
    slug: "mural-commission",
    title: "News fresques murales",
    dateLabel: "Toute l'annee",
    venue: "Entreprises, particuliers, lieux culturels",
    excerpt: "Demandes de fresques, activations visuelles et projets sur mesure : une porte d'entree claire pour les collaborations murales et les scenographies.",
    image: "/images/home/street-art-breton-normand-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/fresque-graffiti"
  },
  {
    slug: "gallery-notebook",
    title: "Carnet de bord du collectif",
    dateLabel: "Mises a jour regulieres",
    venue: "BLACH GALLERY online",
    excerpt: "Expos, vernissages, annonces d'artistes et moments de vie de la galerie : une ligne editoriale plus humaine et plus internationale.",
    image: "/images/home/pop-art-blach-gallery.webp",
    ctaLabel: "Voir plus",
    href: "/blog"
  }
];

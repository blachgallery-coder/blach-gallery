import { getArtwork, type Artwork } from "@/lib/gallery";

export type CollectiveArtist = {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  style?: string;
  city?: string;
  works?: Artwork[];
  /** Visuels hors Shopify fournis par la galerie. nsfw = flouté jusqu'au clic. */
  gallery?: { src: string; title: string; alt: string; width: number; height: number; nsfw?: boolean }[];
};

// Biographies : reprises du contenu existant du site (sources publiques citées). Aucune donnée ajoutée.
export const collectiveArtists: CollectiveArtist[] = [
  {
    slug: "blach-maxime-blachere",
    name: "BLACH® (Maxime Blachère)",
    role: "Fondateur de BLACH GALLERY",
    bio: "Fondateur de BLACH GALLERY, BLACH® construit un langage hybride entre graffiti, photographie, performance et culture Fluxus. Les biographies publiques de la galerie et de Catawiki le présentent comme un artiste français diffusé à l'international, avec des œuvres vues en Europe, aux États-Unis et en Asie, et une pratique murale marquée notamment par une fresque monumentale pour le Tour de France 2019.",
    style: "Street art, Fluxus, performance, photographie augmentée",
    city: "Dardilly / Lyon",
    works: [getArtwork("la-fete-de-la-couleur-port-sete-2052-blach"), getArtwork("new-york-bay-2025-blach®")]
  },
  {
    slug: "bonte",
    name: "Bonté",
    role: "Street art Lyon",
    works: [getArtwork("pure-energy-bonte-street-art-lyon-original-xxl"), getArtwork("one-week-in-mollans-bonte-street-art-lyon-original")]
  },
  {
    slug: "la-carotte",
    name: "La Carotte",
    role: "Figure graffiti de la scène lyonnaise",
    bio: "Sur la page de campagne « La Carotte for President », BLACH GALLERY décrit La Carotte comme une figure légendaire du graffiti rhônalpin. Son univers vitaminé, prolifique et discret a essaimé dans Lyon et ses alentours depuis plus d'une décennie, avec des personnages immédiatement reconnaissables.",
    style: "Graffiti figuratif, pop urbaine, personnages signature",
    city: "Lyon / Rhône-Alpes",
    works: [getArtwork("carotte-spirale-endless-loop-serie-ardoise-la-carotte"), getArtwork("carotte-purple-haze-serie-ardoise-la-carotte")]
  },
  {
    slug: "art-hm",
    name: "Art HM",
    role: "Peintre autodidacte lyonnais",
    bio: "Les fiches publiques Artsper et Trait d'Union présentent Hassan Mahzoum, alias Art H.M, comme un artiste autodidacte né en 1979 au Maroc et installé à Lyon. Son travail croise portrait, animalité, culture pop urbaine, aérosol, Posca et peinture classique, avec de nombreuses expositions lyonnaises depuis 2019.",
    style: "Portraits, animaux, pop street art, techniques mixtes",
    city: "Lyon",
    works: [getArtwork("lion-king"), getArtwork("pop-kong-print-sur-bois-blach®")]
  },
  {
    slug: "pascal-negre",
    name: "Pascal Nègre",
    role: "Membre du collectif",
    // Bio fournie par Maxime Blachère le 16/11/2026.
    bio: "Pascal Nègre est un street artiste français, enfant du 19e arrondissement de Paris. Pour s'évader d'un quotidien qu'il trouve morose et violent, il dessine et il peint. Mais la réalité le rattrape : il se dirige naturellement vers le street art, où il peut s'exprimer comme il l'entend.\n\nGrand passionné d'art, il aime les belles lignes. Ses deux thèmes de prédilection : les femmes et les armes. Tantôt rondes et agréables, tantôt précises et abruptes. On peut d'ailleurs l'entendre dire qu'il peut dormir avec l'une, mais pas avec l'autre. À vous de deviner.\n\nSon style est précis, cru, instinctif. Toujours actif dans le street art, il sait jongler avec plusieurs armes et parvient à décharger sa violence et à matérialiser ses démons sur des espaces restreints : du pur concentré de violence. Bang! Bang!",
    style: "Street art — femmes et armes, à la bombe",
    city: "Paris (19e)",
    works: [getArtwork("avatar-experience-baril")],
    gallery: [
      { src: "/images/artists/oeuvre-graffiti-nu-graffitits-pascal-negre.webp", title: "Graffitits", alt: "Graffitits — Pascal Nègre, bombe aérosol, nu sur fond graffiti", width: 1024, height: 659, nsfw: true },
      { src: "/images/artists/oeuvre-graffiti-vulcania-pascal-negre.webp", title: "Vulcania", alt: "Vulcania — Pascal Nègre, bombe aérosol, rouges et orangés", width: 1024, height: 1024, nsfw: true }
    ]
  },
  {
    slug: "michel-donier",
    name: "Michel Donier",
    role: "Peintre voyageur",
    bio: "Dans Le Progrès, Michel Donier est présenté comme un artiste de La Tour-de-Salvagny dont les nombreux voyages nourrissent des peintures acryliques sensibles et lumineuses.",
    style: "Acrylique, paysages inspirés du voyage",
    city: "La Tour-de-Salvagny"
  },
  {
    slug: "jacques-berger",
    name: "Jacques Berger",
    role: "Peintre de nature morte et de composition",
    bio: "Les profils publics Artmajeur et Le Progrès décrivent Jacques Berger comme un artiste formé à Lyon, passé par l'atelier de son grand-père puis par les cours du soir du peintre Malgrand. Son vocabulaire plastique est souvent lié à la nature morte et à la composition.",
    style: "Nature morte contemporaine, composition, peinture d'atelier",
    city: "Lyon / Charbonnières-les-Bains"
  },
  {
    slug: "alain-meraud",
    name: "Alain Méraud",
    role: "Peintre des territoires et de la lumière",
    bio: "Le site officiel d'Alain Méraud présente une peinture nourrie par Lyon, les forêts du centre de la France et les rivages de Bretagne.",
    style: "Paysage, vibration colorée, mémoire des lieux",
    city: "Lyon"
  }
];

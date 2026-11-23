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
    bio: "BLACH® prend une photo de ville, l'imprime en grand… puis la recouvre de milliers de tags, de punchlines et de personnages au marqueur. Graffiti, photographie, performance et esprit Fluxus : c'est la série Vandal Is Color. Ancien tagueur devenu artiste plasticien, il fonde la BLACH GALLERY à Dardilly, galerie indépendante et collectif d'artistes. Ses œuvres circulent en Europe, aux États-Unis et en Asie, en originaux et en éditions limitées signées.",
    style: "Street art, Fluxus, performance, photographie augmentée",
    city: "Dardilly / Lyon",
    works: [getArtwork("la-fete-de-la-couleur-port-sete-2052-blach"), getArtwork("new-york-bay-2025-blach®")]
  },
  {
    slug: "bonte",
    name: "Bonté",
    bio: "Bonté peint comme on remplit un mur : couches de tags, traits noirs, flops, coulures et projections, parfois relevés d'argent. Venu du graffiti, il transpose sur toile l'énergie de la rue, du format XXL aux éditions limitées.",
    role: "Street art Lyon",
    works: [getArtwork("pure-energy-bonte-street-art-lyon-original-xxl"), getArtwork("one-week-in-mollans-bonte-street-art-lyon-original")]
  },
  {
    slug: "la-carotte",
    name: "La Carotte",
    role: "Figure graffiti de la scène lyonnaise",
    bio: "Une carotte au sourire narquois qui surgit sur les murs, les rideaux de fer et les toits de Lyon : c'est La Carotte, figure discrète et prolifique du graffiti rhônalpin. Depuis plus de dix ans, son personnage vitaminé essaime dans la ville et ses alentours. En atelier, il le décline sur toile, sculpture et ardoise, en spirales hypnotiques et couleurs acidulées.",
    style: "Graffiti figuratif, pop urbaine, personnages signature",
    city: "Lyon / Rhône-Alpes",
    works: [getArtwork("carotte-spirale-endless-loop-serie-ardoise-la-carotte"), getArtwork("carotte-purple-haze-serie-ardoise-la-carotte")]
  },
  {
    slug: "art-hm",
    name: "Art HM",
    role: "Peintre autodidacte lyonnais",
    bio: "Art HM (Hassan Mahzoum), né en 1979 au Maroc et installé à Lyon, est un peintre autodidacte. Portraits hommages, animaux, culture pop urbaine et sport : il mêle aérosol, Posca et peinture classique, avec un dessin précis et des couleurs pop qui claquent. Il expose régulièrement dans la région lyonnaise depuis 2019 et collabore avec BLACH® sur plusieurs projets.",
    style: "Portraits, animaux, pop street art, techniques mixtes",
    city: "Lyon",
    works: [getArtwork("lion-king"), getArtwork("pop-kong-print-sur-bois-art-hm")]
  },
  {
    slug: "pascal-negre",
    name: "Pascal Nègre",
    role: "Membre du collectif",
    // Bio fournie par Maxime Blachère le 16/11/2026.
    bio: "Pascal Nègre, street artiste enfant du 19e arrondissement de Paris, dessine et peint pour s'évader d'un quotidien morose et violent, avant de trouver dans le street art sa liberté d'expression.\n\nSes deux obsessions : les femmes et les armes. Tantôt rondes et douces, tantôt précises et abruptes. Il dit pouvoir dormir avec l'une, mais pas avec l'autre. À vous de deviner.\n\nUn style précis, cru, instinctif, qui concentre sa violence et ses démons sur des formats serrés. Bang! Bang!",
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
    bio: "Artiste de La Tour-de-Salvagny, Michel Donier peint ses voyages : de nombreux périples nourrissent des acryliques sensibles et lumineuses, où la couleur raconte les lieux traversés.",
    style: "Acrylique, paysages inspirés du voyage",
    city: "La Tour-de-Salvagny"
  },
  {
    slug: "jacques-berger",
    name: "Jacques Berger",
    role: "Peintre de nature morte et de composition",
    bio: "Formé à Lyon, Jacques Berger a appris dans l'atelier de son grand-père puis aux cours du soir du peintre Malgrand. Son terrain de jeu : la nature morte et la composition, traitées avec un sens classique de l'équilibre.",
    style: "Nature morte contemporaine, composition, peinture d'atelier",
    city: "Lyon / Charbonnières-les-Bains"
  },
  {
    slug: "alain-meraud",
    name: "Alain Méraud",
    role: "Peintre des territoires et de la lumière",
    bio: "Alain Méraud peint Lyon, les forêts du centre de la France et les rivages de Bretagne : une peinture de paysages et de lumières, nourrie par les lieux qu'il arpente.",
    style: "Paysage, vibration colorée, mémoire des lieux",
    city: "Lyon"
  }
];

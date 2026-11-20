// Pages artistes individuelles (/artistes/[slug]).
// Faits : biographies fournies par Maxime Blachère ou sources publiques vérifiées (audit SEO/GEO 16/11/2026,
// dossier SEO_GEO_BLACHGALLERY_2026/03). Aucun prix, palmarès ou date inventés. Œuvres : lib/artist-catalog.ts.
import { SHOP_URL } from "@/lib/gallery";

export type CatalogWork = {
  handle: string;
  title: string;
  type: string;
  price: number;
  image: string;
  width: number;
  height: number;
  dims: string;
};

export type ArtistGalleryImage = { src: string; title: string; alt: string; width: number; height: number; nsfw?: boolean };

export type ArtistProfile = {
  slug: string;
  name: string;
  /** Person = artiste individuel ; Group = duo/collectif */
  kind: "Person" | "Group";
  group: "collectif" | "invite";
  origin: string;
  tagline: string;
  /** ≤ 155 caractères — meta description */
  metaDescription: string;
  short: string;
  bio: string[];
  facts?: string[];
  mediums: string[];
  shopUrl?: string;
  portrait?: { src: string; alt: string; width: number; height: number };
  gallery?: ArtistGalleryImage[];
  sameAs?: string[];
};

const vendor = (name: string) => `${SHOP_URL}/collections/vendors?q=${encodeURIComponent(name)}`;

export const artists: ArtistProfile[] = [
  {
    slug: "blach",
    name: "BLACH®",
    kind: "Person",
    group: "collectif",
    origin: "Chambéry → Dardilly",
    tagline: "L'artiste qui vandalise tout (avec certificat)",
    metaDescription:
      "BLACH® (Maxime Blachère) : photos géantes de villes graffées au marqueur, humour Fluxus. Originaux et éditions limitées signées à la BLACH GALLERY.",
    short:
      "Photos de villes imprimées en grand puis recouvertes de milliers de tags, de punchlines et de personnages au marqueur : bienvenue dans Vandal Is Color.",
    bio: [
      "BLACH® prend une photo de ville, l'imprime en très grand… puis la recouvre de milliers de tags, de punchlines et de personnages au marqueur acrylique, au pastel et à la bombe. New York, Lyon, Sète, Paris ou le Mont-Saint-Michel : chaque regard doit trouver un nouveau détail.",
      "Ancien tagueur devenu artiste plasticien, Maxime Blachère revendique l'esprit Fluxus : humour, autodérision et refus des cases. Il a fondé la BLACH GALLERY à Dardilly, galerie indépendante et collectif d'artistes, et réalise aussi des fresques sous le nom Max Le Tagueur."
    ],
    facts: ["Série phare : Vandal Is Color (VIC)", "Originaux 1/1 et éditions limitées signées et numérotées", "Certificat d'authenticité signé à la main"],
    mediums: ["Photographie graffée", "Marqueur acrylique", "Pastel", "Bombe aérosol"],
    shopUrl: `${SHOP_URL}/collections/artiste-blach`,
    portrait: { src: "/images/artists/maxime-blachere.webp", alt: "Maxime Blachère, alias BLACH®, dans la galerie", width: 400, height: 400 },
    sameAs: ["https://www.maxletagueur.com"]
  },
  {
    slug: "la-carotte",
    name: "La Carotte",
    kind: "Person",
    group: "collectif",
    origin: "Lyon",
    tagline: "Le légume le plus graffé de Lyon",
    metaDescription:
      "La Carotte, figure discrète du graffiti lyonnais : son personnage vitaminé passe des murs de Lyon aux toiles, sculptures et ardoises. Œuvres en vente.",
    short:
      "Une carotte au sourire narquois qui surgit sur les murs, les rideaux de fer et les toits de Lyon — désormais sur toile, en sculpture et sur ardoise.",
    bio: [
      "Figure discrète et prolifique du graffiti rhônalpin, La Carotte fait essaimer depuis plus de dix ans son personnage vitaminé dans Lyon et ses alentours : en hauteur, au bord des voies, sur les volets métalliques.",
      "En atelier, la mascotte se décline en spirales hypnotiques, couleurs acidulées et compositions wild style. La série Ardoise — des originaux sur ardoise à petits prix — lui est réservée à la galerie."
    ],
    facts: ["Série Ardoise : originaux à petits prix", "Toiles, barils et sculptures"],
    mediums: ["Bombe aérosol", "Acrylique", "Ardoise", "Sculpture"],
    shopUrl: `${SHOP_URL}/collections/artiste-la-carotte`
  },
  {
    slug: "art-hm",
    name: "Art HM",
    kind: "Person",
    group: "collectif",
    origin: "Lyon",
    tagline: "Portraits pop et fauves urbains",
    metaDescription:
      "Art HM (Hassan Mahzoum), peintre autodidacte lyonnais : portraits hommages, animaux et pop culture. Éditions limitées signées à la BLACH GALLERY.",
    short:
      "Peintre autodidacte installé à Lyon, Art HM mêle aérosol, Posca et peinture pour des portraits hommages et des animaux à forte présence.",
    bio: [
      "Art HM (Hassan Mahzoum), né en 1979 au Maroc et installé à Lyon, est un peintre figuratif autodidacte. Portraits hommages, animaux, culture pop urbaine américaine et sport : son dessin précis rencontre des couleurs pop qui claquent.",
      "Il expose régulièrement dans la région lyonnaise depuis 2019, participe à l'association La Halle des Arts 69 et collabore avec BLACH® sur plusieurs projets. Ses éditions sont vendues par la galerie en qualité d'intermédiaire."
    ],
    facts: ["Éditions limitées signées et numérotées", "Membre de La Halle des Arts 69"],
    mediums: ["Aérosol", "Posca", "Peinture", "Impression sur bois"],
    shopUrl: `${SHOP_URL}/collections/artiste-art-hm`
  },
  {
    slug: "bonte",
    name: "Bonté",
    kind: "Person",
    group: "collectif",
    origin: "Paris · Lyon · Saint-Barthélemy",
    tagline: "Le mur entier sur une toile",
    metaDescription:
      "Bonté transpose sur toile l'énergie du graffiti : tags, flops, coulures et reflets argentés. Originaux XXL et éditions à la BLACH GALLERY.",
    short: "Couches de tags, traits noirs, flops et projections : Bonté peint comme on remplit un mur.",
    bio: [
      "Bonté peint comme on remplit un mur : couches de tags, traits noirs, flops, coulures et projections, parfois relevés d'argent ou posés sur un rose franc.",
      "Venu du graffiti, il transpose sur toile l'énergie de la rue, du format XXL (Pure Energy, 81 × 130 cm) aux éditions limitées."
    ],
    mediums: ["Acrylique", "Bombe aérosol", "Toile vernie"],
    shopUrl: vendor("BONTÉ")
  },
  {
    slug: "pascal-negre",
    name: "Pascal Nègre",
    kind: "Person",
    group: "collectif",
    origin: "Paris 19e",
    tagline: "Femmes, armes et belles lignes. Bang! Bang!",
    metaDescription:
      "Pascal Nègre, street artiste du 19e arrondissement de Paris : un style précis, cru, instinctif, entre femmes et armes. Œuvres à la BLACH GALLERY.",
    short: "Street artiste enfant du 19e arrondissement de Paris, au style précis, cru et instinctif.",
    bio: [
      "Pascal Nègre, street artiste enfant du 19e arrondissement de Paris, dessine et peint pour s'évader d'un quotidien morose et violent, avant de trouver dans le street art sa liberté d'expression.",
      "Ses deux obsessions : les femmes et les armes. Tantôt rondes et douces, tantôt précises et abruptes. Il dit pouvoir dormir avec l'une, mais pas avec l'autre. À vous de deviner.",
      "Un style précis, cru, instinctif, qui concentre sa violence et ses démons sur des formats serrés. Bang! Bang!"
    ],
    mediums: ["Bombe aérosol", "Sculpture sur fût métallique"],
    shopUrl: vendor("PASCAL"),
    gallery: [
      { src: "/images/artists/oeuvre-graffiti-nu-graffitits-pascal-negre.webp", title: "Graffitits", alt: "Graffitits — Pascal Nègre, bombe aérosol, nu sur fond graffiti", width: 1024, height: 659, nsfw: true },
      { src: "/images/artists/oeuvre-graffiti-vulcania-pascal-negre.webp", title: "Vulcania", alt: "Vulcania — Pascal Nègre, bombe aérosol, rouges et orangés", width: 1024, height: 1024, nsfw: true }
    ]
  },
  {
    slug: "severine-marchetti",
    name: "Séverine Marchetti (SEV)",
    kind: "Person",
    group: "collectif",
    origin: "Dardilly",
    tagline: "La ville à l'encre, le ciel éclaboussé",
    metaDescription:
      "SEV (Séverine Marchetti), artiste de Dardilly : la ville au trait d'encre sous des ciels d'aquarelle. Œuvre originale à la BLACH GALLERY.",
    short: "SEV pose la ville au trait d'encre puis laisse la couleur déborder en ciels d'aquarelle.",
    bio: [
      "Séverine Marchetti, alias SEV, artiste de Dardilly, pose la ville au trait d'encre puis laisse la couleur déborder : ciels d'aquarelle bleus, roses et dorés, entre carnet de voyage et geste pop.",
      "Son Lyon By Sev fait surgir le Vieux Lyon et le clocher Saint-Georges sous un ciel éclaboussé."
    ],
    mediums: ["Acrylique", "Encre", "Aquarelle"],
    shopUrl: vendor("SEV")
  },
  {
    slug: "art-up",
    name: "ART UP",
    kind: "Person",
    group: "invite",
    origin: "Lyon",
    tagline: "Du mur de 12 étages à la toile",
    metaDescription:
      "ART UP, street art lyonnais lié à la fresque Karim Benzema de Bron : originaux à la bombe et à l'acrylique, séries BD et Elle. Pièces uniques en vente.",
    short:
      "Street art lyonnais : la fresque Karim Benzema de Bron porte la signature Art Up. En atelier, place aux originaux à la bombe et à l'acrylique.",
    bio: [
      "En novembre 2022, une fresque dédiée à Karim Benzema apparaît sur la façade d'un immeuble de 12 étages à Bron, visible depuis le périphérique : elle est signée par les artistes lyonnais Art Up, avec l'agence Peint à la Main (Lyon Capitale).",
      "Sur toile, ART UP décline la culture BD — onomatopées « Zgruppp », « Crash flamme » — et des portraits pop sur fonds arc-en-ciel avec la série Elle. Pièces uniques, bombe et acrylique, vendues au nom et pour le compte de l'artiste."
    ],
    facts: ["Séries BD et Elle", "Originaux 50 × 70 cm"],
    mediums: ["Bombe aérosol", "Acrylique"],
    shopUrl: `${SHOP_URL}/collections/artiste-art-up`
  },
  {
    slug: "brunograffer",
    name: "Brunograffer",
    kind: "Person",
    group: "invite",
    origin: "Strasbourg",
    tagline: "Le cartoon qui fait du catch avec l'abstrait",
    metaDescription:
      "Brunograffer, peintre et illustrateur basé à Strasbourg : cartoon et abstraction. Giclée rehaussée à la main, exemplaire unique, à la BLACH GALLERY.",
    short: "Peintre et illustrateur autodidacte basé à Strasbourg, entre personnages cartoon et coups de pinceau abstraits.",
    bio: [
      "Né en 1995 et basé à Strasbourg, Brunograffer est un peintre et illustrateur autodidacte qui s'est fait connaître en partageant ses créations en ligne.",
      "Son style : des personnages cartoon musclés, des pastilles, des lettrages et des coups de pinceau, un mélange d'art abstrait et de dessin animé."
    ],
    mediums: ["Giclée rehaussée", "Acrylique", "Feutre acrylique"],
    shopUrl: vendor("BRUNOGRAFFER")
  },
  {
    slug: "socrate",
    name: "Socrate",
    kind: "Person",
    group: "invite",
    origin: "Paris",
    tagline: "Le graffiti invité dans le boudoir",
    metaDescription:
      "Socrate, artiste issue du graffiti de la banlieue parisienne : tags fluo contre images noir et blanc. Sérigraphie Wild Style à la BLACH GALLERY.",
    short: "Issue du graffiti parisien, Socrate confronte fonds tagués et images noir et blanc.",
    bio: [
      "Née en 1992 et issue de la banlieue parisienne, Socrate a peint les murs à la bombe avant de passer à la toile.",
      "Son univers joue les contrastes : fonds graffiti sauvages et colorés contre images noir et blanc, rudesse du tag contre élégance féminine."
    ],
    mediums: ["Sérigraphie", "Bombe aérosol", "Technique mixte"],
    shopUrl: vendor("SOCRATE")
  },
  {
    slug: "2fast",
    name: "2Fast",
    kind: "Person",
    group: "invite",
    origin: "Zagreb, Croatie",
    tagline: "La bombe qui explose (pour de faux)",
    metaDescription:
      "2Fast (Krešimir Buden), pionnier du graffiti croate : la série Splash It fige l'explosion d'une bombe de peinture dans la résine. Sculpture en vente.",
    short: "Pionnier du graffiti en Croatie, 2Fast transforme de vraies bombes de peinture en sculptures pop.",
    bio: [
      "Krešimir Buden, alias 2Fast, compte parmi les pionniers du graffiti en Croatie, actif depuis la fin des années 1980 à Zagreb.",
      "Avec la série Splash It, il fige dans la résine la giclée de couleur d'une bombe de peinture vidée : un clin d'œil pop art, à accrocher au mur ou à poser."
    ],
    mediums: ["Bombe recyclée", "Résine"],
    shopUrl: vendor("2FAST")
  },
  {
    slug: "truteau",
    name: "Truteau",
    kind: "Person",
    group: "invite",
    origin: "Montpellier",
    tagline: "Provoquer un sourire",
    metaDescription:
      "Truteau, plasticien autodidacte né en 1970 : bombes recyclées et icônes détournées pour provoquer un sourire. Sculpture Non Essentielle en vente.",
    short: "Plasticien autodidacte, Truteau détourne bombes et icônes avec un objectif : provoquer un sourire.",
    bio: [
      "Né en 1970, Truteau est un artiste plasticien autodidacte. Son objectif affiché : provoquer un sourire, ou au moins une réflexion.",
      "Avec Non Essentielle, il peint La Joconde barrée d'un panneau d'interdiction sur une bombe de peinture recyclée, en écho à la fermeture des musées en 2020-2021."
    ],
    mediums: ["Bombe recyclée", "Peinture"],
    shopUrl: vendor("TRUTEAU")
  },
  {
    slug: "canned",
    name: "CANNED",
    kind: "Group",
    group: "invite",
    origin: "France",
    tagline: "La société de consommation mise en boîte",
    metaDescription:
      "CANNED, duo d'artistes français (Charlotte Parenteau-Denoël & Mofart'z) : pochoirs et sérigraphies satiriques sur la surconsommation. Œuvres en vente.",
    short: "Duo d'artistes français qui détourne les symboles de la surconsommation en pochoirs et sérigraphies faits main.",
    bio: [
      "CANNED réunit deux artistes français : Charlotte Parenteau-Denoël, formée à l'architecture d'intérieur, et Mofart'z.",
      "Jeux de mots, dérision et satire : le duo détourne les symboles de la surconsommation en pochoirs, sérigraphies et peintures faits main."
    ],
    mediums: ["Pochoir", "Sérigraphie", "Peinture"],
    shopUrl: vendor("CANNED (CHARLOTTE PARENTEAU-DENOËL & MOFART'Z)")
  },
  {
    slug: "dinara-hortnagl",
    name: "Dinara Hörtnagl",
    kind: "Person",
    group: "invite",
    origin: "Vienne, Autriche",
    tagline: "Antihéros cartoon, autodérision fluo",
    metaDescription:
      "Dinara Hörtnagl, peintre installée à Vienne : antihéros cartoon pleins d'autodérision. Original I am a hot mess à la BLACH GALLERY.",
    short: "Installée à Vienne, Dinara Hörtnagl peint des antihéros cartoon pleins d'autodérision.",
    bio: [
      "Née en 1988 à Iekaterinbourg, formée à Saint-Pétersbourg et installée à Vienne depuis 2018, Dinara Hörtnagl peint des antihéros cartoon pleins d'autodérision.",
      "Depuis 2019, son projet Talking Walls invite des street artists européens à peindre avec elle. Elle a été sélectionnée au Koschatzky Art Award 2021."
    ],
    mediums: ["Acrylique sur toile"],
    shopUrl: vendor("DINARA HÖRTNAGL")
  },
  {
    slug: "maria-luisa-azzini",
    name: "Maria Luisa Azzini",
    kind: "Person",
    group: "invite",
    origin: "Florence → Londres",
    tagline: "Un monde parallèle peuplé d'ovnis",
    metaDescription:
      "Maria Luisa Azzini, née à Florence, installée à Londres : villes colorées et ovnis de The Futuristic World. Original encadré à la BLACH GALLERY.",
    short: "Née à Florence, installée à Londres, elle peint The Futuristic World : villes colorées, messages cachés et ovnis.",
    bio: [
      "Autodidacte, Maria Luisa Azzini peint professionnellement depuis 2007. Née à Florence, installée à Londres depuis 2001, elle a inventé « The Futuristic World » : des villes colorées et funky, truffées de messages cachés… et d'ovnis.",
      "Elle co-anime la Hidden House Gallery à Londres."
    ],
    mediums: ["Acrylique", "Couleurs fluorescentes", "Papier de coton"],
    shopUrl: vendor("MARIA LUISA AZZINI")
  },
  {
    slug: "lee-henderson",
    name: "Lee Henderson",
    kind: "Person",
    group: "invite",
    origin: "Royaume-Uni",
    tagline: "Le pochoir britannique qui bouscule la pop",
    metaDescription:
      "Lee Henderson, pochoiriste britannique influencé par le street art : imagerie pop réinterprétée à l'acrylique. Original 2022 à la BLACH GALLERY.",
    short: "Pochoiriste britannique influencé par le street art, qui réinterprète l'imagerie pop.",
    bio: [
      "Lee Henderson est un pochoiriste britannique influencé par le street art. Il réinterprète l'imagerie pop à l'acrylique et à la bombe, en confrontant souvent l'innocence des icônes à la décrépitude urbaine."
    ],
    mediums: ["Pochoir", "Acrylique"],
    shopUrl: vendor("LEE HENDERSON")
  },
  {
    slug: "michel-donier",
    name: "Michel Donier",
    kind: "Person",
    group: "collectif",
    origin: "La Tour-de-Salvagny",
    tagline: "Peindre les voyages",
    metaDescription:
      "Michel Donier, peintre de La Tour-de-Salvagny : des acryliques sensibles et lumineuses nourries par ses voyages. Œuvres visibles à la BLACH GALLERY.",
    short: "Des acryliques sensibles et lumineuses nourries par de nombreux voyages.",
    bio: [
      "Artiste de La Tour-de-Salvagny, Michel Donier peint ses voyages : de nombreux périples nourrissent des acryliques sensibles et lumineuses, où la couleur raconte les lieux traversés."
    ],
    mediums: ["Acrylique"]
  },
  {
    slug: "jacques-berger",
    name: "Jacques Berger",
    kind: "Person",
    group: "collectif",
    origin: "Lyon / Charbonnières-les-Bains",
    tagline: "La nature morte, l'équilibre classique",
    metaDescription:
      "Jacques Berger, peintre formé à Lyon : nature morte et composition au sens classique de l'équilibre. Œuvres visibles à la BLACH GALLERY, Dardilly.",
    short: "Formé à Lyon, Jacques Berger travaille la nature morte et la composition.",
    bio: [
      "Formé à Lyon, Jacques Berger a appris dans l'atelier de son grand-père puis aux cours du soir du peintre Malgrand. Son terrain de jeu : la nature morte et la composition, traitées avec un sens classique de l'équilibre."
    ],
    mediums: ["Peinture"]
  },
  {
    slug: "alain-meraud",
    name: "Alain Méraud",
    kind: "Person",
    group: "collectif",
    origin: "Lyon",
    tagline: "Lyon, forêts et rivages",
    metaDescription:
      "Alain Méraud peint Lyon, les forêts du centre de la France et les rivages de Bretagne. Œuvres visibles à la BLACH GALLERY, Dardilly.",
    short: "Une peinture de paysages et de lumières, de Lyon aux rivages de Bretagne.",
    bio: [
      "Alain Méraud peint Lyon, les forêts du centre de la France et les rivages de Bretagne : une peinture de paysages et de lumières, nourrie par les lieux qu'il arpente."
    ],
    mediums: ["Peinture"]
  }
];

export const getArtist = (slug: string) => artists.find((a) => a.slug === slug);
export const artistPath = (slug: string) => `/artistes/${slug}`;

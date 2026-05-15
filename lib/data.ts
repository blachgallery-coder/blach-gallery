export type Product = {
  slug: string;
  title: string;
  theme: string;
  style: string;
  artist: string;
  format: string;
  price: number;
  image: string;
  alt: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  subtitle?: string;
  features?: string[];
  shipping?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  seoDescription: string;
};

export type ThemePage = {
  slug: string;
  label: string;
  h1: string;
  intro: string;
};

export type Artist = {
  slug: string;
  name: string;
  bio: string;
  image: string;
  specialties: string[];
};

const createSeoDescription = (theme: string, artist: string, format: string) =>
  `Ce tableau street art moderne autour de la thématique ${theme} a été pensé pour les amateurs d'art contemporain qui veulent une œuvre expressive, lisible et facile à intégrer dans un intérieur premium. Réalisée par ${artist}, la composition combine énergie urbaine, contraste visuel et travail de matière pour apporter une présence forte dans un salon, une entrée, un bureau ou un espace professionnel. Le format ${format} crée un vrai impact décoratif tout en gardant l'équilibre global de la pièce. Chez BLACH GALLERY, nous sélectionnons des créations multi-artistes pour offrir une collection cohérente, émotionnelle et singulière.`;

export const themePages: ThemePage[] = [
  {
    slug: "street-art-lyon",
    label: "Street Art Lyon",
    h1: "Tableaux street art Lyon",
    intro:
      "Une sélection pensée pour celles et ceux qui aiment l'énergie visuelle de Lyon, les murs peints, le graffiti et la décoration urbaine premium. Cette page rassemble des œuvres directes, colorées et très vivantes, avec une navigation simple par artiste, prix, style et format."
  },
  {
    slug: "pop-art",
    label: "Pop Art",
    h1: "Tableaux pop art et street culture",
    intro:
      "Une collection pop, graphique et immédiate pour les intérieurs qui veulent une vraie présence visuelle. Références culturelles, contrastes francs et couleurs vibrantes composent un univers pensé à la fois pour le plaisir d'accrocher et pour une lecture SEO propre."
  },
  {
    slug: "manga",
    label: "Manga",
    h1: "Tableaux manga et art urbain",
    intro:
      "Cette thématique relie culture manga, pop visuelle et énergie street art dans un registre décoratif plus audacieux. Idéale pour les visiteurs qui cherchent une œuvre narrative, dynamique et immédiatement différenciante."
  },
  {
    slug: "art-moderne",
    label: "Art Moderne",
    h1: "Tableaux d'art moderne contemporain",
    intro:
      "Une page conçue pour les amateurs de peinture contemporaine, de grands formats lumineux et de compositions plus atmosphériques. L'objectif est d'offrir un point d'entrée plus premium vers des œuvres faciles à projeter dans un salon, un bureau ou un lieu recevant du public."
  }
];

export const products: Product[] = [
  {
    slug: "lyon-feat-carotte-xl",
    title: "Lyon feat Carotte XL",
    theme: "street-art-lyon",
    style: "",
    artist: "",
    format: "",
    price: 200,
    image: "/images/home/street-art-blach-gallery.webp",
    alt: "tableau street art moderne édition limitée graffiti art urbain Lyon",
    isBestSeller: true,
    subtitle: "Limited edition signed and numbered by Blach® and Carotte Officiel",
    features: [
      "Édition limitée à 30 exemplaires",
      "Signée et numérotée à la main",
      "Certificat d'authenticité fourni",
      "Toile premium 450g ultra résistante",
      "Infroissable",
      "Indéchirable",
      "Norme anti-feu B1",
      "Marges prévues pour montage sur châssis",
      "Châssis et cadre non fournis"
    ],
    shipping: ["Expédition gratuite France", "Tube renforcé sécurisé", "Assurance et suivi inclus"],
    ctaLabel: "Voir sur le shop",
    ctaHref: "https://artofblach.patternbyetsy.com/listing/4332245877/lyon-feat-carotte-xl-limited-edition",
    seoDescription:
      "Cette édition limitée grand format réunit BLACH® (Maxime Blachère) et Carotte Officiel autour d'une vision artistique explosive de Lyon. Entre graffiti, street art contemporain, culture urbaine et univers Fluxus, cette collaboration célèbre l'énergie créative lyonnaise dans une œuvre colorée, moderne et immédiatement reconnaissable."
  },
  {
    slug: "tableau-pop-art-moderne",
    title: "Tableau street art moderne - pop art",
    theme: "pop-art",
    style: "Pop art",
    artist: "La Carotte",
    format: "80 x 120 cm",
    price: 1290,
    image: "/images/home/pop-art-blach-gallery.webp",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isBestSeller: true,
    isNew: true,
    seoDescription: createSeoDescription("pop art", "La Carotte", "80 x 120 cm")
  },
  {
    slug: "tableau-manga-urbain",
    title: "Tableau street art moderne - portrait pop urbain",
    theme: "manga",
    style: "Portrait pop urbain",
    artist: "ArtHM",
    format: "90 x 90 cm",
    price: 1190,
    image: "/images/home/street-art-carotte-bio-number-one-blach-gallery.webp",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isNew: true,
    seoDescription: createSeoDescription("portrait pop urbain", "ArtHM", "90 x 90 cm")
  },
  {
    slug: "tableau-art-moderne-couleurs",
    title: "Tableau contemporain lumineux - paysage moderne",
    theme: "art-moderne",
    style: "Paysage contemporain",
    artist: "Alain Méraud",
    format: "120 x 120 cm",
    price: 1890,
    image: "/images/home/street-art-breton-normand-blach-gallery.webp",
    alt: "tableau contemporain lumineux galerie BLACH",
    isBestSeller: true,
    seoDescription: createSeoDescription("paysage contemporain", "Alain Méraud", "120 x 120 cm")
  }
];

export const artists: Artist[] = [
  {
    slug: "maxime-blachere",
    name: "BLACH (Maxime Blachère)",
    bio: "Fondateur de BLACH GALLERY, BLACH développe une écriture visuelle entre street art, énergie graphique, performance et scénographie murale.",
    image: "/images/home/street-art-blach-gallery.webp",
    specialties: ["Street art", "Performances live", "Commandes sur mesure"]
  },
  {
    slug: "carotte",
    name: "La Carotte",
    bio: "La Carotte signe des œuvres pop, ludiques et percutantes, pensées pour une décoration pleine de relief et une lecture immédiate.",
    image: "/images/home/pop-art-blach-gallery.webp",
    specialties: ["Pop art", "Personnages iconiques", "Formats salon"]
  },
  {
    slug: "art-hm",
    name: "ArtHM",
    bio: "ArtHM croise portraits, culture pop urbaine et animalité colorée dans un langage vif, détaillé et très direct.",
    image: "/images/home/street-art-breton-normand-blach-gallery.webp",
    specialties: ["Portraits", "Animaux", "Pop street art"]
  }
];

export const blogPosts = [
  {
    slug: "prix-tableau-street-art",
    title: "Prix tableau street art : comment comprendre la valeur d'une œuvre",
    excerpt:
      "Format, notoriété de l'artiste, technique et rareté : les critères qui influencent le prix d'un tableau street art.",
    content:
      "Le prix d'un tableau street art dépend de plusieurs facteurs complémentaires. La trajectoire de l'artiste, le format, la technique et la rareté jouent ensemble dans la perception de valeur. Chez BLACH GALLERY, l'objectif est d'aider à choisir une œuvre forte, lisible et cohérente avec un budget comme avec un projet décoratif."
  },
  {
    slug: "idee-deco-graffiti",
    title: "Idée déco graffiti : intégrer l'art urbain sans alourdir son intérieur",
    excerpt:
      "Conseils concrets pour choisir le bon format, la bonne palette et la bonne intensité visuelle pour une déco graffiti réussie.",
    content:
      "Une décoration graffiti réussie ne consiste pas à saturer un espace, mais à choisir la bonne œuvre au bon endroit. Dans un intérieur contemporain, un tableau street art peut devenir un point focal fort tout en gardant une vraie élégance grâce au contraste, au format et à la cohérence de palette."
  },
  {
    slug: "cadeau-personnalise-graffiti",
    title: "Cadeau personnalisé graffiti : une idée forte pour marquer les esprits",
    excerpt:
      "Pourquoi offrir une œuvre graffiti personnalisée crée une expérience mémorable pour un anniversaire, une entreprise ou un événement privé.",
    content:
      "Offrir un cadeau personnalisé graffiti permet de sortir des cadeaux standardisés et de proposer une pièce pensée pour la personne qui la reçoit. Une œuvre sur mesure peut intégrer un prénom, une date, un lieu, une palette et un univers visuel particulier pour devenir à la fois souvenir, objet d'art et élément décoratif durable."
  },
  {
    slug: "blach-fluxus-moderne",
    title: "BLACH : le Fluxus moderne qui casse les codes",
    excerpt:
      "Entre graffiti, photographie, performance et musique, BLACH construit un langage artistique hybride qui refuse les cases.",
    content:
      "BLACH mélange les disciplines comme d'autres mélangent les couleurs. Chez lui, le graffiti rencontre la photographie, la musique rencontre la performance et l'humour traverse toute la composition. Entre art contemporain, culture urbaine et esprit Fluxus, son travail assume un langage libre, frontal et volontairement indiscipliné."
  }
];

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/shop", label: "Shop" },
  { href: "/encheres-de-la-semaine", label: "Enchères" },
  { href: "/artistes-du-collectif", label: "Collectif" },
  { href: "/fresque-graffiti", label: "Fresques" },
  { href: "/blog-fluxus", label: "News & événements" },
  { href: "/bio-contact", label: "Bio / Contact" }
];

export const getProductsByTheme = (slug: string) =>
  products.filter((product) => product.theme === slug);

export const getThemeBySlug = (slug: string) =>
  themePages.find((theme) => theme.slug === slug);

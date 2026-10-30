
export type ThemePage = {
  slug: string;
  label: string;
  h1: string;
  intro: string;
};


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
  { href: "/artistes-du-collectif", label: "Le collectif" },
  { href: "/shop", label: "Les œuvres" },
  { href: "/encheres-de-la-semaine", label: "Enchères" },
  { href: "https://www.maxletagueur.com", label: "Fresques murales", external: true },
  { href: "/expositions", label: "Expositions" },
  { href: "/bio-contact", label: "Contact" }
];


export const getThemeBySlug = (slug: string) =>
  themePages.find((theme) => theme.slug === slug);


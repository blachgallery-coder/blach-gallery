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
  `Ce tableau street art moderne sur la thématique ${theme} a été pensé pour les amateurs d'art contemporain qui veulent une oeuvre expressive, lisible et facile à intégrer dans un intérieur premium. Réalisée par ${artist}, la composition combine énergie urbaine, contraste visuel et travail de matière afin d'apporter une présence forte dans un salon, une entrée, un bureau ou un espace professionnel. Le format ${format} permet d'obtenir un vrai impact décoratif sans perdre l'équilibre global de la pièce. Chez BLACH GALLERY, nous sélectionnons des créations multi-artistes pour offrir une collection cohérente, orientée émotion, design et singularité. Cette oeuvre s'adresse autant aux collectionneurs débutants qu'aux clients qui souhaitent investir dans une pièce de caractère pour personnaliser leur décoration. Les couleurs, le rythme graphique et l'inspiration graffiti créent une signature visuelle moderne qui attire le regard tout en restant élégante. Le tableau peut s'intégrer dans un univers loft, une décoration minimaliste ou une ambiance plus chaleureuse grâce à sa force narrative et à sa finition soignée. Son positionnement en galerie en ligne facilite la comparaison entre styles, dimensions et artistes, avec un achat rapide pensé pour la conversion mobile. Cette pièce fait partie d'une sélection conçue pour valoriser l'art urbain, soutenir la scène créative et proposer un cadeau marquant ou un achat coup de coeur durable.`;

export const themePages: ThemePage[] = [
  {
    slug: "street-art-lyon",
    label: "Street Art Lyon",
    h1: "Tableaux street art street art lyon",
    intro:
      "La page Street Art Lyon met en avant une collection inspirée par l'énergie visuelle de la ville, les murs peints, la culture urbaine et la rencontre entre graffiti et décoration haut de gamme. BLACH GALLERY rassemble ici des tableaux conçus pour les amateurs d'art vivant, ceux qui cherchent une oeuvre capable de transformer immédiatement une pièce sans tomber dans une décoration impersonnelle. Le style street art lyonnais se distingue par son intensité, sa liberté de composition et sa capacité à raconter un quartier, une ambiance ou une émotion en un seul regard. Pour un salon contemporain, un bureau de direction, un hall d'entreprise ou une résidence principale, ces oeuvres créent un point focal fort. Cette sélection a aussi été pensée pour le référencement autour des recherches locales et intentionnelles, avec des tableaux street art liés à Lyon, à l'art moderne et à la décoration urbaine premium. Chaque création présentée dans cette thématique combine impact visuel, finition soignée et lecture simple de l'offre, afin de favoriser une navigation fluide, une comparaison rapide et un passage à l'achat rassurant. Les collectionneurs découvrent des artistes au vocabulaire visuel affirmé, tandis que les acheteurs décoration trouvent une solution différenciante pour habiller un mur blanc avec personnalité. Grâce au shop filtrable, il devient facile de trouver un tableau par prix, format, style ou artiste et de basculer ensuite vers les autres thèmes de la galerie. Cette logique éditoriale et commerciale sert un double objectif : renforcer la visibilité organique de BLACH GALLERY sur Google et guider l'utilisateur vers une sélection cohérente, émotionnelle et rentable."
  },
  {
    slug: "pop-art",
    label: "Pop Art",
    h1: "Tableaux street art pop art",
    intro:
      "La thématique Pop Art de BLACH GALLERY a été conçue pour séduire les clients qui veulent une oeuvre immédiatement identifiable, colorée et impactante. Ici, la culture populaire, les références visuelles fortes, les contrastes francs et l'esprit décalé se traduisent en tableaux décoratifs capables d'électriser un intérieur en quelques secondes. Le pop art s'adresse aux amateurs de design contemporain, aux collectionneurs qui veulent sortir des codes classiques et aux acheteurs en quête d'une pièce forte pour un cadeau ou une mise en scène murale. Sur cette page, l'enjeu n'est pas seulement esthétique : il est aussi commercial et SEO. En structurant une page dédiée, BLACH GALLERY peut capter des recherches précises autour du tableau pop art moderne, du street art coloré et de la décoration murale tendance. Le texte éditorial apporte du contexte, rassure sur l'identité de la galerie et améliore la pertinence globale de la page pour les moteurs de recherche. L'utilisateur bénéficie d'une expérience claire, avec un contenu descriptif, une grille d'oeuvres et des liens naturels vers les artistes, le shop et les autres catégories. Les oeuvres pop art présentées ici offrent différentes intensités visuelles, différents formats et plusieurs signatures artistiques, ce qui facilite la conversion pour des profils variés. Que l'objectif soit de dynamiser un appartement, un bureau créatif, une salle d'attente premium ou une maison contemporaine, cette collection propose un équilibre entre accessibilité, singularité et désir. Le parcours a été pensé mobile first pour permettre un achat rapide, une lecture confortable et une montée en confiance progressive jusqu'à la demande de contact ou la commande."
  },
  {
    slug: "manga",
    label: "Manga",
    h1: "Tableaux street art manga",
    intro:
      "La collection Manga de BLACH GALLERY relie deux univers particulièrement puissants en décoration : l'imaginaire graphique japonais et l'énergie brute du street art contemporain. Cette rencontre crée des tableaux modernes, vibrants et très différenciants, parfaits pour les clients qui veulent affirmer une esthétique audacieuse dans leur intérieur. Les références manga, quand elles sont retravaillées avec une sensibilité galerie, deviennent de véritables objets d'art capables de plaire autant à un amateur pop culture qu'à un acheteur déco en quête d'un point focal fort. Cette page thématique a pour rôle de capter une intention de recherche précise tout en transformant cette curiosité en envie d'achat. Le contenu SEO met en avant les expressions liées au tableau manga, à l'art urbain et à la décoration murale moderne, tout en conservant un ton premium adapté à une galerie en ligne. Chaque oeuvre sélectionnée s'intègre dans un parcours UX simplifié : le visiteur peut comparer les formats, naviguer par artiste, ajuster son budget et découvrir rapidement les meilleures pièces selon son univers. L'objectif de cette page est aussi de montrer que la culture manga peut entrer dans un cadre décoratif élégant, adulte et haut de gamme. Avec un bon traitement visuel, des métadonnées propres et un maillage interne vers les artistes et le shop, cette catégorie devient un vrai levier d'acquisition. Elle aide BLACH GALLERY à élargir sa portée sur des requêtes émotionnelles et inspirationnelles, tout en proposant une expérience fluide qui favorise la conversion sur desktop comme sur mobile."
  },
  {
    slug: "art-moderne",
    label: "Art Moderne",
    h1: "Tableaux street art art moderne",
    intro:
      "La page Art Moderne de BLACH GALLERY rassemble des tableaux destinés aux acheteurs qui veulent conjuguer caractère urbain, élégance contemporaine et cohérence décorative. Cette approche permet de sortir d'une lecture trop niche du graffiti pour proposer un univers plus large, plus premium et plus facile à projeter dans un salon, une suite parentale, un bureau d'entreprise ou un lieu recevant du public. Le visiteur découvre une sélection qui dialogue avec les codes du design intérieur actuel : grands formats, couleurs structurées, mouvements graphiques et forte identité visuelle. Sur le plan SEO, cette page vise des requêtes à fort potentiel de trafic comme tableau art moderne, tableau street art moderne ou décoration murale contemporaine. Le contenu éditorial renforce la compréhension du thème par Google tout en accompagnant l'utilisateur dans sa décision. BLACH GALLERY y affirme sa promesse de galerie multi-artistes, avec des oeuvres originales ou en séries limitées pensées pour créer un effet waouh sans complexifier le parcours d'achat. Les filtres du shop, les liens internes et la hiérarchie visuelle de la page soutiennent une UX claire, centrée sur la comparaison et l'intention commerciale. Pour les clients particuliers comme pour les entreprises, cette catégorie donne des repères simples : quelles couleurs choisir, quel format privilégier, quel artiste correspond à quel univers. Le résultat est une page utile, inspirante et orientée conversion, capable de transformer un trafic informationnel en demande qualifiée ou en vente directe."
  }
];

export const products: Product[] = [
  {
    slug: "tableau-street-art-lyon-moderne",
    title: "Tableau street art moderne – street art lyon",
    theme: "street-art-lyon",
    style: "Street art",
    artist: "Maxime Blachere",
    format: "100 x 100 cm",
    price: 1450,
    image: "/images/home/street-art-blach-gallery.png",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isBestSeller: true,
    seoDescription: createSeoDescription("street art lyon", "Maxime Blachere", "100 x 100 cm")
  },
  {
    slug: "tableau-pop-art-moderne",
    title: "Tableau street art moderne – pop art",
    theme: "pop-art",
    style: "Pop art",
    artist: "Carotte",
    format: "80 x 120 cm",
    price: 1290,
    image: "/images/home/pop-art-blach-gallery.png",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isBestSeller: true,
    isNew: true,
    seoDescription: createSeoDescription("pop art", "Carotte", "80 x 120 cm")
  },
  {
    slug: "tableau-manga-urbain",
    title: "Tableau street art moderne – manga",
    theme: "manga",
    style: "Manga urbain",
    artist: "TCHK",
    format: "90 x 90 cm",
    price: 1190,
    image: "/images/home/art-abstrait-blach-gallery.png",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isNew: true,
    seoDescription: createSeoDescription("manga", "TCHK", "90 x 90 cm")
  },
  {
    slug: "tableau-art-moderne-couleurs",
    title: "Tableau street art moderne – art moderne",
    theme: "art-moderne",
    style: "Art moderne",
    artist: "Bonte",
    format: "120 x 120 cm",
    price: 1890,
    image: "/images/home/art-contemporain-blach-gallery.png",
    alt: "tableau street art moderne artiste BLACH Lyon",
    isBestSeller: true,
    seoDescription: createSeoDescription("art moderne", "Bonte", "120 x 120 cm")
  }
];

export const artists: Artist[] = [
  {
    slug: "maxime-blachere",
    name: "Maxime Blachere",
    bio: "Fondateur de BLACH GALLERY, Maxime Blachere développe une écriture visuelle entre street art, énergie graphique et scénographie murale pour les particuliers et les marques.",
    image: "/images/home/street-art-blach-gallery.png",
    specialties: ["Street art", "Performances live", "Commandes sur mesure"]
  },
  {
    slug: "carotte",
    name: "Carotte",
    bio: "Carotte signe des oeuvres pop, ludiques et percutantes, pensées pour une décoration pleine de relief et une lecture immédiate.",
    image: "/images/home/pop-art-blach-gallery.png",
    specialties: ["Pop art", "Personnages iconiques", "Formats salon"]
  },
  {
    slug: "tchk",
    name: "TCHK",
    bio: "TCHK croise culture urbaine, références manga et compositions explosives pour des tableaux à forte personnalité.",
    image: "/images/home/art-contemporain-blach-gallery.png",
    specialties: ["Manga", "Graffiti", "Pièces collector"]
  }
];

export const blogPosts = [
  {
    slug: "prix-tableau-street-art",
    title: "Prix tableau street art : comment comprendre la valeur d'une oeuvre",
    excerpt:
      "Format, notoriété de l'artiste, technique et rareté : les critères qui influencent le prix d'un tableau street art.",
    content:
      "Le prix d'un tableau street art dépend de plusieurs facteurs complémentaires. Le premier est la trajectoire de l'artiste : une signature déjà reconnue, exposée ou collectionnée aura naturellement un positionnement plus élevé. Le second est le format, car une oeuvre grand format implique davantage de temps, de matière et d'impact décoratif. La technique joue également un rôle important, qu'il s'agisse de peinture, collage, bombe, pochoir ou techniques mixtes. À cela s'ajoutent la rareté de la pièce, le caractère original ou en série limitée, ainsi que la qualité de finition. Pour un acheteur, comprendre ces éléments permet de comparer plus intelligemment et d'investir dans une oeuvre cohérente avec son budget et son projet. Chez BLACH GALLERY, l'objectif est d'aider à choisir un tableau qui ait à la fois une force visuelle, une vraie identité artistique et une valeur perçue durable dans le temps."
  },
  {
    slug: "idee-deco-graffiti",
    title: "Idée déco graffiti : intégrer l'art urbain sans alourdir son intérieur",
    excerpt:
      "Conseils concrets pour choisir le bon format, la bonne palette et la bonne intensité visuelle pour une déco graffiti réussie.",
    content:
      "Une décoration graffiti réussie ne consiste pas à saturer un espace, mais à choisir la bonne oeuvre au bon endroit. Dans un intérieur contemporain, un tableau street art peut devenir le point focal principal d'un salon ou d'une entrée. Pour garder une ambiance élégante, il est utile de travailler par contraste : un mur clair, un mobilier plutôt sobre et une oeuvre riche en couleur ou en matière. Les grands formats conviennent bien aux pièces ouvertes, tandis que les formats carrés ou verticaux s'adaptent à des espaces plus compacts. Il faut aussi penser à la cohérence émotionnelle : une oeuvre très vive apporte de l'énergie, alors qu'une pièce plus graphique structure l'espace avec sophistication. BLACH GALLERY sélectionne des oeuvres qui permettent précisément ce dosage, afin d'associer impact visuel et confort décoratif."
  },
  {
    slug: "cadeau-personnalise-graffiti",
    title: "Cadeau personnalisé graffiti : une idée forte pour marquer les esprits",
    excerpt:
      "Pourquoi offrir une oeuvre graffiti personnalisée crée une expérience mémorable pour un anniversaire, une entreprise ou un événement privé.",
    content:
      "Offrir un cadeau personnalisé graffiti permet de sortir des cadeaux standardisés et de proposer une pièce pensée pour la personne qui la reçoit. Une oeuvre sur mesure peut intégrer un prénom, une date, un lieu symbolique, des couleurs spécifiques ou un univers visuel particulier. Ce type de création fonctionne très bien pour un anniversaire, un mariage, un cadeau corporate, une inauguration ou un événement interne d'entreprise. Au-delà de l'objet, le cadeau devient expérience, récit et élément de décoration durable. Pour être réussi, il doit conserver une vraie qualité artistique et ne pas se limiter à une personnalisation superficielle. BLACH GALLERY peut orienter les clients vers le bon artiste, le bon format et le bon niveau de personnalisation pour obtenir un résultat à la fois fort, esthétique et mémorable."
  }
];

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/shop", label: "Shop" },
  { href: "/encheres-de-la-semaine", label: "Encheres" },
  { href: "/artistes-du-collectif", label: "Collectif" },
  { href: "/fresque-graffiti", label: "Fresques" },
  { href: "/blog-fluxus", label: "Blog Fluxus" },
  { href: "/bio-contact", label: "Bio / Contact" }
];

export const getProductsByTheme = (slug: string) =>
  products.filter((product) => product.theme === slug);

export const getThemeBySlug = (slug: string) =>
  themePages.find((theme) => theme.slug === slug);


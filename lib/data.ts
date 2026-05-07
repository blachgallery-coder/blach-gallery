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
  `Ce tableau street art moderne sur la thÃ©matique ${theme} a Ã©tÃ© pensÃ© pour les amateurs d'art contemporain qui veulent une oeuvre expressive, lisible et facile Ã  intÃ©grer dans un intÃ©rieur premium. RÃ©alisÃ©e par ${artist}, la composition combine Ã©nergie urbaine, contraste visuel et travail de matiÃ¨re afin d'apporter une prÃ©sence forte dans un salon, une entrÃ©e, un bureau ou un espace professionnel. Le format ${format} permet d'obtenir un vrai impact dÃ©coratif sans perdre l'Ã©quilibre global de la piÃ¨ce. Chez BLACH GALLERY, nous sÃ©lectionnons des crÃ©ations multi-artistes pour offrir une collection cohÃ©rente, orientÃ©e Ã©motion, design et singularitÃ©. Cette oeuvre s'adresse autant aux collectionneurs dÃ©butants qu'aux clients qui souhaitent investir dans une piÃ¨ce de caractÃ¨re pour personnaliser leur dÃ©coration. Les couleurs, le rythme graphique et l'inspiration graffiti crÃ©ent une signature visuelle moderne qui attire le regard tout en restant Ã©lÃ©gante. Le tableau peut s'intÃ©grer dans un univers loft, une dÃ©coration minimaliste ou une ambiance plus chaleureuse grÃ¢ce Ã  sa force narrative et Ã  sa finition soignÃ©e. Son positionnement en galerie en ligne facilite la comparaison entre styles, dimensions et artistes, avec un achat rapide pensÃ© pour la conversion mobile. Cette piÃ¨ce fait partie d'une sÃ©lection conÃ§ue pour valoriser l'art urbain, soutenir la scÃ¨ne crÃ©ative et proposer un cadeau marquant ou un achat coup de coeur durable.`;

export const themePages: ThemePage[] = [
  {
    slug: "street-art-lyon",
    label: "Street Art Lyon",
    h1: "Tableaux street art street art lyon",
    intro:
      "La page Street Art Lyon met en avant une collection inspirÃ©e par l'Ã©nergie visuelle de la ville, les murs peints, la culture urbaine et la rencontre entre graffiti et dÃ©coration haut de gamme. BLACH GALLERY rassemble ici des tableaux conÃ§us pour les amateurs d'art vivant, ceux qui cherchent une oeuvre capable de transformer immÃ©diatement une piÃ¨ce sans tomber dans une dÃ©coration impersonnelle. Le style street art lyonnais se distingue par son intensitÃ©, sa libertÃ© de composition et sa capacitÃ© Ã  raconter un quartier, une ambiance ou une Ã©motion en un seul regard. Pour un salon contemporain, un bureau de direction, un hall d'entreprise ou une rÃ©sidence principale, ces oeuvres crÃ©ent un point focal fort. Cette sÃ©lection a aussi Ã©tÃ© pensÃ©e pour le rÃ©fÃ©rencement autour des recherches locales et intentionnelles, avec des tableaux street art liÃ©s Ã  Lyon, Ã  l'art moderne et Ã  la dÃ©coration urbaine premium. Chaque crÃ©ation prÃ©sentÃ©e dans cette thÃ©matique combine impact visuel, finition soignÃ©e et lecture simple de l'offre, afin de favoriser une navigation fluide, une comparaison rapide et un passage Ã  l'achat rassurant. Les collectionneurs dÃ©couvrent des artistes au vocabulaire visuel affirmÃ©, tandis que les acheteurs dÃ©coration trouvent une solution diffÃ©renciante pour habiller un mur blanc avec personnalitÃ©. GrÃ¢ce au shop filtrable, il devient facile de trouver un tableau par prix, format, style ou artiste et de basculer ensuite vers les autres thÃ¨mes de la galerie. Cette logique Ã©ditoriale et commerciale sert un double objectif : renforcer la visibilitÃ© organique de BLACH GALLERY sur Google et guider l'utilisateur vers une sÃ©lection cohÃ©rente, Ã©motionnelle et rentable."
  },
  {
    slug: "pop-art",
    label: "Pop Art",
    h1: "Tableaux street art pop art",
    intro:
      "La thÃ©matique Pop Art de BLACH GALLERY a Ã©tÃ© conÃ§ue pour sÃ©duire les clients qui veulent une oeuvre immÃ©diatement identifiable, colorÃ©e et impactante. Ici, la culture populaire, les rÃ©fÃ©rences visuelles fortes, les contrastes francs et l'esprit dÃ©calÃ© se traduisent en tableaux dÃ©coratifs capables d'Ã©lectriser un intÃ©rieur en quelques secondes. Le pop art s'adresse aux amateurs de design contemporain, aux collectionneurs qui veulent sortir des codes classiques et aux acheteurs en quÃªte d'une piÃ¨ce forte pour un cadeau ou une mise en scÃ¨ne murale. Sur cette page, l'enjeu n'est pas seulement esthÃ©tique : il est aussi commercial et SEO. En structurant une page dÃ©diÃ©e, BLACH GALLERY peut capter des recherches prÃ©cises autour du tableau pop art moderne, du street art colorÃ© et de la dÃ©coration murale tendance. Le texte Ã©ditorial apporte du contexte, rassure sur l'identitÃ© de la galerie et amÃ©liore la pertinence globale de la page pour les moteurs de recherche. L'utilisateur bÃ©nÃ©ficie d'une expÃ©rience claire, avec un contenu descriptif, une grille d'oeuvres et des liens naturels vers les artistes, le shop et les autres catÃ©gories. Les oeuvres pop art prÃ©sentÃ©es ici offrent diffÃ©rentes intensitÃ©s visuelles, diffÃ©rents formats et plusieurs signatures artistiques, ce qui facilite la conversion pour des profils variÃ©s. Que l'objectif soit de dynamiser un appartement, un bureau crÃ©atif, une salle d'attente premium ou une maison contemporaine, cette collection propose un Ã©quilibre entre accessibilitÃ©, singularitÃ© et dÃ©sir. Le parcours a Ã©tÃ© pensÃ© mobile first pour permettre un achat rapide, une lecture confortable et une montÃ©e en confiance progressive jusqu'Ã  la demande de contact ou la commande."
  },
  {
    slug: "manga",
    label: "Manga",
    h1: "Tableaux street art manga",
    intro:
      "La collection Manga de BLACH GALLERY relie deux univers particuliÃ¨rement puissants en dÃ©coration : l'imaginaire graphique japonais et l'Ã©nergie brute du street art contemporain. Cette rencontre crÃ©e des tableaux modernes, vibrants et trÃ¨s diffÃ©renciants, parfaits pour les clients qui veulent affirmer une esthÃ©tique audacieuse dans leur intÃ©rieur. Les rÃ©fÃ©rences manga, quand elles sont retravaillÃ©es avec une sensibilitÃ© galerie, deviennent de vÃ©ritables objets d'art capables de plaire autant Ã  un amateur pop culture qu'Ã  un acheteur dÃ©co en quÃªte d'un point focal fort. Cette page thÃ©matique a pour rÃ´le de capter une intention de recherche prÃ©cise tout en transformant cette curiositÃ© en envie d'achat. Le contenu SEO met en avant les expressions liÃ©es au tableau manga, Ã  l'art urbain et Ã  la dÃ©coration murale moderne, tout en conservant un ton premium adaptÃ© Ã  une galerie en ligne. Chaque oeuvre sÃ©lectionnÃ©e s'intÃ¨gre dans un parcours UX simplifiÃ© : le visiteur peut comparer les formats, naviguer par artiste, ajuster son budget et dÃ©couvrir rapidement les meilleures piÃ¨ces selon son univers. L'objectif de cette page est aussi de montrer que la culture manga peut entrer dans un cadre dÃ©coratif Ã©lÃ©gant, adulte et haut de gamme. Avec un bon traitement visuel, des mÃ©tadonnÃ©es propres et un maillage interne vers les artistes et le shop, cette catÃ©gorie devient un vrai levier d'acquisition. Elle aide BLACH GALLERY Ã  Ã©largir sa portÃ©e sur des requÃªtes Ã©motionnelles et inspirationnelles, tout en proposant une expÃ©rience fluide qui favorise la conversion sur desktop comme sur mobile."
  },
  {
    slug: "art-moderne",
    label: "Art Moderne",
    h1: "Tableaux street art art moderne",
    intro:
      "La page Art Moderne de BLACH GALLERY rassemble des tableaux destinÃ©s aux acheteurs qui veulent conjuguer caractÃ¨re urbain, Ã©lÃ©gance contemporaine et cohÃ©rence dÃ©corative. Cette approche permet de sortir d'une lecture trop niche du graffiti pour proposer un univers plus large, plus premium et plus facile Ã  projeter dans un salon, une suite parentale, un bureau d'entreprise ou un lieu recevant du public. Le visiteur dÃ©couvre une sÃ©lection qui dialogue avec les codes du design intÃ©rieur actuel : grands formats, couleurs structurÃ©es, mouvements graphiques et forte identitÃ© visuelle. Sur le plan SEO, cette page vise des requÃªtes Ã  fort potentiel de trafic comme tableau art moderne, tableau street art moderne ou dÃ©coration murale contemporaine. Le contenu Ã©ditorial renforce la comprÃ©hension du thÃ¨me par Google tout en accompagnant l'utilisateur dans sa dÃ©cision. BLACH GALLERY y affirme sa promesse de galerie multi-artistes, avec des oeuvres originales ou en sÃ©ries limitÃ©es pensÃ©es pour crÃ©er un effet waouh sans complexifier le parcours d'achat. Les filtres du shop, les liens internes et la hiÃ©rarchie visuelle de la page soutiennent une UX claire, centrÃ©e sur la comparaison et l'intention commerciale. Pour les clients particuliers comme pour les entreprises, cette catÃ©gorie donne des repÃ¨res simples : quelles couleurs choisir, quel format privilÃ©gier, quel artiste correspond Ã  quel univers. Le rÃ©sultat est une page utile, inspirante et orientÃ©e conversion, capable de transformer un trafic informationnel en demande qualifiÃ©e ou en vente directe."
  }
];

export const products: Product[] = [
  {
    slug: "tableau-street-art-lyon-moderne",
    title: "Tableau street art moderne â€“ street art lyon",
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
    title: "Tableau street art moderne â€“ pop art",
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
    title: "Tableau street art moderne â€“ manga",
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
    title: "Tableau street art moderne â€“ art moderne",
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
    bio: "Fondateur de BLACH GALLERY, Maxime Blachere dÃ©veloppe une Ã©criture visuelle entre street art, Ã©nergie graphique et scÃ©nographie murale pour les particuliers et les marques.",
    image: "/images/home/street-art-blach-gallery.png",
    specialties: ["Street art", "Performances live", "Commandes sur mesure"]
  },
  {
    slug: "carotte",
    name: "Carotte",
    bio: "Carotte signe des oeuvres pop, ludiques et percutantes, pensÃ©es pour une dÃ©coration pleine de relief et une lecture immÃ©diate.",
    image: "/images/home/pop-art-blach-gallery.png",
    specialties: ["Pop art", "Personnages iconiques", "Formats salon"]
  },
  {
    slug: "tchk",
    name: "TCHK",
    bio: "TCHK croise culture urbaine, rÃ©fÃ©rences manga et compositions explosives pour des tableaux Ã  forte personnalitÃ©.",
    image: "/images/home/art-contemporain-blach-gallery.png",
    specialties: ["Manga", "Graffiti", "PiÃ¨ces collector"]
  }
];

export const blogPosts = [
  {
    slug: "prix-tableau-street-art",
    title: "Prix tableau street art : comment comprendre la valeur d'une oeuvre",
    excerpt:
      "Format, notoriÃ©tÃ© de l'artiste, technique et raretÃ© : les critÃ¨res qui influencent le prix d'un tableau street art.",
    content:
      "Le prix d'un tableau street art dÃ©pend de plusieurs facteurs complÃ©mentaires. Le premier est la trajectoire de l'artiste : une signature dÃ©jÃ  reconnue, exposÃ©e ou collectionnÃ©e aura naturellement un positionnement plus Ã©levÃ©. Le second est le format, car une oeuvre grand format implique davantage de temps, de matiÃ¨re et d'impact dÃ©coratif. La technique joue Ã©galement un rÃ´le important, qu'il s'agisse de peinture, collage, bombe, pochoir ou techniques mixtes. Ã€ cela s'ajoutent la raretÃ© de la piÃ¨ce, le caractÃ¨re original ou en sÃ©rie limitÃ©e, ainsi que la qualitÃ© de finition. Pour un acheteur, comprendre ces Ã©lÃ©ments permet de comparer plus intelligemment et d'investir dans une oeuvre cohÃ©rente avec son budget et son projet. Chez BLACH GALLERY, l'objectif est d'aider Ã  choisir un tableau qui ait Ã  la fois une force visuelle, une vraie identitÃ© artistique et une valeur perÃ§ue durable dans le temps."
  },
  {
    slug: "idee-deco-graffiti",
    title: "IdÃ©e dÃ©co graffiti : intÃ©grer l'art urbain sans alourdir son intÃ©rieur",
    excerpt:
      "Conseils concrets pour choisir le bon format, la bonne palette et la bonne intensitÃ© visuelle pour une dÃ©co graffiti rÃ©ussie.",
    content:
      "Une dÃ©coration graffiti rÃ©ussie ne consiste pas Ã  saturer un espace, mais Ã  choisir la bonne oeuvre au bon endroit. Dans un intÃ©rieur contemporain, un tableau street art peut devenir le point focal principal d'un salon ou d'une entrÃ©e. Pour garder une ambiance Ã©lÃ©gante, il est utile de travailler par contraste : un mur clair, un mobilier plutÃ´t sobre et une oeuvre riche en couleur ou en matiÃ¨re. Les grands formats conviennent bien aux piÃ¨ces ouvertes, tandis que les formats carrÃ©s ou verticaux s'adaptent Ã  des espaces plus compacts. Il faut aussi penser Ã  la cohÃ©rence Ã©motionnelle : une oeuvre trÃ¨s vive apporte de l'Ã©nergie, alors qu'une piÃ¨ce plus graphique structure l'espace avec sophistication. BLACH GALLERY sÃ©lectionne des oeuvres qui permettent prÃ©cisÃ©ment ce dosage, afin d'associer impact visuel et confort dÃ©coratif."
  },
  {
    slug: "cadeau-personnalise-graffiti",
    title: "Cadeau personnalisÃ© graffiti : une idÃ©e forte pour marquer les esprits",
    excerpt:
      "Pourquoi offrir une oeuvre graffiti personnalisÃ©e crÃ©e une expÃ©rience mÃ©morable pour un anniversaire, une entreprise ou un Ã©vÃ©nement privÃ©.",
    content:
      "Offrir un cadeau personnalisÃ© graffiti permet de sortir des cadeaux standardisÃ©s et de proposer une piÃ¨ce pensÃ©e pour la personne qui la reÃ§oit. Une oeuvre sur mesure peut intÃ©grer un prÃ©nom, une date, un lieu symbolique, des couleurs spÃ©cifiques ou un univers visuel particulier. Ce type de crÃ©ation fonctionne trÃ¨s bien pour un anniversaire, un mariage, un cadeau corporate, une inauguration ou un Ã©vÃ©nement interne d'entreprise. Au-delÃ  de l'objet, le cadeau devient expÃ©rience, rÃ©cit et Ã©lÃ©ment de dÃ©coration durable. Pour Ãªtre rÃ©ussi, il doit conserver une vraie qualitÃ© artistique et ne pas se limiter Ã  une personnalisation superficielle. BLACH GALLERY peut orienter les clients vers le bon artiste, le bon format et le bon niveau de personnalisation pour obtenir un rÃ©sultat Ã  la fois fort, esthÃ©tique et mÃ©morable."
  }
  ,{
    slug: "blach-fluxus-moderne",
    title: "BLACH : le Fluxus moderne qui casse les codes",
    excerpt:
      "Entre graffiti, photographie, performance et musique, BLACH construit un langage artistique hybride qui refuse les cases.",
    content:
      "Ancien professeur d'EPS, musicien, graffeur, performer, plasticien, Maxime Blachere alias BLACH melange les disciplines comme d'autres melangent les couleurs. Son travail ne cherche pas a rentrer dans les cases : il les explose. Chez BLACH, le graffiti rencontre la photographie, le street art rencontre la musique, le chaos rencontre la precision. Marqueurs acryliques, pastels, collages, vernis ultra brillants, performances live, rap, humour absurde et energie punk : tout devient support artistique. Le mouvement Fluxus des annees 60 voulait abolir les frontieres entre l'art et la vie. BLACH pousse cette logique encore plus loin. Il transforme les objets du quotidien, vandalise les images trop parfaites, detourne les symboles populaires et cree un univers ou la liberte passe avant les regles. Son parcours atypique nourrit cette approche. Ancien prof de sport pendant pres de 10 ans, il garde une energie physique dans sa maniere de peindre : gestes rapides, projections, spontaneite, performance. La musique influence aussi son rythme visuel. Chaque toile fonctionne presque comme un morceau de rap ou un freestyle improvise. L'humour est omnipresent. Chez BLACH, un singe en origami peut devenir une icone pop, une scene classique peut finir recouverte de tags fluorescents, et une photo de paysage peut etre totalement detournee par une avalanche de couleurs. Mais derriere le chaos apparent se cache une vraie reflexion sur notre epoque : saturation visuelle, reseaux sociaux, consommation d'images, culture urbaine mondiale et besoin permanent de liberte. BLACH ne cherche pas a faire du street art decoratif. Il cherche a provoquer une reaction. Son travail divise parfois, derange souvent, mais ne laisse jamais indifferent. Aujourd'hui, ses oeuvres circulent entre galeries, ventes aux encheres internationales, reseaux sociaux et performances live. Entre art contemporain, graffiti et culture Fluxus, BLACH construit un langage artistique totalement hybride. Un artiste qui refuse de choisir entre musique, peinture, performance ou provocation. Un artiste qui prefere creer les regles plutot que les suivre. Fluxus. BLACH (Maxime Blachere)."
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




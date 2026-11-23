// Articles de blog complets (23/11/2026) — contenu long + FAQ, pour le SEO FR et la lecture par les IA.
// Règle : uniquement des faits vérifiables (prix = catalogue Shopify relevé le 29/10/2026, délais = boutique).

export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type ArticleFaq = { q: string; a: string };
export type ArticleLink = { href: string; label: string; external?: boolean };

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  intro: string;
  sections: ArticleSection[];
  faq: ArticleFaq[];
  links: ArticleLink[];
};

const SHOP = "https://shop.blachgallery.com";

export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-tableau-street-art",
    title: "Prix tableau street art : comment comprendre la valeur d'une œuvre",
    description:
      "Original ou édition limitée, format, technique, artiste, provenance : les critères concrets qui expliquent le prix d'un tableau street art, avec des fourchettes réelles.",
    publishedAt: "2026-05-09",
    updatedAt: "2026-11-23",
    intro:
      "Entre une édition limitée à moins de 200 € et un original grand format à plus de 1 000 €, l'écart de prix d'un tableau street art peut surprendre. Il ne doit rien au hasard. Voici les critères qui fixent la valeur d'une œuvre, ce qu'il faut vérifier avant d'acheter, et des exemples de prix réels issus du catalogue de BLACH GALLERY.",
    sections: [
      {
        heading: "Original ou édition limitée : le premier écart de prix",
        paragraphs: [
          "Un original est une pièce unique (1/1), peinte ou travaillée directement par l'artiste. Une édition limitée est un tirage d'art produit en nombre fixe d'exemplaires, puis signé et numéroté à la main (par exemple 7/30). Le nombre d'exemplaires est annoncé dès le départ et ne peut pas être augmenté ensuite.",
          "C'est le critère qui pèse le plus. À la galerie, les originaux grand format se situent en général entre 1 099 € et 1 450 €, quand les éditions limitées signées démarrent autour de 99 € et montent à 299 € selon le support et le tirage. Les petits originaux, comme la Série Ardoise de La Carotte (œuvres uniques peintes sur ardoise), sont proposés à 99 € : une porte d'entrée vers l'œuvre unique."
        ]
      },
      {
        heading: "Le format et le support",
        paragraphs: [
          "Un grand format demande plus de temps, plus de matière et plus de manutention. Il a aussi un impact visuel plus fort dans une pièce de vie, ce qui se reflète dans le prix.",
          "Le support compte autant que la taille. Une toile imprimée livrée roulée en tube coûte moins cher qu'une impression sur aluminium Dibond prête à accrocher, ou qu'une toile tendue sur châssis. Avant de comparer deux prix, vérifiez toujours ce qui est inclus : cadre, châssis, crochets, vernis."
        ],
        bullets: [
          "Toile nue (livrée en tube) : la solution la plus économique, à encadrer ou tendre soi-même.",
          "Toile sur châssis : prête à accrocher, plus chère à produire et à expédier.",
          "Aluminium Dibond : rigide, très durable, rendu brillant et contemporain.",
          "Bois : rendu mat et chaleureux, souvent en petits formats."
        ]
      },
      {
        heading: "La technique et le temps passé",
        paragraphs: [
          "Bombe, pochoir, marqueur acrylique, pastel, collage, techniques mixtes : plus une technique est longue et risquée, plus elle se valorise. Chez BLACH®, par exemple, des photographies urbaines grand format sont recouvertes de milliers de graffitis au marqueur acrylique : un travail de plusieurs jours à plusieurs semaines sur une seule pièce.",
          "Sur une édition limitée, les rehauts à la main (une signature peinte, une touche de couleur ajoutée, un vernis appliqué à la main) rendent chaque exemplaire légèrement différent et justifient un prix supérieur à un simple tirage."
        ]
      },
      {
        heading: "La trajectoire de l'artiste",
        paragraphs: [
          "Un artiste exposé régulièrement, présent dans plusieurs galeries, vendu aux enchères et suivi par des collectionneurs aura une cote plus établie qu'un artiste qui débute. Ce n'est pas un jugement sur la qualité : c'est la demande qui fait le prix.",
          "Pour vous faire une idée, regardez l'historique de l'artiste : expositions, ventes passées, enchères publiques (Catawiki, maisons de vente), présence internationale. Les résultats d'enchères sont publics et donnent un repère concret de ce que des acheteurs ont réellement payé."
        ]
      },
      {
        heading: "Rareté et tirage : lire le chiffre après la barre",
        paragraphs: [
          "Sur une édition limitée, le chiffre après la barre est essentiel. Une édition /10 est trois fois plus rare qu'une édition /30, et son prix le reflète. Méfiez-vous des « éditions limitées » sans nombre annoncé, ou dont le tirage dépasse plusieurs centaines d'exemplaires : on se rapproche alors de l'affiche décorative.",
          "Le numéro d'exemplaire (1/30 ou 30/30) n'a en revanche pas d'effet notable sur la valeur, contrairement à une idée reçue."
        ]
      },
      {
        heading: "Provenance et certificat d'authenticité",
        paragraphs: [
          "Une œuvre sérieuse est accompagnée d'un certificat d'authenticité signé, qui précise au minimum : le nom de l'artiste, le titre, la technique, les dimensions, l'année, et pour une édition le numéro d'exemplaire et le tirage total. Conservez-le avec la facture : ils seront demandés en cas de revente, de don ou d'assurance.",
          "Achetez auprès de l'artiste ou d'une galerie qui le représente directement. Chez BLACH GALLERY, chaque œuvre est vendue avec son certificat, et quand la galerie vend l'œuvre d'un autre artiste du collectif, elle l'indique clairement sur la fiche."
        ]
      },
      {
        heading: "Les frais à prévoir en plus du prix",
        paragraphs: [
          "Le prix affiché n'est pas toujours le coût final. Pensez à la livraison (emballage renforcé, assurance, suivi), à l'encadrement si l'œuvre est livrée nue, et pour un achat hors Union européenne aux éventuels droits et taxes d'importation du pays de destination.",
          "Côté délais, la galerie traite les commandes en 1 à 3 jours ; la livraison prend ensuite environ 2 jours en France et 4 à 15 jours hors de France."
        ]
      },
      {
        heading: "Comment bien choisir selon son budget",
        paragraphs: [
          "Moins de 200 € : une édition limitée signée et numérotée, ou un petit original sur ardoise. Idéal pour un premier achat ou un cadeau.",
          "De 200 € à 500 € : une édition limitée grand format ou sur support premium (Dibond, toile XL).",
          "Au-delà de 1 000 € : un original unique, grand format, qui devient la pièce centrale d'un salon ou d'un bureau.",
          "Dans tous les cas, le meilleur conseil reste de voir l'œuvre en vrai quand c'est possible. La galerie de Dardilly, aux portes de Lyon, est ouverte en semaine et le samedi."
        ]
      }
    ],
    faq: [
      {
        q: "Combien coûte un tableau street art original ?",
        a: "Chez BLACH GALLERY, les originaux grand format se situent en général entre 1 099 € et 1 450 €. De petits originaux uniques, comme la Série Ardoise de La Carotte, sont proposés à 99 €."
      },
      {
        q: "Quelle différence entre une édition limitée et une affiche ?",
        a: "Une édition limitée est produite en nombre fixe d'exemplaires annoncé à l'avance, signée et numérotée à la main, avec un certificat d'authenticité. Une affiche n'a ni tirage limité, ni signature, ni certificat."
      },
      {
        q: "Le certificat d'authenticité est-il fourni ?",
        a: "Oui, chaque œuvre vendue par BLACH GALLERY est accompagnée d'un certificat d'authenticité signé."
      },
      {
        q: "Livrez-vous à l'étranger ?",
        a: "Oui. Les commandes sont traitées en 1 à 3 jours, puis livrées en environ 2 jours en France et en 4 à 15 jours hors de France."
      }
    ],
    links: [
      { href: `${SHOP}/collections/originaux-blach`, label: "Voir les originaux BLACH®", external: true },
      { href: "/artistes-du-collectif", label: "Découvrir les artistes du collectif" },
      { href: "/theme/street-art-lyon", label: "Tableaux street art Lyon" }
    ]
  },
  {
    slug: "idee-deco-graffiti",
    title: "Idée déco graffiti : intégrer l'art urbain sans alourdir son intérieur",
    description:
      "Format, emplacement, palette, accrochage : la méthode pour intégrer un tableau graffiti ou street art dans un salon, une chambre ou un bureau, avec élégance.",
    publishedAt: "2026-05-09",
    updatedAt: "2026-11-23",
    intro:
      "Le street art a quitté la rue pour entrer dans les salons, les bureaux et les chambres d'enfants. Mais une œuvre graffiti mal placée peut vite écraser une pièce. La bonne approche : une œuvre forte, au bon endroit, au bon format. Voici une méthode simple, pièce par pièce.",
    sections: [
      {
        heading: "Une œuvre forte, pas un mur saturé",
        paragraphs: [
          "L'erreur la plus courante est de multiplier les pièces colorées sur un même mur. Le graffiti est déjà dense par nature : une seule œuvre bien choisie suffit souvent à donner du caractère à une pièce entière.",
          "Pensez l'œuvre comme le point focal de l'espace. Autour, laissez respirer : un mur clair, peu d'objets à proximité, un mobilier plutôt sobre. C'est ce contraste qui donne au street art son allure haut de gamme."
        ]
      },
      {
        heading: "Choisir le bon format",
        paragraphs: [
          "Règle pratique : au-dessus d'un canapé ou d'une console, l'œuvre devrait couvrir environ les deux tiers de la largeur du meuble. Trop petite, elle paraît perdue ; trop grande, elle déborde.",
          "Les grands formats horizontaux (paysages urbains, panoramas de villes) conviennent aux salons et aux pièces ouvertes. Les formats verticaux ou carrés s'adaptent mieux aux entrées, couloirs et chambres."
        ],
        bullets: [
          "Salon : un grand format horizontal, accroché au-dessus du canapé.",
          "Entrée et couloir : un format vertical, à hauteur des yeux.",
          "Bureau : une œuvre graphique et moins chargée, pour rester concentré.",
          "Chambre d'enfant : couleurs vives, sujets pop, prénom personnalisé."
        ]
      },
      {
        heading: "Accorder la palette",
        paragraphs: [
          "Inutile de tout assortir. Choisissez une ou deux couleurs de l'œuvre et rappelez-les ailleurs dans la pièce : un coussin, un vase, un livre posé sur une étagère. L'œuvre semble alors faire partie du décor plutôt que d'y être plaquée.",
          "Dans un intérieur aux tons neutres (blanc, beige, gris, bois clair), une œuvre très colorée apporte énergie et chaleur. Dans un intérieur déjà sombre ou très coloré, préférez une pièce plus graphique, avec des noirs profonds et peu de teintes."
        ]
      },
      {
        heading: "Le support change l'ambiance",
        paragraphs: [
          "Une toile apporte de la matière et un rendu proche de la peinture. L'aluminium Dibond, brillant et rigide, donne un effet contemporain et galerie, idéal dans un intérieur moderne. Le bois offre un rendu plus chaleureux. L'ardoise, enfin, apporte une texture brute qui dialogue bien avec la pierre et le béton."
        ]
      },
      {
        heading: "Bien accrocher",
        paragraphs: [
          "Le centre de l'œuvre se place idéalement vers 1,45 à 1,55 m du sol, à hauteur des yeux. Au-dessus d'un meuble, laissez 15 à 25 cm entre le haut du meuble et le bas du cadre.",
          "Évitez le soleil direct, qui fait pâlir les pigments avec le temps, et les murs humides. Un éclairage dirigé (spot orientable ou applique) met en valeur les couleurs le soir et donne immédiatement un effet galerie."
        ]
      },
      {
        heading: "Mélanger street art, ancien et design",
        paragraphs: [
          "Le street art fonctionne particulièrement bien en contraste : une toile graffiti au-dessus d'une commode ancienne, une pièce pop dans un salon haussmannien, une œuvre urbaine dans une maison de campagne en pierre. Ce mélange des époques est l'une des façons les plus élégantes d'intégrer l'art urbain.",
          "Si vous possédez déjà plusieurs œuvres, un accrochage en grille ou en « mur de cadres » permet d'associer une pièce graffiti à des photographies ou des dessins plus sobres, à condition de garder des espacements réguliers."
        ]
      },
      {
        heading: "Pour aller plus loin : la fresque murale",
        paragraphs: [
          "Pour un projet plus ambitieux (une salle de jeux, un mur de jardin, un espace professionnel), une fresque peinte directement sur le mur transforme complètement l'espace. Max le Tagueur, l'identité fresques de Maxime Blachère, réalise ce type de projets pour les particuliers, les entreprises et les collectivités."
        ]
      }
    ],
    faq: [
      {
        q: "Un tableau street art convient-il à un intérieur classique ?",
        a: "Oui. Le contraste entre une œuvre urbaine et un mobilier ancien ou classique est l'une des façons les plus élégantes d'intégrer le street art."
      },
      {
        q: "À quelle hauteur accrocher un tableau ?",
        a: "Le centre de l'œuvre se place vers 1,45 à 1,55 m du sol. Au-dessus d'un meuble, laissez 15 à 25 cm entre le meuble et le bas de l'œuvre."
      },
      {
        q: "Quel support choisir pour une pièce lumineuse ?",
        a: "Évitez le soleil direct quel que soit le support. L'aluminium Dibond est rigide et très durable ; une toile apporte plus de matière."
      }
    ],
    links: [
      { href: "/theme/pop-art", label: "Tableaux pop art et street culture" },
      { href: "/theme/art-moderne", label: "Tableaux d'art moderne contemporain" },
      { href: "https://www.maxletagueur.com", label: "Fresques murales Max le Tagueur", external: true }
    ]
  },
  {
    slug: "cadeau-personnalise-graffiti",
    title: "Cadeau personnalisé graffiti : une idée forte pour marquer les esprits",
    description:
      "Prénom en graffiti, œuvre sur mesure, édition signée : comment choisir un cadeau graffiti personnalisé pour un enfant, un anniversaire, un mariage ou une entreprise.",
    publishedAt: "2026-05-09",
    updatedAt: "2026-11-23",
    intro:
      "Un cadeau graffiti personnalisé sort des sentiers battus : il se garde, s'accroche et se raconte. Prénom d'enfant en lettres graffiti, œuvre qui reprend un lieu ou une date, édition signée pour un passionné : voici comment choisir selon la personne, l'occasion et le budget.",
    sections: [
      {
        heading: "Pourquoi le graffiti fait un cadeau marquant",
        paragraphs: [
          "Le graffiti parle à toutes les générations. Les enfants y voient des couleurs et de l'énergie, les adolescents une culture qui leur ressemble, les adultes un clin d'œil à la rue et à la pop culture. Personnalisé, il devient un objet unique, pensé pour une seule personne.",
          "Contrairement à un objet de consommation, une œuvre ne s'use pas : elle reste au mur pendant des années et accompagne celui qui la reçoit."
        ]
      },
      {
        heading: "Le prénom en graffiti : le classique pour les enfants",
        paragraphs: [
          "Le prénom en lettres graffiti est le cadeau personnalisé le plus demandé pour une chambre d'enfant, une naissance ou un anniversaire. Le style des lettres, les couleurs et les éléments ajoutés (personnages, étoiles, éléments sportifs) sont adaptés à l'enfant.",
          "Il peut être réalisé sur différents supports selon l'usage : toile, aluminium Dibond, bois, ou directement peint sur le mur de la chambre."
        ]
      },
      {
        heading: "L'œuvre sur mesure : un lieu, une date, une histoire",
        paragraphs: [
          "Pour un mariage, un départ en retraite, un anniversaire marquant ou un cadeau d'entreprise, l'œuvre sur mesure intègre des éléments propres à la personne : la ville où elle vit, un lieu symbolique, une date, un surnom, une passion.",
          "La commande se prépare en échangeant avec l'artiste : intentions, format, couleurs, délai. Plus le brief est précis, plus l'œuvre sera juste. Comptez un délai de réalisation plus long qu'un achat en boutique : anticipez de plusieurs semaines pour une date précise."
        ]
      },
      {
        heading: "L'édition limitée signée : pour un amateur d'art",
        paragraphs: [
          "Pour une personne qui aime déjà le street art, une édition limitée signée et numérotée, accompagnée de son certificat d'authenticité, est un cadeau à la fois accessible et sérieux. Chez BLACH GALLERY, les éditions limitées démarrent autour de 99 €.",
          "Si vous connaissez les goûts de la personne, choisissez par thème : villes du monde, pop culture, manga, sport, animaux."
        ]
      },
      {
        heading: "Le cadeau-expérience : l'atelier graffiti",
        paragraphs: [
          "Plutôt qu'un objet, vous pouvez offrir un moment : un atelier d'initiation au graffiti, pour un anniversaire d'enfant, une sortie en famille ou un team building d'entreprise. Chacun repart avec sa création."
        ]
      },
      {
        heading: "Les cadeaux d'entreprise",
        paragraphs: [
          "Pour une inauguration, un anniversaire d'entreprise ou un cadeau client, une œuvre graffiti personnalisée (logo revisité, vue des locaux, slogan maison) marque bien plus qu'un objet publicitaire. Une fresque ou une performance de live painting pendant l'événement en fait aussi une animation."
        ]
      },
      {
        heading: "Les bonnes questions avant de commander",
        paragraphs: ["Avant de passer commande, préparez ces informations :"],
        bullets: [
          "La date à laquelle le cadeau doit être remis.",
          "Le format et l'endroit où l'œuvre sera accrochée.",
          "Les éléments à intégrer : prénom, date, lieu, couleurs, univers.",
          "Le budget global, livraison et encadrement compris.",
          "L'adresse de livraison, en France ou à l'étranger."
        ]
      }
    ],
    faq: [
      {
        q: "Peut-on commander un prénom en graffiti pour une chambre d'enfant ?",
        a: "Oui, sur toile, Dibond, bois ou directement peint au mur, avec un style et des couleurs adaptés à l'enfant."
      },
      {
        q: "Quel délai prévoir pour une œuvre personnalisée ?",
        a: "Plus long qu'un achat en boutique : anticipez de plusieurs semaines si le cadeau doit être remis à une date précise."
      },
      {
        q: "Quel cadeau graffiti pour moins de 100 € ?",
        a: "Une édition limitée signée et numérotée ou un petit original de la Série Ardoise, à partir de 99 €."
      }
    ],
    links: [
      { href: "https://www.maxletagueur.com", label: "Prénoms et fresques personnalisés — Max le Tagueur", external: true },
      { href: "https://www.maxletagueur.com", label: "Ateliers graffiti — Max le Tagueur", external: true },
      { href: `${SHOP}/collections/all`, label: "Toutes les œuvres sur le shop", external: true }
    ]
  },
  {
    slug: "blach-fluxus-moderne",
    title: "BLACH® : le Fluxus moderne qui casse les codes",
    description:
      "Graffiti, photographie, performance et musique : qui est BLACH® (Maxime Blachère), l'artiste lyonnais fondateur de BLACH GALLERY, et que veut dire son « Fluxus 2.0 » ?",
    publishedAt: "2026-05-09",
    updatedAt: "2026-11-23",
    intro:
      "Ancien professeur d'EPS, musicien, graffeur, performer, plasticien : Maxime Blachère, alias BLACH®, mélange les disciplines comme d'autres mélangent les couleurs. Portrait d'un artiste installé à Dardilly, aux portes de Lyon, dont les œuvres circulent aujourd'hui dans une trentaine de pays.",
    sections: [
      {
        heading: "Un parcours qui refuse les cases",
        paragraphs: [
          "BLACH® dessine et graffe depuis 1992 et vit de son art depuis 2016. Avant cela, il a été professeur de sport pendant près de dix ans. Il en garde une énergie physique dans sa manière de peindre : gestes rapides, projections, spontanéité, performance.",
          "En 2009, son blog de BD et de graffiti est repéré par la radio Skyrock. Depuis la fin des années 2000, il produit aussi du graffiti imprimé et numérique, travaillé sur papier puis à l'ordinateur, et expédié dans le monde entier."
        ]
      },
      {
        heading: "Le style « Vandal Is Color »",
        paragraphs: [
          "La signature de BLACH® tient en un geste : prendre une image trop parfaite (une photographie urbaine grand format, un paysage, une vue de ville) et la recouvrir de milliers de graffitis au marqueur acrylique. Hong Kong, New York, Paris, Dubaï ou Sète deviennent des terrains de jeu saturés de couleurs, de tags, de personnages pop et de références manga.",
          "Marqueurs acryliques, pastels, collages, vernis très brillants : tout devient support. Derrière le chaos apparent, un vrai propos sur notre époque : saturation visuelle, réseaux sociaux, consommation d'images, culture urbaine mondialisée."
        ]
      },
      {
        heading: "Pourquoi « Fluxus » ?",
        paragraphs: [
          "Fluxus est un mouvement artistique né au début des années 1960, qui voulait abolir la frontière entre l'art et la vie : performances, humour, objets du quotidien détournés, refus de l'œuvre sacralisée.",
          "BLACH® revendique un « Fluxus 2.0 » : la même liberté, appliquée à la culture urbaine et numérique d'aujourd'hui. Il détourne les symboles populaires, vandalise les images, mêle peinture, musique et performance live, et assume l'humour comme un outil artistique à part entière."
        ]
      },
      {
        heading: "Musique et performance",
        paragraphs: [
          "La musique influence directement son rythme visuel : chaque toile fonctionne presque comme un morceau de rap ou un freestyle improvisé. Sous le nom de Max le Tagueur, il réalise aussi des fresques murales et des performances de live painting pour des entreprises, des écoles et des collectivités."
        ]
      },
      {
        heading: "Une présence internationale",
        paragraphs: [
          "Les œuvres de BLACH® ont été présentées dans des galeries à Hong Kong, Miami, Dubaï, aux Pays-Bas, en Suisse, à Paris et à Lyon. Elles sont vendues en originaux uniques et en éditions limitées signées et numérotées, sur la boutique de la galerie et lors d'enchères hebdomadaires en ligne sur Catawiki."
        ]
      },
      {
        heading: "BLACH GALLERY : une galerie et un collectif",
        paragraphs: [
          "En parallèle de son travail personnel, Maxime Blachère a fondé BLACH GALLERY au 11 place de l'Église à Dardilly. La galerie rassemble un collectif d'artistes indépendants : peintres, street artistes, sculpteurs et photographes, avec une même ambition, rendre l'art contemporain libre et accessible.",
          "Jusqu'au 24 décembre 2026, la galerie présente l'Expo Fluxus : 23 artistes et plus de 600 œuvres, originaux, éditions limitées et sculptures."
        ]
      }
    ],
    faq: [
      {
        q: "Qui est BLACH® ?",
        a: "BLACH® est le nom d'artiste de Maxime Blachère, plasticien français installé à Dardilly près de Lyon, actif depuis 1992 et fondateur de BLACH GALLERY."
      },
      {
        q: "Où acheter une œuvre de BLACH® ?",
        a: "À la galerie de Dardilly, sur la boutique en ligne shop.blachgallery.com, et lors des enchères hebdomadaires sur Catawiki."
      },
      {
        q: "Qu'est-ce que le style « Vandal Is Color » ?",
        a: "Des photographies urbaines grand format recouvertes de milliers de graffitis au marqueur acrylique, mêlant couleurs explosives, humour et culture pop."
      }
    ],
    links: [
      { href: "/artistes/blach", label: "Page artiste BLACH®" },
      { href: "/expositions", label: "Expo Fluxus à la galerie" },
      { href: "/encheres-de-la-semaine", label: "Enchères de la semaine" }
    ]
  }
];

export const getBlogArticle = (slug: string) => blogArticles.find((a) => a.slug === slug)!;

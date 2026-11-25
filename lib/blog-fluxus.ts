// Blog Fluxus — billets humour Fluxus, FR + EN (25/11/2026).
// Règle : faits issus des sources fournies par Maxime (presse, interviews). Rien d'inventé.
import type { BlogArticle } from "@/lib/blog-articles";

export type BlogArticleContent = Omit<BlogArticle, "slug" | "publishedAt" | "updatedAt">;
export type BilingualArticle = BlogArticle & { en: BlogArticleContent };

const SHOP = "https://shop.blachgallery.com";

export const fluxusArticles: BilingualArticle[] = [
  {
    slug: "graffiti-invisible-bus-a-chevres",
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-25",
    title: "Graffiti invisible : comment j'ai transformé un bus à chèvres en œuvre d'art pour 1 €",
    description:
      "Le Graffiti invisible de BLACH® (Maxime Blachère) : un bus Saviem abri de chèvres à Senantes devenu œuvre d'art certifiée Fluxus 2.0, vu sur France 3 et France 5.",
    intro:
      "Il y a des artistes qui recouvrent des murs entiers. Moi, un jour, j'ai recouvert un bus de 11,3 mètres avec… rien. Strictement rien. Une œuvre totalement invisible, un certificat d'authenticité parfaitement visible, et une facture de 1 €. C'est l'histoire du Graffiti invisible sur bus à chèvres, la pièce la plus légère jamais signée par BLACH®.",
    sections: [
      {
        heading: "Au commencement était un bus. Et des chèvres.",
        paragraphs: [
          "À Senantes, en Eure-et-Loir, une habitante a installé dans son terrain un vieux bus Saviem des années 1980 qui ne roule plus sur les routes. Sa mission : servir d'abri à des chèvres, des chèvres angora initialement promises à l'abattoir et reconverties en tondeuses écologiques. Le bus avait même un nom sur Facebook : Le Cabribus.",
          "Problème : l'administration n'a pas apprécié ce mobilier rural et a demandé que le véhicule soit retiré du terrain. Un bus, c'est un véhicule. Une œuvre d'art, en revanche…"
        ]
      },
      {
        heading: "La solution : un graffiti que personne ne peut voir",
        paragraphs: [
          "La propriétaire a appelé un graffeur. Le graffeur, c'était moi. Ma proposition : un graffiti invisible. Pas une goutte de peinture, pas un tag, pas une bombe ouverte. J'ai simplement signé le bus et rédigé son certificat d'authenticité. Le bus restait le même. Son statut, lui, changeait : il devenait une œuvre.",
          "C'est du pur Fluxus : l'œuvre n'est pas dans la matière, elle est dans le geste, l'idée et le document. Marcel Duchamp avait son urinoir, Yves Klein vendait du vide. J'ai mon bus à chèvres."
        ],
        image: {
          src: "/images/blog/Photo.Bus-a-chevres-certificat.Graffiti-invisible.2022.webp",
          alt: "Bus à chèvres de Senantes et certificat d'authenticité du Graffiti invisible signé BLACH®",
          caption: "Le bus, les chèvres (hors champ) et le certificat. L'œuvre est bien là, vous ne la voyez juste pas.",
          width: 900,
          height: 1200
        }
      },
      {
        heading: "La fiche technique la plus honnête de l'histoire de l'art",
        paragraphs: ["Voici ce qui figure sur le certificat, au mot près :"],
        bullets: [
          "Œuvre : Graffiti invisible sur bus à chèvres — original, pièce unique",
          "Technique : mixte",
          "Dimensions : 11,3 × 2,5 m",
          "Support : bus",
          "Année de création : 2022",
          "Signature : BLACH®",
          "Style : FLUXUS 2.0"
        ]
      },
      {
        heading: "Prix : 1 €. Frais de port : offerts.",
        paragraphs: [
          "La facture BLACH GALLERY du 20 décembre 2022 indique : « Graffiti Invisible sur bus à Chèvre », quantité 1, 1,00 €, frais de port offerts, paiement en liquide. Il fallait un vrai prix pour une vraie vente. Et il fallait que ce prix reste à la hauteur de la quantité de peinture utilisée.",
          "Côté rentabilité, c'est ma meilleure marge : coût des matériaux 0 €. Côté transport, aucun risque de casse : l'œuvre est déjà sur place, et elle pèse le poids d'un bus."
        ],
        image: {
          src: "/images/blog/Certificat.Graffiti-invisible.Graffiti-invisible.2022.webp",
          alt: "Modèle de certificat d'authenticité BLACH GALLERY pour un Graffiti invisible",
          caption: "Le modèle de certificat : « Coller ici la photo de votre œuvre avec le graffiti invisible dessus ».",
          width: 899,
          height: 1200
        }
      },
      {
        heading: "Quand les chèvres passent à la télé",
        paragraphs: [
          "L'histoire a d'abord circulé sur la page Facebook du Cabribus, puis France 3 Centre-Val de Loire l'a racontée le 27 février 2023 sous le titre « INSOLITE. Un graffiti \"invisible\" pour que ses chèvres puissent garder leur bus », en se demandant s'il s'agissait d'une première mondiale. Le lendemain, 28 février 2023, l'émission « C à vous la suite » sur France 5 en a parlé en direct, avec Julien Courbet et Jean-Albert Lièvre sur le plateau, dans une séquence sur la cause animale.",
          "Le bus a ensuite fait le tour des réseaux, jusqu'au Portugal, où il est devenu « o autocarro das cabras ». Pas mal pour une œuvre que personne n'a jamais vue."
        ]
      },
      {
        heading: "Alors, ai-je sauvé une chèvre ?",
        paragraphs: [
          "Disons que j'ai donné à leur abri un argument de plus : on ne déplace pas une œuvre d'art comme on déplace une épave. À l'époque, la propriétaire expliquait que les discussions avec l'administration se poursuivaient. Je n'ai pas de jugement administratif à afficher, mais j'ai un certificat, une facture et des chèvres qui ruminent dans une installation Fluxus. Pour un artiste, c'est déjà une victoire.",
          "Le Graffiti invisible pose une vraie question, sérieusement drôle : qu'est-ce qui fait une œuvre ? La peinture, la signature, le regard, ou le papier qui l'accompagne ? Chez BLACH GALLERY, on pense que l'humour est une forme de réponse."
        ]
      },
      {
        heading: "Vous aussi, vous voulez votre graffiti invisible ?",
        paragraphs: [
          "Le principe est simple : un objet, une histoire, une signature, un certificat. Le résultat est garanti 100 % sans coulure. Écrivez à la galerie à Dardilly : on étudie toutes les surfaces, même celles qui ont des cornes."
        ]
      }
    ],
    faq: [
      {
        q: "Qu'est-ce que le Graffiti invisible de BLACH® ?",
        a: "Une œuvre conceptuelle de 2022 : BLACH® a signé un bus servant d'abri à des chèvres à Senantes (Eure-et-Loir) et lui a délivré un certificat d'authenticité, sans y ajouter de peinture. Style : Fluxus 2.0."
      },
      {
        q: "Combien a coûté le Graffiti invisible ?",
        a: "1 € selon la facture BLACH GALLERY du 20 décembre 2022, frais de port offerts."
      },
      {
        q: "Quels médias en ont parlé ?",
        a: "France 3 Centre-Val de Loire (27 février 2023) et l'émission « C à vous la suite » sur France 5 le 28 février 2023, puis des relais sur les réseaux sociaux, notamment au Portugal."
      }
    ],
    links: [
      { href: "/blog/interview-moscou-dessert-report-blach", label: "Moscou m'a interviewé : la phobie du pinceau" },
      { href: "/artistes/blach", label: "Page artiste BLACH®" },
      { href: "/bio-contact", label: "Contacter la galerie" }
    ],
    en: {
      title: "Invisible graffiti: how I turned a goat bus into a work of art for €1",
      description:
        "BLACH®'s (Maxime Blachère) Invisible Graffiti: a Saviem bus sheltering goats in Senantes, France, became a certified Fluxus 2.0 artwork, as seen on France 3 and France 5.",
      intro:
        "Some artists cover entire walls. One day I covered an 11.3-metre bus with… nothing. Absolutely nothing. A completely invisible artwork, a perfectly visible certificate of authenticity, and an invoice for €1. This is the story of the Invisible Graffiti on a goat bus, the lightest piece BLACH® has ever signed.",
      sections: [
        {
          heading: "In the beginning there was a bus. And goats.",
          paragraphs: [
            "In Senantes, Eure-et-Loir, a local resident parked an old 1980s Saviem bus, no longer on the road, on her land. Its mission: to shelter goats, angora goats originally destined for the slaughterhouse and recycled as eco-friendly lawnmowers. The bus even had a Facebook name: Le Cabribus.",
            "The problem: the authorities did not appreciate this rural furniture and asked for the vehicle to be removed. A bus is a vehicle. A work of art, on the other hand…"
          ]
        },
        {
          heading: "The solution: graffiti nobody can see",
          paragraphs: [
            "The owner called a graffiti artist. The graffiti artist was me. My proposal: invisible graffiti. Not a drop of paint, not a tag, not a single spray can opened. I simply signed the bus and wrote its certificate of authenticity. The bus stayed the same. Its status changed: it became an artwork.",
            "That is pure Fluxus: the work is not in the material, it is in the gesture, the idea and the document. Marcel Duchamp had his urinal, Yves Klein sold the void. I have my goat bus."
          ],
          image: {
            src: "/images/blog/Photo.Bus-a-chevres-certificat.Graffiti-invisible.2022.webp",
            alt: "Goat bus in Senantes and the BLACH® certificate of authenticity for the Invisible Graffiti",
            caption: "The bus, the goats (off camera) and the certificate. The artwork is there, you just can't see it.",
            width: 900,
            height: 1200
          }
        },
        {
          heading: "The most honest spec sheet in art history",
          paragraphs: ["Here is what the certificate says, word for word:"],
          bullets: [
            "Work: Invisible Graffiti on a goat bus — original, unique piece",
            "Technique: mixed media",
            "Dimensions: 11.3 × 2.5 m",
            "Support: bus",
            "Year of creation: 2022",
            "Signature: BLACH®",
            "Style: FLUXUS 2.0"
          ]
        },
        {
          heading: "Price: €1. Shipping: free.",
          paragraphs: [
            "The BLACH GALLERY invoice dated 20 December 2022 reads: “Invisible Graffiti on goat bus”, quantity 1, €1.00, free shipping, paid in cash. A real sale needed a real price. And the price had to match the amount of paint used.",
            "In terms of profit, it is my best margin ever: material cost €0. In terms of shipping, zero risk of breakage: the artwork is already on site, and it weighs as much as a bus."
          ],
          image: {
            src: "/images/blog/Certificat.Graffiti-invisible.Graffiti-invisible.2022.webp",
            alt: "BLACH GALLERY certificate of authenticity template for an Invisible Graffiti",
            caption: "The certificate template: “Stick here the photo of your artwork with the invisible graffiti on it”.",
            width: 899,
            height: 1200
          }
        },
        {
          heading: "When goats go on TV",
          paragraphs: [
            "The story first spread on Le Cabribus Facebook page, then France 3 Centre-Val de Loire covered it on 27 February 2023 under the headline “UNUSUAL. An ‘invisible’ graffiti so her goats can keep their bus”, wondering whether it was a world first. The next day, 28 February 2023, France 5's live show “C à vous la suite” talked about it, with Julien Courbet and Jean-Albert Lièvre on set, in a segment about animal welfare.",
            "The bus then travelled across social media all the way to Portugal, where it became “o autocarro das cabras”. Not bad for an artwork nobody has ever seen."
          ]
        },
        {
          heading: "So, did I save a goat?",
          paragraphs: [
            "Let's say I gave their shelter one more argument: you don't remove an artwork the way you remove a wreck. At the time, the owner explained that discussions with the authorities were still ongoing. I have no official ruling to show, but I do have a certificate, an invoice and goats chewing inside a Fluxus installation. For an artist, that is already a win.",
            "The Invisible Graffiti asks a real, seriously funny question: what makes an artwork? The paint, the signature, the gaze, or the paper that comes with it? At BLACH GALLERY we think humour is one kind of answer."
          ]
        },
        {
          heading: "Want your own invisible graffiti?",
          paragraphs: [
            "The principle is simple: an object, a story, a signature, a certificate. Guaranteed 100% drip-free. Write to the gallery in Dardilly, near Lyon: we consider every surface, even the ones with horns."
          ]
        }
      ],
      faq: [
        {
          q: "What is BLACH®'s Invisible Graffiti?",
          a: "A 2022 conceptual artwork: BLACH® signed a bus used as a goat shelter in Senantes (Eure-et-Loir, France) and issued it a certificate of authenticity, without adding any paint. Style: Fluxus 2.0."
        },
        {
          q: "How much did the Invisible Graffiti cost?",
          a: "€1 according to the BLACH GALLERY invoice of 20 December 2022, shipping included."
        },
        {
          q: "Which media covered it?",
          a: "France 3 Centre-Val de Loire (27 February 2023) and France 5's show “C à vous la suite” on 28 February 2023, then social media, including in Portugal."
        }
      ],
      links: [
        { href: "/en/blog/interview-moscou-dessert-report-blach", label: "Moscow interviewed me: brush phobia" },
        { href: "/en/artists/blach", label: "BLACH® artist page" },
        { href: "/en", label: "BLACH GALLERY — English home" }
      ]
    }
  },
  {
    slug: "interview-moscou-dessert-report-blach",
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-25",
    title: "Moscou m'a interviewé : phobie du pinceau, Vénus en baskets et 30 exemplaires maximum",
    description:
      "BLACH® (Maxime Blachère) interviewé par Alexandre Lesnikov, rédacteur en chef du magazine russe Dessert Report : Fluxus, Vandal Is Color, Vénus de Blachicelli et projets 2026.",
    intro:
      "Un jour, un client et ami russe m'écrit : « Je veux t'interviewer pour mon magazine. » Je réponds oui avant de réaliser que mes réponses allaient être traduites en cyrillique, une langue où même mon nom devient une œuvre d'art : Максим Блашер. Voici ce que j'ai raconté à Alexandre Lesnikov, rédacteur en chef de Dessert Report, sans pinceau et presque sans mentir.",
    sections: [
      {
        heading: "Maxime, du latin Maximus : « le plus grand » (rien que ça)",
        paragraphs: [
          "Première question : savais-je que Maxime existe aussi en russe, comme Maxime Gorki ? Oui. Mais comme artiste, on me connaît surtout sous la signature BLACH®. Dans l'art, on reconnaît souvent un artiste à sa signature plus qu'à son prénom.",
          "Maximus veut dire « le plus grand » en latin. Pour un artiste, c'est assez drôle : il faut parfois un ego énorme pour oser créer, exposer, vendre et défendre son univers. Chez moi, cet ego cohabite avec le doute, l'autodérision et un solide complexe d'infériorité. C'est peut-être ce mélange bizarre qui fait l'artiste."
        ]
      },
      {
        heading: "Prof de sport, coach de volley, puis Skyrock",
        paragraphs: [
          "Je dessine depuis l'âge de trois ans. Grand-père qui dessinait un peu, parents qui m'emmenaient au musée, bac scientifique option arts plastiques : j'aimais les maths et la physique autant que la musique et l'art. Pour moi, tout est lié : rythme, composition, équilibre, couleur, structure.",
          "Avant de devenir artiste à plein temps, j'ai été une dizaine d'années professeur d'EPS et quinze ans entraîneur de volley, avec une spécialisation en ski alpin et en volley. J'ai commencé à travailler professionnellement vers 2009, après avoir été repéré par la radio Skyrock. En 2016, à 36 ans, j'ai décidé de me consacrer entièrement à l'art."
        ]
      },
      {
        heading: "La Vénus de Blachicelli : Botticelli avec un smartphone",
        paragraphs: [
          "Alexandre possède la sérigraphie « Vénus de Blachicelli ». L'idée vient de ma série Vandal Is Color, où je revisite, transforme et « vandalise » visuellement des images existantes : photographies, architectures, icônes populaires, chefs-d'œuvre de l'histoire de l'art.",
          "Botticelli a créé une Vénus nue, audacieuse pour son époque. Je lui ai ajouté un collier clouté, un smartphone et une casquette à ses voisins. Certains y voient encore une provocation. Pour moi, c'est précisément le rôle de l'art : poser des questions, transmettre, parfois provoquer, mais toujours défendre la liberté, la culture et l'histoire."
        ]
      },
      {
        heading: "Fluxus, c'est quoi ?",
        paragraphs: [
          "Fluxus veut dire « flux, mouvement ». C'est un courant né dans les années 1960 qui mélange art, musique, poésie, écriture, humour, performance et vie quotidienne. Je me sens proche de cette idée d'un art libre, vivant, accessible, qui sort du cadre trop sérieux des galeries. Oui, je dis ça en tenant une galerie. C'est aussi ça, Fluxus."
        ]
      },
      {
        heading: "Des villes repeintes au marqueur",
        paragraphs: [
          "Tout est parti presque par instinct : j'ai imprimé la photo d'une ville et je l'ai recouverte de graffitis, de signes, de couleurs et de personnages. Le public a réagi tout de suite. Depuis, Paris, Lyon, New York, Dubaï, Hong Kong, Berlin, Amsterdam, Genève, Annecy, Bruxelles, Sète et le Mont-Saint-Michel y sont passés.",
          "Chaque ville devient un portrait vivant : son architecture, mais aussi ses artistes, ses sportifs, ses savants, ses monuments et ses symboles populaires. Prochaines cibles : Moscou, et de grands formats autour de New York."
        ]
      },
      {
        heading: "La phobie du pinceau",
        paragraphs: [
          "Je travaille surtout au marqueur acrylique, aux crayons de couleur, au pastel, avec des fixatifs, parfois du vernis ou de la résine époxy. Je n'utilise presque jamais de pinceau : je dis souvent que j'ai une « phobie du pinceau ». Mon geste vient du graffiti, du dessin, du trait rapide.",
          "Le processus : une photo libre de droits, une photo dont j'achète les droits de reproduction et de modification, ou une composition créée pour le projet. Je l'imprime en grand sur une toile polyester très résistante, puis je retravaille tout à la main."
        ]
      },
      {
        heading: "30 exemplaires, pas un de plus",
        paragraphs: [
          "Mes éditions ne sont pas de simples reproductions décoratives. Elles sont signées, numérotées, limitées à 30 exemplaires maximum et accompagnées d'un certificat d'authenticité. En France, cette limite de 30 exemplaires signés et numérotés compte aussi sur le plan juridique et fiscal : elle distingue l'œuvre d'artiste de la reproduction industrielle.",
          "Quand une série marche très bien et que les 30 exemplaires sont partis, je peux créer une nouvelle version, mais elle doit être différente. C'est arrivé avec Octopus : une version 2, puis une version retournée."
        ]
      },
      {
        heading: "Les projets",
        paragraphs: [
          "Une collaboration avec Art Generation Paris, galerie du Marais, autour de ma série Vintage Posters : les grandes villes européennes revues façon vieilles affiches touristiques, puis vandalisées à la main. Une exposition à Singapour avec la galerie Artaflo, qui développe déjà mon travail à Hong Kong et Singapour. Et BLACH GALLERY à Dardilly, près de Lyon, comme laboratoire vivant : expositions, rencontres, artistes invités, musique, performances.",
          "Le but ne change pas : faire circuler l'art, mélanger les cultures et ajouter de la couleur au monde, avec sérieux, humour et liberté."
        ]
      }
    ],
    faq: [
      {
        q: "Qui a interviewé BLACH® pour la Russie ?",
        a: "Alexandre Lesnikov, rédacteur en chef du magazine russe Dessert Report, dans un entretien exclusif."
      },
      {
        q: "Quelle est la technique de BLACH® ?",
        a: "Une image imprimée en grand format, retravaillée à la main au marqueur acrylique, au crayon de couleur et au pastel, parfois vernie ou résinée. Presque jamais de pinceau."
      },
      {
        q: "Combien d'exemplaires dans une édition limitée BLACH® ?",
        a: "30 au maximum, signés, numérotés et accompagnés d'un certificat d'authenticité."
      }
    ],
    links: [
      { href: "/artistes/blach", label: "Page artiste BLACH®" },
      { href: `${SHOP}/collections/originaux-blach`, label: "Originaux BLACH® sur le shop", external: true },
      { href: "/blog/blach-fluxus-moderne", label: "BLACH® : le Fluxus moderne qui casse les codes" }
    ],
    en: {
      title: "Moscow interviewed me: brush phobia, Venus in sneakers and 30 copies max",
      description:
        "BLACH® (Maxime Blachère) interviewed by Alexander Lesnikov, editor-in-chief of Russian magazine Dessert Report: Fluxus, Vandal Is Color, the Venus of Blachicelli and 2026 projects.",
      intro:
        "One day a Russian client and friend writes: “I want to interview you for my magazine.” I said yes before realising my answers would be translated into Cyrillic, a script in which even my name becomes an artwork: Максим Блашер. Here is what I told Alexander Lesnikov, editor-in-chief of Dessert Report, without a brush and almost without lying.",
      sections: [
        {
          heading: "Maxime, from the Latin Maximus: “the greatest” (no pressure)",
          paragraphs: [
            "First question: did I know Maxime also exists in Russian, like Maxim Gorky? Yes. But as an artist I am mostly known by my signature, BLACH®. In art, people often recognise an artist by the signature rather than the first name.",
            "Maximus means “the greatest” in Latin. For an artist that is quite funny: sometimes you need a huge ego to dare to create, exhibit, sell and defend your universe. In my case that ego lives with doubt, self-mockery and a solid inferiority complex. Maybe that strange mix is what makes an artist."
          ]
        },
        {
          heading: "PE teacher, volleyball coach, then Skyrock",
          paragraphs: [
            "I have been drawing since I was three. A grandfather who drew a little, parents who took me to museums, a science baccalaureate with a visual-arts option: I loved maths and physics as much as music and art. To me it is all connected: rhythm, composition, balance, colour, structure.",
            "Before becoming a full-time artist I was a PE teacher for about ten years and a volleyball coach for fifteen, specialising in alpine skiing and volleyball. I started working professionally around 2009, after being spotted by the French national radio station Skyrock. In 2016, at 36, I decided to devote myself entirely to art."
          ]
        },
        {
          heading: "The Venus of Blachicelli: Botticelli with a smartphone",
          paragraphs: [
            "Alexander owns the screen print “Venus of Blachicelli”. The idea comes from my Vandal Is Color series, in which I revisit, transform and visually “vandalise” existing images: photographs, architecture, pop icons and masterpieces of art history.",
            "Botticelli painted a naked Venus, bold for her time. I gave her a studded choker, a smartphone, and caps for her neighbours. Some people still see it as provocation. For me that is exactly the role of art: to ask questions, pass on knowledge, sometimes provoke, but always defend freedom, culture and history."
          ]
        },
        {
          heading: "What is Fluxus?",
          paragraphs: [
            "Fluxus means “flow, movement”. It is an art movement born in the 1960s that mixes art, music, poetry, writing, humour, performance and everyday life. I feel close to that idea of free, living, accessible art that steps outside the overly serious frame of galleries. Yes, I say that while running a gallery. That is Fluxus too."
          ]
        },
        {
          heading: "Cities repainted with markers",
          paragraphs: [
            "It started almost by instinct: I printed a photo of a city and covered it with graffiti, signs, colours and characters. The public reacted immediately. Since then Paris, Lyon, New York, Dubai, Hong Kong, Berlin, Amsterdam, Geneva, Annecy, Brussels, Sète and Mont-Saint-Michel have all been through it.",
            "Each city becomes a living portrait: its architecture, but also its artists, athletes, scientists, monuments and popular symbols. Next targets: Moscow, and large formats around New York."
          ]
        },
        {
          heading: "Brush phobia",
          paragraphs: [
            "I work mainly with acrylic markers, coloured pencils and pastel, with fixatives and sometimes varnish or epoxy resin. I almost never use a brush: I often joke that I have “brush phobia”. My gesture comes from graffiti, drawing and the fast line.",
            "The process: a royalty-free photo, a photo whose reproduction and modification rights I buy, or a composition created for the project. I print it large on a very strong polyester canvas, then rework everything by hand."
          ]
        },
        {
          heading: "30 copies, not one more",
          paragraphs: [
            "My editions are not mere decorative reproductions. They are signed, numbered, limited to 30 copies maximum and come with a certificate of authenticity. In France, that limit of 30 signed and numbered copies also matters legally and for tax purposes: it distinguishes an artist's edition from industrial reproduction.",
            "When a series sells out its 30 copies, I can create a new version, but it has to be different. That happened with Octopus: a version 2, then an upside-down version."
          ]
        },
        {
          heading: "What's next",
          paragraphs: [
            "A collaboration with Art Generation Paris, a gallery in the Marais, around my Vintage Posters series: major European cities seen as old travel posters, then vandalised by hand. An exhibition in Singapore with Artaflo gallery, which already represents my work in Hong Kong and Singapore. And BLACH GALLERY in Dardilly, near Lyon, as a living lab: exhibitions, meetings, guest artists, music and performances.",
            "The goal stays the same: keep art moving, mix cultures and add colour to the world, with seriousness, humour and freedom."
          ]
        }
      ],
      faq: [
        {
          q: "Who interviewed BLACH® for Russia?",
          a: "Alexander Lesnikov, editor-in-chief of the Russian magazine Dessert Report, in an exclusive interview."
        },
        {
          q: "What is BLACH®'s technique?",
          a: "A large-format printed image reworked by hand with acrylic markers, coloured pencils and pastel, sometimes varnished or resined. Almost never a brush."
        },
        {
          q: "How many copies are in a BLACH® limited edition?",
          a: "30 at most, signed, numbered and accompanied by a certificate of authenticity."
        }
      ],
      links: [
        { href: "/en/artists/blach", label: "BLACH® artist page" },
        { href: `${SHOP}/en/collections/originaux-blach`, label: "BLACH® originals in the shop", external: true },
        { href: "/en", label: "BLACH GALLERY — English home" }
      ]
    }
  }
];

export const getFluxusArticle = (slug: string) => fluxusArticles.find((a) => a.slug === slug);

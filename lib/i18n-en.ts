// Traductions anglaises des pages artistes et thématiques (24/11/2026).
// Traduction fidèle de lib/artists.ts et lib/data.ts : aucun fait ajouté. Toute modification FR doit être reportée ici.
import { SHOP_URL } from "@/lib/gallery";

export type ArtistEn = {
  origin: string;
  tagline: string;
  /** ≤ 155 caractères — meta description */
  metaDescription: string;
  short: string;
  bio: string[];
  facts?: string[];
  mediums: string[];
  portraitAlt?: string;
  /** alt des images de galerie, dans l'ordre de artist.gallery */
  galleryAlts?: string[];
};

export const artistsEn: Record<string, ArtistEn> = {
  blach: {
    origin: "Chambéry → Dardilly",
    tagline: "The artist who vandalises everything (with a certificate)",
    metaDescription:
      "BLACH® (Maxime Blachère): giant city photos covered in marker graffiti, with Fluxus humour. Signed originals and limited editions at BLACH GALLERY.",
    short:
      "City photographs printed large, then covered with thousands of tags, punchlines and characters in marker: welcome to Vandal Is Color.",
    bio: [
      "BLACH® takes a photograph of a city, prints it very large… then covers it with thousands of tags, punchlines and characters in acrylic marker, pastel and spray paint. New York, Lyon, Sète, Paris or Mont-Saint-Michel: every new look should reveal a new detail.",
      "A former graffiti writer turned visual artist, Maxime Blachère embraces the Fluxus spirit: humour, self-mockery and a refusal to be pigeonholed. He founded BLACH GALLERY in Dardilly, an independent gallery and artist collective, and also paints murals under the name Max Le Tagueur."
    ],
    facts: [
      "Signature series: Vandal Is Color (VIC)",
      "1/1 originals and signed, numbered limited editions",
      "Hand-signed certificate of authenticity"
    ],
    mediums: ["Graffitied photography", "Acrylic marker", "Pastel", "Spray paint"],
    portraitAlt: "Maxime Blachère, aka BLACH®, in the gallery"
  },
  "la-carotte": {
    origin: "Lyon",
    tagline: "The most graffitied vegetable in Lyon",
    metaDescription:
      "La Carotte, a low-key figure of Lyon graffiti: the vitamin-packed character moves from the walls of Lyon to canvases, sculptures and slates. For sale.",
    short:
      "A smirking carrot that pops up on walls, metal shutters and rooftops across Lyon — now on canvas, in sculpture and on slate.",
    bio: [
      "A low-key yet prolific figure of graffiti in the Rhône-Alpes region, La Carotte has been spreading a vitamin-packed character across Lyon and its surroundings for more than ten years: up high, along railway tracks, on metal shutters.",
      "In the studio, the mascot comes to life in hypnotic spirals, acid colours and wild style compositions. The Ardoise (slate) series — affordable originals on slate — is exclusive to the gallery."
    ],
    facts: ["Ardoise series: affordable originals on slate", "Canvases, barrels and sculptures"],
    mediums: ["Spray paint", "Acrylic", "Slate", "Sculpture"]
  },
  "art-hm": {
    origin: "Lyon",
    tagline: "Pop portraits and urban wildlife",
    metaDescription:
      "Art HM (Hassan Mahzoum), self-taught painter from Lyon: tribute portraits, animals and pop culture. Signed limited editions at BLACH GALLERY.",
    short:
      "A self-taught painter based in Lyon, Art HM combines spray paint, Posca and paint for tribute portraits and animals with a strong presence.",
    bio: [
      "Art HM (Hassan Mahzoum), born in 1979 in Morocco and based in Lyon, is a self-taught figurative painter. Tribute portraits, animals, American urban pop culture and sport: his precise drawing meets punchy pop colours.",
      "He has exhibited regularly in the Lyon area since 2019, is a member of the association La Halle des Arts 69 and has worked with BLACH® on several projects. His editions are sold by the gallery acting as an intermediary."
    ],
    facts: ["Signed and numbered limited editions", "Member of La Halle des Arts 69"],
    mediums: ["Spray paint", "Posca", "Paint", "Print on wood"]
  },
  bonte: {
    origin: "Paris · Lyon · Saint-Barthélemy",
    tagline: "A whole wall on one canvas",
    metaDescription:
      "Bonté brings the energy of graffiti to canvas: tags, throw-ups, drips and silver highlights. XXL originals and editions at BLACH GALLERY.",
    short: "Layers of tags, black lines, throw-ups and splashes: Bonté paints the way you fill a wall.",
    bio: [
      "Bonté paints the way you fill a wall: layers of tags, black lines, throw-ups, drips and splashes, sometimes lifted with silver or set on a bold pink.",
      "Coming from graffiti, he brings the energy of the street to canvas, from XXL formats (Pure Energy, 81 × 130 cm) to limited editions."
    ],
    mediums: ["Acrylic", "Spray paint", "Varnished canvas"]
  },
  "pascal-negre": {
    origin: "Paris, 19th arrondissement",
    tagline: "Women, weapons and fine lines. Bang! Bang!",
    metaDescription:
      "Pascal Nègre, street artist from the 19th arrondissement of Paris: a precise, raw, instinctive style, between women and weapons. At BLACH GALLERY.",
    short: "A street artist raised in the 19th arrondissement of Paris, with a precise, raw and instinctive style.",
    bio: [
      "Pascal Nègre, a street artist raised in the 19th arrondissement of Paris, drew and painted to escape a bleak and violent daily life, before finding his freedom of expression in street art.",
      "His two obsessions: women and weapons. Sometimes round and soft, sometimes precise and abrupt. He says he could sleep with one, but not with the other. Your guess.",
      "A precise, raw, instinctive style that concentrates his violence and his demons into tight formats. Bang! Bang!"
    ],
    mediums: ["Spray paint", "Sculpture on metal drum"],
    galleryAlts: [
      "Graffitits — Pascal Nègre, spray paint, nude on a graffiti background",
      "Vulcania — Pascal Nègre, spray paint, reds and oranges"
    ]
  },
  "severine-marchetti": {
    origin: "Dardilly",
    tagline: "The city in ink, the sky splashed with colour",
    metaDescription:
      "SEV (Séverine Marchetti), artist from Dardilly: the city drawn in ink under watercolour skies. Original artwork at BLACH GALLERY.",
    short: "SEV draws the city in ink, then lets the colour overflow into watercolour skies.",
    bio: [
      "Séverine Marchetti, aka SEV, an artist from Dardilly, draws the city in ink and then lets the colour overflow: blue, pink and golden watercolour skies, somewhere between travel sketchbook and pop gesture.",
      "Her Lyon By Sev brings Vieux Lyon and the Saint-Georges bell tower to life under a splashed sky."
    ],
    mediums: ["Acrylic", "Ink", "Watercolour"]
  },
  "art-up": {
    origin: "Lyon",
    tagline: "From a 12-storey wall to the canvas",
    metaDescription:
      "ART UP, Lyon street art linked to the Karim Benzema mural in Bron: spray-paint and acrylic originals, BD and Elle series. Unique pieces for sale.",
    short:
      "Lyon street art: the Karim Benzema mural in Bron bears the Art Up signature. In the studio, the focus is on spray-paint and acrylic originals.",
    bio: [
      "In November 2022, a mural dedicated to Karim Benzema appeared on the façade of a 12-storey building in Bron, visible from the Lyon ring road: it is signed by the Lyon artists Art Up, together with the agency Peint à la Main (Lyon Capitale).",
      "On canvas, ART UP plays with comic-book culture — onomatopoeias « Zgruppp », « Crash flamme » — and pop portraits on rainbow backgrounds with the Elle series. Unique pieces in spray paint and acrylic, sold in the name and on behalf of the artist."
    ],
    facts: ["BD (comic book) and Elle series", "Originals 50 × 70 cm"],
    mediums: ["Spray paint", "Acrylic"]
  },
  brunograffer: {
    origin: "Strasbourg",
    tagline: "Cartoons wrestling with abstraction",
    metaDescription:
      "Brunograffer, painter and illustrator based in Strasbourg: cartoon meets abstraction. Hand-embellished giclée, unique copy, at BLACH GALLERY.",
    short: "A self-taught painter and illustrator based in Strasbourg, between cartoon characters and abstract brushstrokes.",
    bio: [
      "Born in 1995 and based in Strasbourg, Brunograffer is a self-taught painter and illustrator who made a name for himself by sharing his work online.",
      "His style: muscular cartoon characters, dots, lettering and brushstrokes — a blend of abstract art and animated cartoons."
    ],
    mediums: ["Hand-embellished giclée", "Acrylic", "Acrylic marker"]
  },
  socrate: {
    origin: "Paris",
    tagline: "Graffiti invited into the boudoir",
    metaDescription:
      "Socrate, an artist from the graffiti scene of the Paris suburbs: neon tags against black-and-white images. Wild Style screen print at BLACH GALLERY.",
    short: "Coming from Paris graffiti, Socrate sets tagged backgrounds against black-and-white images.",
    bio: [
      "Born in 1992 and raised in the Paris suburbs, Socrate painted walls with spray cans before moving to canvas.",
      "Her world plays on contrasts: wild, colourful graffiti backgrounds against black-and-white images, the roughness of the tag against feminine elegance."
    ],
    mediums: ["Screen print", "Spray paint", "Mixed media"]
  },
  "2fast": {
    origin: "Zagreb, Croatia",
    tagline: "The spray can that explodes (not really)",
    metaDescription:
      "2Fast (Krešimir Buden), a pioneer of Croatian graffiti: the Splash It series freezes a spray can's explosion in resin. Sculpture for sale.",
    short: "A pioneer of graffiti in Croatia, 2Fast turns real spray cans into pop sculptures.",
    bio: [
      "Krešimir Buden, aka 2Fast, is one of the pioneers of graffiti in Croatia, active in Zagreb since the late 1980s.",
      "With the Splash It series, he freezes in resin the burst of colour from an emptied spray can: a pop art wink, to hang on the wall or stand on a shelf."
    ],
    mediums: ["Recycled spray can", "Resin"]
  },
  truteau: {
    origin: "Montpellier",
    tagline: "Raising a smile",
    metaDescription:
      "Truteau, self-taught visual artist born in 1970: recycled spray cans and subverted icons to raise a smile. Non Essentielle sculpture for sale.",
    short: "A self-taught visual artist, Truteau subverts spray cans and icons with one goal: to raise a smile.",
    bio: [
      "Born in 1970, Truteau is a self-taught visual artist. His stated aim: to raise a smile, or at least a thought.",
      "With Non Essentielle (« Non-essential »), he paints the Mona Lisa crossed out by a no-entry sign on a recycled spray can, echoing the closure of museums in 2020-2021."
    ],
    mediums: ["Recycled spray can", "Paint"]
  },
  canned: {
    origin: "France",
    tagline: "Consumer society, canned",
    metaDescription:
      "CANNED, French artist duo (Charlotte Parenteau-Denoël & Mofart'z): satirical stencils and screen prints on overconsumption. Artworks for sale.",
    short: "A French artist duo subverting the symbols of overconsumption in handmade stencils and screen prints.",
    bio: [
      "CANNED brings together two French artists: Charlotte Parenteau-Denoël, trained in interior architecture, and Mofart'z.",
      "Wordplay, mockery and satire: the duo subverts the symbols of overconsumption in handmade stencils, screen prints and paintings."
    ],
    mediums: ["Stencil", "Screen print", "Paint"]
  },
  "dinara-hortnagl": {
    origin: "Vienna, Austria",
    tagline: "Cartoon anti-heroes, neon self-mockery",
    metaDescription:
      "Dinara Hörtnagl, painter based in Vienna: cartoon anti-heroes full of self-mockery. Original I am a hot mess at BLACH GALLERY.",
    short: "Based in Vienna, Dinara Hörtnagl paints cartoon anti-heroes full of self-mockery.",
    bio: [
      "Born in 1988 in Yekaterinburg, trained in Saint Petersburg and based in Vienna since 2018, Dinara Hörtnagl paints cartoon anti-heroes full of self-mockery.",
      "Since 2019, her Talking Walls project has invited European street artists to paint with her. She was selected for the Koschatzky Art Award 2021."
    ],
    mediums: ["Acrylic on canvas"]
  },
  "maria-luisa-azzini": {
    origin: "Florence → London",
    tagline: "A parallel world full of UFOs",
    metaDescription:
      "Maria Luisa Azzini, born in Florence, based in London: the colourful cities and UFOs of The Futuristic World. Framed original at BLACH GALLERY.",
    short: "Born in Florence and based in London, she paints The Futuristic World: colourful cities, hidden messages and UFOs.",
    bio: [
      "Self-taught, Maria Luisa Azzini has been painting professionally since 2007. Born in Florence and living in London since 2001, she invented « The Futuristic World »: colourful, funky cities full of hidden messages… and UFOs.",
      "She co-runs the Hidden House Gallery in London."
    ],
    mediums: ["Acrylic", "Fluorescent colours", "Cotton paper"]
  },
  "lee-henderson": {
    origin: "United Kingdom",
    tagline: "The British stencil that shakes up pop",
    metaDescription:
      "Lee Henderson, British stencil artist influenced by street art: pop imagery reinterpreted in acrylic. 2022 original at BLACH GALLERY.",
    short: "A British stencil artist influenced by street art, reinterpreting pop imagery.",
    bio: [
      "Lee Henderson is a British stencil artist influenced by street art. He reinterprets pop imagery in acrylic and spray paint, often setting the innocence of icons against urban decay."
    ],
    mediums: ["Stencil", "Acrylic"]
  },
  "michel-donier": {
    origin: "La Tour-de-Salvagny",
    tagline: "Painting journeys",
    metaDescription:
      "Michel Donier, painter from La Tour-de-Salvagny: sensitive, luminous acrylics shaped by his travels. Works on view at BLACH GALLERY.",
    short: "Sensitive, luminous acrylics shaped by many journeys.",
    bio: [
      "An artist from La Tour-de-Salvagny, Michel Donier paints his travels: many journeys feed sensitive, luminous acrylics in which colour tells the story of the places he has passed through."
    ],
    mediums: ["Acrylic"]
  },
  "jacques-berger": {
    origin: "Lyon / Charbonnières-les-Bains",
    tagline: "Still life, classical balance",
    metaDescription:
      "Jacques Berger, painter trained in Lyon: still life and composition with a classical sense of balance. Works on view at BLACH GALLERY, Dardilly.",
    short: "Trained in Lyon, Jacques Berger works on still life and composition.",
    bio: [
      "Trained in Lyon, Jacques Berger learned in his grandfather's studio and then at the evening classes of the painter Malgrand. His playground: still life and composition, handled with a classical sense of balance."
    ],
    mediums: ["Painting"]
  },
  "alain-meraud": {
    origin: "Lyon",
    tagline: "Lyon, forests and shores",
    metaDescription:
      "Alain Méraud paints Lyon, the forests of central France and the shores of Brittany. Works on view at BLACH GALLERY, Dardilly.",
    short: "Paintings of landscapes and light, from Lyon to the shores of Brittany.",
    bio: [
      "Alain Méraud paints Lyon, the forests of central France and the shores of Brittany: paintings of landscapes and light, inspired by the places he explores."
    ],
    mediums: ["Painting"]
  }
};

export const getArtistEn = (slug: string) => artistsEn[slug];
export const artistPathEn = (slug: string) => `/en/artists/${slug}`;

export type ThemeEn = { slug: string; label: string; h1: string; intro: string; metaDescription: string };

// Clé = slug FR (lib/data.ts). Slugs EN identiques pour garder une correspondance 1:1 FR/EN (hreflang).
export const themesEn: Record<string, ThemeEn> = {
  "street-art-lyon": {
    slug: "street-art-lyon",
    label: "Street Art Lyon",
    h1: "Street art paintings from Lyon",
    intro:
      "A selection for those who love the visual energy of Lyon, painted walls, graffiti and premium urban decor. This page brings together direct, colourful and vibrant artworks, easy to browse by artist, price, style and format.",
    metaDescription:
      "Street art paintings from Lyon: original graffiti and urban artworks, colourful and vibrant, by the artists of BLACH GALLERY. Worldwide shipping."
  },
  "pop-art": {
    slug: "pop-art",
    label: "Pop Art",
    h1: "Pop art and street culture paintings",
    intro:
      "A pop, graphic and striking collection for interiors that want a real visual presence. Cultural references, bold contrasts and vibrant colours make up a world designed for the simple pleasure of hanging art on your walls.",
    metaDescription:
      "Pop art and street culture paintings: cultural references, bold contrasts and vibrant colours. Originals and limited editions at BLACH GALLERY."
  },
  manga: {
    slug: "manga",
    label: "Manga",
    h1: "Manga paintings and urban art",
    intro:
      "This theme connects manga culture, pop visuals and street art energy in a bolder decorative register. Ideal for visitors looking for a narrative, dynamic artwork that instantly stands out.",
    metaDescription:
      "Manga paintings and urban art: manga culture, pop visuals and street art energy. Narrative, dynamic artworks at BLACH GALLERY near Lyon."
  },
  "art-moderne": {
    slug: "art-moderne",
    label: "Modern Art",
    h1: "Modern and contemporary art paintings",
    intro:
      "A page for lovers of contemporary painting, large luminous formats and more atmospheric compositions. A more premium entry point to artworks that are easy to picture in a living room, an office or a space open to the public.",
    metaDescription:
      "Modern and contemporary paintings: large luminous formats and atmospheric compositions for a living room, office or public space. BLACH GALLERY."
  }
};

export const getThemeEn = (slug: string) => themesEn[slug];
export const themePathEn = (slug: string) => `/en/theme/${slug}`;

/** URL boutique Shopify en anglais (préfixe /en). */
export const shopEn = (url: string) => url.replace(SHOP_URL, `${SHOP_URL}/en`);

export const artworkTypeEn = (type: string) => (type === "Édition limitée" ? "Limited edition" : type);

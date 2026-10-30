// Données réelles issues du catalogue Shopify (shop.blachgallery.com), relevées le 29/10/2026.
// Titres, prix, artistes, URLs et dimensions d'image = valeurs Shopify. Ne rien inventer ici.

export const SHOP_URL = "https://shop.blachgallery.com";
export const CATAWIKI_URL = "https://www.catawiki.com/fr/u/7440221-blachgallery";
export const FRESQUES_URL = "https://www.maxletagueur.com";
export const GALLERY_ADDRESS = {
  name: "BLACH GALLERY",
  street: "11 place de l'Église",
  postalCode: "69570",
  city: "Dardilly",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BLACH+GALLERY+11+place+de+l%27%C3%89glise+69570+Dardilly"
};
export const CONTACT_EMAIL = "blachgallery@gmail.com";

export type ArtworkTheme = "street-art-lyon" | "pop-art" | "manga" | "art-moderne";

export type Artwork = {
  handle: string;
  title: string;
  artist: string;
  type: "Original" | "Édition limitée";
  price: number;
  image: string;
  width: number;
  height: number;
  themes: ArtworkTheme[];
};

const cdn = (path: string) => `https://cdn.shopify.com/s/files/1/1020/5193/8687/files/${path}`;

export const artworks: Artwork[] = [
  {
    handle: "avatar-experience-baril",
    title: "Avatar Experience Baril",
    artist: "BLACH®",
    type: "Original",
    price: 1450,
    image: cdn("IMG_20260928_131325.jpg?v=1791833179"),
    width: 3000,
    height: 4000,
    themes: ["pop-art", "art-moderne"]
  },
  {
    handle: "pure-energy-bonte-street-art-lyon-original-xxl",
    title: "Pure Energy — Original XXL",
    artist: "Bonté",
    type: "Original",
    price: 1290,
    image: cdn("Captured_ecran2026-10-28182100.png?v=1793210231"),
    width: 1076,
    height: 718,
    themes: ["street-art-lyon"]
  },
  {
    handle: "new-york-bay-2025-blach®",
    title: "New York Bay 2025",
    artist: "BLACH®",
    type: "Original",
    price: 1349,
    image: cdn("NewYorkBay2025.RRCCCC..jpg?v=1789122026"),
    width: 3200,
    height: 4000,
    themes: ["art-moderne", "pop-art"]
  },
  {
    handle: "one-week-in-mollans-bonte-street-art-lyon-original",
    title: "One Week in Mollans",
    artist: "Bonté",
    type: "Original",
    price: 1099,
    image: cdn("OneWeekinMollansCC_web.jpg?v=1793207292"),
    width: 1024,
    height: 1024,
    themes: ["street-art-lyon", "art-moderne"]
  },
  {
    handle: "la-fete-de-la-couleur-port-sete-2052-blach",
    title: "La fête de la couleur au port de Sète en 2052",
    artist: "BLACH®",
    type: "Original",
    price: 1349,
    image: cdn("01-la-fete-de-la-couleur-port-sete-blach.jpg?v=1785329279"),
    width: 3000,
    height: 2000,
    themes: ["art-moderne", "pop-art"]
  },
  {
    handle: "carotte-spirale-endless-loop-serie-ardoise-la-carotte",
    title: "Carotte Spirale — Endless Loop (Série Ardoise)",
    artist: "La Carotte",
    type: "Original",
    price: 99,
    image: cdn("PhotoRogneerecadree.jpg?v=1789491112"),
    width: 3000,
    height: 4000,
    themes: ["street-art-lyon", "pop-art"]
  },
  {
    handle: "dubai-diptyque-blach®",
    title: "Dubai Diptyque",
    artist: "BLACH®",
    type: "Original",
    price: 1200,
    image: cdn("DubaiMM.jpg?v=1789121871"),
    width: 2000,
    height: 2000,
    themes: ["art-moderne"]
  },
  {
    handle: "lion-king",
    title: "Lion King",
    artist: "Art HM",
    type: "Édition limitée",
    price: 199,
    image: cdn("Lion_King_UV_Print_CC_web.jpg?v=1790847562"),
    width: 1024,
    height: 1024,
    themes: ["street-art-lyon", "pop-art"]
  },
  {
    handle: "paris-bande-dessinee-vertical-original-120-80-cm",
    title: "Paris Bande Dessinée Vertical — Original",
    artist: "BLACH®",
    type: "Original",
    price: 1299,
    image: cdn("ae860a62-54a2-48e3-a080-b475d26015f0.jpg?v=1792583361"),
    width: 1440,
    height: 1800,
    themes: ["manga", "pop-art"]
  },
  {
    handle: "carotte-purple-haze-serie-ardoise-la-carotte",
    title: "Carotte Purple Haze (Série Ardoise)",
    artist: "La Carotte",
    type: "Original",
    price: 99,
    image: cdn("Ardoise.CarottePurpleHaze.CadreChene-SerieArdoise.2025.jpg?v=1790684120"),
    width: 1042,
    height: 1509,
    themes: ["street-art-lyon", "pop-art"]
  },
  {
    handle: "tigre-blach",
    title: "Tigre Blach",
    artist: "BLACH®",
    type: "Original",
    price: 1099,
    image: cdn("il_fullxfull.7475506880_ntx1.jpg?v=1785508610"),
    width: 2120,
    height: 2072,
    themes: ["art-moderne", "pop-art"]
  },
  {
    handle: "pop-kong-print-sur-bois-blach®",
    title: "Pop Kong — Print sur bois",
    artist: "Art HM",
    type: "Édition limitée",
    price: 110,
    image: cdn("print_PopKong_01.jpg?v=1790763806"),
    width: 1024,
    height: 1024,
    themes: ["pop-art"]
  },
  {
    handle: "new-york-gundam-vs-sangoku",
    title: "New York Gundam vs Sangoku",
    artist: "BLACH®",
    type: "Édition limitée",
    price: 299,
    image: cdn("PrintNYGUNDAMvsSangoku00_69e22e11-e92d-41e6-b946-881f06b7ee55.jpg?v=1792516269"),
    width: 2229,
    height: 1506,
    themes: ["manga", "pop-art"]
  },
  {
    handle: "hello-tags-wild-throw-up-serie-ardoise-la-carotte",
    title: "Hello Tags — Wild Throw-up (Série Ardoise)",
    artist: "La Carotte",
    type: "Original",
    price: 99,
    image: cdn("01_GALERIE_NOIR_334cc511-aca8-41b8-be9e-7ba1bc961cd4.png?v=1792518158"),
    width: 1494,
    height: 1052,
    themes: ["street-art-lyon"]
  },
  {
    handle: "jordan",
    title: "Jordan limited edition",
    artist: "Art HM",
    type: "Édition limitée",
    price: 99,
    image: cdn("jordan_00_web.jpg?v=1785412367"),
    width: 1024,
    height: 1024,
    themes: ["pop-art"]
  },
  {
    handle: "paris-dbz-blue-sky-xl",
    title: "Paris Dbz Blue Sky XL",
    artist: "BLACH®",
    type: "Édition limitée",
    price: 299,
    image: cdn("3376edcd-adf9-499d-897f-5bb1f3065ef4.jpg?v=1791831618"),
    width: 1800,
    height: 1200,
    themes: ["manga"]
  }
];

export const productUrl = (handle: string) => `${SHOP_URL}/products/${encodeURIComponent(handle)}`;

export const getArtwork = (handle: string) => {
  const artwork = artworks.find((item) => item.handle === handle);
  if (!artwork) throw new Error(`Œuvre inconnue : ${handle}`);
  return artwork;
};

// 10 œuvres à la une : les plus chères, artistes variés.
export const featuredHandles = [
  "avatar-experience-baril",
  "pure-energy-bonte-street-art-lyon-original-xxl",
  "new-york-bay-2025-blach®",
  "one-week-in-mollans-bonte-street-art-lyon-original",
  "carotte-spirale-endless-loop-serie-ardoise-la-carotte",
  "la-fete-de-la-couleur-port-sete-2052-blach",
  "lion-king",
  "dubai-diptyque-blach®",
  "carotte-purple-haze-serie-ardoise-la-carotte",
  "paris-bande-dessinee-vertical-original-120-80-cm"
];

export const formatPrice = (price: number) =>
  `${price.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} €`;

export const shopifyImage = (url: string, width: number) => `${url}${url.includes("?") ? "&" : "?"}width=${width}`;

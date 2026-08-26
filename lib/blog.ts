import { promises as fs } from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
};

const blogPostsFilePath = path.join(process.cwd(), "lib", "blog-posts.json");

const defaultBlogPosts: BlogPost[] = [
  {
    slug: "prix-tableau-street-art",
    title: "Prix tableau street art : comment comprendre la valeur d'une oeuvre",
    excerpt:
      "Format, notoriété de l'artiste, technique et rareté : les critères qui influencent le prix d'un tableau street art.",
    content:
      "Le prix d'un tableau street art dépend de plusieurs facteurs complémentaires.\n\nLe premier est la trajectoire de l'artiste : une signature déjà reconnue, exposée ou collectionnée aura naturellement un positionnement plus élevé. Le second est le format, car une oeuvre grand format implique davantage de temps, de matière et d'impact décoratif. La technique joue également un rôle important, qu'il s'agisse de peinture, collage, bombe, pochoir ou techniques mixtes.\n\nÀ cela s'ajoutent la rareté de la pièce, le caractère original ou en série limitée, ainsi que la qualité de finition. Pour un acheteur, comprendre ces éléments permet de comparer plus intelligemment et d'investir dans une oeuvre cohérente avec son budget et son projet. Chez BLACH GALLERY, l'objectif est d'aider à choisir un tableau qui ait à la fois une force visuelle, une vraie identité artistique et une valeur perçue durable dans le temps.",
    publishedAt: "2026-05-09"
  },
  {
    slug: "idee-deco-graffiti",
    title: "Idée déco graffiti : intégrer l'art urbain sans alourdir son intérieur",
    excerpt:
      "Conseils concrets pour choisir le bon format, la bonne palette et la bonne intensité visuelle pour une déco graffiti réussie.",
    content:
      "Une décoration graffiti réussie ne consiste pas à saturer un espace, mais à choisir la bonne oeuvre au bon endroit.\n\nDans un intérieur contemporain, un tableau street art peut devenir le point focal principal d'un salon ou d'une entrée. Pour garder une ambiance élégante, il est utile de travailler par contraste : un mur clair, un mobilier plutôt sobre et une oeuvre riche en couleur ou en matière. Les grands formats conviennent bien aux pièces ouvertes, tandis que les formats carrés ou verticaux s'adaptent à des espaces plus compacts.\n\nIl faut aussi penser à la cohérence émotionnelle : une oeuvre très vive apporte de l'énergie, alors qu'une pièce plus graphique structure l'espace avec sophistication. BLACH GALLERY sélectionne des oeuvres qui permettent précisément ce dosage, afin d'associer impact visuel et confort décoratif.",
    publishedAt: "2026-05-09"
  },
  {
    slug: "cadeau-personnalise-graffiti",
    title: "Cadeau personnalisé graffiti : une idée forte pour marquer les esprits",
    excerpt:
      "Pourquoi offrir une oeuvre graffiti personnalisée crée une expérience mémorable pour un anniversaire, une entreprise ou un événement privé.",
    content:
      "Offrir un cadeau personnalisé graffiti permet de sortir des cadeaux standardisés et de proposer une pièce pensée pour la personne qui la reçoit.\n\nUne oeuvre sur mesure peut intégrer un prénom, une date, un lieu symbolique, des couleurs spécifiques ou un univers visuel particulier. Ce type de création fonctionne très bien pour un anniversaire, un mariage, un cadeau corporate, une inauguration ou un événement interne d'entreprise. Au-delà de l'objet, le cadeau devient expérience, récit et élément de décoration durable.\n\nPour être réussi, il doit conserver une vraie qualité artistique et ne pas se limiter à une personnalisation superficielle. BLACH GALLERY peut orienter les clients vers le bon artiste, le bon format et le bon niveau de personnalisation pour obtenir un résultat à la fois fort, esthétique et mémorable.",
    publishedAt: "2026-05-09"
  },
  {
    slug: "blach-fluxus-moderne",
    title: "BLACH : le Fluxus moderne qui casse les codes",
    excerpt:
      "Entre graffiti, photographie, performance et musique, BLACH construit un langage artistique hybride qui refuse les cases.",
    content:
      "Ancien professeur d'EPS, musicien, graffeur, performer, plasticien, Maxime Blachere alias BLACH mélange les disciplines comme d'autres mélangent les couleurs.\n\nSon travail ne cherche pas à rentrer dans les cases : il les explose. Chez BLACH, le graffiti rencontre la photographie, le street art rencontre la musique, le chaos rencontre la précision. Marqueurs acryliques, pastels, collages, vernis ultra brillants, performances live, rap, humour absurde et énergie punk : tout devient support artistique.\n\nLe mouvement Fluxus des années 60 voulait abolir les frontières entre l'art et la vie. BLACH pousse cette logique encore plus loin. Il transforme les objets du quotidien, vandalise les images trop parfaites, détourne les symboles populaires et crée un univers où la liberté passe avant les règles.\n\nSon parcours atypique nourrit cette approche. Ancien prof de sport pendant près de 10 ans, il garde une énergie physique dans sa manière de peindre : gestes rapides, projections, spontanéité, performance. La musique influence aussi son rythme visuel. Chaque toile fonctionne presque comme un morceau de rap ou un freestyle improvisé.\n\nL'humour est omniprésent. Chez BLACH, un singe en origami peut devenir une icône pop, une scène classique peut finir recouverte de tags fluorescents, et une photo de paysage peut être totalement détournée par une avalanche de couleurs. Mais derrière le chaos apparent se cache une vraie réflexion sur notre époque : saturation visuelle, réseaux sociaux, consommation d'images, culture urbaine mondiale et besoin permanent de liberté.\n\nBLACH ne cherche pas à faire du street art décoratif. Il cherche à provoquer une réaction. Son travail divise parfois, dérange souvent, mais ne laisse jamais indifférent. Aujourd'hui, ses oeuvres circulent entre galeries, ventes aux enchères internationales, réseaux sociaux et performances live.\n\nEntre art contemporain, graffiti et culture Fluxus, BLACH construit un langage artistique totalement hybride. Un artiste qui refuse de choisir entre musique, peinture, performance ou provocation. Un artiste qui préfère créer les règles plutôt que les suivre.",
    publishedAt: "2026-05-09"
  }
];

const normalizePost = (post: Partial<BlogPost>): BlogPost => ({
  slug: String(post.slug ?? "").trim(),
  title: String(post.title ?? "").trim(),
  excerpt: String(post.excerpt ?? "").trim(),
  content: String(post.content ?? "").trim(),
  publishedAt: String(post.publishedAt ?? "").trim() || new Date().toISOString().slice(0, 10)
});

async function ensureBlogPostsFile() {
  try {
    await fs.access(blogPostsFilePath);
  } catch {
    await fs.writeFile(blogPostsFilePath, JSON.stringify(defaultBlogPosts, null, 2), "utf8");
  }
}

export async function getBlogPosts() {
  await ensureBlogPostsFile();

  const fileContent = await fs.readFile(blogPostsFilePath, "utf8");
  const parsed = JSON.parse(fileContent) as Partial<BlogPost>[];

  return parsed
    .map(normalizePost)
    .filter((post) => post.slug && post.title)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function saveBlogPosts(posts: BlogPost[]) {
  const normalized = posts
    .map(normalizePost)
    .filter((post) => post.slug && post.title && post.excerpt && post.content);

  await fs.writeFile(blogPostsFilePath, JSON.stringify(normalized, null, 2), "utf8");
  return normalized;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}

export function slugifyBlogTitle(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

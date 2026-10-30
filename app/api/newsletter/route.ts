import { NextResponse } from "next/server";

// Newsletter BLACH GALLERY — stockage des contacts dans Resend (aucune dépendance, API REST).
// Variables d'environnement (Vercel) :
//   RESEND_API_KEY                 clé API Resend
//   RESEND_AUDIENCE_EXPOSITIONS    ID audience « Expositions et vernissages »
//   RESEND_AUDIENCE_ENCHERES       ID audience « Enchères et œuvres exceptionnelles »

const RESEND_API = "https://api.resend.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const TOPICS = {
  expositions: "RESEND_AUDIENCE_EXPOSITIONS",
  encheres: "RESEND_AUDIENCE_ENCHERES"
} as const;

type Topic = keyof typeof TOPICS;

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  const audiences = Object.fromEntries(
    Object.entries(TOPICS).map(([topic, envName]) => [topic, process.env[envName]])
  ) as Record<Topic, string | undefined>;
  return { apiKey, audiences };
}

function json(status: number, message: string) {
  return NextResponse.json({ message }, { status });
}

async function resend(apiKey: string, path: string, method: string, body: unknown) {
  return fetch(`${RESEND_API}${path}`, {
    method,
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store"
  });
}

export async function POST(request: Request) {
  let payload: { email?: unknown; topics?: unknown; consent?: unknown; company?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json(400, "Requête invalide.");
  }

  // Champ piège rempli = robot : on répond OK sans rien enregistrer.
  if (typeof payload.company === "string" && payload.company.trim()) {
    return json(200, "Merci, votre inscription est enregistrée.");
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const topics = Array.isArray(payload.topics)
    ? payload.topics.filter((topic): topic is Topic => typeof topic === "string" && topic in TOPICS)
    : [];

  if (!EMAIL_RE.test(email) || email.length > 254) return json(400, "Adresse email invalide.");
  if (!topics.length) return json(400, "Cochez au moins un type d'information.");
  if (payload.consent !== true) return json(400, "Votre consentement est nécessaire pour vous inscrire.");

  const { apiKey, audiences } = config();
  if (!apiKey || topics.some((topic) => !audiences[topic])) {
    return json(503, "Inscription temporairement indisponible. Écrivez-nous à blachgallery@gmail.com.");
  }

  const results = await Promise.all(
    topics.map((topic) =>
      resend(apiKey, `/audiences/${audiences[topic]}/contacts`, "POST", { email, unsubscribed: false })
    )
  );

  // Contact déjà présent : on le réactive.
  for (const [index, response] of results.entries()) {
    if (response.ok) continue;
    const topic = topics[index];
    const retry = await resend(
      apiKey,
      `/audiences/${audiences[topic]}/contacts/${encodeURIComponent(email)}`,
      "PATCH",
      { unsubscribed: false }
    );
    if (!retry.ok) return json(502, "Inscription impossible pour le moment. Réessayez plus tard.");
  }

  return json(200, "Merci, votre inscription est enregistrée.");
}

export async function DELETE(request: Request) {
  let payload: { email?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json(400, "Requête invalide.");
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email)) return json(400, "Adresse email invalide.");

  const { apiKey, audiences } = config();
  const ids = Object.values(audiences).filter(Boolean) as string[];
  if (!apiKey || !ids.length) {
    return json(503, "Désinscription en ligne indisponible. Écrivez-nous à blachgallery@gmail.com.");
  }

  await Promise.all(
    ids.map((id) => resend(apiKey, `/audiences/${id}/contacts/${encodeURIComponent(email)}`, "PATCH", { unsubscribed: true }))
  );

  // Réponse identique que l'adresse soit inscrite ou non (pas de fuite d'information).
  return json(200, "C'est fait : vous ne recevrez plus nos emails.");
}

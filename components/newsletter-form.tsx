"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const topics = data.getAll("topics").map(String);

    if (!topics.length) {
      setStatus({ kind: "error", message: "Cochez au moins un type d'information." });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          topics,
          consent: data.get("consent") === "on",
          company: data.get("company") // champ piège anti-robot
        })
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Inscription impossible.");
      setStatus({ kind: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Inscription impossible." });
    }
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit} noValidate={false}>
      <label className="field">
        <span>Adresse email</span>
        <input type="email" name="email" required autoComplete="email" placeholder="vous@exemple.fr" />
      </label>

      <fieldset className="checks">
        <legend>Je souhaite recevoir</legend>
        <label className="check">
          <input type="checkbox" name="topics" value="expositions" defaultChecked />
          <span>Expositions et vernissages</span>
        </label>
        <label className="check">
          <input type="checkbox" name="topics" value="encheres" defaultChecked />
          <span>Enchères et œuvres exceptionnelles</span>
        </label>
      </fieldset>

      <label className="check check-consent">
        <input type="checkbox" name="consent" required />
        <span>
          J&apos;accepte de recevoir ces emails de BLACH GALLERY. Désinscription possible à tout moment.{" "}
          <Link href="/newsletter">Données personnelles</Link>
        </span>
      </label>

      <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="btn btn-dark" type="submit" disabled={status.kind === "loading"}>
        {status.kind === "loading" ? "Envoi…" : "S'inscrire"}
      </button>

      <p className={`form-status form-status-${status.kind}`} role="status" aria-live="polite">
        {status.message ?? ""}
      </p>
    </form>
  );
}

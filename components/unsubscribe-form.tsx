"use client";

import { useState, type FormEvent } from "react";

export function UnsubscribeForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const result = (await response.json()) as { message?: string };
      setMessage(result.message ?? "");
    } catch {
      setMessage("Erreur réseau. Réessayez ou écrivez-nous.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label className="field">
        <span>Adresse email à désinscrire</span>
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <button className="btn btn-outline" type="submit" disabled={loading}>
        {loading ? "Envoi…" : "Se désinscrire"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}

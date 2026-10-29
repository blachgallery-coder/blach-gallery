import type { Metadata } from "next";
import { CATAWIKI_URL, CONTACT_EMAIL, FRESQUES_URL, GALLERY_ADDRESS, SHOP_URL } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Contact — BLACH GALLERY, Dardilly",
  description: "Contacter BLACH GALLERY : 11 place de l'Église, 69570 Dardilly. Galerie d'art contemporain et collectif d'artistes lyonnais.",
  alternates: { canonical: "/bio-contact" }
};

export default function ContactPage() {
  return (
    <section className="page container">
      <header className="page-head">
        <p className="kicker">Contact</p>
        <h1>Contacter la galerie</h1>
        <p className="lead">
          Fondée par Maxime Blachère (BLACH®), BLACH GALLERY est une galerie indépendante et un collectif d&apos;artistes
          installés à Dardilly, aux portes de Lyon.
        </p>
      </header>

      <div className="contact-grid">
        <div>
          <p className="footer-label">Adresse</p>
          <address>
            {GALLERY_ADDRESS.name}
            <br />
            {GALLERY_ADDRESS.street}
            <br />
            {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
          </address>
          <a href={GALLERY_ADDRESS.mapsUrl} className="text-link" target="_blank" rel="noopener noreferrer">
            Ouvrir dans Google Maps
          </a>
        </div>
        <div>
          <p className="footer-label">Écrire</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
            {CONTACT_EMAIL}
          </a>
          <p className="muted">Horaires d&apos;ouverture : nous contacter avant votre visite.</p>
        </div>
        <div>
          <p className="footer-label">En ligne</p>
          <a href={SHOP_URL} className="text-link" target="_blank" rel="noopener noreferrer">Shop</a>
          <a href={CATAWIKI_URL} className="text-link" target="_blank" rel="noopener noreferrer">Enchères Catawiki</a>
          <a href={FRESQUES_URL} className="text-link" target="_blank" rel="noopener noreferrer">Fresques murales</a>
        </div>
      </div>
    </section>
  );
}

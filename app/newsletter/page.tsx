import type { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";
import { UnsubscribeForm } from "@/components/unsubscribe-form";
import { CONTACT_EMAIL } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Newsletter et données personnelles",
  description: "Inscription, désinscription et informations RGPD de la newsletter BLACH GALLERY.",
  alternates: { canonical: "/newsletter" }
};

export default function NewsletterPage() {
  return (
    <section className="page container narrow">
      <header className="page-head">
        <p className="kicker">Newsletter</p>
        <h1>Restez informés</h1>
        <p className="lead">
          Recevez nos invitations aux vernissages, nos événements et nos annonces d&apos;enchères exceptionnelles.
        </p>
      </header>

      <NewsletterForm />

      <div className="legal">
        <h2>Se désinscrire</h2>
        <p>Chaque email contient un lien de désinscription. Vous pouvez aussi vous désinscrire ici :</p>
        <UnsubscribeForm />

        <h2>Données personnelles</h2>
        <ul>
          <li>Responsable du traitement : BLACH GALLERY, 11 place de l&apos;Église, 69570 Dardilly.</li>
          <li>Donnée collectée : votre adresse email et les thèmes choisis.</li>
          <li>Finalité : envoi des informations demandées (expositions, vernissages, enchères).</li>
          <li>Base légale : votre consentement (art. 6.1.a RGPD), retirable à tout moment.</li>
          <li>Prestataire d&apos;envoi : Resend (sous-traitant).</li>
          <li>Durée : jusqu&apos;à votre désinscription.</li>
          <li>
            Droits d&apos;accès, de rectification et d&apos;effacement :{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Réclamation possible auprès de la CNIL.
          </li>
        </ul>
      </div>
    </section>
  );
}

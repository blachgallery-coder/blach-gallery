import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { CATAWIKI_URL, CONTACT_EMAIL, GALLERY_ADDRESS } from "@/lib/gallery";

// Semaine en cours — à mettre à jour chaque lundi (titres = intitulés Catawiki exacts).
// Données relevées sur l'espace vendeur Catawiki le lundi 16/11/2026 à 8h55.
const WEEK_LABEL = "Semaine du 16 au 21 novembre 2026";
const SNAPSHOT_LABEL = "Offres relevées le lundi 16 novembre 2026 à 8h55";
const PHONE = "06 41 85 19 48";
const PHONE_HREF = "tel:+33641851948";
const IMG = "/images/encheres";

type Lot = {
  title: string;
  image: string;
  type: "Édition limitée" | "Pièce unique";
  closing: string;
  bid: number;
  reserve: "none" | "reached";
};

const lots: Lot[] = [
  {
    title: "Cambriolage et coloriage au Louvre",
    image: `${IMG}/enchere-street-art-cambriolage-louvre-blach.webp`,
    type: "Édition limitée",
    closing: "Mar. 17 nov. vers 20h15",
    bid: 24,
    reserve: "none"
  },
  {
    title: "Vandal is Color TAJ MAHAL",
    image: `${IMG}/enchere-vandal-is-color-taj-mahal-blach.webp`,
    type: "Édition limitée",
    closing: "Mar. 17 nov. vers 20h30",
    bid: 25,
    reserve: "none"
  },
  {
    title: "BALANCE TON ART — Sculpture",
    image: `${IMG}/enchere-sculpture-balance-ton-art-blach.webp`,
    type: "Pièce unique",
    closing: "Jeu. 19 nov. vers 20h10",
    bid: 225,
    reserve: "reached"
  },
  {
    title: "Lyon Doisneau feat Carotte",
    image: `${IMG}/enchere-street-art-lyon-doisneau-carotte-blach.webp`,
    type: "Édition limitée",
    closing: "Ven. 20 nov. vers 18h25",
    bid: 15,
    reserve: "none"
  },
  {
    title: "New York Ultimate 2026 XI",
    image: `${IMG}/enchere-street-art-new-york-ultimate-blach.webp`,
    type: "Édition limitée",
    closing: "Ven. 20 nov. vers 18h30",
    bid: 60,
    reserve: "none"
  },
  {
    title: "MARTIN D-28 VANDALIZED",
    image: `${IMG}/enchere-guitare-martin-d28-vandalized-blach.webp`,
    type: "Édition limitée",
    closing: "Sam. 21 nov. vers 21h15",
    bid: 110,
    reserve: "none"
  }
];

const steps = [
  {
    n: "01",
    title: "Fixez votre prix maximum",
    text: "Indiquez le montant le plus haut que vous êtes prêt à mettre sur l'œuvre. Personne ne le voit."
  },
  {
    n: "02",
    title: "L'enchère devient automatique",
    text: "Catawiki surenchérit pour vous, palier par palier, jusqu'à votre maximum — jamais au-delà."
  },
  {
    n: "03",
    title: "Vivez votre vie",
    text: "Inutile de rester collé à l'écran jusqu'à la dernière seconde. Vous êtes prévenu si vous gagnez."
  }
];

const fees = [
  { label: "Frais acheteur (protection Catawiki)", value: "9 % + 3 €", note: "TTC, sur le prix d'adjudication" },
  { label: "Commission vendeur", value: "15 %", note: "12,5 % HT + TVA 20 %" },
  { label: "Livraison + emballage œuvre d'art", value: "≈ 20 €", note: "Selon format et destination" }
];

export const metadata: Metadata = {
  title: "Enchères de la semaine — BLACH® sur Catawiki",
  description:
    "Les enchères BLACH® de la semaine sur Catawiki : éditions limitées chaque semaine, originaux 1 à 2 fois par mois. Enchère automatique, retrait gratuit à la galerie de Dardilly.",
  ...pageMeta(
    "/encheres-de-la-semaine",
    "Enchères de la semaine — BLACH® sur Catawiki",
    "Les enchères BLACH® de la semaine sur Catawiki : éditions limitées chaque semaine, originaux 1 à 2 fois par mois. Enchère automatique, retrait gratuit à la galerie de Dardilly."
  )
};

function BigAuctionButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={CATAWIKI_URL}
      className={`auction-cta${light ? " auction-cta-light" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="auction-cta-gavel" aria-hidden="true">
        ⚡
      </span>
      <span className="auction-cta-label">Enchères de la semaine</span>
      <span className="auction-cta-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export default function EncheresDeLaSemainePage() {
  return (
    <div className="auction-page">
      {/* 1 — HERO */}
      <section className="auction-hero">
        <div className="auction-splash" aria-hidden="true" />
        <div className="container auction-hero-inner">
          <p className="kicker auction-kicker">{WEEK_LABEL} · Catawiki</p>
          <h1>
            Enchères <em>de la semaine</em>
          </h1>
          <p className="auction-lead">
            Des œuvres BLACH® signées, en éditions limitées et en pièces uniques, mises aux enchères sur Catawiki,
            l&apos;une des plateformes d&apos;enchères en ligne les plus fréquentées d&apos;Europe. Fixez votre prix,
            l&apos;enchère fait le reste.
          </p>
          <BigAuctionButton />
          <ul className="auction-badges">
            <li>Paiement sécurisé</li>
            <li>Vendeur vérifié</li>
            <li>Sans prix de réserve sur les éditions</li>
            <li>Retrait gratuit à Dardilly</li>
          </ul>
        </div>
      </section>

      {/* 2 — CONFIANCE */}
      <section className="section auction-trust" aria-labelledby="confiance-title">
        <div className="container auction-trust-grid">
          <div>
            <p className="kicker">Pourquoi Catawiki</p>
            <h2 id="confiance-title">Un géant européen des enchères, en toute confiance</h2>
            <p>
              Catawiki est une maison d&apos;enchères 100 % en ligne née en 2008 aux Pays-Bas. Elle se présente comme
              la place de marché sélectionnée la plus visitée d&apos;Europe pour les objets d&apos;exception : plus de
              10 millions de visiteurs uniques par mois et des lots validés par des experts maison.
            </p>
            <p>
              Votre paiement est sécurisé par Catawiki et n&apos;est versé au vendeur qu&apos;après réception de
              l&apos;œuvre.
            </p>
            <figure className="auction-shot auction-shot-slim">
              <img
                src={`${IMG}/catawiki-trustpilot-excellent.webp`}
                alt="Note Trustpilot de Catawiki : Excellent, 145 469 avis"
                width={500}
                height={50}
                loading="lazy"
              />
              <figcaption>Catawiki sur Trustpilot — capture du 16/11/2026</figcaption>
            </figure>
          </div>

          <div className="auction-proof">
            <div className="auction-stats">
              <div>
                <strong>2 876</strong>
                <span>œuvres vendues</span>
              </div>
              <div>
                <strong>97,22 %</strong>
                <span>avis positifs</span>
              </div>
              <div>
                <strong>794</strong>
                <span>évaluations</span>
              </div>
            </div>
            <figure className="auction-shot">
              <img
                src={`${IMG}/catawiki-profil-blachgallery-avis.webp`}
                alt="Profil vendeur BLACHGALLERY sur Catawiki : 2876 objets vendus, 97,22 % d'avis positifs, 794 évaluations"
                width={466}
                height={222}
                loading="lazy"
              />
              <figcaption>Notre profil vendeur Catawiki — vendeur vérifié</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3 — ENCHÈRE AUTOMATIQUE */}
      <section className="section section-dark auction-how" aria-labelledby="auto-title">
        <div className="container">
          <p className="kicker">Zéro stress</p>
          <h2 id="auto-title">Pas besoin d&apos;être là à la dernière seconde</h2>
          <ol className="auction-steps">
            {steps.map((step) => (
              <li key={step.n}>
                <span className="auction-step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 — VENTES DE LA SEMAINE */}
      <section className="section" aria-labelledby="lots-title">
        <div className="container">
          <div className="auction-lots-head">
            <div>
              <p className="kicker">{WEEK_LABEL}</p>
              <h2 id="lots-title">Les ventes de la semaine</h2>
              <p className="muted">
                Six œuvres en jeu cette semaine : cinq éditions limitées, toutes sans prix de réserve, et une sculpture
                pièce unique. Le Louvre se fait cambrioler à coups de couleurs, le Taj Mahal se reflète dans un
                miroir vandalisé, Lyon rend hommage à Doisneau avec la Carotte, New York s&apos;embrase au coucher du
                soleil et une Martin D-28 part en éclaboussures fluo. Et pour les amateurs de pièces uniques :
                « BALANCE TON ART », une balance sculptée et entièrement graffée, avec ses poids.
              </p>
            </div>
          </div>

          <ul className="auction-lots">
            {lots.map((lot) => (
              <li key={lot.title} className="auction-lot">
                <a href={CATAWIKI_URL} target="_blank" rel="noopener noreferrer">
                  <img src={lot.image} alt={`${lot.title} — BLACH® (Maxime Blachère)`} width={105} height={105} loading="lazy" />
                  <div className="auction-lot-body">
                    <span className={`auction-tag${lot.type === "Pièce unique" ? " auction-tag-unique" : ""}`}>
                      {lot.type}
                    </span>
                    <h3>{lot.title}</h3>
                    <p className="auction-lot-close">Clôture : {lot.closing}</p>
                    <p className="auction-lot-bid">
                      Offre au 16/11 : <strong>{lot.bid} €</strong>
                      <span>{lot.reserve === "none" ? "Sans prix de réserve" : "Prix de réserve atteint"}</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <p className="auction-footnote">
            {SNAPSHOT_LABEL}. Horaires de clôture indicatifs : seule l&apos;heure affichée sur Catawiki fait foi.
          </p>

          <div className="auction-selections">
            <p className="kicker">Sélectionnées par l&apos;expert Catawiki en art moderne et contemporain</p>
            <div className="auction-selections-grid">
              <figure className="auction-shot">
                <img
                  src={`${IMG}/catawiki-selection-expert-art-urbain.webp`}
                  alt="Vente Catawiki « Une belle sélection d'art urbain », clôture jeudi 20:00"
                  width={268}
                  height={135}
                  loading="lazy"
                />
              </figure>
              <figure className="auction-shot">
                <img
                  src={`${IMG}/catawiki-selection-expert-urbaine-anthony.webp`}
                  alt="Vente Catawiki « La sélection contemporaine urbaine d'Anthony », clôture samedi 21:00"
                  width={268}
                  height={150}
                  loading="lazy"
                />
              </figure>
            </div>
          </div>

          <figure className="auction-shot auction-shot-wide">
            <img
              src={`${IMG}/catawiki-lots-blach-semaine.webp`}
              alt="Capture des six lots BLACH® en cours sur Catawiki le 16 novembre 2026"
              width={1035}
              height={517}
              loading="lazy"
            />
            <figcaption>Nos lots en cours — capture du lundi 16/11/2026, 8h55</figcaption>
          </figure>

          <div className="auction-center">
            <BigAuctionButton />
          </div>
        </div>
      </section>

      {/* 5 — RYTHME + NEWSLETTER */}
      <section className="section section-alt" aria-labelledby="rythme-title">
        <div className="container auction-rhythm">
          <div className="auction-rhythm-card">
            <strong>Chaque semaine</strong>
            <span>des éditions limitées, signées et numérotées</span>
          </div>
          <div className="auction-rhythm-card auction-rhythm-card-hot">
            <strong>1 à 2 fois par mois</strong>
            <span>une œuvre originale, pièce unique</span>
          </div>
          <div className="auction-rhythm-text">
            <p className="kicker">Ne ratez plus rien</p>
            <h2 id="rythme-title">Soyez prévenu des prochaines ventes</h2>
            <p>Abonnez-vous à la newsletter : les nouvelles enchères et les originaux arrivent directement chez vous.</p>
            <div className="actions">
              <Link href="/newsletter" className="btn btn-dark">
                S&apos;abonner à la newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — FRAIS + DIRECT */}
      <section className="section" aria-labelledby="frais-title">
        <div className="container auction-fees-grid">
          <div>
            <p className="kicker">Transparence</p>
            <h2 id="frais-title">Ce que coûtent les enchères</h2>
            <dl className="auction-fees">
              {fees.map((fee) => (
                <div key={fee.label}>
                  <dt>{fee.label}</dt>
                  <dd>
                    <strong>{fee.value}</strong>
                    <span>{fee.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="auction-example">
              Exemple pour une adjudication à 100 € : vous payez 100 € + 12 € de frais + ≈ 20 € de livraison, soit
              ≈ 132 €. L&apos;artiste, lui, perçoit 85 €. Au total, environ 24 % de frais, plus 3 € et la livraison.
            </p>
            <p className="auction-footnote">
              Frais acheteur Catawiki : 9 % du prix final + 3 €, TVA incluse. Commission vendeur standard : 12,5 % HT.
              Barème Catawiki au 16/11/2026, susceptible d&apos;évoluer.
            </p>
          </div>

          <div className="auction-direct">
            <p className="kicker">Le bon plan</p>
            <h2>Passez en direct</h2>
            <p>
              Vous avez repéré une édition ou une œuvre qui vous plaît ? Contactez-nous : on trouve toujours un
              arrangement.
            </p>
            <h3>Vous gagnez sur Catawiki ?</h3>
            <p>
              Choisissez <strong>« retrait sur place »</strong> au moment du paiement : vous économisez l&apos;emballage
              et la livraison, une vingtaine d&apos;euros. Vous êtes dans le coin ? Passez à la galerie, on
              s&apos;arrange.
            </p>
            <address>
              <strong>{GALLERY_ADDRESS.name}</strong>
              <br />
              {GALLERY_ADDRESS.street}, {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
              <br />
              Lun., mar., jeu., ven. : 9h–16h · Mer. et sam. : 10h–12h et 14h–19h
            </address>
            <div className="actions">
              <a href={PHONE_HREF} className="btn btn-light">
                {PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Ench%C3%A8res%20BLACH`} className="btn btn-ghost-light">
                Écrire à la galerie
              </a>
              <a href={GALLERY_ADDRESS.mapsUrl} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
                Itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — SIGNATURE */}
      <section className="section section-dark auction-outro">
        <div className="container narrow center">
          <p className="auction-signoff">
            Merci à vous et bonne chance pour les enchères.
            <br />
            <em>Fluxus, enchères à tous&nbsp;!</em>
          </p>
          <p className="kicker">BLACH® &amp; la BLACH TEAM</p>
          <BigAuctionButton light />
        </div>
      </section>
    </div>
  );
}

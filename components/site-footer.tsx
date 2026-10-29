import Link from "next/link";
import { CATAWIKI_URL, CONTACT_EMAIL, FRESQUES_URL, GALLERY_ADDRESS, SHOP_URL } from "@/lib/gallery";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">BLACH GALLERY</p>
          <p>Galerie d&apos;art contemporain &amp; collectif d&apos;artistes lyonnais.</p>
          <address>
            {GALLERY_ADDRESS.street}
            <br />
            {GALLERY_ADDRESS.postalCode} {GALLERY_ADDRESS.city}
          </address>
        </div>
        <div>
          <p className="footer-label">Galerie</p>
          <Link href="/artistes-du-collectif">Le collectif</Link>
          <Link href="/shop">Les œuvres</Link>
          <Link href="/expositions">Expositions</Link>
          <Link href="/bio-contact">Contact</Link>
        </div>
        <div>
          <p className="footer-label">En ligne</p>
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Shop</a>
          <a href={CATAWIKI_URL} target="_blank" rel="noopener noreferrer">Enchères Catawiki</a>
          <a href={FRESQUES_URL} target="_blank" rel="noopener noreferrer">Fresques murales</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} BLACH GALLERY</p>
        <Link href="/newsletter">Newsletter &amp; données personnelles</Link>
      </div>
    </footer>
  );
}

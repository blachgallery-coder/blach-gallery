import Link from "next/link";
import { FacebookIcon } from "@/components/facebook-icon";
import { officialSpringExpoFacebookUrl } from "@/lib/collective";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">BLACH GALLERY</p>
          <p>Galerie en ligne multi-artistes dediee au street art, au pop art et a l'art moderne.</p>
        </div>
        <div>
          <p className="eyebrow">Explorer</p>
          <Link href="/shop">Shop</Link>
          <Link href="/artistes">Artistes</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <p className="eyebrow">Services</p>
          <Link href="/performances-artistiques">Performances artistiques</Link>
          <Link href="/theme/street-art-lyon">Street art Lyon</Link>
          <Link href="/theme/pop-art">Pop art</Link>
          <a href={officialSpringExpoFacebookUrl} className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="button-icon" />
            <span>Evenement Facebook officiel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navigation } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">
          BLACH GALLERY
        </Link>
        <nav className="nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
      <div className="site-status-banner">
        <div className="container">
          <p>Site en construction Fluxus, mise a jour en cours.</p>
        </div>
      </div>
    </header>
  );
}
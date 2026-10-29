"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navigation } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="BLACH GALLERY — accueil">
          BLACH GALLERY
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
        <nav id="main-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Navigation principale">
          {navigation.map((item) =>
            "external" in item && item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}

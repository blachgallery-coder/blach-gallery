"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { defaultLanguage, translationLanguages } from "@/lib/translation-languages";

const storageKey = "blach-gallery-language";

function readGoogleTranslateCookie() {
  if (typeof document === "undefined") {
    return defaultLanguage.code;
  }

  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) {
    return defaultLanguage.code;
  }

  const value = decodeURIComponent(match[1]);
  const parts = value.split("/");
  return parts[parts.length - 1] || defaultLanguage.code;
}

function setGoogleTranslateCookie(languageCode: string) {
  const cookieValue = `/${defaultLanguage.code}/${languageCode}`;
  const serialized = `googtrans=${encodeURIComponent(cookieValue)};path=/;max-age=31536000`;

  document.cookie = serialized;
  document.cookie = `${serialized};domain=${window.location.hostname}`;
  window.localStorage.setItem(storageKey, languageCode);
}

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(defaultLanguage.code);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookieLanguage = readGoogleTranslateCookie();
    const supportedLanguage =
      translationLanguages.find((language) => language.code.toLowerCase() === cookieLanguage.toLowerCase())?.code ??
      defaultLanguage.code;

    setActiveLanguage(supportedLanguage);
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activeLabel = useMemo(
    () => translationLanguages.find((language) => language.code === activeLanguage)?.label ?? defaultLanguage.label,
    [activeLanguage]
  );

  function handleLanguageChange(languageCode: string) {
    setActiveLanguage(languageCode);
    setIsOpen(false);
    setGoogleTranslateCookie(languageCode);
    window.location.reload();
  }

  return (
    <div className="language-switcher" ref={wrapperRef}>
      <button
        type="button"
        className="language-trigger"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Choisir la langue du site"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="language-trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.92 9h-3.01a15.62 15.62 0 0 0-1.18-5 8.03 8.03 0 0 1 4.19 5ZM12 4.07c.93 1.12 2.23 3.45 2.68 6.93H9.32C9.77 7.52 11.07 5.19 12 4.07ZM4.89 13h3.03a15.53 15.53 0 0 0 1.18 5 8.03 8.03 0 0 1-4.21-5Zm3.03-2H4.89a8.03 8.03 0 0 1 4.2-5 15.56 15.56 0 0 0-1.17 5ZM12 19.93c-.93-1.12-2.23-3.45-2.68-6.93h5.36c-.45 3.48-1.75 5.81-2.68 6.93ZM15.91 13h3.01a8.03 8.03 0 0 1-4.19 5 15.62 15.62 0 0 0 1.18-5Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="language-trigger-label">{activeLabel}</span>
        <span className={`language-trigger-caret${isOpen ? " is-open" : ""}`} aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {isOpen ? (
        <div className="language-menu" role="menu" aria-label="Langues disponibles">
          {translationLanguages.map((language) => {
            const isActive = language.code === activeLanguage;

            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                className={`language-option${isActive ? " is-active" : ""}`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <span>{language.label}</span>
                {isActive ? <span className="language-option-check">OK</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

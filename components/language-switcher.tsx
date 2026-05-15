"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { defaultLanguage, translationLanguages } from "@/lib/translation-languages";

declare global {
  interface Window {
    __BLACH_GALLERY_TRANSLATE__?: {
      clearLanguage: () => void;
      getLanguage: () => string;
      isExplicit: () => boolean;
      setLanguage: (languageCode: string) => string;
    };
  }
}

function readActiveLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage.code;
  }

  const helperLanguage = window.__BLACH_GALLERY_TRANSLATE__?.getLanguage();
  if (helperLanguage) {
    return helperLanguage;
  }

  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) {
    return defaultLanguage.code;
  }

  const value = decodeURIComponent(match[1]);
  const parts = value.split("/");
  return parts[parts.length - 1] || defaultLanguage.code;
}

function normalizeLanguage(languageCode: string) {
  return (
    translationLanguages.find((language) => language.code.toLowerCase() === languageCode.toLowerCase())?.code ??
    defaultLanguage.code
  );
}

function dispatchNativeChange(select: HTMLSelectElement, value: string) {
  select.value = value;
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

function waitForTranslateSelect(timeoutMs = 4000) {
  return new Promise<HTMLSelectElement | null>((resolve) => {
    const startedAt = Date.now();

    function lookup() {
      const select = document.querySelector(".goog-te-combo");
      if (select instanceof HTMLSelectElement) {
        resolve(select);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        resolve(null);
        return;
      }

      window.setTimeout(lookup, 120);
    }

    lookup();
  });
}

async function applyLanguage(languageCode: string) {
  const helper = window.__BLACH_GALLERY_TRANSLATE__;
  const normalizedLanguage = normalizeLanguage(languageCode);

  if (!helper) {
    window.location.reload();
    return;
  }

  if (normalizedLanguage === defaultLanguage.code) {
    helper.clearLanguage();
    window.location.reload();
    return;
  }

  helper.setLanguage(normalizedLanguage);

  const select = await waitForTranslateSelect();
  if (!select) {
    window.location.reload();
    return;
  }

  if (select.value !== normalizedLanguage) {
    dispatchNativeChange(select, normalizedLanguage);
  }
}

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(defaultLanguage.code);
  const [isApplying, setIsApplying] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function syncLanguage() {
      setActiveLanguage(normalizeLanguage(readActiveLanguage()));
    }

    syncLanguage();
    window.addEventListener("blach-translate-ready", syncLanguage);

    return () => {
      window.removeEventListener("blach-translate-ready", syncLanguage);
    };
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

  async function handleLanguageChange(languageCode: string) {
    const normalizedLanguage = normalizeLanguage(languageCode);

    setActiveLanguage(normalizedLanguage);
    setIsOpen(false);
    setIsApplying(true);

    try {
      await applyLanguage(normalizedLanguage);
    } finally {
      setIsApplying(false);
    }
  }

  return (
    <div className="language-switcher" ref={wrapperRef}>
      <button
        type="button"
        className="language-trigger"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Choisir la langue du site"
        disabled={isApplying}
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
        <span className="language-trigger-label">{isApplying ? "Chargement..." : activeLabel}</span>
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
                disabled={isApplying}
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
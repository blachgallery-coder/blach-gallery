"use client";

import Script from "next/script";
import { defaultLanguage, translationLanguages } from "@/lib/translation-languages";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: Record<string, string | boolean | number>,
          elementId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
    __BLACH_GALLERY_TRANSLATE__?: {
      clearLanguage: () => void;
      getLanguage: () => string;
      isExplicit: () => boolean;
      setLanguage: (languageCode: string) => string;
    };
  }
}

const includedLanguages = translationLanguages.map((language) => language.code).join(",");
const supportedLanguageCodes = translationLanguages.map((language) => language.code);

const bootstrapScript = `
  (function () {
    var supported = ${JSON.stringify(supportedLanguageCodes)};
    var defaultLanguage = ${JSON.stringify(defaultLanguage.code)};
    var cookieName = "googtrans";
    var storageKey = "blach-gallery-language";
    var explicitKey = "blach-gallery-language-explicit";

    function getCookieDomains() {
      var hostname = window.location.hostname;
      var domains = [hostname];
      var parts = hostname.split(".");

      if (parts.length > 2) {
        domains.push("." + parts.slice(-2).join("."));
      }

      return domains;
    }

    function writeCookie(value, maxAge) {
      var base = cookieName + "=" + encodeURIComponent(value) + ";path=/;max-age=" + maxAge + ";SameSite=Lax";
      document.cookie = base;

      getCookieDomains().forEach(function (domain) {
        document.cookie = base + ";domain=" + domain;
      });
    }

    function setCookie(value) {
      writeCookie(value, 31536000);
    }

    function clearCookie() {
      writeCookie("", 0);
    }

    function normalize(code) {
      if (!code) return "";
      var exact = supported.find(function (item) { return item.toLowerCase() === code.toLowerCase(); });
      if (exact) return exact;

      var base = code.split("-")[0].toLowerCase();
      return supported.find(function (item) { return item.split("-")[0].toLowerCase() === base; }) || "";
    }

    function persist(languageCode, explicit) {
      var normalizedLanguage = normalize(languageCode) || defaultLanguage;
      setCookie("/" + defaultLanguage + "/" + normalizedLanguage);

      try {
        window.localStorage.setItem(storageKey, normalizedLanguage);
        window.localStorage.setItem(explicitKey, explicit ? "true" : "false");
      } catch (error) {}

      return normalizedLanguage;
    }

    function clearLanguage() {
      clearCookie();

      try {
        window.localStorage.removeItem(storageKey);
        window.localStorage.removeItem(explicitKey);
      } catch (error) {}

      setCookie("/" + defaultLanguage + "/" + defaultLanguage);
      return defaultLanguage;
    }

    function getStoredLanguage() {
      try {
        return normalize(window.localStorage.getItem(storageKey) || "") || defaultLanguage;
      } catch (error) {
        return defaultLanguage;
      }
    }

    function isExplicit() {
      try {
        return window.localStorage.getItem(explicitKey) === "true";
      } catch (error) {
        return false;
      }
    }

    window.__BLACH_GALLERY_TRANSLATE__ = {
      clearLanguage: clearLanguage,
      getLanguage: getStoredLanguage,
      isExplicit: isExplicit,
      setLanguage: function (languageCode) {
        if (!languageCode || normalize(languageCode) === defaultLanguage) {
          return clearLanguage();
        }

        return persist(languageCode, true);
      }
    };

    if (isExplicit()) {
      persist(getStoredLanguage(), true);
      return;
    }

    clearLanguage();
  })();
`;

export function GoogleTranslateProvider() {
  return (
    <>
      <Script id="google-translate-bootstrap" strategy="beforeInteractive">
        {bootstrapScript}
      </Script>
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function () {
              if (!window.google?.translate?.TranslateElement) {
                return;
              }

              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "${defaultLanguage.code}",
                  includedLanguages: "${includedLanguages}",
                  autoDisplay: false
                },
                "google_translate_element"
              );

              window.dispatchEvent(new CustomEvent("blach-translate-ready"));
            };
          `
        }}
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" className="google-translate-anchor" aria-hidden="true" />
    </>
  );
}
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

    function setCookie(value) {
      var cookie = cookieName + "=" + encodeURIComponent(value) + ";path=/;max-age=31536000";
      document.cookie = cookie;
      document.cookie = cookie + ";domain=" + window.location.hostname;
    }

    function clearCookie() {
      var cookie = cookieName + "=;path=/;max-age=0";
      document.cookie = cookie;
      document.cookie = cookie + ";domain=" + window.location.hostname;
    }

    function normalize(code) {
      if (!code) return "";
      var exact = supported.find(function (item) { return item.toLowerCase() === code.toLowerCase(); });
      if (exact) return exact;

      var base = code.split("-")[0].toLowerCase();
      return supported.find(function (item) { return item.split("-")[0].toLowerCase() === base; }) || "";
    }

    try {
      var stored = window.localStorage.getItem(storageKey);
      var isExplicit = window.localStorage.getItem(explicitKey) === "true";
      var normalizedStored = normalize(stored);

      if (isExplicit && normalizedStored) {
        setCookie("/" + defaultLanguage + "/" + normalizedStored);
        return;
      }

      window.localStorage.removeItem(storageKey);
      window.localStorage.removeItem(explicitKey);
    } catch (error) {}

    clearCookie();
    setCookie("/" + defaultLanguage + "/" + defaultLanguage);
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

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

    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
      return match ? decodeURIComponent(match[2]) : "";
    }

    function setCookie(value) {
      var cookie = cookieName + "=" + encodeURIComponent(value) + ";path=/;max-age=31536000";
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

    var cookieValue = getCookie(cookieName);
    if (cookieValue) {
      try {
        var parts = cookieValue.split("/");
        var active = normalize(parts[parts.length - 1]);
        if (active) {
          window.localStorage.setItem(storageKey, active);
          return;
        }
      } catch (error) {}
    }

    try {
      var stored = window.localStorage.getItem(storageKey);
      var normalizedStored = normalize(stored);
      if (normalizedStored) {
        setCookie("/" + defaultLanguage + "/" + normalizedStored);
        return;
      }
    } catch (error) {}

    var browserLanguage = normalize(window.navigator.language || window.navigator.userLanguage || "");
    if (browserLanguage && browserLanguage !== defaultLanguage) {
      setCookie("/" + defaultLanguage + "/" + browserLanguage);
      try {
        window.localStorage.setItem(storageKey, browserLanguage);
      } catch (error) {}
    }
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

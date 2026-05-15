export const translationLanguages = [
  { code: "fr", label: "Fran\u00e7ais" },
  { code: "en", label: "English" },
  { code: "es", label: "Espa\u00f1ol" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Portugu\u00eas" },
  { code: "nl", label: "Nederlands" },
  { code: "zh-CN", label: "\u4e2d\u6587" },
  { code: "ja", label: "\u65e5\u672c\u8a9e" },
  { code: "ko", label: "\ud55c\uad6d\uc5b4" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
  { code: "tr", label: "T\u00fcrk\u00e7e" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "fi", label: "Suomi" },
  { code: "no", label: "Norsk" },
  { code: "cs", label: "\u010ce\u0161tina" },
  { code: "el", label: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac" },
  { code: "he", label: "\u05e2\u05d1\u05e8\u05d9\u05ea" },
  { code: "hi", label: "\u0939\u093f\u0928\u094d\u0926\u0940" },
  { code: "th", label: "\u0e44\u0e17\u0e22" },
  { code: "uk", label: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" }
] as const;

export type TranslationLanguage = (typeof translationLanguages)[number];

export const defaultLanguage = translationLanguages[0];

export const translationLanguages = [
  { code: "fr", label: "Francais" },
  { code: "en", label: "English" },
  { code: "es", label: "Espanol" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Portugues" },
  { code: "nl", label: "Nederlands" },
  { code: "zh-CN", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "ru", label: "Russian" },
  { code: "ar", label: "Arabic" },
  { code: "tr", label: "Turkish" },
  { code: "pl", label: "Polish" },
  { code: "sv", label: "Swedish" },
  { code: "da", label: "Danish" },
  { code: "fi", label: "Finnish" },
  { code: "no", label: "Norwegian" },
  { code: "cs", label: "Czech" },
  { code: "el", label: "Greek" },
  { code: "he", label: "Hebrew" },
  { code: "hi", label: "Hindi" },
  { code: "th", label: "Thai" },
  { code: "uk", label: "Ukrainian" }
] as const;

export type TranslationLanguage = (typeof translationLanguages)[number];

export const defaultLanguage = translationLanguages[0];

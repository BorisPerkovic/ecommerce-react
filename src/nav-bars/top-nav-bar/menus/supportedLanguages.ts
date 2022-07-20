export interface Language {
  languageLabel: string;
  languageTag: string;
}

export const supportedLanguages: Language[] = [
  {
    languageTag: "en",
    languageLabel: "english",
  },
  {
    languageTag: "de",
    languageLabel: "german",
  },
  {
    languageTag: "it",
    languageLabel: "italy",
  },
  {
    languageTag: "es",
    languageLabel: "spain",
  },
];

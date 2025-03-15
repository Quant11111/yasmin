import "server-only";
import type { Locale } from "./config";

// Dictionnaires
import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";

const dictionaries = {
  fr,
  en,
  es,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale];
};

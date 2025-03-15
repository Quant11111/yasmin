export const defaultLocale = "fr";
export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

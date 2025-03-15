import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, defaultLocale, isValidLocale } from "@/i18n/config";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";
import "../globals.css";

// Métadonnées par défaut - définies comme constante mais non exportées
const defaultMetadata: Metadata = {
  title: {
    template: "%s | Yasmin Avila Picero",
    default: "Yasmin Avila Picero | Artiste multidisciplinaire",
  },
  description:
    "Artiste chilienne multidisciplinaire : autrice, actrice et écrivaine basée à Paris",
  keywords: [
    "Yasmin Avila Picero",
    "artiste",
    "chilienne",
    "Paris",
    "théâtre",
    "écriture",
  ],
};

// Générer les métadonnées en fonction de la langue
export async function generateMetadata(props: {
  params: { lang: string };
}): Promise<Metadata> {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  return {
    ...defaultMetadata,
    title: {
      template: `%s | Yasmin Avila Picero`,
      default: `Yasmin Avila Picero | ${dictionary.home.subtitle}`,
    },
    description: dictionary.home.description,
    metadataBase: new URL("https://yasmin-avila.com"),
    alternates: {
      canonical: "/",
      languages: {
        fr: "/fr",
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default async function LangLayout(props: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide, sinon utiliser la langue par défaut
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  return (
    <ThemeProvider>
      <HtmlLangUpdater lang={validLang as Locale} />
      <div className="min-h-screen flex flex-col">
        <Navigation lang={validLang as Locale} dictionary={dictionary} />
        <main className="flex-grow pt-16">{props.children}</main>
        <Footer lang={validLang as Locale} dictionary={dictionary} />
      </div>
    </ThemeProvider>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, isValidLocale } from "./i18n/config";

// Middleware pour gérer la redirection vers la langue par défaut
export function middleware(request: NextRequest) {
  // Récupérer le chemin demandé
  const pathname = request.nextUrl.pathname;

  // Vérifier si le chemin commence par une langue valide
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si le chemin n'a pas de locale, rediriger vers la langue par défaut
  if (!pathnameHasLocale) {
    // Créer une nouvelle URL avec la langue par défaut
    const newUrl = new URL(
      `/${defaultLocale}${pathname === "/" ? "" : pathname}`,
      request.url
    );

    // Conserver les paramètres de recherche
    newUrl.search = request.nextUrl.search;

    // Rediriger vers la nouvelle URL
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Configurer les chemins sur lesquels le middleware doit s'exécuter
export const config = {
  // Matcher pour tous les chemins sauf ceux qui commencent par /api/, /_next/, etc.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
};

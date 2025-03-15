"use client";

import { useEffect } from "react";
import { Locale } from "@/i18n/config";

export default function HtmlLangAttribute({ lang }: { lang: Locale }) {
  useEffect(() => {
    // Mettre à jour l'attribut lang de la balise html côté client uniquement
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}

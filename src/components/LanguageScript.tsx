"use client";

import Script from "next/script";
import { Locale } from "@/i18n/config";

export default function LanguageScript({ lang }: { lang: Locale }) {
  return (
    <Script id="set-lang" strategy="afterInteractive">
      {`document.documentElement.lang = "${lang}";`}
    </Script>
  );
}

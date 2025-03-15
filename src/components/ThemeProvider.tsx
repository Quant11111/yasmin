"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import theme, { darkTheme } from "@/theme";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialiser avec une valeur par défaut pour éviter les problèmes d'hydratation
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Détecter le thème préféré du système uniquement côté client
  useEffect(() => {
    setIsClient(true);
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Écouter les changements de préférence de thème
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Utiliser le thème clair par défaut pour le rendu côté serveur
  const currentTheme = isClient ? (isDarkMode ? darkTheme : theme) : theme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@/components/ThemeProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale } from "@/i18n/config";

type NavigationProps = {
  lang: Locale;
  dictionary: {
    navigation: {
      home: string;
      biography: string;
      portfolio: string;
      projects: string;
      blog: string;
      contact: string;
    };
  };
};

// Composant pour cacher la barre de navigation lors du défilement vers le bas
function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navigation({ lang, dictionary }: NavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {} = useTheme();

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${lang}`, label: dictionary.navigation.home },
    { href: `/${lang}/biography`, label: dictionary.navigation.biography },
    { href: `/${lang}/portfolio`, label: dictionary.navigation.portfolio },
    { href: `/${lang}/projects`, label: dictionary.navigation.projects },
    { href: `/${lang}/blog`, label: dictionary.navigation.blog },
    { href: `/${lang}/contact`, label: dictionary.navigation.contact },
  ];

  const isActive = (path: string) => {
    if (path === `/${lang}`) {
      return pathname === `/${lang}`;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="inherit" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* Logo */}
              <Typography
                variant="h6"
                component={Link}
                href={`/${lang}`}
                sx={{
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "text.primary",
                }}
              >
                Yasmin Avila
              </Typography>

              {/* Navigation desktop */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    color={isActive(link.href) ? "primary" : "inherit"}
                    sx={{
                      fontWeight: isActive(link.href) ? 600 : 400,
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>

              {/* Langue et bouton menu mobile */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LanguageSwitcher currentLocale={lang} />

                {/* Bouton menu mobile */}
                <IconButton
                  color="inherit"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  edge="end"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  sx={{ display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Menu mobile */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: "300px",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                selected={isActive(link.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    color: isActive(link.href) ? "primary" : "inherit",
                    fontWeight: isActive(link.href) ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Espace pour compenser la hauteur de la barre de navigation fixe */}
      <Toolbar />
    </>
  );
}

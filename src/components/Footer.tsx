"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  useTheme as useMuiTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Locale } from "@/i18n/config";

type FooterProps = {
  lang: Locale;
  dictionary: {
    footer: {
      rights: string;
      madeWith: string;
    };
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

export default function Footer({ lang, dictionary }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(2024); // Année par défaut
  const theme = useMuiTheme();

  // Mettre à jour l'année côté client uniquement
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <InstagramIcon />,
    },
    { name: "Twitter", url: "https://twitter.com", icon: <TwitterIcon /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <LinkedInIcon /> },
  ];

  const navItems = [
    { href: `/${lang}`, label: dictionary.navigation.home },
    { href: `/${lang}/biography`, label: dictionary.navigation.biography },
    { href: `/${lang}/portfolio`, label: dictionary.navigation.portfolio },
    { href: `/${lang}/projects`, label: dictionary.navigation.projects },
    { href: `/${lang}/blog`, label: dictionary.navigation.blog },
    { href: `/${lang}/contact`, label: dictionary.navigation.contact },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "grey.50",
        borderTop: 1,
        borderColor: "divider",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo et description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component={Link}
              href={`/${lang}`}
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "text.primary",
                display: "inline-block",
                mb: 2,
              }}
            >
              Yasmin Avila
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxWidth: 300 }}
            >
              Artiste multidisciplinaire chilienne basée à Paris, explorant
              l&apos;art, l&apos;écriture et la performance.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
              }}
            >
              Navigation
            </Typography>
            <List disablePadding dense>
              {navItems.map((item) => (
                <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemText
                    primary={
                      <Typography
                        component={Link}
                        href={item.href}
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textDecoration: "none",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Réseaux sociaux */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
              }}
            >
              Social
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  color="inherit"
                  size="small"
                  sx={{ color: "text.secondary" }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Divider sx={{ my: 4 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} Yasmin Avila Picero. {dictionary.footer.rights}
            .
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dictionary.footer.madeWith} 💖
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

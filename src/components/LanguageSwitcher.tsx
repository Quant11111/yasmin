"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { Button, Menu, MenuItem, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Changer la langue et rediriger vers la même page dans la nouvelle langue
  const switchLanguage = (locale: Locale) => {
    if (locale === currentLocale) return;

    // Obtenir le chemin sans le préfixe de langue actuel
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

    // Rediriger vers la même page avec la nouvelle langue
    router.push(`/${locale}${pathWithoutLocale}`);
    handleClose();
  };

  return (
    <Box>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        color="inherit"
        size="small"
      >
        {localeNames[currentLocale]}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {locales.map((locale) => (
          <MenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            selected={locale === currentLocale}
            sx={{ minWidth: "120px" }}
          >
            <Typography variant="body2">{localeNames[locale]}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

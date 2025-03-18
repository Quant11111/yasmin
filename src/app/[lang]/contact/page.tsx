import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, isValidLocale, defaultLocale } from "@/i18n/config";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

// Métadonnées de la page
export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  return {
    title: `${dictionary.contact.title} | Yasmin Avila Picero`,
    description: dictionary.contact.subtitle,
  };
}

export default async function Contact(props: {
  params: Promise<{ lang: string }>;
}) {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  return (
    <>
      {/* En-tête de la page */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {dictionary.contact.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            {dictionary.contact.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Informations de contact */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, mb: 4 }}
              >
                {dictionary.contact.info.title}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 4, color: "text.secondary" }}
              >
                {dictionary.contact.info.description}
              </Typography>

              <Divider sx={{ my: 4 }} />

              <List disablePadding>
                <ListItem disablePadding sx={{ mb: 3 }}>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.contact.info.email}
                    secondary="contact@yasmin-avila.com"
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 3 }}>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.contact.info.phone}
                    secondary="+33 6 12 34 56 78"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.contact.info.location}
                    secondary="Paris, France"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Formulaire de contact */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, mb: 4 }}
              >
                {dictionary.contact.form.title}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 4, color: "text.secondary" }}
              >
                {dictionary.contact.form.description}
              </Typography>

              <ContactForm
                dictionary={dictionary.contact.form}
                lang={validLang as Locale}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

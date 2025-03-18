import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, isValidLocale, defaultLocale } from "@/i18n/config";
import { Metadata } from "next";

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
    title: `${dictionary.projects.title} | Yasmin Avila Picero`,
    description: dictionary.projects.subtitle,
  };
}

export default async function Projects(props: {
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
            {dictionary.projects.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            {dictionary.projects.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Projet Voltap */}
        <Box id="voltap" sx={{ mb: 12, scrollMarginTop: "100px" }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <Image
                  src="/images/voltap-image.jpg"
                  alt="Voltap"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Chip
                  label={dictionary.projects.ongoing}
                  color="primary"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {dictionary.projects.voltap.title}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.125rem", color: "text.secondary", mb: 3 }}
                >
                  {dictionary.projects.voltap.description}
                </Typography>

                <List disablePadding sx={{ mb: 3 }}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <EventIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.dates}: 2022 - ${dictionary.projects.present}`}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocationOnIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.location}: Paris, France`}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <GroupsIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.collaborators}: Théâtre de la Ville, Institut Culturel du Chili`}
                    />
                  </ListItem>
                </List>

                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  href={`/${validLang}/projects/voltap`}
                  sx={{ mt: 2 }}
                >
                  {dictionary.projects.learnMore}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Projet Frontières */}
        <Box id="frontieres" sx={{ mb: 12, scrollMarginTop: "100px" }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction="row-reverse"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <Image
                  src="/images/acting-1.jpg"
                  alt="Frontières"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Chip
                  label={dictionary.projects.completed}
                  color="secondary"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {dictionary.projects.frontieres.title}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.125rem", color: "text.secondary", mb: 3 }}
                >
                  {dictionary.projects.frontieres.description}
                </Typography>

                <List disablePadding sx={{ mb: 3 }}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <EventIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.dates}: 2020 - 2021`}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocationOnIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.location}: Santiago, Chili`}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <GroupsIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.collaborators}: Universidad de Chile, Fondart`}
                    />
                  </ListItem>
                </List>

                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  href={`/${validLang}/projects/frontieres`}
                  sx={{ mt: 2 }}
                >
                  {dictionary.projects.learnMore}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Projet Mémoires */}
        <Box id="memoires" sx={{ scrollMarginTop: "100px" }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <Image
                  src="/images/other-1.jpg"
                  alt="Mémoires"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Chip
                  label={dictionary.projects.upcoming}
                  color="info"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {dictionary.projects.memoires.title}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.125rem", color: "text.secondary", mb: 3 }}
                >
                  {dictionary.projects.memoires.description}
                </Typography>

                <List disablePadding sx={{ mb: 3 }}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <EventIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.dates}: 2024`}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocationOnIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.location}: Paris, France & Santiago, Chili`}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <GroupsIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${dictionary.projects.collaborators}: Maison de l'Amérique Latine, Centre Culturel du Chili`}
                    />
                  </ListItem>
                </List>

                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  href={`/${validLang}/projects/memoires`}
                  sx={{ mt: 2 }}
                >
                  {dictionary.projects.learnMore}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Autres projets */}
        <Box sx={{ mt: 12 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 4, textAlign: "center" }}
          >
            {dictionary.projects.otherProjects}
          </Typography>
          <Divider sx={{ mb: 6 }} />

          <Grid container spacing={4}>
            {/* Projet 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ position: "relative", height: 200 }}
                >
                  <Image
                    src="/images/writing-3.jpg"
                    alt="Atelier d'écriture"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {dictionary.projects.workshops.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {dictionary.projects.workshops.description}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    href={`/${validLang}/projects/workshops`}
                    sx={{ mt: "auto" }}
                  >
                    {dictionary.projects.learnMore}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Projet 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ position: "relative", height: 200 }}
                >
                  <Image
                    src="/images/acting-2.jpg"
                    alt="Performances"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {dictionary.projects.performances.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {dictionary.projects.performances.description}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    href={`/${validLang}/projects/performances`}
                    sx={{ mt: "auto" }}
                  >
                    {dictionary.projects.learnMore}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Projet 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ position: "relative", height: 200 }}
                >
                  <Image
                    src="/images/other-2.jpg"
                    alt="Publications"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {dictionary.projects.publications.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {dictionary.projects.publications.description}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    href={`/${validLang}/projects/publications`}
                    sx={{ mt: "auto" }}
                  >
                    {dictionary.projects.learnMore}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

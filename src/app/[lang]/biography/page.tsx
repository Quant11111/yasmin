import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
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
    title: `${dictionary.biography.title} | Yasmin Avila Picero`,
    description: dictionary.biography.intro,
  };
}

export default async function Biography(props: {
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
            {dictionary.biography.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            {dictionary.biography.intro}
          </Typography>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Photo et informations personnelles */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Paper
                elevation={3}
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 400,
                    width: "100%",
                  }}
                >
                  <Image
                    src="/images/biography-portrait.jpg"
                    alt="Yasmin Avila Picero"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Box>
              </Paper>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                {dictionary.biography.personalInfo.title}
              </Typography>

              <List disablePadding>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.biography.personalInfo.nationality}
                    secondary="Chilienne"
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.biography.personalInfo.location}
                    secondary="Paris, France"
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={dictionary.biography.personalInfo.languages}
                    secondary="Espagnol, Français, Anglais"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Histoire et parcours */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, mb: 4 }}
            >
              {dictionary.biography.story.title}
            </Typography>

            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              {dictionary.biography.story.part1}
            </Typography>

            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              {dictionary.biography.story.part2}
            </Typography>

            <Box
              sx={{
                position: "relative",
                height: 300,
                width: "100%",
                my: 4,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/biography-wide.jpg"
                alt="Yasmin Avila Picero"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </Box>

            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              {dictionary.biography.story.part3}
            </Typography>

            <Divider sx={{ my: 6 }} />

            {/* Parcours académique et professionnel */}
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, mb: 4 }}
            >
              {dictionary.biography.journey.title}
            </Typography>

            <Timeline position="alternate">
              {/* Éducation */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2016 - 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {dictionary.biography.journey.education1.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {dictionary.biography.journey.education1.institution}
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Expérience professionnelle */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2020 - 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {dictionary.biography.journey.work1.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {dictionary.biography.journey.work1.company}
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Formation complémentaire */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2022 - 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {dictionary.biography.journey.education2.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {dictionary.biography.journey.education2.institution}
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Expérience actuelle */}
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2023 - {dictionary.biography.journey.present}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <WorkIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {dictionary.biography.journey.work2.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {dictionary.biography.journey.work2.company}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>

            <Divider sx={{ my: 6 }} />

            {/* Compétences et intérêts */}
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, mb: 4 }}
            >
              {dictionary.biography.skills.title}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {dictionary.biography.skills.artistic}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.writing}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.acting}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.directing}
                    />
                  </ListItem>
                </List>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {dictionary.biography.skills.other}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.research}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.teaching}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={dictionary.biography.skills.production}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

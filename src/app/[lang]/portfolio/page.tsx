import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
  Chip,
} from "@mui/material";
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
    title: `${dictionary.portfolio.title} | Yasmin Avila Picero`,
    description: dictionary.portfolio.subtitle,
  };
}

export default async function Portfolio(props: {
  params: Promise<{ lang: string }>;
}) {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  // Projets d'écriture
  const writingProjects = [
    {
      id: "writing-1",
      title: "La Mémoire des Ombres",
      year: "2022",
      category: dictionary.portfolio.categories.writing,
      description: dictionary.portfolio.writing.project1.description,
      image: "/images/writing-1.jpg",
      tags: ["Roman", "Fiction", "Littérature"],
    },
    {
      id: "writing-2",
      title: "Fragments d'Exil",
      year: "2021",
      category: dictionary.portfolio.categories.writing,
      description: dictionary.portfolio.writing.project2.description,
      image: "/images/writing-2.jpg",
      tags: ["Poésie", "Recueil", "Identité"],
    },
    {
      id: "writing-3",
      title: "Entre Deux Mondes",
      year: "2020",
      category: dictionary.portfolio.categories.writing,
      description: dictionary.portfolio.writing.project3.description,
      image: "/images/writing-3.jpg",
      tags: ["Essai", "Migration", "Culture"],
    },
  ];

  // Projets de théâtre
  const actingProjects = [
    {
      id: "acting-1",
      title: "Antigone Revisitée",
      year: "2023",
      category: dictionary.portfolio.categories.acting,
      description: dictionary.portfolio.acting.project1.description,
      image: "/images/acting-1.jpg",
      tags: ["Théâtre", "Tragédie", "Adaptation"],
    },
    {
      id: "acting-2",
      title: "Les Silences de l'Exil",
      year: "2022",
      category: dictionary.portfolio.categories.acting,
      description: dictionary.portfolio.acting.project2.description,
      image: "/images/acting-2.jpg",
      tags: ["Performance", "Création collective", "Témoignage"],
    },
    {
      id: "acting-3",
      title: "Frontières Invisibles",
      year: "2021",
      category: dictionary.portfolio.categories.acting,
      description: dictionary.portfolio.acting.project3.description,
      image: "/images/acting-3.jpg",
      tags: ["Monologue", "Festival", "Identité"],
    },
  ];

  // Autres projets
  const otherProjects = [
    {
      id: "other-1",
      title: "Voix de l'Entre-Deux",
      year: "2023",
      category: dictionary.portfolio.categories.other,
      description: dictionary.portfolio.other.project1.description,
      image: "/images/other-1.jpg",
      tags: ["Podcast", "Entretiens", "Migration"],
    },
    {
      id: "other-2",
      title: "Cartographie des Absences",
      year: "2022",
      category: dictionary.portfolio.categories.other,
      description: dictionary.portfolio.other.project2.description,
      image: "/images/other-2.jpg",
      tags: ["Installation", "Arts visuels", "Mémoire"],
    },
    {
      id: "other-3",
      title: "Atelier d'écriture transculturelle",
      year: "2021",
      category: dictionary.portfolio.categories.other,
      description: dictionary.portfolio.other.project3.description,
      image: "/images/other-3.jpg",
      tags: ["Atelier", "Pédagogie", "Écriture"],
    },
  ];

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
            {dictionary.portfolio.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            {dictionary.portfolio.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Section Écriture */}
        <Box id="writing" sx={{ mb: 10, scrollMarginTop: "100px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 4 }}
          >
            {dictionary.portfolio.categories.writing}
          </Typography>
          <Divider sx={{ mb: 6 }} />

          <Grid container spacing={4}>
            {writingProjects.map((project) => (
              <Grid item key={project.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{ position: "relative", height: 240 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </CardMedia>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ fontWeight: 600 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          {project.year}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section Théâtre */}
        <Box id="acting" sx={{ mb: 10, scrollMarginTop: "100px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 4 }}
          >
            {dictionary.portfolio.categories.acting}
          </Typography>
          <Divider sx={{ mb: 6 }} />

          <Grid container spacing={4}>
            {actingProjects.map((project) => (
              <Grid item key={project.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{ position: "relative", height: 240 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </CardMedia>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ fontWeight: 600 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          {project.year}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section Autres projets */}
        <Box id="other" sx={{ scrollMarginTop: "100px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 4 }}
          >
            {dictionary.portfolio.categories.other}
          </Typography>
          <Divider sx={{ mb: 6 }} />

          <Grid container spacing={4}>
            {otherProjects.map((project) => (
              <Grid item key={project.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{ position: "relative", height: 240 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </CardMedia>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ fontWeight: 600 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          {project.year}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            color="info"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

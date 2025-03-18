import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
    title: "Yasmin Avila Picero | Dramaturge, Réalisatrice, Chercheuse",
    description: dictionary.home.description,
  };
}

export default async function Home(props: {
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
      {/* Section héro */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Image d'arrière-plan avec un dégradé */}
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
              zIndex: 10,
            }}
          />
          <Image
            src="/hero-background.jpg"
            alt="Yasmin Avila Picero"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </Box>

        {/* Contenu */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
          <Box maxWidth="md">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
              }}
            >
              {dictionary.home.title}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 4, fontWeight: 400 }}
            >
              {dictionary.home.description}
            </Typography>
            <Button
              component={Link}
              href={`/${validLang}/biography`}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "white",
                color: "black",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              {dictionary.home.cta}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section à propos */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {dictionary.biography.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.125rem", color: "text.secondary", mb: 4 }}
              >
                {dictionary.biography.intro}
              </Typography>
              <Button
                component={Link}
                href={`/${validLang}/biography`}
                color="primary"
                endIcon={<ArrowForwardIcon />}
              >
                {dictionary.biography.journey.title}
              </Button>
            </Grid>
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
                  src="/about-image.jpg"
                  alt="Yasmin Avila Picero"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section portfolio */}
      <Box sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {dictionary.portfolio.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
              }}
            >
              {dictionary.portfolio.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Écriture */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/${validLang}/portfolio#writing`}
                >
                  <CardMedia
                    component="div"
                    sx={{ position: "relative", height: 240 }}
                  >
                    <Image
                      src="/writing-image.jpg"
                      alt={dictionary.portfolio.categories.writing}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {dictionary.portfolio.categories.writing}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        fontWeight: 500,
                      }}
                    >
                      {dictionary.blog.readMore}{" "}
                      <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Théâtre */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/${validLang}/portfolio#acting`}
                >
                  <CardMedia
                    component="div"
                    sx={{ position: "relative", height: 240 }}
                  >
                    <Image
                      src="/acting-image.jpg"
                      alt={dictionary.portfolio.categories.acting}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {dictionary.portfolio.categories.acting}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        fontWeight: 500,
                      }}
                    >
                      {dictionary.blog.readMore}{" "}
                      <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Autres projets */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/${validLang}/portfolio#other`}
                >
                  <CardMedia
                    component="div"
                    sx={{ position: "relative", height: 240 }}
                  >
                    <Image
                      src="/other-projects-image.jpg"
                      alt={dictionary.portfolio.categories.other}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {dictionary.portfolio.categories.other}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        fontWeight: 500,
                      }}
                    >
                      {dictionary.blog.readMore}{" "}
                      <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Voltap */}
      <Box sx={{ py: 10, bgcolor: "primary.light", opacity: 0.1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {dictionary.projects.voltap.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.125rem", color: "text.secondary", mb: 4 }}
              >
                {dictionary.projects.voltap.description}
              </Typography>
              <Button
                component={Link}
                href={`/${validLang}/projects`}
                variant="contained"
                color="primary"
                size="large"
              >
                {dictionary.blog.readMore}
              </Button>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
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
                  src="/voltap-image.jpg"
                  alt="Voltap"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section contact */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {dictionary.contact.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                mb: 4,
              }}
            >
              {dictionary.contact.subtitle}
            </Typography>
          </Box>

          <Box maxWidth="md" mx="auto">
            <Button
              component={Link}
              href={`/${validLang}/contact`}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                py: 2,
                bgcolor: "black",
                "&:hover": { bgcolor: "grey.900" },
              }}
            >
              {dictionary.contact.title}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

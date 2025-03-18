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
  CardActionArea,
  Chip,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
    title: `${dictionary.blog.title} | Yasmin Avila Picero`,
    description: dictionary.blog.subtitle,
  };
}

export default async function Blog(props: {
  params: Promise<{ lang: string }>;
}) {
  // Attendre params
  const params = await props.params;

  // Vérifier si la langue est valide
  const validLang = isValidLocale(params.lang) ? params.lang : defaultLocale;

  // Charger le dictionnaire pour la langue
  const dictionary = await getDictionary(validLang as Locale);

  // Articles de blog
  const blogPosts = [
    {
      id: "post-1",
      title: "L'art comme forme de résistance",
      date: "2023-10-15",
      excerpt:
        "Comment l'expression artistique peut devenir un acte politique et une forme de résistance face aux injustices sociales.",
      image: "/images/writing-1.jpg",
      category: "Réflexions",
      slug: "art-comme-resistance",
    },
    {
      id: "post-2",
      title: "Entre deux langues : écrire dans l'entre-deux",
      date: "2023-09-22",
      excerpt:
        "Réflexions sur l'expérience d'écriture entre deux langues et deux cultures, et comment cette position d'entre-deux nourrit la créativité.",
      image: "/images/writing-2.jpg",
      category: "Écriture",
      slug: "entre-deux-langues",
    },
    {
      id: "post-3",
      title: "Le corps comme territoire politique",
      date: "2023-08-10",
      excerpt:
        "Analyse de la performance artistique comme moyen d'expression politique et de revendication à travers le corps.",
      image: "/images/acting-1.jpg",
      category: "Performance",
      slug: "corps-territoire-politique",
    },
    {
      id: "post-4",
      title: "Mémoire collective et création artistique",
      date: "2023-07-05",
      excerpt:
        "Comment les artistes contribuent à la construction et à la préservation de la mémoire collective à travers leurs œuvres.",
      image: "/images/other-1.jpg",
      category: "Théorie",
      slug: "memoire-collective-creation",
    },
    {
      id: "post-5",
      title: "Frontières invisibles : l'exil intérieur",
      date: "2023-06-18",
      excerpt:
        "Exploration du concept d'exil intérieur et comment il influence la production artistique contemporaine.",
      image: "/images/acting-2.jpg",
      category: "Réflexions",
      slug: "frontieres-invisibles",
    },
    {
      id: "post-6",
      title: "L'artiste comme médiateur culturel",
      date: "2023-05-20",
      excerpt:
        "Réflexion sur le rôle de l'artiste comme pont entre différentes cultures et facilitateur de dialogue interculturel.",
      image: "/images/other-2.jpg",
      category: "Société",
      slug: "artiste-mediateur-culturel",
    },
  ];

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(validLang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

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
            {dictionary.blog.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            {dictionary.blog.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Barre latérale */}
          <Grid item xs={12} md={4} lg={3}>
            <Box sx={{ position: "sticky", top: 100 }}>
              {/* Recherche */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {dictionary.blog.search}
                </Typography>
                <TextField
                  fullWidth
                  placeholder={dictionary.blog.searchPlaceholder}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Catégories */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {dictionary.blog.categories}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip
                    label="Réflexions"
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                  <Chip
                    label="Écriture"
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                  <Chip
                    label="Performance"
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                  <Chip
                    label="Théorie"
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                  <Chip
                    label="Société"
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                </Box>
              </Box>

              {/* Articles récents */}
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {dictionary.blog.recentPosts}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {blogPosts.slice(0, 3).map((post) => (
                    <Box
                      key={post.id}
                      sx={{
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: 80,
                          height: 80,
                          borderRadius: 1,
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="80px"
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          component={Link}
                          href={`/${validLang}/blog/${post.slug}`}
                          sx={{
                            fontWeight: 600,
                            textDecoration: "none",
                            color: "text.primary",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block", mt: 0.5 }}
                        >
                          {formatDate(post.date)}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Liste des articles */}
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={4}>
              {blogPosts.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      href={`/${validLang}/blog/${post.slug}`}
                    >
                      <CardMedia
                        component="div"
                        sx={{ position: "relative", height: 200 }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            zIndex: 2,
                          }}
                        >
                          <Chip
                            label={post.category}
                            color="primary"
                            size="small"
                            sx={{ fontWeight: 500 }}
                          />
                        </Box>
                      </CardMedia>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block", mb: 1 }}
                        >
                          {formatDate(post.date)}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h2"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {post.excerpt}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{
                            display: "flex",
                            alignItems: "center",
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
              ))}
            </Grid>

            {/* Pagination */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 8,
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4 }}
              >
                {dictionary.blog.loadMore}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import { Box, Typography, Button, Container } from "@mui/material";
import { keyframes } from "@mui/system";
import ImageSlider from "./ImageSlider";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";

const slideInLeft = keyframes`
  from { opacity: 0; transform: translatex(-100px); }
  to { opacity: 1; transform: translatex(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translatex(100px); }
  to { opacity: 1; transform: translatex(0); }
`;

const HeroSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];

  return (
    <Box
      sx={{ py: 6, backgroundColor: "background.paper", overflow: "hidden" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Left: Text */}
        <Box
          sx={{
            flex: 1,
            animation: `${slideInLeft} 1s ease-out`,
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontFamily: '"Bungee", sans-serif',
              fontStyle: "bold",
            }}
          >
            {translate.heroTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: lang === "ar" ? "18px" : "16px" }}
          >
            {translate.heroDesc}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/booking"
            sx={{
              px: 4,
              py: 1,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            {translate.startOrder}
          </Button>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "text.secondary",
              fontSize: lang === "ar" ? "16px" : "14px",
            }}
          >
            {translate.CreateYourOrder}
          </Typography>
        </Box>

        {/* Right: Slider / Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            animation: `${slideInRight} 1s ease-out`,
          }}
        >
          <ImageSlider />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

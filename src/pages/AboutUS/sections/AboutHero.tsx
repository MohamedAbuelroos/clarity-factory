import { Box, Container, Typography } from "@mui/material";
import aboutHero from "/src/assets/images/Clarity.jpeg"

const AboutHero = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(125deg, #f2f6f9 0%, #afd8ff7d 100%)",
        boxShadow: "0 8px 20px rgba(41, 115, 212, 0.28)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: 6,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontFamily: "Bungee,sans-serif" }}
          >
            About Clarity
          </Typography>

          <Typography
            color="text.secondary"
            maxWidth={650}
            sx={{ lineHeight: 1.9, fontSize: 17 }}
          >
            Clarity Factory is a pioneering leader in precision manufacturing,
            dedicated to delivering innovative, high-quality solutions that
            power the future. We combine advanced technology with expert
            craftsmanship to build products that excel.
          </Typography>
        </Box>
        <Box
          component="img"
          loading="lazy"
          src={aboutHero}
          alt="About Clarity Factory"
          sx={{
            width: "100%",
            flex: "1",
            height: 400,
            objectFit: "cover",
            borderRadius: 2,
            mt: 6,
          }}
        />
      </Container>
    </Box>
  );
};

export default AboutHero;

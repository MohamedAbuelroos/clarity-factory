import { Box, Container, Grid } from "@mui/material";

const images = [
  "/src/assets/images/joinUs.jpg",
  "/src/assets/images/joinUs.jpg",
  "/src/assets/images/joinUs.jpg",
];

const AboutGallery = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={4} justifyContent="center">
        {images.map((img, i) => (
          <Grid key={i}>
            <Box
              component="img"
              loading="lazy"
              src={img}
              alt="Factory"
              sx={{
                width: "300px",
                height: 260,
                objectFit: "cover",
                borderRadius: 3,
                transition: "0.4s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutGallery;

import { Box, Container, Grid, Typography } from "@mui/material";

const AboutSummary = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid>
          <Box
            component="img"
            loading="lazy"
            src="/src/assets/images/joinUs.jpg"
            alt="Clarity Factory"
            sx={{
              width: "100%",
              borderRadius: 1,
              boxShadow: "0 30px 50px rgba(0,0,0,0.15)",
            }}
          />
        </Grid>

        <Grid
          sx={{
            textAlign: "center",
          }}
          maxWidth="lg"
        >
          <Typography variant="h2" fontWeight={600} gutterBottom>
            Who We Are
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
            Clarity is a modern factory specializing in high-quality production
            solutions. With advanced machinery and a skilled team, we transform
            ideas into durable, well-crafted products that meet real market
            needs.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSummary;

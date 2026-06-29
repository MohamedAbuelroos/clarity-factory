import { Box, Container, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/images/ConnectClarity.png";

const ConnectClaritySection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9fafb" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={img}
              loading="lazy"
              alt="Connect with Clarity"
              sx={{
                width: "100%",
                maxHeight: 420,
                objectFit: "contain",
                borderRadius: 5,
                mixBlendMode: "multiply",
              }}
            />
          </Grid>

          {/* CONTENT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ mb: 3, lineHeight: 1.2, fontSize: { xs: 36, md: 50 } }}
            >
              Connect Clarity now, Get best offers
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 4,
                lineHeight: 1.8,
                maxWidth: 500,
              }}
            >
              We believe great results start with clear communication. Our team
              works closely with you to understand your needs, customize every
              detail, and deliver products that reflect your brand with
              precision and consistency.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/Contact"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              Contact Sales
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConnectClaritySection;

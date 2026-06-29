import { Box, Container, Grid, Typography, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WorkTogetherSection = () => {
  return (
    <Box
      sx={{ py: { xs: 8, md: 12 }, boxShadow: "0 30px 50px rgba(0,0,0,0.15)" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ mb: 3, lineHeight: 1.2, fontSize: { xs: 36, md: 50 } }}
            >
              Work together,
              <br />
              from idea to final product
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3,
                maxWidth: 480,
                lineHeight: 1.8,
              }}
            >
              At Clarity, we work closely with our clients to turn ideas into
              durable, high-quality canvas bags, covers, and custom solutions.
              From material selection to final production, every step is handled
              with precision and care.
            </Typography>

            <Link
              href="/gallery"
              underline="none"
              sx={{
                fontWeight: 600,
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover .MuiSvgIcon-root": {
                  transform: "translateX(8px)",
                  transition: "transform 0.3s ease",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  // {I DON'T LIKE THIS EFFECT WILL CHANGE LATER}
                  background:
                    "linear-gradient(125deg, #57a6f0  0%, #f2f6f9 100%)",
                  width: 0,
                  height: "2px",
                  left: 0,
                  top: 25,
                  transition: "0.45s ease",
                  zIndex: 0,
                  borderRadius: 1,
                },

                "&:hover::before": {
                  width: 0.2,
                },
              }}
            >
              View our work
              <ArrowForwardIcon fontSize="small" />
            </Link>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              loading="lazy"
              src="/src/assets/images/WorkTGimg.png"
              alt="Clarity factory work"
              sx={{
                width: "90%",
                maxHeight: 420,
                objectFit: "cover",
                borderRadius: 5,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkTogetherSection;

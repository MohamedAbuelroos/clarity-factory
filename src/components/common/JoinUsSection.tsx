import { Box, Container, Typography, Button } from "@mui/material";
import image from "/src/assets/images/joinUs.jpg";

const JoinUsSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "100vh" },
        minHeight: 500,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        poster={image}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          display: { xs: "none", md: "block" }, // hide on mobile
        }}
      >
        <source src="/src/assets/videos/Video.mp4" type="video/mp4" />
      </Box>

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(12, 6, 97, 0.49) 0%, rgba(2, 34, 110, 0.6) 100%)",
          zIndex: -1,
        }}
      />

      {/* CONTENT */}
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{ mb: 3, lineHeight: 1.2 }}
        >
          Join 1K+ Companies Who Trust Clarity
        </Typography>

        <Typography
          sx={{
            mb: 5,
            fontSize: 18,
            opacity: 0.95,
            lineHeight: 1.7,
          }}
        >
          From custom canvas bags to premium suit covers, we deliver quality,
          precision, and reliability — every single order.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="/booking"
          sx={{
            px: 5,
            py: 1.6,
            borderRadius: 3,
            fontWeight: 600,
            fontSize: 16,
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
          }}
        >
          Start Your Order
        </Button>
      </Container>
    </Box>
  );
};

export default JoinUsSection;

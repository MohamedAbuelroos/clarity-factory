import { Box, Container, Grid, Typography, Divider, Link } from "@mui/material";
import SocialMedia from "../common/SocialMedia";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        pt: 10,
        pb: 4,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent={{ md: "space-between" }}>
          {/* Brand */}
          <Grid>
            <Typography
              variant="h2"
              sx={{ fontFamily: '"Bungee", sans-serif', color: "primary.main" }}
            >
              Clarity
            </Typography>
            <Typography mt={2} lineHeight={1.8}>
              We help brands grow with clarity, strategy, and high-quality
              execution.
            </Typography>
          </Grid>

          {/* Links */}
          <Grid>
            <Typography fontWeight={600} mb={2}>
              Quick Links
            </Typography>
            {["Home", "Gallery", "Contact"].map((item) => (
              <Typography
                key={item}
                component={Link}
                href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`}
                underline="none"
                sx={{
                  color: "text.primary",
                  display: "block",
                  cursor: "pointer",
                  mb: 1,
                  transition: "all 0.3s ease",
                  "&:hover": { color: "primary.main", pl: 0.5 },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Services */}
          <Grid>
            <Typography fontWeight={600} mb={2}>
              Company
            </Typography>
            {["About Us", "Careers"].map((item) => (
              <Typography
                key={item}
                component={Link}
                href={`${item === "About Us" ? "/about" : "/careers"}`}
                underline="none"
                sx={{
                  color: "text.primary",
                  display: "block",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  mb: 1,
                  "&:hover": {
                    color: "primary.main",
                    pl: 0.5,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid>
            <Typography fontWeight={600} mb={2}>
              Contact
            </Typography>
            <Typography mb={1}>123 Industrial City Damanhour,EG</Typography>
            <Typography mb={1}>info@clarity.com</Typography>
            <Typography mb={2}>+20 123 456 7892</Typography>

            <SocialMedia />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#1e293b" }} />

        <Typography textAlign="center" fontSize={14}>
          © {new Date().getFullYear()} Clarity. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

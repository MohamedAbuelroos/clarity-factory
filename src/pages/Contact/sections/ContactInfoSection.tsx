import { Box, Container, Grid, Typography } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import SocialMedia from "../../../components/common/SocialMedia";

const ContactInfoSection = () => {
  return (
    <Box sx={{ background: "#f9fafb", py: 10 }}>
      <Container maxWidth="md">
        <Grid
          container
          // spacing={6}
          alignItems="center"
          justifyContent="space-around"
        >
          {/* LEFT SIDE - INFO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" fontWeight={600} mb={4}>
              Our Location & Details
            </Typography>

            <Box display="flex" alignItems="center" mb={3}>
              <LocationOn sx={{ mr: 2 }} />
              <Typography>123 Industrial Area, Cairo, Egypt</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <Phone sx={{ mr: 2 }} />
              <Typography>+20 123 456 789</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={4}>
              <Email sx={{ mr: 2 }} />
              <Typography>info@clarity.com</Typography>
            </Box>

            <SocialMedia />
          </Grid>

          {/* RIGHT SIDE - MAP */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                // width: 400,
                borderRadius: 1,
                overflow: "hidden",
                boxShadow: "0 25px 40px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3417.884420002039!2d30.465830793947298!3d31.057316989579032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAzJzI2LjMiTiAzMMKwMjcnNTEuMSJF!5e0!3m2!1sar!2seg!4v1771147299101!5m2!1sar!2seg"
                width="600"
                height="450"
                loading="lazy"
                title="location"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInfoSection;

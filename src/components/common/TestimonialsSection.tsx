import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Retail Solutions Co.",
    quote:
      "Clarity delivered exactly what we needed. The quality of the materials and the attention to detail exceeded our expectations.",
  },
  {
    name: "Sarah Mohamed",
    company: "Fashion Brand Manager",
    quote:
      "From the first conversation to final delivery, everything was smooth and professional. Highly recommended.",
  },
  {
    name: "Omar Adel",
    company: "Corporate Procurement Lead",
    quote:
      "Reliable production, fast turnaround, and consistent quality. Clarity has become our long-term manufacturing partner.",
  },
  {
    name: "Mohamed Reda",
    company: "Corporate Procurement Lead",
    quote:
      "Reliable production, fast turnaround, and consistent quality. Clarity has become our long-term manufacturing partner.",
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="xl">
        {/* TITLE */}
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 6 }}
        >
          What Our Clients Say
        </Typography>

        {/* TESTIMONIALS */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((item, index) => (
            <Grid key={index}>
              <Box
                sx={{
                  height: "100%",
                  width: 340,
                  p: 3,
                  borderRadius: 1,
                  backgroundColor: "background.paper",
                  // boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  border: "1px solid #ffffff",
                  boxShadow: "2px 2px 4px #00000012",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "italic",
                    lineHeight: 1.8,
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderTop: "1px solid #eee",
                    pt: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      fontWeight: 600,
                    }}
                  >
                    {item.name[0]}
                  </Avatar>

                  <Box>
                    <Typography fontWeight={600}>{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.company}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;

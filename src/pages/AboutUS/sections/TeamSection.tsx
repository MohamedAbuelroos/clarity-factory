import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const team = [
  {
    name: "Yasser Zekry",
    role: "CEO & Founder",
    desc: "Yasser is the visionary behind Clarity, leading the company with a passion for innovation and excellence in the cleaning industry.",
  },
  {
    name: "Mohamed Hassan",
    role: "Production Supervisor",
    desc: "Mohamed oversees the production process, ensuring that all cleaning products are manufactured to the highest standards of quality and efficiency.",
  },
  {
    name: "Mostafa Rabea",
    role: "Factory Manager",
    desc: "Mostafa manages the day-to-day operations of the factory, coordinating teams and resources to maintain smooth production and meet customer demands.",
  },
  {
    name: "Sara Ibrahim",
    role: "Factory Manager",
    desc: "Sara manages the day-to-day operations of the factory, coordinating teams and resources to maintain smooth production and meet customer demands.",
  },
];

const TeamSection = () => {
  return (
    <Box sx={{ background: "#f9fafb", py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={600} textAlign="center" mb={6}>
          Meet Our Expert Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {team.map((member, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  background: "background.default",

                  height: "100%",
                  textAlign: "center",
                  borderRadius: 0.5,
                  transition: "0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ py: 5 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "text.secondary",
                    }}
                  />

                  <Typography fontWeight={700} mb={1}>
                    {member.name}
                  </Typography>

                  <Typography color="primary.main" mb={2}>
                    {member.role}
                  </Typography>
                  <Typography color="text.secondary">{member.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;

import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../../hooks/useCountUp";

const stats = [
  { end: 25, suffix: "%+", label: "Sales Growth" },
  { end: 1000, suffix: "+", label: "Clients Served" },
  { end: 5000, suffix: "+", label: "Orders Delivered" },
  { end: 15, suffix: "+", label: "Years of Experience" },
];

interface StatCardProps {
  stat: { end: number; suffix: string; label: string };
  index: number;
  visible: boolean;
}

const StatCard = ({ stat, index, visible }: StatCardProps) => {
  const value = useCountUp({
    start: 0,
    end: stat.end,
    duration: 1200,
    delay: index * 800,
    startCounting: visible,
  });

  return (
    <Grid>
      <Box
        sx={{
          width: "200px",
          px: 2,
          py: 3,
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          transition: "0.35s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0px 8px 5px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ color: "primary.main", mb: 1 }}
        >
          {value}
          {stat.suffix}
        </Typography>

        <Typography color="text.secondary" fontWeight={500}>
          {stat.label}
        </Typography>
      </Box>
    </Grid>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        // background:
        //   "linear-gradient(135deg, #f4f8fb 0%, #eef3f8 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Why companies large and small trust Clarity
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} visible={visible} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;

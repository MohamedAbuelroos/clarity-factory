"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupsIcon from "@mui/icons-material/Groups";

const AboutClarity = () => {
  const lang = useLanguage();
  const translate = translations[lang];

  const cards = [
    {
      title: translate.bestMaterial,
      desc: translate.bestMaterialDesc,
      icon: <WorkspacePremiumIcon fontSize="large" />,
      hoverEffect: "primary.main",
    },
    {
      title: translate.fastestExecution,
      desc: translate.fastestExecutionDesc,
      featured: true,
      icon: <BoltIcon fontSize="large" />,
      hoverEffect: "primary.main",
    },
    {
      title: translate.bestTeam,
      desc: translate.bestTeamDesc,
      icon: <GroupsIcon fontSize="large" />,
      hoverEffect: "primary.main",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            mb: 8,
            position: "relative",
          }}
        >
          <Typography variant="h2" sx={{ mr: 2, fontWeight: 800 }}>
            {translate.aboutTitle}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#FFD84D",
              px: 1,
              py: 0.1,
              borderRadius: 1,
              position: "absolute",
              transform: lang === "ar" ? "rotate(0deg)" : "rotate(15deg)",
              top:
                lang === "ar"
                  ? { xs: "-35px", md: "-30px" }
                  : { xs: "-20px", md: "-15px" },
              left: "55%",
            }}
          >
            <Typography
              variant="caption"
              fontWeight={600}
              sx={{ color: "#000" }}
            >
              {translate.ideaStartsHere}
            </Typography>
          </Box>
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            alignItems: "flex-end",
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              sx={{
                minHeight: 340,
                position: "relative",
                overflow: "hidden",
                transform: {
                  sm: "none",
                  md: card.featured ? "translateY(-36px)" : "none",
                },
                borderRadius: 4,
                textAlign: "center",
                transition: "0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor: "#fff",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  // {I DON'T LIKE THIS EFFECT WILL CHANGE LATER}
                  background:
                    "linear-gradient(125deg, #f2f6f9 0%, #afd8ff 100%)",
                  opacity: 0,
                  transition: "0.45s ease",
                  zIndex: 0,
                },

                "&:hover::before": {
                  opacity: 1,
                },

                "&:hover": {
                  transform: {
                    sm: "none",
                    md: card.featured
                      ? "translateY(-10px) scale(1.05)"
                      : "translateY(-20px) scale(1.03)",
                  },
                  boxShadow: "0 20px 10px rgba(0,0,0,0.25)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 5,
                  position: "relative",
                  zIndex: 1,

                  "& .card-icon": {
                    color: "text.main",
                    transition: "0.4s ease",
                  },

                  "& .card-title": {
                    transition: "0.4s ease",
                  },

                  "& .card-desc": {
                    color: "text.secondary",
                    transition: "0.4s ease",
                  },

                  ".MuiCard-root:hover & .card-icon": {
                    color: card.hoverEffect,
                  },

                  ".MuiCard-root:hover & .card-title": {
                    color: "primary.main",
                  },

                  ".MuiCard-root:hover & .card-desc": {
                    color: "#0b2b4a",
                  },
                }}
              >
                <Box
                  className="card-icon"
                  sx={{ mb: 2, display: "flex", justifyContent: "center" }}
                >
                  {card.icon}
                </Box>

                <Typography
                  className="card-title"
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                >
                  {card.title}
                </Typography>

                <Typography className="card-desc" sx={{ lineHeight: 1.8 }}>
                  {card.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* BUTTON */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="/booking"
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 999,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            {translate.startOrder}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutClarity;

import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const slide = keyframes`
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Preloader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        animation: `${fadeOut} .9s ease 2s forwards`,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        letterSpacing={3}
        sx={{ color: "#fff", mb: 4 }}
      >
        CLARITY FACTORY
      </Typography>

      {/* Line Container */}
      <Box
        sx={{
          width: 220,
          height: 3,
          background: "rgba(255,255,255,0.2)",
          overflow: "hidden",
          borderRadius: 5,
          position: "relative",
        }}
      >
        {/* Animated Line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(90deg, #1976d2 0%, #42a5f5 40%, #ffffff 50%, #42a5f5 60%, #1976d2 100%)",
            animation: `${slide} 1.6s ease-in-out infinite`,
          }}
        />
      </Box>
    </Box>
  );
};

export default Preloader;

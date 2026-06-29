import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const WhyOrderWithUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        borderRadius: 1,
        p: 4,
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        height: "auto",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <InfoOutlinedIcon sx={{ color: "#0d47a1", mr: 1 }} />
        <Typography variant="h6" fontWeight={700} color="#0d47a1">
          Why Order With Us?
        </Typography>
      </Box>

      {/* Points */}
      <Box
        component="ul"
        sx={{
          pl: 2,
          m: 0,
          "& li": {
            mb: 2,
            color: "#0d47a1",
            fontWeight: 500,
          },
        }}
      >
        <li>Global shipping within 10–21 business days.</li>
        <li>HD digital print or embroidery available.</li>
        <li>Free samples for bulk orders over 2,000 units.</li>
        <li>Dedicated sales support team.</li>
        <li>Strict quality control & premium materials.</li>
      </Box>
    </Box>
  );
};

export default WhyOrderWithUs;

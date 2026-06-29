import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const icons = [
  { name: "Facebook", icon: Facebook, url: "", color: "blue" },
  { name: "Instagram", icon: Instagram, url: "", color: "purple" },
  { name: "LinkedIn", icon: LinkedIn, url: "", color: "primary.main" },
  { name: "WhatsApp", icon: WhatsApp, url: "", color: "secondary.main" },
];
const SocialMedia = () => {
  return (
    <Box>
      {icons.map((Icon, index) => (
        <IconButton
          key={index}
          href={Icon.url}
          sx={{
            color: "#cbd5e1",
            transition: "all 0.3s ease",
            "&:hover": { color: Icon.color, pt: 0.5 },
          }}
        >
          <Icon.icon />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMedia;

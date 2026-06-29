import { Box, Button, Typography } from "@mui/material";

interface Props {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
}

const GalleryHeader = ({ categories, active, onChange }: Props) => {
  return (
    <Box textAlign="center" mb={6}>
      <Typography variant="h2" mb={4}>
        Our Gallery
      </Typography>

      <Box display="flex" justifyContent={{xs:"left", md:"center"}} flexWrap="wrap" gap={2}>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? "contained" : "outlined"}
            onClick={() => onChange(cat)}
            sx={{
              borderRadius: "30px",
              px: 3,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default GalleryHeader;

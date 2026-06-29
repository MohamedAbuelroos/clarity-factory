import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Dialog,
  Button,
} from "@mui/material";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

const GalleryItems = ({ products }: { products: Product[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                component="img"
                loading="lazy"
                src={product.image}
                alt={product.name}
                onClick={() => setSelectedProduct(product)}
                sx={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />

              <CardContent>
                <Chip
                  label={product.category}
                  size="small"
                  sx={{
                    mb: 2,
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    fontSize: 12,
                  }}
                />

                <Typography fontWeight={600}>{product.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* POPUP */}
      <Dialog
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        maxWidth="sm"
        fullWidth
      >
        {selectedProduct && (
          <Box sx={{ p: 4 }}>
            <Box
              component="img"
              loading="lazy"
              src={selectedProduct.image}
              alt={selectedProduct.name}
              sx={{
                width: "100%",
                maxHeight: "60vh",
                objectFit: "contain",
                mb: 3,
              }}
            />

            <Typography variant="h4" fontWeight={600} mb={2} textAlign="center">
              {selectedProduct.name}
            </Typography>

            <Button
              variant="contained"
              href="/booking"
              size="large"
              fullWidth
              sx={{ borderRadius: 3, py: 1.5 }}
            >
              Start Your Custom Order
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setSelectedProduct(null)}
              fullWidth
              sx={{
                borderRadius: 3,
                py: 1.5,
                mt: 2,
                backgroundColor: "#e0e0e0",
                color: "#333",
              }}
            >
              Close
            </Button>
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default GalleryItems;

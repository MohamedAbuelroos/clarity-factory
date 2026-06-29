import { useState, useMemo } from "react";
import { Box, Container } from "@mui/material";
import GalleryHeader from "./sections/GalleryHeader";
import GalleryItems from "./sections/GalleryItems";
import SEO from "../../components/common/SEO";

const categories = ["All", "Canvas Bags", "Suit Cover", "Other"];

const products = [
  {
    id: 1,
    name: "Premium Canvas Bag",
    category: "Canvas Bags",
    image: "/src/assets/images/Clarity.jpeg",
  },
  {
    id: 2,
    name: "Luxury Suit Cover",
    category: "Suit Cover",
    image: "/src/assets/images/TieHous3.jpg",
  },
  {
    id: 3,
    name: "Eco Bag Model X",
    category: "Canvas Bags",
    image: "/src/assets/images/slide2.png",
  },
  {
    id: 4,
    name: "Custom Packaging",
    category: "Canvas Bags",
    image: "/src/assets/images/Heels.jpg",
  },
  {
    id: 5,
    name: "Custom Packaging",
    category: "Suit Cover",
    image: "/src/assets/images/TieHous.jpg",
  },
  {
    id: 6,
    name: "Custom Packaging",
    category: "Other",
    image: "/src/assets/images/TieHous.jpg",
  },
  {
    id: 7,
    name: "Custom Packaging",
    category: "Other",
    image: "/src/assets/images/TieHous.jpg",
  },
  {
    id: 8,
    name: "Custom Packaging",
    category: "Other",
    image: "/src/assets/images/TieHous.jpg",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Box sx={{ py: 10 }}>
      <SEO
        title="Premium Canvas Bags & Suit Covers Manufacturer"
        description="Clarity Factory is a professional manufacturer of custom canvas bags and suit covers with global shipping."
        keywords="canvas bags factory, suit cover manufacturer, bulk bags production, gallery"
      />
      <Container maxWidth="lg">
        <GalleryHeader
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <GalleryItems products={filteredProducts} />
      </Container>
    </Box>
  );
};

export default Gallery;

"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCreative,
  Parallax,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const images = [
  {
    image: "/src/assets/images/TieHous.jpg",
    text: "Smart Storage, Elegant Design",
  },
  {
    image: "/src/assets/images/slide2.png",
    text: "Durable Canvas, Built to Last",
  },
  {
    image: "/src/assets/images/heels.jpg",
    text: "Strong Handles, Heavy-Duty Performance",
  },
  {
    image: "/src/assets/images/slide3.png",
    text: "Protect Your Suits with Clarity Covers",
  },
  {
    image: "/src/assets/images/TieHous3.jpg",
    text: "Clarity Quality — Trusted by Professionals",
  },
];

const ImageSlider = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Navigation, EffectCreative, Parallax, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        pagination={{ type: "bullets" }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
            rotate: [0, 0, -25],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
            rotate: [0, 0, 25],
          },
        }}
        parallax
        style={{ width: "100%" }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.text}>
            <Box
              component="img"
              loading="lazy"
              src={img.image}
              alt="Clarity product"
              sx={{
                width: "100%",
                height: 420,
                objectFit: "cover",
                borderRadius: 1.5,
                display: "block",
              }}
              data-swiper-parallax="-200"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 70,
                left: -12,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: theme.palette.primary.contrastText,
                padding: "8px 16px",
                borderRadius: 0.5,
                maxWidth: "300px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              data-swiper-parallax="-100"
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
              >
                {img.text}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <Box
          className="swiper-button-prev"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            zIndex: 10,
            width: 30,
            height: 30,
            padding: "7px",
            borderRadius: "50%",
            backgroundColor: "#8DC3FA",
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            opacity: 0.6,
            "&:hover": {
              opacity: 1,
              transform: "scale(1.15)",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
        ></Box>
        <Box
          className="swiper-button-next"
          sx={{
            position: "absolute",
            padding: "7px",
            top: "50%",
            right: 10,
            zIndex: 10,
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "#8DC3FA",
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            opacity: 0.6,
            "&:hover": {
              opacity: 1,
              transform: "scale(1.15)",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
        ></Box>
      </Swiper>
    </Box>
  );
};

export default ImageSlider;

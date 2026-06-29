"use client";

import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";

const logos = [
  {
    logo: "https://tie-house.com/wp-content/uploads/2023/09/Tie-House-Logo-gold-pdf.png",
    alt: "Tie House",
  },
  {
    logo: "https://osmanfashion.com/wp-content/uploads/2025/07/O.S-Man-Logo.png",
    alt: "Osman fashion",
  },
  {
    logo: "https://khaledshoes.com/wp-content/uploads/2022/11/55.png",
    alt: "Khaled Shoes",
  },
  {
    logo: "https://th.bing.com/th/id/OIP.cT-jrAeqFKLQ3L-X1E8Q0AHaKd?w=108&h=108&c=1&bgcl=97f7e6&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3",
    alt: "mazaya beauty",
  },
  {
    logo: "https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg",
    alt: "Volvo Cars",
  },
  {
    logo: "https://nourdak-travel.com/wp-content/uploads/2024/10/%D9%84%D9%88%D8%AC%D9%88-removebg-preview.png",
    alt: "Nourdak Travel",
  },
  {
    logo: "https://sotra.co/cdn/shop/files/sotra-logo-zwart_360x.svg?v=1711125456",
    alt: "Sotra",
  },
];

const TrustedBy = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  return (
    <Box sx={{ py: 3, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 4, color: "text.secondary" }}
        >
          {translate.trustedBy}
        </Typography>

        <Box sx={{ overflow: "hidden" }}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            slidesPerView={4}
            spaceBetween={40}
            breakpoints={{
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={logo.logo}
                  alt={logo.alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: 70,
                    objectFit: "contain",
                    transition: "0.3s",
                    cursor: "Grab",
                    opacity: 0.7,
                    // filter: "grayscale(100%)",
                    "&:hover": {
                      opacity: 1,
                      // filter: "grayscale(0%)",
                    },
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedBy;

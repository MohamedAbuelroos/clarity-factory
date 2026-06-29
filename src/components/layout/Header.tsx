import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import LanguageSwitcher from "../common/LanguageSwitcher";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const lang = useLanguage();
  const translate = translations[lang];

  const navLinks = [
    { label: translate.Home, path: "/" },
    { label: translate.About, path: "/about" },
    { label: translate.Gallery, path: "/gallery" },
    { label: translate.Booking, path: "/booking" },
    { label: translate.Contact, path: "/contact" },
  ];

  return (
    <AppBar position="sticky" elevation={1} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 72 }}>
          <Box
            sx={{ height: 70, mixBlendMode: "multiply" }}
            component={"img"}
            loading="lazy"
            src="/src/assets/images/clarityLogo.jpg"
            alt="Clarity"
          ></Box>
          {/* Logo */}
          <Typography
            variant="h2"
            href="/"
            component="a"
            sx={{
              color: "primary.main",
              flexGrow: 1,
              fontFamily: '"Bungee", sans-serif',
              fontStyle: "normal",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Clarity
          </Typography>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {navLinks.map((link) => (
                <NavItem key={link.label} to={link.path}>
                  {link.label}
                </NavItem>
              ))}

              <LanguageSwitcher />

              <Button
                variant="contained"
                color="primary"
                href="/booking"
                name="startOrder"
                sx={{
                  px: 3,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                  },
                }}
              >
                {translate.startOrder}
              </Button>
            </Box>
          )}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 280,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Close */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Links */}
          {navLinks.map((link) => (
            <Button
              key={link.label}
              component={NavLink}
              to={link.path}
              onClick={() => setOpen(false)}
              sx={{
                justifyContent: "flex-start",
                fontWeight: 500,
                color: "text.primary",
                "&.active": {
                  color: "primary.main",
                  fontWeight: 600,
                },
              }}
            >
              {link.label}
            </Button>
          ))}

          {/* Language */}
          <LanguageSwitcher />

          {/* CTA */}
          <Button
            variant="contained"
            color="primary"
            href="/booking"
            name="startOrder"
            sx={{
              mt: 1,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Start Order
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;

// NAV ITEM WITH SMART HOVER
const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      component={NavLink}
      to={to}
      sx={{
        position: "relative",
        color: "text.primary",
        fontWeight: 500,
        minWidth: "auto",
        px: 1,
        fontFamily: "unset",

        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "0%",
          height: "2px",
          backgroundColor: "primary.main",
          transition: "width 0.3s ease",
        },

        "&:hover::after": {
          width: "100%",
        },

        "&:hover": {
          backgroundColor: "transparent",
          color: "primary.main",
        },

        "&.active": {
          color: "primary.main",
          fontWeight: 600,
          "&::after": {
            width: "100%",
          },
        },
      }}
    >
      {children}
    </Button>
  );
};

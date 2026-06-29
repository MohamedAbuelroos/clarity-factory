import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1F8CF9;",
      dark: "#0D47A1",
    },
    secondary: {
      main: "#1DC973",
    },
    success: {
      main: "#2E7D32",
    },

    background: {
      default: "#FFFFFF",
      paper: "#F7F9FB",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#878686",
    },
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "28px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "22px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;

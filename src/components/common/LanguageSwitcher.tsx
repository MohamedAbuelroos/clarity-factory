import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState<"en" | "ar">(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "ar" | null;
    return savedLang ?? "en";
  });


    const changeLang = (newLang: "en" | "ar") => {
      localStorage.setItem("lang", newLang);
      window.dispatchEvent(new Event("languageChange"));
      setLang(newLang);
      // Optional: trigger i18n language change here
      // i18n.changeLanguage(selectedLang)
    };


  return (
    <ButtonGroup variant="outlined" size="small">
      <Button
        onClick={() => changeLang("en")}
        sx={{
          backgroundColor: lang === "en" ? "primary.main" : "transparent",
          color: lang === "en" ? "#fff" : "text.primary",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "#fff",
          },
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => changeLang("ar")}
        sx={{
          backgroundColor: lang === "ar" ? "primary.main" : "transparent",
          color: lang === "ar" ? "#fff" : "text.primary",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "#fff",
          },
        }}
      >
        AR
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;

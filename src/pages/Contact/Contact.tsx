import { Box } from "@mui/material";
import ContactFormSection from "./sections/ContactFormSection";
import ContactInfoSection from "./sections/ContactInfoSection";
import SEO from "../../components/common/SEO";

const Contact = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <SEO
        title="Contact Clarity"
        description="Get in touch with Clarity Factory for custom canvas bags and suit covers. We're here to help with your orders."
        keywords="canvas bags factory, suit cover manufacturer, bulk bags production, contact us"
      />
      <ContactFormSection />
      <ContactInfoSection />
    </Box>
  );
};

export default Contact;

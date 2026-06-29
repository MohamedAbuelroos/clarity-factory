import AboutHero from "./sections/AboutHero";
import AboutSummary from "./sections/AboutSummary";
import AboutGallery from "./sections/AboutGallery";
import TeamSection from "./sections/TeamSection";
import SEO from "../../components/common/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Clarity"
        description="Clarity Factory is a professional manufacturer of custom canvas bags and suit covers with global shipping."
        keywords="canvas bags factory, suit cover manufacturer, bulk bags production"
      />
      <AboutHero />
      <AboutSummary />
      <AboutGallery />
      <TeamSection />
    </>
  );
};

export default AboutUs;

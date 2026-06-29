import { Box } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import TrustedBy from "../components/common/TrustedBy";
import AboutClarity from "../components/common/AboutClarity";
import WorkTogetherSection from "../components/common/WorkTogetherSection";
import ConnectClaritySection from "../components/common/ConnectClarity";
import StatsSection from "../components/common/StatsSection";
import TestimonialsSection from "../components/common/TestimonialsSection";
import JoinUsSection from "../components/common/JoinUsSection";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <Box>
      <SEO
        title="Clarity Factory"
        description="Clarity Factory is a professional manufacturer of custom canvas bags and suit covers with global shipping."
        keywords="شنط قماش ,كفرات بدله ,canvas bags factory, suit cover manufacturer, bulk bags production"
      />
      <HeroSection />
      <TrustedBy />
      <AboutClarity />
      <WorkTogetherSection />
      <ConnectClaritySection />
      <StatsSection />
      <TestimonialsSection />
      <JoinUsSection />
    </Box>
  );
};

export default Home;

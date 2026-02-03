// src/features/landing/LandingPage.tsx

// Import all the sections that belong to this feature
import HeroSection from "./components/HeroSection";
import CampaignsSection from "./components/CampaignsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CategoriesSection from "./components/CategoriesSection";
import TrustSection from "./components/TrustSection";

// This component composes the layout of the feature
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <CampaignsSection />
      <HowItWorksSection />
      <CategoriesSection />
      <TrustSection />
    </>
  );
};

export default LandingPage;
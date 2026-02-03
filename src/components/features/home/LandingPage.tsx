import HeroSection from "./HeroSection";
import CampaignsSection from "./CampaignSection";
import HowItWorksSection from "../../../features/landing/components/HowItWorksSection";
import CategoriesSection from "./Categories";
import TrustSection from "../../../features/landing/components/TrustSection";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <CampaignsSection />
      <HowItWorksSection />
      <CategoriesSection />
      <TrustSection />
    </>
  );
}

export default LandingPage;

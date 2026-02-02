import HeroSecion from "./HeroSection";
import CampaignsSection from "./CampaignSection";
import HowItWorksSection from "./HowItWorksSection";

function LandingPage() {
  return (
    <div className="space-y-7 px-30">
      <HeroSecion />
      <CampaignsSection />
      <HowItWorksSection />
    </div>
  );
}

export default LandingPage;

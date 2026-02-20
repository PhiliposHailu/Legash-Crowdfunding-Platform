import HowItWorksHeroSection from "@/components/howItWorks/HeroSection";
import FundraiserFlow from "@/components/howItWorks/FundraiserFlow";

import DonorFlow from "@/components/howItWorks/DonorFlow";
import HowItWorksCtaSection from "@/components/howItWorks/CtaSection";

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <HowItWorksHeroSection />

        <FundraiserFlow />

        <DonorFlow />

        <HowItWorksCtaSection />
      </div>
    </div>
  );
}

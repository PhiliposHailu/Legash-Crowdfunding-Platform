import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { ChevronRight } from "lucide-react";

import CampaignCard from "@/features/campaigns/components/CampaignCard";
import { getCampaigns } from "@/features/campaigns/api/get-campaigns";

const CampaignsSection = async () => {
  const campaigns = await getCampaigns();

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="flex flex-col items-center mb-12 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Recently Successful
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover the latest fundraisers that are making a difference.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-5">
            {campaigns.map((campaign) => (
              <CarouselItem key={campaign.id} className="md:basis-1/2 lg:basis-1/3 pl-5">
                <CampaignCard data={campaign} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="w-full flex justify-end mt-8">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-colors gap-1"
            >
              View all campaigns <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 h-12 w-12 border-muted hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm" />
            <CarouselNext className="-right-12 h-12 w-12 border-muted hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default CampaignsSection;
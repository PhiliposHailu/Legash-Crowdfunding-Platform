import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CampaignCard from "../../shared/CampaignCard";
import Container from "../../shared/Container";
import { ChevronRight } from "lucide-react";

const CampaignsSection = () => {
  const data = Array.from({ length: 6 });

  const campaignItems = data.map((_, i) => (
    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 pl-5">
      <CampaignCard />
    </CarouselItem>
  ));

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="flex flex-col items-center mb-10 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Recently Fundraises
          </h2>
        </div>

        <Carousel
        //   opts={{
        //     align: "start",
        //     loop: false,
        //   }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-5">{campaignItems}</CarouselContent>

          <div className="w-full flex justify-end">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              All categories <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Nav Btns */}
          <div className="hidden md:block">
            <CarouselPrevious className="-left-9 h-12 w-12 shadow-md border-muted hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="-right-9 h-12 w-12 shadow-md border-muted hover:bg-primary hover:text-white transition-all" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default CampaignsSection;

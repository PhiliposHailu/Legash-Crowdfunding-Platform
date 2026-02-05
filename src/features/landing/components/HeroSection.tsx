import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import HeroCategoryCard from "./HeroCategoryCard";
import { HERO_POSITIONS, HERO_CARDS } from "../data";

function HeroSection() {
  return (
    <section className="relative w-full bg-primary-light overflow-hidden">
      <Container className="relative min-h-[550px] flex items-center justify-center py-12">
        {HERO_CARDS.map((card, i) => (
          <div
            key={card.id}
            className={cn(
              "hidden lg:block absolute z-0 transition-transform duration-500 hover:scale-105",
              HERO_POSITIONS[i],
            )}
          >
            <HeroCategoryCard category={card.category} image={card.image} />
          </div>
        ))}

        <div
          className={cn(
            "relative z-10 flex flex-col items-center p-12 md:p-16 bg-white shadow-2xl border border-white/40 max-w-xl text-center gap-6",
            "rounded-[100%_100%_50%_50%_/_100%_100%_100%_100%] animate-liquid",
          )}
        >
          <div className="px-3 py-1 bg-secondary-light rounded-full border border-secondary/20">
            <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">
              Verified Fundraising
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              <span className="block">Stronger</span>
              <span className="block">together</span>
              <span className="text-primary">start here</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
              Legash is the simplest way to raise money and support the causes
              you care about most.
            </p>
          </div>

          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-md shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all gap-2"
          >
            Start Fundraising
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
export default HeroSection;

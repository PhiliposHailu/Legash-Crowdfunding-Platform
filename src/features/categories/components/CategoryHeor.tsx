import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import SmartImage from "@/components/shared/SmartImage";
import { CategoryDetail } from "../types";
import { ArrowRight } from "lucide-react";

const CategoryHero = ({ category }: { category: CategoryDetail }) => {
  return (
    /* Increased pb-32 for mobile to give the floating badge room at the bottom */
    <section className={`relative overflow-hidden pt-32 pb-32 lg:pb-20 ${category.color}`}>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 border-l-[60px] border-dashed border-primary rotate-12 translate-x-1/2" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                {category.name} Fundraising
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1]">
                {category.tagline}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {category.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg gap-2 shadow-xl shadow-primary/20">
                Start {category.name} Fundraiser
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative animate-in zoom-in duration-1000 delay-200 mt-12 lg:mt-0">
            {/* Soft Glow Background */}
            <div className="absolute -inset-10 bg-white/40 blur-3xl rounded-full" />
            
            {/* The Image Frame
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white">
              <SmartImage 
                src={category.image} 
                alt={category.name} 
                fill 
                className="object-cover"
              />
            </div> */}

            {/* --- FIX: RESPONSIVE FLOATING STATS BADGE --- */}
            {/* We use bottom-4 right-4 for mobile, and lg:-bottom-6 lg:-left-6 for desktop */}
            <div className="absolute bottom-4 right-4 lg:bottom-auto lg:-bottom-6 lg:right-auto lg:-left-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-muted flex items-center gap-3 md:gap-4 z-20">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-light flex items-center justify-center text-secondary shrink-0">
                 <category.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Active Goals</p>
                <p className="text-lg md:text-xl font-black text-foreground">2,400+</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
export default CategoryHero;
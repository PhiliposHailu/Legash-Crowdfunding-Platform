import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SmartImage from "@/components/shared/SmartImage";
import { ArrowRight } from "lucide-react";

interface CtaCardProps {
  title: string;
  image: string;
  buttonText: string;
  href: string;
  bgColor: string;
}

const CtaCard = ({ title, image, buttonText, href, bgColor }: CtaCardProps) => {
  return (
    <div className={cn(
      "relative rounded-3xl overflow-hidden p-8 flex items-center justify-end h-72",
      bgColor
    )}>
      
      {/* BACKGROUND IMAGE - Animations removed */}
      <SmartImage 
        src={image} 
        alt={title} 
        fill
        className="object-cover brightness-90" // Slightly darker for a calmer feel
        sizes="(max-width: 768px) 100vw, 50vw"
        containerClassName="absolute inset-0"
      />

      {/* GRADIENT OVERLAY - Made stronger */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 text-right space-y-5 max-w-[65%]">
        
        {/* SMALLER, NICER TYPOGRAPHY */}
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
          {title}
        </h3>

        <Button 
          asChild
          size="lg" 
          className="rounded-full bg-primary text-white gap-2 px-6 py-6 transition-colors duration-300"
        >
          <Link href={href}>
            {buttonText} <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CtaCard;
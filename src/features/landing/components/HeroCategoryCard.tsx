"use client";
import SmartImage from "@/components/shared/SmartImage";
import { useEffect, useState } from "react";

interface HeroCardProps {
  category: string;
  image: string;
}

function HeroCategoryCard({ category, image }: HeroCardProps) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.75;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
        setOffset(circumference * (1 - progress));
    }, 500);
    return () => clearTimeout(timer);
  }, [circumference, progress]);

  return (
    <div className="group relative flex items-center justify-center w-32 h-32 transition-transform duration-500 hover:scale-105">
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 128 128">
        <circle
          cx="64" cy="64" r={radius}
          stroke="var(--secondary-light)"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="64" cy="64" r={radius}
          stroke="url(#heroGradient)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--secondary-light)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg z-10">
        <SmartImage
          src={image}
          alt={category}
          fill
          containerClassName="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute -bottom-2 z-20 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-lg border border-muted-foreground/10 transition-all duration-300">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap text-foreground">
           {category}
        </p>
      </div>
    </div>
  );
}

export default HeroCategoryCard;
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have the shadcn utility

function HeroCategoryCard({ category = "Medicine" }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.75;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setOffset(circumference * (1 - progress));
  }, [circumference, progress]);

  return (
    /* We add 'group' here so we can animate the label when the whole card is hovered */
    <div className="group relative flex items-center justify-center w-32 h-32 transition-transform duration-500 hover:scale-105">
      
      {/* SVG RING */}
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

      {/* CENTER IMAGE */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg z-10">
        <img
          src="https://picsum.photos/200"
          alt="User"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* --- THE NEW LABEL BADGE --- */}
      <div className="absolute -bottom-2 z-20 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-lg border border-muted-foreground/10 transition-all duration-300 ">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
           {category}
        </p>
      </div>

    </div>
  );
}

export default HeroCategoryCard;
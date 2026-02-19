"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SmartImage from "../shared/SmartImage";

interface Props {
  images: string[];
}

export function CampaignGallery({ images }: Props) {
  return (
    <div className="relative w-full group">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <SmartImage
                  src={src}
                  alt={`Campaign Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Counter Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                  {index + 1} / {images.length}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Left & Right Buttons */}
        {/* We hide them on mobile and show them on hover on desktop */}
        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
        </div>
      </Carousel>
      
      <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3">
        Use arrows or drag to see more
      </p>
    </div>
  );
}
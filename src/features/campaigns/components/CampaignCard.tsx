"use client";

import { useEffect, useState } from "react";
import { Fundraiser } from "../types";

interface CampaignCardProps {
  data: Fundraiser;
}

function CampaignCard({ data }: CampaignCardProps) {
  const [fillWidth, setFillWidth] = useState(0);
  const progress = data.percentage;

  useEffect(() => {
    const timer = setTimeout(() => setFillWidth(progress), 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="group w-full bg-background rounded-3xl shadow-lg border border-muted overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.logoPath}
          alt={data.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-lg shadow-sm border border-white/20 uppercase tracking-widest">
            {data.category?.name || "General"} 
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-foreground line-clamp-1 uppercase">
          {data.name}
        </h2>
        
        <div className="space-y-2 pt-2">
            <div className="w-full h-2.5 bg-secondary-light rounded-full overflow-hidden">
                <div
                    className="h-full bg-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${fillWidth}%` }}
                />
            </div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                <span className="text-muted-foreground font-normal">
                    Progress
                </span>
                <span className="text-primary">{progress.toFixed(0)}% Funded</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
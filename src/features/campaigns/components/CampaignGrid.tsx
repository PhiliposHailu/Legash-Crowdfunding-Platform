"use client";

import { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import { Fundraiser } from "../types";
import { getCampaignsByCategory } from "../api/get-campaigns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CampaignGrid({ categoryId }: { categoryId: string }) {
  const [campaigns, setCampaigns] = useState<Fundraiser[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data } = await getCampaignsByCategory(categoryId, page);
      setCampaigns(data);
      setLoading(false);
      window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll back to top of grid
    }
    load();
  }, [categoryId, page]);

  return (
    <div className="space-y-12">
      {/* 1. FILTER & SORT BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8 border-b border-muted">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-primary" />
          Active Campaigns
        </h3>
        
        <div className="flex gap-3">
          {/* You can add Shadcn Select components here later */}
          <div className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium">Sort by: Newest</div>
          <div className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium">Goal: All</div>
        </div>
      </div>

      {/* 2. THE GRID (3 columns x 4 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          // Showing Skeletons while loading
          Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-3xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))
        ) : (
          campaigns.map((item) => (
            <CampaignCard key={item.id} data={item} />
          ))
        )}
      </div>

      {/* 3. PAGINATION */}
      <div className="flex justify-center items-center gap-8 pt-10 border-t border-muted">
        <Button 
          variant="outline" 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
          className="rounded-full gap-2 px-6"
        >
          <ChevronLeft size={16} /> Previous
        </Button>

        <span className="text-sm font-bold text-muted-foreground">
          Page <span className="text-foreground">{page}</span> of 4
        </span>

        <Button 
          variant="outline" 
          onClick={() => setPage(p => p + 1)}
          disabled={page === 4 || loading}
          className="rounded-full gap-2 px-6"
        >
          Next <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
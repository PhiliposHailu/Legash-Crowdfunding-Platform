// src/app/categories/[id]/page.tsx
import { getCategoryById } from "@/features/categories/api/get-categories";
import CategoryHero from "@/features/categories/components/CategoryHeor";
import CampaignsSection from "@/features/landing/components/CampaignsSection";
import { notFound } from "next/navigation";

// 1. Update the type to Promise<{ id: string }>
export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // 2. Await the params before using them
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 3. Now you can use the ID safely
  const category = await getCategoryById(id);

  if (!category) {
    notFound(); 
  }

  return (
    <main className="min-h-screen">
      <CategoryHero category={category} />
      <div className="py-20">
         <CampaignsSection />
      </div>
    </main>
  );
}
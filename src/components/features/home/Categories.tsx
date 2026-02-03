import React from "react";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { title: "Medical", count: "40.3k", icon: "➕", color: "bg-cyan-50" },
  { title: "Religious", count: "28.2k", icon: "🙏", color: "bg-indigo-50" },
  { title: "Funeral", count: "36.2k", icon: "🕯️", color: "bg-stone-50" },
  { title: "Education", count: "25.2k", icon: "📚", color: "bg-emerald-50" },
  { title: "Family", count: "34.8k", icon: "🏠", color: "bg-red-50" },
  { title: "Animals", count: "32.9k", icon: "🐾", color: "bg-yellow-50" },
  { title: "Business", count: "20.3k", icon: "💼", color: "bg-blue-50" },
  { title: "Sports", count: "29.7k", icon: "🏆", color: "bg-orange-50" },
  { title: "Other Funding", count: "21.5k", icon: "🐷", color: "bg-rose-50" },
];

interface CategoryCardProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const CategoryCard = ({ title, count, icon, color }: CategoryCardProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center p-6 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer min-w-[160px] aspect-[4/5]",
      color,
    )}
  >
    {/* Placeholder for 3D Icon */}
    <div className="text-5xl mb-4 drop-shadow-md animate-bounce-slow">
      {icon}
    </div>

    <div className="text-center space-y-1">
      <h3 className="font-bold text-foreground text-sm md:text-base">
        {title}
      </h3>
      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
        {count} campaigns
      </p>
    </div>
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground font-sans">
            Fundraising Categories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="flex-none w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
            >
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;

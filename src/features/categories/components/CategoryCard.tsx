import { cn } from "@/lib/utils";
import { Category } from "../types";

interface CategoryCardProps {
  data: Category;
}

const CategoryCard = ({ data }: CategoryCardProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center p-6 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer min-w-[160px] aspect-[4/5]",
      data.color 
    )}
  >
    <div className="text-5xl mb-4 drop-shadow-md">
      {data.icon}
    </div>
    <div className="text-center space-y-1">
      <h3 className="font-bold text-foreground text-sm md:text-base">{data.name}</h3>
    </div>
  </div>
);

export default CategoryCard;
import { cn } from "@/lib/utils";
import { Category } from "../types";
import Link from "next/link";
import { Icon } from "lucide-react";

const CategoryCard = ({ data }: { data: Category }) => {
  const IconComponent = data.icon;

  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[170px] aspect-[4/5] border border-transparent hover:border-white/50",
        data.color,
      )}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
          data.iconColor,
        )}
      >
        {typeof IconComponent === "string" ? (
          <img src={IconComponent} alt={data.name} className={cn("w-32 h-20", data.color)} />
        ) : (
          IconComponent && <IconComponent size={32} strokeWidth={2.5} />
        )}
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-bold text-[#2d3a4b] text-base">{data.name}</h3>
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">
          {data.count || "0"} Projects
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;

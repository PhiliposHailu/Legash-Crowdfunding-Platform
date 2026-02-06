// import axios from "axios";
// import { Category, CategoryStyle } from "../types";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

// const CATEGORY_STYLES: Record<string, CategoryStyle> = {
//   Medical: { icon: "➕", color: "bg-cyan-50" },
//   Religious: { icon: "🙏", color: "bg-indigo-50" },
//   Education: { icon: "📚", color: "bg-emerald-50" },
//   Default: { icon: "📂", color: "bg-muted" },
// };

// export async function getCategories(): Promise<Category[]> {
//   try {
//     const response = await axios.get<Category[]>(`${API_BASE_URL}/api/categories`);
    
//     return response.data.map(category => ({
//       ...category,
//       ...CATEGORY_STYLES[category.name] || CATEGORY_STYLES.Default
//     }));

//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }


import { Category, CategoryStyle, CategoryDetail } from "../types";

import { 
  Stethoscope, 
  GraduationCap, 
  Flame, 
  Heart, 
  Users, 
  Briefcase, 
  Sprout,
  HelpingHand 
} from "lucide-react";

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Medical: { 
    icon: Stethoscope, 
    color: "bg-red-50", 
    iconColor: "text-red-500" 
  },
  Religious: { 
    icon: HelpingHand, 
    color: "bg-indigo-50", 
    iconColor: "text-indigo-500" 
  },
  Education: { 
    icon: GraduationCap, 
    color: "bg-blue-50", 
    iconColor: "text-blue-500" 
  },
  Emergency: { 
    icon: Flame, 
    color: "bg-orange-50", 
    iconColor: "text-orange-500" 
  },
  Community: { 
    icon: Users, 
    color: "bg-emerald-50", 
    iconColor: "text-emerald-500" 
  },
  Business: { 
    icon: Briefcase, 
    color: "bg-zinc-100", 
    iconColor: "text-zinc-600" 
  },
  Default: { 
    icon: Heart, 
    color: "bg-slate-50", 
    iconColor: "text-slate-400" 
  },
};


export async function getCategories(): Promise<Category[]> {
  console.log("Using MOCK data for categories");
  
  const mockApiData: Category[] = [
    { id: 0, name: "All" },
    { id: 1, name: "Medical" },
    { id: 2, name: "Education" },
    { id: 3, name: "Religious" },
    { id: 4, name: "Family" },
    { id: 5, name: "Animals" },
  ];
  
  return mockApiData.map(category => ({
    ...category,
    ...CATEGORY_STYLES[category.name] || CATEGORY_STYLES.Default
  }));
}


export async function getCategoryById(id: string): Promise<CategoryDetail | null> {
  const categories: CategoryDetail[] = [
    {
      id: 0,
      name: "All",
      tagline: "Discovery Awaits in Every Cause",
      description: "Explore a world of impact with Legash's diverse fundraising categories. From urgent medical needs to inspiring educational projects, find the cause that resonates with your heart and start making a difference today.",
      icon: Stethoscope,
      color: "bg-red-50",
      image: "https://picsum.photos/200?random=4"
    },
    {
      id: 1,
      name: "Medical",
      tagline: "Health is the Foundation of Hope",
      description: "Support families facing medical emergencies and help provide life-saving treatments to those in need across Ethiopia.",
      icon: Stethoscope,
      color: "bg-red-50",
      image: "https://picsum.photos/200?random=4"
    },
    {
      id: 2,
      name: "Education",
      tagline: "Fundraising for Student Success",
      description: "Join us in breaking the cycle of poverty by funding school supplies, tuition, and classroom equipment for bright young minds.",
      icon: GraduationCap,
      color: "bg-blue-50",
      image: "https://picsum.photos/200?random=5"
    }
  ];

  return categories.find(c => c.id === parseInt(id)) || null;
}
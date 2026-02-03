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


import { Category, CategoryStyle } from "../types";

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Medical: { icon: "➕", color: "bg-cyan-50" },
  Religious: { icon: "🙏", color: "bg-indigo-50" },
  Education: { icon: "📚", color: "bg-emerald-50" },
  // I will add more styles if i need them later
  Default: { icon: "📂", color: "bg-muted" },
};

export async function getCategories(): Promise<Category[]> {
  console.log("Using MOCK data for categories");
  
  const mockApiData: Category[] = [
    { id: 1, name: "Medical" },
    { id: 2, name: "Religious" },
    { id: 3, name: "Education" },
    { id: 4, name: "Family" },
    { id: 5, name: "Animals" },
  ];
  
  return mockApiData.map(category => ({
    ...category,
    ...CATEGORY_STYLES[category.name] || CATEGORY_STYLES.Default
  }));
}
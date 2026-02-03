// import axios from "axios"; 
// import { Fundraiser } from "../types";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.legash.com";

// export async function getCampaigns(): Promise<Fundraiser[]> {
//   try {
//     const response = await axios.get<Fundraiser[]>(`${API_BASE_URL}/api/fundraisers`);
    
//     // 3. Just return the data. No need for response.ok or response.json()
//     return response.data;

//   } catch (error) {
//     // 4. Axios automatically throws an error for bad status codes (4xx, 5xx)
//     console.error("Error fetching campaigns with Axios:", error);

//     // It's a good practice to check if it's an Axios error for more details
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error details:", error.response?.data);
//     }
    
//     return []; // Return empty array on failure
//   }
// }


// src/features/campaigns/api/get-campaigns.ts
import { Fundraiser } from "../types";

export async function getCampaigns(): Promise<Fundraiser[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: 1,
      name: "Medicine for Tigrayan Children",
      description: "Providing essential medical supplies...",
      code: "MED-TIG-01",
      percentage: 50, 
      createdDate: new Date().toISOString(),
      categoryId: 1,
      logoPath: "https://picsum.photos/400/300?random=1",
      category: { id: 1, name: "Health", description: "..." }
    },
    {
      id: 2,
      name: "Build a New School in Addis",
      description: "Help us construct a safe learning environment...",
      code: "EDU-ADD-02",
      percentage: 80,
      createdDate: new Date().toISOString(),
      categoryId: 2,
      logoPath: "https://picsum.photos/400/300?random=2",
      category: { id: 2, name: "Education", description: "..." }
    },
    {
      id: 3,
      name: "Medicine for Tigrayan Children",
      description: "Providing essential medical supplies...",
      code: "MED-TIG-01",
      percentage: 50, 
      createdDate: new Date().toISOString(),
      categoryId: 1,
      logoPath: "https://picsum.photos/400/300?random=1",
      category: { id: 1, name: "Health", description: "..." }
    },
    {
      id: 4,
      name: "Build a New School in Addis",
      description: "Help us construct a safe learning environment...",
      code: "EDU-ADD-02",
      percentage: 80,
      createdDate: new Date().toISOString(),
      categoryId: 2,
      logoPath: "https://picsum.photos/400/300?random=2",
      category: { id: 2, name: "Education", description: "..." }
    },{
      id: 5,
      name: "Medicine for Tigrayan Children",
      description: "Providing essential medical supplies...",
      code: "MED-TIG-01",
      percentage: 50, 
      createdDate: new Date().toISOString(),
      categoryId: 1,
      logoPath: "https://picsum.photos/400/300?random=1",
      category: { id: 1, name: "Health", description: "..." }
    },
    {
      id: 6,
      name: "Build a New School in Addis",
      description: "Help us construct a safe learning environment...",
      code: "EDU-ADD-02",
      percentage: 80,
      createdDate: new Date().toISOString(),
      categoryId: 2,
      logoPath: "https://picsum.photos/400/300?random=2",
      category: { id: 2, name: "Education", description: "..." }
    },
  ];
}
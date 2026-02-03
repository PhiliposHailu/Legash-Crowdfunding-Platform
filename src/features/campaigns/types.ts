export interface Fundraiser {
  id: number; 
  name: string;
  description: string;
  code: string;
  percentage: number; 
  createdDate: string; 
  categoryId: number;
  logoPath: string; 
  category?: Category;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

// Note: just in case i need this two in the future ,not currently used
// export interface FundraiserImage {
//   id: number;
//   fundRaiserId: number;
//   fileName: string;
// }

// export interface SocialMedias {
//   id: number;
//   fundRaiserId: number;
//   facebook?: string;
//   twitter?: string;
//   linkedin?: string;
//   youtube?: string;
//   whatsapp?: string;
// }
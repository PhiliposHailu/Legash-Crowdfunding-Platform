import { LucideIcon } from "lucide-react";


export interface Category {
  id: number;
  name: string;
  description?: string;

  // Ui-specific properties
  icon?: LucideIcon;
  color?: string;
  iconColor?: string;
  count?: number;
}

export interface CategoryDetail {
  id: number;
  name: string;
  tagline: string;        
  description: string;    
  icon: LucideIcon;             
  color: string;          
  image: string;
}

export interface CategoryStyle {
  icon: LucideIcon;
  color: string;
  iconColor: string;
}
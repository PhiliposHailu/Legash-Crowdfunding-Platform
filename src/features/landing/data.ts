import { ShieldCheck, Lock, Eye } from "lucide-react";

// Static data for postioning of images 
export const HERO_POSITIONS = [
  "top-[10%] left-[7%]", 
  "top-[16%] right-[8%]", 
  "bottom-[10%] left-[1%]", 
  "bottom-[15%] right-[3%]", 
];

export const HERO_CARDS = [
  { id: 1, category: "Medicine", image: "https://picsum.photos/200?random=1" },
  { id: 2, category: "Education", image: "https://picsum.photos/200?random=2" },
  { id: 3, category: "Emergency", image: "https://picsum.photos/200?random=3" },
  { id: 4, category: "Community", image: "https://picsum.photos/200?random=4" },
];


// Trust and Safety static data 
export const TRUST_FEATURES = [
  {
    title: "Verified Fundraisers",
    description: "Every campaign is reviewed before going live.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payments",
    description: "Encrypted transactions via trusted payment partners.",
    icon: Lock,
  },
  {
    title: "Full Transparency",
    description: "Track donations and fund usage in real time.",
    icon: Eye,
  },
];
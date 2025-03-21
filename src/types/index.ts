import { SVGProps } from "react";
import { LucideIcon } from "lucide-react";

export interface IconItem {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export interface BackgroundItem {
  url: string;
  name: string;
}

export interface CelebrationOption {
  value: string;
  label: string;
}

export interface HeroSectionByIconSelected {
  highlight: string;
  text: string;
  icon: LucideIcon;
  backgroundUrl: string;
}

export interface ImageItem {
  logo: {
    icon: string;
    text: string;
  };
  icons: {
    menu: LucideIcon;
    profile: LucideIcon;
  };
}

export interface Spot {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  location: string;
  availability: string;
  href: string;
}

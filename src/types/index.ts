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

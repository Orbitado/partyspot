import { SVGProps } from "react";

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

import { heroSectionByIconSelected } from "@/src/data/hero-section-by-icon-selected";
import { LucideIcon } from "lucide-react";

export interface HeroSlice {
  highlight: string;
  text: string;
  currentIcon: number;
  backgroundUrl: string;
  icon: LucideIcon;

  setHighlight: (highlight: string) => void;
  setText: (text: string) => void;
  setCurrentIcon: (currentIcon: number) => void;
  setBackgroundUrl: (backgroundUrl: string) => void;
  setIcon: (icon: LucideIcon) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createHeroSlice = (set: any) => ({
  highlight: heroSectionByIconSelected[0].highlight,
  text: heroSectionByIconSelected[0].text,
  currentIcon: 0,
  backgroundUrl: `'${heroSectionByIconSelected[0].backgroundUrl}'`,
  icon: heroSectionByIconSelected[0].icon,

  setHighlight: (highlight: string) => set({ highlight }),
  setText: (text: string) => set({ text }),
  setCurrentIcon: (currentIcon: number) => set({ currentIcon }),
  setBackgroundUrl: (backgroundUrl: string) => set({ backgroundUrl }),
  setIcon: (icon: LucideIcon) => set({ icon })
});

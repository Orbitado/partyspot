import { createStore } from "zustand/vanilla";
import { LucideIcon } from "lucide-react";
import { heroSectionByIconSelected } from "@/src/data/hero-section-by-icon-selected";

export type HeroState = {
  highlight: string;
  text: string;
  currentIcon: number;
  backgroundUrl: string;
  icon: LucideIcon;
};

export type HeroActions = {
  setHighlight: (highlight: string) => void;
  setText: (text: string) => void;
  setCurrentIcon: (currentIcon: number) => void;
  setBackgroundUrl: (backgroundUrl: string) => void;
  setIcon: (icon: LucideIcon) => void;
};

export type HeroStore = HeroState & HeroActions;

export const initHeroStore = (): HeroState => {
  return {
    highlight: heroSectionByIconSelected[0].highlight,
    text: heroSectionByIconSelected[0].text,
    currentIcon: 0,
    backgroundUrl: `'${heroSectionByIconSelected[0].backgroundUrl}'`,
    icon: heroSectionByIconSelected[0].icon
  };
};

export const defaultInitState: HeroState = {
  highlight: heroSectionByIconSelected[0].highlight,
  text: heroSectionByIconSelected[0].text,
  currentIcon: 0,
  backgroundUrl: `'${heroSectionByIconSelected[0].backgroundUrl}'`,
  icon: heroSectionByIconSelected[0].icon
};

export const createHeroStore = (initState: HeroState = defaultInitState) => {
  return createStore<HeroStore>()((set) => ({
    ...initState,
    setHighlight: (highlight) => set({ highlight }),
    setText: (text) => set({ text }),
    setCurrentIcon: (currentIcon) => set({ currentIcon }),
    setBackgroundUrl: (backgroundUrl) => set({ backgroundUrl }),
    setIcon: (icon) => set({ icon })
  }));
};

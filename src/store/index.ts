import { create } from "zustand";
import { createHeroSlice, HeroSlice } from "./slices/hero-slice";
import { createFaqSlice, FaqSlice } from "./slices/faq-slice";

export type StoreState = HeroSlice & FaqSlice;

export const useStore = create<StoreState>((set) => ({
  ...createHeroSlice(set),
  ...createFaqSlice(set)
}));

import { create } from "zustand";
import { createHeroSlice, HeroSlice } from "./slices/hero-slice";
import { createFaqSlice, FaqSlice } from "./slices/faq-slice";
import { createPartySlice, PartySlice } from "./slices/party-slice";

export type StoreState = HeroSlice & FaqSlice & PartySlice;

export const useStore = create<StoreState>((set, get, store) => ({
  ...createHeroSlice(set),
  ...createFaqSlice(set),
  ...createPartySlice(set, get, store)
}));

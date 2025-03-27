import { create } from "zustand";
import { createHeroSlice, HeroSlice } from "./slices/hero-slice";
import { createFaqSlice, FaqSlice } from "./slices/faq-slice";
import { createPartySlice, PartySlice } from "./slices/party-slice";
import { createUiSlice, UiSlice } from "./slices/ui-slice";

export type StoreState = HeroSlice & FaqSlice & PartySlice & UiSlice;

export const useStore = create<StoreState>((set, get, store) => ({
  ...createHeroSlice(set),
  ...createFaqSlice(set),
  ...createPartySlice(set, get, store),
  ...createUiSlice(set, get, store)
}));

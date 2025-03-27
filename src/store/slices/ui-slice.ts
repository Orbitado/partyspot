import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface UiSlice {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const createUiSlice: StateCreator<StoreState, [], [], UiSlice> = (
  set
) => ({
  isMobileMenuOpen: false,

  toggleMobileMenu: () =>
    set((state) => ({ ...state, isMobileMenuOpen: !state.isMobileMenuOpen }))
});

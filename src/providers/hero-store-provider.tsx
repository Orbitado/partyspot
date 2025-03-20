"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type HeroStore,
  createHeroStore,
  initHeroStore
} from "@/src/stores/hero-store";

export type HeroStoreApi = ReturnType<typeof createHeroStore>;

export const HeroStoreContext = createContext<HeroStoreApi | undefined>(
  undefined
);

export interface HeroStoreProviderProps {
  children: ReactNode;
}

export const HeroStoreProvider = ({ children }: HeroStoreProviderProps) => {
  const storeRef = useRef<HeroStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createHeroStore(initHeroStore());
  }

  return (
    <HeroStoreContext.Provider value={storeRef.current}>
      {children}
    </HeroStoreContext.Provider>
  );
};

export const useHeroStore = <T,>(selector: (store: HeroStore) => T): T => {
  const heroStoreContext = useContext(HeroStoreContext);

  if (!heroStoreContext) {
    throw new Error(`useHeroStore must be used within HeroStoreProvider`);
  }

  return useStore(heroStoreContext, selector);
};

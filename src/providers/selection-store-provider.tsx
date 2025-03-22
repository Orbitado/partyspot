"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type SelectionStore,
  createSelectionStore,
  initSelectionStore
} from "@/src/stores/selection-store";

export type SelectionStoreApi = ReturnType<typeof createSelectionStore>;

export const SelectionStoreContext = createContext<
  SelectionStoreApi | undefined
>(undefined);

export interface SelectionStoreProviderProps {
  children: ReactNode;
}

export const SelectionStoreProvider = ({
  children
}: SelectionStoreProviderProps) => {
  const storeRef = useRef<SelectionStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createSelectionStore(initSelectionStore());
  }

  return (
    <SelectionStoreContext.Provider value={storeRef.current}>
      {children}
    </SelectionStoreContext.Provider>
  );
};

export const useSelectionStore = <T,>(
  selector: (store: SelectionStore) => T
): T => {
  const selectionStoreContext = useContext(SelectionStoreContext);

  if (!selectionStoreContext) {
    throw new Error(
      `useSelectionStore must be used within SelectionStoreProvider`
    );
  }

  return useStore(selectionStoreContext, selector);
};

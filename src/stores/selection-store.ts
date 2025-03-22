import { createStore } from "zustand/vanilla";

export type SelectionState = {
  selectedId: string | null;
};

export type SelectionActions = {
  selectItem: (id: string) => void;
  clearSelection: () => void;
};

export type SelectionStore = SelectionState & SelectionActions;

export const initSelectionStore = (): SelectionState => {
  return {
    selectedId: null
  };
};

export const defaultInitState: SelectionState = {
  selectedId: null
};

export const createSelectionStore = (
  initState: SelectionState = defaultInitState
) => {
  return createStore<SelectionStore>()((set) => ({
    ...initState,
    selectItem: (id) =>
      set((state) => ({
        selectedId: state.selectedId === id ? null : id
      })),
    clearSelection: () => set({ selectedId: null })
  }));
};

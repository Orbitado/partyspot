export interface FaqSlice {
  selectedId: string | null;

  selectItem: (id: string) => void;
  clearSelection: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFaqSlice = (set: any) => ({
  selectedId: null,

  selectItem: (id: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set((state: any) => ({
      selectedId: state.selectedId === id ? null : id
    })),
  clearSelection: () => set({ selectedId: null })
});

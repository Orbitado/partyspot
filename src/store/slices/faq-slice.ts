export interface FaqSlice {
  selectedId: number;
  selectedBackgroundUrl: string;

  selectBackgroundUrl: (backgroundUrl: string) => void;
  selectItem: (id: number) => void;
  clearSelection: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFaqSlice = (set: any) => ({
  selectedId: 1,
  selectedBackgroundUrl: "/images/girl-connecting.webp",

  selectBackgroundUrl: (backgroundUrl: string) =>
    set({ selectedBackgroundUrl: backgroundUrl }),
  selectItem: (id: number) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set((state: any) => ({
      selectedId: state.selectedId === id ? 1 : id
    })),
  clearSelection: () => set({ selectedId: 1 })
});

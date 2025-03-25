"use client";
import { useStore } from "@/src/store";
import { heroSectionByIconSelected } from "@/src/data/hero-section-by-icon-selected";

export default function HeroIconList() {
  const currentIcon = useStore((state) => state.currentIcon);
  const setCurrentIcon = useStore((state) => state.setCurrentIcon);
  const setBackgroundUrl = useStore((state) => state.setBackgroundUrl);
  const setText = useStore((state) => state.setText);
  const setHighlight = useStore((state) => state.setHighlight);
  const setIcon = useStore((state) => state.setIcon);

  const handleIconClick = (index: number) => {
    setCurrentIcon(index);
    setBackgroundUrl(heroSectionByIconSelected[index].backgroundUrl);
    setText(heroSectionByIconSelected[index].text);
    setHighlight(heroSectionByIconSelected[index].highlight);
    setIcon(heroSectionByIconSelected[index].icon);
  };

  return (
    <ul
      className="m-0 flex flex-wrap items-center justify-center gap-3 md:gap-6"
      role="list"
      aria-label="Categorías de eventos"
    >
      {heroSectionByIconSelected.map(
        ({ icon: IconComponent, highlight }, index) => {
          const isSelected = currentIcon === index;
          return (
            <li key={index}>
              <button
                id={`category-${index}`}
                type="button"
                aria-label={highlight}
                title={highlight}
                className="cursor-pointer"
                onClick={() => handleIconClick(index)}
              >
                <IconComponent
                  className={`size-7 duration-300 ease-in-out md:size-8 ${
                    isSelected ? "scale-110 opacity-100" : "opacity-50"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
}

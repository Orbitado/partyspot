"use client";
import { useHeroStore } from "@/src/providers/hero-store-provider";
import { heroSectionByIconSelected } from "@/src/data/hero-section-by-icon-selected";

export default function HeroIconList() {
  const {
    currentIcon,
    setCurrentIcon,
    setBackgroundUrl,
    setText,
    setHighlight,
    setIcon
  } = useHeroStore((state) => state);

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

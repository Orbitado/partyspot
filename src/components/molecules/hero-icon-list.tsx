"use client";
import { icons } from "@/src/data/icons";
import { useState } from "react";

export default function HeroIconList() {
  const [icon, setIcon] = useState({
    current: 0
  });

  return (
    <ul
      className="m-0 flex items-center justify-center gap-6"
      role="list"
      aria-label="Categorías de eventos"
    >
      {icons.map(({ icon: IconComponent, label }, index) => {
        const isSelected = icon.current === index;
        return (
          <li key={index}>
            <button
              id={`category-${index}`}
              type="button"
              aria-label={label}
              title={label}
              className="cursor-pointer"
              onClick={() =>
                setIcon({
                  current: index
                })
              }
            >
              <IconComponent
                className={`size-8 duration-300 ease-in-out ${
                  isSelected ? "scale-110 opacity-100" : "opacity-50"
                }`}
                aria-hidden="true"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

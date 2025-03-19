"use client";
import { icons } from "@/src/data/icons";
import { useState } from "react";

export default function HeroIconList() {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  return (
    <ul className="m-0 flex items-center justify-center gap-6">
      {icons.map(({ icon: IconComponent, label }, index) => (
        <li key={index} aria-label={label}>
          <button
            title={label}
            type="button"
            className="cursor-pointer"
            onClick={() => setActiveIcon(index)}
          >
            <IconComponent
              className={`size-9 opacity-50 duration-300 ease-in-out ${
                activeIcon === index ? "scale-110 opacity-100" : "opacity-50"
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

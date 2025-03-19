"use client";
import { icons } from "@/src/data/icons";
import { useState } from "react";

export default function HeroIconList() {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  return (
    <ul className="flex gap-6 justify-center items-center m-0">
      {icons.map(({ icon: IconComponent, label }, index) => (
        <li key={index} aria-label={label}>
          <button
            title={label}
            type="button"
            className="cursor-pointer"
            onClick={() => setActiveIcon(index)}
          >
            <IconComponent
              className={`size-10 opacity-50 ease-in-out duration-300 ${
                activeIcon === index ? "opacity-100 scale-110" : "opacity-50"
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

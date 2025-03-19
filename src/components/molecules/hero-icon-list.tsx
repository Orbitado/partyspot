"use client";
import { icons } from "@/src/data/icons";
import { useState } from "react";

export default function HeroIconList() {
  const [icon, setIcon] = useState({
    current: 0
  });

  return (
    <ul className="m-0 flex items-center justify-center gap-6">
      {icons.map(({ icon: IconComponent, label }, index) => (
        <li key={index} aria-label={label}>
          <button
            title={label}
            type="button"
            className="cursor-pointer"
            onClick={() =>
              setIcon({
                current: index
              })
            }
          >
            <IconComponent
              className={`size-9 opacity-50 duration-300 ease-in-out ${
                icon.current === index ? "scale-110 opacity-100" : "opacity-50"
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

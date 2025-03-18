"use client";
import { icons } from "@/src/data/icons";

interface HeroIconListProps {
  onIconClick?: (index: number) => void;
}

export default function HeroIconList({ onIconClick }: HeroIconListProps) {
  return (
    <div className="bg-red-500">
      <ul className="bg-blue-500">
        {icons.map(({ icon: IconComponent, label }, index) => (
          <li key={index} aria-label={label}>
            <button
              className="bg-green-500"
              title={label}
              onClick={() => {
                if (onIconClick) onIconClick(index);
              }}
            >
              <IconComponent className="bg-yellow-500" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

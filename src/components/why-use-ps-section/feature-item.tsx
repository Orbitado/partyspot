"use client";
import { FeatureItemProps } from "@/src/data/feature-items";
import { useStore } from "@/src/store";

export default function FeatureItem({
  title,
  description,
  icon,
  id,
  backgroundUrl
}: FeatureItemProps) {
  const selectedId = useStore((state) => state.selectedId);
  const selectBackgroundUrl = useStore((state) => state.selectBackgroundUrl);
  const selectItem = useStore((state) => state.selectItem);
  const isSelected = selectedId === id;

  const handleClick = () => {
    selectItem(id);
    selectBackgroundUrl(backgroundUrl);
  };

  return (
    <button
      className={`relative flex w-full cursor-pointer items-start rounded-lg p-4 text-start transition-all duration-300 ${
        isSelected ? "scale-105 bg-gray-100" : ""
      }`}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="mr-5 rounded-xl p-3 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4
          className={`mb-2 text-xl font-bold transition-all duration-300 ${
            isSelected ? "text-primary" : "text-secondary"
          }`}
        >
          {title}
        </h4>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </button>
  );
}

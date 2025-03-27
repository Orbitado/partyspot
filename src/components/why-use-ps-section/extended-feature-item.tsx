"use client";
import { FeatureItemProps } from "@/src/data/feature-items";
import { useStore } from "@/src/store";
import CommonFeatureItem from "@/src/components/common/feature-item";

export default function FeatureItem({
  title,
  description,
  icon,
  id,
  backgroundUrl
}: FeatureItemProps) {
  const { selectedId, selectBackgroundUrl, selectItem } = useStore(
    (state) => state
  );
  const isSelected = selectedId === id;

  const handleClick = () => {
    selectItem(id);
    selectBackgroundUrl(backgroundUrl);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <CommonFeatureItem
      title={title}
      description={description}
      icon={icon}
      isSelected={isSelected}
      as="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    />
  );
}

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  as?: React.ElementType;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  tabIndex?: number;
}

export default function FeatureItem({
  title,
  description,
  icon,
  isSelected = false,
  as: Component = "div",
  onClick,
  onKeyDown,
  ...props
}: FeatureProps) {
  return (
    <Component
      className={`group relative flex w-full items-start transition-all duration-300 ${
        onClick ? "cursor-pointer rounded-lg p-4 text-start" : "group"
      } ${isSelected ? "scale-105 bg-gray-100" : ""}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...props}
    >
      <div className="bg-primary/20 group-hover:bg-primary/30 flex-shrink-0 rounded-lg p-3 transition-all duration-300">
        {icon}
      </div>
      <div className="ml-4">
        <h3
          className={`text-xl font-medium transition-all duration-300 ${
            isSelected ? "text-primary font-bold" : "text-secondary"
          }`}
        >
          {title}
        </h3>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </Component>
  );
}

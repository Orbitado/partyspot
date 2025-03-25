interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureItem({
  title,
  description,
  icon
}: FeatureProps) {
  return (
    <div className="group flex items-start">
      <div className="bg-primary/20 group-hover:bg-primary/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md text-2xl transition-colors duration-300">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-secondary text-xl font-medium">{title}</h3>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
}

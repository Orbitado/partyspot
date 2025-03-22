import { FeatureItemProps } from "@/src/data/feature-items";

export default function FeatureItem({
  title,
  description,
  icon
}: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <div className="bg-primary/10 mr-5 rounded-xl p-3">{icon}</div>
      <div>
        <h4 className="text-secondary mb-2 text-xl font-bold">{title}</h4>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
}

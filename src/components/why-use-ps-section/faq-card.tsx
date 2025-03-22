import { featureItems } from "@/src/data/feature-items";
import FeatureItem from "./feature-item";
import LeftSideImage from "./left-side-image";

export default function FaqCard() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side */}
        <LeftSideImage />

        {/* Right side */}
        <RightSideCard />
      </div>
    </div>
  );
}

const RightSideCard = () => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-8 p-12">
      {featureItems.map((item) => (
        <div key={item.title} className="group">
          <FeatureItem {...item} />
        </div>
      ))}
    </div>
  );
};

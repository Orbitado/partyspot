import BackgroundCard from "@/src/components/common/background-card";
import LeftSideImage from "./left-side-image";
import { featureItems } from "@/src/data/feature-items";
import FeatureItem from "./extended-feature-item";

export default function FaqCard() {
  return (
    <BackgroundCard>
      <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative h-64 lg:h-full">
          <LeftSideImage />
        </div>

        {/* Right side - Features */}
        <div className="flex flex-col items-center justify-evenly gap-8 p-6">
          {featureItems.map((item) => (
            <div key={item.id} className="group">
              <FeatureItem
                {...item}
                id={item.id}
                backgroundUrl={item.backgroundUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </BackgroundCard>
  );
}

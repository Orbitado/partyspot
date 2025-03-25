import LeftSideImage from "./left-side-image";
import FeatureList from "./feature-list";

export default function FaqCard() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl">
      {/* Card section */}
      <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative h-64 lg:h-full">
          <LeftSideImage />
        </div>

        {/* Right side - Feature List */}
        <div className="bg-white p-6">
          <FeatureList />
        </div>
      </div>
    </div>
  );
}

import LeftSideImage from "./left-side-image";
import FeatureList from "./feature-list";

export default function FaqCard() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl">
      {/* Card section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side */}
        <LeftSideImage />

        {/* Left side */}
        <FeatureList />
      </div>
    </div>
  );
}

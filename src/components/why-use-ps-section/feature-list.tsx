"use client";
import { featureItems } from "@/src/data/feature-items";
import FeatureItem from "./feature-item";

export default function FeatureList() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-8 p-12">
      {featureItems.map((item) => (
        <div key={item.title} className="group">
          <FeatureItem {...item} id={item.title} />
        </div>
      ))}
    </div>
  );
}

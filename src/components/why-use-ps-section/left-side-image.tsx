"use client";
import Image from "next/image";
import { useStore } from "@/src/store";

export default function LeftSideImage() {
  const selectedBackgroundUrl = useStore(
    (state) => state.selectedBackgroundUrl
  );

  return (
    <div className="relative h-full w-full">
      <Image
        src={selectedBackgroundUrl || "/images/girl-connecting.webp"}
        alt="PartySpot"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}

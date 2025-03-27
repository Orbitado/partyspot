"use client";
import { useStore } from "@/src/store";
import React from "react";
import Image from "next/image";

export default function ImageContainer() {
  const { selectedOption } = useStore((state) => state);

  return (
    <div className="h-48 w-full overflow-hidden rounded-lg sm:absolute sm:right-4 sm:h-full sm:rounded-2xl md:right-6 md:w-3/5 lg:right-6 lg:w-3/5 xl:right-8">
      <Image
        src={selectedOption?.imageUrl || "/images/events/default.jpg"}
        alt={selectedOption?.alt || "Evento"}
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
        sizes="(max-width: 640px) 100vw, 60vw"
        priority
      />
    </div>
  );
}

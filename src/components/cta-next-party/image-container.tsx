"use client";
import { useStore } from "@/src/store";
import React from "react";
import Image from "next/image";

export default function ImageContainer() {
  const { selectedOption } = useStore((state) => state);

  return (
    <div className="w-full sm:absolute sm:right-0 sm:h-full lg:w-1/2">
      <Image
        src={selectedOption?.imageUrl || "/images/events/default.jpg"}
        alt={selectedOption?.alt || "Evento"}
        className="h-full w-full rounded-4xl object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
}

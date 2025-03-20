"use client";
import { useHeroStore } from "@/src/providers/hero-store-provider";
import WaveUnderline from "@/src/components/common/wave-underline";

export default function HeroText() {
  const { highlight, text } = useHeroStore((state) => state);
  return (
    <h1 className="flex w-full flex-col items-center justify-center text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
      <span className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
        <WaveUnderline>{highlight}</WaveUnderline>
        <br />
        {text}
      </span>
    </h1>
  );
}

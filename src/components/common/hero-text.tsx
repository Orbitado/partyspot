"use client";
import { useStore } from "@/src/store";
import WaveUnderline from "@/src/components/common/wave-underline";

export default function HeroText() {
  const highlight = useStore((state) => state.highlight);
  const text = useStore((state) => state.text);

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

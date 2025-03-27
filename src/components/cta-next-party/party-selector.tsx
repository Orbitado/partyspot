"use client";

import React from "react";
import ImageContainer from "./image-container";
import { PartyButtons } from "./party-buttons";

export const PartySelector = () => {
  const titleSection = (
    <div className="from-primary/90 to-primary rounded-lg bg-gradient-to-r p-4">
      <h1 className="text-lg font-bold text-white sm:text-3xl md:text-4xl">
        ¿Cuál será tu próxima fiesta?
      </h1>
    </div>
  );

  const contentSection = (
    <div className="flex w-full max-w-xl flex-col gap-4 rounded-2xl bg-gray-100/80 p-6 backdrop-blur-sm">
      <h3 className="text-secondary text-lg font-medium">
        Reserva un lugar único para tu evento.
      </h3>
      <PartyButtons />
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
      {/* Mobile view (hidden on sm and up) */}
      <div className="flex w-full flex-col gap-5 sm:hidden">
        <div className="self-center">{titleSection}</div>
        <div className="mx-4 mb-5">{contentSection}</div>
      </div>

      {/* Image container */}
      <div className="relative mx-auto w-full max-w-7xl sm:h-[550px]">
        {/* Image takes half width on larger screens */}
        <ImageContainer />

        {/* Desktop title (hidden on mobile) */}
        <div className="top-12 left-1/9 hidden sm:absolute sm:block">
          {titleSection}
        </div>

        {/* Desktop content (hidden on mobile) */}
        <div className="top-36 left-1/9 hidden sm:absolute sm:block">
          {contentSection}
        </div>

        {/* Location badge */}
        <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="white"
              />
            </svg>
            <span className="font-medium">Casa Party</span>
            <span className="text-xs text-gray-200">San Miguel, Tucumán</span>
          </div>
        </div>
      </div>
    </div>
  );
};

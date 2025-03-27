"use client";

import React from "react";
import ImageContainer from "./image-container";
import { PartyButtons } from "./party-buttons";
import { MapPin } from "lucide-react";

export const PartySelector = () => {
  const titleSection = (
    <div className="from-primary/90 to-primary rounded-lg bg-gradient-to-r p-3 sm:p-4 md:p-5">
      <h1 className="text-center text-xl font-bold text-white sm:text-left md:text-2xl lg:text-2xl xl:text-3xl">
        ¿Cuál será tu próxima fiesta?
      </h1>
    </div>
  );

  const contentSection = (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-gray-100/80 p-4 backdrop-blur-sm sm:p-5 md:gap-4 md:p-6 lg:p-6">
      <h3 className="text-secondary text-center text-sm font-medium sm:text-left sm:text-base md:text-lg lg:text-lg">
        Reserva un lugar único para tu evento.
      </h3>
      <PartyButtons />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Mobile view (hidden on sm and up) */}
      <div className="flex w-full flex-col gap-4 sm:hidden">
        <div className="self-center">{titleSection}</div>
        <div className="mx-auto mb-4 w-full">{contentSection}</div>
      </div>

      {/* Image container */}
      <div className="relative mx-auto w-full max-w-7xl sm:h-[400px] md:h-[450px] lg:h-[450px] xl:h-[500px]">
        {/* Image takes half width on larger screens */}
        <ImageContainer />

        {/* Desktop title (hidden on mobile) */}
        <div className="hidden sm:absolute sm:top-6 sm:left-4 sm:block sm:max-w-[60%] md:top-8 md:left-6 md:max-w-[50%] lg:top-8 lg:left-6 lg:max-w-[50%] xl:top-10 xl:left-8">
          {titleSection}
        </div>

        {/* Desktop content (hidden on mobile) */}
        <div className="hidden sm:absolute sm:top-24 sm:left-4 sm:block sm:max-w-[70%] md:top-28 md:left-6 md:max-w-[55%] lg:top-28 lg:left-6 lg:max-w-[55%] xl:top-32 xl:left-8">
          {contentSection}
        </div>

        {/* Location badge */}
        <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm sm:right-1/16 sm:px-3 sm:py-1.5 sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-medium">Casa Party</span>
            <span className="xs:inline hidden text-xs text-gray-200">
              San Miguel, Tucumán
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

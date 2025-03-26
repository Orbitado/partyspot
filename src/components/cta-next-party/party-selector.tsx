"use client";

import React from "react";
import { PartyOptionButton } from "./party-option-button";
import { partyOptions } from "@/src/data/party-options";
import { usePartySelection } from "@/src/hooks/use-party-selection";

export const PartySelector = () => {
  const { selectedParty, selectedOption, handlePartySelect } =
    usePartySelection();

  const partyButtons = (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {partyOptions.map((option) => (
        <PartyOptionButton
          key={option.id}
          option={option}
          isSelected={selectedParty === option.id}
          onClick={handlePartySelect}
        />
      ))}
    </div>
  );

  const titleSection = (
    <div className="rounded-lg bg-gradient-to-r from-[#E6267B] to-[#E3004C] p-4">
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
      {partyButtons}
    </div>
  );

  return (
    <div className="relative flex flex-col sm:block">
      {/* Mobile view (hidden on sm and up) */}
      <div className="flex flex-col gap-5 sm:hidden">
        <div className="self-center">{titleSection}</div>
        <div className="mx-4 mb-5">{contentSection}</div>
      </div>

      {/* Image container */}
      <div className="relative w-full sm:h-[550px]">
        {/* Image takes half width on larger screens */}
        <div className="w-full sm:absolute sm:right-0 sm:h-full lg:w-1/2">
          <img
            src={selectedOption?.imageUrl || "/images/events/default.jpg"}
            alt={selectedOption?.alt || "Evento"}
            className="h-full w-full rounded-4xl object-cover"
          />
        </div>

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

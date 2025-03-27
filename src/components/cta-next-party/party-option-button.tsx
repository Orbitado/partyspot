"use client";
import { PartyOption, PartyType } from "@/src/types/party";
import React from "react";
import { useStore } from "@/src/store";

interface PartyOptionButtonProps {
  option: PartyOption;
}

export const PartyOptionButton: React.FC<PartyOptionButtonProps> = ({
  option
}) => {
  const { selectedParty, handlePartySelect } = useStore();
  const isSelected = selectedParty === option.id;

  return (
    <button
      onClick={() => handlePartySelect(option.id as PartyType)}
      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all sm:gap-2 sm:px-4 sm:py-2 md:gap-2 md:px-4 md:py-2 lg:gap-2 lg:px-4 lg:py-2 ${
        isSelected
          ? "from-primary/80 to-primary bg-gradient-to-r text-white"
          : "text-secondary bg-white hover:bg-gray-100"
      } text-xs font-medium shadow-sm sm:text-sm md:text-sm lg:text-sm`}
    >
      <span
        className="shrink-0 text-base sm:text-lg md:text-lg lg:text-lg"
        aria-hidden="true"
      >
        {option.icon}
      </span>
      <span className="truncate">{option.label}</span>
    </button>
  );
};

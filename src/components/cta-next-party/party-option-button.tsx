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
      className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
        isSelected
          ? "from-primary/80 to-primary bg-gradient-to-r text-white"
          : "text-secondary bg-white hover:bg-gray-100"
      } text-sm font-medium shadow-sm`}
    >
      <span className="text-lg" aria-hidden="true">
        {option.icon}
      </span>
      {option.label}
    </button>
  );
};

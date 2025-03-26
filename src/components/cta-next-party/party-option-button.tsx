import { PartyOption } from "@/src/types/party";
import React from "react";

interface PartyOptionButtonProps {
  option: PartyOption;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const PartyOptionButton: React.FC<PartyOptionButtonProps> = ({
  option,
  isSelected,
  onClick
}) => {
  return (
    <button
      onClick={() => onClick(option.id)}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
        isSelected
          ? "bg-gradient-to-r from-[#E6267B] to-[#E3004C] text-white"
          : "text-secondary bg-white hover:bg-gray-100"
      } text-sm font-medium shadow-sm`}
    >
      <span className="text-lg">{option.icon}</span>
      {option.label}
    </button>
  );
};

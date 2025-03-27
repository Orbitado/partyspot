"use client";
import { PartyOptionButton } from "./party-option-button";
import { partyOptions } from "@/src/data/party-options";

export const PartyButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {partyOptions.map((option) => (
        <PartyOptionButton key={option.id} option={option} />
      ))}
    </div>
  );
};

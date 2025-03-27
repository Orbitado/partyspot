"use client";
import { PartyOptionButton } from "./party-option-button";
import { partyOptions } from "@/src/data/party-options";

export const PartyButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
      {partyOptions.map((option) => (
        <PartyOptionButton key={option.id} option={option} />
      ))}
    </div>
  );
};

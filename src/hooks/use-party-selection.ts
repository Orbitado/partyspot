import { useState } from "react";
import { PartyType } from "@/src/types/party";
import { partyOptions } from "@/src/data/party-options";

export function usePartySelection() {
  const [selectedParty, setSelectedParty] = useState<PartyType>("boda");

  const selectedOption = partyOptions.find(
    (option) => option.id === selectedParty
  );

  const handlePartySelect = (id: string) => {
    setSelectedParty(id as PartyType);
  };

  return {
    selectedParty,
    selectedOption,
    handlePartySelect
  };
}

import { PartyType } from "@/src/types/party";
import { partyOptions } from "@/src/data/party-options";
import { StateCreator } from "zustand";

export interface PartySlice {
  selectedParty: PartyType;
  selectedOption: (typeof partyOptions)[0] | undefined;
  handlePartySelect: (id: PartyType) => void;
}

export const createPartySlice: StateCreator<PartySlice> = (set) => ({
  selectedParty: "boda",
  selectedOption: partyOptions.find((option) => option.id === "boda"),
  handlePartySelect: (id: PartyType) => {
    set({
      selectedParty: id,
      selectedOption: partyOptions.find((option) => option.id === id)
    });
  }
});

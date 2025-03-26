export interface PartyOption {
  id: string;
  label: string;
  icon: string;
  imageUrl: string;
  alt: string;
}

export type PartyType =
  | "boda"
  | "comunion"
  | "cumpleanos"
  | "fiesta"
  | "quince"
  | "musica"
  | "asadito";

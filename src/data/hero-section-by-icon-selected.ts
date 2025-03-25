import { HeroSectionByIconSelected } from "@/src/types";
import { House, Cake, GraduationCap, Heart } from "lucide-react";

export const heroSectionByIconSelected: HeroSectionByIconSelected[] = [
  {
    highlight: "Tu cumpleaños",
    text: "en espacios excepcionales.",
    icon: Cake,
    backgroundUrl: "/under-water.webp"
  },
  {
    highlight: "Tu fiesta",
    text: "en ambientes exclusivos.",
    icon: House,
    backgroundUrl: "/pink-space.webp"
  },
  {
    highlight: "Tu logro",
    text: "en escenarios inspiradores.",
    icon: GraduationCap,
    backgroundUrl: "/happy-people.webp"
  },
  {
    highlight: "Sí, quiero",
    text: "en entornos inolvidables.",
    icon: Heart,
    backgroundUrl: "/wedding-party.webp"
  }
];

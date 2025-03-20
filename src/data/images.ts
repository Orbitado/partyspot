import { ImageItem } from "@/src/types";
import { MenuIcon, UserIcon } from "lucide-react";

export const images: ImageItem = {
  logo: {
    icon: "/ps-logo.svg",
    text: "/ps-logo-text.svg"
  },
  icons: {
    menu: MenuIcon,
    profile: UserIcon
  }
} as const;

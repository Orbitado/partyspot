"use client";

import React from "react";
import NavLinks from "./nav-links";
import { useStore } from "@/src/store";

const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen } = useStore();

  return (
    <div
      className={`overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
        isMobileMenuOpen
          ? "max-h-[300px] animate-[slideDown_0.3s_ease-in-out]"
          : "max-h-0 animate-[slideUp_0.3s_ease-in-out]"
      }`}
      role="menu"
    >
      <div className="px-4 py-3">
        <NavLinks isMobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;

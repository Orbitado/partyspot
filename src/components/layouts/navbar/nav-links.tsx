"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { navLinks } from "@/src/data/nav-links";

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false }) => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = useCallback((id: string) => {
    setActiveLink(id);
  }, []);

  return (
    <div
      className={`${
        isMobile
          ? "flex w-full flex-col space-y-4 text-center"
          : "flex w-full items-center justify-center gap-2 lg:gap-6 xl:gap-8"
      }`}
    >
      {navLinks.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          onClick={() => handleLinkClick(id)}
          className={`navbar-link transition-colors duration-200 ${
            activeLink === id ? "navbar-link-active" : ""
          } ${isMobile ? "block w-full py-2" : "whitespace-nowrap"}`}
          aria-current={activeLink === id ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { navLinks } from "@/src/data/nav-links";

const NavLinks: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = useCallback((id: string) => {
    setActiveLink(id);
  }, []);

  return (
    <div className="hidden items-center gap-0 sm:gap-2 md:flex lg:gap-8 xl:gap-20">
      {navLinks.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          onClick={() => handleLinkClick(id)}
          className={`navbar-link transition-colors duration-200 ${
            activeLink === id ? "navbar-link-active" : ""
          }`}
          aria-current={activeLink === id ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

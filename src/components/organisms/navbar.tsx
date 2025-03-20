"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/src/data/nav-links";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [activeLink, setActiveLink] = useState<string>("Inicio");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav
      className={`fixed flex h-20 w-full items-center justify-between bg-white px-4 lg:px-24 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo Section */}
      <div className="flex h-14 w-36 items-center gap-2">
        <Image
          src="/ps-logo.svg"
          alt="PartySpot Logo"
          width={38}
          height={50}
          priority
        />
        <Image
          src="/ps-logo-text.svg"
          alt="PartySpot"
          width={85}
          height={69}
          priority
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden items-center gap-0 sm:gap-2 md:flex lg:gap-8 xl:gap-20">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleLinkClick(link)}
            className={`navbar-link ${activeLink === link ? "navbar-link-active" : ""}`}
            aria-current={activeLink === link ? "page" : undefined}
          >
            {link}
          </button>
        ))}
      </div>

      {/* User Actions */}
      <div className="border-gray flex items-center gap-1 rounded-full border-2 px-2.5 py-1.5">
        <button className="cursor-pointer md:hidden" aria-label="Toggle menu">
          <Image src="/menu-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="cursor-pointer" aria-label="User profile">
          <Image src="/profile-icon.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

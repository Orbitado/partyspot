"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/src/data/nav-links";
import { IMAGES } from "@/src/data/images";
import type { NavbarProps } from "@/src/types/navigation";

/**
 * Navbar Component
 *
 * @param className - Optional CSS class name for custom styling
 * @param onMenuToggle - Optional callback for menu toggle button click
 * @param onProfileClick - Optional callback for profile button click
 */
const Navbar: React.FC<NavbarProps> = ({
  className = "",
  onMenuToggle,
  onProfileClick
}) => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = useCallback((id: string) => {
    setActiveLink(id);
  }, []);

  return (
    <nav
      className={`fixed flex h-20 w-full items-center justify-between bg-white px-4 shadow-sm lg:px-24 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo Section */}
      <Link href="/" className="flex h-14 w-36 items-center gap-2">
        <Image
          src={IMAGES.LOGO.ICON}
          alt="PartySpot Logo"
          width={38}
          height={50}
          priority
        />
        <Image
          src={IMAGES.LOGO.TEXT}
          alt="PartySpot"
          width={85}
          height={69}
          priority
        />
      </Link>

      {/* Navigation Links */}
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

      {/* User Actions */}
      <div className="border-gray flex items-center gap-1 rounded-full border-2 px-2.5 py-1.5">
        <button
          className="cursor-pointer md:hidden"
          aria-label="Toggle menu"
          onClick={onMenuToggle}
        >
          <Image src={IMAGES.ICONS.MENU} alt="" width={20} height={20} />
        </button>
        <button
          className="cursor-pointer"
          aria-label="User profile"
          onClick={onProfileClick}
        >
          <Image src={IMAGES.ICONS.PROFILE} alt="" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

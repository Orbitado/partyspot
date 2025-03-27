"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/src/data/images";
import type { NavbarProps } from "@/src/types";
import NavLinks from "./nav-links";
import UserActions from "./user-actions";

const Navbar: React.FC<NavbarProps> = ({
  className = "",
  onMenuToggle,
  onProfileClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (onMenuToggle) onMenuToggle();
  };

  return (
    <header
      className={`fixed z-50 w-full bg-white shadow-md transition-all duration-300 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-2 items-center px-4 sm:px-6 md:h-20 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Image
              src={images.logo.icon}
              alt="PartySpot Logo"
              width={25}
              height={35}
              className="h-auto w-6 md:w-7"
              priority
            />
            <Image
              src={images.logo.text}
              alt="PartySpot"
              width={70}
              height={60}
              className="h-auto w-16 md:w-[70px]"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="mx-4 hidden md:block">
          <NavLinks />
        </div>

        {/* User Actions - Right */}
        <div className="flex items-center justify-end">
          <div className="hidden md:block">
            <UserActions
              onMenuToggle={handleMenuToggle}
              onProfileClick={onProfileClick}
            />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <UserActions
              onMenuToggle={handleMenuToggle}
              onProfileClick={onProfileClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[300px] animate-[slideDown_0.3s_ease-in-out]"
            : "max-h-0 animate-[slideUp_0.3s_ease-in-out]"
        }`}
        role="menu"
      >
        <div className="px-4 py-3">
          <NavLinks isMobile={true} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

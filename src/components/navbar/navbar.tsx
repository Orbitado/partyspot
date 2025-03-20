import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/src/data/images";
import type { NavbarProps } from "@/src/types/navigation";
import NavLinks from "./nav-links";
import UserActions from "./user-actions";

const Navbar: React.FC<NavbarProps> = ({
  className = "",
  onMenuToggle,
  onProfileClick
}) => {
  return (
    <nav
      className={`fixed flex h-20 w-full items-center justify-between bg-white px-4 shadow-sm lg:px-24 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo Section */}
      <Link href="/" className="flex h-14 w-36 items-center gap-2">
        <Image
          src={images.logo.icon}
          alt="PartySpot Logo"
          width={38}
          height={50}
          priority
        />
        <Image
          src={images.logo.text}
          alt="PartySpot"
          width={85}
          height={69}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <NavLinks />

      {/* User Actions */}
      <UserActions
        onMenuToggle={onMenuToggle}
        onProfileClick={onProfileClick}
      />
    </nav>
  );
};

export default Navbar;

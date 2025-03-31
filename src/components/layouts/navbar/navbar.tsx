import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/src/data/images";
import type { NavbarProps } from "@/src/types";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
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
            className="flex items-center gap-1 transition-opacity hover:opacity-90 sm:gap-2"
          >
            <Image
              src={images.logo.icon}
              alt="PartySpot Logo"
              width={25}
              height={35}
              className="h-auto w-5 sm:w-6 md:w-7 lg:w-8"
              priority
            />
            <Image
              src={images.logo.text}
              alt="PartySpot"
              width={70}
              height={60}
              className="h-auto w-14 sm:w-16 md:w-[70px] lg:w-[80px]"
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
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu />
    </header>
  );
};

export default Navbar;

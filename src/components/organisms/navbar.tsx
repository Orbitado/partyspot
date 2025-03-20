"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/src/data/nav-links";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Inicio");

  return (
    <div className="fixed flex h-20 w-full items-center justify-between bg-white px-4 lg:px-24">
      <div className="flex h-14 w-36 items-center gap-2">
        <Image src={"/ps-logo.svg"} alt="logo" width={38} height={50} />
        <Image src={"/ps-logo-text.svg"} alt="logo" width={85} height={69} />
      </div>
      <div className="hidden items-center gap-0 sm:gap-2 md:flex lg:gap-8 xl:gap-20">
        {navLinks.map((link) => (
          <div
            key={link}
            onClick={() => setActiveLink(link)}
            className={`navbar-link ${activeLink === link ? "navbar-link-active" : ""}`}
          >
            {link}
          </div>
        ))}
      </div>
      <div className="border-gray flex items-center gap-1 rounded-full border-2 px-2.5 py-1.5">
        <Image
          className="cursor-pointer"
          src={"/menu-icon.svg"}
          alt="menu"
          width={20}
          height={20}
        />
        <Image
          className="cursor-pointer"
          src={"/profile-icon.svg"}
          alt="profile"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;

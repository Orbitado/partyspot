"use client";

import React from "react";
import { images } from "@/src/data/images";

interface UserActionsProps {
  onMenuToggle?: () => void;
  onProfileClick?: () => void;
}

const UserActions: React.FC<UserActionsProps> = ({
  onMenuToggle,
  onProfileClick
}) => {
  const { menu: MenuIcon, profile: ProfileIcon } = images.icons;

  return (
    <div className="border-gray flex items-center gap-1 rounded-full border-2 px-2.5 py-1.5">
      <button
        className="cursor-pointer md:hidden"
        aria-label="Toggle menu"
        onClick={onMenuToggle}
      >
        <MenuIcon />
      </button>
      <button
        className="cursor-pointer"
        aria-label="User profile"
        onClick={onProfileClick}
      >
        <ProfileIcon />
      </button>
    </div>
  );
};

export default UserActions;

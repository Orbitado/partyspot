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
    <div className="flex items-center gap-2">
      <button
        className="flex cursor-pointer items-center justify-center p-2 text-gray-700 transition-colors hover:text-gray-900 md:hidden"
        aria-label="Toggle menu"
        onClick={onMenuToggle}
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      <button
        className="flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 p-2 transition-all hover:border-gray-300"
        aria-label="User profile"
        onClick={onProfileClick}
      >
        <ProfileIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default UserActions;

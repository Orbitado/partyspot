"use client";
import { images } from "@/src/data/images";
import { useStore } from "@/src/store";

interface UserActionsProps {
  onMenuToggle?: () => void;
  onProfileClick?: () => void;
}

const UserActions: React.FC<UserActionsProps> = ({
  onMenuToggle,
  onProfileClick
}) => {
  const { menu: MenuIcon, profile: ProfileIcon } = images.icons;
  const { toggleMobileMenu } = useStore();

  const handleMenuToggle = () => {
    toggleMobileMenu();

    if (onMenuToggle) onMenuToggle();
  };

  const handleProfileClick = () => {
    if (onProfileClick) onProfileClick();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex cursor-pointer items-center justify-center p-2 text-gray-700 transition-colors hover:text-gray-900 md:hidden"
        aria-label="Toggle menu"
        onClick={handleMenuToggle}
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      <button
        className="flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 p-2 transition-all hover:border-gray-300"
        aria-label="User profile"
        onClick={handleProfileClick}
      >
        <ProfileIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default UserActions;

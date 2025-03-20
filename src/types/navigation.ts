export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
  onMenuToggle?: () => void;
  onProfileClick?: () => void;
}

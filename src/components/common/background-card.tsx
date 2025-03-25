import React from "react";

interface BackgroundCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function BackgroundCard({
  children,
  className = "",
  hoverEffect = true
}: BackgroundCardProps) {
  return (
    <div
      className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl ${hoverEffect && "transition-all hover:shadow-2xl"} ${className}`}
    >
      {children}
    </div>
  );
}

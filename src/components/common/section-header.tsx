import Image from "next/image";
import { ElementType } from "react";

interface SectionHeaderProps {
  title: string;
  image: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export default function SectionHeader({
  title,
  image,
  as = "h2",
  className = ""
}: SectionHeaderProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={`mb-12 flex flex-col items-center justify-center text-3xl font-bold sm:flex-row sm:gap-4 sm:text-4xl md:text-6xl ${className}`}
    >
      <span className="pb-1">{title}</span>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="h-auto w-52 sm:w-64 md:w-72"
        priority
      />
    </Tag>
  );
}

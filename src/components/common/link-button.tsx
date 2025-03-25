import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};

export default function LinkButton({
  href,
  size = "md",
  children
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-pink-600 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-pink-700 hover:shadow-xl ${
        buttonSizes[size]
      }`}
    >
      {children}
    </Link>
  );
}

"use client";
import { useHeroStore } from "@/src/providers/hero-store-provider";

interface BackgroundPageContainerProps {
  children: React.ReactNode;
}

export default function BackgroundPageContainer({
  children
}: BackgroundPageContainerProps) {
  const { backgroundUrl } = useHeroStore((state) => state);

  return (
    <div
      className="animate-fadeIn container mx-auto grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-center gap-4 after:absolute after:inset-0 after:-z-50 after:bg-cover after:bg-center after:opacity-40 after:transition-all after:duration-700 after:ease-in-out"
      style={
        {
          "--bg-url": `url(${backgroundUrl})`
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        div::after {
          background-image: var(--bg-url);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
      `}</style>
      {children}
    </div>
  );
}

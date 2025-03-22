"use client";
import { useStore } from "@/src/store";

interface BackgroundPageContainerProps {
  children: React.ReactNode;
}

export default function BackgroundPageContainer({
  children
}: BackgroundPageContainerProps) {
  const backgroundUrl = useStore((state) => state.backgroundUrl);

  return (
    <div
      className="animate-fadeIn container mx-auto mb-12 grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-center gap-4 text-white before:absolute before:inset-0 before:-z-50 before:bg-black before:opacity-90 before:transition-all before:duration-700 before:ease-in-out after:absolute after:inset-0 after:-z-50 after:bg-cover after:bg-center after:opacity-40 after:transition-all after:duration-700 after:ease-in-out sm:mb-16 md:mb-20"
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

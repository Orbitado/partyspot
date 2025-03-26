"use client";

import { madeWithPSImages } from "@/src/data/made-with-ps-images";
import ImageSlider from "@/src/components/made-with-ps-section/image-slider";

export default function ImageGrid() {
  const tripleImages = [
    ...madeWithPSImages,
    ...madeWithPSImages,
    ...madeWithPSImages
  ];

  return (
    <div className="relative -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
      {/* First slider */}
      <ImageSlider images={tripleImages} direction="left" />

      {/* Second slider (reversed) */}
      <ImageSlider images={tripleImages} direction="right" />

      <style jsx global>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-200% / 3));
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(calc(-200% / 3));
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 15s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scrollRight 15s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

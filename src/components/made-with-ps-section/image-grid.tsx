"use client";

import Image from "next/image";
import { madeWithPSImages } from "@/src/data/made-with-ps-images";

export default function ImageGrid() {
  const tripleImages = [
    ...madeWithPSImages,
    ...madeWithPSImages,
    ...madeWithPSImages
  ];

  return (
    <div className="relative -mx-4 w-screen overflow-hidden sm:-mx-6 lg:-mx-8">
      {/* First slider */}
      <div className="animate-scroll-left flex gap-4 pb-4 pl-4 sm:pl-6 lg:pl-8">
        {tripleImages.map((image, index) => (
          <div
            key={`left-${image.id}-${index}`}
            className="group relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-64 sm:w-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 288px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute right-0 bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-center text-2xl font-medium">
                {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second slider (reversed) */}
      <div className="animate-scroll-right flex gap-4 pl-4 sm:pl-6 lg:pl-8">
        {tripleImages.map((image, index) => (
          <div
            key={`right-${image.id}-${index}`}
            className="group relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-64 sm:w-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 288px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute right-0 bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

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

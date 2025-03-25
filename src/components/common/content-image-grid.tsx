import React from "react";
import Image from "next/image";

interface ContentImageGridProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "right" | "left";
  imageOverlay?: boolean;
  imageClassName?: string;
}

export default function ContentImageGrid({
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageOverlay = true,
  imageClassName = ""
}: ContentImageGridProps) {
  const gridColumnClass =
    imagePosition === "right"
      ? "lg:grid-cols-4"
      : "lg:grid-cols-4 lg:grid-flow-dense";

  const contentClass =
    imagePosition === "right"
      ? "lg:col-span-2"
      : "lg:col-span-2 lg:col-start-3";

  const imageClass =
    imagePosition === "right"
      ? "lg:col-span-2 lg:col-start-3"
      : "lg:col-span-2 lg:col-start-1";

  return (
    <div className={`grid grid-rows-[1fr_1/4] ${gridColumnClass}`}>
      {/* Contenido */}
      <div
        className={`flex flex-col justify-center p-8 md:p-12 ${contentClass}`}
      >
        <div className="mx-auto max-w-xl">{children}</div>
      </div>

      {/* Imagen */}
      <div className={`relative ${imageClass}`}>
        <div className={`h-full min-h-[400px] ${imageClassName}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
          {imageOverlay && (
            <div className="from-primary/40 lg:to-primary/40 absolute inset-0 bg-gradient-to-b to-transparent lg:from-transparent"></div>
          )}
        </div>
      </div>
    </div>
  );
}

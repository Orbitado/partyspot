import Image from "next/image";

interface ImageType {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface ImageSliderProps {
  images: ImageType[];
  direction: "left" | "right";
}

export default function ImageSlider({ images, direction }: ImageSliderProps) {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className={`flex gap-4 pb-4 pl-4 sm:pl-6 lg:pl-8 ${animationClass}`}>
      {images.map((image, index) => (
        <div
          key={`${direction}-${image.id}-${index}`}
          className="group relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-64 sm:w-80"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 288px, 320px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute right-0 bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-center text-2xl font-medium">{image.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

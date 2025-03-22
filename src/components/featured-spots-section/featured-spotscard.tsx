import Image from "next/image";
import Link from "next/link";
import { Star, Share, Heart, MapPin } from "lucide-react";

export interface CardProps {
  id?: string;
  title: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
  href: string;
  location: string;
  availability: string;
}

export default function FeaturedSpotsCard({
  title,
  price,
  rating,
  reviewCount,
  location,
  availability,
  href,
  imageUrl
}: CardProps) {
  const hasRating = rating && rating > 0;
  const ratingValue = hasRating && rating.toFixed(1);
  const spotPrice = price.toLocaleString();

  return (
    <article
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link
        href={href}
        className="block"
        aria-label={`Ver detalles de ${title}`}
      >
        {/* Image container with overlay */}
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <Image
            src={imageUrl}
            alt={`Imagen de ${title} - Espacio para eventos`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            width={1000}
            height={1000}
            className="aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:aspect-9/16"
            itemProp="image"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
            aria-hidden="true"
          />

          {/* Social buttons */}
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <CardActionButton
              icon={<Share className="h-4 w-4 sm:h-5 sm:w-5" />}
              label="Compartir"
            />
            <CardActionButton
              icon={<Heart className="h-4 w-4 sm:h-5 sm:w-5" />}
              label="Agregar a favoritos"
            />
          </div>

          {/* Card content */}
          <div className="absolute bottom-0 left-0 w-full p-3 text-white sm:p-4">
            <h3 className="mb-1 text-xl sm:text-2xl" itemProp="name">
              {title}
            </h3>
            <div className="flex items-baseline gap-1">
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <meta itemProp="priceCurrency" content="ARS" />
                <span
                  className="text-xl font-bold sm:text-2xl"
                  itemProp="price"
                  content={price.toString()}
                >
                  ${spotPrice}
                </span>
                <span className="text-xs font-light sm:text-sm">/hs</span>
              </div>

              {hasRating && (
                <div
                  className="ml-auto flex items-center gap-1"
                  itemProp="aggregateRating"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <Star
                    className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-medium sm:text-sm"
                    itemProp="ratingValue"
                  >
                    {ratingValue}
                  </span>
                  {reviewCount && (
                    <>
                      <span className="text-xs text-gray-300">
                        (<span itemProp="reviewCount">{reviewCount}</span>)
                      </span>
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="mt-2 grid grid-cols-2 items-center gap-2 text-xs sm:gap-4 sm:text-sm">
              <span
                className="h-5 truncate overflow-hidden whitespace-nowrap text-gray-200"
                title={availability}
              >
                {availability}
              </span>
              <span
                className="flex h-5 items-center gap-1 truncate overflow-hidden whitespace-nowrap"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                title={location}
              >
                <MapPin
                  className="size-3 flex-shrink-0 sm:size-4"
                  aria-hidden="true"
                />
                <span className="truncate" itemProp="addressRegion">
                  {location}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

interface CardActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardActionButton = ({ icon, label, onClick }: CardActionButtonProps) => {
  return (
    <button
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:h-10 sm:w-10"
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      {icon}
    </button>
  );
};

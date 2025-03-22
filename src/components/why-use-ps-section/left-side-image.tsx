import Image from "next/image";

const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 800;

// const faqSection = [
//   {
//     src: "/images/girl-connecting.webp"
//   },
//   {
//     src: "/images/good-budgets.webp"
//   },
//   {
//     src: "/images/secure-payments.webp"
//   }
// ];

export default function LeftSideImage() {
  return (
    <div className="hidden md:block">
      <Image
        src="/images/girl-connecting.webp"
        alt="PartySpot"
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
  );
}

import Image from "next/image";

interface PartySpotLogoWithTextProps {
  logoSize?: number;
  textSize?: number;
}

function PartySpotLogoWithText({
  logoSize = 12,
  textSize = 24
}: PartySpotLogoWithTextProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/ps-logo.svg"
        alt="PartySpot"
        width={180}
        height={60}
        className={`${logoSize ? `size-${logoSize}` : "size-24"}`}
        priority
      />
      <Image
        src="/ps-logo-text.svg"
        alt="PartySpot"
        width={180}
        height={60}
        className={`${textSize ? `size-${textSize}` : "size-12"}`}
        priority
      />
    </div>
  );
}

export default PartySpotLogoWithText;

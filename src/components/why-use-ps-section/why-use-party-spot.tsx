import Image from "next/image";
import FaqCard from "./faq-card";

export default function WhyUsePartySpot() {
  return (
    <section className="mb-12 sm:mb-16 md:mb-20">
      <article className="container mx-auto px-4">
        <h2 className="text-secondary mb-12 flex flex-col items-center justify-center text-3xl font-bold sm:flex-row sm:gap-4 sm:text-4xl md:text-6xl">
          <span className="pb-1">¿Por qué usar</span>
          <div className="flex items-center">
            <Image
              src="/ps-logo-text-flex.svg"
              alt="PartySpot Logo"
              width={400}
              height={400}
              className="h-auto w-52 sm:w-64 md:w-72"
            />
            <span className="pb-2">?</span>
          </div>
        </h2>
        <FaqCard />
      </article>
    </section>
  );
}

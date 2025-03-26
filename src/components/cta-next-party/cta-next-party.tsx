import React from "react";
import { PartySelector } from "./party-selector";

const NextParty = () => {
  return (
    <section className="text-secondary mb-12 h-full sm:mb-16 md:mb-20">
      <article className="mx-auto h-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <PartySelector />
      </article>
    </section>
  );
};

export default NextParty;

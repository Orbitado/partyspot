import React from "react";
import { PartySelector } from "./party-selector";

const NextParty = () => {
  return (
    <section className="text-secondary mx-auto mb-8 h-full max-w-7xl px-4 sm:px-6 md:mb-16 lg:mb-16 lg:px-8">
      <article className="h-full overflow-hidden">
        <PartySelector />
      </article>
    </section>
  );
};

export default NextParty;

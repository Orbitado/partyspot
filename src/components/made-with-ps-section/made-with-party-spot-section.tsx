import SectionHeader from "../common/section-header";
import ImageGrid from "./image-grid";

export default function MadeWithPartySpotSection() {
  return (
    <section className="text-secondary mb-12 sm:mb-16 md:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hecho con"
          image="/ps-logo-text-flex.svg"
          className="mb-8 sm:mb-12"
        />
      </div>
      <ImageGrid />
    </section>
  );
}

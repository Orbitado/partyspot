import HeroIconList from "@/src/components/molecules/hero-icon-list";
import WaveUnderline from "@/src/components/atoms/wave-underline";
import BackgroundPageContainer from "@/src/components/atoms/background-page-container";
import SearchField from "@/src/components/molecules/search-field";

export default function HeroSection() {
  return (
    <BackgroundPageContainer>
      <section className="row-span-1 row-start-2 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 space-y-8 px-4 sm:px-6 lg:px-8">
        <HeroIconList />
        <h1 className="max-w-4xl text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
          <span>
            Decí <WaveUnderline>&quot;Si quiero&quot;</WaveUnderline> en el
            lugar de tus sueños.
          </span>
        </h1>
        <h2 className="sr-only">Encuentra tu evento ideal</h2>
        <div className="w-full max-w-6xl" aria-labelledby="search-heading">
          <span id="search-heading" className="sr-only">
            Busca eventos por actividad, ubicación y fecha
          </span>
          <SearchField />
        </div>
      </section>
    </BackgroundPageContainer>
  );
}

import HeroIconList from "@/src/components/molecules/hero-icon-list";
import WaveUnderline from "@/src/components/atoms/wave-underline";
import BackgroundPageContainer from "@/src/components/atoms/background-page-container";
import SearchField from "@/src/components/molecules/search-field";

export default function HeroSection() {
  return (
    <BackgroundPageContainer>
      <section className="row-span-1 row-start-2 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 space-y-8">
        <HeroIconList />
        <h1 className="max-w-4xl text-center text-7xl font-bold">
          <span>
            Decí <WaveUnderline>&quot;Si quiero&quot;</WaveUnderline> en el
            lugar de tus sueños.
          </span>
        </h1>
        <h2 className="sr-only">Encuentra tu evento ideal</h2>
        <div className="w-6xl" aria-labelledby="search-heading">
          <span id="search-heading" className="sr-only">
            Busca eventos por actividad, ubicación y fecha
          </span>
          <SearchField />
        </div>
      </section>
    </BackgroundPageContainer>
  );
}

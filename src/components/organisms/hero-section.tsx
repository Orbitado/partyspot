import HeroIconList from "@/src/components/molecules/hero-icon-list";
import WaveUnderline from "@/src/components/atoms/wave-underline";
import BackgroundPageContainer from "@/src/components/atoms/background-page-container";
import SearchField from "@/src/components/molecules/search-field";

export default function HeroSection() {
  return (
    <BackgroundPageContainer>
      <main className="row-span-1 row-start-2 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 space-y-8">
        <HeroIconList />
        <h1 className="max-w-4xl text-center text-7xl font-bold">
          <span>
            Decí <WaveUnderline>&quot;Si quiero&quot;</WaveUnderline> en el
            lugar de tus sueños.
          </span>
        </h1>
        <div className="w-6xl">
          <SearchField />
        </div>
      </main>
    </BackgroundPageContainer>
  );
}

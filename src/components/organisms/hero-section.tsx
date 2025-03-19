import HeroIconList from "@/src/components/molecules/hero-icon-list";
import WaveUnderline from "@/src/components/atoms/wave-underline";
import BackgroundPageContainer from "@/src/components/atoms/background-page-container";

export default function HeroSection() {
  return (
    <BackgroundPageContainer
      backgroundUrl="/hero-bg-0.jpg"
      rows="150px_1fr_150px"
    >
      <main className="space-y-2 row-span-1 row-start-2 flex flex-col items-center justify-center gap-4 max-w-4xl">
        <HeroIconList />
        <h1 className="text-7xl font-bold text-center">
          <span>
            Decí <WaveUnderline>&quot;Si quiero&quot;</WaveUnderline> en el
            lugar de tus sueños.
          </span>
        </h1>
      </main>
    </BackgroundPageContainer>
  );
}

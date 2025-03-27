import type { NextPage } from "next";
import HeroSection from "@/src/components/hero-section/hero-section";
import FeaturedSpotsSection from "@/src/components/featured-spots-section/featured-spots";
import MadeWithPartySpotSection from "@/src/components/made-with-ps-section/made-with-party-spot-section";
import WhyUsePartySpot from "@/src/components/why-use-ps-section/why-use-party-spot";
import BecomeHostSection from "@/src/components/become-host-section/become-host";
import NextParty from "@/src/components/cta-next-party/cta-next-party";
const Home: NextPage = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <FeaturedSpotsSection />
      <NextParty />
      <MadeWithPartySpotSection />
      <WhyUsePartySpot />
      <BecomeHostSection />
    </main>
  );
};

export default Home;

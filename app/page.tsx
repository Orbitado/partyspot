import type { NextPage } from "next";
import Navbar from "@/src/components/navbar/navbar";
import HeroSection from "@/src/components/hero-section";
import FeaturedSpotsSection from "@/src/components/featured-spots-section/featured-spots";

const Home: NextPage = () => {
  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
      <FeaturedSpotsSection />
    </main>
  );
};

export default Home;

import HeroSection from "@/src/components/organisms/hero-section";
import Navbar from "@/src/components/organisms/navbar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;

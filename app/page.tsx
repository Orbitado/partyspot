import HeroSection from "@/src/components/hero-section";
import Navbar from "@/src/components/navbar/navbar";
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

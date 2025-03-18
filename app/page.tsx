import type { NextPage } from "next";
import HeroSection from "@/src/components/organisms/hero-section";

const Home: NextPage = () => {
  return (
    <div className="bg-red-500">
      <HeroSection />
    </div>
  );
};

export default Home;

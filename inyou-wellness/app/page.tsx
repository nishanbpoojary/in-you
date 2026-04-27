import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import KnowYourWellness from "@/components/KnowYourWellness";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BestSellers />
      <KnowYourWellness />
    </main>
  );
}

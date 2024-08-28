import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <div className=" mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </div>
  );
}

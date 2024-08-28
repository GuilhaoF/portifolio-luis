import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="container mt-36 mx-auto px-18 py-4">
        <HeroSection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

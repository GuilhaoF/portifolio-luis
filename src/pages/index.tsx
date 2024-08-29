import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projects-card";
import { ProjectSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="flex mx-2 min-h-screen flex-col ">
      <Navbar />
      <div className="container mt-36 mx-auto px-18 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}

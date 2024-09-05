import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

import { ProjectSection } from "@/components/projects-section";

export const metadata = {
  "title" : "My Portfolio - Luis Felipe"
}


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />

      <div className="container mt-24 mx-auto xs:px-5 lg:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}

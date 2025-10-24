import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { AiSection } from "@/components/sections/ai";
import { HiringSection } from "@/components/sections/hiring";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <AiSection />
        <HiringSection />
      </main>
      <Footer />
    </div>
  );
}

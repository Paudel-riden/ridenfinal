import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <HeroSection />
      <WhatIDoSection />
      <ProjectShowcaseSection />
      <ProcessSection />
      <TechStackSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}

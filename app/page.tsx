import { Hero } from "@/sections/home/Hero";
import { SelectedProjects } from "@/sections/home/SelectedProjects";
import { Skills } from "@/sections/home/Skills";
import { About } from "@/sections/home/About";
import { LatestWriting } from "@/sections/home/LatestWriting";
import { ContactCTA } from "@/sections/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="relative space-y-4">
      <Hero />
      <SelectedProjects />
      <Skills />
      <About />
      <LatestWriting />
      <ContactCTA />
    </div>
  );
}

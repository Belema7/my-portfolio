import { Hero } from "@/sections/home/Hero";
import { SelectedProjects } from "@/sections/home/SelectedProjects";
import { Skills } from "@/sections/home/Skills";
import { LatestWriting } from "@/sections/home/LatestWriting";
import { PersonalSnapshot } from "@/sections/home/PersonalSnapshot";
import { ContactCTA } from "@/sections/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <SelectedProjects />
      <Skills />
      <LatestWriting />
      <PersonalSnapshot />
      <ContactCTA />
    </div>
  );
}

import { Hero } from "@/sections/home/Hero";
import { SelectedProjects } from "@/sections/home/SelectedProjects";
import { Skills } from "@/sections/home/Skills";
import { LatestWriting } from "@/sections/home/LatestWriting";
import { CurrentlyLearning } from "@/sections/home/CurrentlyLearning";
import { PersonalSnapshot } from "@/sections/home/PersonalSnapshot";
import { ContactCTA } from "@/sections/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <Skills />
      <LatestWriting />
      <CurrentlyLearning />
      <PersonalSnapshot />
      <ContactCTA />
    </>
  );
}

import { Hero } from "@/sections/home/Hero";
import { SelectedProjects } from "@/sections/home/SelectedProjects";
import { Skills } from "@/sections/home/Skills";
import { LatestWriting } from "@/sections/home/LatestWriting";
import { CurrentlyLearning } from "@/sections/home/CurrentlyLearning";
import { PersonalSnapshot } from "@/sections/home/PersonalSnapshot";
import { ContactCTA } from "@/sections/home/ContactCTA";
import { HomeSection } from "@/components/home/HomeSection";

export default function HomePage() {
  return (
    <div className="relative md:pl-14 lg:pl-16">
      <HomeSection index={1} markerAlign="hero">
        <Hero />
      </HomeSection>
      <HomeSection index={2}>
        <SelectedProjects />
      </HomeSection>
      <HomeSection index={3}>
        <Skills />
      </HomeSection>
      <HomeSection index={4}>
        <LatestWriting />
      </HomeSection>
      <HomeSection index={5}>
        <CurrentlyLearning />
      </HomeSection>
      <HomeSection index={6}>
        <PersonalSnapshot />
      </HomeSection>
      <HomeSection index={7} isLast>
        <ContactCTA />
      </HomeSection>
    </div>
  );
}

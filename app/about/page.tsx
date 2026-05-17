import type { Metadata } from "next";
import { StorySection } from "@/sections/about/StorySection";
import { SkillsSection } from "@/sections/about/SkillsSection";
import { TimelineSection } from "@/sections/about/TimelineSection";
import { CurrentGoals } from "@/sections/about/CurrentGoals";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About | Belema Girma",
  description:
    "My story, skills, timeline, and goals as a frontend developer and computer science student.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section pb-0">
        <Container>
          <SectionHeader
            title="About"
            subtitle="Frontend developer, CS student, and builder of modern web interfaces."
            align="center"
          />
        </Container>
      </section>
      <StorySection />
      <SkillsSection />
      <TimelineSection />
      <CurrentGoals />
    </>
  );
}

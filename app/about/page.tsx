import type { Metadata } from "next";
import { StorySection } from "@/sections/about/StorySection";
import { SkillsSection } from "@/sections/about/SkillsSection";
import { TimelineSection } from "@/sections/about/TimelineSection";
import { CurrentGoals } from "@/sections/about/CurrentGoals";

export const metadata: Metadata = {
  title: "About | Belema Girma",
  description:
    "My story, skills, timeline, and goals as a Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <SkillsSection />
      <TimelineSection />
      <CurrentGoals />
    </>
  );
}

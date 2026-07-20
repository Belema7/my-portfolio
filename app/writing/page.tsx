import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogView } from "@/sections/library/BlogView";
import { getAllWritingPosts, getFeaturedPost } from "@/lib/blog/api";

export const metadata: Metadata = {
  title: "Writing | Belema Girma",
  description: "Technical articles, build logs, engineering reflections, and standalone notes.",
  alternates: { canonical: "/writing" },
  openGraph: { title: "Writing | Belema Girma", description: "Technical articles, build logs, and reflections by Belema Girma.", url: "/writing" },
};

export default function WritingPage() {
  const posts = getAllWritingPosts();
  return <main className="section"><Container><p className="label-numbered">Writing / 002</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">Writing</h1><p className="mt-5 max-w-2xl text-lg text-[var(--color-text-secondary)]">Technical articles, build logs, and reflections on engineering, projects, and growth.</p></Container><div className="mt-14"><BlogView posts={posts} featured={getFeaturedPost()} /></div></main>;
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LibraryView } from "@/sections/library/LibraryView";

export const metadata: Metadata = {
  title: "Shelf | Belema Girma",
  description: "Books, films, series, and documentaries I have read or watched.",
  alternates: { canonical: "/shelf" },
  openGraph: { title: "Shelf | Belema Girma", description: "Books and screen stories on Belema Girma's shelf.", url: "/shelf" },
};

export default function ShelfPage() {
  return <main className="section"><Container><p className="label-numbered">Shelf / 003</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">Shelf</h1><p className="mt-5 max-w-2xl text-lg text-[var(--color-text-secondary)]">Books I have finished and films, series, and documentaries I have watched.</p></Container><div className="mt-14"><LibraryView /></div></main>;
}

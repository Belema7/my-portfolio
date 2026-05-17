import type { Metadata } from "next";
import { BlogListing } from "./BlogListing";

export const metadata: Metadata = {
  title: "Blog | Belema Girma",
  description:
    "Technical notes, learning journey, building in public, and personal thoughts on frontend development.",
};

export default function BlogPage() {
  return (
    <div className="section">
      <BlogListing />
    </div>
  );
}

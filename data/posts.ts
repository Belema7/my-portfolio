import type { Post } from "@/types/content";

export const posts: Post[] = [
  {
    title: "How I Think About Data Fetching in Next.js",
    slug: "data-fetching-nextjs",
    description:
      "A practical breakdown of when to fetch on the server, when to use client hooks, and how I structure data flow in App Router projects.",
    category: "Technical Notes",
    date: "2026-04-28",
    readingTime: "6 min read",
    featured: true,
    content: `Data fetching in Next.js is less about memorizing APIs and more about choosing the right layer for each piece of data.

On the server, I reach for async server components when the data is needed for the initial render and does not depend on client-only state. This keeps the page fast and avoids unnecessary loading spinners.

On the client, I use hooks when the UI needs interactivity tied to user actions—filters, tabs, or form-driven updates. The key is not mixing concerns: server for stable content, client for reactive UI.

My default mental model: start on the server, move to the client only when you have a clear reason.`,
  },
  {
    title: "Client Components vs Server Components",
    slug: "client-vs-server-components",
    description:
      "Notes from building real projects on where I draw the line between server and client components.",
    category: "Technical Notes",
    date: "2026-04-15",
    readingTime: "5 min read",
    content: `Server Components are the default in the App Router, and that is a good thing. They reduce bundle size and make data fetching straightforward.

I reach for Client Components when I need browser APIs, local state, or event handlers. Theme toggles, mobile menus, and contact forms are obvious candidates.

The mistake I made early was marking entire pages as client components. Now I keep pages as server components and push interactivity to small leaf components.`,
  },
  {
    title: "How I Structure React Projects",
    slug: "react-project-structure",
    description:
      "The folder conventions I use to keep components, data, and routes maintainable as projects grow.",
    category: "Technical Notes",
    date: "2026-03-22",
    readingTime: "4 min read",
    content: `I organize by feature and route, not by file type alone. Data lives in a dedicated folder, UI primitives stay separate from domain cards, and page-specific sections sit near their routes.

This structure makes it easy to find things months later and to onboard myself quickly when switching between projects.`,
  },
  {
    title: "What I Learned Building DevMeet",
    slug: "lessons-from-devmeet",
    description:
      "Reflections on full-stack event platform development—from Prisma models to responsive UI patterns.",
    category: "Building in Public",
    date: "2026-03-10",
    readingTime: "7 min read",
    content: `DevMeet taught me that event platforms are really about clear data models and predictable user flows.

Getting the Prisma schema right early saved refactoring later. Search and filters needed indexed fields and thoughtful query design.

On the frontend, reusing card components across listing and detail views kept the UI consistent and sped up development.`,
  },
  {
    title: "Prisma vs Drizzle: My Notes",
    slug: "prisma-vs-drizzle",
    description:
      "A comparison based on my experience with Prisma in production projects and exploring Drizzle for learning.",
    category: "Learning Journey",
    date: "2026-02-18",
    readingTime: "5 min read",
    content: `Prisma feels approachable for full-stack learning: migrations, type-safe client, and good docs. I have used it across multiple projects successfully.

Drizzle interests me for its SQL-like feel and lighter runtime. I am exploring it on the side to understand tradeoffs.

For now, Prisma remains my default for shipping projects quickly while I build deeper SQL intuition.`,
  },
  {
    title: "Week 1: Rebuilding My Portfolio",
    slug: "week-1-portfolio-rebuild",
    description:
      "Documenting the shift from a single-page beginner portfolio to a content-driven personal site.",
    category: "Building in Public",
    date: "2026-05-01",
    readingTime: "4 min read",
    content: `This week I started rebuilding my portfolio from a one-page layout into a multi-route site with writing, library, and case studies.

The goal is not more pages for the sake of it—it is to show how I think, what I am learning, and the quality of work I want to do professionally.`,
  },
  {
    title: "Mistakes I Made While Building My First Full-stack App",
    slug: "first-fullstack-mistakes",
    description:
      "Honest notes on over-engineering, skipping validation, and learning to ship incrementally.",
    category: "Learning Journey",
    date: "2026-01-30",
    readingTime: "6 min read",
    content: `My first full-stack app had too many features planned upfront and not enough shipped early.

I learned to validate forms properly, handle errors visibly, and deploy smaller slices instead of waiting for perfection.

Those mistakes made the next projects noticeably faster to build and easier to maintain.`,
  },
  {
    title: "Why I'm Learning Frontend Seriously",
    slug: "why-frontend-seriously",
    description:
      "The mindset shift from tutorial hopping to building real interfaces and documenting the journey.",
    category: "Personal Thoughts",
    date: "2026-01-12",
    readingTime: "5 min read",
    content: `Frontend engineering sits at the intersection of logic, design, and user experience. That combination is what pulled me in.

I stopped treating tutorials as the finish line and started treating projects as the real curriculum. Writing about what I learn helps me think clearly and shows others how I work.

This portfolio is part of that shift—less checklist, more signal.`,
  },
];

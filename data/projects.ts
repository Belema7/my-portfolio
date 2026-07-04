import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "DevLink",
    slug: "devlink",
    description:
      "A developer-focused platform to save, organize, and share useful resources with tag-based organization and search.",
    overview:
      "DevLink is a full-stack developer resource platform that helps developers save, organize, and share useful links. It features tag-based organization, search and filtering, a public feed with trending resources, and a clean dashboard for managing links.",
    problem:
      "Developers collect useful links across browsers and notes but lack a simple way to organize, search, and share them with the community.",
    solution:
      "I built a platform where users can save resources, tag them, search and filter efficiently, and discover trending links from other developers.",
    image: "/projects/devlink.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "React Hook Form",
    ],
    type: "Full-stack web application",
    featured: true,
    liveUrl: "https://devlinkstore.vercel.app",
    githubUrl: "https://github.com/Belema7/devlink",
    features: [
      "Resource saving and organization",
      "Tag-based categorization",
      "Search and filtering",
      "Public feed with trending resources",
      "User dashboard",
      "Responsive UI",
    ],
    challenges: [
      "Designing a flexible tagging system",
      "Building efficient search across resources",
      "Managing authentication and user-specific data",
    ],
    lessons: [
      "Form validation with Zod and React Hook Form",
      "Database modeling with Prisma",
      "Component reuse and clean project structure",
      "Building accessible UI with shadcn/ui",
    ],
    architectureNotes:
      "Next.js App Router with server components for data fetching, Prisma ORM for PostgreSQL, and a component-based UI layer with shadcn/ui.",
    screenshots: ["/projects/devlink.png"],
  },
  {
    title: "DevMeet",
    slug: "devmeet",
    description:
      "A full-stack platform that helps developers discover and create meetups, workshops, and tech events.",
    overview:
      "DevMeet is a full-stack developer event platform that helps developers find and create local and online tech events. Users can browse, search, and create developer-focused events.",
    problem:
      "Developers need a simple way to discover local and online tech events and connect with the community.",
    solution:
      "I built a platform where users can browse, search, and create developer-focused events with authentication and responsive UI.",
    image: "/projects/devM.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    type: "Full-stack web application",
    featured: true,
    liveUrl: "https://devmeet-platform.vercel.app",
    githubUrl: "https://github.com/Belema7/devmeet-platform",
    features: [
      "Event listing",
      "Event detail page",
      "Event creation",
      "Search and filtering",
      "Authentication",
      "Responsive UI",
    ],
    challenges: [
      "Modeling events and user relationships in the database",
      "Implementing search and filter across event data",
      "Balancing server and client rendering for performance",
    ],
    lessons: [
      "Server-side rendering patterns",
      "Database modeling with Prisma",
      "Form validation and error handling",
      "Component reuse across listing and detail views",
    ],
    architectureNotes:
      "App Router with Prisma for data layer, server actions for mutations, and a modular component structure for event cards and forms.",
    screenshots: ["/projects/devM.png"],
  },
  {
    title: "RealMont",
    slug: "realmont",
    description:
      "A real estate platform for browsing properties with clean listing cards, filtering, and responsive layouts.",
    overview:
      "RealMont is a real estate platform for browsing properties with clean listing cards, filtering, and responsive layouts across devices.",
    problem:
      "Property platforms need clear presentation, trust-focused UI, and fast browsing across devices.",
    solution:
      "I built a platform with structured property listings, role-based flows, and a responsive UI for seamless property discovery.",
    image: "/projects/realmont.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    type: "Full-stack web application",
    featured: true,
    liveUrl: "https://realmont.vercel.app",
    githubUrl: "https://github.com/Belema7/realmont",
    features: [
      "Property listings",
      "Property detail pages",
      "Search and filtering",
      "User authentication",
      "Responsive property cards",
      "Admin-friendly data structure",
    ],
    challenges: [
      "Designing scalable property data models",
      "Building filter UX that stays fast with many listings",
      "Keeping layouts consistent across listing and detail views",
    ],
    lessons: [
      "Complex form and listing patterns",
      "Image optimization for property galleries",
      "Structuring full-stack features for maintainability",
    ],
    architectureNotes:
      "Next.js with Prisma and PostgreSQL, separating listing queries from detail pages for performance.",
    screenshots: ["/projects/realmont.png"],
  },
  {
    title: "BlogIt",
    slug: "blogit",
    description:
      "A blogging platform for writing, editing, and sharing articles with a clean content-focused interface.",
    overview:
      "BlogIt is a blogging platform for writing, editing, and sharing articles with a clean content-focused interface and straightforward publishing flows.",
    problem:
      "Writers need a simple publishing experience that keeps the focus on content, readability, and organization.",
    solution:
      "I built a MERN-stack blog with article CRUD, author flows, and a responsive interface for reading and writing.",
    image: "/projects/blogit.png",
    techStack: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    type: "Full-stack web application",
    featured: true,
    liveUrl: "https://blogitbel.vercel.app/",
    githubUrl: "https://github.com/Belema7/blogIt",
    features: [
      "Article creation and editing",
      "Article listing and detail views",
      "Author management",
      "REST API backend",
      "Responsive reading layout",
    ],
    challenges: [
      "Connecting React frontend to Express API",
      "Managing article state and validation",
      "Deploying frontend and backend separately",
    ],
    lessons: [
      "REST API design and integration",
      "MongoDB document modeling",
      "Separating concerns between client and server",
    ],
    screenshots: ["/projects/blogit.png"],
  },
  {
    title: "Zion",
    slug: "zion",
    description:
      "A modern responsive landing page showcasing products and services with smooth UX and visual polish.",
    overview:
      "Zion is a modern landing page built to showcase products and services with a clean, engaging interface focused on performance and visual appeal.",
    problem:
      "Product launches need a fast, visually strong landing page without heavy framework overhead.",
    solution:
      "I built a lightweight React landing page with Tailwind CSS, emphasizing layout, typography, and responsive design.",
    image: "/projects/zion.png",
    techStack: ["React", "Tailwind CSS"],
    type: "Product landing page",
    featured: false,
    liveUrl: "https://zion-landing-page-1ms.pages.dev/",
    features: [
      "Hero and feature sections",
      "Responsive layout",
      "Smooth scroll and hover states",
      "Optimized for fast load",
    ],
    challenges: [
      "Creating visual hierarchy without a component library",
      "Ensuring consistency across breakpoints",
    ],
    lessons: [
      "Landing page structure and conversion-focused layout",
      "Tailwind utility-first workflow",
      "Performance on static deployments",
    ],
    screenshots: ["/projects/zion.png"],
  },
  {
    title: "DevLife2035",
    slug: "devlife2035",
    description:
      "An AI-powered platform exploring the future of developers through intelligent interactions and content generation.",
    overview:
      "DevLife2035 is an AI-powered platform that explores the future of developers through intelligent interactions and content generation using modern AI APIs.",
    problem:
      "Exploring AI-assisted developer workflows requires an interactive interface that feels engaging, not gimmicky.",
    solution:
      "I built a Next.js app integrating OpenAI for dynamic content and an interactive, futuristic UI experience.",
    image: "/projects/devlife.png",
    techStack: ["Next.js", "OpenAI", "Tailwind CSS"],
    type: "Modern responsive web application",
    featured: false,
    liveUrl: "https://devlife-2035.vercel.app/",
    githubUrl: "https://github.com/Belema7/devlife-2035",
    features: [
      "AI-powered content generation",
      "Interactive developer scenarios",
      "Responsive futuristic UI",
      "API route integration",
    ],
    challenges: [
      "Handling API latency and loading states",
      "Designing UX around unpredictable AI responses",
      "Managing API keys securely",
    ],
    lessons: [
      "Integrating third-party AI APIs in Next.js",
      "Building loading and error states for async AI calls",
      "Balancing creativity with usable interface patterns",
    ],
    screenshots: ["/projects/devlife.png"],
  },
];

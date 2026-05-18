import type { Post } from "@/types/content";

export const posts: Post[] = [
  {
    title: "How I Think About Data Fetching in Next.js",
    slug: "data-fetching-nextjs",
    description:
      "A practical breakdown of when to fetch on the server, when to use client hooks, and how I structure data flow in App Router projects.",
    category: "Technical Notes",
    date: "2026-04-28",
    readingTime: "8 min read",
    featured: true,
    content: `When I first moved to the App Router, I treated data fetching like a checklist: use fetch in a server component, or use useEffect on the client. That worked until pages grew more complex and I started mixing loading states, duplicate requests, and hydration issues.

Now I think about data fetching as a layering problem. Each piece of data has a home—server, client, or cache—and picking the wrong layer creates friction you feel weeks later.

## Start on the server by default

Server Components can await data directly in the component tree. For a blog listing, a project detail page, or static marketing content, that means the HTML arrives with real data. Users see content immediately instead of a skeleton that resolves a second later.

In my portfolio, blog posts and project case studies are loaded on the server from local data files. There is no client fetch for the initial view, which keeps the page simple and fast. The pattern looks like an async page component that reads data and passes it to presentational children.

The benefits go beyond perceived speed. Sensitive tokens stay on the server, bundle size stays smaller because data-fetching libraries do not ship to the browser, and SEO gets real content in the first response.

## Move to the client when interactivity demands it

Client fetching still has a clear role. I reach for it when user actions change what data I need: search-as-you-type, filters, pagination tied to UI state, or forms that refetch after submission.

On DevMeet, event search and filters depend on what the user selects. That state lives on the client, so fetching in response to user input belongs there too. The mistake is not using the client—it is fetching on the client for data that never needed interactivity in the first place.

When I do client fetch, I prefer a small, explicit hook or a library like TanStack Query if the app has many dependent requests, caching, and invalidation rules. For a single filter on one page, a focused useEffect or event handler is enough.

## Server Actions and mutations

Reads often belong on the server; writes can too. Server Actions let me handle form submissions and mutations without building a separate API route for every form. I validate on the server, update the database, and revalidate the paths that need fresh data.

That pattern clicked for me on full-stack projects where I was over-building REST endpoints for simple create/update flows. A Server Action plus revalidatePath is often the right size.

## Caching and freshness

Next.js extends fetch with caching semantics. For content that changes rarely—like this blog's static posts—I lean on defaults that favor static generation. For dashboards or user-specific data, I set cache: 'no-store' or use dynamic rendering so I do not show stale private data.

I also pay attention to where deduplication happens. Multiple server components requesting the same resource in one tree should share work; understanding default fetch caching prevents surprise duplicate queries during development.

## A simple decision checklist

Before I add a fetch anywhere, I ask:

- Does this data need to be in the first HTML response?
- Does it depend on browser-only state or user input?
- Is it user-specific or public?
- How fresh does it need to be?

If the answers point to stable, public, initial-render data, the server wins. If they point to reactive UI, the client wins. If they point to a form submission, a Server Action is often the cleanest path.

## What changed in my projects

After applying this consistently, my pages got flatter: fewer loading spinners on first paint, fewer "client" pages that were only client because I did not want to split components. I extract small client islands—filters, theme toggles, mobile menus—and leave the page shell on the server.

Data fetching in Next.js is not one API to memorize. It is choosing the right layer for each piece of data, then letting the framework do the heavy lifting.`,
  },
  {
    title: "Client Components vs Server Components",
    slug: "client-vs-server-components",
    description:
      "Notes from building real projects on where I draw the line between server and client components.",
    category: "Technical Notes",
    date: "2026-04-15",
    readingTime: "7 min read",
    content: `Server Components are the default in the App Router, and that default is intentional. They run on the server, ship no component JavaScript to the browser for their own logic, and compose naturally with async data fetching. Client Components are the exception you opt into with "use client"—and that exception is powerful when you need it.

The hard part is not learning the syntax. It is drawing a boundary that keeps bundles small without fighting the framework.

## What Server Components are good at

I use Server Components for layouts, pages, static sections, and anything that renders the same way for every user until data changes on the server. They can import server-only modules, read from the filesystem, talk to a database directly, and keep secrets off the client.

In practice, that means my blog post page, project case study shell, and most marketing sections never need "use client". They receive data, render HTML, and pass only the interactive pieces down as children.

## When I add "use client"

I reach for Client Components when I need one or more of these:

- Event handlers (onClick, onChange, onSubmit)
- React state (useState, useReducer)
- Browser APIs (localStorage, matchMedia, geolocation)
- Effects that depend on the window or document
- Third-party libraries that assume a browser environment

My theme toggle, mobile navigation, and contact form all live in client components. They are small leaf nodes at the edge of the tree, not wrappers around entire pages.

## The mistake I made early

My first App Router pages were marked "use client" at the top because one button needed state. That pulled the entire page—and every import beneath it—into the client bundle. Data fetching moved to useEffect, loading states multiplied, and I lost most of the benefits I had switched for.

The fix was mechanical but mindset-shifting: keep the page as a Server Component, identify the interactive island, and move only that subtree to a client file. Children of a Client Component can still be Server Components if they are passed as children props from a parent server tree—a pattern the docs call the "composition" approach.

## Composition over conversion

A pattern I use often looks like this mentally: the server page fetches data and renders structure; it passes server-rendered content into a client shell only where needed. For example, a client tabs component might receive pre-rendered tab panels as children from the server.

That way interactivity does not force data fetching to the client. The server still owns the expensive work.

## Boundaries and mental overhead

Every "use client" file creates a boundary. Imports below that boundary must be client-safe. That is why I avoid sprinkling "use client" in shared utility files unless they are truly client-only.

I also watch for accidental chains: a client card component imported by a client layout is fine; a client hook imported into a server component is not. The compiler error is clear, but the habit of checking the top of the file saves debugging time.

## How I decide in real features

For DevLink and DevMeet, listing pages are server-rendered with data from Prisma. Interactive pieces—dropdowns, modals, optimistic UI on a button—are isolated client components colocated next to the feature they serve, not in a generic "components/client" dumping ground.

If I am unsure, I default to server and wait for a concrete need: a handler, state, or browser API. That default has been right more often than wrong.

## Summary

Server Components are not a restriction—they are the baseline that keeps apps fast. Client Components are the tool for interactivity at the leaves. The skill is drawing that line early, composing server and client trees intentionally, and refusing to convert a whole page just because one corner needs state.`,
  },
  {
    title: "How I Structure React Projects",
    slug: "react-project-structure",
    description:
      "The folder conventions I use to keep components, data, and routes maintainable as projects grow.",
    category: "Technical Notes",
    date: "2026-03-22",
    readingTime: "6 min read",
    content: `Folder structure does not make an app good by itself, but bad structure makes every change slower. I have rebuilt enough projects to care about conventions that help future-me find things in minutes, not hours.

I organize by feature and route, not by file type alone. That does not mean I abandon shared folders—it means the top level answers "where would I look for this?" before "what extension is it?"

## The top-level map

A typical project I work on looks roughly like this:

- app/ for routes, layouts, and page-level composition
- components/ for reusable UI, split into ui primitives and domain-specific cards or sections
- data/ or lib/ for static content, helpers, and server utilities
- types/ for shared TypeScript contracts
- sections/ for larger page blocks that are not quite routes but more than atoms

Routes stay thin. They wire data to layout and defer presentation to components or sections. If a page file grows past a screen, something probably belongs in components/ or sections/.

## components/ui vs domain components

I keep design-system primitives—buttons, badges, containers, inputs—in components/ui. They know nothing about "projects" or "blog posts". Domain components like ProjectCard or BlogCard live alongside them but import from ui, not the other way around.

That separation stops business copy and layout hacks from leaking into primitives. It also makes it obvious what I can copy into another project wholesale.

## Data lives in one place

Static content for this portfolio—posts, projects, timeline entries—lives under data/ with small helper functions for sorting, filtering, and lookup by slug. Pages do not embed long arrays inline.

For full-stack apps, the same idea applies: Prisma client and query helpers sit near the database layer; route handlers and server components call those helpers instead of duplicating Prisma queries across files.

## Colocation when a feature is cohesive

If only one route uses a complex widget and it is unlikely to be reused, I colocate it under app/.../_components or next to the feature folder. I do not promote everything to global components/ on day one.

When a second route needs the same widget, I move it up. That rule prevents premature abstraction.

## Naming and imports

I use path aliases (@/components, @/data) so imports stay readable. File names match the default export: ProjectCard.tsx exports ProjectCard. Index barrels are sparing—I have seen barrels hide circular dependencies and slow down refactors.

## What this portfolio does specifically

This site uses app/ for routes, components/ for cards and layout chrome, sections/ for home and about blocks, and data/ for posts and projects. Blog slugs resolve through helpers; the blog page itself does not own the content array.

That mirrors how I structure DevLink and DevMeet: routes orchestrate, data layer supplies shape, UI components render.

## Signs the structure is failing

I reorganize when I notice:

- The same query copied in three route files
- A components folder with forty unrelated files and no subfolders
- Pages importing from five levels deep with relative paths
- "utils.ts" becoming a thousand-line junk drawer

None of those are fatal, but they are signals to split by feature or extract a data layer.

## Closing thought

Structure should reduce decisions, not create ceremony. I want a new contributor—or me in six months—to know where to add a blog post, a project, or a form without reading the entire repo. These conventions are how I get there.`,
  },
  {
    title: "What I Learned Building DevMeet",
    slug: "lessons-from-devmeet",
    description:
      "Reflections on full-stack event platform development—from Prisma models to responsive UI patterns.",
    category: "Building in Public",
    date: "2026-03-10",
    readingTime: "9 min read",
    content: `DevMeet is a full-stack platform for discovering and creating developer events—meetups, workshops, and online sessions. Building it was my most complete pass through authentication, database modeling, search, and deployment in one product. These are the lessons that stuck.

## The product is really a data model

Event platforms look like UI problems on the surface: cards, maps, calendars. Underneath, they are about consistent entities and relationships. An event has a title, description, date, location or URL, organizer, and maybe capacity. Users create events; visitors browse and filter.

Getting the Prisma schema right early saved the most pain. I thought about which fields need indexes for search, which relations cascade on delete, and how optional fields (online vs in-person) should be represented. Refactoring a live schema later is possible but expensive emotionally.

I modeled users and events with clear ownership: every event belongs to someone who created it. That single decision shaped authorization rules for edit and delete flows.

## Search and filters need planning

Users expect to filter by date, location, or keywords and see results quickly. That meant thoughtful queries—not loading every event to the client and filtering in JavaScript.

I used database-level filtering with Prisma where clauses, combined with pagination so lists stayed fast as seed data grew. Fields used in search and sort got indexes. It is a small step in development that matters a lot in production.

On the UI side, filter state lived in client components, but the actual fetch could still go through server actions or API routes that validate input before hitting the database.

## Authentication touches everything

Once users can create events, every write path needs to know who is calling. I integrated auth early enough that protected routes and server-side checks were part of the design, not a bolt-on.

The lesson: do not build the entire create-event flow as anonymous and "add auth later." Later always means revisiting every mutation and wondering if someone else can edit another user's event.

## UI consistency through reuse

Event listing and event detail share visual language: badges for date, typography for titles, muted text for location. I reused card patterns and layout primitives instead of one-off markup per page.

That sped development and made the app feel cohesive. When I changed spacing or border radius in one card component, the listing and detail pages improved together.

## Forms, validation, and errors

Event creation is a form-heavy flow. I paired React Hook Form with Zod so client-side feedback was immediate and server-side validation matched the same rules. Duplicated validation messages are frustrating; shared schemas fix that.

I also learned to show server errors in the UI visibly—generic "something went wrong" toasts are better than silent failures, but specific messages ("end date must be after start date") are better still.

## Deployment and environment discipline

DevMeet runs on Vercel with a hosted PostgreSQL database. Environment variables for database URL and auth secrets were non-negotiable. I document which vars are required locally and in production so I am not guessing when a deploy fails.

Migrations run as part of the workflow I trust before shipping schema changes. A broken migration on deploy is a bad day; rehearsing locally prevents most of that.

## What I would do differently

I would ship a thinner vertical slice even sooner: browse events, view one event, create one event—with auth—before adding nice-to-have features. I would also add basic analytics or logging earlier to see which flows fail in production.

## Why I am glad I built it

DevMeet connected patterns I had learned in isolation: Next.js App Router, Prisma, auth, forms, deployment. It is a reference project I can point to when discussing how I think about full-stack work—not because it is perfect, but because it is real, shipped, and maintained.`,
  },
  {
    title: "Prisma vs Drizzle: My Notes",
    slug: "prisma-vs-drizzle",
    description:
      "A comparison based on my experience with Prisma in production projects and exploring Drizzle for learning.",
    category: "Learning Journey",
    date: "2026-02-18",
    readingTime: "7 min read",
    content: `I have shipped multiple projects with Prisma. Drizzle keeps appearing in discussions, tutorials, and repos I admire—so I spent time with both to understand the tradeoffs honestly, not from hype.

This is not a verdict that one tool wins forever. It is how they fit my goals today: learning quickly, shipping full-stack apps, and building SQL intuition.

## Why Prisma became my default

Prisma's schema file is readable. Models, relations, and enums map closely to how I think about the domain. Migrations are integrated; the client is generated with types that match the schema. For DevMeet, DevLink, and other learning projects, that meant less time wiring raw SQL and more time on product flows.

The developer experience is polished: good docs, clear errors in many cases, and a studio to inspect data when debugging. When I was newer to databases, that guardrails feeling mattered.

Prisma Client's API is chainable and expressive for common CRUD and relation includes. I rarely write raw SQL in day-to-day feature work, which is a pro for velocity and a con for SQL depth.

## What draws me to Drizzle

Drizzle stays closer to SQL. Schemas are defined in TypeScript; queries look like SQL composed in code. People describe it as "lighter"—smaller runtime, less magic between you and the database.

That appeals to me as a learning tool. Reading Drizzle examples forces me to think in tables, joins, and indexes explicitly. If my long-term goal includes strong backend fluency, time in Drizzle is probably well spent.

Drizzle also fits teams that want SQL-native control without abandoning type safety. Migrations and schema live in the same ecosystem as the queries.

## Tradeoffs I actually feel

**Learning curve:** Prisma is gentler upfront. Drizzle assumes you are comfortable with SQL concepts earlier.

**Bundle and runtime:** Drizzle is often cited as leaner. For my projects so far, Prisma's weight has not been the bottleneck; feature delivery and query shape mattered more.

**Complex queries:** Prisma handles typical app queries well. Very complex reporting or database-specific features sometimes push you toward raw SQL or workarounds. Drizzle's model can shine when queries are inherently SQL-shaped.

**Ecosystem and hiring:** Prisma is widely used in Next.js tutorials and production apps. Drizzle is growing but smaller. That affects copy-paste answers and community examples.

## How I use them in practice today

Prisma remains what I reach for when I want to ship a full-stack MVP and learn product development end to end. I know the migration workflow, relation patterns, and how to deploy with a hosted Postgres provider.

Drizzle is what I reach for when the goal is deliberately educational: reproducing a schema by hand, writing queries that mirror SQL exercises, or comparing how the same feature looks in both tools.

## What I am building toward

I do not want to depend on ORM magic without understanding what gets executed. My plan is to keep shipping with Prisma while doing side exercises in Drizzle and occasional raw SQL—explaining query plans, indexes, and constraints in my own words.

If a future project needs maximum control or edge deployment constraints, I will re-evaluate. For now, the best ORM is the one that matches the project's learning and delivery goals.

## Short summary

- Prisma: fast to learn, great DX, strong fit for Next.js full-stack apps I have built
- Drizzle: SQL-forward, lighter feel, strong fit for deepening database skills
- Me today: Prisma for shipping, Drizzle for stretching

That split might change as I get more production experience. Documenting the reasoning now helps me notice when it is time to switch defaults.`,
  },
  {
    title: "Week 1: Rebuilding My Portfolio",
    slug: "week-1-portfolio-rebuild",
    description:
      "Documenting the shift from a single-page beginner portfolio to a content-driven personal site.",
    category: "Building in Public",
    date: "2026-05-01",
    readingTime: "6 min read",
    content: `This week I started rebuilding my portfolio from a one-page layout into a multi-route site with writing, a library, project case studies, and a clearer about page. I am documenting the process because the goal is not more pages—it is more signal.

## Why rebuild now

My earlier portfolio proved I could ship a responsive page: hero, projects grid, contact links. That was enough for a first version. It was not enough to show how I think, what I am learning, or how I write about technical decisions.

Recruiters and collaborators do not only want screenshots. They want context: problems, tradeoffs, and growth. A content-driven site supports that story better than a single scroll.

## Information architecture first

Before touching visual polish, I mapped routes: home, projects with detail pages, blog, library, about, contact. Each route has a job. Home orients and highlights; projects prove depth; blog shows thinking over time; library shares what I read and watch; about grounds the person behind the work.

That map prevented me from adding random sections because they looked cool elsewhere. Every page justifies its place in the nav.

## Content as data

Posts and projects live in typed data files with helpers for slugs, featured flags, and latest lists. That keeps pages thin and makes adding a new post a content edit, not a layout rewrite.

It also sets me up for MDX or a CMS later if I outgrow files. The abstraction boundary is already there: pages ask for getPostBySlug, not for inline arrays.

## Design system in small pieces

I leaned on a short list of primitives: container width, badges, cards, section headers. Tokens for color and spacing live in global CSS variables so dark mode and accent colors stay consistent.

The win is not a huge component library—it is not redesigning every section from scratch when I add the blog or library.

## What shipped in week one

By the end of the first week I had routing in place, core layout (header, footer), home sections wired to real data, project listing and detail templates, blog listing and post pages, and the start of library and about content.

Not everything was polished. Some posts were stubs. But the skeleton was real—you could navigate the whole site and see where content would deepen.

## Friction I hit

I re-learned that scope creeps quietly: "while I am at it" animations, perfect typography, every blog post fully written. I had to remind myself that a navigable site with honest placeholders beats a beautiful single page forever.

I also hit App Router details—async params, server vs client boundaries—that slowed me down in a good way. Fixing them once on the portfolio teaches the pattern for client work.

## Next weeks (intent)

- Flesh out blog posts and case study copy
- Tighten visual consistency on cards and section spacing
- Improve metadata and Open Graph for sharing
- Add small interactive touches only where they help UX

## Why document publicly

Writing this series holds me accountable and gives visitors a timeline of progress. If you are rebuilding your own site, I hope the takeaway is simple: define routes and content shape first, then iterate on craft. Week one is structure, not perfection.`,
  },
  {
    title: "Mistakes I Made While Building My First Full-stack App",
    slug: "first-fullstack-mistakes",
    description:
      "Honest notes on over-engineering, skipping validation, and learning to ship incrementally.",
    category: "Learning Journey",
    date: "2026-01-30",
    readingTime: "8 min read",
    content: `My first full-stack app was ambitious, messy, and incredibly educational. I am glad I shipped it—but I would not repeat every choice. These mistakes shaped how I build DevMeet, DevLink, and this portfolio.

## Planning every feature before shipping one

I had a long list: auth, profiles, posts, comments, notifications, admin dashboards. I built foundations for all of them instead of delivering one complete user journey.

The cost was months of partial UI and no single flow that felt done. Users (and reviewers) cannot experience "almost auth plus almost posts." They experience one working path or nothing.

Now I define the thinnest slice that proves the stack: sign up, create one resource, view it in a list. Ship that, then add the next layer.

## Treating validation as optional

Early forms accepted anything. Empty titles, broken dates, strings where numbers belonged. The database or Prisma sometimes caught issues; sometimes bad data slipped through and broke the UI later.

Adding Zod schemas shared between client and server felt tedious until I saw how many bugs disappeared. Validation is not bureaucracy—it is UX that fails fast with clear messages.

## Hiding errors from users and myself

When something failed, I logged to the console and showed a generic alert—or nothing at all. Debugging in production became guesswork.

I learned to return structured errors from server actions and API routes and to map them to form fields or toasts users can understand. Logging on the server stays, but the UI has to communicate failure too.

## One giant client page

I put "use client" on large pages because hooks felt convenient. Bundle size grew, data fetching moved to useEffect, and loading spinners appeared everywhere.

The portfolio and later projects use server pages with small client islands. That mistake alone is worth avoiding early in App Router work.

## Schema changes without a migration habit

I tweaked models manually in dev and forgot to migrate consistently. Deployments and local databases diverged. I lost time fixing drift that a disciplined migrate workflow would have prevented.

Now migrations are part of the definition of done for any schema change.

## Skipping basic security thinking

I assumed "nobody will hit this route." Unprotected API handlers and missing ownership checks are fine until they are not. Auth is not only login UI—it is verifying the user on every mutation.

I am not a security expert, but I ask on every write: who is allowed to do this, and does the server enforce it?

## Perfection before deployment

I delayed deploys because the app did not feel ready. Ready never came. The first deploy taught me more than another week of local polish—environment variables, build errors, database connectivity in production.

Shipping early is not shipping junk. It is exposing real constraints sooner.

## What improved on the next projects

DevMeet and DevLink used smaller milestones, shared validation, server-first pages, and earlier deploys. This portfolio uses the same habits: typed content, thin routes, real posts and case studies over time.

## If you are on your first full-stack app

You will make your own list. The point is not shame—it is to convert mistakes into defaults for the next repo: one vertical slice, validate everything, show errors, protect writes, deploy before you feel ready.

Those defaults are how my second and third projects shipped faster and broke less.`,
  },
  {
    title: "Why I'm Learning Frontend Seriously",
    slug: "why-frontend-seriously",
    description:
      "The mindset shift from tutorial hopping to building real interfaces and documenting the journey.",
    category: "Personal Thoughts",
    date: "2026-01-12",
    readingTime: "7 min read",
    content: `Frontend engineering sits at the intersection of logic, design, and user experience. That combination is what pulled me in—and what made me treat it as a serious craft instead of a box to check on the way to "full-stack."

## From tutorials to projects

For a while I measured progress by courses completed. I collected certificates and repo templates but hesitated on original ideas. Tutorials are useful—they remove setup friction and teach patterns—but they are not the finish line.

The shift happened when I started optimizing for shipped projects: a portfolio, DevMeet, DevLink, experiments that break in real ways. Painful bugs taught more than watching someone else fix them on video.

## Why the UI layer matters

It is easy to dismiss frontend as "just styling" when you are excited about databases and APIs. But the interface is what people actually use. Performance, accessibility, form feedback, and responsive layout directly affect whether software feels trustworthy.

I care about backend correctness and I care about whether a screen reader can navigate my form, whether tap targets work on a phone, and whether loading states feel honest. That is engineering, not decoration.

## Writing as a thinking tool

This blog exists because writing forces clarity. When I explain data fetching or project structure in prose, gaps in my understanding show up quickly. Posts are notes to future-me and signals to others about how I reason.

Public learning felt scary at first—what if I am wrong? Everyone is wrong sometimes. Documenting the version of understanding I have today is still valuable, especially when I update my view later.

## Design taste develops slowly

I will not claim to be a designer. I am learning spacing, type scale, contrast, and when to shut up visually. Studying sites I admire and reusing primitives (cards, containers, consistent headings) gets me most of the way without custom art direction on every project.

Serious frontend work includes caring how things look and feel, not only whether they compile.

## Community and consistency

Seeing other developers share builds, mistakes, and roadmaps normalized the messy middle. I contribute in small ways: shipping, writing, improving this site in public weeks.

Consistency beats intensity. An hour most days on a real repo outlasts a weekend binge followed by silence.

## How this portfolio fits

This site is the outward face of that shift: projects with context, posts with substance, an about page that is more than a headshot. It is not a checklist of technologies—it is evidence of how I work and what I am becoming.

## If you are deciding whether to go deep on frontend

You do not need to abandon backend interests. You need to give the UI layer the same respect: real projects, real users, real constraints. Tutorials open the door; what you build after walking through is what counts.

That is why I am learning frontend seriously—and why I expect still to be learning years from now.`,
  },
];

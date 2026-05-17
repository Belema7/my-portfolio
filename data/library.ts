import type { Book, Movie, Quote } from "@/types/content";

export const booksReading: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "Reading",
    note: "Learning how small consistent actions compound over time.",
    favoriteIdea: "Systems matter more than goals.",
  },
];

export const booksFinished: Book[] = [
  {
    title: "Deep Work",
    author: "Cal Newport",
    status: "Finished",
    note: "Focused work blocks produce better output than constant context switching.",
    favoriteIdea: "Depth is a competitive advantage.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    status: "Finished",
    note: "Financial decisions are driven more by behavior than spreadsheets.",
    favoriteIdea: "Wealth is what you do not see.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    status: "Finished",
    note: "Readable code is a form of respect for future maintainers—including yourself.",
    favoriteIdea: "Code is read far more than it is written.",
  },
];

export const quotes: Quote[] = [
  {
    quote: "Systems matter more than goals.",
    source: "James Clear, Atomic Habits",
    note: "I apply this to learning: daily practice beats vague ambition.",
  },
  {
    quote: "Depth is a competitive advantage.",
    source: "Cal Newport, Deep Work",
    note: "Reminds me to protect focus time when building complex features.",
  },
  {
    quote: "Code is read far more than it is written.",
    source: "Robert C. Martin, Clean Code",
    note: "Shapes how I name components and structure folders.",
  },
];

export const movies: Movie[] = [
  {
    title: "The Social Network",
    note: "Startup energy, obsession, speed, and ambition.",
    lesson: "Building matters more than talking.",
  },
  {
    title: "The Pursuit of Happyness",
    note: "Persistence through rejection and uncertainty.",
    lesson: "Consistency under pressure compounds into opportunity.",
  },
  {
    title: "Whiplash",
    note: "Discipline, standards, and the cost of excellence.",
    lesson: "Craft requires deliberate practice, not comfort.",
  },
];

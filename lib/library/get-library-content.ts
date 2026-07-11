import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Book, BookStatus, LibraryContent, LibraryEntry, Movie, Quote } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "library");
const BOOK_STATUSES = new Set<BookStatus>(["Reading", "Finished", "Want to Read"]);

function getMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getMdxFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [entryPath] : [];
  });
}

function hasStrings(data: Record<string, unknown>, fields: string[]): boolean {
  return fields.every((field) => typeof data[field] === "string" && data[field].trim().length > 0);
}

function orderOf(data: Record<string, unknown>): number {
  return typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER;
}

function parseEntry(data: Record<string, unknown>, filePath: string): LibraryEntry | undefined {
  const common = ["type", "slug", "note"];
  if (!hasStrings(data, common)) return invalid(filePath);

  if (data.type === "book" && hasStrings(data, ["title", "author", "status", "favoriteIdea"]) && BOOK_STATUSES.has(data.status as BookStatus)) {
    return { ...data, type: "book", order: orderOf(data) } as Book;
  }
  if (data.type === "quote" && hasStrings(data, ["quote", "source"])) {
    return { ...data, type: "quote", order: orderOf(data) } as Quote;
  }
  if (data.type === "movie" && hasStrings(data, ["title", "lesson"])) {
    return { ...data, type: "movie", order: orderOf(data) } as Movie;
  }
  return invalid(filePath);
}

function invalid(filePath: string): undefined {
  console.warn(`Skipping library entry with invalid frontmatter: ${filePath}`);
  return undefined;
}

export function getAllLibraryEntries(): LibraryEntry[] {
  return getMdxFiles(CONTENT_DIR).flatMap((filePath): LibraryEntry[] => {
    try {
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      const entry = parseEntry(data, filePath);
      return entry ? [entry] : [];
    } catch (error) {
      console.warn(`Skipping unreadable library entry: ${filePath}`, error);
      return [];
    }
  }).sort((a, b) => a.order - b.order);
}

export function getLibraryContent(): LibraryContent {
  const entries = getAllLibraryEntries();
  const books = entries.filter((entry): entry is Book => entry.type === "book");
  return {
    booksReading: books.filter(({ status }) => status === "Reading"),
    booksFinished: books.filter(({ status }) => status === "Finished"),
    quotes: entries.filter((entry): entry is Quote => entry.type === "quote"),
    movies: entries.filter((entry): entry is Movie => entry.type === "movie"),
  };
}

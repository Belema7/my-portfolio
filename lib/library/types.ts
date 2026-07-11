export type BookStatus = "Reading" | "Finished" | "Want to Read";

export type Book = {
  type: "book";
  slug: string;
  title: string;
  author: string;
  status: BookStatus;
  note: string;
  favoriteIdea: string;
  order: number;
};

export type Quote = {
  type: "quote";
  slug: string;
  quote: string;
  source: string;
  note: string;
  order: number;
};

export type Movie = {
  type: "movie";
  slug: string;
  title: string;
  note: string;
  lesson: string;
  order: number;
};

export type LibraryEntry = Book | Quote | Movie;

export type LibraryContent = {
  booksReading: Book[];
  booksFinished: Book[];
  quotes: Quote[];
  movies: Movie[];
};

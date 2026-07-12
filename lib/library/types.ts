export type Book = {
  type: "book";
  slug: string;
  title: string;
  author: string;
  order: number;
};

export type MediaCategory = "Movie" | "Series" | "Documentary";

export type Media = {
  type: "media";
  slug: string;
  title: string;
  category: MediaCategory;
  order: number;
};

export type LibraryEntry = Book | Media;

export type LibraryContent = {
  booksFinished: Book[];
  media: Media[];
};

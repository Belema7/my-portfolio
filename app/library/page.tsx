import { permanentRedirect } from "next/navigation";

type SearchParams = Promise<{ view?: string }>;

interface LibraryPageProps {
  searchParams: SearchParams;
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const { view } = await searchParams;
  permanentRedirect(view === "library" ? "/shelf" : view === "blog" ? "/writing" : "/learning");
}

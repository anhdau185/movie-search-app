import MovieGrid from "@/components/MovieGrid";
import { searchMovies } from "@/lib/api";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>;
}) {
  const { keyword } = await searchParams;

  if (!keyword) {
    return (
      <div className="p-6 text-gray-400">Please enter a keyword to search.</div>
    );
  }

  const data = await searchMovies(keyword);

  if (data.Response === "False") {
    return (
      <div className="px-6 py-20 text-center text-gray-400">
        <span>
          No movies found for <strong>{keyword}</strong>
        </span>
        <br />
        <span className="text-sm text-gray-500">{data.Error}</span>
      </div>
    );
  }

  return <MovieGrid movies={data.Search || []} />;
}

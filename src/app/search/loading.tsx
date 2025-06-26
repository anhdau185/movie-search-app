import MovieSkeleton from "@/components/search/MovieSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <MovieSkeleton key={i} />
      ))}
    </div>
  );
}

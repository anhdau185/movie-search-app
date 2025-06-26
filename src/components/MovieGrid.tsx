import MovieCard from "./MovieCard";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbID: string;
}

export default function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          type={movie.Type}
          imdbID={movie.imdbID}
        />
      ))}
    </div>
  );
}

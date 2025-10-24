import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import type { Movie } from "../../types";

interface MovieGalleryProps {
  movies: Movie[];
  readOnly?: boolean;
  emptyMessage?: string;
  onMovieClick?: (movie: Movie) => void;
}

export default function MovieGallery({
  movies,
  readOnly = false,
  emptyMessage = "Nenhum filme encontrado",
  onMovieClick,
}: MovieGalleryProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleClick = (movie: Movie) => {
    if (onMovieClick) {
      onMovieClick(movie);
    } else {
      setSelectedMovie(movie);
    }
  };

  if (!movies?.length)
    return (
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-400">{emptyMessage}</p>

        {!readOnly && (
          <p className="mt-2 text-sm text-gray-500">
            Use a barra de busca para encontrar seus filmes favoritos!
          </p>
        )}
      </div>
    );

  return (
    <>
      <section
        className={`
          grid animate-fadeIn grid-cols-1 gap-8 px-10 py-6
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
          xl:grid-cols-3 2xl:grid-cols-3
        `}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id || movie.tmdbId}
            style={{ animationDelay: `${index * 0.05}s` }}
            className="animate-slideUp"
          >
            <MovieCard
              id={movie.tmdbId ?? movie.id}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              overview={movie.overview ?? ""}
              release_date={movie.release_date ?? movie.releaseDate ?? ""}
              readOnly={readOnly}
              onClick={() => handleClick(movie)}
            />
          </div>
        ))}
      </section>

      {selectedMovie && !onMovieClick && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}


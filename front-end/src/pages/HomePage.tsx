import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGallery from "../components/movies/MovieGallery";
import type { Movie } from "../types";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className="p-6">
      <SearchBar setMovies={setMovies} />
      <MovieGallery movies={movies} />
    </div>
  );
}

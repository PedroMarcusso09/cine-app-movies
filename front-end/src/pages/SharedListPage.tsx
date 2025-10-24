import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import MovieModal from "../components/movies/MovieModal";
import MovieGallery from "../components/movies/MovieGallery";
import { handleApiError } from "../utils/handleApiError";
import type { Movie } from "../types";

export default function SharedListPage() {
  const { shareId } = useParams<{ shareId: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchSharedList = async () => {
      try {
        const res = await api.get<Movie[]>(`/favorites/shared/${shareId}`);
        setMovies(res.data);
      } catch (err) {
        handleApiError(err, "Erro ao carregar lista compartilhada 😕");
        setError("Erro ao carregar lista compartilhada");
      } finally {
        setLoading(false);
      }
    };

    fetchSharedList();
  }, [shareId]);

  if (loading)
    return <p className="p-6 text-center text-gray-600">Carregando lista...</p>;

  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="flex-grow px-8 py-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-red-600 drop-shadow-md">
          Lista Compartilhada
        </h2>

        <MovieGallery
          movies={movies}
          readOnly
          emptyMessage="Nenhum filme encontrado nesta lista."
          onMovieClick={setSelectedMovie}
        />
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

import { useState, type Dispatch, type SetStateAction } from "react";
import { api } from "../services/api";
import { handleApiError } from "../utils/handleApiError";
import type { Movie } from "../types";

interface SearchBarProps {
  setMovies: Dispatch<SetStateAction<Movie[]>>;
}

export default function SearchBar({ setMovies }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await api.get<Movie[]>("/movies/", { params: { query } });
      setMovies(res.data);
    } catch (error) {
      handleApiError(error, "Erro ao buscar filmes 🎬");
    }
  };

  return (
    <div className="mb-10 mt-10 flex justify-center">
      <div className="flex w-full max-w-xl shadow-lg">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar filme..."
          className="w-full rounded-l-md border border-gray-700 bg-[#1e293b] p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          onKeyDown={e => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="rounded-r-md bg-red-600 px-5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import type { Movie } from "../types";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api"
    : "https://cine-app-movies.onrender.com/api";

export const api = axios.create({ baseURL });

export const moviesService = {
  async search(query: string) {
    const { data } = await api.get<Movie[]>("/movies/", { params: { query } });
    return data;
  },
};

export const favoritesService = {
  async list() {
    const { data } = await api.get<Movie[]>("/favorites");
    return data;
  },

  async add(movie: Movie) {
    const payload = {
      tmdbId: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster: movie.poster,
      rating: movie.rating,
      releaseDate: movie.release_date,
    };
    const { data } = await api.post("/favorites", payload);
    return data;
  },

  async remove(id: number) {
    const { data } = await api.delete(`/favorites/${id}`);
    return data;
  },

  async share() {
    const { data } = await api.post<{ link: string }>("/favorites/share");
    return data;
  },
};

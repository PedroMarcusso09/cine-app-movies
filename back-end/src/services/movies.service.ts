import { moviesRepository } from "../repositories/movies.repository";
import { AppError } from "../errors/AppError";

export const moviesService = {
  async search(query: string) {
    if (!query?.trim()) {
      throw new AppError("O parâmetro 'query' é obrigatório.", 400);
    }

    try {
      const results = await moviesRepository.search(query);

      if (!results || results.length === 0) {
        throw new AppError("Nenhum filme encontrado para essa busca.", 404);
      }

      return results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: moviesRepository.imageUrl(movie.poster_path, "w500"),
        rating: movie.vote_average,
        release_date: movie.release_date,
      }));
    } catch (error: any) {
      if (error.isAxiosError) {
        throw new AppError(
          "Erro ao se comunicar com o serviço de filmes (TMDB).",
          error.response?.status || 502
        );
      }

      throw error;
    }
  },
};

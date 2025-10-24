import axios from "axios";

const TMDB_BASE = "https://api.themoviedb.org/3";

export const moviesRepository = {
  async search(query: string) {
    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
      throw new Error("TMDB_API_KEY não definido no .env");
    }

    const { data } = await axios.get(`${TMDB_BASE}/search/movie`, {
      params: {
        api_key: apiKey,
        query,
        language: "pt-BR",
        include_adult: false,
      },
    });

    return data.results as any[];
  },

  imageUrl(path?: string | null, size: "w154" | "w342" | "w500" | "original" = "w500") {
    return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
  },
};

import { useEffect, useState } from "react";
import { favoritesService } from "../services/api";
import type { Movie } from "../types";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [shareLink, setShareLink] = useState<string>("");

  async function load() {
    const data = (await favoritesService.list()) as Movie[];
    setFavorites(data);
  }

  async function add(movie: Movie) {
    await favoritesService.add(movie);
    await load();
  }

  async function remove(id: number) {
    await favoritesService.remove(id);
    await load();
  }

  async function share() {
    const { link } = await favoritesService.share();
    setShareLink(link);
  }

  useEffect(() => {
    load();
  }, []);

  return { favorites, add, remove, share, shareLink };
}

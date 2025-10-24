import { favoritesRepository } from "../repositories/favorites.repository";
import { randomUUID } from "crypto";
import { AppError } from "../errors/AppError";

export const favoritesService = {
  async list() {
    return favoritesRepository.findAll();
  },

  async add(data: any) {
    const existing = await favoritesRepository.findByTmdbId(data.tmdbId);
    if (existing) throw new AppError("Filme já está nos favoritos", 409);

    const formattedData = {
      ...data,
      releaseDate: data.release_date,
    };
    delete formattedData.release_date;

    return favoritesRepository.create(formattedData);
  },

  async remove(id: number) {
    try {
      return await favoritesRepository.delete(id);
    } catch {
      throw new AppError("Filme não encontrado nos favoritos", 404);
    }
  },

  async share() {
    const favorites = await favoritesRepository.findAll();
    if (favorites.length === 0) throw new AppError("Nenhum favorito para compartilhar", 400);

    const shareId = randomUUID();
    await favoritesRepository.createSharedList(shareId, favorites);
    const baseUrl =
      process.env.FRONTEND_URL || "http://localhost:5173";

    return {
      message: "Link gerado com sucesso!",
      link: `${baseUrl}/shared/${shareId}`,
    };
  },

  async getShared(shareId: string) {
    const list = await favoritesRepository.findSharedList(shareId);
    if (!list) throw new AppError("Lista compartilhada não encontrada", 404);
    return list;
  },
};

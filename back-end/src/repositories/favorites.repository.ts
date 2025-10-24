import { prisma } from "../config/prisma";

export const favoritesRepository = {
  async findAll() {
    return prisma.favorite.findMany({ orderBy: { createdAt: "desc" } });
  },

  async findByTmdbId(tmdbId: number) {
    return prisma.favorite.findFirst({ where: { tmdbId } });
  },

  async create(data: any) {
    return prisma.favorite.create({ data });
  },

  async delete(id: number) {
    return prisma.favorite.delete({ where: { id } });
  },

  async createSharedList(shareId: string, favorites: any[]) {
    await prisma.sharedList.create({
      data: {
        id: shareId,
        favorites: { connect: favorites.map(f => ({ id: f.id })) },
      },
    });
  },

  async findSharedList(shareId: string) {
    const sharedList = await prisma.sharedList.findUnique({
      where: { id: shareId },
      include: { favorites: true },
    });
    return sharedList?.favorites || null;
  },
};

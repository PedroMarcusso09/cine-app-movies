import { Request, Response, NextFunction } from "express";
import { favoritesService } from "../services/favorites.service";

export async function getFavorites(req: Request, res: Response, next: NextFunction) {
  try {
    const favorites = await favoritesService.list();
    res.json(favorites);
  } catch (error) {
    next(error);
  }
}

export async function addFavorite(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await favoritesService.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteFavorite(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await favoritesService.remove(id);
    res.json({ message: "Filme removido dos favoritos" });
  } catch (error) {
    next(error);
  }
}

export async function shareFavorites(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await favoritesService.share();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export const getSharedList = async (req: Request, res: Response) => {
  const { shareId } = req.params;

  if (!shareId) {
    return res.status(400).json({ error: "ID de compartilhamento não informado." });
  }

  const list = await favoritesService.getShared(shareId);
  return res.json(list);
};

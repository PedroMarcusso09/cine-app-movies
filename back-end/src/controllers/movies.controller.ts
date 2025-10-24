import { Request, Response, NextFunction } from "express";
import { moviesService } from "../services/movies.service";

export async function searchMovies(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.query.query as string;
    if (!query) return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });
    const movies = await moviesService.search(query);
    res.json(movies);
  } catch (error) {
    next(error);
  }
}

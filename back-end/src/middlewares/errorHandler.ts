import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  console.error("Erro capturado:", err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      details: err.details || null,
    });
  }

  if (err.isAxiosError) {
    return res.status(err.response?.status || 500).json({
      error: err.response?.data?.status_message || "Erro ao comunicar com o serviço externo (TMDB)",
    });
  }

  return res.status(500).json({
    error: "Erro interno no servidor",
  });
}

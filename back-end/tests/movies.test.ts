import request from "supertest";
import app from "../src/index";
import { moviesService } from "../src/services/movies.service";
import { jest, describe, it, expect } from "@jest/globals";

const mockMovies = [
  { id: 1, title: "Interestelar", rating: 8.6 },
  { id: 2, title: "Inception", rating: 8.8 },
] as unknown as Awaited<ReturnType<typeof moviesService.search>>;

jest.spyOn(moviesService, "search").mockResolvedValue(mockMovies);

describe("🎥 API de Filmes — Teste de busca", () => {
  it("Deve retornar uma lista de filmes ao buscar por um termo", async () => {
    const res = await request(app).get("/api/movies?query=interestelar");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("title");
    expect(moviesService.search).toHaveBeenCalledWith("interestelar");
  });

  it("Deve retornar erro 400 se o parâmetro de busca não for enviado", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.statusCode).toBe(400);
  });
});

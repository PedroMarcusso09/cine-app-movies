import { describe, expect, it, beforeEach, afterAll } from '@jest/globals';
import request from "supertest";
import app from "../src/index";
import { prisma } from "../src/config/prisma";

const BASE_URL = "/api/favorites";

const movie = {
  tmdbId: 1,
  title: "Interestelar",
  overview: "Um épico de ficção científica sobre viagens no tempo e buracos de minhoca.",
  poster: "https://image.tmdb.org/t/p/original/interestelar.jpg",
  rating: 8.6,
  release_date: "2014-11-07",
};

describe("🎬 API de Favoritos — Testes completos", () => {
  beforeEach(async () => {
    await prisma.sharedList.deleteMany({});
    await prisma.favorite.deleteMany({});
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Deve adicionar um novo filme aos favoritos", async () => {
    const res = await request(app).post(BASE_URL).send(movie);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Interestelar");
  });

  it("Não deve permitir adicionar o mesmo filme duas vezes", async () => {
    await request(app).post(BASE_URL).send(movie);
    const res = await request(app).post(BASE_URL).send(movie);
    expect(res.statusCode).toBe(409);
    expect(res.body).toHaveProperty("error", "Filme já está nos favoritos");
  });

  it("Deve listar todos os filmes favoritos", async () => {
    await request(app).post(BASE_URL).send(movie);
    const res = await request(app).get(BASE_URL);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "Interestelar" })])
    );
  });

  it("Deve retornar lista vazia se não houver favoritos", async () => {
    const res = await request(app).get(BASE_URL);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("Deve deletar um filme favorito existente", async () => {
    const created = await request(app).post(BASE_URL).send(movie);
    const res = await request(app).delete(`${BASE_URL}/${created.body.id}`);
    expect([200, 204]).toContain(res.statusCode);
  });

  it("Deve retornar erro ao deletar um filme inexistente", async () => {
    const res = await request(app).delete(`${BASE_URL}/999`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Filme não encontrado nos favoritos");
  });

  it("Deve retornar lista compartilhada com shareId válido", async () => {
    await request(app).post(BASE_URL).send(movie);
    const shareRes = await request(app).post(`${BASE_URL}/share`);
    expect(shareRes.statusCode).toBe(201);
    expect(shareRes.body).toHaveProperty("link");

    const shareId = shareRes.body.link.split("/").pop();
    const listRes = await request(app).get(`${BASE_URL}/shared/${shareId}`);
    expect(listRes.statusCode).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);
  });

  it("Deve retornar erro 404 para shareId inexistente", async () => {
    const res = await request(app).get(`${BASE_URL}/shared/invalido`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Lista compartilhada não encontrada");
  });
});

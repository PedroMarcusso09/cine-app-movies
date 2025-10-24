import { render, screen } from "@testing-library/react";
import MovieGallery from "../components/movies/MovieGallery";
import { describe, expect, it } from "vitest";

describe("🎞 MovieGallery", () => {
  it("mostra lista de filmes", () => {
    const movies = [
      {
        id: 1,
        title: "Interestelar",
        poster: "poster1.jpg",
        rating: 8.6,
        overview: "Uma missão espacial para salvar a humanidade.",
        release_date: "2014-11-07",
      },
      {
        id: 2,
        title: "Inception",
        poster: "poster2.jpg",
        rating: 8.8,
        overview: "Um ladrão que invade sonhos para roubar segredos.",
        release_date: "2010-07-16",
      },
    ];
    render(<MovieGallery movies={movies} />);
    expect(screen.getByText("Interestelar")).toBeInTheDocument();
    expect(screen.getByText("Inception")).toBeInTheDocument();
  });

  it("mostra mensagem quando não há filmes", () => {
    render(<MovieGallery movies={[]} />);
    expect(screen.getByText(/nenhum filme encontrado/i)).toBeInTheDocument();
  });
});

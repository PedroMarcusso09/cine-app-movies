import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MovieCard from "../components/movies/MovieCard";

vi.mock("react-hot-toast", () => {
  const toast = {
    success: vi.fn(),
    error: vi.fn(),
  };
  return {
    __esModule: true,
    default: toast,
  };
});

vi.mock("react-hot-toast", () => ({
  success: vi.fn(),
}));

const movie = {
  id: 1,
  title: "Interestelar",
  poster: "poster.jpg",
  rating: 8.6,
  overview: "Um épico de ficção científica",
  release_date: "2014-11-07",
};

describe("🎬 MovieCard", () => {
  it("renderiza título e imagem", () => {
    render(<MovieCard {...movie} />);
    expect(screen.getByText("Interestelar")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "poster.jpg");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import MovieModal from "../components/movies/MovieModal";
import { describe, expect, it, vi } from "vitest";

const mockMovie = {
  id: 1,
  title: "Interestelar",
  poster: "poster.jpg",
  rating: 8.6,
  overview: "Um épico de ficção científica",
  release_date: "2014-11-07",
};

describe("💬 Modal", () => {
  it("abre e fecha corretamente", () => {
    const handleClose = vi.fn();
    render(<MovieModal movie={mockMovie} onClose={handleClose} />);

    expect(screen.getByTestId("modal")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: "×" });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });
});

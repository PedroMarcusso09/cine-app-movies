import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Mock } from "vitest";
import FavoritesPage from "../pages/FavoritesPage";
import { favoritesService } from "../services/api";

vi.mock("../services/api", () => ({
  favoritesService: {
    list: vi.fn(),
    remove: vi.fn(),
  },
}));

describe("⭐ FavoritesPage", () => {
  it("lista favoritos", async () => {
    (favoritesService.list as unknown as Mock).mockResolvedValueOnce([
      { id: 1, title: "Interestelar", poster: "poster.jpg", rating: 8.6 },
    ]);

    render(<FavoritesPage />);
    await waitFor(() => {
      expect(screen.getByText("Interestelar")).toBeInTheDocument();
    });
  });

  it("remove favorito ao clicar em 'Remover'", async () => {
    (favoritesService.list as unknown as Mock).mockResolvedValueOnce([
      { id: 1, title: "Interestelar", poster: "poster.jpg", rating: 8.6 },
    ]);
    (favoritesService.remove as unknown as Mock).mockResolvedValueOnce({});

    render(<FavoritesPage />);

    await waitFor(async () => {
      const btn = screen.getByRole("button", { name: /remover/i });
      await userEvent.click(btn);
      expect(favoritesService.remove as unknown as Mock).toHaveBeenCalled();
    });
  });
});

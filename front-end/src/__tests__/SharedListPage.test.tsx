import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, type Mock } from "vitest";
import SharedListPage from "../pages/SharedListPage";
import { api } from "../services/api";

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn(),
  },
  favoritesService: {
    list: vi.fn(),
  },
}));

describe("📄 SharedListPage", () => {
  it("renderiza lista compartilhada corretamente", async () => {
    (api.get as Mock).mockResolvedValueOnce({
      data: [
        { id: 1, title: "Interestelar", poster: "poster.jpg", rating: 8.6 },
      ],
    });

    render(<SharedListPage />);

    await waitFor(() => {
      expect(screen.getByText("Interestelar")).toBeInTheDocument();
    });
  });

  it("exibe mensagem de erro se API falhar", async () => {
    (api.get as Mock).mockRejectedValueOnce(new Error("Erro na API"));

    render(<SharedListPage />);

    await waitFor(() => {
      expect(screen.getByText(/erro ao carregar/i)).toBeInTheDocument();
    });
  });
});

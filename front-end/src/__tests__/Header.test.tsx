import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";
import { describe, expect, it } from "vitest";

describe("🧭 Header", () => {
  it("renderiza links corretamente", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/favoritos/i)).toBeInTheDocument();
  });
});

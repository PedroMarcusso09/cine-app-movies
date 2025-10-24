import "@testing-library/jest-dom";
import { afterAll, beforeAll, vi } from "vitest";
import axios from "axios";

vi.mock("axios");

(axios.create as unknown as any).mockReturnValue({
  get: vi.fn().mockResolvedValue({ data: [] }),
  post: vi.fn().mockResolvedValue({ data: {} }),
  put: vi.fn().mockResolvedValue({ data: {} }),
  delete: vi.fn().mockResolvedValue({ data: {} }),
});

Object.defineProperty(globalThis, "console", {
  value: {
    ...console,
    log: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
  writable: true,
});

beforeAll(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
  vi.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});
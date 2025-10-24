import { vi } from "vitest";

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

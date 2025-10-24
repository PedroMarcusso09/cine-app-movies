import { prisma } from "../src/config/prisma";
import { server } from "../src/index";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(async () => {
  await prisma.$disconnect();
  server.close(); 
});

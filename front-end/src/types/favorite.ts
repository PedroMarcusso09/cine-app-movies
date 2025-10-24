import type { Movie } from "./movie";

export interface Favorite extends Movie {
  addedAt?: string;
  shareId?: string;
  userId?: number;
  createdAt?: Date;
}

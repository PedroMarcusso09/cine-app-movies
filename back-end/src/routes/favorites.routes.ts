import { Router } from "express";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
  shareFavorites,
  getSharedList,
} from "../controllers/favorites.controller";

const router = Router();

router.get("/", getFavorites);
router.post("/", addFavorite);
router.delete("/:id", deleteFavorite);
router.post("/share", shareFavorites);
router.get("/shared/:shareId", getSharedList);

export default router;

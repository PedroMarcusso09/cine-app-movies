import { Router } from "express";
import { searchMovies } from "../controllers/movies.controller";

const router = Router();
router.get("/", searchMovies);
export default router;

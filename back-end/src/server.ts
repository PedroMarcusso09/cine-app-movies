import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config({ quiet: true });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

app.use(errorHandler);

export default app;

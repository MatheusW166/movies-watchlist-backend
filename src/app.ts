import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import cors from "cors";
import movieRouter from "@/routes/movie.routes";
import { errorMiddlewares } from "@/middlewares";

const dotenvConfig = dotenv.config();
dotenvExpand.expand(dotenvConfig);

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK"))
  .use("/movies", movieRouter)
  .use(errorMiddlewares.handle);

export default app;

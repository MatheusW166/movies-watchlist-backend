import express from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import cors from "cors";

const dotenvConfig = dotenv.config();
dotenvExpand.expand(dotenvConfig);

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK"));

export default app;

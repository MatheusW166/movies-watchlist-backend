import { Router } from "express";
import movieControllers from "@/controllers/movie";
import movieSchemas from "@/schemas/movie";
import { schemaMiddlewares } from "@/middlewares";

const movieRouter = Router();

movieRouter
  .post("/", schemaMiddlewares.validate(movieSchemas.create), movieControllers.create)
  .delete("/:id", movieControllers.deleteMovie)
  .get("/search", movieControllers.findMany);

export default movieRouter;

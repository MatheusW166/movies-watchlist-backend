import { Router } from "express";
import genericSchemas from "../schemas";
import movieControllers from "@/controllers/movie";
import movieSchemas from "@/schemas/movie";
import { schemaMiddlewares } from "@/middlewares";

const movieRouter = Router();

const { validateBody, validateParams } = schemaMiddlewares;

movieRouter
  .post("/",
    validateBody(movieSchemas.create),
    movieControllers.create,
  )
  .put("/:id",
    validateParams(genericSchemas.id),
    validateBody(movieSchemas.update),
    movieControllers.update,
  )
  .delete("/:id",
    validateParams(genericSchemas.id),
    movieControllers.deleteMovie,
  )
  .get("/search", movieControllers.findMany);

export default movieRouter;

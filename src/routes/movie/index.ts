import { Router } from "express";
import genericSchemas, { movieSchemas } from "@/schemas";
import { movieControllers } from "@/controllers";
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
	.get("/", movieControllers.findAll)
	.get("/search", movieControllers.findManyByTitle);

export { movieRouter };

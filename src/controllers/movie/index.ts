import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { AuthRequest } from "@/controllers";
import { movieServices } from "@/services";
import { MovieCreateDTO, MovieUpdateDTO } from "@/dto";

async function create(req: Request, res: Response): Promise<void> {
	const movie = req.body as MovieCreateDTO;
	const created = await movieServices.create(movie);
	res.status(httpStatus.CREATED).send(created);
}

async function update(req: AuthRequest, res: Response): Promise<void> {
	const { id } = req.params;
	const movie = req.body as MovieUpdateDTO;
	const updated = await movieServices.update(id, movie);
	res.status(httpStatus.ACCEPTED).send(updated);
}

async function deleteMovie(req: AuthRequest, res: Response): Promise<void> {
	const { id } = req.params;
	await movieServices.deleteById(id);
	res.sendStatus(httpStatus.NO_CONTENT);
}

async function findManyByTitle(req: Request, res: Response): Promise<void> {
	const { title } = req.query;
	if (title && typeof title !== "string") {
		res.status(httpStatus.UNPROCESSABLE_ENTITY).send("title must be a string");
		return;
	}
	if (!title) {
		res.send(await movieServices.findAll());
		return;
	}
	res.send(await movieServices.findManyByTitle(title as string));
}

async function findAll(_req: Request, res: Response): Promise<void> {
	res.send(await movieServices.findAll());
}

export const movieControllers = {
	create,
	deleteMovie,
	findManyByTitle,
	update,
	findAll
};

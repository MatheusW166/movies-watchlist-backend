import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { RequestWithId } from "@/controllers/types";
import movieServices, { Movie, MovieUpdate } from "@/services/movie";

async function create(req: Request, res: Response): Promise<void> {
  const movie = req.body as Movie;
  const created = await movieServices.create(movie);
  res.status(httpStatus.CREATED).send(created);
}

async function update(req: RequestWithId, res: Response): Promise<void> {
  const { id } = req.params;
  const movie = req.body as MovieUpdate;
  const updated = await movieServices.update(id, movie);
  res.status(httpStatus.ACCEPTED).send(updated);
}

async function deleteMovie(req: RequestWithId, res: Response): Promise<void> {
  const { id } = req.params;
  await movieServices.deleteById(id);
  res.sendStatus(httpStatus.NO_CONTENT);
}

async function findMany(req: Request, res: Response): Promise<void> {
  const { title } = req.query;

  if (title && typeof title !== "string") {
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send("title must be a string");
    return;
  }

  let results = [];

  if (!title) {
    results = await movieServices.findAll();
    res.send(results);
    return;
  }

  results = await movieServices.findManyByTitle(title as string);
  res.send(results);
}

const movieControllers = {
  create,
  deleteMovie,
  findMany,
  update
};

export default movieControllers;

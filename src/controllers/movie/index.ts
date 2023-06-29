import { Request, Response } from "express";
import movieServices, { Movie } from "@/services/movie";

async function create(req: Request, res: Response): Promise<void> {
  const movie = req.body as Movie;
  const created = await movieServices.create(movie);
  res.status(201).send(created);
}

async function deleteMovie(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    res.status(422).send("id must be a number");
    return;
  }

  await movieServices.deleteById(idNumber);
  res.sendStatus(204);
}

async function findMany(req: Request, res: Response): Promise<void> {
  const { title } = req.query;

  if (title && typeof title !== "string") {
    res.status(422).send("title must be a string");
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
  findMany
};

export default movieControllers;

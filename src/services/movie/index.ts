import { Movie, MovieCreateResult, MovieUpdate } from "./types";
import { ConflictError, NotFoundError } from "@/errors";
import movieRepository from "@/repositories/movie";

async function create(movie: Movie): Promise<MovieCreateResult> {
  const movieFound = await movieRepository.findFirstByTitle(movie.title);

  if (movieFound !== null) {
    throw new ConflictError(["this movie already exists"]);
  }

  return await movieRepository.create(movie);
}

async function deleteById(id: number): Promise<void> {
  const movieFound = await movieRepository.findById(id);

  if (movieFound === null) {
    throw new NotFoundError(["movie not found"]);
  }

  await movieRepository.deleteById(id);
}

async function update(id: number, movie: MovieUpdate): Promise<MovieCreateResult> {
  const movieFound = await movieRepository.findById(id);

  if (movieFound === null) {
    throw new NotFoundError(["movie not found"]);
  }

  return await movieRepository.update(id, movie);
}

async function findManyByTitle(title: string): Promise<MovieCreateResult[]> {
  return await movieRepository.findManyByTitle(title);
}

async function findAll(): Promise<MovieCreateResult[]> {
  return await movieRepository.findAll();
}

const movieServices = {
  create,
  deleteById,
  findManyByTitle,
  findAll,
  update
};


export * from "./types";
export default movieServices;

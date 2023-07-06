import { ConflictError, NotFoundError } from "@/errors";
import { movieRepository } from "@/repositories";
import { Movie, MovieCreateDTO, MovieUpdateDTO } from "@/dto";

async function create(movie: MovieCreateDTO): Promise<Movie> {
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

async function update(id: number, movie: MovieUpdateDTO): Promise<Movie> {
	const movieFound = await movieRepository.findById(id);

	if (movieFound === null) {
		throw new NotFoundError(["movie not found"]);
	}

	return await movieRepository.update(id, movie);
}

async function findManyByTitle(title: string): Promise<Movie[]> {
	return await movieRepository.findManyByTitle(title);
}

async function findAll(): Promise<Movie[]> {
	return await movieRepository.findAll();
}

export const movieServices = {
	create,
	deleteById,
	findManyByTitle,
	findAll,
	update
};

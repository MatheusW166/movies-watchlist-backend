import { ConflictError, NotFoundError } from "@/errors";
import { movieRepository } from "@/repositories";
import { MovieCreateDTO, MovieUpdateDTO } from "@/dto";
import { Movie } from "@/entities";
import { exclude } from "@/utils";

async function create(movie: MovieCreateDTO): Promise<Movie> {
	const movieFound = await movieRepository.findFirstByTitle(movie.title);

	if (movieFound !== null) {
		throw new ConflictError(["this movie already exists"]);
	}

	return movieRepository.create(exclude(movie, "genres"), movie.genres?.map((name) => ({ name })));
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

	return movieRepository.update(id, exclude(movie, "genres"), movie.genres?.map((name) => ({ name })));
}

async function findManyByTitle(title: string): Promise<Movie[]> {
	return movieRepository.findManyByTitle(title);
}

async function findAll(): Promise<Movie[]> {
	return movieRepository.findAll();
}

export const movieServices = {
	create,
	deleteById,
	findManyByTitle,
	findAll,
	update
};

import includeDefault from "./include.default";
import { prisma } from "@/config";
import { GenreCreateParams, GenreUpdateParams, MovieCreateParams, MovieUpdateParams } from "@/dto";
import { Movie } from "@/entities";

async function create(movie: MovieCreateParams, genres?: GenreCreateParams[]): Promise<Movie> {
	return prisma.movie.create({
		data: {
			...movie,
			genres: { connect: genres },
		},
		include: includeDefault,
	});
}

async function deleteById(id: number): Promise<void> {
	await prisma.movie.delete({
		where: { id },
		include: includeDefault
	});
}

async function update(id: number, movie: MovieUpdateParams, genres?: GenreUpdateParams[]): Promise<Movie> {
	return prisma.movie.update({
		where: { id },
		data: {
			...movie,
			genres: { set: genres }
		},
		include: includeDefault
	});
}

async function findById(id: number): Promise<Movie | null> {
	return prisma.movie.findUnique({
		where: { id },
		include: includeDefault
	});
}

async function findAll(): Promise<Movie[]> {
	return prisma.movie.findMany({ include: includeDefault });
}

async function findFirstByTitle(title: string): Promise<Movie | null> {
	return prisma.movie.findFirst({
		where: {
			title: {
				equals: title,
				mode: "insensitive"
			}
		},
		include: includeDefault
	});
}

async function findManyByTitle(title: string): Promise<Movie[]> {
	return prisma.movie.findMany({
		where: {
			title: {
				contains: title,
				mode: "insensitive"
			}
		},
		include: includeDefault
	});
}

export const movieRepository = {
	create,
	deleteById,
	findManyByTitle,
	findFirstByTitle,
	findById,
	findAll,
	update
};


import includeDefault from "./include.default";
import { prisma } from "@/config";
import { GenreCreateParams, GenreUpdateParams, MovieCreateParams, MovieUpdateParams } from "@/dto";
import { Movie } from "@/entities";

async function create(movie: MovieCreateParams, genres?: GenreCreateParams[]) {
	return prisma.movie.create({
		data: {
			...movie,
			genres: { connect: genres },
		},
		include: includeDefault,
	}) as Promise<Movie>;
}

async function deleteById(id: number) {
	await prisma.movie.delete({
		where: { id },
		include: includeDefault
	});
}

async function update(id: number, movie: MovieUpdateParams, genres?: GenreUpdateParams[]) {
	return prisma.movie.update({
		where: { id },
		data: {
			...movie,
			genres: { set: genres }
		},
		include: includeDefault
	}) as Promise<Movie>;
}

async function findById(id: number) {
	return prisma.movie.findUnique({
		where: { id },
		include: includeDefault
	}) as Promise<Movie | null>;
}

async function findAll() {
	return prisma.movie.findMany({ include: includeDefault }) as Promise<Movie[]>;
}

async function findFirstByTitle(title: string) {
	return prisma.movie.findFirst({
		where: {
			title: {
				equals: title,
				mode: "insensitive"
			}
		},
		include: includeDefault
	}) as Promise<Movie | null>;
}

async function findManyByTitle(title: string) {
	return prisma.movie.findMany({
		where: {
			title: {
				contains: title,
				mode: "insensitive"
			}
		},
		include: includeDefault
	}) as Promise<Movie[]>;
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


import { prisma } from "@/config";
import { Movie, MovieCreateDTO, MovieUpdateDTO } from "@/dto";

async function create(movie: MovieCreateDTO): Promise<Movie> {
	return await prisma.movie.create({
		data: movie,
	});
}

async function deleteById(id: number): Promise<void> {
	await prisma.movie.delete({
		where: { id }
	});
}

async function update(id: number, movie: MovieUpdateDTO): Promise<Movie> {
	return await prisma.movie.update({
		where: { id },
		data: movie
	});
}

async function findById(id: number): Promise<Movie | null> {
	return await prisma.movie.findUnique({
		where: { id }
	});
}

async function findAll(): Promise<Movie[]> {
	return await prisma.movie.findMany();
}

async function findFirstByTitle(title: string): Promise<Movie | null> {
	return await prisma.movie.findFirst({
		where: {
			title: {
				equals: title,
				mode: "insensitive"
			}
		}
	});
}

async function findManyByTitle(title: string): Promise<Movie[]> {
	return await prisma.movie.findMany({
		where: {
			title: {
				contains: title,
				mode: "insensitive"
			}
		}
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


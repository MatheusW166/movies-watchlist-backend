import { Movie as MoviePrisma } from "@prisma/client";

export type Movie = {
	id: number;
	title: string;
	releaseDate: Date;
	imdbScore: number;
	plot: string;
	genre: string;
	poster: string;
} & MoviePrisma;

export type MovieCreateDTO = Omit<Movie, "id">;
export type MovieUpdateDTO = Partial<MovieCreateDTO>;

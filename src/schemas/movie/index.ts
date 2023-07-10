import Joi from "joi";
import { MovieCreateDTO, MovieUpdateDTO } from "@/dto";

// TODO: fix schemas

const create = Joi.object<MovieCreateDTO>({
	title: Joi.string().required(),
	genres: Joi.array<number>().min(1).optional(),
	imdbScore: Joi.number().optional(),
	plot: Joi.string().optional(),
	poster: Joi.string().uri().optional(),
	releaseDate: Joi.date().optional(),
}).min(6);

const update = Joi.object<MovieUpdateDTO>({
	title: Joi.string().optional(),
	genres: Joi.array<number>().min(1).optional(),
	imdbScore: Joi.number().optional(),
	plot: Joi.string().optional(),
	poster: Joi.string().uri().optional(),
	releaseDate: Joi.date().optional(),
}).min(1);

export const movieSchemas = { create, update };

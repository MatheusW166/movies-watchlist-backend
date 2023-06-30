import Joi from "joi";
import { Movie } from "@/services/movie";



const create = Joi.object<Movie>({
  title: Joi.string().required(),
  genre: Joi.string().required(),
  imdbScore: Joi.number().required(),
  plot: Joi.string().required(),
  poster: Joi.string().uri().required(),
  releaseDate: Joi.date().required(),
});

const update = Joi.object<Movie>({
  title: Joi.string().optional(),
  genre: Joi.string().optional(),
  imdbScore: Joi.number().optional(),
  plot: Joi.string().optional(),
  poster: Joi.string().uri().optional(),
  releaseDate: Joi.date().optional(),
}).min(1);

const movieSchemas = { create, update };

export default movieSchemas;

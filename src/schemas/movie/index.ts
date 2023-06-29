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

const movieSchemas = { create };

export default movieSchemas;

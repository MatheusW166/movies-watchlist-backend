import { Genre } from "@/entities";

export type GenreCreateDTO = Pick<Genre, "name">;
export type GenreUpdateDTO = Partial<GenreCreateDTO>;

export type GenreCreateParams = GenreCreateDTO;
export type GenreUpdateParams = GenreUpdateDTO;

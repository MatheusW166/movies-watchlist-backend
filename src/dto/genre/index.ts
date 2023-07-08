import { BaseEntity, Genre } from "@/entities";

export type GenreCreateDTO = Omit<Genre, keyof BaseEntity | "movies">;
export type GenreUpdateDTO = Partial<GenreCreateDTO>;

export type GenreCreateParams = GenreCreateDTO;
export type GenreUpdateParams = GenreUpdateDTO;

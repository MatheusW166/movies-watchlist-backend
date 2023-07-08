import { BaseEntity, Movie } from "@/entities";

export type MovieCreateDTO = Omit<Movie, keyof BaseEntity | "rates" | "wantsWatch" | "genres"> & { genres?: string[] };
export type MovieUpdateDTO = Partial<MovieCreateDTO>;

export type MovieCreateParams = Omit<MovieCreateDTO, "genres">;
export type MovieUpdateParams = Partial<MovieCreateParams>;

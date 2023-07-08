import { BaseEntity, Movie, User } from "@/entities";

export type WantsWatch = {
	user?: User;
	movie?: Movie;
	userId: number;
	movieId: number;
} & BaseEntity;

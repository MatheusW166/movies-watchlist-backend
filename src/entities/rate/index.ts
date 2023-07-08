import { BaseEntity, Movie, User } from "@/entities";

export type Rate = {
	user?: User;
	movie?: Movie;
	userId: number;
	movieId: number;
	watchedAt: Date;
	recommends: boolean;
	personalRate: number;
	personalAnalysis?: string;
} & BaseEntity;

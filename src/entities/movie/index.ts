import { BaseEntity, Genre, Rate, WantsWatch } from "@/entities";

export type Movie = {
	id: number;
	genres?: Genre[];
	rates?: Rate[];
	wantsWatch?: WantsWatch[];
	title: string;
	releaseDate?: Date;
	imdbScore?: number;
	plot?: string;
	poster?: string;
} & BaseEntity;


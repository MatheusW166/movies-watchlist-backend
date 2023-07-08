import { BaseEntity, Movie } from "@/entities";

export type Genre = {
	movies?: Movie[];
	name: string;
} & Partial<BaseEntity>;

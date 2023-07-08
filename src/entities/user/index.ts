import { BaseEntity, Rate, Session, WantsWatch } from "@/entities";

export type User = {
	id: number;
	sessions?: Session[];
	rates?: Rate[];
	wantsWatch?: WantsWatch[];
	name: string;
	nickName: string;
	email: string;
	password: string;
	photoUrl?: string;
} & BaseEntity;

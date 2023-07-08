import { BaseEntity, User } from "@/entities";

export type Session = {
	id: number;
	user?: User;
	userId: number;
	expiresAt: Date;
} & BaseEntity;

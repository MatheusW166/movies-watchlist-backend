import { Request } from "express";

export type AuthRequest = Request & { params: { id: number } };

import { Request } from "express";

export type RequestWithId = Request & { params: { id: number } };

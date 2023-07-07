import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { UnknownError } from "@/errors";
import { convertErrorsArrayToObject, isDefaultError } from "@/utils";

function handle(error: UnknownError, _req: Request, res: Response, next: NextFunction): void {
	if (!error) {
		next();
		return;
	}

	if (isDefaultError(error)) {
		res.status(error.status).send(convertErrorsArrayToObject(error.details));
		return;
	}

	res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}

export const errorMiddlewares = { handle };

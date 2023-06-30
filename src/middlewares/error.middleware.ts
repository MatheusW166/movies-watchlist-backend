import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { DefaultError } from "@/errors";

type UnknownError = DefaultError | Error;

function isDefaultError(error: UnknownError): error is DefaultError {
  return (error as DefaultError).status !== undefined;
}

function handle(error: UnknownError, _req: Request, res: Response, next: NextFunction): void {
  if (!error) {
    next();
    return;
  }

  if (isDefaultError(error)) {
    res.status(error.status).send(error.details);
    return;
  }

  console.log(error.message);

  res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}

export const errorMiddlewares = { handle };

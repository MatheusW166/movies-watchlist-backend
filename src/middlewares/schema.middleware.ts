import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { Schema } from "joi";

type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => void;

function validateQuery(schema: Schema): MiddlewareFn {
  return validate(schema, "query");
}

function validateParams(schema: Schema): MiddlewareFn {
  return validate(schema, "params");
}

function validateBody(schema: Schema): MiddlewareFn {
  return validate(schema, "body");
}

function validate(schema: Schema, field: "body" | "params" | "query"): MiddlewareFn {
  return (req, res, next) => {

    const { error, value } = schema.validate(req[field], { abortEarly: false });

    if (error && error.details.length > 0) {
      res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.details.map((detail) => detail.message));
      return;
    }

    req[field] = value;
    next();
  };
}

export const schemaMiddlewares = {
  validateBody,
  validateParams,
  validateQuery
};

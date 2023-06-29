import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => void;

function validate<T>(schema: ObjectSchema<T>): MiddlewareFn {
  return (req, res, next) => {

    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error && error.details.length > 0) {
      res.status(422).send(error.details.map((detail) => detail.message));
      return;
    }

    req.body = value;
    next();
  };
}

export const schemaMiddlewares = { validate };

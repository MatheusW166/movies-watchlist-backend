import httpStatus from "http-status-codes";

export type DefaultError = {
  details: string[];
  status: number;
}

export class NotFoundError implements DefaultError {
  constructor(readonly details: string[], readonly status = httpStatus.NOT_FOUND) { }
}

export class ConflictError implements DefaultError {
  constructor(readonly details: string[], readonly status = httpStatus.CONFLICT) { }
}

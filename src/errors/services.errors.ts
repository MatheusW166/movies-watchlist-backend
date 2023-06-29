export type DefaultError = {
  details: string[];
  status: number;
}

export class NotFoundError implements DefaultError {
  constructor(readonly details: string[], readonly status = 404) { }
}

export class ConflictError implements DefaultError {
  constructor(readonly details: string[], readonly status = 401) { }
}

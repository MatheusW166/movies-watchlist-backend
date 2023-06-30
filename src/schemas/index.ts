import Joi from "joi";

const genericSchemas = { id: Joi.object<{ id: number }>({ id: Joi.number().min(1).required() }) };

export default genericSchemas;

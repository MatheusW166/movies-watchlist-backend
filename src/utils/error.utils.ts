import { ValidationErrorItem } from "joi";
import { DefaultError, ErrorKeyValue, ErrorResponse, UnknownError } from "@/errors";

function isDefaultError(error: UnknownError): error is DefaultError {
	return (error as DefaultError).status !== undefined;
}

function convertErrorsArrayToObject(details: string[]): ErrorResponse {
	return { error: details };
}

function mapErrorDetailsFromJoi(details: ValidationErrorItem[]): ErrorResponse {
	const errors: ErrorKeyValue = {};

	details.forEach((detail) => {
		const key =
			detail.context?.key ??
			detail.context?.label ??
			detail.type;
		errors[key] = detail.message;
	});

	return { error: errors };
}

export { convertErrorsArrayToObject, isDefaultError, mapErrorDetailsFromJoi };

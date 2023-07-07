export type ErrorKeyValue = { [key: string]: string }

export type ErrorResponse = {
	error: string[] | ErrorKeyValue;
}

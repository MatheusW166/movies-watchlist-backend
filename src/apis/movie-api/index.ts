import { client } from "./client.api";
import { BaseResponse } from "./types";

async function getGenres(): Promise<string[]> {
	const response = await client.get("/titles/utils/genres");
	return (response.data as BaseResponse<string>).results.filter((value) => value);
}

export const movieApi = { getGenres };

import { client } from "./client.api";

type BaseResponse<T> = { results: T[]; }
type GetGenresResponse = BaseResponse<string | null>;

async function getGenres(): Promise<string[]> {
	const response = await client.get("/titles/utils/genres");
	return (response.data as GetGenresResponse).results.filter((value) => value);
}

export const rapidApi = { getGenres };
